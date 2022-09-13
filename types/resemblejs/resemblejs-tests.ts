import resemble = require('resemblejs');
import compareImages = require('resemblejs/compareImages');

const box = {
    left: 100,
    top: 200,
    right: 200,
    bottom: 600,
};

resemble.outputSettings({
    errorColor: {
        red: 255,
        green: 0,
        blue: 255,
    },
    errorType: 'movement',
    transparency: 0.3,
    largeImageThreshold: 1200,
    useCrossOrigin: false,
    boundingBox: box,
    boundingBoxes: [box],
    ignoredBox: box,
    ignoredBoxes: [box],
    ignoreAreasColoredWith: {
        r: 255,
        g: 255,
        b: 255,
        a: 255,
    },
});

resemble('images/image.png').onComplete(function(data) {
    const r: number = data.red;
    const g: number = data.green;
    const b: number = data.blue;
    const brightness: number = data.brightness;
});

resemble('images/image.png')
    .compareTo('images/image2.png')
    .ignoreAntialiasing()
    .scaleToSameSize()
    .repaint()
    .setReturnEarlyThreshold(8)
    .onComplete(function(data) {
        if (data.error) {
            return;
        }

        const rawMisMatchPercentage: number = data.rawMisMatchPercentage;
        const misMatchPercentage: number = data.misMatchPercentage;
        const isSameDimensions: boolean = data.isSameDimensions;
        const dimensionDifference = data.dimensionDifference;
        const diffBounds: resemble.Box = data.diffBounds;

        const diffImageDataUrl: string = data.getImageDataUrl();

        if (data.getBuffer) {
            const buffer: Buffer = data.getBuffer(true);
        }
    });

const options: resemble.ComparisonOptions = {
    output: {
        errorColor: {
            red: 255,
            green: 0,
            blue: 255,
        },
        errorType: 'movement',
        transparency: 0.3,
        largeImageThreshold: 1200,
        useCrossOrigin: false,
    },
    scaleToSameSize: true,
    ignore: 'antialiasing',
};

resemble.compare('images/image2.png', 'images/image2.png', options, function(err, data) {
    if (err) {
        console.log('An error!');
    } else {
        console.log(data);
    }
});

const promise = compareImages('./your-image-path/People.jpg', './your-image-path/People2.jpg', options);
