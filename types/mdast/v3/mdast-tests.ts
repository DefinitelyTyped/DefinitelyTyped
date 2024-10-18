import * as Mdast from "mdast";

// Augmentations

declare module "mdast" {
    interface FrontmatterContentMap {
        toml: TOML;
    }

    interface StaticPhrasingContentMap {
        mdxJsxTextElement: MDXJSXTextElement;
    }
}

interface TOML extends Mdast.Literal {
    type: "toml";
}

interface MDXJSXTextElement extends Mdast.Literal {
    type: "mdxJsxTextElement";
}

// Tests

declare var toml: TOML;
declare var mdxJsxTextElement: MDXJSXTextElement;

const text: Mdast.Text = {
    type: "text",
    value: "text",
};

const cell: Mdast.TableCell = {
    type: "tableCell",
    children: [text],
};

const row: Mdast.TableRow = {
    type: "tableRow",
    children: [cell],
};

const table: Mdast.Table = {
    type: "table",
    align: ["left", "center", "right"],
    children: [row],
};

const header: Mdast.Heading = {
    type: "heading",
    depth: 1,
    children: [text],
};

const code: Mdast.Code = {
    type: "code",
    lang: "javascript",
    value: "let n = 42;",
};

const paragraph: Mdast.Paragraph = {
    type: "paragraph",
    children: [text, mdxJsxTextElement],
};

const item: Mdast.ListItem = {
    type: "listItem",
    children: [paragraph],
};

const list: Mdast.List = {
    type: "list",
    children: [item],
};

const footNote: Mdast.FootnoteReference = {
    type: "footnoteReference",
    identifier: "ref1",
    label: "Referfence 1",
};

const image: Mdast.Image = {
    type: "image",
    url: "https://github.com/syntax-tree/mdast",
    alt: "image alternative",
};

const root: Mdast.Root = {
    type: "root",
    children: [header, table, code, image, toml],
};

const link: Mdast.Link = {
    type: "link",
    children: [text],
    url: "https://example.com",
    title: null,
};

// Combination of all the declared ContentMap interfaces.
interface ContentMap
    extends
        Mdast.BlockContentMap,
        Mdast.DefinitionContentMap,
        Mdast.FrontmatterContentMap,
        Mdast.ListContentMap,
        Mdast.PhrasingContentMap,
        Mdast.RowContentMap,
        Mdast.StaticPhrasingContentMap,
        Mdast.TableContentMap
{}

// Type with all …ContentMap keys corresponding to something whose `{type: "…"}` field does not match the key.
// This should be empty. A previous version of these type definitions named a few entries like
// "inlinecode" referring to a type keyed as "inlineCode", and so on.
//
// The ContentMap interfaces themselves aren't used at runtime: they're just groupings of types.
// However that inconsistency prevented them from being used for things like defining rendering/handling
// functions keyed on the node type names.
type TypeMapIssues<M extends {}> = {
    [K in keyof M as M[K] extends { type: K } ? never : K]: [K, M[K]];
};

// Assert that there are no incorrect keys. If there are, this is not assignable.
const typeMapIssues: TypeMapIssues<ContentMap> = {};
