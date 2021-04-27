// Type definitions for system-service 1.3
// Project: https://github.com/leocwlam/system-service
// Definitions by: Leo Lam <https://github.com/leocwlam>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.1

import { Logger, LoggerConfiguration, FileConfiguration, SourcesConfiguration } from 'system-logger';

export { Logger, level as Level, fileRotateType as FileRotateType, LoggerConfiguration, FileConfiguration, SourcesConfiguration } from 'system-logger';

export interface ServiceConfiguration {
  log: {
    config: LoggerConfiguration,
    file?: {
      source?: FileConfiguration;
    },
    source?: {
      source?: SourcesConfiguration
    }
  };
}

export class MessageConsumer {
  logger: Logger;

  constructor();
  service(): void;
  setup(systemService: SystemService): void;
  cleanup(): void;
  create(): void;
  validate(message: any): void;
  process(message: any): void;
  start(): void;
  stop(): void;
}

export class SystemService {
  config: ServiceConfiguration;
  messageConsumer: MessageConsumer;
  logger: Logger;

  constructor(config?: ServiceConfiguration, messageConsumer?: MessageConsumer);
  validateMessage(message: any): void;
  processMessage(message: any): void;
  start(): void;
  stop(): void;
}
