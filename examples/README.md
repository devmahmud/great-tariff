# Great Tariff Examples

This directory contains example implementations of the Great Tariff package using both ESM and CommonJS module systems.

## Directory Structure

```
examples/
├── esm/
│   └── index.mjs      # ESM example
└── commonjs/
    └── index.cjs      # CommonJS example
```

## Running the Examples

First, build the package:

```bash
npm run build
# or
pnpm build
# or
yarn build
```

### Running ESM Example

```bash
node examples/esm/index.mjs
```

### Running CommonJS Example

```bash
node examples/commonjs/index.cjs
```

## Example Output

Both examples will demonstrate:
1. Delayed import of 'lodash'
2. Warning log for 'axios'
3. Blocked import of 'china-module'

You should see output similar to:

```
🚨 Tariff Alert!
🗣️ "lodash"? Total joke. We're gonna delay it until it's great again.
📊 This will be a 30% tariff. Historic.
⏳ Holding import for 300ms...
Lodash imported successfully

📢 Presidential Import Tax in Effect:
🗣️ We're putting a big, beautiful tariff on "axios" – maybe the biggest ever. People are talking.
📊 This will be a 20% tariff. Historic.
Axios imported successfully

Error: 🛑 Import Blocked: "china-module"
The way "china-module" treats us is horrible. Just horrible.
``` 