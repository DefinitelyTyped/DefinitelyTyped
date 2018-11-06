//MUCH TODO


import * as CodeMirror from "codemirror";
import * as Tern from "tern";

declare module "codemiror" {

    interface Editor {
        server: TernServer;
    }

    interface TernServer {

        addDoc: (
            name: string,
            doc: CodeMirror.Doc
        ) => {
                doc: CodeMirror.Doc,
                name: string,
                changed: { from: number, to: number } | null
            };

        delDoc: (id: string | CodeMirror.Editor | CodeMirror.Doc) => void;

        hideDoc: (id: string | CodeMirror.Editor | CodeMirror.Doc) => void;

        complete: (cm: CodeMirror.Editor) => void;

        showType: (cm: CodeMirror.Editor, pos?: CodeMirror.Position, callback?: Function) => void;

        showDocs: (cm: CodeMirror.Editor, pos?: CodeMirror.Position, callback?: Function) => void;

        updateArgHints: (cm: CodeMirror.Editor) => void;

        jumpToDef: (cm: CodeMirror.Editor) => void;

        jumpBack: (cm: CodeMirror.Editor) => void;

        rename: (cm: CodeMirror.Editor) => void;

        selectName: (cm: CodeMirror.Editor) => void;

        request: (cm: CodeMirror.Editor, query: string | Tern.QueryRegistry[keyof Tern.QueryRegistry]["query"], callback: (error: any, data?: any) => void, pos?: CodeMirror.Position) => void;

        destroy: () => void;
    }

    interface TernConstructor {
        new(options?: TernOptions): TernServer;
    }
    export const TernServer: TernConstructor;

    interface TernOptions {
        /** An object mapping plugin names to configuration options. */
        plugins?: Tern.ConstructorOptions["plugins"];
        /** An array of JSON definition data structures. */
        defs?: Tern.ConstructorOptions["defs"];
        /**
         * Can be used to access files in
         * the project that haven't been loaded yet. Simply do callback(null) to
         * indicate that a file is not available.
         */
        getFile?: (name: string, callback: (doc: CodeMirror.Doc | null) => void) => void;
        /**
         * This function will be applied
         * to documents before passing them on to Tern.
         */
        fileFilter?: (value: any, docName: string, doc: CodeMirror.Doc) => any;
        /** This function should, when providing a multi-file view, switch the view or focus to the named file. */
        switchToDoc?: (name: string, doc: CodeMirror.Doc) => any;
        /** Can be used to override the way errors are displayed. */
        showError?: (editor: CodeMirror.Editor, message: any) => void;
        /**
         * Customize the content in tooltips for completions.
         * Is passed a single argument—the completion's data as returned by
         * Tern—and may return a string, DOM node, or null to indicate that
         * no tip should be shown. By default the docstring is shown.
         */
        completionTip?: (data: Tern.QueryRegistry["completions"]["result"]) => string | HTMLElement | null;
        /** Like completionTip, but for the tooltips shown for type queries. */
        typeTip?: (data: Tern.QueryRegistry["type"]["result"]) => string | HTMLElement | null;
        /** This function will be applied to the Tern responses before treating them */
        responseFilter?: (
            doc: CodeMirror.Doc,
            query: Tern.QueryRegistry[keyof Tern.QueryRegistry]["query"],
            request: any,
            error: Error,
            data: any
        ) => any;
        /**
         * Set to true to enable web worker mode. You'll probably
         * want to feature detect the actual value you use here, for example
         * !!window.Worker.
         */
        useWorker?: boolean;
        /** The main script of the worker. Point this to wherever you are hosting worker.js from this directory. */
        workerScript?: any;
        /**
         * An array of paths pointing (relative to workerScript)
         * to the Acorn and Tern libraries and any Tern plugins you want to
         * load. Or, if you minified those into a single script and included
         * them in the workerScript, simply leave this undefined.
         */
        workerDeps?: string[];
    }

}

declare module "codemirror/addon/tern/tern" {
    export = CodeMirror;
}
