// Type definitions for slack-winston 0.0
// Project: https://github.com/niftylettuce/slack-winston
// Definitions by: Elliot Blackburn <https://github.com/BlueHatbRit>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import Transport = require("winston-transport");

export interface SlackTransportOptions extends Transport.TransportStreamOptions {
  domain: string;
  token: string;
  webhook_url: string;
  channel: string;

  username?: string;
  icon_emoji?: string;
  message?: string;
  queueDelay?: number;
}

export class Slack extends Transport {
  constructor(options?: SlackTransportOptions);
}
