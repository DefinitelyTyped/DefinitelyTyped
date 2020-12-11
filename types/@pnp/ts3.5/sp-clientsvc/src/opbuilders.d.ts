import { IObjectPath } from "./objectpath";
import { PropertyType } from "./types";
export declare function property(name: string, ...actions: string[]): IObjectPath;
export declare function staticMethod(name: string, typeId: string, ...actions: string[]): IObjectPath;
export declare function staticProperty(name: string, typeId: string, ...actions: string[]): IObjectPath;
export declare function objConstructor(typeId: string, ...actions: string[]): IObjectPath;
export interface IMethodParamsBuilder {
    string(value: string): this;
    number(value: number): this;
    boolean(value: boolean): this;
    strArray(values: string[]): this;
    objectPath(inputIndex: number): this;
    toArray(): {
        type: PropertyType;
        value: string;
    }[];
}
/**
 * Used to build parameters when calling methods
 */
export declare class MethodParams implements IMethodParamsBuilder {
    private _p;
    constructor(_p?: {
        type: PropertyType;
        value: string;
    }[]);
    static build(initValues?: {
        type: PropertyType;
        value: string;
    }[]): IMethodParamsBuilder;
    string(value: string): this;
    number(value: number): this;
    boolean(value: boolean): this;
    strArray(values: string[]): this;
    objectPath(inputIndex: number): this;
    toArray(): {
        type: PropertyType;
        value: string;
    }[];
    private a;
}
export declare function method(name: string, params: IMethodParamsBuilder, ...actions: string[]): IObjectPath;
