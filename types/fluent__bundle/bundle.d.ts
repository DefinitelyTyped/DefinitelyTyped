import FluentResource from './resource';
import Scope from './scope';

export interface FluentBundleConstructorOptions {
    functions?: object;
    useIsolating?: boolean;
    transform?: (...args: any[]) => any;
}

export interface FluentBundleAddResourceOptions {
    allowOverrides?: boolean;
}

export class Pattern {}

export interface RawMessage {
    value: Pattern | null;

    attributes: Record<string, Pattern>;
}

export class FluentBundle {
    constructor(locales: string | string[], options?: FluentBundleConstructorOptions);
    locales: string[];
    hasMessage(id: string): boolean;
    getMessage(id: string): RawMessage;
    addResource(res: FluentResource, options?: FluentBundleAddResourceOptions): string[];
    formatPattern(pattern: Pattern | string, args?: object, errors?: string[]): string[];
}
