import gulpResponsiveImages = require('gulp-responsive-images');

// @ts-expect-error
gulpResponsiveImages();

gulpResponsiveImages({});       // $ExpectType Transform

// @ts-expect-error
gulpResponsiveImages({ 1: "abcd" });

gulpResponsiveImages({
    'hero.png': [
        {
        }
    ]
}
);

gulpResponsiveImages({
    'hero.png': [
        {
            crop: false,
            gravity: 'Center',
            height: 100,
            overwrite: true,
            quality: 100,
            sharpen: false,
            suffix: '-100',
            upscale: false,
            width: 100
        }
    ]
}
);

gulpResponsiveImages({
    'hero.png': [
        {
            format: "jpeg",
            rename: "image.jpg",
            percentage: 50
        }
    ]
}
);

gulpResponsiveImages({
    'hero.png': [
        {
            crop: undefined,
            gravity: undefined,
            height: undefined,
            overwrite: undefined,
            quality: undefined,
            sharpen: undefined,
            suffix: undefined,
            upscale: undefined,
            width: undefined,
            format: undefined,
            rename: undefined,
            percentage: undefined
        }
    ]
}
);
