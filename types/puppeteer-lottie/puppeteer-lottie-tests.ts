import renderLottie = require('puppeteer-lottie');

(async () => {
    const bodymovin = 'some/bodymovin.json';
    const output = 'output/some.png';

    await renderLottie({
        path: 'fixtures/bodymovin.json',
        output: 'example.mp4',
    });

    await renderLottie({
        path: 'fixtures/bodymovin.json',
        output: 'example.gif',
        width: 640,
    });

    await renderLottie({
        path: 'fixtures/bodymovin.json',
        output: 'frame-%d.png',
        height: 128,
    });

    await renderLottie({
        path: 'fixtures/bodymovin.json',
        output: 'preview.jpg',
    });

    await renderLottie({
        path: bodymovin,
        quiet: true,
        ffmpegOptions: {
            crf: 22,
            profileVideo: 'high',
            preset: 'fast',
        },
        output,
    });

    await renderLottie({
        path: bodymovin,
        quiet: true,
        width: 640,
        output,
    });

    await renderLottie({
        path: bodymovin,
        quiet: true,
        height: 100,
        output,
    });
})();
