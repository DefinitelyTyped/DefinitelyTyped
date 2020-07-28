import * as React from 'react';
import Imgix, { Picture, Source, Background, buildURL, PublicConfigAPI } from 'react-imgix';

const ImgixTest = () => (
    <Imgix
        src="https://.../image.png"
        sizes="100vw"
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

buildURL('http://yourdomain.imgix.net/image.png', { w: 450, h: 100 });

PublicConfigAPI.disableWarning('fallbackImage');
PublicConfigAPI.enableWarning('sizesAttribute');
PublicConfigAPI.disableWarning('unknown'); // $ExpectError
PublicConfigAPI.enableWarning('unknown'); // $ExpectError
