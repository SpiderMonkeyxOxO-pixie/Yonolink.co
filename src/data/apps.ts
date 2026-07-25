export interface AppFaq { q: string; a: string; }
export interface AppData {
  name: string; slug: string; logo: string; category: string;
  tagline: string; description: string; rating: number;
  downloads: string; size: string; minDeposit: string; bonus: string;
  features: string[]; downloadUrl: string; faqs: AppFaq[]; suggestedApps: string[];
}

export const apps: AppData[] = [

  // ── FEATURED (7) ─────────────────────────────────────────────────────────────

  {
    name: 'Win Rummy', slug: 'win-rummy', logo: '/logos/win-rummy.png', category: 'Rummy',
    tagline: 'Win Rummy — upcoming rummy platform launching July 29 2026 with ₹500 welcome bonus',
    description: 'Win Rummy is an upcoming real-cash rummy platform scheduled to launch on July 29, 2026 at 7:00 AM IST. Designed for competitive Indian rummy players, it offers 13-card rummy in Points, Deals and Pool formats with a generous welcome bonus of ₹150–₹500 on first deposit and a minimum withdrawal of just ₹100 via UPI. Daily promo codes will be published on YonoLink.co three times a day from launch date.',
    rating: 4.5, downloads: 'New', size: '38 MB', minDeposit: '₹100', bonus: '₹500 Welcome Bonus',
    features: [
      'Welcome bonus ₹150–₹500 on first deposit',
      'Minimum withdrawal of ₹100 via UPI',
      '13-card rummy — Points, Deals and Pool formats',
      'Instant UPI deposits and withdrawals',
      'Daily promo codes updated 3× per day from launch',
    ],
    downloadUrl: '#',
    faqs: [
      { q: 'When does Win Rummy launch?', a: 'Win Rummy is scheduled to launch on July 29, 2026 at 7:00 AM IST. The APK download link will be available on this page as soon as it goes live.' },
      { q: 'What is the welcome bonus on Win Rummy?', a: 'New users will receive a welcome bonus of ₹150–₹500 on their first deposit. Use the latest Win Rummy promo code from the YonoLink Promo Codes page to maximize your bonus.' },
      { q: 'What is the minimum withdrawal on Win Rummy?', a: 'The minimum withdrawal on Win Rummy is ₹100, processed instantly via UPI after your request is approved.' },
    ],
    suggestedApps: ['yono-rummy', 'max-rummy', 'boss-rummy'],
  },

  {
    name: 'Dhan Game', slug: 'dhan-game', logo: '/logos/dhan-game.webp', category: 'Slots',
    tagline: 'India\'s newest slots platform — launched July 23 2026 with ₹175 welcome bonus',
    description: 'Dhan Game is India\'s newest real-cash slots platform, launched on July 23 2026. Built exclusively for Android players in India, it delivers premium slot machine gameplay with verified high-RTP games, a welcome bonus of ₹80–₹175 on your first deposit, and instant UPI withdrawals from just ₹100. Grab a daily promo code from YonoLink.co to maximize your first-deposit bonus.',
    rating: 4.5, downloads: 'New', size: '45 MB', minDeposit: '₹100', bonus: '₹175 Welcome Bonus',
    features: [
      'Welcome bonus ₹80–₹175 on first deposit',
      'Minimum withdrawal of just ₹100',
      'Premium slot machine games with high RTP',
      'Instant UPI deposits and withdrawals',
      'Daily promo codes updated 3× per day',
    ],
    downloadUrl: 'https://dhanwinplay.com/?code=L2VRQRRF2UK&t=1784778249',
    faqs: [
      { q: 'When does Dhan Game launch?', a: 'Dhan Game launches on July 23, 2026 at 8:00 AM IST. Register early to claim the launch-day welcome bonus of ₹80–₹175 on your first deposit.' },
      { q: 'What is the welcome bonus on Dhan Game?', a: 'New users receive a welcome bonus of ₹80–₹175 on their first deposit. Visit our Promo Codes page for the latest Dhan Game launch code.' },
      { q: 'What is the minimum withdrawal on Dhan Game?', a: 'The minimum withdrawal on Dhan Game is ₹100, processed via UPI instantly after your request is approved.' },
    ],
    suggestedApps: ['yono-slots', 'yono-777', 'slots-winner'],
  },

  {
    name: 'Max Rummy', slug: 'max-rummy', logo: '/logos/max-rummy.webp', category: 'Rummy',
    tagline: 'Maximum rummy action — bigger prize pools, faster tables, higher stakes',
    description: 'Max Rummy lives up to its name by offering the biggest prize pools in the Yono rummy ecosystem. With daily guaranteed jackpots worth ₹5 lakh, Max Rummy attracts India\'s most competitive rummy players. Ultra-fast card dealing, multi-table support for up to 4 simultaneous games, and an advanced opponent tracking system make every session feel like a professional tournament.',
    rating: 4.5, downloads: '1.8M+', size: '36 MB', minDeposit: '₹100', bonus: '₹500 Welcome Bonus',
    features: [
      'Daily ₹5 lakh guaranteed jackpot across all formats',
      'Multi-table play — run up to 4 rummy tables simultaneously',
      'Ultra-fast dealing engine with sub-second card animations',
      'Advanced opponent stats to help sharpen your strategy',
      'Instant UPI withdrawal with zero processing fee',
    ],
    downloadUrl: 'https://www.maxrummy11.com/?code=QUMG2BV9MQB&t=1783568316',
    faqs: [
      { q: 'What makes Max Rummy different from other rummy apps?', a: 'Max Rummy offers the largest daily guaranteed prize pools in the Yono ecosystem — up to ₹5 lakh per day — combined with multi-table support that lets experienced players run up to 4 simultaneous games.' },
      { q: 'How do I download Max Rummy on Android?', a: 'Tap the Download button on this page to get the Max Rummy APK. Enable Unknown Sources in your Android settings, open the downloaded file, and install. The whole process takes under 2 minutes.' },
      { q: 'Can I claim the welcome bonus as a new user?', a: 'Yes. Register a new account on Max Rummy, make your first deposit of ₹100 or more, and enter your welcome code (from our Promo Codes page) in the Wallet section to claim your ₹500 welcome bonus instantly.' },
    ],
    suggestedApps: ['boss-rummy', 'top-rummy', 'yono-rummy'],
  },

  {
    name: 'Yono Rummy', slug: 'yono-rummy', logo: '/logos/yono-rummy.webp', category: 'Rummy',
    tagline: 'India\'s most-played Yono rummy with ₹1 crore daily prize pools',
    description: 'Yono Rummy is the flagship card game of the Yono gaming platform, offering 13-card rummy in Points, Deals and Pool formats. With verified RNG shuffling and instant UPI payouts, it\'s trusted by over 5 million Indian players. Daily guaranteed tournaments run from ₹1 entry all the way to ₹10,000 high-roller tables.',
    rating: 4.7, downloads: '5M+', size: '38 MB', minDeposit: '₹100', bonus: '₹200 Welcome Bonus',
    features: [
      '13-card rummy in Points, Deals and Pool formats',
      'Daily ₹1 crore guaranteed prize pool across tournaments',
      'Instant UPI withdrawal — processed in under 60 seconds',
      'Free practice tables for beginners at zero cost',
      'Multi-table mode for experienced players',
    ],
    downloadUrl: 'https://yonorummy042.com/?code=VIP3Z76MJCF&t=1782478473',
    faqs: [
      { q: 'Is Yono Rummy safe and legal in India?', a: 'Yes. Rummy is classified as a skill-based game by Indian courts. Yono Rummy uses 256-bit SSL encryption and RBI-approved payment gateways for all transactions.' },
      { q: 'How do I download Yono Rummy on Android?', a: 'Visit the official Yono website and click "Download APK". Allow unknown sources in Settings, install the file, and you\'re ready. No Play Store needed.' },
      { q: 'Can I play Yono Rummy for free?', a: 'Yes. Yono Rummy has free practice tables with virtual chips so you can learn the game without risking real money.' },
    ],
    suggestedApps: ['top-rummy', 'boss-rummy', 'ind-rummy'],
  },

  {
    name: 'Yono Games', slug: 'yono-games', logo: '/logos/yono-games.webp', category: 'Arcade',
    tagline: 'The complete Yono gaming platform — one app for all Yono games',
    description: 'Yono Games is the official main platform application for the entire Yono ecosystem. It is the single source of truth for your Yono balance, rewards, and game access. All Yono games — Rummy, Slots, 777, Fantasy, Ludo, and more — are accessible from the Yono Games lobby. It\'s the app to download if you want everything Yono in one place.',
    rating: 4.6, downloads: '5M+', size: '80 MB', minDeposit: '₹100', bonus: '₹500 Welcome Bonus',
    features: [
      'Unified lobby for every Yono game — rummy to casino',
      'Master Yono wallet used across all games and apps',
      'Single KYC verification valid for all Yono products',
      'Yono Games loyalty programme — the highest-earning tier',
      'Priority customer support for Yono Games users',
    ],
    downloadUrl: 'https://youonogamesgift.com/?code=GK1EVT15SS7&t=1782476329',
    faqs: [
      { q: 'Is Yono Games the main Yono platform?', a: 'Yes. Yono Games is the primary Yono app. Your account, wallet, KYC and loyalty points all live here. Other Yono apps (Yono Rummy, Yono Slots etc.) are extensions of this platform.' },
      { q: 'Do I need separate apps for each Yono game?', a: 'No. Yono Games gives access to all Yono titles from one app. Standalone Yono apps (Rummy, Slots, 777) are offered for players who prefer a focused experience.' },
      { q: 'What promo code should I use on Yono Games?', a: 'Visit our Promo Codes page to get the current welcome code and any daily codes — they stack for maximum bonus value.' },
    ],
    suggestedApps: ['yono-arcade', 'yono-slots', 'yono-rummy'],
  },

  {
    name: 'Yono 777', slug: 'yono-777', logo: '/logos/yono-777.webp', category: 'Slots',
    tagline: 'Yono\'s flagship 777 casino — premium games with Yono ecosystem integration',
    description: 'Yono 777 is the flagship casino experience of the Yono platform, combining slots, live dealer, Teen Patti, and 777 specialty games in a premium package. Full Yono ecosystem integration means your balance, promo codes, and loyalty points work seamlessly across Yono 777, Yono Slots, and Yono Rummy. VIP tables unlock for deposits over ₹5,000.',
    rating: 4.6, downloads: '3.2M+', size: '65 MB', minDeposit: '₹100', bonus: '₹500 Welcome Bonus',
    features: [
      'Full Yono ecosystem wallet and promo code compatibility',
      'Live dealer Teen Patti and Andar Bahar with HD streaming',
      '777 specialty games exclusive to the Yono 777 platform',
      'VIP tables with dedicated dealer for ₹5,000+ sessions',
      'Yono loyalty multiplier — earn 3x loyalty points in casino',
    ],
    downloadUrl: 'https://yonomain777.one/?code=ZMRZ6SUQQZ2&t=1782213370',
    faqs: [
      { q: 'Can I use promo codes in Yono 777?', a: 'Yes. All Yono promo codes apply to Yono 777 via the Wallet → Promo Code section. The balance is credited to your shared Yono wallet instantly.' },
      { q: 'What are 777 specialty games on Yono 777?', a: 'These are Yono-exclusive games with 777 themes — Golden 777 Roulette, Triple 7 Baccarat, and 777 Crash — not found on any other platform.' },
      { q: 'How do I access the VIP tables on Yono 777?', a: 'VIP table access unlocks automatically when you deposit ₹5,000 or more in any single session. The VIP tab appears in your lobby immediately after qualifying.' },
    ],
    suggestedApps: ['yono-slots', 'yono-games', '777game'],
  },

  {
    name: 'Yono Arcade', slug: 'yono-arcade', logo: '/logos/yono-arcade.webp', category: 'Arcade',
    tagline: 'Yono\'s multi-game arcade — play anything in the Yono universe from one app',
    description: 'Yono Arcade brings every Yono game under one roof — rummy, slots, 777, fantasy, ludo, spin, and exclusive arcade-only titles. The Yono Arcade Pass (monthly subscription) gives unlimited access to all free-play tables and doubled daily bonuses across the entire Yono platform. New Yono games launch exclusively in Arcade before standalone release.',
    rating: 4.5, downloads: '2.1M+', size: '75 MB', minDeposit: '₹100', bonus: '₹350 Welcome Bonus',
    features: [
      'Every Yono game accessible from one unified arcade lobby',
      'Yono Arcade Pass — monthly subscription for doubled bonuses',
      'Arcade-first game launches before standalone releases',
      'Cross-game daily missions with combined rewards',
      'All Yono promo codes valid across every Arcade game',
    ],
    downloadUrl: 'https://yonoofficial2.com/?code=96LUT957MWS&t=1782476174',
    faqs: [
      { q: 'What is the Yono Arcade Pass?', a: 'The Arcade Pass is a monthly subscription (₹99/month) that gives doubled daily bonuses, unlimited free-play table access, and early access to new Yono games before public release.' },
      { q: 'Is Yono Arcade the same as the Yono Games app?', a: 'They are related but different. Yono Games is the main Yono platform. Yono Arcade is a separate app with an arcade lobby feel and exclusive games not in the main Yono Games app.' },
      { q: 'Can I use promo codes in Yono Arcade?', a: 'Yes. All Yono promo codes work across Yono Arcade. Enter codes in Wallet → Promo Codes and the balance applies to any game in the arcade lobby. Get the latest codes from our Promo Codes page.' },
    ],
    suggestedApps: ['yono-games', 'yono-777', 'yono-slots'],
  },

  // ── RUMMY (16) ──────────────────────────────────────────────────────────────

  {
    name: 'ABC Rummy', slug: 'abc-rummy', logo: '/logos/abc-rummy.webp', category: 'Rummy',
    tagline: 'Learn rummy A to Z — beginner-first card gaming made simple',
    description: 'ABC Rummy is designed from the ground up for players new to online rummy. Interactive tutorials walk you through the rules of 13-card rummy step by step, and a guided beginner mode suggests valid moves as you play. Transition smoothly from free tables to low-stakes real cash games at your own pace.',
    rating: 4.3, downloads: '800K+', size: '29 MB', minDeposit: '₹100', bonus: '₹75 Welcome Bonus',
    features: [
      'Step-by-step interactive rummy tutorial for beginners',
      'Guided beginner mode that suggests valid card moves',
      'Low-stake real cash tables from ₹1 entry',
      'Auto-sort and auto-arrange hand feature',
      'Refer friends and earn ₹100 per successful referral',
    ],
    downloadUrl: 'https://www.11abcrummy.com/?code=6X44DU7CVLN&t=1782033658',
    faqs: [
      { q: 'Is ABC Rummy suitable for first-time players?', a: 'Absolutely. ABC Rummy was built for beginners — the tutorial mode and guided play feature make it easy to learn the rules in under 15 minutes.' },
      { q: 'How do I install ABC Rummy on my phone?', a: 'Download the APK from the official website, enable "Install from unknown sources" in your phone settings, and tap the downloaded file to install.' },
      { q: 'What is the minimum deposit on ABC Rummy?', a: 'The minimum deposit is ₹100. New users also get a ₹75 welcome bonus on their first deposit.' },
    ],
    suggestedApps: ['joy-rummy', 'love-rummy', 'gogo-rummy'],
  },

  {
    name: 'Boss Rummy', slug: 'boss-rummy', logo: '/logos/boss-rummy.webp', category: 'Rummy',
    tagline: 'Play like a boss — high-stakes rummy for serious card players',
    description: 'Boss Rummy is built for players who want to compete at the highest level. With dedicated VIP tables starting at ₹5,000 entry, a weekly ₹25 lakh leaderboard, and a strict anti-cheat engine, Boss Rummy delivers a professional card gaming environment. Fast-fold tables let you play up to 6 hands per minute.',
    rating: 4.5, downloads: '1.2M+', size: '41 MB', minDeposit: '₹100', bonus: '₹300 Welcome Bonus',
    features: [
      'VIP high-stakes tables from ₹500 to ₹10,000 entry',
      'Weekly ₹25 lakh leaderboard for the top 100 players',
      'Fast-fold rummy — play a full hand in under 2 minutes',
      'Anti-cheat detection engine for fair competition',
      'Private table creation to play exclusively with friends',
    ],
    downloadUrl: 'https://www.bossrummyr.com/?code=9HFJ28QUSPR&t=1782038197',
    faqs: [
      { q: 'Can beginners play on Boss Rummy?', a: 'Boss Rummy has beginner tables at ₹1 entry, but the platform is optimised for intermediate to advanced players who want higher stakes and faster tables.' },
      { q: 'How do I download Boss Rummy APK?', a: 'Download directly from the official Boss Rummy website. Install via the APK file after enabling unknown sources in your Android settings.' },
      { q: 'Does Boss Rummy have leaderboard rewards?', a: 'Yes. Boss Rummy runs a weekly ₹25 lakh leaderboard. The top 100 players win guaranteed cash, with the #1 player taking ₹2.5 lakh every week.' },
    ],
    suggestedApps: ['rumble-rummy', 'top-rummy', 'hi-rummy'],
  },

  {
    name: 'Game Rummy', slug: 'game-rummy', logo: '/logos/game-rummy.webp', category: 'Rummy',
    tagline: 'Pure rummy, no noise — just clean real-cash card gaming',
    description: 'Game Rummy strips away the clutter and delivers a focused, distraction-free rummy experience. The app loads in under 2 seconds, uses minimal battery, and works perfectly even on 3G connections. With daily cashback of up to 20% and a zero-commission withdrawal model, Game Rummy keeps more winnings in your pocket.',
    rating: 4.4, downloads: '900K+', size: '25 MB', minDeposit: '₹100', bonus: '₹150 Welcome Bonus',
    features: [
      'Lightweight 25 MB install — fast on all Android phones',
      '3G-optimised gameplay with zero lag during peak hours',
      '20% daily cashback on net losses',
      'Zero-commission withdrawal model',
      'Points, Deals and Pool rummy in one clean interface',
    ],
    downloadUrl: 'https://gamesrummy.club/?code=GAFDVUWWYBV&t=1782039543',
    faqs: [
      { q: 'Does Game Rummy work on older Android phones?', a: 'Yes. Game Rummy is optimised for Android 5.0+ and works on phones with just 1 GB RAM, making it accessible on budget devices.' },
      { q: 'How do I withdraw my winnings from Game Rummy?', a: 'Go to Wallet → Withdraw, enter the amount, and choose UPI or bank transfer. Withdrawals process in 30–60 minutes.' },
      { q: 'What cashback does Game Rummy offer?', a: 'Game Rummy credits 20% cashback on net daily losses directly to your bonus wallet. Cashback can be used on any rummy table.' },
    ],
    suggestedApps: ['ind-rummy', 'okrummy', 'inr-rummy'],
  },

  {
    name: 'Gogo Rummy', slug: 'gogo-rummy', logo: '/logos/gogo-rummy.webp', category: 'Rummy',
    tagline: 'Speed rummy for mobile players — complete a game in 3 minutes',
    description: 'Gogo Rummy is purpose-built for on-the-go gaming. Its signature Quick Rummy format compresses a full 13-card game into 3 minutes, making it perfect for commuters and casual players with short play windows. Auto-play options keep the game moving when you step away, and smart notifications alert you when a tournament is about to start.',
    rating: 4.2, downloads: '600K+', size: '27 MB', minDeposit: '₹100', bonus: '₹50 Welcome Bonus',
    features: [
      'Quick Rummy format — full game in under 3 minutes',
      'Smart push notifications for upcoming tournaments',
      'Auto-play mode keeps your seat when you step away',
      'Portrait and landscape mode supported',
      'Daily free chips for login streaks',
    ],
    downloadUrl: 'https://www.gospin.bet/?code=V4U6SUHF9FZ&t=1782040515',
    faqs: [
      { q: 'What is Quick Rummy on Gogo Rummy?', a: 'Quick Rummy is Gogo\'s signature fast format. Each hand is capped at 3 minutes with a faster dealing speed and shorter decision timers, making it ideal for quick sessions.' },
      { q: 'Is Gogo Rummy available on iOS?', a: 'Gogo Rummy is primarily an Android app. iOS users can access the mobile web version through Safari with full functionality.' },
      { q: 'How many free chips do I get daily on Gogo Rummy?', a: 'You receive 200 free practice chips on login. Streaks of 7 days earn a bonus of 2,000 chips and 1 free tournament ticket.' },
    ],
    suggestedApps: ['joy-rummy', 'abc-rummy', 'game-rummy'],
  },

  {
    name: 'Hi Rummy', slug: 'hi-rummy', logo: '/logos/hi-rummy.webp', category: 'Rummy',
    tagline: 'High-intensity rummy tables with the fastest payouts in India',
    description: 'Hi Rummy targets players who demand instant gratification — from dealing to winning to withdrawing. Its AI matchmaking pairs you with opponents of equal skill level, cutting wait times to under 10 seconds. Same-day withdrawals are guaranteed, and the platform runs a live ₹5 lakh daily jackpot tournament.',
    rating: 4.6, downloads: '1.5M+', size: '35 MB', minDeposit: '₹100', bonus: '₹200 Welcome Bonus',
    features: [
      'AI matchmaking — find an equal opponent in under 10 seconds',
      'Same-day withdrawal guarantee (before 11 PM IST)',
      'Live ₹5 lakh daily jackpot tournament',
      'Side pot tables for multi-prize formats',
      'Player statistics dashboard to track your progress',
    ],
    downloadUrl: 'https://joinhirummy.top/?code=RX33WPMEYAX&t=1782361457',
    faqs: [
      { q: 'How fast are withdrawals on Hi Rummy?', a: 'Hi Rummy guarantees same-day withdrawal for requests submitted before 11 PM IST. Most UPI withdrawals complete in under 15 minutes.' },
      { q: 'How do I enter the Hi Rummy daily jackpot?', a: 'The daily jackpot runs at 9 PM IST every day with ₹100 entry. You can pre-register up to 6 hours before the start from the Tournaments tab.' },
      { q: 'Does Hi Rummy have skill-based matchmaking?', a: 'Yes. Hi Rummy\'s AI groups players by skill rating (ELO-style), so beginners don\'t face pros and experienced players get competitive matches.' },
    ],
    suggestedApps: ['boss-rummy', 'top-rummy', 'rumble-rummy'],
  },

  {
    name: 'Ind Rummy', slug: 'ind-rummy', logo: '/logos/ind-rummy.webp', category: 'Rummy',
    tagline: 'Authentic Indian rummy with regional language support',
    description: 'Ind Rummy celebrates the roots of Indian card gaming by offering the full traditional 13-card experience with support for Hindi, Tamil, Telugu, Marathi and Bengali. Regional table themes and festival-specific tournaments make it the most culturally relevant rummy app in India. Deposit and withdraw in seconds via any UPI app.',
    rating: 4.4, downloads: '1M+', size: '32 MB', minDeposit: '₹100', bonus: '₹125 Welcome Bonus',
    features: [
      'Full Hindi, Tamil, Telugu, Marathi and Bengali language support',
      'Regional festival tournaments — Diwali, Holi, Eid specials',
      'Classic 13-card Indian rummy without modifications',
      'UPI, Paytm, PhonePe and Google Pay deposit supported',
      'Dedicated customer support in regional languages',
    ],
    downloadUrl: 'https://indrummyvip30.com/?code=R9ADC3HL1U6&t=1782361952',
    faqs: [
      { q: 'Can I play Ind Rummy in Hindi?', a: 'Yes. Ind Rummy supports Hindi as a primary interface language along with Tamil, Telugu, Marathi and Bengali. Change language in Settings → Language.' },
      { q: 'Does Ind Rummy have festival tournaments?', a: 'Yes. Ind Rummy runs special tournaments during Diwali, Holi, Eid and other festivals with enhanced prize pools and themed table designs.' },
      { q: 'Which payment methods work on Ind Rummy?', a: 'Ind Rummy accepts UPI (all apps), Paytm, PhonePe, Google Pay, net banking and debit/credit cards. All deposits are instant.' },
    ],
    suggestedApps: ['inr-rummy', 'jaiho-rummy', 'ind-club'],
  },

  {
    name: 'INR Rummy', slug: 'inr-rummy', logo: '/logos/inr-rummy.webp', category: 'Rummy',
    tagline: 'Zero withdrawal fees — win in INR and keep every rupee',
    description: 'INR Rummy\'s core promise is simple: no fees, ever. There are zero withdrawal charges, zero platform commissions, and no hidden costs on deposits. The app earns purely from rake on tables, passing maximum value back to players. With instant IMPS transfers and a dedicated fraud protection team, INR Rummy is the most player-friendly rummy platform available.',
    rating: 4.5, downloads: '750K+', size: '30 MB', minDeposit: '₹100', bonus: '₹100 Welcome Bonus',
    features: [
      'Zero withdrawal fees on every single transaction',
      'Zero platform commission — rake-only revenue model',
      'Instant IMPS transfer to any Indian bank account',
      'Fraud protection with 24/7 transaction monitoring',
      'Rakeback rewards — earn back 10% of all rake paid',
    ],
    downloadUrl: 'https://inrrummy.club/?code=JMQ6RYF5BT6&t=1782361577',
    faqs: [
      { q: 'Does INR Rummy really charge zero withdrawal fees?', a: 'Yes. INR Rummy charges ₹0 on all withdrawals, regardless of the amount or method. There are no minimum withdrawal fees or processing charges.' },
      { q: 'How long do withdrawals take on INR Rummy?', a: 'UPI withdrawals complete in 5–15 minutes. IMPS bank transfers take 15–30 minutes. All withdrawals are processed 24/7.' },
      { q: 'What is rakeback on INR Rummy?', a: 'Rakeback credits 10% of all rake you pay back to your bonus wallet every Monday. Heavy players can earn hundreds of rupees weekly just from rakeback.' },
    ],
    suggestedApps: ['game-rummy', 'okrummy', 'yono-rummy'],
  },

  {
    name: 'Jaiho Rummy', slug: 'jaiho-rummy', logo: '/logos/jaiho-rummy.webp', category: 'Rummy',
    tagline: 'Trusted rummy from the Jaiho gaming family — play with confidence',
    description: 'Jaiho Rummy is part of the established Jaiho gaming ecosystem, trusted by Indian players across rummy, slots, and spin games. Cross-platform wallet means your balance is shared across all Jaiho apps. Points, Deals and Pool rummy are all available with automated cheat detection and RNG certification.',
    rating: 4.4, downloads: '900K+', size: '34 MB', minDeposit: '₹100', bonus: '₹75 Welcome Bonus',
    features: [
      'Shared wallet across all Jaiho gaming apps',
      'Points, Deals and Pool rummy formats',
      'Automated cheat detection system',
      'RNG-certified random card dealing',
      'Regular Jaiho loyalty rewards for active players',
    ],
    downloadUrl: 'https://jaihorummy.vip/?code=3NPSEJRCPZW&t=1782363623',
    faqs: [
      { q: 'Does Jaiho Rummy share balance with other Jaiho apps?', a: 'Yes. If you have a Jaiho account, your wallet balance works across Jaiho Rummy, Jaiho Slot, Jaiho Spin and other Jaiho apps — no separate top-up needed.' },
      { q: 'How do I download Jaiho Rummy?', a: 'Visit the Jaiho official website, click Download for Android, install the APK. Your existing Jaiho login works immediately.' },
      { q: 'Is Jaiho Rummy safe?', a: 'Yes. Jaiho uses bank-grade 256-bit SSL encryption and KYC verification for all withdrawal accounts. All transactions are monitored 24/7.' },
    ],
    suggestedApps: ['jaiho-arcade', 'jaiho-spin', 'jaiho-slot'],
  },

  {
    name: 'Joy Rummy', slug: 'joy-rummy', logo: '/logos/joy-rummy.webp', category: 'Rummy',
    tagline: 'Play rummy for the joy of it — free tables and real cash options',
    description: 'Joy Rummy lives up to its name by making rummy genuinely fun again. Daily missions reward players for trying new table formats, and a social lobby lets you chat with opponents before a game. The Joy Points loyalty programme converts every hand you play into redeemable points for bonus cash, tournament tickets, and merchandise.',
    rating: 4.3, downloads: '700K+', size: '28 MB', minDeposit: '₹100', bonus: '₹50 Welcome Bonus',
    features: [
      'Daily missions that reward you for trying new formats',
      'Social lobby with pre-game chat and emotes',
      'Joy Points loyalty programme on every hand played',
      'Redeem Joy Points for bonus cash and tournament tickets',
      'Weekly surprise prize drops for active players',
    ],
    downloadUrl: 'https://www.joyrummyon.com/?code=J5KYGYLKSDD&t=1782365855',
    faqs: [
      { q: 'What are Joy Points on Joy Rummy?', a: 'Joy Points are loyalty points earned on every hand you play. 100 Joy Points = ₹1 bonus cash. Points can also be redeemed for tournament tickets and Yono promo codes.' },
      { q: 'Does Joy Rummy have a social feature?', a: 'Yes. The Joy social lobby lets you set a profile, chat in the waiting room, and send emotes during the game — making it feel more like playing with friends.' },
      { q: 'How do I install Joy Rummy on my phone?', a: 'Download the APK from Joy Rummy\'s official site. On Android, go to Settings → Security → Unknown Sources, then install the downloaded file.' },
    ],
    suggestedApps: ['love-rummy', 'gogo-rummy', 'abc-rummy'],
  },

  {
    name: 'Love Rummy', slug: 'love-rummy', logo: '/logos/love-rummy.webp', category: 'Rummy',
    tagline: 'The rummy app that loves its players back with daily bonuses',
    description: 'Love Rummy showers players with bonuses at every turn — first deposit bonus, daily login bonus, reload bonus every Monday, and a monthly loyalty gift. The platform specialises in couples-friendly tournaments where two players team up and share the prize. With India-wide language support and a 5-star customer service team, Love Rummy keeps players coming back.',
    rating: 4.2, downloads: '550K+', size: '27 MB', minDeposit: '₹100', bonus: '₹30 Welcome Bonus',
    features: [
      'Daily login bonus credited to wallet automatically',
      'Monday reload bonus of 25% on deposits',
      'Duo tournament mode — team up with a friend',
      'Monthly loyalty gift based on play frequency',
      'Friendly 24/7 customer support via WhatsApp',
    ],
    downloadUrl: 'https://www.loverummy7.com/?code=R6KUXVMQEB1&t=1782366602',
    faqs: [
      { q: 'What is the Duo Tournament on Love Rummy?', a: 'Duo Tournament lets two players team up and compete as a pair. Your combined score across separate tables determines ranking, and you share the prize equally.' },
      { q: 'Is the Love Rummy daily bonus automatic?', a: 'Yes. The daily login bonus is credited to your bonus wallet automatically the moment you open the app each day. No code needed.' },
      { q: 'How do I contact Love Rummy support?', a: 'Love Rummy offers 24/7 WhatsApp support at their official number, plus in-app live chat and email support with a guaranteed 2-hour response time.' },
    ],
    suggestedApps: ['joy-rummy', 'gogo-rummy', 'jaiho-rummy'],
  },

  {
    name: 'OkRUMMY', slug: 'okrummy', logo: '/logos/okrummy.webp', category: 'Rummy',
    tagline: 'OK Rummy — straightforward card gaming with no hidden fees',
    description: 'OkRUMMY keeps things simple and honest. Transparent rake tables show you exactly what the platform earns, no hidden charges on deposits or withdrawals, and a simple interface that even first-time smartphone users can navigate. Three rummy formats, practice mode, and weekly guaranteed tournaments round out a no-nonsense rummy experience.',
    rating: 4.1, downloads: '400K+', size: '24 MB', minDeposit: '₹100', bonus: '₹100 Welcome Bonus',
    features: [
      'Transparent rake display — see exactly what you pay',
      'No hidden fees on deposits or withdrawals',
      'Simple one-screen navigation for all game types',
      'Practice mode with unlimited virtual chips',
      'Weekly guaranteed ₹2 lakh tournament',
    ],
    downloadUrl: 'https://www.okrummy42.com/?code=H2G24LRWC8L&t=1782450801',
    faqs: [
      { q: 'What makes OkRUMMY different from other rummy apps?', a: 'OkRUMMY is completely transparent about its costs. Every table shows the rake percentage upfront, and there are zero hidden charges anywhere on the platform.' },
      { q: 'Can I play OkRUMMY without depositing?', a: 'Yes. OkRUMMY\'s practice mode gives unlimited virtual chips so you can play as long as you want without spending real money.' },
      { q: 'How do I download OkRUMMY on Android?', a: 'Find the OkRUMMY download link on their official website, download the APK, allow installation from unknown sources in Android settings, and install.' },
    ],
    suggestedApps: ['game-rummy', 'inr-rummy', 'abc-rummy'],
  },

  {
    name: 'Rumble Rummy', slug: 'rumble-rummy', logo: '/logos/rumble-rummy.webp', category: 'Rummy',
    tagline: 'Competitive rummy with a ₹50 lakh monthly tournament prize pool',
    description: 'Rumble Rummy is the tournament rummy specialist. Every month it distributes ₹50 lakh across 200+ tournaments ranging from micro ₹5 events to ₹5,000 championship qualifiers. Satellite tournaments let small-stakes players win seats to the big events. The platform features a live commentary stream for major finals.',
    rating: 4.5, downloads: '1.1M+', size: '39 MB', minDeposit: '₹100', bonus: '₹250 Welcome Bonus',
    features: [
      '₹50 lakh monthly guaranteed prize pool across 200+ tournaments',
      'Satellite system — win big event seats through micro-stakes qualifiers',
      'Live commentary stream for major Rumble Rummy finals',
      'Special bounty tables where eliminating a marked player earns a bonus',
      'Multi-table tournament registration for high-volume players',
    ],
    downloadUrl: 'https://www.rumblerummy888.net/?code=82M21AWEVEV&t=1782451748',
    faqs: [
      { q: 'What is the Rumble Rummy satellite system?', a: 'Satellites are feeder tournaments where you play for a seat (ticket) to a bigger event. Win a ₹10 satellite and you get entry to a ₹1,000 championship — a 100x value.' },
      { q: 'How many tournaments run daily on Rumble Rummy?', a: 'Rumble Rummy runs 20–30 tournaments daily across all stake levels, from ₹5 micro events at 9 AM to ₹5,000 championship qualifiers at 10 PM.' },
      { q: 'Can I watch Rumble Rummy finals live?', a: 'Yes. Major monthly finals are streamed live on Rumble Rummy\'s app under the "Live Events" tab with real-time commentary.' },
    ],
    suggestedApps: ['hi-rummy', 'boss-rummy', 'top-rummy'],
  },

  {
    name: 'Rummy 91', slug: 'rummy-91', logo: '/logos/rummy-91.webp', category: 'Rummy',
    tagline: '91% average payout rate — one of the highest RTP rummy platforms',
    description: 'Rummy 91 is built around a single differentiator: the highest average payout rate in Indian online rummy. With a verified 91% RTP (return to player) audited by an independent third party, players win more on average compared to competing platforms. Monthly audit reports are published on the website for complete transparency.',
    rating: 4.4, downloads: '800K+', size: '31 MB', minDeposit: '₹100', bonus: '₹91 Welcome Bonus',
    features: [
      'Independently audited 91% average payout rate',
      'Monthly RTP audit report published publicly',
      'Low rake structure — 2% maximum on all tables',
      'Guaranteed fair shuffling with blockchain timestamp',
      'Cash game + tournament lobby with one-tap join',
    ],
    downloadUrl: 'https://rummy91g.com/?code=UXT3ZZWQHX8&t=1782456098',
    faqs: [
      { q: 'What does 91% RTP mean on Rummy 91?', a: 'RTP (Return to Player) of 91% means that for every ₹100 wagered across all players, ₹91 is returned as winnings on average. This is independently audited and publicly reported.' },
      { q: 'How is Rummy 91 different from other apps?', a: 'Rummy 91 is one of the few platforms to publicly audit and publish its payout rate monthly. Most apps don\'t disclose this data at all.' },
      { q: 'Is Rummy 91 download free?', a: 'Yes. The app is free to download. You only spend money when you join a cash table or tournament with a real-money entry fee.' },
    ],
    suggestedApps: ['inr-rummy', 'game-rummy', 'okrummy'],
  },

  {
    name: 'Rummy77', slug: 'rummy77', logo: '/logos/rummy77.webp', category: 'Rummy',
    tagline: '77 rummy variants — the widest game selection in Indian rummy',
    description: 'Rummy77 lives up to its name by offering the widest variety of rummy formats available on any single platform. Beyond the standard Points, Deals and Pool, you\'ll find Gin Rummy, Contract Rummy, Oklahoma Rummy, and 70+ regional Indian variants collected from across the country. A new variant is added every week.',
    rating: 4.3, downloads: '650K+', size: '36 MB', minDeposit: '₹100', bonus: '₹77 Welcome Bonus',
    features: [
      '77+ rummy variants including regional Indian formats',
      'New variant added every week by the Rummy77 team',
      'Gin Rummy, Oklahoma Rummy and Contract Rummy included',
      'Regional format discovery mode with rules explanation',
      'Special weekly tournament for each featured variant',
    ],
    downloadUrl: 'https://rummy77r.net/?code=F3VZY2CL5KV&t=1782648996',
    faqs: [
      { q: 'How many rummy variants does Rummy77 actually have?', a: 'Rummy77 currently has 77+ variants including all standard formats plus regional games from Gujarat, Tamil Nadu, Maharashtra and Bengal. A new variant is added weekly.' },
      { q: 'What is Oklahoma Rummy on Rummy77?', a: 'Oklahoma Rummy is a variant where the top discard card sets the maximum value of the hand you must achieve to win. It adds a strategic layer not found in standard 13-card rummy.' },
      { q: 'Is Rummy77 available offline?', a: 'Rummy77 requires an internet connection since all games are live multiplayer. However, the app works on 2G with minimal data use (under 5 MB per hour).' },
    ],
    suggestedApps: ['rummy888', 'ind-rummy', 'top-rummy'],
  },

  {
    name: 'Rummy888', slug: 'rummy888', logo: '/logos/rummy888.webp', category: 'Rummy',
    tagline: 'Lucky 888 rummy tables with progressive jackpots and instant prizes',
    description: 'Rummy888 blends traditional 13-card rummy with a progressive jackpot system unique in the industry. Every table contributes 0.5% of its rake to the 888 Jackpot Pool, which pays out in full the moment any player achieves a Pure Sequence with all 13 cards. The jackpot resets and grows again immediately after.',
    rating: 4.4, downloads: '700K+', size: '33 MB', minDeposit: '₹100', bonus: '₹150 Welcome Bonus',
    features: [
      'Progressive 888 Jackpot Pool built from every table\'s rake',
      'Jackpot pays on a 13-card Pure Sequence win',
      'Daily lucky number draws for registered players',
      'Lucky 8 table — only 8 players, higher prize per seat',
      '8x multiplier special tournament every 8th of the month',
    ],
    downloadUrl: 'https://rummy888vip31.com/?code=TPUK4VF51V9&t=1782456619',
    faqs: [
      { q: 'What is the Rummy888 jackpot?', a: 'The 888 Jackpot Pool collects 0.5% of every hand\'s rake and pays it in full to any player who wins with a 13-card Pure Sequence. It can reach ₹10 lakh+ before triggering.' },
      { q: 'How do I qualify for the 8x multiplier tournament?', a: 'The 8x tournament runs on the 8th of every month. Entry is ₹88 and it features an 8x prize multiplier on the normal table win structure.' },
      { q: 'What is the Rummy888 welcome bonus?', a: 'New users get a ₹150 welcome bonus on their first deposit of ₹100 or more. Visit our Promo Codes page for the current code and enter it in the Wallet section to claim it instantly.' },
    ],
    suggestedApps: ['rummy77', 'rumble-rummy', 'yono-rummy'],
  },

  {
    name: 'Top Rummy', slug: 'top-rummy', logo: '/logos/top-rummy.webp', category: 'Rummy',
    tagline: 'Leaderboard-driven rummy — climb the ranks and win daily cash prizes',
    description: 'Top Rummy puts the competitive spirit front and centre. Every cash game earns Top Points, which update the live national leaderboard in real time. Top 10 players on the daily leaderboard split ₹50,000, the weekly top 50 split ₹5 lakh, and the monthly champion wins a guaranteed ₹1 lakh cash prize.',
    rating: 4.6, downloads: '2M+', size: '40 MB', minDeposit: '₹100', bonus: '₹300 Welcome Bonus',
    features: [
      'Live national leaderboard updated in real time',
      'Daily top 10 players split ₹50,000 cash',
      'Monthly champion earns guaranteed ₹1 lakh prize',
      'Top Rating system tracks your career progression',
      'Hall of Fame with India\'s all-time top rummy winners',
    ],
    downloadUrl: 'https://www.toprummy.cc/?code=M4G2WX7PAUF&t=1782475234',
    faqs: [
      { q: 'How does the Top Rummy leaderboard work?', a: 'Every rupee you win in cash games earns Top Points. These update the live leaderboard in real time. Daily, weekly and monthly prizes go to top-ranked players.' },
      { q: 'Can beginners win leaderboard prizes on Top Rummy?', a: 'Daily leaderboard prizes are based purely on points earned that day, so a beginner having a lucky day can win daily cash even without high overall ranking.' },
      { q: 'How do I download Top Rummy on Android?', a: 'Visit the Top Rummy website, download the APK, enable Unknown Sources in Android Security settings, and install. The app is 40 MB and works on Android 5.0+.' },
    ],
    suggestedApps: ['boss-rummy', 'hi-rummy', 'yono-rummy'],
  },

  {
    name: 'Rummy Ludo', slug: 'rummy-ludo', logo: '/logos/rummy-ludo.webp', category: 'Rummy',
    tagline: 'Two iconic games in one app — play rummy and ludo for real cash',
    description: 'Rummy Ludo is the only app that brings India\'s two most beloved games — 13-card rummy and classic ludo — under one roof. Switch between games instantly, use a single wallet for both, and compete in special cross-game tournaments where rummy and ludo events run back-to-back. A perfect app for the whole family.',
    rating: 4.3, downloads: '1.3M+', size: '44 MB', minDeposit: '₹100', bonus: '₹100 Welcome Bonus',
    features: [
      '13-card Indian rummy and classic ludo in one app',
      'Single wallet used for both rummy and ludo tables',
      'Cross-game combo tournaments with blended prize pools',
      'Family mode with controlled spend limits',
      'Daily rummy + ludo challenge for double daily bonus',
    ],
    downloadUrl: 'https://ludorummy.win/?code=UWPKN64A3KD&t=1782648889',
    faqs: [
      { q: 'Can I play both Rummy and Ludo with the same balance?', a: 'Yes. Rummy Ludo uses a single shared wallet, so your deposited funds can be used at rummy tables, ludo tables or any tournament regardless of game type.' },
      { q: 'What is the cross-game combo tournament?', a: 'Combo tournaments have two stages: a rummy qualifier and a ludo final. Your rummy score decides your ludo starting bonus. The player with the best combined result wins the grand prize.' },
      { q: 'Is Rummy Ludo available on iOS?', a: 'Rummy Ludo currently offers an Android APK and a browser-based version accessible on any device including iPhones through Safari.' },
    ],
    suggestedApps: ['yono-rummy', 'ind-rummy', 'jaiho-rummy'],
  },

  // ── SPIN / WHEEL (9) ─────────────────────────────────────────────────────────

  {
    name: 'Spin 101', slug: 'spin-101', logo: '/logos/spin-101.webp', category: 'Spin',
    tagline: '101 prize segments on every wheel — the most varied spin app in India',
    description: 'Spin 101 features a wheel with 101 distinct prize segments, including cash prizes, free spins, bonus multipliers, tournament tickets, and surprise gift vouchers. Unlike simpler spin apps, no two consecutive spins land on the same segment, giving genuinely varied outcomes on every round. Hourly, daily, and VIP tiers offer increasing prize values.',
    rating: 4.2, downloads: '800K+', size: '22 MB', minDeposit: '₹100', bonus: '₹101 Welcome Bonus',
    features: [
      '101 unique prize segments per wheel spin',
      'No consecutive-segment repeat algorithm',
      'Hourly, daily and VIP spin tiers',
      'Free spins for every daily login',
      'Surprise vouchers and merchandise prizes on select segments',
    ],
    downloadUrl: 'https://spin101-e.org/?code=Z9BR1AXYMH3&t=1782473000',
    faqs: [
      { q: 'What prizes can I win on Spin 101?', a: 'Spin 101 offers 101 prize types including instant cash (₹5 to ₹5,000), free spins, 2x multipliers, tournament tickets, and occasional ₹10,000 jackpot segments.' },
      { q: 'How many times can I spin per day on Spin 101?', a: 'Free users get 3 daily spins. Depositing ₹100+ unlocks 10 daily spins. VIP members get unlimited spins on the premium wheel.' },
      { q: 'How do I download Spin 101?', a: 'Download the APK from Spin 101\'s official website. Install after enabling unknown sources in Android settings. The app is only 22 MB.' },
    ],
    suggestedApps: ['yes-spin', 'jaiho-spin'],
  },

  {
    name: 'Spin 777', slug: 'spin-777', logo: '/logos/spin-777.webp', category: 'Spin',
    tagline: 'Triple 7 lucky wheel with jackpot multipliers on every spin',
    description: 'Spin 777 combines the classic lucky 777 motif with a multi-tier spin wheel. Land three 7s in a row across three linked wheels and trigger the 777 Mega Jackpot — a guaranteed minimum of ₹77,777. Regular spins offer cash from ₹10 to ₹777, and weekly 7-lucky-number events double all prizes on the 7th and 17th of each month.',
    rating: 4.3, downloads: '1M+', size: '28 MB', minDeposit: '₹100', bonus: '₹175 Welcome Bonus',
    features: [
      'Triple-linked wheel — land three 7s for the ₹77,777 jackpot',
      'Weekly double-prize events on the 7th and 17th',
      'Daily 7 lucky number draw with guaranteed cash prizes',
      'Spin history with win analytics dashboard',
      '777 VIP club for players spinning 77+ times per week',
    ],
    downloadUrl: 'https://spin777-t.com/?code=YLWAEF9UZ9W&t=1782473441',
    faqs: [
      { q: 'What is the Spin 777 Mega Jackpot?', a: 'Landing three 7 symbols across the three linked wheels triggers the 777 Mega Jackpot — minimum ₹77,777, and growing. It triggers on average once every 7,000 spins.' },
      { q: 'What is the Spin 777 welcome bonus?', a: 'New users receive a ₹175 welcome bonus on their first deposit of ₹100 or more. Visit our Promo Codes page for the current welcome code and enter it in the Wallet section to claim it.' },
      { q: 'How do I join the 777 VIP club?', a: 'The 777 VIP Club auto-enrolls players who complete 77 spins per week. VIP members get access to a higher-value private wheel with prizes up to ₹7,777 per spin.' },
    ],
    suggestedApps: ['spin-gold', 'spin-winner', 'yes-spin'],
  },

  {
    name: 'Spin Gold', slug: 'spin-gold', logo: '/logos/spin-gold.webp', category: 'Spin',
    tagline: 'Gold coin rewards and cash prizes on every spin of the wheel',
    description: 'Spin Gold rewards players with both real cash and Gold Coins on every spin. Gold Coins accumulate and can be exchanged for real money at a rate of 1,000 coins = ₹10, or used to unlock premium wheel segments with higher prize values. The Gold Streak system multiplies coin earnings for 7 consecutive daily spins.',
    rating: 4.1, downloads: '600K+', size: '20 MB', minDeposit: '₹100', bonus: '₹50 Welcome Bonus',
    features: [
      'Dual reward system — earn cash AND Gold Coins on every spin',
      '1,000 Gold Coins = ₹10 real cash (redeemable any time)',
      'Gold Streak: 7 consecutive days = 10x coin multiplier',
      'Premium Gold Wheel unlocked with 5,000 coins',
      'Daily Gold Raffle for all active spinning players',
    ],
    downloadUrl: 'https://spingoldvipagent.net/?code=S9VFE5T8JDS&t=1782473990',
    faqs: [
      { q: 'How do I convert Gold Coins to cash on Spin Gold?', a: 'Go to Wallet → Gold Coins → Convert. Every 1,000 coins converts to ₹10 real cash that is instantly added to your withdrawable balance.' },
      { q: 'What is the Gold Streak on Spin Gold?', a: 'Spin 7 days in a row to activate the Gold Streak, which gives you 10x coin earnings for the next 7 days. Missing one day resets the streak.' },
      { q: 'Is Spin Gold free to play?', a: 'Yes. Spin Gold offers 5 free spins daily for all registered users. Additional spins require a deposit, but the free daily spins always earn Gold Coins.' },
    ],
    suggestedApps: ['spin-101', 'jaiho-spin'],
  },

  {
    name: 'Spin Winner', slug: 'spin-winner', logo: '/logos/spin-winner.webp', category: 'Spin',
    tagline: 'High-frequency wins on every spin — the most rewarding wheel app',
    description: 'Spin Winner is engineered for maximum win frequency — 70% of spins return at least your bet amount, while the remaining 30% includes both losses and jackpot multipliers. This balanced approach gives players a sustained, enjoyable experience. The Winner Wall showcases real-time wins from across India to keep the excitement high.',
    rating: 4.3, downloads: '950K+', size: '23 MB', minDeposit: '₹100', bonus: '₹150 Welcome Bonus',
    features: [
      '70% win-rate wheel — most spins return at least your bet',
      'Real-time Winner Wall showing live wins across India',
      'Daily winner challenge with ₹5,000 top prize',
      'Accumulator mode — save spins for a bigger single spin',
      'Friend referral: earn ₹50 for each friend who spins 10 times',
    ],
    downloadUrl: 'https://spinwinner-y.com/?code=QVT2P3HKTUZ&t=1782474125',
    faqs: [
      { q: 'Is the 70% win rate on Spin Winner accurate?', a: 'Yes. Spin Winner\'s wheel is independently audited to confirm that 70% of spins result in a return ≥ the bet amount. Full audit reports are on their website.' },
      { q: 'What is Accumulator Mode on Spin Winner?', a: 'Instead of spinning one at a time, Accumulator Mode saves your daily free spins and combines them into a single high-value spin with a boosted prize pool.' },
      { q: 'How do I refer friends on Spin Winner?', a: 'Share your unique referral link from Profile → Refer & Earn. You earn ₹50 for each friend who makes their first deposit and completes 10 spins.' },
    ],
    suggestedApps: ['spin-777', 'slot-spin'],
  },

  {
    name: 'Yes Spin', slug: 'yes-spin', logo: '/logos/yes-spin.webp', category: 'Spin',
    tagline: 'Daily YES spin bonus — answer one question and spin to win',
    description: 'Yes Spin adds a fun interactive twist to the spin genre. Every day, answer one yes/no general knowledge question correctly and unlock a double-value spin. The yes/no format makes it accessible to everyone, and the question theme rotates daily between cricket, Bollywood, current affairs and general knowledge.',
    rating: 4.0, downloads: '400K+', size: '18 MB', minDeposit: '₹100', bonus: '₹30 Welcome Bonus',
    features: [
      'Daily yes/no question unlocks a double-value bonus spin',
      'Rotating question themes — cricket, Bollywood, GK, current affairs',
      '5 free "Yes Spins" credited on new account registration',
      'Weekly yes/no quiz tournament with ₹10,000 prize',
      'Share your daily answer and invite friends for 3 extra spins',
    ],
    downloadUrl: 'https://www.yesspinmotion.com/?code=47TMD53C9SA&t=1782475635',
    faqs: [
      { q: 'What is a Yes Spin?', a: 'A Yes Spin is a bonus spin unlocked by correctly answering the daily yes/no question. The prize on a Yes Spin is double the normal wheel value for that day.' },
      { q: 'What happens if I answer the daily question wrong?', a: 'A wrong answer still gives you your standard daily spin — you just miss the 2x bonus. The question resets the next day with a new topic.' },
      { q: 'Can I play Yes Spin without depositing?', a: 'Yes. New users get 5 free Yes Spins on registration. The free spins have smaller prize caps (₹50 max) but are a great way to try the app without spending.' },
    ],
    suggestedApps: ['spin-101', 'spin-gold'],
  },

  {
    name: 'Jaiho Spin', slug: 'jaiho-spin', logo: '/logos/jaiho-spin.webp', category: 'Spin',
    tagline: 'Jaiho\'s trusted lucky wheel with shared ecosystem rewards',
    description: 'Jaiho Spin is the spin-and-win component of the Jaiho gaming ecosystem. Winnings from Jaiho Spin flow directly into your shared Jaiho wallet, usable across Jaiho Rummy, Jaiho Slot and Jaiho Arcade. The Jaiho Mega Wheel event runs every Friday evening with a ₹1 lakh guaranteed prize distributed across 1,000 winners.',
    rating: 4.2, downloads: '700K+', size: '21 MB', minDeposit: '₹100', bonus: '₹100 Welcome Bonus',
    features: [
      'Shared Jaiho wallet — winnings usable on all Jaiho apps',
      'Friday Mega Wheel: ₹1 lakh prize, 1,000 winners guaranteed',
      'Jaiho loyalty points earned on every spin',
      'Cross-app spin missions (complete rummy + spin tasks for bonus)',
      'Spin history synced across all Jaiho devices',
    ],
    downloadUrl: 'https://18jaihospingames.com/?code=416GL765W3A&t=1782364119',
    faqs: [
      { q: 'Can I use Jaiho Spin winnings in Jaiho Rummy?', a: 'Yes. The shared Jaiho wallet means any winnings from Jaiho Spin are immediately available to use at Jaiho Rummy tables or Jaiho Slot without any transfer steps.' },
      { q: 'When does the Jaiho Mega Wheel run?', a: 'The Jaiho Mega Wheel event runs every Friday at 8 PM IST. All active Jaiho users are automatically entered for free. Depositing ₹100+ that week earns extra entries.' },
      { q: 'How do I get started with Jaiho Spin?', a: 'If you already have a Jaiho account, just log in and you\'re ready. New users can register on any Jaiho app and the same account works on Jaiho Spin instantly.' },
    ],
    suggestedApps: ['jaiho-rummy', 'jaiho-slot', 'jaiho-arcade'],
  },

  {
    name: 'Slot Spin', slug: 'slot-spin', logo: '/logos/slot-spin.webp', category: 'Spin',
    tagline: 'Slots and spin wheel combined — two games, double the winning chances',
    description: 'Slot Spin merges two popular real-cash formats into one seamless experience. Play slot machines to earn Spin Tokens, then use tokens on the bonus wheel for additional prizes. The reverse also works — certain wheel outcomes unlock free rounds on slot machines. A unique hybrid loop that keeps rewards flowing across both game types.',
    rating: 4.1, downloads: '550K+', size: '30 MB', minDeposit: '₹100', bonus: '₹125 Welcome Bonus',
    features: [
      'Earn Spin Tokens from slot wins to use on the bonus wheel',
      'Wheel outcomes unlock free rounds on linked slot machines',
      'Combined daily mission covering both games',
      '20 slot machines and 3 wheel tiers in one app',
      'Progressive prize pool fed by both game types',
    ],
    downloadUrl: 'https://www.slotsspinj.com/?code=C1A5F6PQW4M&t=1782470064',
    faqs: [
      { q: 'How does the Slot Spin hybrid system work?', a: 'Play slots to earn Spin Tokens with every win. Use tokens to spin the bonus wheel. Certain wheel segments trigger free slot rounds — creating a continuous loop of rewards.' },
      { q: 'Are the slots and spin wheel in Slot Spin independent?', a: 'They share the same wallet and reward system but play independently. You can focus on just slots, just the wheel, or use both interchangeably.' },
      { q: 'What is the minimum bet on Slot Spin slots?', a: 'Slot machines in Slot Spin start at ₹1 per spin. The wheel minimum is 1 Spin Token, which earns from winning just ₹5 on any slot.' },
    ],
    suggestedApps: ['spin-winner', 'ind-slots'],
  },

  // ── SLOTS (7) ────────────────────────────────────────────────────────────────

  {
    name: '567 Slots', slug: '567-slots', logo: '/logos/567-slots.webp', category: 'Slots',
    tagline: '567 payline configurations — the widest slot variety in India',
    description: '567 Slots earns its name from the 567 unique payline configurations available across its slot library. From 5-payline classic machines to 243-way video slots, every style is covered. A Payline Explorer feature lets you preview all active lines before betting, so you always know exactly what you\'re playing for.',
    rating: 4.2, downloads: '700K+', size: '45 MB', minDeposit: '₹100', bonus: '₹250 Welcome Bonus',
    features: [
      '567 payline configurations across 80+ slot machines',
      'Payline Explorer — preview all active lines before betting',
      'Classic 5-reel to modern 243-way video slots',
      'Free spin bonus rounds with expanding wilds',
      'Daily slot challenge with guaranteed ₹1,000 prize',
    ],
    downloadUrl: 'https://join567slots.com/?code=9UX4YQ28P28&t=1782032755',
    faqs: [
      { q: 'What does 567 paylines mean in 567 Slots?', a: '567 refers to the total unique payline configurations across all slot machines in the app. Individual machines have between 5 and 243 active paylines.' },
      { q: 'Can I try 567 Slots for free?', a: 'Yes. Every slot machine on 567 Slots has a demo mode where you can play with virtual credits before switching to real money. No registration required for demo.' },
      { q: 'How do I claim the 50 free spins on 567 Slots?', a: 'Register a new account and make your first deposit of ₹100+. The 50 free spins are instantly credited to your chosen slot machine in the app.' },
    ],
    suggestedApps: ['saga-slots', 'slots-winner', 'ind-slots'],
  },

  {
    name: 'Ind Slots', slug: 'ind-slots', logo: '/logos/ind-slots.webp', category: 'Slots',
    tagline: 'India-themed slot machines celebrating Indian culture and festivals',
    description: 'Ind Slots is India\'s most culturally immersive slot platform. Every machine is themed around Indian culture — Diwali Dhamaka, Holi Jackpot, Tiger Slots, Bollywood Reels, and more. Festival-exclusive machines appear during major holidays and pay out jackpots themed around the occasion. Hindi interface and UPI payments are fully supported.',
    rating: 4.3, downloads: '1.1M+', size: '52 MB', minDeposit: '₹100', bonus: '₹150 Welcome Bonus',
    features: [
      '50+ India-themed slot machines with cultural artwork',
      'Exclusive festival machines during Diwali, Holi, Eid, etc.',
      'Full Hindi language interface option',
      'Bollywood Reels series with film soundtrack integration',
      'Tiger Progressive Jackpot that grows with Indian players nationwide',
    ],
    downloadUrl: 'https://www.indslotsreferral.com/?code=T2QSBUR7LT4&t=1782362370',
    faqs: [
      { q: 'What India-themed slots does Ind Slots offer?', a: 'Ind Slots has 50+ machines themed around Indian culture: Diwali Dhamaka, Holi Jackpot, Bollywood Reels (5 series), Tiger Slots, Curry Rush, Monsoon Wilds and more.' },
      { q: 'Does Ind Slots have a Hindi interface?', a: 'Yes. Switch to Hindi under Settings → Language and the full app interface including game rules, Wallet and Support becomes available in Hindi.' },
      { q: 'What is the Tiger Progressive Jackpot?', a: 'The Tiger Jackpot is a networked progressive that grows with every spin on Tiger-series slots across all Indian players. It pays when three Tiger symbols land on payline 1.' },
    ],
    suggestedApps: ['567-slots', 'slots-winner'],
  },

  {
    name: 'Saga Slots', slug: 'saga-slots', logo: '/logos/saga-slots.webp', category: 'Slots',
    tagline: 'Epic narrative slot adventures — unlock new chapters as you win',
    description: 'Saga Slots turns slot gaming into a story-driven adventure. Each machine is a chapter in an ongoing saga — win on a machine to unlock the next chapter with better prizes and richer storylines. Three epic sagas are currently available: The Golden Empire, Ocean Treasure, and Mythic India. New chapters drop every two weeks.',
    rating: 4.4, downloads: '600K+', size: '60 MB', minDeposit: '₹100', bonus: '₹400 Welcome Bonus',
    features: [
      'Story-driven slot machines where wins unlock new chapters',
      'Three epic sagas: Golden Empire, Ocean Treasure, Mythic India',
      'New saga chapters released every two weeks',
      'Collectible items found in chapter slots to unlock bonus rounds',
      'Saga leaderboard ranks players by chapters completed',
    ],
    downloadUrl: 'https://www.sagaslots77.com/?code=0QH9UVHARQU&t=1782458248',
    faqs: [
      { q: 'How does the saga story system work?', a: 'Each slot machine in a saga is a chapter. Win the chapter objective (hit a certain payline 3 times) to unlock the next chapter with a harder challenge and bigger prizes.' },
      { q: 'Do I lose progress if I stop playing Saga Slots?', a: 'No. Your chapter progress is saved permanently to your account. You can stop at any chapter and resume from exactly where you left off on any device.' },
      { q: 'How large is the Saga Slots app download?', a: 'The initial download is 60 MB. Additional saga content (graphics and audio) downloads in background as you unlock new chapters, so there\'s no upfront large install.' },
    ],
    suggestedApps: ['567-slots', 'slots-winner', 'yono-slots'],
  },

  {
    name: 'Share Slots', slug: 'share-slots', logo: '/logos/share-slots.webp', category: 'Slots',
    tagline: 'Share your wins and earn extra spins from every friend who sees them',
    description: 'Share Slots introduces social sharing as a core reward mechanic. When you win ₹100+ on any slot, the app generates a shareable win card. Every friend who clicks your shared win card receives a free spin, and you earn 5% of their winnings as social cashback for 24 hours. The viral loop is real — top referrers earn ₹10,000+ per month purely from social cashback.',
    rating: 4.0, downloads: '450K+', size: '35 MB', minDeposit: '₹100', bonus: '₹75 Welcome Bonus',
    features: [
      'Social win cards — share wins and earn 5% social cashback',
      'Friends earn a free spin on clicking your shared win',
      'Social Cashback tracker in your Wallet dashboard',
      'Community jackpot — 10 players share spins to a collective pot',
      'Top referrer leaderboard with ₹5,000 monthly bonus',
    ],
    downloadUrl: 'https://share0022.com/?code=YAZRMEX5W98&t=1782459612',
    faqs: [
      { q: 'How does Share Slots social cashback work?', a: 'Every time you win ₹100+ and share the win card, your referrals who click the link and spin earn you 5% social cashback of their winnings for the next 24 hours.' },
      { q: 'What is the Share Slots Community Jackpot?', a: 'Up to 10 players can pool their free spins into a Community Jackpot. All spins go into one pot, and the combined winnings are split evenly among the 10 players.' },
      { q: 'Is Share Slots free to install?', a: 'Yes, the app is free to download and install. Free users get 2 daily spins on the Social Wheel with capped prizes. Depositing unlocks all 35+ premium slot machines.' },
    ],
    suggestedApps: ['spin-winner', 'slots-winner', 'yono-slots'],
  },

  {
    name: 'Slots Winner', slug: 'slots-winner', logo: '/logos/slots-winner.webp', category: 'Slots',
    tagline: 'High-RTP slot machines selected for the best Indian payout rates',
    description: 'Slots Winner is curated by payout rate — every slot machine listed maintains a minimum 95% RTP, with the top machines delivering over 97%. An independent audit badge on each game confirms the current RTP, so you always play the highest-paying slots. The platform also runs a daily ₹1 lakh High Roller Slots tournament.',
    rating: 4.5, downloads: '1.4M+', size: '48 MB', minDeposit: '₹100', bonus: '₹350 Welcome Bonus',
    features: [
      'All slot machines maintain 95%+ audited RTP',
      'Independent audit badge displayed on every game',
      'Daily ₹1 lakh High Roller Slots tournament',
      'Progressive jackpots on 10 featured machines',
      'No house edge on free spins — full RTP applies',
    ],
    downloadUrl: 'https://slotswinneragents.com/?code=PGVWTWRNB6F&t=1782470385',
    faqs: [
      { q: 'What does 95% RTP mean on Slots Winner?', a: 'A 95% RTP means for every ₹100 wagered across all players, ₹95 is returned as prizes on average. Slots Winner guarantees no machine falls below this floor, audited monthly.' },
      { q: 'Are the RTP badges on each game real?', a: 'Yes. All RTP badges are updated monthly by an independent auditing firm and the report is linked from each game page. You can verify the data yourself.' },
      { q: 'Can I play Slots Winner on my laptop or PC?', a: 'Yes. Slots Winner has a full web version that works on any desktop or laptop browser without downloading anything. The mobile app offers additional push notifications.' },
    ],
    suggestedApps: ['ind-slots', '567-slots', 'saga-slots'],
  },

  {
    name: 'Yono Slots', slug: 'yono-slots', logo: '/logos/yono-slots.webp', category: 'Slots',
    tagline: 'Premium Yono slots with HD themes and daily guaranteed prize drops',
    description: 'Yono Slots is the official slots arm of the Yono gaming platform, featuring 100+ premium HD slot machines with certified RNG and seamless integration with the Yono wallet. Exclusive Yono-branded machines offer progressive jackpots tied to the wider Yono player base, meaning jackpots grow faster and pay larger. Use any Yono promo code directly inside Yono Slots.',
    rating: 4.5, downloads: '1.8M+', size: '55 MB', minDeposit: '₹100', bonus: '₹300 Welcome Bonus',
    features: [
      '100+ HD slot machines with Yono platform branding',
      'Progressive jackpots tied to the full Yono player network',
      'Direct compatibility with all Yono promo codes',
      'Daily prize drop at random times — no spin required',
      'Yono Slots leaderboard with ₹2 lakh monthly top prize',
    ],
    downloadUrl: 'https://www.uonoslot.icu/?code=59YBLQ1756L&t=1782478570',
    faqs: [
      { q: 'Can I use my Yono promo codes in Yono Slots?', a: 'Yes. All Yono promo codes work directly inside Yono Slots — just enter them in Wallet → Promo Codes and the bonus is applied to your slots wallet. Get the latest codes from our Promo Codes page.' },
      { q: 'What is the Daily Prize Drop on Yono Slots?', a: 'Once every day (at a random time), Yono Slots credits a cash prize to 100 random players who are currently logged in and playing. No opt-in needed — just be playing when it drops.' },
      { q: 'Is Yono Slots the same account as Yono Games?', a: 'Yes. Yono Slots uses your main Yono account and wallet. Log in with the same credentials you use for Yono Rummy, Yono 777 or any other Yono product.' },
    ],
    suggestedApps: ['yono-777', 'yono-games', 'slots-winner'],
  },

  {
    name: 'Jaiho Slot', slug: 'jaiho-slot', logo: '/logos/jaiho-slot.webp', category: 'Slots',
    tagline: 'Jaiho\'s slot machine collection — part of the trusted Jaiho ecosystem',
    description: 'Jaiho Slot brings casino-quality slot machines to the Jaiho platform with 60+ machines ranging from simple 3-reel classics to complex 5-reel video slots. The shared Jaiho wallet means your rummy winnings can instantly fund slot sessions and vice versa. Weekly Jaiho Jackpot events pool prizes from across all Jaiho app players.',
    rating: 4.2, downloads: '650K+', size: '40 MB', minDeposit: '₹100', bonus: '₹100 Welcome Bonus',
    features: [
      '60+ slot machines from 3-reel classic to 5-reel video',
      'Shared Jaiho wallet usable across all Jaiho apps',
      'Weekly Jaiho Jackpot pooled from all Jaiho games',
      'Jaiho Loyalty Points earned on every slot spin',
      'Auto-play up to 100 rounds for hands-free sessions',
    ],
    downloadUrl: 'https://www.jaihoslots23.com/?code=QJSJQQDZDDM&t=1782363832',
    faqs: [
      { q: 'Can I use Jaiho Rummy balance in Jaiho Slot?', a: 'Yes. Jaiho Slot and Jaiho Rummy share the same wallet. Any balance deposited or won on either app is immediately usable on the other without any transfer.' },
      { q: 'What is the Jaiho Weekly Jackpot?', a: 'Every week, Jaiho pools a jackpot from contributions across Jaiho Slot, Jaiho Spin and Jaiho Rummy. It pays to the single player who hits a special jackpot symbol on any Jaiho game.' },
      { q: 'How do I auto-play on Jaiho Slot?', a: 'Tap the Auto-Play button on any slot machine, set your spin count (5 to 100), choose a stop-loss limit, and the machine plays automatically until finished.' },
    ],
    suggestedApps: ['jaiho-spin', 'jaiho-rummy', 'jaiho-arcade'],
  },

  // ── CASINO / 777 (6) ─────────────────────────────────────────────────────────

  {
    name: '777Game', slug: '777game', logo: '/logos/777game.webp', category: 'Slots',
    tagline: 'Full Las Vegas-style casino with 777 games in one app',
    description: '777Game is India\'s most complete online casino app with 777 games spanning slots, rummy, Teen Patti, blackjack, roulette, live dealer tables, and sports betting. A unified casino lobby gives instant access to any game, and VIP suite access is available for high rollers with dedicated 24/7 concierge support.',
    rating: 4.5, downloads: '2M+', size: '70 MB', minDeposit: '₹100', bonus: '₹400 Welcome Bonus',
    features: [
      '777 games including slots, table games and live dealer',
      'Live dealer Teen Patti, Roulette and Blackjack tables',
      'Sports betting integration for cricket and football',
      'VIP High Roller suite with dedicated concierge',
      '24/7 live casino stream with Indian dealers',
    ],
    downloadUrl: 'https://www.777game0.com/?code=H53SKREANMZ&t=1782649361',
    faqs: [
      { q: 'How many games does 777Game actually have?', a: '777Game hosts exactly 777 verified games across slots (400+), table games (200+), live dealer rooms (100+), and special jackpot games (77). The number is audited quarterly.' },
      { q: 'Is live dealer available on 777Game?', a: 'Yes. 777Game has a dedicated live casino section with 100+ live dealer tables including Teen Patti, Roulette, Blackjack, Baccarat and Andar Bahar with Indian dealers speaking Hindi.' },
      { q: 'What is the minimum deposit for 777Game VIP?', a: 'Standard VIP status starts at ₹10,000 cumulative deposits. Diamond VIP (with full concierge access) requires ₹1 lakh cumulative or ₹25,000 in one month.' },
    ],
    suggestedApps: ['yono-777', 'yn-777', 'jahio-777'],
  },

  {
    name: '789 Jackpot', slug: '789-jackpot', logo: '/logos/789-jackpot.webp', category: 'Slots',
    tagline: 'Progressive 7-8-9 jackpot cascade — three chances to win big',
    description: '789 Jackpot runs three linked progressive jackpots simultaneously: the 7 Jackpot (grows fastest), the 8 Jackpot (medium growth), and the 9 Jackpot (largest but rarest). Each slot spin contributes to all three. The cascade system means when one jackpot pays, the others grow at 2x speed for the next 48 hours.',
    rating: 4.3, downloads: '900K+', size: '50 MB', minDeposit: '₹100', bonus: '₹200 Welcome Bonus',
    features: [
      'Three simultaneous progressive jackpots (7, 8, and 9)',
      'Cascade system doubles growth speed after any jackpot win',
      'Live jackpot ticker on every screen',
      'Must-win meter — jackpot guaranteed to pay before ₹1 crore',
      'Jackpot history archive showing all past winners',
    ],
    downloadUrl: 'https://join789jackpots1.com/?code=VJJGANTLPWB&t=1782033375',
    faqs: [
      { q: 'How does the 789 three-jackpot system work?', a: 'Three separate progressive jackpots (7, 8, 9) grow simultaneously. Every spin feeds all three. The 7 Jackpot pays most often (small amount), the 9 Jackpot pays rarely (largest amount).' },
      { q: 'What is the must-win meter on 789 Jackpot?', a: 'The must-win meter tracks the maximum cap. The 9 Jackpot is guaranteed to pay before it reaches ₹1 crore. As it nears this cap, trigger probability increases significantly.' },
      { q: 'Can I see who won previous jackpots?', a: 'Yes. The Jackpot History page shows every winner\'s username (anonymized), prize amount and date for the last 12 months, giving you transparency on how often jackpots hit.' },
    ],
    suggestedApps: ['777game', 'slots-winner', 'yono-777'],
  },

  {
    name: 'Hindi777', slug: 'hindi777', logo: '/logos/hindi777.webp', category: 'Slots',
    tagline: 'India\'s first fully Hindi-language casino — play in your mother tongue',
    description: 'Hindi777 is built exclusively for Hindi-speaking players who want a complete casino experience without language barriers. Every element — game instructions, customer support, payment confirmations, and promotional offers — is in Hindi. Indian game shows influence the slot themes, and live dealers communicate exclusively in Hindi.',
    rating: 4.2, downloads: '800K+', size: '45 MB', minDeposit: '₹100', bonus: '₹150 Welcome Bonus',
    features: [
      '100% Hindi interface — all text, rules and menus in Hindi',
      'Live dealers who speak Hindi exclusively',
      'Indian game show-themed slot machines',
      'Hindi customer support via call, WhatsApp and chat',
      'Hindi-language tutorial videos for every game',
    ],
    downloadUrl: 'https://www.hindi777agent5.com/?code=7LF62XGS8GT&t=1782361149',
    faqs: [
      { q: 'Is Hindi777 only available in Hindi?', a: 'Yes — Hindi is the only interface language. This is intentional, making it the go-to platform for players who prefer Hindi in their gaming experience.' },
      { q: 'What games are on Hindi777?', a: 'Hindi777 offers slots (30+), Teen Patti, Andar Bahar, Rummy, and 777-style casino games. All game instructions and rules are in Hindi with voice explanations.' },
      { q: 'How do I deposit on Hindi777?', a: 'Hindi777 supports UPI, Paytm, PhonePe and net banking — all labeled in Hindi. The deposit screen walks you through each step in simple Hindi instructions.' },
    ],
    suggestedApps: ['ind-rummy', 'ind-club', '777game'],
  },

  {
    name: 'Jahio 777', slug: 'jahio-777', logo: '/logos/jahio-777.webp', category: 'Slots',
    tagline: 'Jahio 777 — win big with classic casino games and 777 bonus rounds',
    description: 'Jahio 777 delivers a focused classic casino experience built around the lucky 777 tradition. Three-reel classic slots, Teen Patti tables, and a dedicated 777 Bonus Round mode combine into a platform that feels both nostalgic and rewarding. Special 7 AM daily free spin and 7 PM jackpot draw keep players engaged at peak times.',
    rating: 4.1, downloads: '500K+', size: '38 MB', minDeposit: '₹100', bonus: '₹75 Welcome Bonus',
    features: [
      'Classic 3-reel slots with 777 bonus round mode',
      'Teen Patti with 777 side bet option',
      'Daily 7 AM free spin and 7 PM jackpot draw',
      'Lucky 7 daily cashback — 7% on net daily losses',
      'Old-school arcade aesthetic with modern real-cash payouts',
    ],
    downloadUrl: 'https://jaiho77790.com/?code=RZPNPWJBVJQ&t=1782362904',
    faqs: [
      { q: 'What is the 777 Bonus Round mode on Jahio 777?', a: 'When you land three 7s on any classic slot, a bonus round triggers with three separate 7-symbol wheels. Matching all three gives you the 777 Grand Prize of up to ₹7,777.' },
      { q: 'What is the 7 AM free spin on Jahio 777?', a: 'Every day at exactly 7 AM IST, all logged-in users receive one free spin on the Daily 7 Wheel. The wheel is active for 7 minutes only — you need to be online to claim it.' },
      { q: 'Is Jahio 777 the same as Jaiho from other apps?', a: 'Jahio 777 is a separate brand from the Jaiho ecosystem. They are different platforms with different owners, despite the similar-sounding name.' },
    ],
    suggestedApps: ['yono-777', '777game', 'yn-777'],
  },

  {
    name: 'Yn 777', slug: 'yn-777', logo: '/logos/yn-777.webp', category: 'Slots',
    tagline: 'Young and fast 777 — rapid casino rounds for the mobile generation',
    description: 'Yn 777 targets the young, fast-paced mobile gamer who wants quick casino sessions without long-form slot grinding. Round times are capped at 60 seconds — Teen Patti hands resolve in 30 seconds, 777 spins complete in 10 seconds, and cash is credited instantly. The Yn app is 28 MB — one of the lightest casino apps available.',
    rating: 4.0, downloads: '400K+', size: '28 MB', minDeposit: '₹100', bonus: '₹50 Welcome Bonus',
    features: [
      '60-second maximum round time across all games',
      '28 MB lightweight install — fastest casino app to load',
      'Teen Patti, 777 slots and instant games in one micro-app',
      'Snap withdrawal — cash credited within 5 minutes of request',
      'Night mode interface optimised for low-light play',
    ],
    downloadUrl: 'https://www.y754.com/?code=4SWBALCES8G&t=1782476034',
    faqs: [
      { q: 'Why are rounds capped at 60 seconds on Yn 777?', a: 'Yn 777 is designed for quick mobile sessions — commutes, breaks, spare moments. The 60-second cap means you can complete 5 games in 5 minutes and close the app.' },
      { q: 'What games are available on Yn 777?', a: 'Yn 777 offers Teen Patti (5 variants), 777 slots (20 machines), Andar Bahar, Dice, and instant lottery-style games — all with 60-second or shorter rounds.' },
      { q: 'How fast is the Yn 777 snap withdrawal?', a: 'Snap Withdrawal targets a 5-minute UPI credit time. During non-peak hours (9 AM–6 PM IST), most withdrawals complete in under 3 minutes.' },
    ],
    suggestedApps: ['777game', 'jahio-777', 'yono-777'],
  },

  // ── ARCADE / MULTI-GAME (5) ──────────────────────────────────────────────────

  {
    name: '101z', slug: '101z', logo: '/logos/101z.webp', category: 'Arcade',
    tagline: '101 games in one app — something for every kind of player',
    description: '101z packs over 101 real-cash games into a single lightweight app. From classic card games like Rummy and Teen Patti to instant games like Mines, Plinko, and Hi-Lo — the full library is accessible from one screen. A daily game recommendation engine suggests new games based on your play history to keep the experience fresh.',
    rating: 4.3, downloads: '1.2M+', size: '55 MB', minDeposit: '₹100', bonus: '₹200 Welcome Bonus',
    features: [
      '101+ games including cards, slots, instant wins and arcade',
      'Daily game recommendation based on your play history',
      'Mines, Plinko, Hi-Lo and Crash alongside classic card games',
      'Single wallet for all 101 games',
      'Game switch — move between games without closing the app',
    ],
    downloadUrl: 'https://101zvip2.com/?code=398LS183AB2&t=1782032243',
    faqs: [
      { q: 'Does 101z really have over 101 games?', a: '101z currently hosts 120 games and adds new ones monthly. The "101" in the name refers to the founding set — the library has grown well beyond that.' },
      { q: 'What is Plinko on 101z?', a: 'Plinko is a popular instant game where you drop a ball through a peg board. The slot it lands on determines your prize multiplier — from 0.2x to 1,000x.' },
      { q: 'Can I switch games mid-session on 101z?', a: 'Yes. The Game Switch feature lets you jump between games without losing your place. If you\'re mid-hand in rummy, you can check a slot result and return to the exact same rummy state.' },
    ],
    suggestedApps: ['yono-games', 'maha-games', 'jaiho-arcade'],
  },

  {
    name: 'Jaiho Arcade', slug: 'jaiho-arcade', logo: '/logos/jaiho-arcade.webp', category: 'Arcade',
    tagline: 'Jaiho\'s all-in-one arcade hub — rummy, slots, spin, and more',
    description: 'Jaiho Arcade is the master app for the entire Jaiho gaming ecosystem. Access Jaiho Rummy, Jaiho Slot, Jaiho Spin, and Jaiho Win from a single unified lobby. Your Jaiho Arcade account and wallet cover all Jaiho apps automatically. New Jaiho games launch in Arcade first before getting their own standalone apps.',
    rating: 4.4, downloads: '1.5M+', size: '62 MB', minDeposit: '₹100', bonus: '₹250 Welcome Bonus',
    features: [
      'Central hub for all Jaiho ecosystem games',
      'One account and wallet across every Jaiho product',
      'Exclusive Arcade-first game launches before standalone release',
      'Arcade Daily Challenge spanning two or more game types',
      'Cross-game Jaiho loyalty points accumulation',
    ],
    downloadUrl: 'https://www.jaihoarcade39.com/?code=74S26KHLRJD&t=1782363337',
    faqs: [
      { q: 'Does Jaiho Arcade replace the individual Jaiho apps?', a: 'Jaiho Arcade gives you access to all Jaiho games in one place. Individual apps still work, but Arcade is more convenient — one download, all games, one wallet.' },
      { q: 'Are there games on Jaiho Arcade not in other Jaiho apps?', a: 'Yes. Arcade-exclusive titles launch here first and may stay exclusive for 30–90 days before getting standalone apps. Watch the "New Games" tab for these.' },
      { q: 'What is the Arcade Daily Challenge?', a: 'Each day, the challenge spans two or more Jaiho games (e.g., win ₹50 on rummy AND land a 3x multiplier on slots). Completing both earns the day\'s Arcade Bonus.' },
    ],
    suggestedApps: ['jaiho-rummy', 'jaiho-slot', 'jaiho-spin'],
  },

  {
    name: 'Jaiho Win', slug: 'jaiho-win', logo: '/logos/jaiho-win.webp', category: 'Arcade',
    tagline: 'Win across the entire Jaiho ecosystem from one central dashboard',
    description: 'Jaiho Win is the Jaiho platform\'s reward and win-tracking hub. It shows your lifetime winnings, active bonuses, pending withdrawals and loyalty tier across all Jaiho apps in one dashboard. The "Win Goals" feature lets you set daily, weekly and monthly win targets with auto-notifications when you\'re close to hitting them.',
    rating: 4.1, downloads: '600K+', size: '20 MB', minDeposit: '₹100', bonus: '₹50 Welcome Bonus',
    features: [
      'Central win dashboard for all Jaiho apps',
      'Win Goals — set daily, weekly, monthly targets',
      'Real-time notifications as you approach win goals',
      'Lifetime win stats and personal records',
      'Auto-withdrawal trigger when wallet hits your target',
    ],
    downloadUrl: 'https://www.jaihowin11.com/?code=XZDTYJ1RY1Z&t=1782364383',
    faqs: [
      { q: 'What is Jaiho Win used for?', a: 'Jaiho Win is the control centre for your Jaiho experience. Track wins across all Jaiho games, manage bonuses, set withdrawal rules, and view your full gaming history from one screen.' },
      { q: 'Can I auto-withdraw on Jaiho Win?', a: 'Yes. Set an auto-withdrawal trigger in Jaiho Win (e.g., "withdraw when wallet reaches ₹1,000"). The system processes the withdrawal automatically without you needing to manually request it.' },
      { q: 'Is Jaiho Win a separate app or part of Jaiho Arcade?', a: 'Jaiho Win is available both as a standalone lightweight app (20 MB) and as a section inside Jaiho Arcade. Both versions access the same data and features.' },
    ],
    suggestedApps: ['jaiho-arcade', 'jaiho-rummy', 'jaiho-spin'],
  },

  {
    name: 'Jaiho91', slug: 'jaiho91', logo: '/logos/jaiho91.webp', category: 'Arcade',
    tagline: 'Jaiho\'s 91-game platform with highest-rated RTP in the Jaiho range',
    description: 'Jaiho91 is the premium tier of the Jaiho ecosystem with 91 hand-picked games that all maintain at least 91% RTP. The number 91 is intentional — both the game count and minimum RTP are 91. A stricter game selection process means only top-performing titles make it into the Jaiho91 library.',
    rating: 4.5, downloads: '1.1M+', size: '50 MB', minDeposit: '₹100', bonus: '₹91 Welcome Bonus',
    features: [
      '91 games all maintaining 91%+ audited RTP',
      'Premium game curation — only top performers included',
      'Monthly game audit with removed/replaced underperformers',
      'High-tier Jaiho loyalty points (1.5x vs standard Jaiho apps)',
      'Jaiho91 exclusive weekly tournament: ₹91,000 prize pool',
    ],
    downloadUrl: 'https://91jaihoapp.com/?code=C4238P5H5G8&t=1782362450',
    faqs: [
      { q: 'What makes Jaiho91 different from Jaiho Arcade?', a: 'Jaiho91 is a curated premium subset: only 91 games vs 120+ in Arcade, but all with verified 91%+ RTP. It\'s for players who prioritise payout quality over game variety.' },
      { q: 'What happens to games that fall below 91% RTP on Jaiho91?', a: 'Any game whose monthly audit shows RTP below 91% is removed and replaced. The Jaiho91 team publishes the audit report and replacement announcement each month.' },
      { q: 'Is Jaiho91 only available to existing Jaiho users?', a: 'No. You can register on Jaiho91 directly. However, if you already have a Jaiho account, the same credentials and wallet work immediately — no separate registration needed.' },
    ],
    suggestedApps: ['jaiho-arcade', 'jaiho-rummy', '777game'],
  },

  {
    name: 'Maha Games', slug: 'maha-games', logo: '/logos/maha-games.webp', category: 'Arcade',
    tagline: 'Maharashtra\'s favourite gaming platform — 50+ games with Marathi support',
    description: 'Maha Games is built by and for Maharashtra\'s gaming community. The platform features Marathi as a first-class language, regional game themes, and special tournaments tied to Maharashtra-specific festivals like Ganesh Chaturthi and Gudi Padwa. Classic Indian games like Patte Pe Patta and Pachisi sit alongside modern real-cash rummy and slots.',
    rating: 4.3, downloads: '900K+', size: '48 MB', minDeposit: '₹100', bonus: '₹125 Welcome Bonus',
    features: [
      'Full Marathi language interface',
      'Regional game themes celebrating Maharashtra culture',
      'Ganesh Chaturthi and Gudi Padwa special tournaments',
      'Classic Indian games: Pachisi, Patte Pe Patta, Tiplu',
      'Maharashtra leaderboard — compete with players from your state',
    ],
    downloadUrl: 'https://yono-mahagames.com/?code=J245RQFLS2L&t=1782367067',
    faqs: [
      { q: 'Is Maha Games only for Maharashtra residents?', a: 'No — Maha Games is open to all Indian players. However, its Marathi interface, regional themes and local tournament schedule are primarily designed for the Maharashtra audience.' },
      { q: 'What is the Ganesh Chaturthi tournament on Maha Games?', a: 'During the 11-day Ganesh Chaturthi festival, Maha Games runs special ₹11 lakh guaranteed tournament events daily, with culturally themed tables and exclusive prizes.' },
      { q: 'What is Tiplu on Maha Games?', a: 'Tiplu is a traditional Maharashtra card game similar to Teen Patti but with regional rule variations. Maha Games is one of the only platforms to offer it as a real-cash game.' },
    ],
    suggestedApps: ['ind-club', 'ind-rummy', 'yono-games'],
  },

  // ── BET / VIP / CLUB (6) ─────────────────────────────────────────────────────

  {
    name: 'Bet 213', slug: 'bet-213', logo: '/logos/bet-213.webp', category: 'Arcade',
    tagline: 'Sports betting and casino combined — bet on cricket and win on slots',
    description: 'Bet 213 bridges sports betting and casino gaming in one seamless app. Bet on live cricket, football, kabaddi and tennis alongside playing Teen Patti and slots. The 213 Combo Bet feature lets you link a sports bet outcome to a casino table stake — if your team wins, your casino buy-in is automatically doubled.',
    rating: 4.2, downloads: '800K+', size: '55 MB', minDeposit: '₹100', bonus: '₹100 Welcome Bonus',
    features: [
      'Live cricket, football, kabaddi and tennis sports betting',
      '213 Combo Bet — link sports outcome to casino stake',
      'Pre-match and live in-play betting markets',
      'Teen Patti, rummy and slots alongside sports',
      'Cash out feature — settle bets early before match ends',
    ],
    downloadUrl: 'https://www.bet213.cc/?code=2QT8E6SY5R3&t=1782033957',
    faqs: [
      { q: 'What is the 213 Combo Bet?', a: 'The Combo Bet lets you link a sports bet to a casino table. If your sports team wins, the system automatically doubles your buy-in on your chosen casino table — a compound win opportunity.' },
      { q: 'Can I bet on live matches in Bet 213?', a: 'Yes. Bet 213 offers in-play live betting with real-time odds that update ball-by-ball on cricket and minute-by-minute on football.' },
      { q: 'How do I deposit on Bet 213?', a: 'Bet 213 accepts UPI, net banking, Paytm and crypto (USDT). Minimum deposit is ₹100 for sports betting and ₹100 for the casino section.' },
    ],
    suggestedApps: ['mbm-bet', 'club-inr', 'yono-777'],
  },

  {
    name: 'Club INR', slug: 'club-inr', logo: '/logos/club-inr.webp', category: 'Arcade',
    tagline: 'INR gaming club with no currency conversion — all prizes in pure rupees',
    description: 'Club INR was founded on a single principle: Indian players should never lose money to currency conversion or foreign exchange rates. All games, prizes, deposits and withdrawals are 100% in Indian Rupees with guaranteed same-currency processing. No USD-converted bonuses, no forex markup — just clean INR gaming.',
    rating: 4.3, downloads: '700K+', size: '42 MB', minDeposit: '₹100', bonus: '₹175 Welcome Bonus',
    features: [
      '100% INR transactions — no forex conversion ever',
      'INR-only prize pools across all games',
      'Zero currency conversion charges on withdrawals',
      'Exclusive INR Jackpot running daily at ₹1 lakh',
      'INR loyalty tier — earn ₹ directly (not points) as rewards',
    ],
    downloadUrl: 'https://clubinrvip1.one/?code=WZJMGMZ4U1K&t=1782038302',
    faqs: [
      { q: 'Why does Club INR focus on Indian Rupees specifically?', a: 'Many gaming platforms quote prizes in USD or crypto and convert to INR at unfavourable rates. Club INR guarantees all prizes and payouts in INR with zero conversion markup.' },
      { q: 'What games are available on Club INR?', a: 'Club INR offers rummy, Teen Patti, slots, spin wheel, and fantasy cricket — all with INR-denominated stakes and prizes, no foreign currency involved at any stage.' },
      { q: 'Can I withdraw small amounts from Club INR?', a: 'Yes. Club INR\'s minimum withdrawal is ₹50 with no processing fee. Most UPI withdrawals complete in under 20 minutes.' },
    ],
    suggestedApps: ['inr-rummy', 'ind-club', 'mbm-bet'],
  },

  {
    name: 'Ind Club', slug: 'ind-club', logo: '/logos/ind-club.webp', category: 'Arcade',
    tagline: 'Indian players\' private gaming club with member-only tournaments',
    description: 'Ind Club operates on an invite-based club membership model. Standard registration gets you Club access, but bringing 5 friends upgrades you to Silver Member with a 10% weekly cashback. Silver members can invite up to 20 friends for Gold status, unlocking exclusive Gold tournaments with ₹25 lakh monthly prize pools reserved for members only.',
    rating: 4.2, downloads: '500K+', size: '38 MB', minDeposit: '₹100', bonus: '₹150 Welcome Bonus',
    features: [
      'Club membership tiers: Standard, Silver, Gold, Platinum',
      'Silver: 10% weekly cashback — Gold: exclusive ₹25 lakh tournaments',
      'Member-only private tables not accessible to non-members',
      'Club referral system — each friend upgrades your tier',
      'Annual Ind Club Championship with ₹1 crore prize pool',
    ],
    downloadUrl: 'https://indclub40.com/?code=W23E2SHD7PY&t=1782361758',
    faqs: [
      { q: 'How do I become a Silver Member on Ind Club?', a: 'Standard members become Silver by successfully referring 5 friends who each make a minimum deposit. Silver status activates immediately once the 5th referral deposits.' },
      { q: 'What exclusive tournaments do Gold Members get on Ind Club?', a: 'Gold Members access the monthly ₹25 lakh Ind Club Gold Series — 8 tournaments per month across rummy, Teen Patti and slots that are invisible to Standard members.' },
      { q: 'Is there a fee to join Ind Club?', a: 'No joining fee. Standard Club membership is free. Tier upgrades are earned through referrals, not paid subscriptions.' },
    ],
    suggestedApps: ['club-inr', 'neta-vip', 'yono-vip'],
  },

  {
    name: 'MBM Bet', slug: 'mbm-bet', logo: '/logos/mbm-bet.webp', category: 'Arcade',
    tagline: 'Multi-bet mobile platform — place multiple bets across sports and games',
    description: 'MBM Bet stands for Multi-Bet Mobile, and the platform lives up to the name. You can simultaneously hold up to 10 active bets across cricket, football, rummy, and slots at the same time, tracked in real time from one bet slip. The MBM Accumulator builds compound returns across multiple outcomes — win more when everything goes right.',
    rating: 4.1, downloads: '450K+', size: '45 MB', minDeposit: '₹100', bonus: '₹75 Welcome Bonus',
    features: [
      'Hold up to 10 simultaneous bets across games and sports',
      'MBM Accumulator — compound bets across multiple outcomes',
      'Live real-time bet slip tracking for all active bets',
      'Partial cash-out on individual legs of an accumulator',
      'Bet builder — combine bet types within a single match',
    ],
    downloadUrl: 'https://www.mbmbet14.com/?code=UPHMK55JNJ6&t=1782367306',
    faqs: [
      { q: 'What is the MBM Accumulator?', a: 'The MBM Accumulator lets you combine up to 10 bets where all must win for the combined return. But unlike standard accumulators, you can cash out any single leg early if needed.' },
      { q: 'Can I do partial cash-out on MBM Bet?', a: 'Yes. Partial cash-out lets you settle a portion of any open bet — for example, cash out 50% of a cricket bet while letting the other 50% ride to the end of the match.' },
      { q: 'What sports can I bet on with MBM Bet?', a: 'MBM Bet covers cricket (IPL, international), football (EPL, ISL), kabaddi, badminton, tennis and esports — plus casino games and rummy all from the same bet slip.' },
    ],
    suggestedApps: ['bet-213', 'club-inr', '777game'],
  },

  {
    name: 'Neta Vip', slug: 'neta-vip', logo: '/logos/neta-vip.webp', category: 'VIP',
    tagline: 'Leader-level VIP gaming — the most exclusive platform for serious players',
    description: 'Neta Vip (neta = leader in Hindi) is reserved for India\'s most active online gaming community. To join, players must complete a verification process including identity, banking, and a minimum activity level. In return, Neta VIP members receive dedicated account managers, custom tournament invitations, and exclusive ₹1 crore monthly events.',
    rating: 4.4, downloads: '300K+', size: '40 MB', minDeposit: '₹100', bonus: '₹500 Welcome Bonus',
    features: [
      'Application-based VIP membership with eligibility check',
      'Dedicated personal account manager for each VIP member',
      'Monthly exclusive ₹1 crore event for Neta members only',
      'VIP withdrawal — 30-minute guaranteed processing 24/7',
      'Concierge deposit assistance (UPI, NEFT, crypto support)',
    ],
    downloadUrl: 'https://www.neta1.vip/?code=DR0D36UVVZX&t=1782371532',
    faqs: [
      { q: 'How do I qualify for Neta Vip?', a: 'Neta VIP applications are reviewed individually. Minimum requirements include identity verification, a 90-day gaming history, and average monthly deposit of ₹5,000+.' },
      { q: 'What does a Neta Vip account manager do?', a: 'Your dedicated account manager handles any issue personally — withdrawals, bonus queries, technical problems — bypassing all normal support queues with a direct phone/WhatsApp line.' },
      { q: 'What is the monthly ₹1 crore Neta event?', a: 'The Neta Monthly Main Event is an invitation-only tournament with a ₹1 crore guaranteed prize pool across rummy and poker. Top 200 Neta members by activity receive automatic invitations.' },
    ],
    suggestedApps: ['yono-vip', 'ind-club', 'club-inr'],
  },

  {
    name: 'Yono Vip', slug: 'yono-vip', logo: '/logos/yono-vip.webp', category: 'VIP',
    tagline: 'Yono\'s exclusive VIP tier — elevated rewards across all Yono games',
    description: 'Yono Vip is the premium tier of the Yono gaming ecosystem, automatically unlocking when your cumulative Yono deposits reach ₹10,000. VIP members earn 3x loyalty points on every game, access exclusive VIP-only tournaments, and receive a monthly cashback of up to ₹5,000 on net losses regardless of which Yono game they play.',
    rating: 4.5, downloads: '800K+', size: '35 MB', minDeposit: '₹100', bonus: '₹400 Welcome Bonus',
    features: [
      'Auto-unlock at ₹10,000 cumulative Yono deposits',
      '3x loyalty points on every Yono game played',
      'Monthly cashback up to ₹5,000 on net losses',
      'VIP-only tournaments across rummy, slots and 777',
      'Priority withdrawal — all requests processed within 15 minutes',
    ],
    downloadUrl: 'https://yonovipindia.vip/?code=9U8WLAJJSM5&t=1782481304',
    faqs: [
      { q: 'How do I become a Yono Vip member?', a: 'Yono Vip status unlocks automatically when your total lifetime deposits across all Yono products reach ₹10,000. No application needed — the status activates instantly.' },
      { q: 'Does Yono Vip status apply to all Yono games?', a: 'Yes. Yono Vip status and all its benefits apply across every Yono product — Yono Rummy, Yono Slots, Yono 777, Yono Games and any new Yono app that launches.' },
      { q: 'What happens if I go below ₹10,000 cumulative after reaching VIP?', a: 'Yono Vip is based on lifetime cumulative deposits, which never decrease. Once you hit ₹10,000 total deposits, your VIP status is permanent and cannot be revoked.' },
    ],
    suggestedApps: ['yono-games', 'neta-vip', 'ind-club'],
  },

  // ── BINGO (2) ────────────────────────────────────────────────────────────────

  {
    name: 'Bingo 101', slug: 'bingo-101', logo: '/logos/bingo-101.webp', category: 'Arcade',
    tagline: '101 daily bingo patterns — the most varied online bingo in India',
    description: 'Bingo 101 offers 90-ball traditional bingo with 101 different winning patterns per game day, ranging from classic line and full house to complex shapes like the Taj Mahal, Cricket Bat and Lotus patterns. Daily pattern schedules are published 24 hours in advance so players can plan which sessions to enter.',
    rating: 4.1, downloads: '600K+', size: '30 MB', minDeposit: '₹100', bonus: '₹30 Welcome Bonus',
    features: [
      '101 unique winning patterns across the day\'s bingo sessions',
      'Pattern schedule published 24 hours in advance',
      'Auto-daub feature marks numbers automatically',
      'Multi-card play — up to 12 bingo cards per game',
      'Daily Housie special with ₹50,000 full house prize',
    ],
    downloadUrl: 'https://bingo101.buzz/?code=3WFSBEZLPYL&t=1782037952',
    faqs: [
      { q: 'What is 90-ball bingo on Bingo 101?', a: '90-ball bingo uses cards with 27 squares and balls numbered 1–90. Prizes pay for 1-line, 2-line and Full House within each game — three chances to win per ticket.' },
      { q: 'What is the auto-daub feature?', a: 'Auto-daub automatically marks called numbers on all your active bingo cards without you needing to tap each one. Essential when playing 6+ cards simultaneously.' },
      { q: 'What is the Bingo 101 Daily Housie?', a: 'Housie is the traditional Indian bingo format. Bingo 101\'s Daily Housie runs at 8 PM IST with a ₹50,000 Full House prize and a ₹10 per card entry fee.' },
    ],
    suggestedApps: ['ind-club'],
  },

];

export const appsBySlug: Record<string, AppData> = Object.fromEntries(apps.map(a => [a.slug, a]));

