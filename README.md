# 🇺🇸 great-tariff

> "The best tariffs. Tremendous tariffs. Nobody does tariffs better than me."  
> – Not Actually Donald Trump

**`great-tariff`** is a satirical NPM package that simulates tariffs on your JavaScript imports. Slow them down, block them, or just mock them — all with Trump-style commentary.

## 🎯 Why?

Because your imports are too free. Too wild. It's time for law and order in your `node_modules`.

## 🧰 Features

- 🧱 Delay imports with fake tariff percentages
- 🚫 Block certain packages (e.g. `china-module`, `mexico-wall`)
- 🔊 Console warnings that rant like a press conference
- 🎤 Dynamic Trump quotes tied to package names and tariffs
- 🇺🇸 MakeImportsGreatAgain mode — because why not?
- 📘 Works with both JavaScript and TypeScript
- 🧪 Comprehensive test suite
- ⚙️ Fully configurable tariff policies

## 📦 Installation

```bash
# Using npm
npm install great-tariff

# Using pnpm
pnpm add great-tariff

# Using yarn
yarn add great-tariff
```

## 🚀 Usage

### JavaScript (CommonJS)
```js
const { imposeTariff, setConfig } = require('great-tariff');

// Configure your tariffs
setConfig({
  policies: {
    'lodash': { tariffRate: 30, action: 'delay' },
    'axios': { tariffRate: 20, action: 'log' },
    'china-module': { action: 'block' },
  }
});

const _ = await imposeTariff('lodash');     // Adds delay
const axios = await imposeTariff('axios');  // Logs a warning
```

### JavaScript (ESM)
```js
import { imposeTariff, setConfig } from 'great-tariff';

// Configure your tariffs
setConfig({
  policies: {
    'lodash': { tariffRate: 30, action: 'delay' },
    'axios': { tariffRate: 20, action: 'log' },
    'china-module': { action: 'block' },
  }
});

const _ = await imposeTariff('lodash');     // Adds delay
const axios = await imposeTariff('axios');  // Logs a warning
```

### TypeScript
```ts
import { imposeTariff, setConfig, TariffConfig } from 'great-tariff';

// Configure your tariffs
setConfig({
  policies: {
    'lodash': { tariffRate: 30, action: 'delay' },
    'axios': { tariffRate: 20, action: 'log' },
    'china-module': { action: 'block' },
  }
});

const _ = await imposeTariff('lodash');     // Adds delay
const axios = await imposeTariff('axios');  // Logs a warning
```

## 🧠 Tariff Actions

| Action  | Effect                                     |
| ------- | ------------------------------------------ |
| `delay` | Adds fake loading delay based on rate      |
| `log`   | Prints a huge warning with a Trump quote   |
| `block` | Throws error and refuses to import package |

## 📝 Configuration

The package is fully configurable through the `setConfig` function. You can set different policies for different packages:

```ts
interface TariffPolicy {
  tariffRate?: number;  // Percentage for delay calculation
  action: 'block' | 'delay' | 'log';  // Action to take
}

interface TariffConfig {
  policies: Record<string, TariffPolicy>;  // Package name -> policy mapping
  mode?: string;  // Optional mode string
}

// Example configuration
setConfig({
  policies: {
    'lodash': { tariffRate: 30, action: 'delay' },
    'axios': { tariffRate: 20, action: 'log' },
    'china-module': { action: 'block' },
    'react': { tariffRate: 45, action: 'delay' },
  },
  mode: 'MakeImportsGreatAgain'
});
```

## 📚 Examples

Check out the `examples` directory for complete working examples in both ESM and CommonJS:

```bash
# Build the package first
npm run build

# Run ESM example
node examples/esm/index.mjs

# Run CommonJS example
node examples/commonjs/index.cjs
```

## 🧪 Testing

The package includes a comprehensive test suite. Run tests with:

```bash
# Using npm
npm test

# Using pnpm
pnpm test

# Using yarn
yarn test
```

Tests cover:
- Quote generation for different actions
- Tariff imposition timing
- Error handling
- Console output
- Module resolution
- Configuration system

## 🤡 Disclaimer

This package is purely a parody — it doesn't reflect real-world politics or actual economic policy. Don't use it in production unless your app is built on memes.

## 📜 License

MIT — Make Imports Trumpish Again
