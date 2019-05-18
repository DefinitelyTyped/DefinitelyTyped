import { Viewport } from "./common";

declare namespace devices {
  interface Device {
    name: string;
    userAgent: string;
    viewport: Viewport;
  }
}

declare const devices: {
  [key: string]: devices.Device;
};

export = devices;
