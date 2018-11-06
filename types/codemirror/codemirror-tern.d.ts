//MUCH TODO


import * as CodeMirror from "codemirror";

declare module "codemiror" {

    export const TernServer: TernConstructor;

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

        request: (cm: CodeMirror.Editor, query: string | Query, callback: (error: any, data?: any) => void, pos?: CodeMirror.Position) => void;

        destroy: () => void;
    }

    interface TernConstructor {
        new(options?: TernOptions): TernServer;
    }

    interface TernOptions {
        plugins?: any;
        defs?: any[];
        getFile?: (name: string, callback: (doc: any) => void) => void;
        fileFilter?: (value: any, docName: string, doc: any) => any;
        switchToDoc?: (name: string, doc: any) => any;
        showError?: (editor: CodeMirror.Editor, message: any) => void;
        completionTip?: any;
        typeTip?: any;
        responseFilter?: (doc, query, request, error, data) => any;
        useWorker?: boolean;
        workerScript?: any;
        workerDeps?: string[];
    }

    interface Query {
        type: string;
        file: string; //either the file name or a number in the following representation #0 #1 #2 etc...
        scope?: Scope;
        lineCharPositions?: boolean;
        lineNumber?: number;
        groupByFiles?: any;
        start?: CodeMirror.Position;
        end?: CodeMirror.Position;
    }

}

declare module "codemirror/addon/tern/tern" {
    export = CodeMirror;
}
