import * as React from 'react';
import Imgix, { Picture, Source, Background, buildURL, PublicConfigAPI, ImgixProvider } from 'react-imgix';

const ImgixTest = () => (
    <Imgix
        src="https://.../image.png"
        sizes="100vw"
        domain="assets.imgix.net"
        width={100}
        height={200}
        imgixParams={{ ar: '16:9' }}
        disableQualityByDPR={true}
        disableSrcSet={true}
        disableLibraryParam={true}
        disablePathEncoding={true}
        attributeConfig={{
            src: 'data-src',
            srcSet: 'data-srcset',
            sizes: 'data-sizes',
        }}
        srcSetOptions={{
            widths: [300, 500, 800, 1200],
            minWidth: 100,
            maxWidth: 2000,
            widthTolerance: 0.2,
            devicePixelRatios: [1, 1.5, 2],
        }}
        className="lazyload"
        htmlAttributes={{
            src: '...',
            'data-testid': 'testid',
        }}
    />
);

const PictureTest = () => (
    <Picture>
        <Source src="https://.../image.png" width={400} htmlAttributes={{ media: '(min-width: 768px)' }} />
        <Source src="https://.../image.png" width={200} htmlAttributes={{ media: '(min-width: 320px)' }} />
        <Imgix src="https://.../image.png" width={100} />
    </Picture>
);

const BackgroundTest = () => (
    <Background src="https://.../image.png" imgixParams={{ w: 1920, h: 500 }} className="blog-title">
        <h2>Blog Title</h2>
    </Background>
);

const ProviderTest = () => (
    <ImgixProvider domain="sdk-test.imgix.net">
        <Imgix
            src="https://.../image.png"
            sizes="100vw"
            domain="assets.imgix.net"
            width={100}
            height={200}
            imgixParams={{ ar: '16:9' }}
            attributeConfig={{
                src: 'data-src',
                srcSet: 'data-srcset',
                sizes: 'data-sizes',
            }}
            className="lazyload"
            htmlAttributes={{
                src: '...',
                'data-testid': 'testid',
            }}
        />
    </ImgixProvider>
);

buildURL('http://yourdomain.imgix.net/image.png', { w: 450, h: 100 });

PublicConfigAPI.disableWarning('fallbackImage');
PublicConfigAPI.enableWarning('sizesAttribute');
// @ts-expect-error
PublicConfigAPI.disableWarning('unknown');
// @ts-expect-error
PublicConfigAPI.enableWarning('unknown');
