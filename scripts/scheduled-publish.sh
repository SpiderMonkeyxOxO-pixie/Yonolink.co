#!/bin/bash
# Daily rebuild for the date-gated Yonolink blog series (3-17 Oct 2026).
# Posts go live at 07:00 IST on their pubDate (see src/lib/published.ts), but the
# site is static, so a rebuild is what publishes them. Run daily by cron; safe by hand:
#   bash scripts/scheduled-publish.sh
# The previous dist is kept and restored if the build fails.
# aaPanel locks dist/.user.ini (chattr +i), so it is unlocked for the build and re-locked after.
set -uo pipefail
cd "$(dirname "$0")/.."

export PATH="$PATH:/usr/local/bin:/usr/bin:/www/server/nodejs/$(ls /www/server/nodejs 2>/dev/null | tail -1)/bin"

LOG="${LOG:-$HOME/yonolink-publish.log}"
exec >>"$LOG" 2>&1
echo "=== $(date -u '+%Y-%m-%d %H:%M:%S UTC') | IST date $(TZ=Asia/Kolkata date +%F) ==="

exec 9>/tmp/yonolink-publish.lock
flock -n 9 || { echo "Another run is in progress, exiting."; exit 0; }

UI=dist/.user.ini
BAK=/root/yonolink.user.ini.bak
[ -f "$UI" ] && cp "$UI" "$BAK" && chattr -i "$UI"

relock() { [ -f "$BAK" ] && cp "$BAK" "$UI" && chattr +i "$UI"; }

if npm run build; then
  relock
  echo "OK: rebuilt."
else
  echo "BUILD FAILED."
  relock
  exit 1
fi
