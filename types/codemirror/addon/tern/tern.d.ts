// Type definitions for codemirror
// Project: https://github.com/marijnh/CodeMirror
// Definitions by: Nikolaj Kappler <https://github.com/nkappler>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_tern and https://codemirror.net/addon/tern/tern.js (comments in the beginning of the file)
// Docs for tern itself might also be helpful: http://ternjs.net/doc/manual.html

import * as CodeMirror from "codemirror";
import * as Tern from "tern";

declare module "codemirror" {

    interface TernServer {
        readonly options: TernOptions;
        readonly docs: {
            readonly [key: string]: {
                doc: CodeMirror.Doc,
                name: string,
                changed?: {
                    from: CodeMirror.Position | number,
                    to: CodeMirror.Position | number
                }
            }
        };
        readonly server: Tern.Server;
        addDoc(name: string, doc: CodeMirror.Doc): { doc: CodeMirror.Doc, name: string, changed: { from: number, to: number } | null };
        delDoc(id: string | CodeMirror.Editor | CodeMirror.Doc): void;
        hideDoc(id: string | CodeMirror.Editor | CodeMirror.Doc): void;
        complete(cm: CodeMirror.Doc): void;
        showType(cm: CodeMirror.Doc, pos?: CodeMirror.Position | number, callback?: Function): void;
        showDocs(cm: CodeMirror.Doc, pos?: CodeMirror.Position | number, callback?: Function): void;
        updateArgHints(cm: CodeMirror.Doc): void;
        jumpToDef(cm: CodeMirror.Doc): void;
        jumpBack(cm: CodeMirror.Doc): void;
        rename(cm: CodeMirror.Doc): void;
        selectName(cm: CodeMirror.Doc): void;
        request<Q extends Tern.Query>(cm: CodeMirror.Doc, query: Q, callback: (error?: Error, data?: Tern.QueryRegistry[Q["type"]]["result"]) => void, pos?: CodeMirror.Position): void;
        request<Q extends Tern.Query["type"]>(cm: CodeMirror.Doc, query: Q, callback: (error?: Error, data?: Tern.QueryRegistry[Q]["result"]) => void, pos?: CodeMirror.Position): void;
        destroy(): void;
    }

    interface TernConstructor {
        new(options?: TernOptions): TernServer;
    }
    export const TernServer: TernConstructor;

    interface TernOptions {
        /** An object mapping plugin names to configuration options. */
        plugins?: Tern.ConstructorOptions["plugins"];
        /** An array of JSON definition data structures. */
        defs?: Tern.Def[];
        /**
         * Can be used to access files in
         * the project that haven't been loaded yet. Simply do callback(null) to
         * indicate that a file is not available.
         */
        getFile?(name: string, callback: (doc: CodeMirror.Doc | null) => any): any;
        /**
         * This function will be applied
         * to documents before passing them on to Tern.
         */
        fileFilter?(value: string, docName: string, doc: CodeMirror.Doc): string;
        /** This function should, when providing a multi-file view, switch the view or focus to the named file. */
        switchToDoc?(name: string, doc: CodeMirror.Doc): any;
        /** Can be used to override the way errors are displayed. */
        showError?(editor: CodeMirror.Editor, message: Error): any;
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
        responseFilter?(doc: CodeMirror.Doc, query: Tern.Query, request: Tern.Document, error: Error | undefined, data: Tern.QueryRegistry[Tern.Query["type"]]["result"] | undefined): any;
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
