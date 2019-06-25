export declare function promisify(func: Function): (...args: any[]) => Promise<any>;
export declare function promiseMap<T, S>(arr: T[], asyncF: (x: T, i: number, r: T[]) => Promise<S>): Promise<S[]>;
export declare type asyncF<T> = (...args: any[]) => Promise<T>;
export declare function serial<T>(arr: asyncF<T>[]): Promise<T[]>;
export declare function promiseMapSerial<T>(arr: any[], func: asyncF<T>): Promise<T[]>;
