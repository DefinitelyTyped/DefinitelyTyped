// Type definitions for slack-winston 0.0
// Project: https://github.com/niftylettuce/slack-winston
// Definitions by: Elliot Blackburn <https://github.com/BlueHatbRit>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export interface SlackTransportOptions {
  domain: string;
  token: string;
  webhook_url: string;
  channel: string;

  username?: string;
  icon_emoji?: string;
  message?: string;
  queueDelay?: number;

  // from winston-transport TransportStreamOptions
  format?: Format;
  level?: string;
  silent?: boolean;
  handleExceptions?: boolean;

  log?(info: any, next: () => void): any;
  logv?(info: any, next: () => void): any;
  close?(): void;
}

export class Slack {
  constructor(options?: SlackTransportOptions);
  format?: Format;
  level?: string;
  silent?: boolean;
  handleExceptions?: boolean;

  log?(info: any, next: () => void): any;
  logv?(info: any, next: () => void): any;
  close?(): void;
}

export class Format {
  constructor(opts?: object);

  options?: object;
  transform: (info: TransformableInfo, opts?: any) => TransformableInfo | boolean;
}

export interface TransformableInfo {
  level: string;
  message: string;
  [key: string]: any;
}
