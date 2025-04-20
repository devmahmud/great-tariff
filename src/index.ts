import { getQuote } from './quotes';
import config from '../tariff.config';

const delay = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

export async function imposeTariff(pkgName: string): Promise<any> {
  const policy = config.policies?.[pkgName];

  if (!policy) return require(pkgName);

  const { action, tariffRate = 10 } = policy;
  const quote = getQuote({ pkg: pkgName, action, rate: tariffRate });

  if (action === 'block') {
    throw new Error(`🛑 Import Blocked: "${pkgName}"\n${quote}`);
  }

  if (action === 'delay') {
    const time = tariffRate * 10;
    console.log(`${quote}\n⏳ Holding import for ${time}ms...`);
    await delay(time);
  }

  if (action === 'log') {
    console.warn(quote);
  }

  return require(pkgName);
}

export default { imposeTariff };
