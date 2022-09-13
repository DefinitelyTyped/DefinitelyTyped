import * as React from 'react';
import InnerImageZoom from 'react-inner-image-zoom';

const afterZoomIn = () => {};
const afterZoomOut = () => {};
const onLoad = () => {};

<InnerImageZoom
    moveType="pan"
    zoomType="click"
    src="/path/to/image.jpg"
    sources={[{
        srcSet: '/path/to/large-image.jpg, /path/to/large-image-2x.jpg 2x',
        media: '(min-width: 768px)'
    }]}
    width={500}
    height={500}
    hasSpacer={true}
    imgAttributes={{
        alt: 'Alt text.',
        srcSet: '/path/to/small-image.jpg, /path/to/small-image-2x.jpg 2x',
        title: 'Title!',
        'aria-label': 'Screenreader text.',
        onLoad
    }}
    zoomSrc="/path/to/zoom-image.jpg"
    zoomScale={1}
    zoomPreload={false}
    fadeDuration={150}
    fullscreenOnMobile={false}
    mobileBreakpoint={640}
    hideCloseButton={false}
    hideHint={false}
    className="customClass"
    afterZoomIn={afterZoomIn}
    afterZoomOut={afterZoomOut}
/>;
