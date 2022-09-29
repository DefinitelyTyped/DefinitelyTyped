import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

imagemin(['*.webp'], {
    plugins: [
        imageminWebp(),
        imageminWebp({}),
        imageminWebp({
            crop: {
                height: 20,
                width: 30,
                x: 10,
                y: 10,
            },
            preset: 'photo',
            metadata: 'all',
            lossless: true,
            alphaQuality: 50,
            autoFilter: true,
            filter: 50,
            method: 0,
            nearLossless: 50,
            quality: 50,
            resize: {
                width: 100,
                height: 100,
            },
            sharpness: 4,
            size: 1024,
            sns: 50,
        }),
    ],
});

imageminWebp(); // $ExpectType Plugin

(async () => {
    await imagemin(['images/*.{jpg,png}'], {
        destination: 'build/images',
        plugins: [imageminWebp({ quality: 50 })],
    });
})();
