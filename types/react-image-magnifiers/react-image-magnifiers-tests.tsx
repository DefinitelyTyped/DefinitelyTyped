import * as React from 'react';

import {
    Magnifier,
    GlassMagnifier,
    SideBySideMagnifier,
    PictureInPictureMagnifier,
    MagnifierContainer,
    MagnifierPreview,
    MagnifierZoom,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION,
} from 'react-image-magnifiers';

export const MagnifierExample1 = () => <Magnifier imageSrc="./image.jpg" />;
export const MagnifierExample2 = () => (
    <Magnifier
        imageSrc="./image.jpg"
        imageAlt="Example"
        largeImageSrc="./large-image.jpg" // Optional
        mouseActivation={MOUSE_ACTIVATION.DOUBLE_CLICK} // Optional
        touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP} // Optional
    />
);

export const MagnifierExample3 = () => (
    <Magnifier
        className="input-position"
        imageSrc="./image.jpg"
        largeImageSrc="./large-image.jpg"
        mouseActivation={MOUSE_ACTIVATION.CLICK}
        touchActivation={TOUCH_ACTIVATION.LONG_TOUCH}
        dragToMove={true}
    />
);

export const GlassMagnifierExample1 = () => <GlassMagnifier imageSrc="./image.jpg" />;

export const GlassMagnifierExample2 = () => (
    <GlassMagnifier
        imageSrc="./image.jpg"
        imageAlt="Example"
        largeImageSrc="./large-image.jpg" // Optional
    />
);

export const GlassMagnifierExample3 = () => (
    <GlassMagnifier
        className="input-position"
        imageSrc="./image.jpg"
        largeImageSrc="./large-image.jpg"
        allowOverflow={true}
        magnifierSize="30%"
        magnifierBorderSize={5}
        magnifierBorderColor="rgba(255, 255, 255, .5)"
        square={false}
    />
);

export const SideBySideMagnifierExample1 = () => <SideBySideMagnifier imageSrc="./image.jpg" />;

export const SideBySideMagnifierExample2 = () => (
    <SideBySideMagnifier
        className="input-position"
        style={{ order: 1 }}
        imageSrc="./image.jpg"
        largeImageSrc="./large-image.jpg"
        alwaysInPlace={false}
        overlayOpacity={0.6}
        switchSides={false}
        inPlaceMinBreakpoint={641}
        fillAvailableSpace={false}
        fillAlignTop={false}
        fillGapTop={0}
        fillGapRight={10}
        fillGapBottom={10}
        fillGapLeft={10}
        zoomContainerBorder="1px solid #ccc"
        zoomContainerBoxShadow="0 4px 8px rgba(0,0,0,.5)"
    />
);

export const PictureInPictureMagnifierExample1 = () => <PictureInPictureMagnifier imageSrc="./image.jpg" />;

export const PictureInPictureMagnifierExample2 = () => (
    <PictureInPictureMagnifier
        className="input-position"
        imageSrc="./image.jpg"
        largeImageSrc="./large-image.jpg"
        previewHorizontalPos="left"
        previewVerticalPos="bottom"
        previewSizePercentage={35}
        previewOpacity={1}
        shadow={false}
    />
);

export const CustomLayoutExample = () => (
    <MagnifierContainer>
        <div className="example-class">
            <MagnifierPreview imageSrc="./image.jpg" />
        </div>
        <MagnifierZoom style={{ height: '400px' }} imageSrc="./image.jpg" />
    </MagnifierContainer>
);
