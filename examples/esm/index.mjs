import { imposeTariff, setConfig } from '../../dist/index.js';

// Configure tariffs
setConfig({
  policies: {
    lodash: { tariffRate: 30, action: 'delay' },
    axios: { tariffRate: 20, action: 'log' },
    'china-module': { action: 'block' },
    react: { tariffRate: 45, action: 'delay' },
  },
});

// Example usage
async function main() {
  try {
    // This will be delayed
    const lodash = await imposeTariff('lodash');
    console.log('Lodash imported successfully');

    // This will just log a warning
    const axios = await imposeTariff('axios');
    console.log('Axios imported successfully');

    // This will throw an error
    await imposeTariff('china-module');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
