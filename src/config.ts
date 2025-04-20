export interface TariffPolicy {
  tariffRate?: number;
  action: 'block' | 'delay' | 'log';
}

export interface TariffConfig {
  policies: Record<string, TariffPolicy>;
  mode?: string;
}

export const defaultConfig: TariffConfig = {
  policies: {},
  mode: 'MakeImportsGreatAgain',
};

let userConfig: TariffConfig = defaultConfig;

export function setConfig(config: Partial<TariffConfig>) {
  userConfig = {
    ...defaultConfig,
    ...config,
    policies: {
      ...defaultConfig.policies,
      ...config.policies,
    },
  };
}

export function getConfig(): TariffConfig {
  return userConfig;
}
