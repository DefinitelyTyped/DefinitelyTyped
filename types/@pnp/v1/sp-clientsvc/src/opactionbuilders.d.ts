import { PropertyType } from "./types";
import { IMethodParamsBuilder } from "./opbuilders";
export declare function objectPath(): string;
export declare function identityQuery(): string;
export declare function opQuery(selectProperties?: string[], childSelectProperties?: string[] | null): string;
export declare function setProperty(name: string, type: PropertyType, value: string): string;
export declare function methodAction(name: string, params: IMethodParamsBuilder | null): string;
export declare function objectProperties(o: any): string[];
