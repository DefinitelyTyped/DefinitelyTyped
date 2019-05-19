/**
 * Definition from DeviceDescriptors.js
 * https://github.com/GoogleChrome/puppeteer/blob/master/lib/DeviceDescriptors.js
 */

import { Viewport } from "./able";

export interface Device {
  name: string;
  userAgent: string;
  viewport: Viewport;
}
