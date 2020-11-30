import { ITypedHash } from "../common";
export declare type ValidProxyMethods = "apply" | "get" | "has" | "set";
export declare type ExtensionDelegateType<T extends object> = {
    (op: string, target: T, ...rest: any[]): void;
};
export declare type ExtensionType<T extends object = {}> = Pick<ProxyHandler<T>, ValidProxyMethods> | ExtensionDelegateType<T> | ITypedHash<any>;
/**
 * Creates global extensions across all invokable objects
 *
 * @param e The global extensions to apply
 */
export declare const extendGlobal: (e: ExtensionType | ExtensionType[]) => void;
/**
 * Applies the supplied extensions to a single instance
 *
 * @param target Object to which extensions are applied
 * @param extensions Extensions to apply
 */
export declare const extendObj: <T extends object>(target: T, extensions: ExtensionType | ExtensionType[]) => T;
/**
 * Allows applying extensions to all instances created from the supplied factory
 *
 * @param factory The Invokable Factory method to extend
 * @param extensions Extensions to apply
 */
export declare const extendFactory: <T extends (...args: any[]) => any>(factory: T, extensions: ExtensionType | ExtensionType[]) => void;
/**
 * Clears all global extensions
 */
export declare const clearGlobalExtensions: () => void;
/**
 * Disables all extensions
 */
export declare const disableExtensions: () => void;
/**
 * Enables all extensions
 */
export declare const enableExtensions: () => void;
/**
 * Applies a set of extension previously applied to a factory using extendFactory to an object created from that factory
 *
 * @param factory
 * @param args
 */
export declare const applyFactoryExtensions: <T extends object = {}>(factory: (args: any[]) => T, args: any[]) => T;
export declare function extensionOrDefault(op: ValidProxyMethods, or: (...args: any[]) => any, target: any, ...rest: any[]): any;
//# sourceMappingURL=invokable-extensions.d.ts.map