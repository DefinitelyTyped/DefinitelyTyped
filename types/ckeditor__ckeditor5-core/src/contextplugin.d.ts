import { BindChain, Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import Context from './context';
import Editor from './editor/editor';

export default abstract class ContextPlugin implements Observable {
    readonly context: Context | Editor;

    static readonly isContextPlugin: true;
    static readonly pluginName?: string | undefined;
    static readonly requires?: Array<typeof ContextPlugin> | undefined;

    constructor(context: Context | Editor);
    afterInit?(): Promise<void> | void;
    destroy(): Promise<void> | void;
    init?(): Promise<void> | void;

    set(option: Record<string, unknown>): void;
    set(name: string, value: unknown): void;
    bind(...bindProperties: string[]): BindChain;
    unbind(...unbindProperties: string[]): void;
    decorate(methodName: string): void;
}

export interface ContextPluginInterface<T = ContextPlugin> {
    new (context: Editor | Context): T;
}
