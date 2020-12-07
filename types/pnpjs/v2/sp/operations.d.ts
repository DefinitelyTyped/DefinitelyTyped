import { ISharePointQueryable } from "./sharepointqueryable";
import { IFetchOptions, IRequestClient } from "../common";
export declare function registerCustomRequestClientFactory(requestClientFactory: () => IRequestClient): void;
export declare const spGet: <T = any>(o: ISharePointQueryable<any>, options?: IFetchOptions) => Promise<T>;
export declare const spPost: <T = any>(o: ISharePointQueryable<any>, options?: IFetchOptions) => Promise<T>;
export declare const spDelete: <T = any>(o: ISharePointQueryable<any>, options?: IFetchOptions) => Promise<T>;
export declare const spPatch: <T = any>(o: ISharePointQueryable<any>, options?: IFetchOptions) => Promise<T>;
export declare const spPostDelete: <T = any>(o: ISharePointQueryable<any>, options?: IFetchOptions) => Promise<T>;
export declare const spPostDeleteETag: <T = any>(o: ISharePointQueryable<any>, options?: IFetchOptions, eTag?: string) => Promise<T>;
//# sourceMappingURL=operations.d.ts.map