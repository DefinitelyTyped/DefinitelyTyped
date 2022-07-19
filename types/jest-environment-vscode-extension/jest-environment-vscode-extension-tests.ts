import type { Uri, Range, Position } from 'vscode';

const uri = null as unknown as Uri;
const range = null as unknown as Range;
const position = null as unknown as Position;

/* using */

// $ExpectType Promise<void>
using(
    {
        files: {
            'index.js': '',
        },
    },
    async mapFileToUri => {
        mapFileToUri['index.js'];
    },
);

// $ExpectType Promise<void>
using(
    {
        files: {
            'index.js': '',
        },
    },
    async mapFileToUri => {
        // @ts-expect-error
        mapFileToUri['unknown-file.js'];
    },
);

// $ExpectType Promise<void>
using(
    {
        files: {},
        mocks: {
            'window.showQuickPick': async () => '',
        },
    },
    async mapFileToUri => {},
);

/* waitFor */

// $ExpectType Promise<number>
waitFor(() => 1);

/* take */

// $ExpectType Promise<{ [codeActionTitle: string]: () => Thenable<void>; }>
take.codeActions(uri, range);

// $ExpectType Promise<(Location | LocationLink)[]> || Promise<(LocationLink | Location)[]>
take.definitions(uri, position);

// $ExpectType Promise<string>
take.documentText(uri);

// $ExpectType Promise<SymbolInformation[]>
take.documentSymbols(uri);

// $ExpectType Promise<string[]>
take.hovers(uri, position);

/* dedent */

// $ExpectType string
dedent('');

// @ts-expect-error
dedent(1);
