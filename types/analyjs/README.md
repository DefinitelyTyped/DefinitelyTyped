# @types/analy-js

This package contains **TypeScript type definitions** for **AnaLy.js**.

> AnaLy.js is a privacy-aware browser and device environment snapshotting library.

---

## 📦 Installation

This package is published to npm as part of **DefinitelyTyped**.

```bash
npm install --save-dev @types/analyjs
```

AnaLy.js must already be installed separately:

```bash
npm install analyjs
```

---

## 📚 Usage

These type definitions provide full typings for the global and module-based API.

### ES Module

```ts
import AnaLy from "analy-js";

const snapshot = AnaLy.getSnapshot();
```

### Async Snapshot

```ts
const snapshot = await AnaLy.getSnapshotAsync();
```

---

## ⚙️ Configuration

```ts
const config: AnaLyConfig = {
  anonymizeIP: true,
  anonymizeUA: true,
  autoSend: false,
};
```

---

## 📊 Snapshot Example

```ts
const snapshot: Snapshot = AnaLy.getSnapshot();

snapshot.browser.name;
snapshot.hardware.cores;
snapshot.network.effectiveType;
```

---

## 🧠 API Overview

```ts
interface APIType {
  version: string;

  getSnapshot(
    extra?: Record<string, any>,
    config?: AnaLyConfig
  ): Snapshot;

  getSnapshotAsync(
    extra?: Record<string, any>,
    config?: AnaLyConfig
  ): Promise<Snapshot>;

  sendData(
    url: string,
    extraData?: Record<string, any>,
    options?: SendOptions
  ): Promise<void>;

  setupRealtime(
    url: string,
    extraData?: Record<string, any>,
    config?: AnaLyConfig
  ): void;

  stopRealtime(): void;
}
```

---

## 📐 Supported Interfaces

The following interfaces are fully typed:

- `AnaLyConfig`
- `Snapshot`
- `BrowserInfo`
- `JSFeatures`
- `HardwareInfo`
- `ScreenSnapshot`
- `NetworkSnapshot`
- `LocaleInfo`
- `PrivacyInfo`
- `MediaInfo`
- `InputInfo`
- `BatteryInfo`

---

## 🌍 Global Variable

This definition also exposes a global variable:

```ts
declare const AnaLy: APIType;
export default AnaLy;
```

---

## 🔗 Links

- Project: https://www.npmjs.com/package/analyjs

---

## 📄 License

MIT
