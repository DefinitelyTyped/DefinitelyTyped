import { Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import Context from './context';
import Editor from './editor/editor';

// tslint:disable-next-line:no-empty-interface
export default interface ContextPlugin extends Observable {}

/**
 * The base class for {@link module:core/context~Context} plugin classes.
 *
 * A context plugin can either be initialized for an {@link module:core/editor/editor~Editor editor} or for
 * a {@link module:core/context~Context context}. In other words, it can either
 * work within one editor instance or with one or more editor instances that use a single context.
 * It is the context plugin's role to implement handling for both modes.
 *
 * There are a few rules for interaction between the editor plugins and context plugins:
 *
 * * A context plugin can require another context plugin.
 * * An {@link module:core/plugin~Plugin editor plugin} can require a context plugin.
 * * A context plugin MUST NOT require an {@link module:core/plugin~Plugin editor plugin}.
 */
export default abstract class ContextPlugin implements Observable {
    /**
     * Creates a new plugin instance.
     */
    constructor(context: Context | Editor);
    /**
     * The context instance.
     */
    readonly context: Context | Editor;
    init?(): Promise<void> | void;
    afterInit?(): Promise<void> | void;
    destroy(): Promise<void> | void;

    static readonly isContextPlugin: true;
    static readonly pluginName?: string | undefined;
    static readonly requires?: Array<typeof ContextPlugin> | undefined;
}

export interface ContextPluginInterface<T = ContextPlugin> {
    new (context: Context): T;
    init?(): Promise<void> | void;
    afterInit?(): Promise<void> | void;
    destroy?(): Promise<void> | void;
}
