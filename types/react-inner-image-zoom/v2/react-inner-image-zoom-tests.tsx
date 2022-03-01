import * as React from 'react';
import InnerImageZoom from 'react-inner-image-zoom';

const afterZoomIn = () => {};
const afterZoomOut = () => {};

<InnerImageZoom
    moveType="pan"
    zoomType="click"
    src="/path/to/image.jpg"
    srcSet="/path/to/small-image.jpg, /path/to/small-image-2x.jpg 2x"
    sources={[{
        srcSet: '/path/to/large-image.jpg, /path/to/large-image-2x.jpg 2x',
        media: '(min-width: 768px)'
    }]}
    width={500}
    height={500}
    hasSpacer={true}
    zoomSrc="/path/to/zoom-image.jpg"
    zoomScale={1}
    zoomPreload={false}
    alt="Alt text."
    fadeDuration={150}
    fullscreenOnMobile={false}
    mobileBreakpoint={640}
    hideCloseButton={false}
    hideHint={false}
    className="customClass"
    afterZoomIn={afterZoomIn}
    afterZoomOut={afterZoomOut}
/>;
