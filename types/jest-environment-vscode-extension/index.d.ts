// Type definitions for jest-environment-vscode-extension 0.0
// Project: https://github.com/macabeus/jest-environment-vscode-extension
// Definitions by: Bruno Macabeus <https://github.com/macabeus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

import type * as vscodeTypes from 'vscode';

type Using = <Files extends { [filename: string]: string }>(
    params: {
        files: Files;
        mocks?: {
            [path: string]: unknown;
        };
    },
    closure: (mapFileToUri: {
        [filename in keyof Files]: vscodeTypes.Uri;
    }) => Promise<void>,
) => Promise<void>;

declare global {
    const vscode: typeof vscodeTypes;

    const using: Using;

    function waitFor<T>(callback: () => T | Promise<T>): Promise<T>;

    const take: {
        codeActions: (
            uri: vscodeTypes.Uri,
            range: vscodeTypes.Range,
        ) => Promise<{
            [codeActionTitle: string]: () => Thenable<void>;
        }>;
        definitions: (
            uri: vscodeTypes.Uri,
            position: vscodeTypes.Position,
        ) => Promise<Array<vscodeTypes.Location | vscodeTypes.LocationLink>>;
        documentText: (uri: vscodeTypes.Uri) => Promise<string>;
        documentSymbols: (uri: vscodeTypes.Uri) => Promise<vscodeTypes.SymbolInformation[]>;
        hovers: (uri: vscodeTypes.Uri, position: vscodeTypes.Position) => Promise<string[]>;
    };

    function dedent(templateString: string): string;
}

export {};
