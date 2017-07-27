// Type definitions for slack-winston 0.0
// Project: https://github.com/niftylettuce/slack-winston
// Definitions by: Elliot Blackburn <https://github.com/BlueHatbRit>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as winston from 'winston';

export interface SlackTransportOptions extends winston.WinstonModuleTransportOptions {
  domain: string;
  token: string;
  webhook_url: string;
  channel: string;

  username?: string;
  icon_emoji?: string;
  message?: string;
  queueDelay?: number;
}

export class Slack extends winston.Transport implements winston.TransportInstance {
  constructor(options?: SlackTransportOptions);
}
