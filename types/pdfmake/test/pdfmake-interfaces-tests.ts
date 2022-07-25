import {
    Content,
    ContentImage,
    ContentOrderedList,
    ContentSvg,
    ContentUnorderedList,
    TDocumentDefinitions,
    BufferOptions,
    CustomTableLayout,
    CanvasPolyline,
    Table,
} from 'pdfmake/interfaces';

const createContent: () => Content = () => 'allo';
const content: Content = createContent();

if (typeof content !== 'string' && 'stack' in content && content.stack) {
    // $ExpectType ContentStack
    content;
}

// @ts-expect-error
const invalidContent: Content = {
    ul: [],
    ol: []
};

const staticBackground: TDocumentDefinitions = {
    content: 'Content',
    background: 'Static Background',
};

const noCompress: TDocumentDefinitions = {
    content: 'Content',
    compress: false,
};

const documentMetadata: TDocumentDefinitions = {
    info: {
        title: 'awesome Document',
        author: 'john doe',
        subject: 'subject of document',
        keywords: 'keywords for document',
        creator: 'pdfmake',
        producer: 'pdfmake',
        creationDate: new Date('1970-01-01'),
        modDate: new Date('2020-02-29'),
        trapped: 'True',
    },
    content: 'This is an sample PDF printed with pdfMake',
};

const dynamicHeaderFooter: TDocumentDefinitions = {
    footer: (currentPage, pageCount) => `${currentPage} of ${pageCount}`,
    header: (currentPage, pageCount, pageSize) => [
        // you can apply any logic and return any valid pdfmake element
        { text: 'simple text', alignment: currentPage % 2 ? 'left' : 'right' },
        { canvas: [{ type: 'rect', x: 170, y: 32, w: pageSize.width - 170, h: 40 }] },
    ],
    content: 'This is an sample PDF printed with pdfMake',
};

const staticHeaderFooter: TDocumentDefinitions = {
    header: 'simple text',
    footer: {
        columns: ['Left part', { text: 'Right part', alignment: 'right' }],
    },
    content: 'This is an sample PDF printed with pdfMake',
};

const pageOrientation: TDocumentDefinitions = {
    pageOrientation: 'portrait',
    content: [
        { text: 'Text on Portrait' },
        { text: 'Text on Landscape', pageOrientation: 'landscape', pageBreak: 'before' },
        { text: 'Text on Landscape 2', pageOrientation: 'portrait', pageBreak: 'after' },
        { text: 'Text on Portrait 2' },
    ],
};

const autoPageHeight: TDocumentDefinitions = {
    pageSize: {
        width: 595.28,
        height: 'auto',
    },
    content: 'This is an sample PDF printed with pdfMake',
};

const pageBreakBefore: TDocumentDefinitions = {
    content: [
        { text: '1 Headline', headlineLevel: 1 },
        'Some long text of variable length ...',
        { text: '2 Headline', headlineLevel: 1 },
        'Some long text of variable length ...',
        { text: '3 Headline', headlineLevel: 1 },
        'Some long text of variable length ...',
    ],
    pageBreakBefore: (currentNode, followingNodesOnPage, nodesOnNextPage, previousNodesOnPage) =>
        currentNode.headlineLevel === 1 && followingNodesOnPage.length === 0,
};

const qrCodes: TDocumentDefinitions = {
    content: [
        { qr: 'text in QR' },
        { qr: 'text in QR', foreground: 'red', background: 'yellow' },
        { qr: 'text in QR', fit: 500 },
        { qr: 'text in QR', version: -1 },
        { qr: 'text in QR', version: 1 },
        { qr: 'text in QR', version: 40 },
        { qr: 'text in QR', eccLevel: 'L' },
        { qr: 'text in QR', eccLevel: 'M' },
        { qr: 'text in QR', eccLevel: 'Q' },
        { qr: 'text in QR', eccLevel: 'H' },
        { qr: 'text in QR', mode: 'numeric' },
        { qr: 'text in QR', mode: 'alphanumeric' },
        { qr: 'text in QR', mode: 'octet' },
        { qr: 'text in QR', mask: -1 },
        { qr: 'text in QR', mask: 0 },
        { qr: 'text in QR', mask: 7 },
    ],
};

const watermark: TDocumentDefinitions = {
    watermark: {
        text: 'test watermark',
        color: 'blue',
        opacity: 0.3,
        bold: true,
        italics: false,
        font: 'Roboto',
        fontSize: 15,
        angle: 30,
    },
    content: ['...'],
};

const fontsUsage: TDocumentDefinitions = {
    content: [
        { text: 'First paragraph', font: 'Times' },
        {
            text: 'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines',
        },
    ],
    defaultStyle: {
        font: 'Helvetica',
    },
};

const securityVersion: TDocumentDefinitions = {
    content: 'Content',
    userPassword: 'hunter2',
    permissions: {
        printing: 'lowResolution',
    },
    version: '1.5',
};

const allPageSizes: TDocumentDefinitions[] = [
    { content, pageSize: '4A0' },
    { content, pageSize: '2A0' },
    { content, pageSize: 'A0' },
    { content, pageSize: 'A1' },
    { content, pageSize: 'A2' },
    { content, pageSize: 'A3' },
    { content, pageSize: 'A4' },
    { content, pageSize: 'A5' },
    { content, pageSize: 'A6' },
    { content, pageSize: 'A7' },
    { content, pageSize: 'A8' },
    { content, pageSize: 'A9' },
    { content, pageSize: 'A10' },
    { content, pageSize: 'B0' },
    { content, pageSize: 'B1' },
    { content, pageSize: 'B2' },
    { content, pageSize: 'B3' },
    { content, pageSize: 'B4' },
    { content, pageSize: 'B5' },
    { content, pageSize: 'B6' },
    { content, pageSize: 'B7' },
    { content, pageSize: 'B8' },
    { content, pageSize: 'B9' },
    { content, pageSize: 'B10' },
    { content, pageSize: 'C0' },
    { content, pageSize: 'C1' },
    { content, pageSize: 'C2' },
    { content, pageSize: 'C3' },
    { content, pageSize: 'C4' },
    { content, pageSize: 'C5' },
    { content, pageSize: 'C6' },
    { content, pageSize: 'C7' },
    { content, pageSize: 'C8' },
    { content, pageSize: 'C9' },
    { content, pageSize: 'C10' },
    { content, pageSize: 'RA1' },
    { content, pageSize: 'RA2' },
    { content, pageSize: 'RA3' },
    { content, pageSize: 'RA4' },
    { content, pageSize: 'SRA1' },
    { content, pageSize: 'SRA2' },
    { content, pageSize: 'SRA3' },
    { content, pageSize: 'SRA4' },
    { content, pageSize: 'EXECUTIVE' },
    { content, pageSize: 'FOLIO' },
    { content, pageSize: 'LEGAL' },
    { content, pageSize: 'LETTER' },
    { content, pageSize: 'TABLOID' },
];

let ol: ContentOrderedList = {
    ol: ['1', '2', '3'],
    markerColor: 'blue',
};
ol = { ol: ['1'], type: 'decimal' };
ol = { ol: ['1'], type: 'lower-alpha' };
ol = { ol: ['1'], type: 'upper-alpha' };
ol = { ol: ['1'], type: 'lower-roman' };
ol = { ol: ['1'], type: 'upper-roman' };
ol = { ol: ['1'], type: 'none' };

let ul: ContentUnorderedList = {
    ul: ['1', '2', '3'],
    markerColor: 'blue',
};

ul = { ul: ['1'], type: 'disc' };
ul = { ul: ['1'], type: 'square' };
ul = { ul: ['1'], type: 'circle' };
ul = { ul: ['1'], type: 'none' };

const svg1: ContentSvg = {
    svg: 'test',
    width: 5,
    height: 5,
};

const svg2: ContentSvg = {
    svg: 'test',
    fit: [50, 50],
};

const image1: ContentImage = {
    image: 'test',
    width: 5,
    height: 5,
};

const image2: ContentImage = {
    image: 'test',
    fit: [50, 50],
};

const imageWithHeaders: TDocumentDefinitions = {
    content: [],
    images: {
        myImage: {
            url: 'test',
            headers: {
                Accept: 'image/jpeg'
            }
        }
    }
};

const bufferOptions: BufferOptions = {
    fontLayoutCache: true,
    bufferPages: true,
    tableLayouts: { foo: { fillColor: '#ff0000' } },
    autoPrint: true,
    progressCallback: (progress: number) => {}
};

const customTableLayouts: CustomTableLayout[] = [
    {},
    { hLineWidth: () => 50 },
    { vLineWidth: () => 50 },
    { hLineColor: () => '#ff0000' },
    { hLineColor: '#ff0000' },
    { vLineColor: () => '#ff0000' },
    { vLineColor: '#ff0000' },
    { hLineStyle: () => ({ dash: { length: 10, space: 5 }}) },
    { vLineStyle: () => ({ dash: { length: 10, space: 5 }}) },
    { fillColor: () => '#ff0000' },
    { fillColor: '#ff0000' },
    { paddingLeft: () => 50 },
    { paddingRight: () => 50 },
    { paddingTop: () => 50 },
    { paddingBottom: () => 50 },
    { fillOpacity: () => 50 },
    { fillOpacity: 50 },
    { defaultBorder: true }
];

const tableHeights: Table = {
    body: [],
    heights: [100, 'auto']
};

// via https://pdfmake.github.io/docs/0.1/document-definition-object/patterns/
const tilingPatterns: TDocumentDefinitions = {
    content: [
        {
            text: 'Insert lorem. And ipsum',
            background: ['stripe45d', 'gray']
        },
        {
            canvas: [
                {
                    type: 'rect',
                    x: 10,
                    y: 250,
                    w: 50,
                    h: 30,
                    color: ['stripe45d', 'blue'],
                }
            ]
        },
        {
            table: {
                body: [
                    [
                        {
                            text: 'Sample value',
                            fillOpacity: 0.85,
                            fillColor: ['stripe45d', 'blue']
                        },
                        {
                            text: 'Sample value',
                            fillOpacity: 0.15,
                            fillColor: 'blue',
                            overlayPattern: ['stripe45d', 'gray'],
                            overlayOpacity: 0.15
                        }
                    ]
                ]
            }
        }
    ],
    patterns: {
        stripe45d: {
            boundingBox: [1, 1, 4, 4],
            xStep: 3,
            yStep: 3,
            pattern: "1 w 0 1 m 4 5 l s 2 0 m 5 3 l s",
        },
    },
};

const polyLine: CanvasPolyline = {
    type: 'polyline',
    points: [
        { x: 1, y: 1 },
        { x: 2, y: 2 },
    ],
    lineCap: 'butt',
    lineJoin: 'miter',
    lineColor: 'red',
    strokeOpacity: 0.5,
};

const styleInheritance: Content = {
    text: 'foobar',
    style: [
        'stringReference',
        { bold: true }
    ]
};

const defaultPosition: Content = {
    text: 'foobar',
    absolutePosition: {} // defaults to 0-0
};

const unbreakableList: Content = {
    unbreakable: true,
    ul: ['One', 'Two', 'Three']
};
