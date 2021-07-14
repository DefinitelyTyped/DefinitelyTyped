import { BindChain, Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';

export default class ManualDecorator implements Observable {
    readonly attributes: Record<string, string>;
    readonly defaultValue: boolean;
    readonly id: string;
    readonly label: string;
    value: boolean;

    constructor(config: { id: string; label: string; attributes: Record<string, string>; defaultValue?: boolean | undefined });

    set(option: Record<string, unknown>): void;
    set(name: string, value: unknown): void;
    bind(...bindProperties: string[]): BindChain;
    unbind(...unbindProperties: string[]): void;
    decorate(methodName: string): void;
}
