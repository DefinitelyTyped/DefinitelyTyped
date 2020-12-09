import { ISPInvokableFactory } from "./sharepointqueryable";
import { ODataParser } from "@pnp/odata";
export declare function odataUrlFrom(candidate: any): string;
export declare function spODataEntity<T, DataType = any>(factory: ISPInvokableFactory<T>): ODataParser<T & DataType>;
export declare function spODataEntityArray<T, DataType = any>(factory: ISPInvokableFactory<T>): ODataParser<(T & DataType)[]>;
//# sourceMappingURL=odata.d.ts.map