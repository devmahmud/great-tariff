interface QuoteParams {
  pkg: string;
  action: 'block' | 'delay' | 'log';
  rate?: number;
}

export function getQuote({ pkg, action, rate }: QuoteParams): string {
  const blockPhrases = [
    `The way "${pkg}" treats us is horrible. Just horrible.`,
    `"${pkg}"? Disaster. Sad. We're gonna fix it.`,
    `"${pkg}" has been taking advantage of us for years. Not anymore.`,
  ];

  const delayPhrases = [
    `"${pkg}"? Total joke. We're gonna delay it until it's great again.`,
    `It's not a delay. It's a negotiation tactic. Very strong.`,
  ];

  const logPhrases = [
    `We're putting a big, beautiful tariff on "${pkg}" – maybe the biggest ever. People are talking.`,
    `Nobody knows "${pkg}" better than me. And it needs a tariff. Believe me.`,
    `Tremendous tariff on "${pkg}". It's going to be so fair, you won't believe it.`,
    `We used to import "${pkg}" for free. Can you believe that! Not anymore!`,
    `I talked to many smart people — they all agree "${pkg}" needs a tariff.`,
  ];

  const phrases =
    action === 'block' ? blockPhrases : action === 'delay' ? delayPhrases : logPhrases;

  const intros = [
    `🚨 Tariff Alert!`,
    `📢 Presidential Import Tax in Effect:`,
    `🇺🇸 Making Imports Great Again...`,
    `🧱 Building a firewall against "${pkg}"...`,
    `🕵️ Evaluating "${pkg}" for national import security...`,
  ];

  const outro = rate ? `This will be a ${rate}% tariff. Historic.` : `No free rides here, folks.`;

  const random = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

  return `${random(intros)}\n🗣️ ${random(phrases)}\n📊 ${outro}`;
}

export default { getQuote };
