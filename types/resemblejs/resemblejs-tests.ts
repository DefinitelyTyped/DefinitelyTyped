resemble.outputSettings({
    errorColor: {
        red: 255,
        green: 0,
        blue: 255,
    },
    errorType: 'movement',
    transparency: 0.3,
    largeImageThreshold: 1200,
});

resemble('images/image.png').onComplete(function(data) {
    const r: number = data.red;
    const g: number = data.green;
    const b: number = data.blue;
    const brightness: number = data.brightness;
});

resemble('images/image.png')
    .compareTo('images/image2.png')
    .onComplete(function(data) {
        const diffImageDataUrl: string = data.getImageDataUrl();
        const difference: string = data.misMatchPercentage;
    });

resemble('images/image2.png')
    .compareTo('images/image2.png')
    .ignoreAntialiasing()
    .ignoreColors()
    .repaint()
    .onComplete(function(data) {
        const diffImageDataUrl: string = data.getImageDataUrl();
        const difference: string = data.misMatchPercentage;
    });

resemble.compare('images/image2.png', 'images/image2.png', { ignore: 'antialiasing' }, function(err, data) {
    const buffer: Buffer = data.getBuffer();
    const difference: string = data.misMatchPercentage;
});
