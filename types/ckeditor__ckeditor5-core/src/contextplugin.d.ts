import { BindChain, Observable } from "@ckeditor/ckeditor5-utils/src/observablemixin";
import Context from "./context";
import Editor from "./editor/editor";
import Plugin from "./plugin";

export default class ContextPlugin implements Observable {
    readonly context: Context | Editor;

    static readonly isContextPlugin: boolean;
    static readonly pluginName?: string;
    static readonly requires?: Array<typeof Plugin>;

    constructor(context: Context | Editor);
    afterInit?(): Promise<void> | null;
    destroy?(): Promise<void> | null;
    init?(): Promise<void> | null;

    set(option: Record<string, unknown>): void;
    set(name: string, value: unknown): void;
    bind(...bindProperties: string[]): BindChain;
    unbind(...unbindProperties: string[]): void;
    decorate(methodName: string): void;
}
