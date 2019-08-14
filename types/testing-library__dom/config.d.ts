export interface IConfig {
  testIdAttribute: string;
  asyncWrapper<T>(cb: Function): Promise<T>;
}

export interface IConfigFn {
  (existingConfig: IConfig): Partial<IConfig>;
}

export function configure(configDelta: Partial<IConfig> | IConfigFn): void;
