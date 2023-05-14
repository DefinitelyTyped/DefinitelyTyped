import {TurboModule} from './RCTExport';

export const TurboModuleRegistry: {
  get<T extends TurboModule>(name: string): T | null;
  getEnforcing<T extends TurboModule>(name: string): T;
};
