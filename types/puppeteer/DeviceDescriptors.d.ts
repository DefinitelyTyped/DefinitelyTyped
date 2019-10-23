declare namespace devices {
  interface Viewport {
    width: number;
    height: number;
    deviceScaleFactor: number;
    isMobile: boolean;
    hasTouch: boolean;
    isLandscape: boolean;
  }

  interface Device {
    name: string;
    userAgent: string;
    viewport: Viewport;
  }
}

declare const devices: devices.Device[] & { [key: string]: devices.Device };

export = devices;
