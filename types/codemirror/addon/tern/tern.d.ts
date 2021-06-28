// See docs https://codemirror.net/doc/manual.html#addon_tern and https://codemirror.net/addon/tern/tern.js (comments in the beginning of the file)
// Docs for tern itself might also be helpful: http://ternjs.net/doc/manual.html

import * as Tern from 'tern';
import '../../';

declare module '../../' {
    class TernServer {
        constructor(options?: TernOptions);

        readonly options: TernOptions;
        readonly docs: {
            readonly [key: string]: {
                doc: Doc;
                name: string;
                changed: {
                    from: number;
                    to: number;
                } | null;
            };
        };
        readonly server: Tern.Server;
        addDoc(
            name: string,
            doc: Doc,
        ): { doc: Doc; name: string; changed: { from: number; to: number } | null };
        delDoc(id: string | Editor | Doc): void;
        hideDoc(id: string | Editor | Doc): void;
        complete(cm: Editor): void;
        showType(cm: Editor, pos?: Position, callback?: () => void): void;
        showDocs(cm: Editor, pos?: Position, callback?: () => void): void;
        updateArgHints(cm: Editor): void;
        jumpToDef(cm: Editor): void;
        jumpBack(cm: Editor): void;
        rename(cm: Editor): void;
        selectName(cm: Editor): void;
        request<Q extends Tern.Query>(
            cm: Doc,
            query: Q,
            callback: (error?: Error, data?: Tern.QueryResult<Q>) => void,
            pos?: Position,
        ): void;
        request<Q extends Tern.Query['type']>(
            cm: Doc,
            query: Q,
            callback: (error?: Error, data?: Tern.QueryRegistry[Q]['result']) => void,
            pos?: Position,
        ): void;
        destroy(): void;
    }

    interface TernOptions {
        /** An object mapping plugin names to configuration options. */
        plugins?: Tern.ConstructorOptions['plugins'];
        /** An array of JSON definition data structures. */
        defs?: Tern.Def[];
        /**
         * Can be used to access files in
         * the project that haven't been loaded yet. Simply do callback(null) to
         * indicate that a file is not available.
         */
        getFile?(name: string, callback: (docValue: string | null) => any): any;
        /**
         * This function will be applied
         * to documents before passing them on to Tern.
         */
        fileFilter?(value: string, docName: string, doc: Doc): string;
        /** This function should, when providing a multi-file view, switch the view or focus to the named file. */
        switchToDoc?(name: string, doc: Doc): void;
        /** Can be used to override the way errors are displayed. */
        showError?(editor: Editor, message: Error | string): void;
        /**
         * Customize the content in tooltips for completions.
         * Is passed a single argument — the completion's data as returned by
         * Tern — and may return a string, DOM node, or null to indicate that
         * no tip should be shown. By default the docstring is shown.
         */
        completionTip?(data: Tern.CompletionsQueryResult): string | HTMLElement | null;
        /** Like completionTip, but for the tooltips shown for type queries. */
        typeTip?(data: Tern.TypeQueryResult): string | HTMLElement | null;
        /** This function will be applied to the Tern responses before treating them */
        responseFilter?<Q extends Tern.Query>(
            doc: Doc,
            query: Q,
            request: Tern.Document,
            error: Error | undefined,
            data: Tern.QueryResult<Q> | undefined,
        ): Tern.QueryResult<Q> | undefined;
        /**
         * Set to true to enable web worker mode. You'll probably
         * want to feature detect the actual value you use here, for example
         * !!window.Worker.
         */
        useWorker?: boolean;
        /** The main script of the worker. Point this to wherever you are hosting worker.js from this directory. */
        workerScript?: string;
        /**
         * An array of paths pointing (relative to workerScript)
         * to the Acorn and Tern libraries and any Tern plugins you want to
         * load. Or, if you minified those into a single script and included
         * them in the workerScript, simply leave this undefined.
         */
        workerDeps?: string[];
    }
}
