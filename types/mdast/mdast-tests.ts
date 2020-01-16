import * as mdast from 'mdast';

const paragraph: mdast.Paragraph = {
    type: 'paragraph',
    children: [{ type: 'text', value: 'Alpha bravo charlie.' }],
};

const heading: mdast.Heading = {
    type: 'heading',
    depth: 1,
    children: [{ type: 'text', value: 'Alpha' }],
};

const thematicBreak: mdast.ThematicBreak = { type: 'thematicBreak' };

const blockquote: mdast.Blockquote = {
    type: 'blockquote',
    children: [
        {
            type: 'paragraph',
            children: [{ type: 'text', value: 'Alpha bravo charlie.' }],
        },
    ],
};

const list: mdast.List = {
    type: 'list',
    ordered: true,
    start: 1,
    spread: false,
    children: [
        {
            type: 'listItem',
            checked: true,
            spread: false,
            children: [
                {
                    type: 'paragraph',
                    children: [{ type: 'text', value: 'foo' }],
                },
            ],
        },
    ],
};

const ListItem: mdast.ListItem = {
    type: 'listItem',
    checked: true,
    spread: false,
    children: [
        {
            type: 'paragraph',
            children: [{ type: 'text', value: 'bar' }],
        },
    ],
};

const r: mdast.Root = {
    type: 'root',
    children: [{ type: 'paragraph', children: [{ type: 'text', value: 'ok' }] }],
};

const Table: mdast.Table = {
    type: 'table',
    align: ['left', 'center'],
    children: [
        {
            type: 'tableRow',
            children: [
                {
                    type: 'tableCell',
                    children: [{ type: 'text', value: 'foo' }],
                },
                {
                    type: 'tableCell',
                    children: [{ type: 'text', value: 'bar' }],
                },
            ],
        },
        {
            type: 'tableRow',
            children: [
                {
                    type: 'tableCell',
                    children: [{ type: 'text', value: 'baz' }],
                },
                {
                    type: 'tableCell',
                    children: [{ type: 'text', value: 'qux' }],
                },
            ],
        },
    ],
};

const HTML: mdast.HTML = { type: 'html', value: '<div>' };

const code: mdast.Code = {
    type: 'code',
    lang: null,
    meta: null,
    value: 'foo()',
};

const code2: mdast.Code = {
    type: 'code',
    lang: 'javascript',
    meta: 'highlight-line="2"',
    value: 'foo()\nbar()\nbaz()',
};

const yaml: mdast.YAML = { type: 'yaml', value: 'foo: bar' };

const definition: mdast.Definition = {
    type: 'definition',
    identifier: 'alpha',
    label: 'Alpha',
    url: 'https://example.com',
    title: null,
};

const footnoteDefinition: mdast.FootnoteDefinition = {
    type: 'footnoteDefinition',
    identifier: 'alpha',
    label: 'alpha',
    children: [
        {
            type: 'paragraph',
            children: [{ type: 'text', value: 'bravo and charlie.' }],
        },
    ],
};

const text: mdast.Text = { type: 'text', value: 'Alpha bravo charlie.' };

const emphasis_paragraph: mdast.Paragraph = {
    type: 'paragraph',
    children: [
        {
            type: 'emphasis',
            children: [
                {
                    type: 'text',
                    value: 'alpha',
                },
            ],
        },
        { type: 'text', value: ' ' },
        {
            type: 'emphasis',
            children: [{ type: 'text', value: 'bravo' }],
        },
    ],
};

const strong_paragraph: mdast.Paragraph = {
    type: 'paragraph',
    children: [
        {
            type: 'strong',
            children: [{ type: 'text', value: 'alpha' }],
        },

        { type: 'text', value: ' ' },
        {
            type: 'strong',
            children: [{ type: 'text', value: 'bravo' }],
        },
    ],
};

const Delete: mdast.Delete = {
    type: 'delete',
    children: [{ type: 'text', value: 'alpha' }],
};

const inlineCode: mdast.InlineCode = { type: 'inlineCode', value: 'foo()' };

const break_paragraph: mdast.Paragraph = {
    type: 'paragraph',
    children: [{ type: 'text', value: 'foo' }, { type: 'break' }, { type: 'text', value: 'bar' }],
};

const link: mdast.Link = {
    type: 'link',
    url: 'https://example.com',
    title: 'bravo',
    children: [{ type: 'text', value: 'alpha' }],
};

const image: mdast.Image = {
    type: 'image',
    url: 'https://example.com/favicon.ico',
    title: 'bravo',
    alt: 'alpha',
};

const reference: mdast.LinkReference = {
    type: 'linkReference',
    identifier: 'bravo',
    label: 'Bravo',
    referenceType: 'full',
    children: [{ type: 'text', value: 'alpha' }],
};

const imageReference: mdast.ImageReference = {
    type: 'imageReference',
    identifier: 'bravo',
    label: 'bravo',
    referenceType: 'full',
    alt: 'alpha',
};

const footnote: mdast.Footnote = {
    type: 'footnote',
    children: [{ type: 'text', value: 'alpha bravo' }],
};

const footnoteReference: mdast.FootnoteReference = {
    type: 'footnoteReference',
    identifier: 'alpha',
    label: 'alpha',
};
