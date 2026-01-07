import sgf from "sabaki__sgf";

const genIdString = ((id) => () => "id_" + (id++))(0);

// ===============
// Basic Functions
// ===============

// $ExpectType Generator<SGFToken, void, any> || Generator<SGFToken, void, unknown>
sgf.tokenizeIter("foo");

// $ExpectType SGFToken[]
const tokens = sgf.tokenize("foo");

// $ExpectType Generator<SGFToken, void, any> || Generator<SGFToken, void, unknown>
sgf.tokenizeBufferIter(Buffer.from("foo"));

// $ExpectType SGFToken[]
sgf.tokenizeBuffer(Buffer.from("foo"));

// $ExpectType NodeObject<number>[]
const nodes1 = sgf.parseTokens(tokens);
// $ExpectType number
nodes1[0].id;
// $ExpectType Partial<Record<Property, string[]>>
nodes1[0].data;
// $ExpectType number | null
nodes1[0].parentId;
// $ExpectType NodeObject<number>[]
nodes1[0].children;

// $ExpectType NodeObject<string>[]
const nodes2 = sgf.parseTokens(tokens, {
    getId: genIdString,
});
// $ExpectType string
nodes2[0].id;
// $ExpectType Partial<Record<Property, string[]>>
nodes2[0].data;
// $ExpectType string | null
nodes2[0].parentId;
// $ExpectType NodeObject<string>[]
nodes2[0].children;

// $ExpectType NodeObject<number>[]
sgf.parse("foo");

// $ExpectType NodeObject<string>[]
sgf.parse("foo", {
    getId: genIdString,
});

// $ExpectType NodeObject<number>[]
sgf.parseBuffer(Buffer.from("foo"));

// $ExpectType NodeObject<string>[]
sgf.parseBuffer(Buffer.from("foo"), {
    getId: genIdString,
});

// $ExpectType NodeObject<number>[]
sgf.parseFile("foo");

// $ExpectType NodeObject<string>[]
sgf.parseFile("foo", {
    getId: genIdString,
});

// $ExpectType string
sgf.stringify(nodes1);

// ================
// Helper Functions
// ================

// $ExpectType string
const escaped = sgf.escapeString("foo");

// $ExpectType string
sgf.unescapeString(escaped);

// $ExpectType Vertex
const vertex = sgf.parseVertex("foo");

// $ExpectType string
sgf.stringifyVertex(vertex);

// $ExpectType Vertex[]
sgf.parseCompressedVertices("foo");

// $ExpectType Dates[] | null
const dates = sgf.parseDates("foo");

// $ExpectType string
sgf.stringifyDates(dates ?? []);
