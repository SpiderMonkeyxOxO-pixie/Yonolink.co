// ─── DAILY PROMO CODES ──────────────────────────────────────────────────────
// To update codes: edit public/promo-codes.txt and upload it to your server.
// Codes are fetched client-side on every page load — no rebuild needed.
// This file only provides the ordered slug list for rendering card shells.

export interface DailyCode {
  slug: string;
  am:   string;
  pm:   string;
  eve:  string;
}

export const dailyCodes: DailyCode[] = [

  // ── FEATURED ──────────────────────────────────────────────────────────────
  { slug: 'win-rummy',    am: '', pm: '', eve: '' },
  { slug: 'dhan-game',    am: '', pm: '', eve: '' },
  { slug: 'max-rummy',    am: '', pm: '', eve: '' },
  { slug: 'yono-rummy',   am: '', pm: '', eve: '' },
  { slug: 'yono-games',   am: '', pm: '', eve: '' },
  { slug: 'yono-777',     am: '', pm: '', eve: '' },
  { slug: 'yono-arcade',  am: '', pm: '', eve: '' },

  // ── RUMMY ─────────────────────────────────────────────────────────────────
  { slug: 'abc-rummy',    am: '', pm: '', eve: '' },
  { slug: 'boss-rummy',   am: '', pm: '', eve: '' },
  { slug: 'game-rummy',   am: '', pm: '', eve: '' },
  { slug: 'gogo-rummy',   am: '', pm: '', eve: '' },
  { slug: 'hi-rummy',     am: '', pm: '', eve: '' },
  { slug: 'ind-rummy',    am: '', pm: '', eve: '' },
  { slug: 'inr-rummy',    am: '', pm: '', eve: '' },
  { slug: 'jaiho-rummy',  am: '', pm: '', eve: '' },
  { slug: 'joy-rummy',    am: '', pm: '', eve: '' },
  { slug: 'love-rummy',   am: '', pm: '', eve: '' },
  { slug: 'okrummy',      am: '', pm: '', eve: '' },
  { slug: 'rumble-rummy', am: '', pm: '', eve: '' },
  { slug: 'rummy-91',     am: '', pm: '', eve: '' },
  { slug: 'rummy77',      am: '', pm: '', eve: '' },
  { slug: 'rummy888',     am: '', pm: '', eve: '' },
  { slug: 'top-rummy',    am: '', pm: '', eve: '' },
  { slug: 'rummy-ludo',   am: '', pm: '', eve: '' },

  // ── SPIN ──────────────────────────────────────────────────────────────────
  { slug: 'spin-101',     am: '', pm: '', eve: '' },
  { slug: 'spin-777',     am: '', pm: '', eve: '' },
  { slug: 'spin-crush',   am: '', pm: '', eve: '' },
  { slug: 'spin-gold',    am: '', pm: '', eve: '' },
  { slug: 'spin-lucky',   am: '', pm: '', eve: '' },
  { slug: 'spin-winner',  am: '', pm: '', eve: '' },
  { slug: 'yes-spin',     am: '', pm: '', eve: '' },
  { slug: 'jaiho-spin',   am: '', pm: '', eve: '' },
  { slug: 'slot-spin',    am: '', pm: '', eve: '' },

  // ── SLOTS ─────────────────────────────────────────────────────────────────
  { slug: '567-slots',    am: '', pm: '', eve: '' },
  { slug: 'ind-slots',    am: '', pm: '', eve: '' },
  { slug: 'saga-slots',   am: '', pm: '', eve: '' },
  { slug: 'share-slots',  am: '', pm: '', eve: '' },
  { slug: 'slots-winner', am: '', pm: '', eve: '' },
  { slug: 'yono-slots',   am: '', pm: '', eve: '' },
  { slug: 'jaiho-slot',   am: '', pm: '', eve: '' },

  // ── CASINO / 777 ──────────────────────────────────────────────────────────
  { slug: '777game',      am: '', pm: '', eve: '' },
  { slug: '789-jackpot',  am: '', pm: '', eve: '' },
  { slug: 'hindi777',     am: '', pm: '', eve: '' },
  { slug: 'jahio-777',    am: '', pm: '', eve: '' },
  { slug: 'yn-777',       am: '', pm: '', eve: '' },

  // ── ARCADE ────────────────────────────────────────────────────────────────
  { slug: '101z',         am: '', pm: '', eve: '' },
  { slug: 'jaiho-arcade', am: '', pm: '', eve: '' },
  { slug: 'jaiho-win',    am: '', pm: '', eve: '' },
  { slug: 'jaiho91',      am: '', pm: '', eve: '' },
  { slug: 'maha-games',   am: '', pm: '', eve: '' },

  // ── BET / CLUB ────────────────────────────────────────────────────────────
  { slug: 'bet-213',      am: '', pm: '', eve: '' },
  { slug: 'club-inr',     am: '', pm: '', eve: '' },
  { slug: 'ind-club',     am: '', pm: '', eve: '' },
  { slug: 'mbm-bet',      am: '', pm: '', eve: '' },

  // ── VIP ───────────────────────────────────────────────────────────────────
  { slug: 'neta-vip',     am: '', pm: '', eve: '' },
  { slug: 'yono-vip',     am: '', pm: '', eve: '' },

  // ── BINGO ─────────────────────────────────────────────────────────────────
  { slug: 'bingo-101',    am: '', pm: '', eve: '' },
  { slug: 'ind-bingo',    am: '', pm: '', eve: '' },
];
