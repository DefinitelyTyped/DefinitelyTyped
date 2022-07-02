import Image = require('@11ty/eleventy-img');
import type { ImgAttributes, PictureAttributes, SourceAttributes } from '@11ty/eleventy-img/generate-html';

Image.concurrency = 4;

function isImg<T>(
    attributes: ImgAttributes<T> | PictureAttributes<T> | SourceAttributes,
): attributes is ImgAttributes<T> {
    return (attributes as ImgAttributes<T>).img !== undefined;
}

(async () => {
    const url = 'https://images.unsplash.com/photo-1608178398319-48f814d0750c';
    let stats: Image.Metadata = await Image(url, {
        widths: [300],
    });

    stats = await Image(url, {
        widths: [200, null],
        formats: ['avif', 'webp', 'svg', null],
        urlPath: '/img/',
        outputDir: './img/',
        svgShortCircuit: true,
        svgAllowUpscale: false,
        cacheOptions: {
            duration: '1d',
            directory: '.cache',
            removeUrlQueryParams: false,
        },
        filenameFormat(id, src, width, format, options) {
            return `${id}-${width}.${format}`;
        },
        urlFormat({ src, width, format }) {
            return `https://sample-image-service.11ty.dev/${encodeURIComponent(src)}/${width}/${format}/`;
        },
        remoteImageMetadata: {
            width: 300,
            height: 300,
        },
        hashLength: 8,
    });

    stats = Image.statsSync(url, {
        formats: ['jpg', 'svg+xml', 'auto'],
        sharpOptions: {
            animated: true,
        },
    });

    const attributes = Image.generateObject(stats, {
        alt: 'Sample image',
    });
    if (isImg(attributes)) {
        console.log(attributes.img);
    } else {
        for (const source of attributes.picture) {
            console.log(isImg(source) ? source.img : source.source);
        }
    }

    return Image.generateHTML(
        stats,
        {
            alt: '',
            sizes: '100vw',
            loading: 'lazy',
            decoding: 'async',
        },
        {
            whitespaceMode: 'inline',
        },
    );
})();
