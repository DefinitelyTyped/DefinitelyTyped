import type {
    BlockContentMap,
    Blockquote,
    Break,
    Code,
    Data,
    Definition,
    DefinitionContentMap,
    Delete,
    Emphasis,
    FootnoteDefinition,
    FootnoteReference,
    FrontmatterContentMap,
    Heading,
    Html,
    Image,
    ImageReference,
    InlineCode,
    Link,
    LinkReference,
    List,
    ListContentMap,
    ListItem,
    Literal,
    Paragraph,
    Parent,
    PhrasingContentMap,
    Root,
    RootContentMap,
    RowContentMap,
    Strong,
    Table,
    TableCell,
    TableContentMap,
    TableRow,
    Text,
    ThematicBreak,
    Yaml,
} from "mdast";

const data: Data = {};

const position = {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 1, column: 2, offset: 1 },
};

// ## CommonMark voids

const break_: Break = {
    type: "break",
    position,
    data,
};

const definition: Definition = {
    type: "definition",
    identifier: "mdast",
    url: "https://github.com/syntax-tree/mdast",
    position,
    data,
};

// @ts-expect-error: `identifier` is required.
const definitionWithoutIdentifier: Definition = {
    type: "definition",
    url: "",
};

// @ts-expect-error: `url` is required.
const definitionWithoutIdentifier: Definition = {
    type: "definition",
    identifier: "",
};

const definitionWithTitle: Definition = {
    type: "definition",
    identifier: "",
    url: "",
    title: "",
};

const definitionWithLabel: Definition = {
    type: "definition",
    identifier: "",
    label: "",
    url: "",
};

const image: Image = {
    type: "image",
    url: "https://github.com/syntax-tree/mdast",
    alt: "image alternative",
    position,
    data,
};

// @ts-expect-error: `url` is required.
const imageWithoutUrl: Image = {
    type: "image",
};

const imageWithTitle: Image = {
    type: "image",
    url: "",
    title: "",
};

const imageReference: ImageReference = {
    type: "imageReference",
    identifier: "x",
    referenceType: "full",
    alt: "image alternative",
    position,
    data,
};

const thematicBreak: ThematicBreak = {
    type: "thematicBreak",
    position,
    data,
};

// ## CommonMark literals

const literal: Literal = {
    type: "whatever",
    value: "value",
    position,
    data,
};

const code: Code = {
    type: "code",
    value: "",
    position,
    data,
};

const codeWithLang: Code = {
    type: "code",
    lang: "js",
    value: "",
    position,
    data,
};

const codeWithLangAndMeta: Code = {
    type: "code",
    lang: "js",
    meta: "eval",
    value: "",
    position,
    data,
};

const html: Html = {
    type: "html",
    value: "",
    position,
    data,
};

const inlineCode: InlineCode = {
    type: "inlineCode",
    value: "",
    position,
    data,
};

const text: Text = {
    type: "text",
    value: "",
    position,
    data,
};

// ## CommonMark parents

const parent: Parent = {
    type: "whatever",
    children: [text],
    position,
    data,
};

const paragraph: Paragraph = {
    type: "paragraph",
    children: [text],
    position,
    data,
};

const blockquote: Blockquote = {
    type: "blockquote",
    children: [paragraph],
    position,
    data,
};

const emphasis: Emphasis = {
    type: "emphasis",
    children: [text],
    position,
    data,
};

const heading: Heading = {
    type: "heading",
    depth: 1,
    children: [text],
    position,
    data,
};

// @ts-expect-error: `depth` is required.
const headingWithoutDepth: Heading = {
    type: "heading",
    children: [],
};

const link: Link = {
    type: "link",
    children: [text],
    url: "https://example.com",
    position,
    data,
};

const linkReference: LinkReference = {
    type: "linkReference",
    identifier: "x",
    referenceType: "full",
    children: [text],
    position,
    data,
};

// @ts-expect-error: `url` is required.
const linkWithoutUrl: Link = {
    type: "link",
    children: [],
};

const linkWithTitle: Link = {
    type: "link",
    children: [],
    url: "https://example.com",
    title: "",
};

const listItem: ListItem = {
    type: "listItem",
    children: [paragraph],
    position,
    data,
};

const listItemWithChecked: ListItem = {
    type: "listItem",
    children: [],
    checked: true,
};

const listItemWithSpread: ListItem = {
    type: "listItem",
    children: [],
    spread: true,
};

const list: List = {
    type: "list",
    children: [listItem],
    position,
    data,
};

const listWithOrdered: List = {
    type: "list",
    children: [],
    ordered: true,
};

const root: Root = {
    type: "root",
    children: [],
    position,
    data,
};

const strong: Strong = {
    type: "strong",
    children: [text],
    position,
    data,
};

// ## GFM
const delete_: Delete = {
    type: "delete",
    children: [text],
    position,
    data,
};

const footnoteDefinition: FootnoteDefinition = {
    type: "footnoteDefinition",
    identifier: "mdast",
    children: [paragraph],
    position,
    data,
};

const footnoteReference: FootnoteReference = {
    type: "footnoteReference",
    identifier: "mdast",
    position,
    data,
};

const tableCell: TableCell = {
    type: "tableCell",
    children: [text],
    position,
    data,
};

const tableRow: TableRow = {
    type: "tableRow",
    children: [tableCell],
    position,
    data,
};

const table: Table = {
    type: "table",
    children: [tableRow],
    position,
    data,
};

const tableWithAlign: Table = {
    type: "table",
    align: ["left", "center", "right"],
    children: [tableRow],
    position,
    data,
};

// ## Frontmatter
const yaml: Yaml = {
    type: "yaml",
    value: "",
    position,
    data,
};

// Test custom mdast node registration.
interface Toml extends Literal {
    type: "toml";
}

declare module "mdast" {
    interface RootContentMap {
        toml: Toml;
    }

    interface FrontmatterContentMap {
        toml: Toml;
    }
}

const rootOther: Root = {
    type: "root",
    data,
    position,
    children: [{ type: "toml", value: "" }],
};

const rootAnother: Root = {
    type: "root",
    data,
    position,
    children: [
        // @ts-expect-error: node not registered in `RootContentMap`.
        { type: "invalid" },
    ],
};

// Register a field on `Data`, which will be available on all nodes.
declare module "mdast" {
    interface Data {
        someField?: string | undefined;
    }

    interface InlineCodeData {
        someOtherField?: number | undefined;
    }
}

const textWithData: Text = {
    type: "text",
    value: "value",
    data: {
        someField: "a",
        // @ts-expect-error: registered on inline codes, not on texts.
        someOtherField: 1,
    },
};

const textWithOtherData: Text = {
    type: "text",
    value: "value",
    data: {
        someField: "a",
        // @ts-expect-error: not registered.
        someUnknownField: true,
    },
};

const inlineCodeWithData: InlineCode = {
    type: "inlineCode",
    value: "value",
    data: {
        someField: "a",
        someOtherField: 1,
        // @ts-expect-error: not registered.
        someUnknownField: true,
    },
};

// ## Content map checks

// Tests

// Check that all keys of a map are assignable to their corresponding node’s
// `type` field.
//
// A previous version of the types used a few cases such as `inlinecode` for
// `inlineCode` and so on.
//
// The content maps themselves are not used at runtime: they’re just groupings
// of types.
// However that inconsistency prevented them from being used for things like
// defining rendering/handling functions keyed on the node type names.
type TypeMapIssues<M extends {}> = {
    [K in keyof M as M[K] extends { type: K } ? never : K]: [K, M[K]];
};

// Assert that there are no incorrect keys.
// If there are, these is not assignable.
const blockContent: TypeMapIssues<BlockContentMap> = {};
const definitionContent: TypeMapIssues<DefinitionContentMap> = {};
const frontmatterContent: TypeMapIssues<FrontmatterContentMap> = {};
const listContent: TypeMapIssues<ListContentMap> = {};
const phrasingContent: TypeMapIssues<PhrasingContentMap> = {};
const rootContent: TypeMapIssues<RootContentMap> = {};
const rowContent: TypeMapIssues<RowContentMap> = {};
const tableContent: TypeMapIssues<TableContentMap> = {};
