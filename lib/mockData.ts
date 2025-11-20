import { Token } from './tokenSlice'

export function seedTokens(): Token[] {
  const categories: Token['category'][] = ['new', 'stretch', 'migrated']
  const tiers: Array<Token['spotlightTier']> = ['P1', 'P2', 'P3']
  const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/2048px-Tesla_logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/SpaceX_logo_black.svg/2560px-SpaceX_logo_black.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/NVIDIA_logo.svg/2560px-NVIDIA_logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png'
  ]

  return Array.from({ length: 300 }).map((_, index) => {
    const price = Number((Math.random() * 10).toFixed(4))
    const image = logos[index % logos.length]
    const change24h = Number(((Math.random() - 0.5) * 20).toFixed(2))
    // Generate realistic wide-ranging values
    const rand = Math.random()
    let marketCap, volume

    if (rand > 0.9) {
      // Large Cap: $10M - $1B
      marketCap = 10_000_000 + Math.random() * 990_000_000
      volume = 500_000 + Math.random() * 50_000_000
    } else if (rand > 0.6) {
      // Mid Cap: $100k - $10M
      marketCap = 100_000 + Math.random() * 9_900_000
      volume = 10_000 + Math.random() * 500_000
    } else {
      // Small Cap: $1k - $100k
      marketCap = 1_000 + Math.random() * 99_000
      volume = 100 + Math.random() * 20_000
    }

    marketCap = Number(marketCap.toFixed(0))
    volume = Number(volume.toFixed(0))
    const fee = Number((Math.random() * 100).toFixed(2))
    const tx = Math.floor(Math.random() * 5000)
    const liquidity = `${(Math.random() * 10).toFixed(2)} SOL`
    const mintedSeconds = Math.floor(Math.random() * 600)
    const watchers = Math.floor(Math.random() * 200)
    const crowns = `${Math.floor(Math.random() * 12)}/${Math.floor(Math.random() * 80) + 10}`
    const holders = Math.floor(Math.random() * 1000)
    const scans = Math.floor(Math.random() * 50)
    const reviews = Math.floor(Math.random() * 20)
    const score = `${Math.floor(Math.random() * 10)}/10`
    const spotlightTier = tiers[index % tiers.length]
    const badges = [
      { label: 'DS 3mo', tone: 'neutral' },
      { label: '74%', tone: 'critical' },
      { label: '5%', tone: 'success' }
    ].filter(() => Math.random() > 0.3) as Token['badges']

    const indicators = []
    if (Math.random() > 0.7) indicators.push({ key: 'audit', label: 'Audit', color: 'bg-emerald-900/40 text-emerald-300' })
    if (Math.random() > 0.6) indicators.push({ key: 'locked', label: 'Locked', color: 'bg-amber-900/40 text-amber-300' })
    if (Math.random() > 0.85) indicators.push({ key: 'bot', label: 'Bot', color: 'bg-rose-900/40 text-rose-300' })

    const age = `${Math.floor(Math.random() * 59)}m`
    const devStatus = {
      action: Math.random() > 0.5 ? 'held' : 'sold',
      percentage: Math.floor(Math.random() * 100)
    } as const

    const smartMoney = {
      buy: Math.floor(Math.random() * 5),
      sell: Math.floor(Math.random() * 2)
    }

    const progress = [
      { label: 'B', value: Math.floor(Math.random() * 100), color: 'bg-emerald-500' },
      { label: 'S', value: Math.floor(Math.random() * 100), color: 'bg-rose-500' },
      { label: 'L', value: Math.floor(Math.random() * 100), color: 'bg-blue-500' }
    ]

    return {
      id: String(index + 1),
      symbol: `TKN${index + 1}`,
      name: `Token ${index + 1}`,
      image,
      price,
      change24h,
      category: categories[index % categories.length],
      marketCapUsd: marketCap,
      volumeUsd: volume,
      fee,
      tx,
      liquidity,
      mintedSeconds,
      watchers,
      crowns,
      holders,
      scans,
      reviews,
      score,
      spotlightTier,
      badges,
      indicators,
      socials: {
        website: Math.random() > 0.5,
        twitter: Math.random() > 0.5,
        telegram: Math.random() > 0.5
      },
      age,
      devStatus,
      smartMoney,
      progress
    }
  })
}
