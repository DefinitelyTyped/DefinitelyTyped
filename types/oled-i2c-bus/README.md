# Type definitions for oled-i2c-bus

TypeScript type definitions for [oled-i2c-bus](https://github.com/baltazorr/oled-i2c-bus) - A NodeJS driver for I2C connected monochrome OLED screens on Raspberry Pi.

## Installation (once published to DefinitelyTyped)

```bash
npm install --save-dev @types/oled-i2c-bus
```

## Usage

```typescript
import Oled = require('oled-i2c-bus')
import { openSync } from 'i2c-bus'

const i2cBus = openSync(1)
const oled = new Oled(i2cBus, {
  width: 128,
  height: 64,
  address: 0x3c,
  driver: 'SSD1306',
})

// Use types
const font: Oled.Font = {
  width: 5,
  height: 7,
  lookup: ['A', 'B', 'C'],
  fontData: [0x00, 0x00, 0x00],
}

oled.clearDisplay()
oled.setCursor(0, 0)
oled.writeString(font, 1, 'Hello World!', 1, true)
```

## Submitting to DefinitelyTyped

To submit these types to DefinitelyTyped, follow these steps:

### 1. Fork and Clone DefinitelyTyped

```bash
git clone https://github.com/DefinitelyTyped/DefinitelyTyped.git
cd DefinitelyTyped
```

### 2. Create a new branch

```bash
git checkout -b oled-i2c-bus-types
```

### 3. Copy the type definitions

Copy the contents of this `types/oled-i2c-bus` folder to `types/oled-i2c-bus` in the DefinitelyTyped repository:

```bash
cp -r /path/to/oled-i2c-bus/types/oled-i2c-bus ./types/
```

### 4. Update tsconfig.json paths

In DefinitelyTyped, update the `tsconfig.json` to use the correct paths:

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "lib": ["es6"],
    "noImplicitAny": true,
    "noImplicitThis": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "types": [],
    "noEmit": true,
    "forceConsistentCasingInFileNames": true,
    "esModuleInterop": true
  },
  "files": ["index.d.ts", "oled-i2c-bus-tests.ts"]
}
```

### 5. Install dependencies and test

```bash
npm install
npm run lint oled-i2c-bus
npm run test oled-i2c-bus
```

### 6. Create a Pull Request

Push your branch and create a PR to DefinitelyTyped with:

- Title: `[oled-i2c-bus] Add type definitions`
- Description including:
  - Documentation URL: https://github.com/baltazorr/oled-i2c-bus
  - Source code URL: https://github.com/baltazorr/oled-i2c-bus/blob/master/oled.js

## File Structure

```
types/oled-i2c-bus/
├── index.d.ts              # Main type definitions
├── oled-i2c-bus-tests.ts   # Type tests
├── tsconfig.json           # TypeScript configuration
├── .eslintrc.json          # ESLint configuration for dtslint
└── README.md               # This file
```

## Credits

Based on the [oled-i2c-bus](https://github.com/baltazorr/oled-i2c-bus) package by:

- Judd Flamm
- Suz Hinton
- Bogdan Symchych
- Abdul Hadi Fikri
