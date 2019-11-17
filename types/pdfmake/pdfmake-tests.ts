import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

const definitions: pdfMake.TDocumentDefinitions[] = [
    {
        content: [
            'First paragraph',
            'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
        ]
    },
    {
        content: [
            {
                text: 'This is a header, using header style',
                style: 'header'
            },
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n\n',
            {
                text: 'Subheader 1 - using subheader style',
                style: 'subheader'
            },
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n\n',
            {
                text: 'Subheader 2 - using subheader style',
                style: 'subheader'
            },
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n\n',
            {
                text: 'It is possible to apply multiple styles, ',
                style: ['quote', 'small']
            }
        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true
            },
            subheader: {
                fontSize: 15,
                bold: true
            },
            quote: {
                italics: true
            },
            small: {
                fontSize: 8
            }
        }
    },
    {
        content: [
            {
                text: 'This is a header (whole paragraph uses the same header style)\n\n',
                style: 'header'
            },
            {
                text: [
                    'It is however possible to provide an array of texts ',
                    'to the paragraph (instead of a single string) and have ',
                    { text: 'a better ', fontSize: 15, bold: true },
                    'control over it. \nEach inline can be ',
                    { text: 'styled ', fontSize: 20 },
                    { text: 'independently ', italics: true, fontSize: 40 },
                    'then.\n\n'
                ]
            },
            { text: 'Mixing named styles and style-overrides', style: 'header' },
            {
                style: 'bigger',
                italics: false,
                text: [
                    'We can also mix named-styles and style-overrides at both paragraph and inline level. ',
                    'For example, this paragraph uses the "bigger" style, which changes fontSize to 15 and sets italics to true. ',
                    'Texts are not italics though. It\'s because we\'ve overriden italics back to false at ',
                    'the paragraph level. \n\n',
                    'We can also change the style of a single inline. Let\'s use a named style called header: ',
                    { text: 'like here.\n', style: 'header' },
                    'It got bigger and bold.\n\n',
                    'OK, now we\'re going to mix named styles and style-overrides at the inline level. ',
                    'We\'ll use header style (it makes texts bigger and bold), but we\'ll override ',
                    'bold back to false: ',
                    { text: 'wow! it works!', style: 'header', bold: false },
                    '\n\nMake sure to take a look into the sources to understand what\'s going on here.'
                ]
            }
        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true
            },
            bigger: {
                fontSize: 15,
                italics: true
            }
        }
    },
    {
        content: [
            {
                text: 'This paragraph uses header style and extends the alignment property',
                style: 'header',
                alignment: 'center'
            },
            {
                text: [
                    'This paragraph uses header style and overrides bold value setting it back to false.\n',
                    'Header style in this example sets alignment to justify, so this paragraph should be rendered \n',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret '
                ],
                style: 'header',
                bold: false
            }
        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true,
                alignment: 'justify'
            }
        }
    },
    {
        content: [
            'By default paragraphs are stacked one on top of (or actually - below) another. ',
            'It\'s possible however to split any paragraph (or even the whole document) into columns.\n\n',
            'Here we go with 2 star-sized columns, with justified text and gap set to 20:\n\n',
            {
                alignment: 'justify',
                columns: [
                    {
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                    },
                    {
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                    }
                ]
            },
            '\nStar-sized columns have always equal widths, so if we define 3 of those, ',
            'it\'ll look like this (make sure to scroll to the next page, as we have a couple of more examples):\n\n',
            {
                columns: [
                    {
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                    },
                    {
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                    },
                    {
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                    }
                ]
            },
            '\nYou can also specify accurate widths for some (or all columns)',
            {
                columns: [
                    {
                        width: 90,
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                    },
                    {
                        width: '*',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                    },
                    {
                        width: '*',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                    },
                    {
                        width: 90,
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                    }
                ]
            },
            '\nWe also support auto columns. They set their widths based on the content:\n\n',
            {
                columns: [
                    {
                        width: 'auto',
                        text: 'auto column'
                    },
                    {
                        width: '*',
                        text: 'This is a star-sized column. It should get the remaining'
                            + ' space divided by the number of all star-sized columns.'
                    },
                    {
                        width: 50,
                        text: 'this one has specific width set to 50'
                    },
                    {
                        width: 'auto',
                        text: 'another auto column'
                    },
                    {
                        width: '*',
                        text: 'This is a star-sized column. It should get the remaining space '
                            + 'divided by the number of all star-sized columns.'
                    },
                ]
            },
            '\nIf all auto columns fit within available width, the table does not occupy whole space:\n\n',
            {
                columns: [
                    {
                        width: 'auto',
                        text: 'val1'
                    },
                    {
                        width: 'auto',
                        text: 'val2'
                    },
                    {
                        width: 'auto',
                        text: 'value3'
                    },
                    {
                        width: 'auto',
                        text: 'value 4'
                    },
                ]
            },
            '\nAnother cool feature of pdfmake is the ability to have nested elements.',
            {
                columns: [
                    {
                        width: 100,
                        fontSize: 9,
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
                    },
                    [
                        'As you can see in the document definition - this column is not defined with ',
                        'an object, but an array, which means it\'s treated as an array of paragraphs rendered one below another.',
                        'Just like on the top-level of the document. Let\'s try to divide the remaing space into 3 star-sized columns:\n\n',
                        {
                            columns: [
                                { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
                                { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
                                { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
                            ]
                        }
                    ]
                ]
            },
            '\n\nOh, don\'t forget, we can use everything from styling examples (named styles, custom overrides) here as well.\n\n',
            'For instance - our next paragraph will use the \'bigger\' style (with fontSize set to 15 and italics - true).',
            ' We\'ll split it into three columns and make sure they inherit the style:\n\n',
            {
                style: 'bigger',
                columns: [
                    'First column (BTW - it\'s defined as a single string value. pdfmake will turn it into appropriate structure ',
                    'automatically and make sure it inherits the styles',
                    {
                        fontSize: 20,
                        text: 'In this column, we\'ve overriden fontSize to 20. It means the content should have italics=true'
                            + ' (inherited from the style) and be a little bit bigger'
                    },
                    {
                        style: 'header',
                        text: 'Last column does not override any styling properties, but applies a new style (header) to itself.'
                            + ' Eventually - texts here have italics=true (from bigger) and derive fontSize from the style.'
                            + ' OK, but which one? Both styles define it. As we already know from our styling examples, multiple'
                            + ' styles can be applied to the element and their order is important. Because \'header\' style has been'
                            + ' set after \'bigger\' its fontSize takes precedence over the fontSize from \'bigger\'. This is how it works. '
                            + 'You will find more examples in the unit tests.'
                    }
                ]
            },
            '\n\nWow, you\'ve read the whole document! Congratulations :D'
        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true
            },
            bigger: {
                fontSize: 15,
                italics: true
            }
        },
        defaultStyle: {
            columnGap: 20
        }
    },
    {
        content: [
            { text: 'Tables', style: 'header' },
            'Official documentation is in progress, this document is just',
            ' a glimpse of what is possible with pdfmake and its layout engine.',
            {
                text: 'A simple table (no headers, no width specified, no spans, no styling)',
                style: 'subheader'
            },
            'The following table has nothing more than a body array',
            {
                style: 'tableExample',
                table: {
                    body: [
                        ['Column 1', 'Column 2', 'Column 3'],
                        ['One value goes here', 'Another one here', 'OK?']
                    ]
                }
            },
            { text: 'A simple table with nested elements', style: 'subheader' },
            'It is of course possible to nest any other type of nodes available in ',
            'pdfmake inside table cells',
            {
                style: 'tableExample',
                table: {
                    body: [
                        ['Column 1', 'Column 2', 'Column 3'],
                        [
                            {
                                stack: [
                                    'Let\'s try an unordered list',
                                    {
                                        ul: [
                                            'item 1',
                                            'item 2'
                                        ]
                                    }
                                ]
                            },
                            [
                                'or a nested table',
                                {
                                    table: {
                                        body: [
                                            ['Col1', 'Col2', 'Col3'],
                                            ['1', '2', '3'],
                                            ['1', '2', '3']
                                        ]
                                    },
                                }
                            ],
                            {
                                text: [
                                    'Inlines can be ',
                                    { text: 'styled\n', italics: true },
                                    { text: 'easily as everywhere else', fontSize: 10 }]
                            }
                        ]
                    ]
                }
            },
            { text: 'Defining column widths', style: 'subheader' },
            'Tables support the same width definitions as standard columns:',
            {
                bold: true,
                ul: [
                    'auto',
                    'star',
                    'fixed value'
                ]
            },
            {
                style: 'tableExample',
                table: {
                    widths: [100, '*', 200, '*'],
                    body: [
                        ['width=100', 'star-sized', 'width=200', 'star-sized'],
                        ['fixed-width cells have exactly the specified width',
                            { text: 'nothing interesting here', italics: true, color: 'gray' },
                            { text: 'nothing interesting here', italics: true, color: 'gray' },
                            { text: 'nothing interesting here', italics: true, color: 'gray' }]
                    ]
                }
            },
            {
                style: 'tableExample',
                table: {
                    widths: ['*', 'auto'],
                    body: [
                        ['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
                    ]
                }
            },
            {
                style: 'tableExample',
                table: {
                    widths: ['*', 'auto'],
                    body: [
                        ['This is a star-sized column. The next column over, an auto-sized column',
                            { text: 'I am auto sized.', noWrap: true }],
                    ]
                }
            },
            { text: 'Defining row heights', style: 'subheader' },
            {
                style: 'tableExample',
                table: {
                    heights: [20, 50, 70],
                    body: [
                        ['row 1 with height 20', 'column B'],
                        ['row 2 with height 50', 'column B'],
                        ['row 3 with height 70', 'column B']
                    ]
                }
            },
            'With same height:',
            {
                style: 'tableExample',
                table: {
                    heights: 40,
                    body: [
                        ['row 1', 'column B'],
                        ['row 2', 'column B'],
                        ['row 3', 'column B']
                    ]
                }
            },
            'With height from function:',
            {
                style: 'tableExample',
                table: {
                    heights: (row: number) => {
                        return (row + 1) * 25;
                    },
                    body: [
                        ['row 1', 'column B'],
                        ['row 2', 'column B'],
                        ['row 3', 'column B']
                    ]
                }
            },
            { text: 'Column/row spans', pageBreak: 'before', style: 'subheader' },
            'Each cell-element can set a rowSpan or colSpan',
            {
                style: 'tableExample',
                color: '#444',
                table: {
                    widths: [200, 'auto', 'auto'],
                    headerRows: 2,
                    // keepWithHeaderRows: 1,
                    body: [
                        [{ text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center' },
                        {}, { text: 'Header 3', style: 'tableHeader', alignment: 'center' }],
                        [{ text: 'Header 1', style: 'tableHeader', alignment: 'center' },
                        { text: 'Header 2', style: 'tableHeader', alignment: 'center' },
                        { text: 'Header 3', style: 'tableHeader', alignment: 'center' }],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        [{ rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet' },
                            'Sample value 2', 'Sample value 3'],
                        ['', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', { colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time' }, ''],
                        ['Sample value 1', '', ''],
                    ]
                }
            },
            { text: 'Headers', pageBreak: 'before', style: 'subheader' },
            'You can declare how many rows should be treated as a header. Headers are',
            ' automatically repeated on the following pages',
            {
                text: ['It is also possible to set keepWithHeaderRows to make sure there will be no page-break'
                    + 'between the header and these rows. Take a look at the document-definition and play with it. '
                    + 'If you set it to one, the following table will automatically start on the next page, '
                    + 'since there\'s not enough space for the first row to be rendered here'], color: 'gray', italics: true
            },
            {
                style: 'tableExample',
                table: {
                    headerRows: 1,
                    // dontBreakRows: true,
                    // keepWithHeaderRows: 1,
                    body: [
                        [{ text: 'Header 1', style: 'tableHeader' }, { text: 'Header 2', style: 'tableHeader' },
                        { text: 'Header 3', style: 'tableHeader' }],
                        [
                            'Lorem ipsum dolor sit amet, ',
                            'Lorem ipsum dolor sit amet, ',
                            'Lorem ipsum dolor sit amet, ',
                        ]
                    ]
                }
            },
            { text: 'Styling tables', style: 'subheader' },
            'You can provide a custom styler for the table. Currently it supports:',
            {
                ul: [
                    'line widths',
                    'line colors',
                    'cell paddings',
                ]
            },
            'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
            { text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8] },
            {
                style: 'tableExample',
                table: {
                    headerRows: 1,
                    body: [
                        [{ text: 'Header 1', style: 'tableHeader' }, { text: 'Header 2', style: 'tableHeader' },
                        { text: 'Header 3', style: 'tableHeader' }],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ]
                },
                layout: 'noBorders'
            },
            { text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8] },
            {
                style: 'tableExample',
                table: {
                    headerRows: 1,
                    body: [
                        [{ text: 'Header 1', style: 'tableHeader' }, { text: 'Header 2', style: 'tableHeader' },
                        { text: 'Header 3', style: 'tableHeader' }],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ]
                },
                layout: 'headerLineOnly'
            },
            { text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8] },
            {
                style: 'tableExample',
                table: {
                    headerRows: 1,
                    body: [
                        [{ text: 'Header 1', style: 'tableHeader' }, { text: 'Header 2', style: 'tableHeader' }, { text: 'Header 3', style: 'tableHeader' }],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ]
                },
                layout: 'lightHorizontalLines'
            },
            { text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8] },
            {
                style: 'tableExample',
                table: {
                    headerRows: 1,
                    body: [
                        [{ text: 'Header 1', style: 'tableHeader' }, { text: 'Header 2', style: 'tableHeader' }, { text: 'Header 3', style: 'tableHeader' }],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ]
                },
                layout: {
                    hLineWidth: (i: number, node: any) => {
                        return (i === 0 || i === node.table.body.length) ? 2 : 1;
                    },
                    vLineWidth: (i: number, node: any) => {
                        return (i === 0 || i === node.table.widths.length) ? 2 : 1;
                    },
                    hLineColor: (i: number, node: any) => {
                        return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
                    },
                    vLineColor: (i: number, node: any) => {
                        return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
                    },
                    // paddingLeft: function(i, node) { return 4; },
                    // paddingRight: function(i, node) { return 4; },
                    // paddingTop: function(i, node) { return 2; },
                    // paddingBottom: function(i, node) { return 2; },
                    // fillColor: (i: number, node: any) => { return null; }
                }
            },
            { text: 'zebra style', margin: [0, 20, 0, 8] },
            {
                style: 'tableExample',
                table: {
                    body: [
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                        ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ]
                },
                layout: {
                    fillColor: (i: number, node: any) => {
                        return (i % 2 === 0) ? '#CCCCCC' : null;
                    }
                }
            },
            { text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8] },
            'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
            {
                style: 'tableExample',
                table: {
                    body: [
                        [
                            {
                                border: [false, true, false, false],
                                fillColor: '#eeeeee',
                                text: 'border:\n[false, true, false, false]'
                            },
                            {
                                border: [false, false, false, false],
                                fillColor: '#dddddd',
                                text: 'border:\n[false, false, false, false]'
                            },
                            {
                                border: [true, true, true, true],
                                fillColor: '#eeeeee',
                                text: 'border:\n[true, true, true, true]'
                            }
                        ],
                        [
                            {
                                rowSpan: 3,
                                border: [true, true, true, true],
                                fillColor: '#eeeeff',
                                text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
                            },
                            {
                                border: undefined,
                                fillColor: '#eeeeee',
                                text: 'border:\nundefined'
                            },
                            {
                                border: [true, false, false, false],
                                fillColor: '#dddddd',
                                text: 'border:\n[true, false, false, false]'
                            }
                        ],
                        [
                            '',
                            {
                                colSpan: 2,
                                border: [true, true, true, true],
                                fillColor: '#eeffee',
                                text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
                            },
                            ''
                        ],
                        [
                            '',
                            {
                                border: undefined,
                                fillColor: '#eeeeee',
                                text: 'border:\nundefined'
                            },
                            {
                                border: [false, false, true, true],
                                fillColor: '#dddddd',
                                text: 'border:\n[false, false, true, true]'
                            }
                        ]
                    ]
                },
                layout: {
                    defaultBorder: false,
                }
            },
            'For every cell without a border property, whether it has all borders or not is determined by ',
            'layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
            {
                style: 'tableExample',
                table: {
                    body: [
                        [
                            {
                                border: [false, false, false, false],
                                fillColor: '#eeeeee',
                                text: 'border:\n[false, false, false, false]'
                            },
                            {
                                fillColor: '#dddddd',
                                text: 'border:\nundefined'
                            },
                            {
                                fillColor: '#eeeeee',
                                text: 'border:\nundefined'
                            },
                        ],
                        [
                            {
                                fillColor: '#dddddd',
                                text: 'border:\nundefined'
                            },
                            {
                                fillColor: '#eeeeee',
                                text: 'border:\nundefined'
                            },
                            {
                                border: [true, true, false, false],
                                fillColor: '#dddddd',
                                text: 'border:\n[true, true, false, false]'
                            },
                        ]
                    ]
                }
            },
            'And some other examples with rowSpan/colSpan...',
            {
                style: 'tableExample',
                table: {
                    body: [
                        [
                            '',
                            'column 1',
                            'column 2',
                            'column 3'
                        ],
                        [
                            'row 1',
                            {
                                rowSpan: 3,
                                colSpan: 3,
                                border: [true, true, true, true],
                                fillColor: '#cccccc',
                                text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
                            },
                            '',
                            ''
                        ],
                        [
                            'row 2',
                            '',
                            '',
                            ''
                        ],
                        [
                            'row 3',
                            '',
                            '',
                            ''
                        ]
                    ]
                },
                layout: {
                    defaultBorder: false,
                }
            },
            {
                style: 'tableExample',
                table: {
                    body: [
                        [
                            {
                                colSpan: 3,
                                text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
                                fillColor: '#eeeeee',
                                border: [false, false, false, false]
                            },
                            '',
                            ''
                        ],
                        [
                            'border:\nundefined',
                            'border:\nundefined',
                            'border:\nundefined'
                        ]
                    ]
                }
            },
            {
                style: 'tableExample',
                table: {
                    body: [
                        [
                            { rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false] },
                            'border:\nundefined',
                            'border:\nundefined'
                        ],
                        [
                            '',
                            'border:\nundefined',
                            'border:\nundefined'
                        ],
                        [
                            '',
                            'border:\nundefined',
                            'border:\nundefined'
                        ]
                    ]
                }
            }
        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true,
                margin: [0, 0, 0, 10]
            },
            subheader: {
                fontSize: 16,
                bold: true,
                margin: [0, 10, 0, 5]
            },
            tableExample: {
                margin: [0, 5, 0, 15]
            },
            tableHeader: {
                bold: true,
                fontSize: 13,
                color: 'black'
            }
        },
        defaultStyle: {
            // alignment: 'justify'
        }
    },
    {
        content: [
            { text: 'Unordered list', style: 'header' },
            {
                ul: [
                    'item 1',
                    'item 2',
                    'item 3'
                ]
            },
            { text: '\n\nUnordered list with longer lines', style: 'header' },
            {
                ul: [
                    'item 1',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                    'item 3'
                ]
            },
            { text: '\n\nOrdered list', style: 'header' },
            {
                ol: [
                    'item 1',
                    'item 2',
                    'item 3'
                ]
            },
            { text: '\n\nOrdered list with longer lines', style: 'header' },
            {
                ol: [
                    'item 1',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                    'item 3'
                ]
            },
            { text: '\n\nOrdered list should be descending', style: 'header' },
            {
                reversed: true,
                ol: [
                    'item 1',
                    'item 2',
                    'item 3'
                ]
            },
            { text: '\n\nOrdered list with start value', style: 'header' },
            {
                start: 50,
                ol: [
                    'item 1',
                    'item 2',
                    'item 3'
                ]
            },
            { text: '\n\nOrdered list with own values', style: 'header' },
            {
                ol: [
                    { text: 'item 1', counter: 10 },
                    { text: 'item 2', counter: 20 },
                    { text: 'item 3', counter: 30 },
                    { text: 'item 4 without own value' }
                ]
            },
            { text: '\n\nNested lists (ordered)', style: 'header' },
            {
                ol: [
                    'item 1',
                    [
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                        {
                            ol: [
                                'subitem 1',
                                'subitem 2',
                                'subitem 3 - Lorem ipsum dolor sit amet',
                                'subitem 3 - Lorem ipsum dolor sit amet',
                                'subitem 3 - Lorem ipsum dolor sit amet',
                                {
                                    text: [
                                        'subitem 3 - Lorem ipsum dolor sit amet',
                                        'subitem 3 - Lorem ipsum dolor sit amet',
                                        'subitem 3 - Lorem ipsum dolor sit amet',
                                        'subitem 3 - Lorem ipsum dolor sit amet',
                                        'subitem 3 - Lorem ipsum dolor sit amet',
                                        'subitem 3 - Lorem ipsum dolor sit amet',
                                        'subitem 3 - Lorem ipsum dolor sit amet',
                                        'subitem 3 - Lorem ipsum dolor sit amet',
                                    ]
                                },

                                'subitem 3 - Lorem ipsum dolor sit amet',
                                'subitem 3 - Lorem ipsum dolor sit amet',
                                'subitem 3 - Lorem ipsum dolor sit amet',
                                'subitem 3 - Lorem ipsum dolor sit amet',
                                'subitem 4',
                                'subitem 5',
                            ]
                        }
                    ],
                    'item 3\nsecond line of item3'
                ]
            },
            { text: '\n\nNested lists (unordered)', style: 'header' },
            {
                ol: [
                    'item 1',
                    'Lorem ipsum dolor sit amet',
                    {
                        ul: [
                            'subitem 1',
                            'subitem 2',
                            'subitem 3 - Lorem ipsum dolor sit amet',
                            'subitem 3 - Lorem ipsum dolor sit amet',
                            'subitem 3 - Lorem ipsum dolor sit amet',
                            {
                                text: [
                                    'subitem 3 - Lorem ipsum dolor sit amet',
                                    'subitem 3 - Lorem ipsum dolor sit amet',
                                    'subitem 3 - Lorem ipsum dolor sit amet',
                                    'subitem 3 - Lorem ipsum dolor sit amet',
                                    'subitem 3 - Lorem ipsum dolor sit amet',
                                    'subitem 3 - Lorem ipsum dolor sit amet',
                                    'subitem 3 - Lorem ipsum dolor sit amet',
                                    'subitem 3 - Lorem ipsum dolor sit amet',
                                ]
                            },

                            'subitem 3 - Lorem ipsum dolor sit amet',
                            'subitem 3 - Lorem ipsum dolor sit amet',
                            'subitem 3 - Lorem ipsum dolor sit amet',
                            'subitem 3 - Lorem ipsum dolor sit amet',
                            'subitem 4',
                            'subitem 5',
                        ]
                    },
                    'item 3\nsecond line of item3',
                ]
            },
            { text: '\n\nUnordered lists inside columns', style: 'header' },
            {
                columns: [
                    {
                        ul: [
                            'item 1',
                            'Lorem ipsum dolor sit amet',
                        ]
                    },
                    {
                        ul: [
                            'item 1',
                            'Lorem ipsum dolor sit amet',
                        ]
                    }
                ]
            },
            { text: '\n\nOrdered lists inside columns', style: 'header' },
            {
                columns: [
                    {
                        ol: [
                            'item 1',
                            'Lorem ipsum dolor sit amet',
                        ]
                    },
                    {
                        ol: [
                            'item 1',
                            'Lorem ipsum dolor sit amet',
                        ]
                    }
                ]
            },
            { text: '\n\nNested lists width columns', style: 'header' },
            {
                ul: [
                    'item 1',
                    'Lorem ipsum dolor sit amet',
                    {
                        ol: [
                            [
                                {
                                    columns: [
                                        'column 1',
                                        {
                                            stack: [
                                                'column 2',
                                                {
                                                    ul: [
                                                        'item 1',
                                                        'item 2',
                                                        {
                                                            ul: [
                                                                'item',
                                                                'item',
                                                                'item',
                                                            ]
                                                        },
                                                        'item 4',
                                                    ]
                                                }
                                            ]
                                        },
                                        'column 3',
                                        'column 4',
                                    ]
                                },
                                'subitem 1 in a vertical container',
                                'subitem 2 in a vertical container',
                            ],
                            'subitem 2',
                            'subitem 3 - Lorem ipsum dolor sit amet',
                            'subitem 3 - Lorem ipsum dolor sit amet',
                            'subitem 3 - Lorem ipsum dolor sit amet',
                            {
                                text: [
                                    'subitem 3 - Lorem ipsum dolor sit amet',
                                    'subitem 3 - Lorem ipsum dolor sit amet',
                                    'subitem 3 - Lorem ipsum dolor sit amet',
                                    'subitem 3 - Lorem ipsum dolor sit amet',
                                    'subitem 3 - Lorem ipsum dolor sit amet',
                                    'subitem 3 - Lorem ipsum dolor sit amet',
                                    'subitem 3 - Lorem ipsum dolor sit amet',
                                    'subitem 3 - Lorem ipsum dolor sit amet',
                                ]
                            },

                            'subitem 3 - Lorem ipsum dolor sit amet',
                            'subitem 3 - Lorem ipsum dolor sit amet',
                            'subitem 3 - Lorem ipsum dolor sit amet',
                            'subitem 3 - Lorem ipsum dolor sit amet',
                            'subitem 4',
                            'subitem 5',
                        ]
                    },
                    'item 3\nsecond line of item3',
                ]
            },
            { text: '\n\nUnordered list with square marker type', style: 'header' },
            {
                type: 'square',
                ul: [
                    'item 1',
                    'item 2',
                    'item 3'
                ]
            },
            { text: '\n\nUnordered list with circle marker type', style: 'header' },
            {
                type: 'circle',
                ul: [
                    'item 1',
                    'item 2',
                    'item 3'
                ]
            },
            { text: '\n\nColored unordered list', style: 'header' },
            {
                color: 'blue',
                ul: [
                    'item 1',
                    'item 2',
                    'item 3'
                ]
            },
            { text: '\n\nColored unordered list with own marker color', style: 'header' },
            {
                color: 'blue',
                markerColor: 'red',
                ul: [
                    'item 1',
                    'item 2',
                    'item 3'
                ]
            },
            { text: '\n\nColored ordered list', style: 'header' },
            {
                color: 'blue',
                ol: [
                    'item 1',
                    'item 2',
                    'item 3'
                ]
            },
            { text: '\n\nColored ordered list with own marker color', style: 'header' },
            {
                color: 'blue',
                markerColor: 'red',
                ol: [
                    'item 1',
                    'item 2',
                    'item 3'
                ]
            },
            { text: '\n\nOrdered list - type: lower-alpha', style: 'header' },
            {
                type: 'lower-alpha',
                ol: [
                    'item 1',
                    'item 2',
                    'item 3'
                ]
            },
            { text: '\n\nOrdered list - type: upper-alpha', style: 'header' },
            {
                type: 'upper-alpha',
                ol: [
                    'item 1',
                    'item 2',
                    'item 3'
                ]
            },

            { text: '\n\nOrdered list - type: upper-roman', style: 'header' },
            {
                type: 'upper-roman',
                ol: [
                    'item 1',
                    'item 2',
                    'item 3',
                    'item 4',
                    'item 5'
                ]
            },
            { text: '\n\nOrdered list - type: lower-roman', style: 'header' },
            {
                type: 'lower-roman',
                ol: [
                    'item 1',
                    'item 2',
                    'item 3',
                    'item 4',
                    'item 5'
                ]
            },
            { text: '\n\nOrdered list - type: none', style: 'header' },
            {
                type: 'none',
                ol: [
                    'item 1',
                    'item 2',
                    'item 3'
                ]
            },
            { text: '\n\nUnordered list - type: none', style: 'header' },
            {
                type: 'none',
                ul: [
                    'item 1',
                    'item 2',
                    'item 3'
                ]
            },
            { text: '\n\nOrdered list with own separator', style: 'header' },
            {
                separator: ')',
                ol: [
                    'item 1',
                    'item 2',
                    'item 3'
                ]
            },
            { text: '\n\nOrdered list with own complex separator', style: 'header' },
            {
                separator: ['(', ')'],
                ol: [
                    'item 1',
                    'item 2',
                    'item 3'
                ]
            },
            { text: '\n\nOrdered list with own items type', style: 'header' },
            {
                ol: [
                    'item 1',
                    { text: 'item 2', listType: 'none' },
                    { text: 'item 3', listType: 'upper-roman' }
                ]
            },
            { text: '\n\nUnordered list with own items type', style: 'header' },
            {
                ul: [
                    'item 1',
                    { text: 'item 2', listType: 'none' },
                    { text: 'item 3', listType: 'circle' }
                ]
            },
        ],
        styles: {
            header: {
                bold: true,
                fontSize: 15
            }
        },
        defaultStyle: {
            fontSize: 12
        }
    },
    {
        content: [
            {
                stack: [
                    'This header has both top and bottom margins defined',
                    { text: 'This is a subheader', style: 'subheader' },
                ],
                style: 'header'
            },
            {
                text: [
                    'Margins have slightly different behavior than other layout properties. ',
                    'They are not inherited, unlike anything else. They\'re applied only to those nodes which explicitly ',
                    'set margin or style property.\n',
                ]
            },
            {
                text: 'This paragraph (consisting of a single line) directly sets top and bottom margin to 20',
                margin: [0, 20],
            },
            {
                stack: [
                    {
                        text: [
                            'This line begins a stack of paragraphs. The whole stack uses a ',
                            { text: 'superMargin', italics: true },
                            ' style (with margin and fontSize properties).',
                        ]
                    },
                    {
                        text: ['When you look at the', { text: ' document definition', italics: true },
                            ', you will notice that fontSize is inherited by all paragraphs inside the stack.']
                    },
                    'Margin however is only applied once (to the whole stack).'
                ],
                style: 'superMargin'
            },
            {
                stack: [
                    'I\'m not sure yet if this is the desired behavior. I find it a better approach however.',
                    ' One thing to be considered in the future is an explicit layout property called inheritMargin which could opt-in the inheritance.\n\n',
                    {
                        fontSize: 15,
                        text: [
                            'Currently margins for ',
                            /* the following margin definition doesn't change anything */
                            { text: 'inlines', margin: 20 },
                            ' are ignored\n\n'
                        ],
                    },
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n',
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n',
                ],
                margin: [0, 20, 0, 0],
                alignment: 'justify'
            }
        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true,
                alignment: 'right',
                margin: [0, 190, 0, 80]
            },
            subheader: {
                fontSize: 14
            },
            superMargin: {
                margin: [20, 0, 40, 0],
                fontSize: 15
            }
        }
    },
    {
        content: [
            'pdfmake (since it\'s based on pdfkit) supports JPEG and PNG format',
            'If no width/height/fit is provided, image original size will be used',
            {
                image: 'sampleImage.jpg',
            },
            'If you specify width, image will scale proportionally',
            {
                image: 'sampleImage.jpg',
                width: 150
            },
            'If you specify both width and height - image will be stretched',
            {
                image: 'sampleImage.jpg',
                width: 150,
                height: 150,
            },
            'You can also fit the image inside a rectangle',
            {
                image: 'sampleImage.jpg',
                fit: [100, 100],
                pageBreak: 'after'
            },
            // Warning! Make sure to copy this definition and paste it to an
            // external text editor, as the online AceEditor has some troubles
            // with long dataUrl lines and the following image values look like
            // they're empty.
            'Images can be also provided in dataURL format...',
            {
                image: 'data:image/gif;base64,...',
                width: 200
            },
            'or be declared in an "images" dictionary and referenced by name',
            {
                image: 'building',
                width: 200
            },
        ],
        images: {
            building: 'data:image/gif;base64,...'
        }
    },
    {
        compress: false,
        content: ['This document does not use compression']
    }
];

const createPdf = () => {
    const pdf = pdfMake;
    pdf.vfs = pdfFonts.pdfMake.vfs;

    for (const definition of definitions) {
        pdfMake.createPdf(definition).download();
    }
};

import PdfPrinter = require('pdfmake');

const printer = new PdfPrinter({
    Roboto: {
        normal: 'fonts/Roboto-Regular.ttf',
        bold: 'fonts/Roboto-Medium.ttf',
        italics: 'fonts/Roboto-Italic.ttf',
        bolditalics: 'fonts/Roboto-MediumItalic.ttf'
    }
});

const absolutePdfDoc = printer.createPdfKitDocument({
    content: [
        {
            image: 'bee',
            width: 50,
            height: 50,
            absolutePosition: { x: 100, y: 100 }
        },
        {
            image: 'bee',
            width: 50,
            height: 50,
            absolutePosition: { x: 150, y: 150 }
        },
        {
            image: 'bee',
            width: 50,
            height: 50,
            absolutePosition: { x: 200, y: 200 }
        },
        {
            image: 'bee',
            width: 50,
            height: 50,
            absolutePosition: { x: 250, y: 150 }
        },
        {
            image: 'bee',
            width: 50,
            height: 50,
            absolutePosition: { x: 300, y: 100 }
        },

        {
            text: 'You can put images at any position',
            pageBreak: 'after'
        },

        {
            text: 'As',
            absolutePosition: { x: 100, y: 100 }
        },
        {
            text: 'well',
            absolutePosition: { x: 150, y: 150 }
        },
        {
            text: 'as',
            absolutePosition: { x: 200, y: 200 }
        },
        {
            text: 'text',
            absolutePosition: { x: 250, y: 150 }
        },
        {
            text: '!!!',
            absolutePosition: { x: 300, y: 100 },
            pageBreak: 'after'
        },

        {
            text: 'And this is a table on top of an image at x:100 y:100',
        },
        {
            image: 'bee',
            width: 100,
            height: 100,
            absolutePosition: { x: 100, y: 100 }
        },
        {
            absolutePosition: { x: 100, y: 100 },
            style: 'tableExample',
            table: {
                body: [
                    ['Column 1', 'Column 2', 'Column 3'],
                    [
                        {
                            stack: [
                                'Let\'s try an unordered list',
                                {
                                    ul: [
                                        'item 1',
                                        'item 2'
                                    ]
                                }
                            ]
                        },
                        /* a nested table will appear here as soon as I fix a bug */
                        [
                            'or a nested table',
                            {
                                table: {
                                    body: [
                                        ['Col1', 'Col2', 'Col3'],
                                        ['1', '2', '3'],
                                        ['1', '2', '3']
                                    ]
                                },
                            }
                        ],
                        {
                            text: [
                                'Inlines can be ',
                                { text: 'styled\n', italics: true },
                                { text: 'easily as everywhere else', fontSize: 10 }]
                        }
                    ]
                ]
            }
        },
    ],
    images: {
        bee: "images/bee.jpg"
    },
    styles: {
        header: {
            fontSize: 18,
            bold: true,
            margin: [0, 0, 0, 10]
        },
        subheader: {
            fontSize: 16,
            bold: true,
            margin: [0, 10, 0, 5]
        },
        tableExample: {
            margin: [0, 5, 0, 15]
        },
        tableHeader: {
            bold: true,
            fontSize: 13,
            color: 'black'
        }
    },
});

const backgroundPdfDoc = printer.createPdfKitDocument({
    background(page) {
        if (page !== 2) {
            return [
                'Background paragraph on page ' + page,
                'Another background paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines',
                {
                    image: 'bee',
                    width: 200
                }
            ];
        }
    },
    content: [
        'First paragraph',
        'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines',
        '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n',
        'Another Page',
        '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n',
        'Another Page'
    ],

    images: {
        bee: 'images/bee.jpg'
    }
});

const basicsPdfDoc = printer.createPdfKitDocument({
    content: [
        'First paragraph',
        'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
    ]
});

const columnsPdfDoc = printer.createPdfKitDocument({
    content: [
        'By default paragraphs are stacked one on top of (or actually - below) another. ',
        'It\'s possible however to split any paragraph (or even the whole document) into columns.\n\n',
        'Here we go with 2 star-sized columns, with justified text and gap set to 20:\n\n',
        {
            alignment: 'justify',
            columns: [
                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                },
                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                }
            ]
        },
        '\nStar-sized columns have always equal widths, so if we define 3 of those, it\'ll look like this (make sure to scroll to the next page, as we have a couple of more examples):\n\n',
        {
            columns: [
                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                },
                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                },
                {
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                }
            ]
        },
        'You can also specify accurate widths for some (or all columns). Let\'s make the first column and the last one narrow and let the layout ' +
        'engine divide remaining space equally between other star-columns:',
        {
            columns: [
                {
                    width: 90,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                },
                {
                    width: '*',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                },
                {
                    width: '*',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                },
                {
                    width: 90,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                }
            ]
        },
        '\nWe also support auto columns. They set their widths based on the content:\n\n',
        {
            columns: [
                {
                    width: 'auto',
                    text: 'auto column'
                },
                {
                    width: '*',
                    text: 'This is a star-sized column. It should get the remaining space divided by the number of all star-sized columns.'
                },
                {
                    width: 50,
                    text: 'this one has specific width set to 50'
                },
                {
                    width: 'auto',
                    text: 'another auto column'
                },
                {
                    width: '*',
                    text: 'This is a star-sized column. It should get the remaining space divided by the number of all star-sized columns.'
                },
            ]
        },
        '\nIf all auto columns fit within available width, the table does not occupy whole space:\n\n',
        {
            columns: [
                {
                    width: 'auto',
                    text: 'val1'
                },
                {
                    width: 'auto',
                    text: 'val2'
                },
                {
                    width: 'auto',
                    text: 'value3'
                },
                {
                    width: 'auto',
                    text: 'value 4'
                },
            ]
        },
        '\nAnother cool feature of pdfmake is the ability to have nested elements.',
        'Each column is actually quite similar to the whole document, so we can have inner paragraphs and further divisions, like in the following example:\n\n',
        {
            columns: [
                {
                    width: 100,
                    fontSize: 9,
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                },
                [
                    'As you can see in the document definition - this column is not defined with an object, but an array, ' +
                    ' which means it\'s treated as an array of paragraphs rendered one below another.',
                    'Just like on the top-level of the document. Let\'s try to divide the remaing space into 3 star-sized columns:\n\n',
                    {
                        columns: [
                            { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
                            { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
                            { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
                        ]
                    }
                ]
            ]
        },
        '\n\nOh, don\'t forget, we can use everything from styling examples (named styles, custom overrides) here as well.\n\n',
        'For instance - our next paragraph will use the \'bigger\' style (with fontSize set to 15 and italics - true). We\'ll split it into three columns and make sure they inherit the style:\n\n',
        {
            style: 'bigger',
            columns: [
                'First column (BTW - it\'s defined as a single string value. pdfmake will turn it into appropriate structure automatically and make sure it inherits the styles',
                {
                    fontSize: 20,
                    text: 'In this column, we\'ve overriden fontSize to 20. It means the content should have italics=true (inherited from the style) and be a little bit bigger',
                },
                {
                    style: 'header',
                    text: 'Last column does not override any styling properties, but applies a new style (header) to itself. ' +
                        'Eventually - texts here have italics=true (from bigger) and derive fontSize from the style. OK, but which one? ' +
                        'Both styles define it. As we already know from our styling examples, multiple styles can be applied to the element ' +
                        'and their order is important. Because \'header\' style has been set after \'bigger\' its fontSize takes precedence ' +
                        'over the fontSize from \'bigger\'. This is how it works. You will find more examples in the unit tests.'
                }
            ]
        },
        '\n\nWow, you\'ve read the whole document! Congratulations :D'
    ],
    styles: {
        header: {
            fontSize: 18,
            bold: true
        },
        bigger: {
            fontSize: 15,
            italics: true
        }
    },
    defaultStyle: {
        columnGap: 20
    }
});

const imagesPdfDoc = printer.createPdfKitDocument({
    content: [
        'pdfmake (since it\'s based on pdfkit) supports JPEG and PNG format',
        'If no width/height/fit is provided, image original size will be used',
        {
            image: 'fonts/sampleImage.jpg',
        },
        'If you specify width, image will scale proportionally',
        {
            image: 'fonts/sampleImage.jpg',
            width: 150
        },
        'If you specify both width and height - image will be stretched',
        {
            image: 'fonts/sampleImage.jpg',
            width: 150,
            height: 150,
        },
        'You can also fit the image inside a rectangle',
        {
            image: 'fonts/sampleImage.jpg',
            fit: [100, 100],
            pageBreak: 'after'
        },
        'Images can be also provided in dataURL format\n(the one below was taken from http://www.clipartbest.com/clipart-dT7zx5rT9)',
        {
            image: 'images/bee.jpg',
            width: 200
        },
        'or be defined in the "images" dictionary, which can be referenced by name:',
        {
            image: 'bee',
            width: 200
        },
        'and opacity is supported:',
        {
            image: 'fonts/sampleImage.jpg',
            width: 150,
            opacity: 0.5
        },
    ],
    images: {
        bee: 'images/bee.jpg'
    }
});

const linksPdfDoc = printer.createPdfKitDocument({
    content: [
        {
            text: [
                'Link to ',
                { text: 'pdfmake website', link: 'http://pdfmake.org', decoration: 'underline' },
                ' and ',
                { text: 'documentation', link: 'https://pdfmake.github.io/docs/', decoration: 'underline' },
                '.'
            ]
        },
        { text: 'Go to page 2', linkToPage: 2, decoration: 'underline' },
        { text: 'Link to header 2', linkToDestination: 'header2', decoration: 'underline' },
        'Links are also supported with images:',
        { image: 'fonts/sampleImage.jpg', width: 150, link: 'http://pdfmake.org' },
        { text: 'Header on page 2', fontSize: 18, bold: true, pageBreak: 'before' },
        { text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.' },
        '\n\n',
        { text: 'Header 2', id: 'header2', fontSize: 18, bold: true },
        { text: 'Go to page 1', linkToPage: 1, decoration: 'underline' },
    ]
});

const listsPdfDoc = printer.createPdfKitDocument({
    content: [
        { text: 'Unordered list', style: 'header' },
        {
            ul: [
                'item 1',
                'item 2',
                'item 3'
            ]
        },
        { text: '\n\nUnordered list with longer lines', style: 'header' },
        {
            ul: [
                'item 1',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                'item 3'
            ]
        },
        { text: '\n\nOrdered list', style: 'header' },
        {
            ol: [
                'item 1',
                'item 2',
                'item 3'
            ]
        },
        { text: '\n\nOrdered list with longer lines', style: 'header' },
        {
            ol: [
                'item 1',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                'item 3'
            ]
        },
        { text: '\n\nOrdered list should be descending', style: 'header' },
        {
            reversed: true,
            ol: [
                'item 1',
                'item 2',
                'item 3'
            ]
        },
        { text: '\n\nOrdered list with start value', style: 'header' },
        {
            start: 50,
            ol: [
                'item 1',
                'item 2',
                'item 3'
            ]
        },
        { text: '\n\nOrdered list with own values', style: 'header' },
        {
            ol: [
                { text: 'item 1', counter: 10 },
                { text: 'item 2', counter: 20 },
                { text: 'item 3', counter: 30 },
                { text: 'item 4 without own value' }
            ]
        },
        { text: '\n\nNested lists (ordered)', style: 'header' },
        {
            ol: [
                'item 1',
                [
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                    {
                        ol: [
                            'subitem 1',
                            'subitem 2',
                            'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                            'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                            'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                            {
                                text: [
                                    'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                                    'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                                    'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                                    'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                                    'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                                    'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                                    'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                                    'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                                ]
                            },

                            'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                            'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                            'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                            'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                            'subitem 4',
                            'subitem 5',
                        ]
                    }
                ],
                'item 3\nsecond line of item3'
            ]
        },
        { text: '\n\nNested lists (unordered)', style: 'header' },
        {
            ol: [
                'item 1',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                {
                    ul: [
                        'subitem 1',
                        'subitem 2',
                        'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                        'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                        'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                        {
                            text: [
                                'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                                'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                                'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                                'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                                'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                                'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                                'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                                'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                            ]
                        },

                        'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                        'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                        'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                        'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                        'subitem 4',
                        'subitem 5',
                    ]
                },
                'item 3\nsecond line of item3',
            ]
        },
        { text: '\n\nUnordered lists inside columns', style: 'header' },
        {
            columns: [
                {
                    ul: [
                        'item 1',
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                    ]
                },
                {
                    ul: [
                        'item 1',
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                    ]
                }
            ]
        },
        { text: '\n\nOrdered lists inside columns', style: 'header' },
        {
            columns: [
                {
                    ol: [
                        'item 1',
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                    ]
                },
                {
                    ol: [
                        'item 1',
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                    ]
                }
            ]
        },
        { text: '\n\nNested lists width columns', style: 'header' },
        {
            ul: [
                'item 1',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                {
                    ol: [
                        [
                            {
                                columns: [
                                    'column 1',
                                    {
                                        stack: [
                                            'column 2',
                                            {
                                                ul: [
                                                    'item 1',
                                                    'item 2',
                                                    {
                                                        ul: [
                                                            'item',
                                                            'item',
                                                            'item',
                                                        ]
                                                    },
                                                    'item 4',
                                                ]
                                            }
                                        ]
                                    },
                                    'column 3',
                                    'column 4',
                                ]
                            },
                            'subitem 1 in a vertical container',
                            'subitem 2 in a vertical container',
                        ],
                        'subitem 2',
                        'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                        'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                        'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                        {
                            text: [
                                'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                                'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                                'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                                'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                                'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                                'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                                'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                                'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                            ]
                        },

                        'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                        'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                        'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                        'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                        'subitem 4',
                        'subitem 5',
                    ]
                },
                'item 3\nsecond line of item3',
            ]
        },
        { text: '\n\nUnordered list with square marker type', style: 'header' },
        {
            type: 'square',
            ul: [
                'item 1',
                'item 2',
                'item 3'
            ]
        },
        { text: '\n\nUnordered list with circle marker type', style: 'header' },
        {
            type: 'circle',
            ul: [
                'item 1',
                'item 2',
                'item 3'
            ]
        },
        { text: '\n\nColored unordered list', style: 'header' },
        {
            color: 'blue',
            ul: [
                'item 1',
                'item 2',
                'item 3'
            ]
        },
        { text: '\n\nColored unordered list with own marker color', style: 'header' },
        {
            color: 'blue',
            markerColor: 'red',
            ul: [
                'item 1',
                'item 2',
                'item 3'
            ]
        },
        { text: '\n\nColored ordered list', style: 'header' },
        {
            color: 'blue',
            ol: [
                'item 1',
                'item 2',
                'item 3'
            ]
        },
        { text: '\n\nColored ordered list with own marker color', style: 'header' },
        {
            color: 'blue',
            markerColor: 'red',
            ol: [
                'item 1',
                'item 2',
                'item 3'
            ]
        },
        { text: '\n\nOrdered list - type: lower-alpha', style: 'header' },
        {
            type: 'lower-alpha',
            ol: [
                'item 1',
                'item 2',
                'item 3'
            ]
        },
        { text: '\n\nOrdered list - type: upper-alpha', style: 'header' },
        {
            type: 'upper-alpha',
            ol: [
                'item 1',
                'item 2',
                'item 3'
            ]
        },

        { text: '\n\nOrdered list - type: upper-roman', style: 'header' },
        {
            type: 'upper-roman',
            ol: [
                'item 1',
                'item 2',
                'item 3',
                'item 4',
                'item 5'
            ]
        },
        { text: '\n\nOrdered list - type: lower-roman', style: 'header' },
        {
            type: 'lower-roman',
            ol: [
                'item 1',
                'item 2',
                'item 3',
                'item 4',
                'item 5'
            ]
        },
        { text: '\n\nOrdered list - type: none', style: 'header' },
        {
            type: 'none',
            ol: [
                'item 1',
                'item 2',
                'item 3'
            ]
        },
        { text: '\n\nUnordered list - type: none', style: 'header' },
        {
            type: 'none',
            ul: [
                'item 1',
                'item 2',
                'item 3'
            ]
        },
        { text: '\n\nOrdered list with own separator', style: 'header' },
        {
            separator: ')',
            ol: [
                'item 1',
                'item 2',
                'item 3'
            ]
        },
        { text: '\n\nOrdered list with own complex separator', style: 'header' },
        {
            separator: ['(', ')'],
            ol: [
                'item 1',
                'item 2',
                'item 3'
            ]
        },
        { text: '\n\nOrdered list with own items type', style: 'header' },
        {
            ol: [
                'item 1',
                { text: 'item 2', listType: 'none' },
                { text: 'item 3', listType: 'upper-roman' }
            ]
        },
        { text: '\n\nUnordered list with own items type', style: 'header' },
        {
            ul: [
                'item 1',
                { text: 'item 2', listType: 'none' },
                { text: 'item 3', listType: 'circle' }
            ]
        },
    ],
    styles: {
        header: {
            bold: true,
            fontSize: 15
        }
    },
    defaultStyle: {
        fontSize: 12
    }
});

const marginsPdfDoc = printer.createPdfKitDocument({
    content: [
        {
            stack: [
                'This header has both top and bottom margins defined',
                { text: 'This is a subheader', style: 'subheader' },
            ],
            style: 'header'
        },
        {
            text: [
                'Margins have slightly different behavior than other layout properties. They are not inherited, unlike anything else. They\'re applied only to those nodes which explicitly ',
                'set margin or style property.\n',
            ]
        },
        {
            text: 'This paragraph (consisting of a single line) directly sets top and bottom margin to 20',
            margin: [0, 20],
        },
        {
            stack: [
                {
                    text: [
                        'This line begins a stack of paragraphs. The whole stack uses a ',
                        { text: 'superMargin', italics: true },
                        ' style (with margin and fontSize properties).',
                    ]
                },
                { text: ['When you look at the', { text: ' document definition', italics: true }, ', you will notice that fontSize is inherited by all paragraphs inside the stack.'] },
                'Margin however is only applied once (to the whole stack).'
            ],
            style: 'superMargin'
        },
        {
            stack: [
                'I\'m not sure yet if this is the desired behavior. I find it a better approach however. One thing to be considered in the future ' +
                'is an explicit layout property called inheritMargin which could opt-in the inheritance.',
                {
                    fontSize: 15,
                    text: [
                        'Currently margins for ',
                        /* the following margin definition doesn't change anything */
                        { text: 'inlines', margin: 20 },
                        ' are ignored\n\n'
                    ],
                },
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n',
            ],
            margin: [0, 20, 0, 0],
            alignment: 'justify'
        }
    ],
    styles: {
        header: {
            fontSize: 18,
            bold: true,
            alignment: 'right',
            margin: [0, 190, 0, 80]
        },
        subheader: {
            fontSize: 14
        },
        superMargin: {
            margin: [20, 0, 40, 0],
            fontSize: 15
        }
    }
});

const referencesPdfDoc = printer.createPdfKitDocument({
    content: [
        {
            text: 'This is a page reference example. Page number of text element marked id property will be located in pageReference element. See below.\n\n'
        },
        {
            table: {
                body: [
                    [{ text: 'page #', bold: true }, { text: 'title', bold: true }],
                    [{ pageReference: 'header1', alignment: 'right' }, 'Header one'],
                    [{ pageReference: 'subheader1', alignment: 'right' }, 'Subheader one'],
                    [{ pageReference: 'subheader2', alignment: 'right' }, 'Subheader two'],
                    [{ pageReference: 'subheader3', alignment: 'right' }, 'Subheader three']
                ]
            }
        },
        {
            text: '\nAnd text can be referenced by textReference:\n'
        },
        {
            table: {
                body: [
                    [{ text: 'page #', bold: true }, { text: 'title', bold: true }],
                    [{ pageReference: 'header1', alignment: 'right' }, { textReference: 'header1' }],
                    [{ pageReference: 'subheader1', alignment: 'right' }, { textReference: 'subheader1' }],
                    [{ pageReference: 'subheader2', alignment: 'right' }, { textReference: 'subheader2' }],
                    [{ pageReference: 'subheader3', alignment: 'right' }, { textReference: 'subheader3' }]
                ]
            }
        },
        {
            text: '\nAnd all can be in inline texts:\n'
        },
        {
            text: [
                'Chapter "',
                { textReference: 'header1' },
                '" is on page number ',
                { pageReference: 'header1' }
            ]
        },
        {
            text: [
                'Chapter "',
                { textReference: 'subheader1' },
                '" is on page number ',
                { pageReference: 'subheader1' }
            ]
        },
        {
            text: [
                'Chapter "',
                { textReference: 'subheader2' },
                '" is on page number ',
                { pageReference: 'subheader2' }
            ]
        },
        {
            text: [
                'Chapter "',
                { textReference: 'subheader3' },
                '" is on page number ',
                { pageReference: 'subheader3' }
            ]
        },
        {
            text: 'This is a header, using header style',
            style: 'header',
            id: 'header1',
            pageBreak: 'before'
        },
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam.\n\n',
        {
            text: 'Subheader 1 - using subheader style',
            style: 'subheader',
            id: 'subheader1',
            pageBreak: 'before'
        },
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n\n',
        {
            text: 'Subheader 2 - using subheader style',
            style: 'subheader',
            id: 'subheader2',
            pageBreak: 'before'
        },
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n\n',
        {
            text: 'It is possible to apply multiple styles, by passing an array. This paragraph uses two styles: ' +
                'quote and small. When multiple styles are provided, they are evaluated in the specified order which is ' +
                'important in case they define the same properties',
            style: ['quote', 'small']
        },
        {
            text: [
                {
                    text: 'Subheader 3 - using inline text',
                    style: 'subheader',
                    id: 'subheader3',
                    tocItem: true
                },
                {
                    text: '; and this text not be displayed in ToC',
                    italics: true
                }
            ],
            pageBreak: 'before'
        },
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    ],
    styles: {
        header: {
            fontSize: 18,
            bold: true
        },
        subheader: {
            fontSize: 15,
            bold: true
        },
        quote: {
            italics: true
        },
        small: {
            fontSize: 8
        }
    }
});

const qrPdfDoc = printer.createPdfKitDocument({
    pageMargins: [10, 10, 10, 10],
    content: [
        { text: 'Can you see me', margins: [0, 0, 0, 8] },
        { qr: 'Can you see me' },
        '\n',

        { text: 'Colored QR', margins: [0, 0, 0, 8] },
        { qr: 'Can you see me', foreground: 'red', background: 'yellow' },
        '\n',

        { text: 'http://pdfmake.org', margins: [0, 0, 0, 8] },
        { qr: 'http://pdfmake.org' },
        '\n',

        { text: 'A very long text (306 chars)', margins: [0, 0, 0, 8] },
        {
            qr: 'The amount of data that can be stored in the QR code symbol depends on the datatype ' +
                '(mode, or input character set), version (1, …, 40, indicating the overall dimensions of the symbol), ' +
                'and error correction level. The maximum storage capacities occur for 40-L symbols (version 40, error correction level L):'
        },
        '\n',
        { text: 'same long text with fit = 100 and alignment = right', margins: [0, 0, 0, 8] },
        {
            qr: 'The amount of data that can be stored in the QR code symbol depends on the datatype ' +
                '(mode, or input character set), version (1, …, 40, indicating the overall dimensions of the symbol), ' +
                'and error correction level. The maximum storage capacities occur for 40-L symbols (version 40, error correction level L):',
            fit: 150, alignment: 'right'
        },
    ]
});

const relativePdfDoc = printer.createPdfKitDocument({
    content: [
        { text: 'We sometimes don\'t know the absolute position of text', margin: [10, 0, 0, 50] },
        {
            columns: [
                { width: '50%', text: 'horizontal position is not known either' },
                {
                    width: '50%', stack: [
                        { stack: [] },
                        { canvas: [] }
                    ]
                }
            ]
        },
        { text: 'We can position relative with center and right alignment', margin: [0, 50, 0, 50] },
        {
            table: {
                widths: [100, 100, 100],
                body: [
                    [
                        'Column with a lot of text. Column with a lot of text. Column with a lot of text. Column with a lot of text.',
                        {
                            text: 'I\'m aligned center',
                            style: {
                                alignment: 'center',
                            },
                            relativePosition: {
                                x: 0,
                                y: 25,
                            }
                        },
                        {
                            text: 'I\'m aligned right',
                            style: {
                                alignment: 'right',
                            },
                            relativePosition: {
                                x: 0,
                                y: 25,
                            }
                        }
                    ]
                ]
            }
        },
    ]
});

const securityPdfDoc = printer.createPdfKitDocument({
    userPassword: '123',
    ownerPassword: '123456',
    permissions: {
        printing: 'highResolution',
        modifying: false,
        copying: false,
        annotating: true,
        fillingForms: true,
        contentAccessibility: true,
        documentAssembly: true
    },
    content: [
        'Document content with security',
        'For details see to source or documentation.'
    ]
});

const inlineStylePdfDoc = printer.createPdfKitDocument({
    content: [
        {
            text: 'This is a header (whole paragraph uses the same header style)\n\n',
            style: 'header'
        },
        {
            text: [
                'It is however possible to provide an array of texts ',
                'to the paragraph (instead of a single string) and have ',
                { text: 'a better ', fontSize: 15, bold: true },
                'control over it. \nEach inline can be ',
                { text: 'styled ', fontSize: 20 },
                { text: 'independently ', italics: true, fontSize: 40 },
                'then.\n\n'
            ]
        },
        { text: 'Mixing named styles and style-overrides', style: 'header' },
        {
            style: 'bigger',
            italics: false,
            text: [
                'We can also mix named-styles and style-overrides at both paragraph and inline level. ',
                'For example, this paragraph uses the "bigger" style, which changes fontSize to 15 and sets italics to true. ',
                'Texts are not italics though. It\'s because we\'ve overriden italics back to false at ',
                'the paragraph level. \n\n',
                'We can also change the style of a single inline. Let\'s use a named style called header: ',
                { text: 'like here.\n', style: 'header' },
                'It got bigger and bold.\n\n',
                'OK, now we\'re going to mix named styles and style-overrides at the inline level. ',
                'We\'ll use header style (it makes texts bigger and bold), but we\'ll override ',
                'bold back to false: ',
                { text: 'wow! it works!', style: 'header', bold: false },
                '\n\nMake sure to take a look into the sources to understand what\'s going on here.'
            ]
        }
    ],
    styles: {
        header: {
            fontSize: 18,
            bold: true
        },
        bigger: {
            fontSize: 15,
            italics: true
        }
    }
});

const namedStylePdfDoc = printer.createPdfKitDocument({
    content: [
        {
            text: 'This is a header, using header style',
            style: 'header'
        },
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam.\n\n',
        {
            text: 'Subheader 1 - using subheader style',
            style: 'subheader'
        },
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n\n',
        {
            text: 'Subheader 2 - using subheader style',
            style: 'subheader'
        },
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n\n',
        {
            text: 'It is possible to apply multiple styles, by passing an array. This paragraph uses two styles: quote and small. ' +
                'When multiple styles are provided, they are evaluated in the specified order which is important in case they define the same properties',
            style: ['quote', 'small']
        }
    ],
    styles: {
        header: {
            fontSize: 18,
            bold: true
        },
        subheader: {
            fontSize: 15,
            bold: true
        },
        quote: {
            italics: true
        },
        small: {
            fontSize: 8
        }
    }
});

const namedStyleOverridePdfDoc = printer.createPdfKitDocument({
    content: [
        {
            text: 'This paragraph uses header style and extends the alignment property',
            style: 'header',
            alignment: 'center'
        },
        {
            text: [
                'This paragraph uses header style and overrides bold value setting it back to false.\n',
                'Header style in this example sets alignment to justify, so this paragraph should be rendered \n',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
            ],
            style: 'header',
            bold: false
        }
    ],
    styles: {
        header: {
            fontSize: 18,
            bold: true,
            alignment: 'justify'
        }
    },
});

const sylingPropPdfDoc = printer.createPdfKitDocument({
    content: [
        {
            text: 'Paragraphs can also by styled without using named-styles (this one sets fontSize to 25)',
            fontSize: 25
        },
        'Another paragraph, using default style, this time a little bit longer to make sure, this line will be divided into at least two lines\n\n',
        {
            text: 'This paragraph does not use a named-style and sets fontSize to 8 and italics to true',
            fontSize: 8,
            italics: true
        },
        '\n\nFor preserving leading spaces use preserveLeadingSpaces property:',
        { text: '    This is a paragraph with preserved leading spaces.', preserveLeadingSpaces: true },
        { text: '{', preserveLeadingSpaces: true },
        { text: '    "sample": {', preserveLeadingSpaces: true },
        { text: '        "json": "nested"', preserveLeadingSpaces: true },
        { text: '    }', preserveLeadingSpaces: true },
        { text: '}', preserveLeadingSpaces: true },
        '\n\nfontFeatures property:',
        { text: 'Hello World 1234567890', fontFeatures: ['smcp'] },
        { text: 'Hello World 1234567890', fontFeatures: ['c2sc'] },
        { text: 'Hello World 1234567890', fontFeatures: ['onum'] },
        { text: 'Hello World 1234567890', fontFeatures: ['onum', 'c2sc'] },
        '\n\nText opacity:',
        { text: 'Hello World', opacity: 0.8 },
        { text: 'Hello World', opacity: 0.6 },
        { text: 'Hello World', opacity: 0.4 },
        { text: 'Hello World', opacity: 0.2 },
        { text: 'Hello World', opacity: 0.1 },
    ]
});

const svgPdfDoc = printer.createPdfKitDocument({
    content: [
        'SVG nodes behave similar to images by supporting width/height or fit',
        'It is however not yet possible to use svg files or to have a library of svgs in the document definition',
        '\n',
        'Note that before you can use SVG nodes you must install svg-to-pdfkit as it is not included with pdfmake to keep bundle size down',
        {
            svg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect x="0" y="0" width="600" height="400"></rect></svg>',
            width: 600,
            height: 400
        },
        'If you specify width, svg will scale proportionally',
        {
            svg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect x="0" y="0" width="600" height="400"></rect></svg>',
            width: 200
        },
        'You can also fit the svg inside a rectangle',
        {
            svg: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect x="0" y="0" width="600" height="400"></rect></svg>',
            fit: [100, 100],
        }
    ]
});

const tablesPdfDoc = printer.createPdfKitDocument({
    content: [
        { text: 'Tables', style: 'header' },
        'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
        { text: 'A simple table (no headers, no width specified, no spans, no styling)', style: 'subheader' },
        'The following table has nothing more than a body array',
        {
            style: 'tableExample',
            table: {
                body: [
                    ['Column 1', 'Column 2', 'Column 3'],
                    ['One value goes here', 'Another one here', 'OK?']
                ]
            }
        },
        { text: 'A simple table with nested elements', style: 'subheader' },
        'It is of course possible to nest any other type of nodes available in pdfmake inside table cells',
        {
            style: 'tableExample',
            table: {
                body: [
                    ['Column 1', 'Column 2', 'Column 3'],
                    [
                        {
                            stack: [
                                'Let\'s try an unordered list',
                                {
                                    ul: [
                                        'item 1',
                                        'item 2'
                                    ]
                                }
                            ]
                        },
                        [
                            'or a nested table',
                            {
                                table: {
                                    body: [
                                        ['Col1', 'Col2', 'Col3'],
                                        ['1', '2', '3'],
                                        ['1', '2', '3']
                                    ]
                                },
                            }
                        ],
                        {
                            text: [
                                'Inlines can be ',
                                { text: 'styled\n', italics: true },
                                { text: 'easily as everywhere else', fontSize: 10 }]
                        }
                    ]
                ]
            }
        },
        { text: 'Defining column widths', style: 'subheader' },
        'Tables support the same width definitions as standard columns:',
        {
            bold: true,
            ul: [
                'auto',
                'star',
                'fixed value'
            ]
        },
        {
            style: 'tableExample',
            table: {
                widths: [100, '*', 200, '*'],
                body: [
                    ['width=100', 'star-sized', 'width=200', 'star-sized'],
                    [
                        'fixed-width cells have exactly the specified width',
                        { text: 'nothing interesting here', italics: true, color: 'gray' },
                        { text: 'nothing interesting here', italics: true, color: 'gray' },
                        { text: 'nothing interesting here', italics: true, color: 'gray' }
                    ]
                ]
            }
        },
        {
            style: 'tableExample',
            table: {
                widths: ['*', 'auto'],
                body: [
                    ['This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.', 'I am auto sized.'],
                ]
            }
        },
        {
            style: 'tableExample',
            table: {
                widths: ['*', 'auto'],
                body: [
                    [
                        'This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate ' +
                        'all the text in this cell, because it has been given the noWrap style.',
                        { text: 'I am auto sized.', noWrap: true }
                    ],
                ]
            }
        },
        { text: 'Defining row heights', style: 'subheader' },
        {
            style: 'tableExample',
            table: {
                heights: [20, 50, 70],
                body: [
                    ['row 1 with height 20', 'column B'],
                    ['row 2 with height 50', 'column B'],
                    ['row 3 with height 70', 'column B']
                ]
            }
        },
        'With same height:',
        {
            style: 'tableExample',
            table: {
                heights: 40,
                body: [
                    ['row 1', 'column B'],
                    ['row 2', 'column B'],
                    ['row 3', 'column B']
                ]
            }
        },
        'With height from function:',
        {
            style: 'tableExample',
            table: {
                heights: row => (row + 1) * 25,
                body: [
                    ['row 1', 'column B'],
                    ['row 2', 'column B'],
                    ['row 3', 'column B']
                ]
            }
        },
        { text: 'Column/row spans', pageBreak: 'before', style: 'subheader' },
        'Each cell-element can set a rowSpan or colSpan',
        {
            style: 'tableExample',
            color: '#444',
            table: {
                widths: [200, 'auto', 'auto'],
                headerRows: 2,
                keepWithHeaderRows: 1,
                body: [
                    [
                        { text: 'Header with Colspan = 2', style: 'tableHeader', colSpan: 2, alignment: 'center' },
                        {},
                        { text: 'Header 3', style: 'tableHeader', alignment: 'center' }
                    ],
                    [
                        { text: 'Header 1', style: 'tableHeader', alignment: 'center' },
                        { text: 'Header 2', style: 'tableHeader', alignment: 'center' },
                        { text: 'Header 3', style: 'tableHeader', alignment: 'center' }
                    ],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    [
                        { rowSpan: 3, text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor' },
                        'Sample value 2', 'Sample value 3'
                    ],
                    ['', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    [
                        'Sample value 1',
                        { colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time' },
                        ''
                    ],
                    ['Sample value 1', '', ''],
                ]
            }
        },
        { text: 'Headers', pageBreak: 'before', style: 'subheader' },
        'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
        {
            text: [
                'It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. ' +
                'Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start ' +
                'on the next page, since there\'s not enough space for the first row to be rendered here'
            ],
            color: 'gray',
            italics: true
        },
        {
            style: 'tableExample',
            table: {
                headerRows: 1,
                dontBreakRows: true,
                keepWithHeaderRows: 1,
                body: [
                    [{ text: 'Header 1', style: 'tableHeader' }, { text: 'Header 2', style: 'tableHeader' }, { text: 'Header 3', style: 'tableHeader' }],
                    [
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    ]
                ]
            }
        },
        { text: 'Styling tables', style: 'subheader' },
        'You can provide a custom styler for the table. Currently it supports:',
        {
            ul: [
                'line widths',
                'line colors',
                'cell paddings',
            ]
        },
        'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
        { text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8] },
        {
            style: 'tableExample',
            table: {
                headerRows: 1,
                body: [
                    [{ text: 'Header 1', style: 'tableHeader' }, { text: 'Header 2', style: 'tableHeader' }, { text: 'Header 3', style: 'tableHeader' }],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                ]
            },
            layout: 'noBorders'
        },
        { text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8] },
        {
            style: 'tableExample',
            table: {
                headerRows: 1,
                body: [
                    [{ text: 'Header 1', style: 'tableHeader' }, { text: 'Header 2', style: 'tableHeader' }, { text: 'Header 3', style: 'tableHeader' }],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                ]
            },
            layout: 'headerLineOnly'
        },
        { text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8] },
        {
            style: 'tableExample',
            table: {
                headerRows: 1,
                body: [
                    [{ text: 'Header 1', style: 'tableHeader' }, { text: 'Header 2', style: 'tableHeader' }, { text: 'Header 3', style: 'tableHeader' }],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                ]
            },
            layout: 'lightHorizontalLines'
        },
        { text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8] },
        {
            style: 'tableExample',
            table: {
                headerRows: 1,
                body: [
                    [{ text: 'Header 1', style: 'tableHeader' }, { text: 'Header 2', style: 'tableHeader' }, { text: 'Header 3', style: 'tableHeader' }],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                ]
            },
            layout: {
                hLineWidth: (i, node) => (i === 0 || i === node.table.body.length) ? 2 : 1,
                vLineWidth: (i, node) => (i === 0 || i === node.table.widths!.length) ? 2 : 1,
                hLineColor: (i, node) => (i === 0 || i === node.table.body.length) ? 'black' : 'gray',
                vLineColor: (i, node) => (i === 0 || i === node.table.widths!.length) ? 'black' : 'gray',
                hLineStyle: (i, node) => ({ dash: { length: 10, space: 4 } }),
                vLineStyle: (i, node) => ({ dash: { length: 10, space: 4 } }),
                paddingLeft: (i, node) => 4,
                paddingRight: (i, node) => 4,
                paddingTop: (i, node) => 2,
                paddingBottom: (i, node) => 2,
                fillColor: (rowIndex, node, columnIndex) => null
            }
        },
        { text: 'zebra style', margin: [0, 20, 0, 8] },
        {
            style: 'tableExample',
            table: {
                body: [
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                ]
            },
            layout: {
                fillColor: (rowIndex, node, columnIndex) => (rowIndex % 2 === 0) ? '#CCCCCC' : null
            }
        },
        { text: 'and can be used dash border', margin: [0, 20, 0, 8] },
        {
            style: 'tableExample',
            table: {
                headerRows: 1,
                body: [
                    [{ text: 'Header 1', style: 'tableHeader' }, { text: 'Header 2', style: 'tableHeader' }, { text: 'Header 3', style: 'tableHeader' }],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                ]
            },
            layout: {
                hLineWidth: (i, node) => (i === 0 || i === node.table.body.length) ? 2 : 1,
                vLineWidth: (i, node) => (i === 0 || i === node.table.widths!.length) ? 2 : 1,
                hLineColor: (i, node) => 'black',
                vLineColor: (i, node) => 'black',
                hLineStyle: (i, node) => {
                    if (i === 0 || i === node.table.body.length) {
                        return null;
                    }
                    return { dash: { length: 10, space: 4 } };
                },
                vLineStyle: (i, node) => {
                    if (i === 0 || i === node.table.widths!.length) {
                        return null;
                    }
                    return { dash: { length: 4 } };
                },
                paddingLeft: (i, node) => 4,
                paddingRight: (i, node) => 4,
                paddingTop: (i, node) => 2,
                paddingBottom: (i, node) => 2,
                fillColor: (i, node) => null
            }
        },
        { text: 'Optional border', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8] },
        'Each cell contains an optional border property: an array of 4 booleans for left border, top border, right border, bottom border.',
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        {
                            border: [false, true, false, false],
                            fillColor: '#eeeeee',
                            text: 'border:\n[false, true, false, false]'
                        },
                        {
                            border: [false, false, false, false],
                            fillColor: '#dddddd',
                            text: 'border:\n[false, false, false, false]'
                        },
                        {
                            border: [true, true, true, true],
                            fillColor: '#eeeeee',
                            text: 'border:\n[true, true, true, true]'
                        }
                    ],
                    [
                        {
                            rowSpan: 3,
                            border: [true, true, true, true],
                            fillColor: '#eeeeff',
                            text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]'
                        },
                        {
                            border: undefined,
                            fillColor: '#eeeeee',
                            text: 'border:\nundefined'
                        },
                        {
                            border: [true, false, false, false],
                            fillColor: '#dddddd',
                            text: 'border:\n[true, false, false, false]'
                        }
                    ],
                    [
                        '',
                        {
                            colSpan: 2,
                            border: [true, true, true, true],
                            fillColor: '#eeffee',
                            text: 'colSpan: 2\n\nborder:\n[true, true, true, true]'
                        },
                        ''
                    ],
                    [
                        '',
                        {
                            border: undefined,
                            fillColor: '#eeeeee',
                            text: 'border:\nundefined'
                        },
                        {
                            border: [false, false, true, true],
                            fillColor: '#dddddd',
                            text: 'border:\n[false, false, true, true]'
                        }
                    ]
                ]
            },
            layout: {
                defaultBorder: false,
            }
        },
        'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, ' +
        'which is false in the table above and true (by default) in the table below.',
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        {
                            border: [false, false, false, false],
                            fillColor: '#eeeeee',
                            text: 'border:\n[false, false, false, false]'
                        },
                        {
                            fillColor: '#dddddd',
                            text: 'border:\nundefined'
                        },
                        {
                            fillColor: '#eeeeee',
                            text: 'border:\nundefined'
                        },
                    ],
                    [
                        {
                            fillColor: '#dddddd',
                            text: 'border:\nundefined'
                        },
                        {
                            fillColor: '#eeeeee',
                            text: 'border:\nundefined'
                        },
                        {
                            border: [true, true, false, false],
                            fillColor: '#dddddd',
                            text: 'border:\n[true, true, false, false]'
                        },
                    ]
                ]
            }
        },
        'And some other examples with rowSpan/colSpan...',
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        '',
                        'column 1',
                        'column 2',
                        'column 3'
                    ],
                    [
                        'row 1',
                        {
                            rowSpan: 3,
                            colSpan: 3,
                            border: [true, true, true, true],
                            fillColor: '#cccccc',
                            text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]'
                        },
                        '',
                        ''
                    ],
                    [
                        'row 2',
                        '',
                        '',
                        ''
                    ],
                    [
                        'row 3',
                        '',
                        '',
                        ''
                    ]
                ]
            },
            layout: {
                defaultBorder: false,
            }
        },
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        {
                            colSpan: 3,
                            text: 'colSpan: 3\n\nborder:\n[false, false, false, false]',
                            fillColor: '#eeeeee',
                            border: [false, false, false, false]
                        },
                        '',
                        ''
                    ],
                    [
                        'border:\nundefined',
                        'border:\nundefined',
                        'border:\nundefined'
                    ]
                ]
            }
        },
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        { rowSpan: 3, text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]', fillColor: '#eeeeee', border: [false, false, false, false] },
                        'border:\nundefined',
                        'border:\nundefined'
                    ],
                    [
                        '',
                        'border:\nundefined',
                        'border:\nundefined'
                    ],
                    [
                        '',
                        'border:\nundefined',
                        'border:\nundefined'
                    ]
                ]
            }
        },
        { text: 'BorderColor per Cell with Column/row spans', pageBreak: 'before', style: 'subheader' },
        'Each cell-element can set the borderColor (the cell above or left of the current cell has priority',
        {
            style: 'tableExample',
            color: '#444',
            table: {
                widths: [200, 'auto', 'auto'],
                headerRows: 2,
                keepWithHeaderRows: 1,
                body: [
                    [
                        {
                            text: 'Header with Colspan = 3',
                            style: 'tableHeader',
                            colSpan: 3,
                            borderColor: ['#ff00ff', '#00ffff', '#ff00ff', '#00ffff'],
                            alignment: 'center',
                        },
                        {},
                        {},
                    ],
                    [
                        {
                            text: 'Header 1',
                            style: 'tableHeader',
                            alignment: 'center',
                        },
                        {
                            text: 'Header 2',
                            style: 'tableHeader',
                            alignment: 'center',
                        },
                        {
                            text: 'Header 3',
                            style: 'tableHeader',
                            alignment: 'center',
                        },
                    ],
                    [
                        'Sample value 1',
                        'Sample value 2',
                        'Sample value 3',
                    ],
                    [
                        {
                            rowSpan: 3,
                            borderColor: ['#ff00ff', '#00ffff', '#ff00ff', '#00ffff'],
                            text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
                        },
                        'Sample value 2',
                        {
                            text: 'Sample value 3',
                            borderColor: ['#ff00ff', '#00ffff', '#ff00ff', '#00ffff'],
                        },
                    ],
                    [
                        '',
                        'Sample value 2',
                        'Sample value 3',
                    ],
                    [
                        'Sample value 1',
                        'Sample value 2',
                        'Sample value 3',
                    ],
                    [
                        'Sample value 1',
                        {
                            colSpan: 2,
                            rowSpan: 2,
                            borderColor: ['#ff00ff', '#00ffff', '#ff00ff', '#00ffff'],
                            text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time',
                        },
                        '',
                    ],
                    [
                        'Sample value 1',
                        {
                            text: 'a', borderColor: ['#ff00ff', '#00ffff', '#ff00ff', '#00ffff'],
                        },
                        {
                            text: '',
                            borderColor: ['#ff00ff', '#00ffff', '#ff00ff', '#00ffff'],
                        },
                    ],
                ],
            },
        },
    ],
    styles: {
        header: {
            fontSize: 18,
            bold: true,
            margin: [0, 0, 0, 10]
        },
        subheader: {
            fontSize: 16,
            bold: true,
            margin: [0, 10, 0, 5]
        },
        tableExample: {
            margin: [0, 5, 0, 15]
        },
        tableHeader: {
            bold: true,
            fontSize: 13,
            color: 'black'
        }
    },
    defaultStyle: {
        // alignment: 'justify'
    }
});

const textDecorationsPdfDoc = printer.createPdfKitDocument({
    content: [
        { text: 'Higlighted text', fontSize: 18, background: 'yellow' },
        ' ',
        {
            columns: [
                { text: 'Underline decoration', decoration: 'underline' },
                { text: 'Line Through decoration', decoration: 'lineThrough' },
                { text: 'Overline decoration', decoration: 'overline' }
            ]
        },
        ' ',
        {
            columns: [
                { text: 'Dashed style', decoration: 'underline', decorationStyle: 'dashed' },
                { text: 'Dotted style', decoration: 'underline', decorationStyle: 'dotted' },
                { text: 'Double style', decoration: 'underline', decorationStyle: 'double' },
                { text: 'Wavy style', decoration: 'underline', decorationStyle: 'wavy' }
            ]
        },
        ' ',
        {
            columns: [
                { text: 'Using colors', decoration: 'underline', decorationColor: 'blue' },
                { text: 'Using colors', decoration: 'lineThrough', decorationColor: 'red' },
                { text: 'Using colors', decoration: 'underline', decorationStyle: 'wavy', decorationColor: 'green' }
            ]
        }
    ]
});

const tocPdfDoc = printer.createPdfKitDocument({
    content: [
        {
            text: 'This is a TOC example. Text elements marked with tocItem: true will be located in the toc. See below.',
            pageBreak: 'after'
        },
        {
            toc: {
                title: { text: 'INDEX', style: 'header' },
                // textMargin: [0, 0, 0, 0],
                // textStyle: {italics: true},
                numberStyle: { bold: true }
            }
        },
        {
            text: 'This is a header, using header style',
            style: 'header',
            tocItem: true,
            tocStyle: { italics: true },
            tocMargin: [0, 10, 0, 0],
            tocNumberStyle: { italics: true, decoration: 'underline' },
            pageBreak: 'before'
        },
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam.\n\n',
        {
            text: 'Subheader 1 - using subheader style',
            style: 'subheader',
            tocItem: true,
            pageBreak: 'before'
        },
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi.\n\n',
        {
            text: 'Subheader 2 - using subheader style',
            style: 'subheader',
            tocItem: true,
            pageBreak: 'before'
        },
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi.',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi.\n\n',
        {
            text: 'It is possible to apply multiple styles, by passing an array. This paragraph uses two styles: quote and small. ' +
                'When multiple styles are provided, they are evaluated in the specified order which is important in case they define the same properties',
            style: ['quote', 'small']
        },
        {
            text: [
                {
                    text: 'Subheader 3 - using inline text',
                    style: 'subheader',
                    tocItem: true
                },
                {
                    text: '; and this text not be displayed in ToC',
                    italics: true
                }
            ],
            pageBreak: 'before'
        },
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi.'
    ],
    styles: {
        header: {
            fontSize: 18,
            bold: true
        },
        subheader: {
            fontSize: 15,
            bold: true
        },
        quote: {
            italics: true
        },
        small: {
            fontSize: 8
        }
    }
});

const vectorsPdfDoc = printer.createPdfKitDocument({
    content: [
        {
            text: [
                'This ',
                { text: 'is', color: 'green' },
                ' the first ',
                { text: 'paragraph', color: 'red' }
            ]
        },
        {
            canvas: [
                {
                    type: 'rect',
                    x: 0,
                    y: 0,
                    w: 310,
                    h: 260,
                    r: 5,
                    dash: { length: 5 },
                    // lineWidth: 10,
                    lineColor: 'blue',
                },
                {
                    type: 'rect',
                    x: 1,
                    y: 1,
                    w: 308,
                    h: 258,
                    r: 4,
                    lineColor: 'red',
                    color: '#ffffe0',
                },
                {
                    type: 'polyline',
                    lineWidth: 3,
                    closePath: true,
                    points: [{ x: 10, y: 10 }, { x: 35, y: 40 }, { x: 100, y: 40 }, { x: 125, y: 10 }]
                },
                {
                    type: 'polyline',
                    lineWidth: 2,
                    color: 'blue',
                    lineColor: 'red',
                    points: [{ x: 10, y: 110 }, { x: 35, y: 140 }, { x: 100, y: 140 }, { x: 125, y: 110 }, { x: 10, y: 110 }]
                },
                {
                    type: 'line',
                    x1: 40, y1: 60,
                    x2: 260, y2: 60,
                    lineWidth: 3
                },
                {
                    type: 'line',
                    x1: 40, y1: 80,
                    x2: 260, y2: 80,
                    lineWidth: 10,
                    lineCap: 'round'
                },
                {
                    type: 'line',
                    x1: 40, y1: 100,
                    x2: 260, y2: 100,
                    lineWidth: 10,
                    lineCap: 'square'
                },
                {
                    type: 'ellipse',
                    x: 150, y: 140,
                    color: 'red',
                    fillOpacity: 0.5,
                    r1: 80, r2: 60
                },
                {
                    type: 'rect',
                    x: 150,
                    y: 200,
                    w: 150,
                    h: 50,
                },
                {
                    type: 'rect',
                    x: 10, y: 200, w: 100, h: 10,
                    linearGradient: ['red', 'blue']
                },
                {
                    type: 'rect',
                    x: 10, y: 215, w: 100, h: 10,
                    linearGradient: ['red', 'green', 'blue']
                },
                {
                    type: 'rect',
                    x: 10, y: 230, w: 100, h: 10,
                    linearGradient: ['red', 'yellow', 'green', 'blue']
                },
                {
                    type: 'ellipse',
                    x: 260, y: 140,
                    r1: 30, r2: 20,
                    linearGradient: ['red', 'green', 'blue', 'red'],
                },
            ]
        },
        'This text should be rendered under canvas',
        {
            color: 'black',

            text: [
                'This should be black ',
            ]
        }
    ],
    defaultStyle: {
        color: 'gray',
    }
});

const watermarkPdfDoc = printer.createPdfKitDocument({
    // watermark: 'test watermark',
    watermark: { text: 'test watermark', color: 'blue', opacity: 0.3, bold: true, italics: false },
    content: [
        'Test page of watermark.\n\n',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    ]
});
