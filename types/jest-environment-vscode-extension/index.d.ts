import type * as vscodeTypes from "vscode";

type Using = <Files extends { [filename: string]: string }>(
    params: {
        files: Files;
        mocks?: {
            [path: string]: unknown;
        };
    },
    closure: (
        mapFileToDoc: {
            [filename in keyof Files]: vscodeTypes.TextDocument;
        },
    ) => Promise<void>,
) => Promise<void>;

declare global {
    const vscode: typeof vscodeTypes;

    const using: Using;

    function waitFor<T>(callback: () => T | Promise<T>): Promise<T>;

    const take: {
        codeActions: (
            doc: vscodeTypes.TextDocument,
            range: vscodeTypes.Range,
        ) => Promise<{
            [codeActionTitle: string]: () => Thenable<void>;
        }>;
        definitions: (
            doc: vscodeTypes.TextDocument,
            position: vscodeTypes.Position,
        ) => Promise<Array<vscodeTypes.Location | vscodeTypes.LocationLink>>;
        documentText: (doc: vscodeTypes.TextDocument) => Promise<string>;
        documentSymbols: (doc: vscodeTypes.TextDocument) => Promise<vscodeTypes.SymbolInformation[]>;
        hovers: (doc: vscodeTypes.TextDocument, position: vscodeTypes.Position) => Promise<string[]>;
    };

    function dedent(templateString: string): string;
}

export {};
