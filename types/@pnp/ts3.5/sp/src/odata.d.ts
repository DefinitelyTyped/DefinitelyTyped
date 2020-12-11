import { SharePointQueryableConstructor } from "./sharepointqueryable";
import { ODataParser } from "@pnp/odata";
export declare function odataUrlFrom(candidate: any): string;
export declare function spODataEntity<T, DataType = any>(factory: SharePointQueryableConstructor<T>): ODataParser<T & DataType>;
export declare function spODataEntityArray<T, DataType = any>(factory: SharePointQueryableConstructor<T>): ODataParser<(T & DataType)[]>;
