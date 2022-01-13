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
        // $ExpectError
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

// $ExpectType Promise<string>
waitFor.documentChange(uri);

// $ExpectType Promise<string>
waitFor.not.documentChange(uri);

/* take */

// $ExpectType Promise<{ [codeActionTitle: string]: () => Thenable<void>; }>
take.codeActions(uri, range);

// $ExpectType Promise<(Location | LocationLink)[]>
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

// $ExpectError
dedent(1);
