import ComparePdf = require('compare-pdf');

// @ts-expect-error
new ComparePdf();

const config = {
    paths: {
        actualPdfRootFolder: '/data/actualPdfs',
        baselinePdfRootFolder: '/data/baselinePdfs',
        actualPngRootFolder: '/data/actualPngs',
        baselinePngRootFolder: '/data/baselinePngs',
        diffPngRootFolder: '/data/diffPngs',
    },
    settings: {
        imageEngine: 'graphicsMagick',
        density: 100,
        quality: 70,
        tolerance: 0,
        threshold: 0.05,
        cleanPngPaths: true,
        matchPageCount: true,
        disableFontFace: true,
        verbosity: 0,
    },
};

let comparePdfTest = new ComparePdf(config)
    .actualPdfFile('actualFilePath')
    .baselinePdfFile('baselineFilePath')
    .addMask(1, { x0: 20, y0: 40, x1: 100, y1: 70 })
    .cropPage(1, { width: 530, height: 210, x: 0, y: 415 })
    .onlyPageIndexes([0, 1, 5]);

comparePdfTest.opts.crops // $ExpectType Array<PageCrop>
comparePdfTest.opts.crops[0].pageIndex // $ExpectType number
comparePdfTest.opts.crops[0].coordinates // $ExpectType Dimension

comparePdfTest.opts.masks // $ExpectType Array<PageMask>
comparePdfTest.opts.masks[0].pageIndex // $ExpectType number
comparePdfTest.opts.masks[0].coordinates // $ExpectType Coordinates
comparePdfTest.opts.masks[0].color // $ExpectType string

comparePdfTest.opts.onlyPageIndexes // $ExpectType Array<string | number>
comparePdfTest.opts.skipPageIndexes // $ExpectType Array<string | number>


let cropPagesList = [
    { pageIndex: 0, coordinates: { width: 210, height: 180, x: 615, y: 265 } },
    { pageIndex: 0, coordinates: { width: 210, height: 180, x: 615, y: 520 } },
    { pageIndex: 1, coordinates: { width: 530, height: 210, x: 0, y: 415 } },
];

let maskPagesList = [
    { pageIndex: 1, coordinates: { x0: 20, y0: 40, x1: 100, y1: 70 } },
    { pageIndex: 1, coordinates: { x0: 330, y0: 40, x1: 410, y1: 70 }, color: 'yellow' },
];

let results = new ComparePdf(config)
    .actualPdfBuffer(new Uint8Array(100), 'actualFilePath')
    .baselinePdfBuffer(new Uint8Array(100), 'baselineFilePath')
    .cropPages(cropPagesList)
    .addMasks(maskPagesList)
    .skipPageIndexes([2, 4, 6])
    .compare();

results.status // $ExpectType string
results.message // $ExpectType string
results.details // $ExpectType string
results.details?.status // $ExpectType string
results.details?.numDiffPixels // $ExpectType string
results.details?.diffPng // $ExpectType string