// Type definitions for jest-environment-vscode-extension 0.0
// Project: https://github.com/macabeus/jest-environment-vscode-extension
// Definitions by: Bruno Macabeus <https://github.com/macabeus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

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
