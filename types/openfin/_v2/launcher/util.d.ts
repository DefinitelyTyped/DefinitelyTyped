export declare function exists(path: string): Promise<boolean>;
export declare function unzip(file: string, dest: string): Promise<any>;
export declare function rmDir(dirPath: string, removeSelf?: boolean): Promise<void>;
export declare function resolveRuntimeVersion(versionOrChannel: string): Promise<string>;
export declare function first<T>(arr: T[], func: (x: T, i: number, r: T[]) => boolean): T | null;
export declare function resolveDir(base: string, paths: string[]): Promise<string>;
