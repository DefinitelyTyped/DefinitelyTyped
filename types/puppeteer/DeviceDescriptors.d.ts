import { Viewport } from "./common";

declare namespace devices {
  interface Device {
    name: string;
    userAgent: string;
    viewport: Viewport;
  }
}
/**
 * predefined devices as `Nexus 7`, `Nexus 7 landscape`, `iPhone X`, `iPhone X landscape`
 * @see https://github.com/GoogleChrome/puppeteer/blob/master/lib/DeviceDescriptors.js
 */
declare const devices: {
  [key: string]: devices.Device;
};

export = devices;
