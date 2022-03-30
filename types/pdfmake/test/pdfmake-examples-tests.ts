import { TDocumentDefinitions } from 'pdfmake/interfaces';

const absolute: TDocumentDefinitions = {
    content: [
        {
            image: 'bee',
            width: 50,
            height: 50,
            absolutePosition: { x: 100, y: 100 },
        },
        {
            image: 'bee',
            width: 50,
            height: 50,
            absolutePosition: { x: 150, y: 150 },
        },
        {
            image: 'bee',
            width: 50,
            height: 50,
            absolutePosition: { x: 200, y: 200 },
        },
        {
            image: 'bee',
            width: 50,
            height: 50,
            absolutePosition: { x: 250, y: 150 },
        },
        {
            image: 'bee',
            width: 50,
            height: 50,
            absolutePosition: { x: 300, y: 100 },
        },

        {
            text: 'You can put images at any position',
            pageBreak: 'after',
        },

        {
            text: 'As',
            absolutePosition: { x: 100, y: 100 },
        },
        {
            text: 'well',
            absolutePosition: { x: 150, y: 150 },
        },
        {
            text: 'as',
            absolutePosition: { x: 200, y: 200 },
        },
        {
            text: 'text',
            absolutePosition: { x: 250, y: 150 },
        },
        {
            text: '!!!',
            absolutePosition: { x: 300, y: 100 },
            pageBreak: 'after',
        },

        {
            text: 'And this is a table on top of an image at x:100 y:100',
        },
        {
            image: 'bee',
            width: 100,
            height: 100,
            absolutePosition: { x: 100, y: 100 },
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
                                "Let's try an unordered list",
                                {
                                    ul: ['item 1', 'item 2'],
                                },
                            ],
                        },
                        [
                            'or a nested table',
                            {
                                table: {
                                    body: [
                                        ['Col1', 'Col2', 'Col3'],
                                        ['1', '2', '3'],
                                        ['1', '2', '3'],
                                    ],
                                },
                            },
                        ],
                        {
                            text: [
                                'Inlines can be ',
                                { text: 'styled\n', italics: true },
                                {
                                    text: 'easily as everywhere else',
                                    fontSize: 10,
                                },
                            ],
                        },
                    ],
                ],
            },
        },
    ],
    images: {
        bee: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX/TQBcNTh/AAAACklEQVR4nGNiAAAABgADNjd8qAAAAABJRU5ErkJggg==',
    },
    styles: {
        header: {
            fontSize: 18,
            bold: true,
            margin: [0, 0, 0, 10],
        },
        subheader: {
            fontSize: 16,
            bold: true,
            margin: [0, 10, 0, 5],
        },
        tableExample: {
            margin: [0, 5, 0, 15],
        },
        tableHeader: {
            bold: true,
            fontSize: 13,
            color: 'black',
        },
    },
};

const background: TDocumentDefinitions = {
    background(page) {
        if (page !== 2) {
            return [
                'Background paragraph on page ' + page,
                'Another background paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines',
                {
                    image: 'bee',
                    width: 200,
                },
            ];
        }
    },
    content: [
        'First paragraph',
        'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines',
        '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n',
        'Another Page',
        '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n',
        'Another Page',
    ],

    images: {
        bee: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX/TQBcNTh/AAAACklEQVR4nGNiAAAABgADNjd8qAAAAABJRU5ErkJggg==',
    },
};

const basics: TDocumentDefinitions = {
    content: [
        'First paragraph',
        'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines',
    ],
};

const columnsSimple: TDocumentDefinitions = {
    content: [
        'By default paragraphs are stacked one on top of (or actually - below) another. ',
        "It's possible however to split any paragraph (or even the whole document) into columns.\n\n",
        'Here we go with 2 star-sized columns, with justified text and gap set to 20:\n\n',
        {
            alignment: 'justify',
            columns: [
                {
                    // tslint:disable-next-line: max-line-length
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.',
                },
                {
                    // tslint:disable-next-line: max-line-length
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.',
                },
            ],
        },
        "\nStar-sized columns have always equal widths, so if we define 3 of those, it'll look like this (make sure to scroll to the next page, as we have a couple of more examples):\n\n",
        {
            columns: [
                {
                    // tslint:disable-next-line: max-line-length
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.',
                },
                {
                    // tslint:disable-next-line: max-line-length
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.',
                },
                {
                    // tslint:disable-next-line: max-line-length
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.',
                },
            ],
        },
        // tslint:disable-next-line: max-line-length
        "\nYou can also specify accurate widths for some (or all columns). Let's make the first column and the last one narrow and let the layout engine divide remaining space equally between other star-columns:\n\n",
        {
            columns: [
                {
                    width: 90,
                    // tslint:disable-next-line: max-line-length
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.',
                },
                {
                    width: '*',
                    // tslint:disable-next-line: max-line-length
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.',
                },
                {
                    width: '*',
                    // tslint:disable-next-line: max-line-length
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.',
                },
                {
                    width: 90,
                    // tslint:disable-next-line: max-line-length
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.',
                },
            ],
        },
        '\nWe also support auto columns. They set their widths based on the content:\n\n',
        {
            columns: [
                {
                    width: 'auto',
                    text: 'auto column',
                },
                {
                    width: '*',
                    text: 'This is a star-sized column. It should get the remaining space divided by the number of all star-sized columns.',
                },
                {
                    width: 50,
                    text: 'this one has specific width set to 50',
                },
                {
                    width: 'auto',
                    text: 'another auto column',
                },
                {
                    width: '*',
                    text: 'This is a star-sized column. It should get the remaining space divided by the number of all star-sized columns.',
                },
            ],
        },
        '\nIf all auto columns fit within available width, the table does not occupy whole space:\n\n',
        {
            columns: [
                {
                    width: 'auto',
                    text: 'val1',
                },
                {
                    width: 'auto',
                    text: 'val2',
                },
                {
                    width: 'auto',
                    text: 'value3',
                },
                {
                    width: 'auto',
                    text: 'value 4',
                },
            ],
        },
        // tslint:disable-next-line: max-line-length
        '\nAnother cool feature of pdfmake is the ability to have nested elements. Each column is actually quite similar to the whole document, so we can have inner paragraphs and further divisions, like in the following example:\n\n',
        {
            columns: [
                {
                    width: 100,
                    fontSize: 9,
                    // tslint:disable-next-line: max-line-length
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Conveniunt quieti extremum severitatem disseretur virtute locum virtus declarant. Greges telos detrimenti persius possint eripuit appellat democrito suscipere existimant. Facere usus levitatibus confirmavit, provincia rutilius libris accommodare valetudinis ignota fugienda arbitramur falsarum commodius. Voluptas summis arbitrarer cognitio temperantiamque, fuit posidonium pro assueverit animos inferiorem, affecti honestum ferreum cum tot nemo ius partes dissensio opinor, tuum intellegunt numeris ignorant, odia diligenter licet, sublatum repellere, maior ficta severa quantum mortem. Aut evertitur impediri vivamus.',
                },
                [
                    // tslint:disable-next-line: max-line-length
                    "As you can see in the document definition - this column is not defined with an object, but an array, which means it's treated as an array of paragraphs rendered one below another.",
                    "Just like on the top-level of the document. Let's try to divide the remaing space into 3 star-sized columns:\n\n",
                    {
                        columns: [
                            {
                                // tslint:disable-next-line: max-line-length
                                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.',
                            },
                            {
                                // tslint:disable-next-line: max-line-length
                                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.',
                            },
                            {
                                // tslint:disable-next-line: max-line-length
                                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.',
                            },
                        ],
                    },
                ],
            ],
        },
        "\n\nOh, don't forget, we can use everything from styling examples (named styles, custom overrides) here as well.\n\n",
        "For instance - our next paragraph will use the 'bigger' style (with fontSize set to 15 and italics - true). We'll split it into three columns and make sure they inherit the style:\n\n",
        {
            style: 'bigger',
            columns: [
                "First column (BTW - it's defined as a single string value. pdfmake will turn it into appropriate structure automatically and make sure it inherits the styles",
                {
                    fontSize: 20,
                    text: "In this column, we've overriden fontSize to 20. It means the content should have italics=true (inherited from the style) and be a little bit bigger",
                },
                {
                    style: 'header',
                    // tslint:disable-next-line: max-line-length
                    text: "Last column does not override any styling properties, but applies a new style (header) to itself. Eventually - texts here have italics=true (from bigger) and derive fontSize from the style. OK, but which one? Both styles define it. As we already know from our styling examples, multiple styles can be applied to the element and their order is important. Because 'header' style has been set after 'bigger' its fontSize takes precedence over the fontSize from 'bigger'. This is how it works. You will find more examples in the unit tests.",
                },
            ],
        },
        "\n\nWow, you've read the whole document! Congratulations :D",
    ],
    styles: {
        header: {
            fontSize: 18,
            bold: true,
        },
        bigger: {
            fontSize: 15,
            italics: true,
        },
    },
    defaultStyle: {
        columnGap: 20,
    },
};

const images: TDocumentDefinitions = {
    content: [
        "pdfmake (since it's based on pdfkit) supports JPEG and PNG format",
        'If no width/height/fit is provided, image original size will be used',
        {
            image: 'fonts/sampleImage.jpg',
        },
        'If you specify width, image will scale proportionally',
        {
            image: 'fonts/sampleImage.jpg',
            width: 150,
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
            pageBreak: 'after',
        },
        'You can also cover the image inside a rectangle',
        {
            image: 'fonts/sampleImage.jpg',
            cover: { width: 100, height: 100, valign: "bottom", align: "right" },
            pageBreak: 'after'
        },
        'Images can be also provided in dataURL format\n(the one below was taken from http://www.clipartbest.com/clipart-dT7zx5rT9)',
        {
            image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX/TQBcNTh/AAAACklEQVR4nGNiAAAABgADNjd8qAAAAABJRU5ErkJggg==',
            width: 200,
        },
        'or be defined in the "images" dictionary, which can be referenced by name:',
        {
            image: 'bee',
            width: 200,
        },
        'and opacity is supported:',
        {
            image: 'fonts/sampleImage.jpg',
            width: 150,
            opacity: 0.5,
        },
    ],
    images: {
        bee: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX/TQBcNTh/AAAACklEQVR4nGNiAAAABgADNjd8qAAAAABJRU5ErkJggg==',
    },
};

const links: TDocumentDefinitions = {
    content: [
        {
            text: [
                'Link to ',
                {
                    text: 'pdfmake website',
                    link: 'http://pdfmake.org',
                    decoration: 'underline',
                },
                ' and ',
                {
                    text: 'documentation',
                    link: 'https://pdfmake.github.io/docs/',
                    decoration: 'underline',
                },
                '.',
            ],
        },
        { text: 'Go to page 2', linkToPage: 2, decoration: 'underline' },
        {
            text: 'Link to header 2',
            linkToDestination: 'header2',
            decoration: 'underline',
        },
        'Links are also supported with images:',
        {
            image: 'fonts/sampleImage.jpg',
            width: 150,
            link: 'http://pdfmake.org',
        },
        {
            text: 'Header on page 2',
            fontSize: 18,
            bold: true,
            pageBreak: 'before',
        },
        {
            // tslint:disable-next-line: max-line-length
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas sollicitudin. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Suspendisse nisl. Mauris elementum mauris vitae tortor. Phasellus et lorem id felis nonummy placerat. Aliquam erat volutpat. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Etiam bibendum elit eget erat. Nullam rhoncus aliquam metus. Proin mattis lacinia justo. Nullam sit amet magna in magna gravida vehicula. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Integer lacinia. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor.',
        },
        '\n\n',
        { text: 'Header 2', id: 'header2', fontSize: 18, bold: true },
        { text: 'Go to page 1', linkToPage: 1, decoration: 'underline' },
    ],
};

const lists: TDocumentDefinitions = {
    content: [
        { text: 'Unordered list', style: 'header' },
        {
            ul: ['item 1', 'item 2', 'item 3'],
        },
        { text: '\n\nUnordered list with longer lines', style: 'header' },
        {
            ul: [
                'item 1',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                'item 3',
            ],
        },
        { text: '\n\nOrdered list', style: 'header' },
        {
            ol: ['item 1', 'item 2', 'item 3'],
        },
        { text: '\n\nOrdered list with longer lines', style: 'header' },
        {
            ol: [
                'item 1',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                'item 3',
            ],
        },
        { text: '\n\nOrdered list should be descending', style: 'header' },
        {
            reversed: true,
            ol: ['item 1', 'item 2', 'item 3'],
        },
        { text: '\n\nOrdered list with start value', style: 'header' },
        {
            start: 50,
            ol: ['item 1', 'item 2', 'item 3'],
        },
        { text: '\n\nOrdered list with own values', style: 'header' },
        {
            ol: [
                { text: 'item 1', counter: 10 },
                { text: 'item 2', counter: 20 },
                { text: 'item 3', counter: 30 },
                { text: 'item 4 without own value' },
            ],
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
                                ],
                            },

                            'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                            'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                            'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                            'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                            'subitem 4',
                            'subitem 5',
                        ],
                    },
                ],
                'item 3\nsecond line of item3',
            ],
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
                            ],
                        },

                        'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                        'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                        'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                        'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                        'subitem 4',
                        'subitem 5',
                    ],
                },
                'item 3\nsecond line of item3',
            ],
        },
        { text: '\n\nUnordered lists inside columns', style: 'header' },
        {
            columns: [
                {
                    ul: [
                        'item 1',
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                    ],
                },
                {
                    ul: [
                        'item 1',
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                    ],
                },
            ],
        },
        { text: '\n\nOrdered lists inside columns', style: 'header' },
        {
            columns: [
                {
                    ol: [
                        'item 1',
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                    ],
                },
                {
                    ol: [
                        'item 1',
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                    ],
                },
            ],
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
                                                        ],
                                                    },
                                                    'item 4',
                                                ],
                                            },
                                        ],
                                    },
                                    'column 3',
                                    'column 4',
                                ],
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
                            ],
                        },

                        'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                        'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                        'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                        'subitem 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit',
                        'subitem 4',
                        'subitem 5',
                    ],
                },
                'item 3\nsecond line of item3',
            ],
        },
        { text: '\n\nUnordered list with square marker type', style: 'header' },
        {
            type: 'square',
            ul: ['item 1', 'item 2', 'item 3'],
        },
        { text: '\n\nUnordered list with circle marker type', style: 'header' },
        {
            type: 'circle',
            ul: ['item 1', 'item 2', 'item 3'],
        },
        { text: '\n\nColored unordered list', style: 'header' },
        {
            color: 'blue',
            ul: ['item 1', 'item 2', 'item 3'],
        },
        {
            text: '\n\nColored unordered list with own marker color',
            style: 'header',
        },
        {
            color: 'blue',
            markerColor: 'red',
            ul: ['item 1', 'item 2', 'item 3'],
        },
        { text: '\n\nColored ordered list', style: 'header' },
        {
            color: 'blue',
            ol: ['item 1', 'item 2', 'item 3'],
        },
        {
            text: '\n\nColored ordered list with own marker color',
            style: 'header',
        },
        {
            color: 'blue',
            markerColor: 'red',
            ol: ['item 1', 'item 2', 'item 3'],
        },
        { text: '\n\nOrdered list - type: lower-alpha', style: 'header' },
        {
            type: 'lower-alpha',
            ol: ['item 1', 'item 2', 'item 3'],
        },
        { text: '\n\nOrdered list - type: upper-alpha', style: 'header' },
        {
            type: 'upper-alpha',
            ol: ['item 1', 'item 2', 'item 3'],
        },

        { text: '\n\nOrdered list - type: upper-roman', style: 'header' },
        {
            type: 'upper-roman',
            ol: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'],
        },
        { text: '\n\nOrdered list - type: lower-roman', style: 'header' },
        {
            type: 'lower-roman',
            ol: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'],
        },
        { text: '\n\nOrdered list - type: none', style: 'header' },
        {
            type: 'none',
            ol: ['item 1', 'item 2', 'item 3'],
        },
        { text: '\n\nUnordered list - type: none', style: 'header' },
        {
            type: 'none',
            ul: ['item 1', 'item 2', 'item 3'],
        },
        { text: '\n\nOrdered list with own separator', style: 'header' },
        {
            separator: ')',
            ol: ['item 1', 'item 2', 'item 3'],
        },
        {
            text: '\n\nOrdered list with own complex separator',
            style: 'header',
        },
        {
            separator: ['(', ')'],
            ol: ['item 1', 'item 2', 'item 3'],
        },
        { text: '\n\nOrdered list with own items type', style: 'header' },
        {
            ol: [
                'item 1',
                { text: 'item 2', listType: 'none' },
                { text: 'item 3', listType: 'upper-roman' },
            ],
        },
        { text: '\n\nUnordered list with own items type', style: 'header' },
        {
            ul: [
                'item 1',
                { text: 'item 2', listType: 'none' },
                { text: 'item 3', listType: 'circle' },
            ],
        },
    ],
    styles: {
        header: {
            bold: true,
            fontSize: 15,
        },
    },
    defaultStyle: {
        fontSize: 12,
    },
};

const margins: TDocumentDefinitions = {
    content: [
        {
            stack: [
                'This header has both top and bottom margins defined',
                { text: 'This is a subheader', style: 'subheader' },
            ],
            style: 'header',
        },
        {
            text: [
                "Margins have slightly different behavior than other layout properties. They are not inherited, unlike anything else. They're applied only to those nodes which explicitly ",
                'set margin or style property.\n',
            ],
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
                    ],
                },
                {
                    text: [
                        'When you look at the',
                        { text: ' document definition', italics: true },
                        ', you will notice that fontSize is inherited by all paragraphs inside the stack.',
                    ],
                },
                'Margin however is only applied once (to the whole stack).',
            ],
            style: 'superMargin',
        },
        {
            stack: [
                // tslint:disable-next-line: max-line-length
                "I'm not sure yet if this is the desired behavior. I find it a better approach however. One thing to be considered in the future is an explicit layout property called inheritMargin which could opt-in the inheritance.\n\n",
                {
                    fontSize: 15,
                    text: [
                        'Currently margins for ',
                        /* the following margin definition doesn't change anything */
                        { text: 'inlines', margin: 20 },
                        ' are ignored\n\n',
                    ],
                },
                // tslint:disable-next-line: max-line-length
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.\n',
                // tslint:disable-next-line: max-line-length
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.\n',
                // tslint:disable-next-line: max-line-length
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.\n',
                // tslint:disable-next-line: max-line-length
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.\n',
                // tslint:disable-next-line: max-line-length
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.\n',
                // tslint:disable-next-line: max-line-length
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.\n',
                // tslint:disable-next-line: max-line-length
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.\n',
            ],
            margin: [0, 20, 0, 0],
            alignment: 'justify',
        },
    ],
    styles: {
        header: {
            fontSize: 18,
            bold: true,
            alignment: 'right',
            margin: [0, 190, 0, 80],
        },
        subheader: {
            fontSize: 14,
        },
        superMargin: {
            margin: [20, 0, 40, 0],
            fontSize: 15,
        },
    },
};

const pageReference: TDocumentDefinitions = {
    content: [
        {
            text: 'This is a page reference example. Page number of text element marked id property will be located in pageReference element. See below.\n\n',
        },
        {
            table: {
                body: [
                    [
                        { text: 'page #', bold: true },
                        { text: 'title', bold: true },
                    ],
                    [
                        { pageReference: 'header1', alignment: 'right' },
                        'Header one',
                    ],
                    [
                        { pageReference: 'subheader1', alignment: 'right' },
                        'Subheader one',
                    ],
                    [
                        { pageReference: 'subheader2', alignment: 'right' },
                        'Subheader two',
                    ],
                    [
                        { pageReference: 'subheader3', alignment: 'right' },
                        'Subheader three',
                    ],
                ],
            },
        },
        {
            text: '\nAnd text can be referenced by textReference:\n',
        },
        {
            table: {
                body: [
                    [
                        { text: 'page #', bold: true },
                        { text: 'title', bold: true },
                    ],
                    [
                        { pageReference: 'header1', alignment: 'right' },
                        { textReference: 'header1' },
                    ],
                    [
                        { pageReference: 'subheader1', alignment: 'right' },
                        { textReference: 'subheader1' },
                    ],
                    [
                        { pageReference: 'subheader2', alignment: 'right' },
                        { textReference: 'subheader2' },
                    ],
                    [
                        { pageReference: 'subheader3', alignment: 'right' },
                        { textReference: 'subheader3' },
                    ],
                ],
            },
        },
        {
            text: '\nAnd all can be in inline texts:\n',
        },
        {
            text: [
                'Chapter "',
                { textReference: 'header1' },
                '" is on page number ',
                { pageReference: 'header1' },
            ],
        },
        {
            text: [
                'Chapter "',
                { textReference: 'subheader1' },
                '" is on page number ',
                { pageReference: 'subheader1' },
            ],
        },
        {
            text: [
                'Chapter "',
                { textReference: 'subheader2' },
                '" is on page number ',
                { pageReference: 'subheader2' },
            ],
        },
        {
            text: [
                'Chapter "',
                { textReference: 'subheader3' },
                '" is on page number ',
                { pageReference: 'subheader3' },
            ],
        },
        {
            text: 'This is a header, using header style',
            style: 'header',
            id: 'header1',
            pageBreak: 'before',
        },
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam.\n\n',
        {
            text: 'Subheader 1 - using subheader style',
            style: 'subheader',
            id: 'subheader1',
            pageBreak: 'before',
        },
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.\n\n',
        {
            text: 'Subheader 2 - using subheader style',
            style: 'subheader',
            id: 'subheader2',
            pageBreak: 'before',
        },
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.\n\n',
        {
            // tslint:disable-next-line: max-line-length
            text: 'It is possible to apply multiple styles, by passing an array. This paragraph uses two styles: quote and small. When multiple styles are provided, they are evaluated in the specified order which is important in case they define the same properties',
            style: ['quote', 'small'],
        },
        {
            text: [
                {
                    text: 'Subheader 3 - using inline text',
                    style: 'subheader',
                    id: 'subheader3',
                    tocItem: true,
                },
                {
                    text: '; and this text not be displayed in ToC',
                    italics: true,
                },
            ],
            pageBreak: 'before',
        },
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
    ],
    styles: {
        header: {
            fontSize: 18,
            bold: true,
        },
        subheader: {
            fontSize: 15,
            bold: true,
        },
        quote: {
            italics: true,
        },
        small: {
            fontSize: 8,
        },
    },
};

const qrCode: TDocumentDefinitions = {
    pageMargins: [10, 10, 10, 10],
    content: [
        { text: 'Can you see me', style: 'header' },
        { qr: 'Can you see me' },
        '\n',

        { text: 'Colored QR', style: 'header' },
        {
            qr: 'Can you see me',
            foreground: 'red',
            background: 'yellow',
        },
        '\n',

        { text: 'http://pdfmake.org', style: 'header' },
        { qr: 'http://pdfmake.org' },
        '\n',

        { text: 'A very long text', style: 'header' },
        {
            // tslint:disable-next-line: max-line-length
            qr: 'The amount of data that can be stored in the QR code symbol depends on the datatype (mode, or input character set), version (1, …, 40, indicating the overall dimensions of the symbol), and error correction level. The maximum storage capacities occur for 40-L symbols (version 40, error correction level L):',
        },
        '\n',
        {
            text: 'same long text with fit = 150 and alignment = right',
            style: 'header',
        },
        {
            // tslint:disable-next-line: max-line-length
            qr: 'The amount of data that can be stored in the QR code symbol depends on the datatype (mode, or input character set), version (1, …, 40, indicating the overall dimensions of the symbol), and error correction level. The maximum storage capacities occur for 40-L symbols (version 40, error correction level L):',
            fit: 100,
            alignment: 'right',
        },
    ],
    styles: {
        header: {
            margin: [0, 0, 0, 8],
        },
    },
};

const relative2: TDocumentDefinitions = {
    content: [
        {
            text: "We sometimes don't know the absolute position of text",
            margin: [10, 0, 0, 50],
        },
        {
            columns: [
                {
                    width: '50%',
                    text: 'horizontal position is not known either',
                },
                {
                    width: '50%',
                    stack: [
                        {
                            stack: [
                                {
                                    text: '2016',
                                    fontSize: 8,
                                    relativePosition: { x: 41, y: 127 },
                                },
                                {
                                    text: '2017',
                                    fontSize: 8,
                                    relativePosition: { x: 66, y: 127 },
                                },
                                {
                                    text: '2018',
                                    fontSize: 8,
                                    relativePosition: { x: 91, y: 127 },
                                },
                                {
                                    text: '2019',
                                    fontSize: 8,
                                    relativePosition: { x: 116, y: 127 },
                                },
                                {
                                    text: '2020',
                                    fontSize: 8,
                                    relativePosition: { x: 141, y: 127 },
                                },
                                {
                                    text: '5',
                                    fontSize: 8,
                                    relativePosition: { x: 37, y: 15 },
                                },
                                {
                                    text: '4',
                                    fontSize: 8,
                                    relativePosition: { x: 37, y: 40 },
                                },
                                {
                                    text: '3',
                                    fontSize: 8,
                                    relativePosition: { x: 37, y: 65 },
                                },
                                {
                                    text: '2',
                                    fontSize: 8,
                                    relativePosition: { x: 37, y: 90 },
                                },
                                {
                                    text: '1',
                                    fontSize: 8,
                                    relativePosition: { x: 37, y: 115 },
                                },
                            ],
                        },
                        {
                            canvas: [
                                {
                                    type: 'line',
                                    x1: 49,
                                    y1: 120,
                                    x2: 150,
                                    y2: 120,
                                },
                                {
                                    type: 'line',
                                    x1: 49.5,
                                    y1: 120,
                                    x2: 49.5,
                                    y2: 125,
                                },
                                {
                                    type: 'line',
                                    x1: 74.5,
                                    y1: 120,
                                    x2: 74.5,
                                    y2: 125,
                                },
                                {
                                    type: 'line',
                                    x1: 99.5,
                                    y1: 120,
                                    x2: 99.5,
                                    y2: 125,
                                },
                                {
                                    type: 'line',
                                    x1: 124.5,
                                    y1: 120,
                                    x2: 124.5,
                                    y2: 125,
                                },
                                {
                                    type: 'line',
                                    x1: 149.5,
                                    y1: 120,
                                    x2: 149.5,
                                    y2: 125,
                                },
                                {
                                    type: 'line',
                                    x1: 49.5,
                                    y1: 19.5,
                                    x2: 49.5,
                                    y2: 119.5,
                                },
                                {
                                    type: 'line',
                                    x1: 44,
                                    y1: 20,
                                    x2: 49,
                                    y2: 20,
                                },
                                {
                                    type: 'line',
                                    x1: 44,
                                    y1: 45,
                                    x2: 49,
                                    y2: 45,
                                },
                                {
                                    type: 'line',
                                    x1: 44,
                                    y1: 70,
                                    x2: 49,
                                    y2: 70,
                                },
                                {
                                    type: 'line',
                                    x1: 44,
                                    y1: 95,
                                    x2: 49,
                                    y2: 95,
                                },
                                {
                                    type: 'line',
                                    x1: 44,
                                    y1: 120,
                                    x2: 49,
                                    y2: 120,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            text: 'We can position relative with center and right alignment',
            margin: [0, 50, 0, 50],
        },
        {
            table: {
                widths: [100, 100, 100],
                body: [
                    [
                        'Column with a lot of text. Column with a lot of text. Column with a lot of text. Column with a lot of text.',
                        {
                            text: "I'm aligned center",
                            style: { alignment: 'center' },
                            relativePosition: { x: 0, y: 25 },
                        },
                        {
                            text: "I'm aligned right",
                            style: { alignment: 'right' },
                            relativePosition: { x: 0, y: 25 },
                        },
                    ],
                ],
            },
        },
    ],
};

const security: TDocumentDefinitions = {
    userPassword: '123',
    ownerPassword: '123456',
    permissions: {
        printing: 'highResolution',
        modifying: false,
        copying: false,
        annotating: true,
        fillingForms: true,
        contentAccessibility: true,
        documentAssembly: true,
    },
    content: [
        'Document content with security',
        'For details see to source or documentation.',
    ],
};

const stylingInlines: TDocumentDefinitions = {
    content: [
        {
            text: 'This is a header (whole paragraph uses the same header style)\n\n',
            style: 'header',
        },
        {
            text: [
                'It is however possible to provide an array of texts ',
                'to the paragraph (instead of a single string) and have ',
                { text: 'a better ', fontSize: 15, bold: true },
                'control over it. \nEach inline can be ',
                { text: 'styled ', fontSize: 20 },
                { text: 'independently ', italics: true, fontSize: 40 },
                'then.\n\n',
            ],
        },
        { text: 'Mixing named styles and style-overrides', style: 'header' },
        {
            style: 'bigger',
            italics: false,
            text: [
                'We can also mix named-styles and style-overrides at both paragraph and inline level. ',
                'For example, this paragraph uses the "bigger" style, which changes fontSize to 15 and sets italics to true. ',
                "Texts are not italics though. It's because we've overriden italics back to false at ",
                'the paragraph level. \n\n',
                "We can also change the style of a single inline. Let's use a named style called header: ",
                { text: 'like here.\n', style: 'header' },
                'It got bigger and bold.\n\n',
                "OK, now we're going to mix named styles and style-overrides at the inline level. ",
                "We'll use header style (it makes texts bigger and bold), but we'll override ",
                'bold back to false: ',
                { text: 'wow! it works!', style: 'header', bold: false },
                "\n\nMake sure to take a look into the sources to understand what's going on here.",
            ],
        },
    ],
    styles: {
        header: {
            fontSize: 18,
            bold: true,
        },
        bigger: {
            fontSize: 15,
            italics: true,
        },
    },
};

const stylingNamedStylesWithOverrides: TDocumentDefinitions = {
    content: [
        {
            text: 'This paragraph uses header style and extends the alignment property',
            style: 'header',
            alignment: 'center',
        },
        {
            text: [
                'This paragraph uses header style and overrides bold value setting it back to false.\n',
                'Header style in this example sets alignment to justify, so this paragraph should be rendered \n',
                // tslint:disable-next-line: max-line-length
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.',
            ],
            style: 'header',
            bold: false,
        },
    ],
    styles: {
        header: {
            fontSize: 18,
            bold: true,
            alignment: 'justify',
        },
    },
};

const stylingNamedStyles: TDocumentDefinitions = {
    content: [
        {
            text: 'This is a header, using header style',
            style: 'header',
        },
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam.\n\n',
        {
            text: 'Subheader 1 - using subheader style',
            style: 'subheader',
        },
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.\n\n',
        {
            text: 'Subheader 2 - using subheader style',
            style: 'subheader',
        },
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.\n\n',
        {
            // tslint:disable-next-line: max-line-length
            text: 'It is possible to apply multiple styles, by passing an array. This paragraph uses two styles: quote and small. When multiple styles are provided, they are evaluated in the specified order which is important in case they define the same properties',
            style: ['quote', 'small'],
        },
    ],
    styles: {
        header: {
            fontSize: 18,
            bold: true,
        },
        subheader: {
            fontSize: 15,
            bold: true,
        },
        quote: {
            italics: true,
        },
        small: {
            fontSize: 8,
        },
    },
};

const stylingProperties: TDocumentDefinitions = {
    content: [
        {
            text: 'Paragraphs can also by styled without using named-styles (this one sets fontSize to 25)',
            fontSize: 25,
        },
        'Another paragraph, using default style, this time a little bit longer to make sure, this line will be divided into at least two lines\n\n',
        {
            text: 'This paragraph does not use a named-style and sets fontSize to 8 and italics to true',
            fontSize: 8,
            italics: true,
        },
        '\n\nFor preserving leading spaces use preserveLeadingSpaces property:',
        {
            text: '    This is a paragraph with preserved leading spaces.',
            preserveLeadingSpaces: true,
        },
        { text: '{', preserveLeadingSpaces: true },
        { text: '    "sample": {', preserveLeadingSpaces: true },
        { text: '        "json": "nested"', preserveLeadingSpaces: true },
        { text: '    }', preserveLeadingSpaces: true },
        { text: '}', preserveLeadingSpaces: true },
        '\n\nFor preserving trailing spaces use preserveTrailingSpaces property:',
        {
            text: 'This is a paragraph with preserved trailing spaces.    ',
            preserveTrailingSpaces: true,
        },
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
        '\n\n Subscript, superscript:',
        {
            text: [
                'Hello World.',
                {
                    text: '1, 2',
                    sup: true,
                },
                ' Let\'s continue our sentence. Notice the leading space.'
            ]
        },
        {
            text: [
                'Hello',
                {
                    text: '1, 2',
                    sub: true,
                },
                ' World'
            ]
        }
    ],
};

const svgs: TDocumentDefinitions = {
    content: [
        'SVG nodes behave similar to images by supporting width/height or fit',
        'It is however not yet possible to use svg files or to have a library of svgs in the document definition',
        '\n',
        'Note that before you can use SVG nodes you must install svg-to-pdfkit as it is not included with pdfmake to keep bundle size down',
        {
            svg: '<svg height="100" width="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /></svg>',
            width: 600,
            height: 400,
        },
        'If you specify width, svg will scale proportionally',
        {
            svg: '<svg height="100" width="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /></svg>',
            width: 200,
        },
        'You can also fit the svg inside a rectangle',
        {
            svg: '<svg height="100" width="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /></svg>',
            fit: [100, 100],
        },
    ],
};

const stack: TDocumentDefinitions = {
    content: [
        {
            stack: [
                {
                    text: 'first paragraph',
                },
                {
                    text: 'beginning of another paragraph',
                    unbreakable: true,
                },
            ],
        },
    ],
};

const tables: TDocumentDefinitions = {
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
                    ['One value goes here', 'Another one here', 'OK?'],
                ],
            },
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
                                "Let's try an unordered list",
                                {
                                    ul: ['item 1', 'item 2'],
                                },
                            ],
                        },
                        [
                            'or a nested table',
                            {
                                table: {
                                    body: [
                                        ['Col1', 'Col2', 'Col3'],
                                        ['1', '2', '3'],
                                        ['1', '2', '3'],
                                    ],
                                },
                            },
                        ],
                        {
                            text: [
                                'Inlines can be ',
                                { text: 'styled\n', italics: true },
                                { text: 'easily as everywhere else', fontSize: 10 },
                            ],
                        },
                    ],
                ],
            },
        },
        { text: 'Defining column widths', style: 'subheader' },
        'Tables support the same width definitions as standard columns:',
        {
            bold: true,
            ul: ['auto', 'star', 'fixed value'],
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
                        { text: 'nothing interesting here', italics: true, color: 'gray' },
                    ],
                ],
            },
        },
        {
            style: 'tableExample',
            table: {
                widths: ['*', 'auto'],
                body: [
                    [
                        'This is a star-sized column. The next column over, an auto-sized column, will wrap to accomodate all the text in this cell.',
                        'I am auto sized.',
                    ],
                ],
            },
        },
        {
            style: 'tableExample',
            table: {
                widths: ['*', 'auto'],
                body: [
                    [
                        'This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style.',
                        { text: 'I am auto sized.', noWrap: true },
                    ],
                ],
            },
        },
        { text: 'Defining row heights', style: 'subheader' },
        {
            style: 'tableExample',
            table: {
                heights: [20, 50, 70],
                body: [
                    ['row 1 with height 20', 'column B'],
                    ['row 2 with height 50', 'column B'],
                    ['row 3 with height 70', 'column B'],
                ],
            },
        },
        'With same height:',
        {
            style: 'tableExample',
            table: {
                heights: 40,
                body: [
                    ['row 1', 'column B'],
                    ['row 2', 'column B'],
                    ['row 3', 'column B'],
                ],
            },
        },
        'With height from function:',
        {
            style: 'tableExample',
            table: {
                heights(row) {
                    return (row + 1) * 25;
                },
                body: [
                    ['row 1', 'column B'],
                    ['row 2', 'column B'],
                    ['row 3', 'column B'],
                ],
            },
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
                        { text: 'Header 3', style: 'tableHeader', alignment: 'center' },
                    ],
                    [
                        { text: 'Header 1', style: 'tableHeader', alignment: 'center' },
                        { text: 'Header 2', style: 'tableHeader', alignment: 'center' },
                        { text: 'Header 3', style: 'tableHeader', alignment: 'center' },
                    ],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    [
                        {
                            rowSpan: 3,
                            text: 'rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
                        },
                        'Sample value 2',
                        'Sample value 3',
                    ],
                    ['', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    [
                        'Sample value 1',
                        { colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time' },
                        '',
                    ],
                    ['Sample value 1', '', ''],
                ],
            },
        },
        { text: 'Headers', pageBreak: 'before', style: 'subheader' },
        'You can declare how many rows should be treated as a header. Headers are automatically repeated on the following pages',
        {
            text: [
                // tslint:disable-next-line: max-line-length
                "It is also possible to set keepWithHeaderRows to make sure there will be no page-break between the header and these rows. Take a look at the document-definition and play with it. If you set it to one, the following table will automatically start on the next page, since there's not enough space for the first row to be rendered here",
            ],
            color: 'gray',
            italics: true,
        },
        {
            style: 'tableExample',
            table: {
                headerRows: 1,
                dontBreakRows: true,
                keepWithHeaderRows: 1,
                body: [
                    [
                        { text: 'Header 1', style: 'tableHeader' },
                        { text: 'Header 2', style: 'tableHeader' },
                        { text: 'Header 3', style: 'tableHeader' },
                    ],
                    [
                        // tslint:disable-next-line: max-line-length
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        // tslint:disable-next-line: max-line-length
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        // tslint:disable-next-line: max-line-length
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    ],
                ],
            },
        },
        { text: 'Styling tables', style: 'subheader' },
        'You can provide a custom styler for the table. Currently it supports:',
        {
            ul: ['line widths', 'line colors', 'cell paddings'],
        },
        'with more options coming soon...\n\npdfmake currently has a few predefined styles (see them on the next page)',
        { text: 'noBorders:', fontSize: 14, bold: true, pageBreak: 'before', margin: [0, 0, 0, 8] },
        {
            style: 'tableExample',
            table: {
                headerRows: 1,
                body: [
                    [
                        { text: 'Header 1', style: 'tableHeader' },
                        { text: 'Header 2', style: 'tableHeader' },
                        { text: 'Header 3', style: 'tableHeader' },
                    ],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                ],
            },
            layout: 'noBorders',
        },
        { text: 'headerLineOnly:', fontSize: 14, bold: true, margin: [0, 20, 0, 8] },
        {
            style: 'tableExample',
            table: {
                headerRows: 1,
                body: [
                    [
                        { text: 'Header 1', style: 'tableHeader' },
                        { text: 'Header 2', style: 'tableHeader' },
                        { text: 'Header 3', style: 'tableHeader' },
                    ],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                ],
            },
            layout: 'headerLineOnly',
        },
        { text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8] },
        {
            style: 'tableExample',
            table: {
                headerRows: 1,
                body: [
                    [
                        { text: 'Header 1', style: 'tableHeader' },
                        { text: 'Header 2', style: 'tableHeader' },
                        { text: 'Header 3', style: 'tableHeader' },
                    ],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                ],
            },
            layout: 'lightHorizontalLines',
        },
        { text: 'but you can provide a custom styler as well', margin: [0, 20, 0, 8] },
        {
            style: 'tableExample',
            table: {
                headerRows: 1,
                body: [
                    [
                        { text: 'Header 1', style: 'tableHeader' },
                        { text: 'Header 2', style: 'tableHeader' },
                        { text: 'Header 3', style: 'tableHeader' },
                    ],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                ],
            },
            layout: {
                hLineWidth(i, node) {
                    return i === 0 || i === node.table.body.length ? 2 : 1;
                },
                vLineWidth(i, node) {
                    return i === 0 || i === node.table.widths!.length ? 2 : 1;
                },
                hLineColor(i, node) {
                    return i === 0 || i === node.table.body.length ? 'black' : 'gray';
                },
                vLineColor(i, node) {
                    return i === 0 || i === node.table.widths!.length ? 'black' : 'gray';
                },
                hLineStyle(i, node) {
                    return { dash: { length: 10, space: 4 } };
                },
                vLineStyle(i, node) {
                    return { dash: { length: 10, space: 4 } };
                },
                paddingLeft(i, node) {
                    return 4;
                },
                paddingRight(i, node) {
                    return 4;
                },
                paddingTop(i, node) {
                    return 2;
                },
                paddingBottom(i, node) {
                    return 2;
                },
                fillColor(rowIndex, node, columnIndex) {
                    return null;
                },
            },
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
                ],
            },
            layout: {
                fillColor(rowIndex, node, columnIndex) {
                    return rowIndex % 2 === 0 ? '#CCCCCC' : null;
                },
            },
        },
        { text: 'handling fill color opacity...', margin: [0, 20, 0, 8] },
        { text: '... just hardcoding values in the second row', margin: [0, 20, 0, 8] },
        {
            style: 'tableExample',
            table: {
                body: [
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    [
                        { text: 'Sample value 1', fillOpacity: 0.15, fillColor: 'blue' },
                        { text: 'Sample value 2', fillOpacity: 0.6, fillColor: 'blue' },
                        { text: 'Sample value 3', fillOpacity: 0.85, fillColor: 'blue' },
                    ],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                ],
            },
        },
        { text: '... using a custom styler and overriding it in the second row', margin: [0, 20, 0, 8] },
        {
            style: 'tableOpacityExample',
            table: {
                body: [
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    [
                        { text: 'Sample value 1', fillOpacity: 0.15 },
                        { text: 'Sample value 2', fillOpacity: 0.6 },
                        { text: 'Sample value 3', fillOpacity: 0.85 },
                    ],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                ],
            },
        },
        { text: '... with a function (opacity at 0 means fully transparent, i.e no color)', margin: [0, 20, 0, 8] },
        {
            style: 'tableExample',
            table: {
                body: [
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                ],
            },
            layout: {
                fillColor: 'blue',
                fillOpacity(rowIndex, node, columnIndex) {
                    return rowIndex / 8 + columnIndex / 3;
                },
            },
        },
        { text: 'and can be used dash border', margin: [0, 20, 0, 8] },
        {
            style: 'tableExample',
            table: {
                headerRows: 1,
                body: [
                    [
                        { text: 'Header 1', style: 'tableHeader' },
                        { text: 'Header 2', style: 'tableHeader' },
                        { text: 'Header 3', style: 'tableHeader' },
                    ],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
                ],
            },
            layout: {
                hLineWidth(i, node) {
                    return i === 0 || i === node.table.body.length ? 2 : 1;
                },
                vLineWidth(i, node) {
                    return i === 0 || i === node.table.widths!.length ? 2 : 1;
                },
                hLineColor(i, node) {
                    return 'black';
                },
                vLineColor(i, node) {
                    return 'black';
                },
                hLineStyle(i, node) {
                    if (i === 0 || i === node.table.body.length) {
                        return null;
                    }
                    return { dash: { length: 10, space: 4 } };
                },
                vLineStyle(i, node) {
                    if (i === 0 || i === node.table.widths!.length) {
                        return null;
                    }
                    return { dash: { length: 4 } };
                },
                paddingLeft(i, node) {
                    return 4;
                },
                paddingRight(i, node) {
                    return 4;
                },
                paddingTop(i, node) {
                    return 2;
                },
                paddingBottom(i, node) {
                    return 2;
                },
                fillColor(i, node) {
                    return null;
                },
            },
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
                            text: 'border:\n[false, true, false, false]',
                        },
                        {
                            border: [false, false, false, false],
                            fillColor: '#dddddd',
                            text: 'border:\n[false, false, false, false]',
                        },
                        {
                            border: [true, true, true, true],
                            fillColor: '#eeeeee',
                            text: 'border:\n[true, true, true, true]',
                        },
                    ],
                    [
                        {
                            rowSpan: 3,
                            border: [true, true, true, true],
                            fillColor: '#eeeeff',
                            text: 'rowSpan: 3\n\nborder:\n[true, true, true, true]',
                        },
                        {
                            border: undefined,
                            fillColor: '#eeeeee',
                            text: 'border:\nundefined',
                        },
                        {
                            border: [true, false, false, false],
                            fillColor: '#dddddd',
                            text: 'border:\n[true, false, false, false]',
                        },
                    ],
                    [
                        '',
                        {
                            colSpan: 2,
                            border: [true, true, true, true],
                            fillColor: '#eeffee',
                            text: 'colSpan: 2\n\nborder:\n[true, true, true, true]',
                        },
                        '',
                    ],
                    [
                        '',
                        {
                            border: undefined,
                            fillColor: '#eeeeee',
                            text: 'border:\nundefined',
                        },
                        {
                            border: [false, false, true, true],
                            fillColor: '#dddddd',
                            text: 'border:\n[false, false, true, true]',
                        },
                    ],
                ],
            },
            layout: {
                defaultBorder: false,
            },
        },
        // tslint:disable-next-line: max-line-length
        'For every cell without a border property, whether it has all borders or not is determined by layout.defaultBorder, which is false in the table above and true (by default) in the table below.',
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        {
                            border: [false, false, false, false],
                            fillColor: '#eeeeee',
                            text: 'border:\n[false, false, false, false]',
                        },
                        {
                            fillColor: '#dddddd',
                            text: 'border:\nundefined',
                        },
                        {
                            fillColor: '#eeeeee',
                            text: 'border:\nundefined',
                        },
                    ],
                    [
                        {
                            fillColor: '#dddddd',
                            text: 'border:\nundefined',
                        },
                        {
                            fillColor: '#eeeeee',
                            text: 'border:\nundefined',
                        },
                        {
                            border: [true, true, false, false],
                            fillColor: '#dddddd',
                            text: 'border:\n[true, true, false, false]',
                        },
                    ],
                ],
            },
        },
        'And some other examples with rowSpan/colSpan...',
        {
            style: 'tableExample',
            table: {
                body: [
                    ['', 'column 1', 'column 2', 'column 3'],
                    [
                        'row 1',
                        {
                            rowSpan: 3,
                            colSpan: 3,
                            border: [true, true, true, true],
                            fillColor: '#cccccc',
                            text: 'rowSpan: 3\ncolSpan: 3\n\nborder:\n[true, true, true, true]',
                        },
                        '',
                        '',
                    ],
                    ['row 2', '', '', ''],
                    ['row 3', '', '', ''],
                ],
            },
            layout: {
                defaultBorder: false,
            },
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
                            border: [false, false, false, false],
                        },
                        '',
                        '',
                    ],
                    ['border:\nundefined', 'border:\nundefined', 'border:\nundefined'],
                ],
            },
        },
        {
            style: 'tableExample',
            table: {
                body: [
                    [
                        {
                            rowSpan: 3,
                            text: 'rowSpan: 3\n\nborder:\n[false, false, false, false]',
                            fillColor: '#eeeeee',
                            border: [false, false, false, false],
                        },
                        'border:\nundefined',
                        'border:\nundefined',
                    ],
                    ['', 'border:\nundefined', 'border:\nundefined'],
                    ['', 'border:\nundefined', 'border:\nundefined'],
                ],
            },
        },
        { text: 'BorderColor per Cell with Column/row spans', pageBreak: 'before', style: 'subheader' },
        'Each cell-element can set the borderColor (the cell above or left of the current cell has priority',
        {
            style: 'tableExample',
            color: '#444',
            table: {
                widths: [200, 'auto', 'auto'],
                headerRows: 2,
                // keepWithHeaderRows: 1,
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
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
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
                    ['', 'Sample value 2', 'Sample value 3'],
                    ['Sample value 1', 'Sample value 2', 'Sample value 3'],
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
                            text: 'a',
                            borderColor: ['#ff00ff', '#00ffff', '#ff00ff', '#00ffff'],
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
            margin: [0, 0, 0, 10],
        },
        subheader: {
            fontSize: 16,
            bold: true,
            margin: [0, 10, 0, 5],
        },
        tableExample: {
            margin: [0, 5, 0, 15],
        },
        tableOpacityExample: {
            margin: [0, 5, 0, 15],
            fillColor: 'blue',
            fillOpacity: 0.3,
        },
        tableHeader: {
            bold: true,
            fontSize: 13,
            color: 'black',
        },
    },
    defaultStyle: {
        alignment: 'justify',
    },
};

const textDecorations: TDocumentDefinitions = {
    content: [
        { text: 'Higlighted text', fontSize: 18, background: 'yellow' },
        ' ',
        {
            columns: [
                { text: 'Underline decoration', decoration: 'underline' },
                { text: 'Line Through decoration', decoration: 'lineThrough' },
                { text: 'Overline decoration', decoration: 'overline' },
            ],
        },
        ' ',
        {
            columns: [
                {
                    text: 'Dashed style',
                    decoration: 'underline',
                    decorationStyle: 'dashed',
                },
                {
                    text: 'Dotted style',
                    decoration: 'underline',
                    decorationStyle: 'dotted',
                },
                {
                    text: 'Double style',
                    decoration: 'underline',
                    decorationStyle: 'double',
                },
                {
                    text: 'Wavy style',
                    decoration: 'underline',
                    decorationStyle: 'wavy',
                },
            ],
        },
        ' ',
        {
            columns: [
                {
                    text: 'Using colors',
                    decoration: 'underline',
                    decorationColor: 'blue',
                },
                {
                    text: 'Using colors',
                    decoration: 'lineThrough',
                    decorationColor: 'red',
                },
                {
                    text: 'Using colors',
                    decoration: 'underline',
                    decorationStyle: 'wavy',
                    decorationColor: 'green',
                },
            ],
        },
    ],
};

const toc: TDocumentDefinitions = {
    content: [
        {
            text: 'This is a TOC example. Text elements marked with tocItem: true will be located in the toc. See below.',
            pageBreak: 'after',
        },
        {
            toc: {
                title: { text: 'INDEX', style: 'header' },
                textMargin: [0, 0, 0, 0],
                textStyle: { italics: true },
                numberStyle: { bold: true },
            },
        },
        {
            text: 'This is a header, using header style',
            style: 'header',
            tocItem: true,
            tocStyle: { italics: true },
            tocMargin: [0, 10, 0, 0],
            tocNumberStyle: { italics: true, decoration: 'underline' },
            pageBreak: 'before',
        },
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam.\n\n',
        {
            text: 'Subheader 1 - using subheader style',
            style: 'subheader',
            tocItem: true,
            pageBreak: 'before',
        },
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.\n\n',
        {
            text: 'Subheader 2 - using subheader style',
            style: 'subheader',
            tocItem: true,
            pageBreak: 'before',
        },
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.\n\n',
        {
            // tslint:disable-next-line: max-line-length
            text: 'It is possible to apply multiple styles, by passing an array. This paragraph uses two styles: quote and small. When multiple styles are provided, they are evaluated in the specified order which is important in case they define the same properties',
            style: ['quote', 'small'],
        },
        {
            text: [
                {
                    text: 'Subheader 3 - using inline text',
                    style: 'subheader',
                    tocItem: true,
                },
                {
                    text: '; and this text not be displayed in ToC',
                    italics: true,
                },
            ],
            pageBreak: 'before',
        },
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
    ],
    styles: {
        header: {
            fontSize: 18,
            bold: true,
        },
        subheader: {
            fontSize: 15,
            bold: true,
        },
        quote: {
            italics: true,
        },
        small: {
            fontSize: 8,
        },
    },
};

const vectors: TDocumentDefinitions = {
    content: [
        {
            text: [
                'This ',
                { text: 'is', color: 'green' },
                ' the first ',
                { text: 'paragraph', color: 'red' },
            ],
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
                    lineWidth: 10,
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
                    points: [
                        { x: 10, y: 10 },
                        { x: 35, y: 40 },
                        { x: 100, y: 40 },
                        { x: 125, y: 10 },
                    ],
                },
                {
                    type: 'polyline',
                    lineWidth: 2,
                    color: 'blue',
                    lineColor: 'red',
                    points: [
                        { x: 10, y: 110 },
                        { x: 35, y: 140 },
                        { x: 100, y: 140 },
                        { x: 125, y: 110 },
                        { x: 10, y: 110 },
                    ],
                },
                {
                    type: 'line',
                    x1: 40,
                    y1: 60,
                    x2: 260,
                    y2: 60,
                    lineWidth: 3,
                },
                {
                    type: 'line',
                    x1: 40,
                    y1: 80,
                    x2: 260,
                    y2: 80,
                    lineWidth: 10,
                    lineCap: 'round',
                },
                {
                    type: 'line',
                    x1: 40,
                    y1: 100,
                    x2: 260,
                    y2: 100,
                    lineWidth: 10,
                    lineCap: 'square',
                },
                {
                    type: 'ellipse',
                    x: 150,
                    y: 140,
                    color: 'red',
                    fillOpacity: 0.5,
                    r1: 80,
                    r2: 60,
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
                    x: 10,
                    y: 200,
                    w: 100,
                    h: 10,
                    linearGradient: ['red', 'blue'],
                },
                {
                    type: 'rect',
                    x: 10,
                    y: 215,
                    w: 100,
                    h: 10,
                    linearGradient: ['red', 'green', 'blue'],
                },
                {
                    type: 'rect',
                    x: 10,
                    y: 230,
                    w: 100,
                    h: 10,
                    linearGradient: ['red', 'yellow', 'green', 'blue'],
                },
                {
                    type: 'ellipse',
                    x: 260,
                    y: 140,
                    r1: 30,
                    r2: 20,
                    linearGradient: ['red', 'green', 'blue', 'red'],
                },
            ],
        },
        'This text should be rendered under canvas',
        {
            color: 'black',

            text: ['This should be black '],
        },
    ],
    defaultStyle: {
        color: 'gray',
    },
};

const watermark: TDocumentDefinitions = {
    watermark: {
        text: 'test watermark',
        color: 'blue',
        opacity: 0.3,
        bold: true,
        italics: false,
    },
    content: [
        'Test page of watermark.\n\n',
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id semper massa, nec dapibus mauris. Mauris in mattis nibh. Aenean feugiat volutpat aliquam. Donec sed tellus feugiat, dignissim lectus id, eleifend tortor. Ut at mauris vel dui euismod accumsan. Cras sodales, ante sit amet varius dapibus, dolor neque finibus justo, vel ornare arcu dolor vitae tellus. Aenean faucibus egestas urna in interdum. Mauris convallis dolor a condimentum sagittis. Suspendisse non laoreet nisl. Curabitur sed pharetra ipsum. Curabitur aliquet purus vitae pharetra tincidunt. Cras aliquam tempor justo sit amet euismod. Praesent risus magna, lobortis eget dictum sit amet, tristique vel enim. Duis aliquet, urna maximus sollicitudin lobortis, mi nunc dignissim ligula, et lacinia magna leo non sem.',
    ],
};
const watermark2: TDocumentDefinitions = {
    watermark: 'test watermark',
    content: [
        'Test page of watermark.\n\n',
        // tslint:disable-next-line: max-line-length
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id semper massa, nec dapibus mauris. Mauris in mattis nibh. Aenean feugiat volutpat aliquam. Donec sed tellus feugiat, dignissim lectus id, eleifend tortor. Ut at mauris vel dui euismod accumsan. Cras sodales, ante sit amet varius dapibus, dolor neque finibus justo, vel ornare arcu dolor vitae tellus. Aenean faucibus egestas urna in interdum. Mauris convallis dolor a condimentum sagittis. Suspendisse non laoreet nisl. Curabitur sed pharetra ipsum. Curabitur aliquet purus vitae pharetra tincidunt. Cras aliquam tempor justo sit amet euismod. Praesent risus magna, lobortis eget dictum sit amet, tristique vel enim. Duis aliquet, urna maximus sollicitudin lobortis, mi nunc dignissim ligula, et lacinia magna leo non sem.',
    ],
};
