import imagemin from 'imagemin';
import imageminSvgo from 'imagemin-svgo';

imagemin(['*.svg'], {
    plugins: [
        imageminSvgo(),
        imageminSvgo({}),
        imageminSvgo({
            floatPrecision: 2,
            plugins: [
                {
                    name: 'removeViewBox',
                    active: true,
                },
            ],
            multipass: false,
        }),
    ],
});
