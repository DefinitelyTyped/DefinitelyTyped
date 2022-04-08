import * as Table from "cli-table2";

// Code snippets from README.md

// Horizontal table
const table1 = new Table({ head: ['TH 1 label', 'TH 2 label'], colWidths: [100, 200] }) as Table.HorizontalTable;
table1.push(
    ['First value', 'Second value'],
    ['First value', 'Second value']
);

// Vertical table
const table2 = new Table() as Table.VerticalTable;
table2.push(
    { 'Some key': 'Some value' },
    { 'Another key': 'Another value' }
);

// Cross table
const table3 = new Table({ head: ["", "Top Header 1", "Top Header 2"] }) as Table.CrossTable;
table3.push(
    { 'Left Header 1': ['Value Row 1 Col 1', 'Value Row 1 Col 2'] },
    { 'Left Header 2': ['Value Row 2 Col 1', 'Value Row 2 Col 2'] }
);

// Custom styles
const table4 = new Table({
    chars: {
        top: '═', 'top-mid': '╤', 'top-left': '╔', 'top-right': '╗',
        bottom: '═', 'bottom-mid': '╧', 'bottom-left': '╚', 'bottom-right': '╝',
        left: '║', 'left-mid': '╟', mid: '─', 'mid-mid': '┼',
        right: '║', 'right-mid': '╢', middle: '│'
    }
}) as Table.HorizontalTable;
table4.push(
    ['foo', 'bar', 'baz'],
    ['frob', 'bar', 'quuz']
);
const table5 = new Table({ chars: { mid: '', 'left-mid': '', 'mid-mid': '', 'right-mid': '' } }) as Table.HorizontalTable;
table5.push(
    ['foo', 'bar', 'baz'],
    ['frobnicate', 'bar', 'quuz']
);
const table6 = new Table({
    chars: {
        top: '', 'top-mid': '', 'top-left': '', 'top-right': '',
        bottom: '', 'bottom-mid': '', 'bottom-left': '', 'bottom-right': '',
        left: '', 'left-mid': '', mid: '', 'mid-mid': '',
        right: '', 'right-mid': '', middle: ' '
    },
    style: { 'padding-left': 0, 'padding-right': 0 }
}) as Table.HorizontalTable;
table6.push(
    ['foo', 'bar', 'baz'],
    ['frobnicate', 'bar', 'quuz']
);

// Code snippets from basic-usage.md

// Basic Usage
const table7 = new Table({ head: ['a', 'b'] }) as Table.HorizontalTable;
table7.push(['c', 'd']);

// Basic Usage - disable colors - (used often in the examples and tests)
const table8 = new Table({
    head: ['Rel', 'Change', 'By', 'When'],
    style: { head: [], border: [] },
    colWidths: [6, 21, 25, 17]
}) as Table.HorizontalTable;
table8.push(
    ['v0.1', 'Testing something cool', 'rauchg@gmail.com', '7 minutes ago'],
    ['v0.1', 'Testing something cool', 'rauchg@gmail.com', '8 minutes ago']
);

// Create vertical tables by adding objects a that specify key-value pairs
const table9 = new Table({ style: { 'padding-left': 0, 'padding-right': 0, head: [], border: [] } }) as Table.VerticalTable;
table9.push(
    { 'v0.1': 'Testing something cool' },
    { 'v0.1': 'Testing something cool' }
);

// Cross tables are similar to vertical tables, but include an empty string for the first header
const table10 = new Table({
    head: ["", "Header 1", "Header 2"],
    style: { 'padding-left': 0, 'padding-right': 0, head: [], border: [] }
}) as Table.CrossTable;
table10.push(
    { "Header 3": ['v0.1', 'Testing something cool'] },
    { "Header 4": ['v0.1', 'Testing something cool'] }
);

// Stylize the table with custom border characters
const table11 = new Table({
    chars: {
        top: '═',
        'top-mid': '╤',
        'top-left': '╔',
        'top-right': '╗',
        bottom: '═',
        'bottom-mid': '╧',
        'bottom-left': '╚',
        'bottom-right': '╝',
        left: '║',
        'left-mid': '╟',
        right: '║',
        'right-mid': '╢'
    },
    style: { head: [], border: [] }
}) as Table.HorizontalTable;
table11.push(
    ['foo', 'bar', 'baz'],
    ['frob', 'bar', 'quuz']
);

// Use ansi colors (i.e. colors.js) to style text within the cells at will, even across multiple lines
const table12 = new Table({ style: { border: [], head: [] } }) as Table.HorizontalTable;
table12.push([
    /*colors.red(*/'Hello\nhow\nare\nyou?'/*)*/,
    /*colors.blue(*/'I\nam\nfine\nthanks!'/*)*/
]);

// Set wordWrap to true to make lines of text wrap instead of being truncated
const table13 = new Table({
    style: { border: [], head: [] },
    colWidths: [7, 9],
    wordWrap: true
}) as Table.HorizontalTable;
table13.push([
    'Hello how are you?',
    'I am fine thanks!'
]);

// Code snippets from advanced-usage.md

// use colSpan to span columns - (colSpan above normal cell)
const table14 = new Table({ style: { head: [], border: [] } }) as Table.HorizontalTable;
table14.push(
    [{ colSpan: 2, content: 'greetings' }],
    [{ colSpan: 2, content: 'greetings' }],
    ['hello', 'howdy']
);

// use colSpan to span columns - (colSpan below normal cell)
const table15 = new Table({ style: { head: [], border: [] } }) as Table.HorizontalTable;
table15.push(
    ['hello', 'howdy'],
    [{ colSpan: 2, content: 'greetings' }],
    [{ colSpan: 2, content: 'greetings' }]
);

// use rowSpan to span rows - (rowSpan on the left side)
const table16 = new Table({ style: { head: [], border: [] } }) as Table.HorizontalTable;
table16.push(
    [{ rowSpan: 2, content: 'greetings' }, { rowSpan: 2, content: 'greetings', vAlign: 'center' }, 'hello'],
    ['howdy']
);

// use rowSpan to span rows - (rowSpan on the right side)
const table17 = new Table({ style: { head: [], border: [] } }) as Table.HorizontalTable;
table17.push(
    ['hello', { rowSpan: 2, content: 'greetings' }, { rowSpan: 2, content: 'greetings', vAlign: 'bottom' }],
    ['howdy']
);

// mix rowSpan and colSpan together for complex table layouts
const table18 = new Table({ style: { head: [], border: [] } }) as Table.HorizontalTable;
table18.push(
    [{ content: 'hello', colSpan: 2 }, { rowSpan: 2, colSpan: 2, content: 'sup' }, { rowSpan: 3, content: 'hi' }],
    [{ content: 'howdy', colSpan: 2 }],
    ['o', 'k', '', '']
);

// multi-line content will flow across rows in rowSpan cells
const table19 = new Table({ style: { head: [], border: [] } }) as Table.HorizontalTable;
table19.push(
    ['hello', { rowSpan: 2, content: 'greetings\nfriends' }, { rowSpan: 2, content: 'greetings\nfriends' }],
    ['howdy']
);

// multi-line content will flow across rows in rowSpan cells - (complex layout)
const table20 = new Table({ style: { head: [], border: [] } }) as Table.HorizontalTable;
table20.push(
    [{ content: 'hello', colSpan: 2 }, { rowSpan: 2, colSpan: 2, content: 'sup\nman\nhey' }, { rowSpan: 3, content: 'hi\nyo' }],
    [{ content: 'howdy', colSpan: 2 }],
    ['o', 'k', '', '']
);

// rowSpan cells can have a staggered layout
const table21 = new Table({ style: { head: [], border: [] } }) as Table.HorizontalTable;
table21.push(
    [{ content: 'a', rowSpan: 2 }, 'b'],
    [{ content: 'c', rowSpan: 2 }],
    ['d']
);

// the layout manager automatically create empty cells to fill in the table
const table22 = new Table({ style: { head: [], border: [] } }) as Table.HorizontalTable;
table22.push(
    [{ content: 'a', rowSpan: 3, colSpan: 2 }, 'b'],
    [],
    [{ content: 'c', rowSpan: 2, colSpan: 2 }],
    []
);

// use table rowHeights option to fix row height. The truncation symbol will be shown on the last line.
const table23 = new Table({ rowHeights: [2], style: { head: [], border: [] } }) as Table.HorizontalTable;
table23.push(['hello\nhi\nsup']);

// if colWidths is not specified, the layout manager will automatically widen rows to fit the content
const table24 = new Table({ style: { head: [], border: [] } }) as Table.HorizontalTable;
table24.push(
    [{ colSpan: 2, content: 'hello there' }],
    ['hi', 'hi']
);

// you can specify a column width for only the first row, other rows will be automatically widened to fit content
const table25 = new Table({ colWidths: [4], style: { head: [], border: [] } }) as Table.HorizontalTable;
table25.push(
    [{ colSpan: 2, content: 'hello there' }],
    ['hi', { hAlign: 'center', content: 'hi' }]
);

// a column with a null column width will be automatically widened to fit content
const table26 = new Table({ colWidths: [null, 4], style: { head: [], border: [] } }) as Table.HorizontalTable;
table26.push(
    [{ colSpan: 2, content: 'hello there' }],
    [{ hAlign: 'right', content: 'hi' }, 'hi']
);

// feel free to use colors in your content strings, column widths will be calculated correctly
const table27 = new Table({ colWidths: [5], style: { head: [], border: [] } }) as Table.HorizontalTable;
table27.push([/*colors.red(*/'hello'/*)*/]);

// Header as text
const table28 = new Table({ head: ["Top Header 1", "Top Header 2"] }) as Table.HorizontalTable;
table28.push(
    ['Value Row 1 Col 1', 'Value Row 1 Col 2'],
    ['Value Row 2 Col 1', 'Value Row 2 Col 2']
);

// Header as Cells
const table29 = new Table({ head: [{content: "Top Header 1"}, {content: "Top Header 2"}] }) as Table.HorizontalTable;
table29.push(
    ['Value Row 1 Col 1', 'Value Row 1 Col 2'],
    ['Value Row 2 Col 1', 'Value Row 2 Col 2']
);

// ColSpan in header
const table30 = new Table({ head: [{content: "Top Header 1", colSpan: 2}, {content: "Top Header 3"}] }) as Table.HorizontalTable;
table30.push(
    ['Value Row 1 Col 1', 'Value Row 1 Col 2', 'Value Row 1 Col 3'],
    ['Value Row 2 Col 1', 'Value Row 2 Col 2', 'Value Row 2 Col 3']
);
