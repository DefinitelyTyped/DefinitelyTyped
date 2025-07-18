import imagemin from "imagemin";
import imageminSvgo from "imagemin-svgo";

imagemin(["*.svg"], {
    plugins: [
        imageminSvgo(),
        imageminSvgo({}),
        imageminSvgo({
            floatPrecision: 2,
            plugins: [
                {
                    name: "preset-default",
                    params: {
                        overrides: {
                            convertShapeToPath: {
                                convertArcs: false,
                            },
                        },
                    },
                },
            ],
            multipass: false,
        }),
    ],
});
