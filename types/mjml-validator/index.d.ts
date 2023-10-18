import { Component, MJMLJsonObject, MJMLParseError } from "mjml-core";

export interface MJMLDependenciesObject {
    [tagName: string]: Array<string | RegExp>;
}

export interface MJMLType {
    isValid(): boolean;
    getErrorMessage(): string | undefined;
    getValue(): string;
}
export type MJMLTypeChecker = new(value: string) => MJMLType;

export type MJMLInitializeType = (spec: string) => MJMLTypeChecker;

export interface MJMLValidatorOptions {
    components: { [componentName: string]: Component | undefined };
    dependencies: MJMLDependenciesObject;
    initializeType: MJMLInitializeType;
    skipElements: string[];
}

export type MJMLValidationRule = (
    element: MJMLJsonObject,
    options: MJMLValidatorOptions,
) => MJMLParseError | MJMLParseError[] | void | undefined;

export function formatValidationError(message: string, element: MJMLJsonObject): MJMLParseError;

export const rulesCollection: { [rule: string]: MJMLValidationRule };

export function registerRule(rule: MJMLValidationRule, name?: string): boolean | undefined;

export const dependencies: MJMLDependenciesObject;

export function registerDependencies(source: MJMLDependenciesObject): void;

export function assignDependencies(
    target: MJMLDependenciesObject,
    ...sources: MJMLDependenciesObject[]
): MJMLDependenciesObject;
