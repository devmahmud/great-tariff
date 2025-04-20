interface TariffPolicy {
  tariffRate?: number;
  action: 'block' | 'delay' | 'log';
}

interface TariffConfig {
  policies: Record<string, TariffPolicy>;
  mode: string;
}

const config: TariffConfig = {
  policies: {
    lodash: { tariffRate: 30, action: 'delay' },
    axios: { tariffRate: 20, action: 'log' },
    'china-module': { action: 'block' },
    'mexico-wall': { action: 'block' },
    react: { tariffRate: 45, action: 'delay' },
    'react-dom': { tariffRate: 50, action: 'log' },
  },
  mode: 'MakeImportsGreatAgain',
};

export default config;
