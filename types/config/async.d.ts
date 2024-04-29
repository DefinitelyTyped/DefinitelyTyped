import { IConfig } from "./";

type AsyncFunction<T, R> = (this: IConfig, config: string, origValue: T) => Promise<R>;

export function asyncConfig<R>(promise: Promise<any>): Promise<R>;
export function asyncConfig<T, R>(func: AsyncFunction<T, R>): Promise<R>;
export function resolveAsyncConfigs(config: IConfig): Promise<IConfig>;
