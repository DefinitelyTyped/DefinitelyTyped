import AnaLy, {
  AnaLyConfig,
  Snapshot,
  BrowserInfo,
  HardwareInfo,
  LocaleInfo,
} from "analyjs";

/* Basic snapshot */
const snapshot: Snapshot = AnaLy.getSnapshot();

snapshot.browser.name;
snapshot.browser.version;
snapshot.os;
snapshot.platform;

/* Async snapshot */
async function testAsync() {
  const asyncSnapshot = await AnaLy.getSnapshotAsync();
  asyncSnapshot.network.online;
  asyncSnapshot.screen.width;
}

/* Config usage */
const config: AnaLyConfig = {
  anonymizeIP: true,
  anonymizeUA: true,
  autoSend: false,
  debounceMs: 300,
};

AnaLy.init(config);

/* Utility methods */
const browser: BrowserInfo = AnaLy.detectBrowser();
const hardware: HardwareInfo = AnaLy.detectHardware();
const locale: LocaleInfo = AnaLy.detectLocale();

browser.name;
hardware.cores;
locale.timezone;

/* sendData */
AnaLy.sendData("https://example.com/collect", {
  page: "home",
});
