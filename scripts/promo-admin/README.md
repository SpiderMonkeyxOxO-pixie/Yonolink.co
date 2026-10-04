# Promo-code admin — code.yonolink.co

A dependency-free Node server (`server.js`, Node 18+) that edits the promo-code
file the Yonolink.co pages fetch in the browser on every load
(`/promo-codes.txt`). Single admin, no sign-up. Saves are live instantly — no
rebuild.

Because `npm run build` replaces `dist/` (and with it `dist/promo-codes.txt`),
the admin keeps a **master copy outside the repo**
(`/www/wwwroot/yonolink-admin-data/promo-codes.txt`) and writes it to
`dist/promo-codes.txt` too. The `postbuild` npm hook (`restore.js`) puts the
master back after every build — including the daily 07:00 cron rebuild — so
live codes are never wiped by a deploy.

## One-time setup (on the VPS)

1. **DNS (Cloudflare):** A record `code` -> same IP as yonolink.co.
2. **Update the site:** use your usual deploy (it now also runs the postbuild hook):
   ```
   cd /www/wwwroot/yonolink.co && git fetch origin && git reset --hard origin/main && npm install
   cp dist/.user.ini /root/yonolink.user.ini.bak && chattr -i dist/.user.ini && npm run build && cp /root/yonolink.user.ini.bak dist/.user.ini && chattr +i dist/.user.ini
   ```
3. **Settings file OUTSIDE the repo** (replace the password, keep the single quotes):
   ```
   node -e "const c=require('crypto');const s=c.randomBytes(16);console.log('ADMIN_PASSWORD_HASH=scrypt:'+s.toString('hex')+':'+c.scryptSync(process.argv[1],s,64).toString('hex'));console.log('ADMIN_SESSION_SECRET='+c.randomBytes(32).toString('base64url'))" 'your-long-password' > /tmp/new.env
   (echo "ADMIN_USERNAME=Admin"; echo "PORT=3130"; cat /tmp/new.env) > /www/wwwroot/yonolink-admin.env
   rm /tmp/new.env; chmod 600 /www/wwwroot/yonolink-admin.env; history -c
   ```
4. **Start it:**
   ```
   ss -tlnp | grep 3130          # should print nothing (port free)
   pm2 start scripts/promo-admin/server.js --name yonolink-admin
   pm2 save
   curl -s http://127.0.0.1:3130/healthz; echo     # -> ok
   ```
5. **aaPanel:** add site `code.yonolink.co` (static) -> Reverse proxy: dir `/`,
   target `http://127.0.0.1:3130`, Sent Domain `$host`, **cache OFF**; then SSL
   (Let's Encrypt) + Force HTTPS.

The first time the admin opens it seeds its master copy from whatever is live
in `dist/promo-codes.txt`, so nothing already published is lost.

## Daily use

Log in at https://code.yonolink.co -> type codes into Morning / Afternoon /
Evening -> **Save changes**. **Start new day** clears everything. A warning
shows if the saved codes are from an earlier day.

## Notes

- Platforms and their order come from `src/data/daily-codes.ts`; names from
  `src/data/apps.ts`. A brand-new platform needs a card added to the site
  (and a rebuild) before its codes can show.
- Newly typed codes that look like a link/domain are rejected; old entries are grandfathered.
- Each save backs up the previous master to `/www/wwwroot/yonolink-admin-data/backups/` (last 60 kept).
- 5 failed logins from one IP locks that IP out for 15 minutes; sessions last 8 h.
- Do not edit `public/promo-codes.txt` for live codes; the admin owns the live file.
