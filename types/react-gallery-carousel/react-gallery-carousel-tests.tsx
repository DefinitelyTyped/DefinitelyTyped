import * as React from 'react';
import Carousel = require('react-gallery-carousel');

const images: Carousel.Images = [
    {
        src: `https://placedog.net/700/420?id=1`,
        srcset: `https://placedog.net/400/240?id=1 400w, https://placedog.net/700/420?id=1 700w`,
        sizes: '(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px',
        alt: `Dogs are domesticated mammals, not natural wild animals.`,
        thumbnail: `https://placedog.net/100/60?id=1`,
    },
    {
        src: `https://placedog.net/700/420?id=2`,
        srcset: `https://placedog.net/400/240?id=2 400w, https://placedog.net/700/420?id=2 700w`,
        sizes: '(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px',
        alt: `Dogs are domesticated mammals, not natural wild animals.`,
        thumbnail: `https://placedog.net/100/60?id=2`,
    },
];

// Test some examples available in https://github.com/yifaneye/react-gallery-carousel/tree/3adffccaf131e69eb084736aa24a0a2b47268fa8/example/src/components

<Carousel
    isLoop={false}
    hasIndexBoard="topRight"
    hasMediaButton={false}
    hasMediaButtonAtMax="bottomLeft"
    hasSizeButton="bottomRight"
    hasDotButtons="bottom"
    hasThumbnails={false}
    shouldSwipeOnMouse={false}
    shouldMinimizeOnSwipeDown={false}
    index={1}
    style={{ userSelect: 'text' }}
>
    <h3>This is the example 2</h3>
</Carousel>;

<Carousel images={images} isRTL />;

<Carousel
    className="framed-carousel"
    images={images}
    index={2}
    isMaximized={false}
    hasSizeButton={false}
    hasMediaButton={false}
    hasIndexBoard={false}
    hasLeftButton={false}
    hasRightButton={false}
    hasCaptionsAtMax="top"
    hasDotButtonsAtMax="bottom"
    hasThumbnails={false}
    hasThumbnailsAtMax={true}
    thumbnailWidth={'15%'}
    thumbnailHeight={'15%'}
    shouldMaximizeOnClick={true}
    shouldMinimizeOnClick={true}
    activeIcon={
        <span className="icon-text" role="img" aria-label="active">
            🔳
        </span>
    }
    passiveIcon={
        <span className="icon-text" role="img" aria-label="passive">
            🔲
        </span>
    }
/>;

// Should allow thumbnails
<Carousel
    thumbnails={
        <ul>
            <li>thumb</li>
        </ul>
    }
>
    <></>
</Carousel>;

// Carousel without the images props should be an error
// @ts-expect-error
<Carousel />;

// Carousel without images but with children should work normally
<Carousel>
    <></>
</Carousel>;

// Image object without the required src should be an error
// @ts-expect-error
<Carousel images={[{ alt: 'alt description' }]} />;

// Should support new params on the onIndexChange callback
<Carousel
    onIndexChange={({ curIndex, curIndexForDisplay }) => {
        console.log(curIndex, curIndexForDisplay);
    }}
>
    <></>
</Carousel>;

// Test using the carousel with imperative handlers
// https://github.com/yifaneye/react-gallery-carousel#handlers
const carouselRef = React.useRef<Carousel.CarouselRef<HTMLDivElement>>(null);

<Carousel ref={carouselRef} images={images} />;

carouselRef.current?.play();
carouselRef.current?.pause();
carouselRef.current?.toggleIsPlaying();
carouselRef.current?.maximize();
carouselRef.current?.minimize();
carouselRef.current?.toggleIsMaximized();
carouselRef.current?.goLeft();
carouselRef.current?.goRight();
carouselRef.current?.goToIndex(2);

// Test small and large widget positions
<Carousel
    minIcon={<i></i>}
    maxIcon={<i></i>}
    hasLeftButton="bottomRight"
    hasRightButton="bottomRight"
    hasCaptions="bottom"
    hasDotButtons="top"
>
    <></>
</Carousel>;
