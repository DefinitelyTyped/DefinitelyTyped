import * as Mdast from 'mdast';

const text: Mdast.Text = {
    type: 'text',
    value: 'text'
};

const cell: Mdast.TableCell = {
    type: 'tableCell',
    children: [text]
};

const row: Mdast.TableRow = {
    type: 'tableRow',
    children: [cell]
};

const table: Mdast.Table = {
    type: 'table',
    align: ['left', 'center', 'right'],
    children: [row]
};

const header: Mdast.Heading = {
    type: 'heading',
    depth: 1,
    children: [text]
};

const code: Mdast.Code = {
    type: 'code',
    lang: 'javascript',
    value: 'let n = 42;'
};

const paragraph: Mdast.Paragraph = {
    type: 'paragraph',
    children: [text]
};

const item: Mdast.ListItem = {
    type: 'listItem',
    children: [paragraph]
};

const list: Mdast.List = {
    type: 'list',
    children: [item]
};

const footNote: Mdast.FootnoteReference = {
    type: 'footnoteReference',
    identifier: 'ref1',
    label: 'Referfence 1'
};

const image: Mdast.Image = {
    type: 'image',
    url: 'https://github.com/syntax-tree/mdast',
    alt: 'image alternative'
};

const root: Mdast.Root = {
    type: 'root',
    children: [header, table, code, image]
};
