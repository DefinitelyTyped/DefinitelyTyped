import type { Position, Range, TextDocument } from "vscode";

const doc = null as unknown as TextDocument;
const range = null as unknown as Range;
const position = null as unknown as Position;

/* using */

// $ExpectType Promise<void>
using(
    {
        files: {
            "index.js": "",
        },
    },
    async mapFileToDoc => {
        mapFileToDoc["index.js"];
    },
);

// $ExpectType Promise<void>
using(
    {
        files: {
            "index.js": "",
        },
    },
    async mapFileToDoc => {
        // @ts-expect-error
        mapFileToDoc["unknown-file.js"];
    },
);

// $ExpectType Promise<void>
using(
    {
        files: {},
        mocks: {
            "window.showQuickPick": async () => "",
        },
    },
    async mapFileToDoc => {},
);

/* waitFor */

// $ExpectType Promise<number>
waitFor(() => 1);

/* take */

// $ExpectType Promise<{ [codeActionTitle: string]: () => Thenable<void>; }>
take.codeActions(doc, range);

// $ExpectType Promise<(Location | LocationLink)[]> || Promise<(LocationLink | Location)[]>
take.definitions(doc, position);

// $ExpectType Promise<string>
take.documentText(doc);

// $ExpectType Promise<SymbolInformation[]>
take.documentSymbols(doc);

// $ExpectType Promise<string[]>
take.hovers(doc, position);

/* dedent */

// $ExpectType string
dedent("");

// @ts-expect-error
dedent(1);
