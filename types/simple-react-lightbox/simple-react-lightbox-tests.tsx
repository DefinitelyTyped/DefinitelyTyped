import * as React from 'react';
import { render } from 'react-dom';
import SimpleReactLightbox, { SRLWrapper, SRLWrapperOptions, Elements, useLightbox } from 'simple-react-lightbox';

const elements: Elements = [
    {
        src: 'https://my/image.jpg',
        caption: 'Lorem ipsum dolor sit amet',
        width: 1920,
        height: 'auto',
    },
    {
        src: 'https://my/second-image.jpg',
        thumbnail: 'https://my/second-image-thumbnails.jpg',
        caption: 'Commodo commodo dolore',
        width: 1024,
        height: 'auto',
    },
    {
        src: 'https://vimeo.com/458698330',
        thumbnail: 'https://www.simple-react-lightbox.dev/docs/gallery/thumbnails/unsplash05.jpg',
        caption: 'Vimeo video',
        autoplay: false,
        showControls: true,
    },
];

const options: SRLWrapperOptions = {
    settings: {
        autoplaySpeed: 3000,
        boxShadow: 'none',
        disableKeyboardControls: false,
        disablePanzoom: false,
        disableWheelControls: false,
        downloadedFileName: 'SRL-image',
        hideControlsAfter: false,
        lightboxTransitionSpeed: 0.3,
        lightboxTransitionTimingFunction: 'linear',
        overlayColor: 'rgba(30, 30, 30, 0.9)',
        slideAnimationType: 'fade',
        slideSpringValues: [300, 50],
        slideTransitionSpeed: 0.6,
        slideTransitionTimingFunction: 'linear',
        usingPreact: false,
    },
    buttons: {
        backgroundColor: 'rgba(30,30,36,0.8)',
        iconColor: 'rgba(255, 255, 255, 0.8)',
        iconPadding: '10px',
        showAutoplayButton: true,
        showCloseButton: true,
        showDownloadButton: true,
        showFullscreenButton: true,
        showNextButton: true,
        showPrevButton: true,
        showThumbnailsButton: true,
        size: '40px',
    },
    caption: {
        captionAlignment: 'start',
        captionColor: '#FFFFFF',
        captionContainerPadding: '20px 0 30px 0',
        captionFontFamily: 'inherit',
        captionFontSize: 'inherit',
        captionFontStyle: 'inherit',
        captionFontWeight: 'inherit',
        captionTextTransform: 'inherit',
        showCaption: true,
    },
    thumbnails: {
        showThumbnails: true,
        thumbnailsAlignment: 'center',
        thumbnailsContainerBackgroundColor: 'transparent',
        thumbnailsContainerPadding: '0',
        thumbnailsGap: '0 1px',
        thumbnailsIconColor: '#ffffff',
        thumbnailsOpacity: 0.4,
        thumbnailsPosition: 'bottom',
        thumbnailsSize: ['100px', '80px'],
    },
    progressBar: {
        backgroundColor: '#f2f2f2',
        fillColor: '#000000',
        height: '3px',
        showProgressBar: true,
    },
};

render(
    <React.StrictMode>
        <SimpleReactLightbox>
            <SRLWrapper options={options}>
                <a href="/product01.jpg" className="element_with_overlay">
                    <div className="overlay">
                        <h1>Funny cap</h1>
                        <p>£30.00</p>
                    </div>
                    <img src="product/01.jpg" alt="Funny cap" />
                </a>
                <a href="/product02.jpg" className="element_with_overlay">
                    <div className="overlay">
                        <h1>Sunglasses</h1>
                        <p>£90.00</p>
                    </div>
                    <img src="product/02.jpg" alt="Sunglasses" />
                </a>
                <div className="element_with_overlay">
                    <div className="overlay">
                        <h1>Funny cap</h1>
                        <p>£30.00</p>
                    </div>
                    <img src="/product03.jpg" alt="Cool backpack" />
                </div>
            </SRLWrapper>
            <SimpleReactLightbox>
                <SRLWrapper elements={elements} options={options} />
            </SimpleReactLightbox>
        </SimpleReactLightbox>
    </React.StrictMode>,
    document.getElementById('root'),
);

const { openLightbox, closeLightbox } = useLightbox();

// Close lightbox doesn't have a parameter
// @ts-expect-error
closeLightbox(2);
// Allow a index number
openLightbox(2);
// Allow no numbers
openLightbox();
closeLightbox();

// Don't allow children when user gives element
// @ts-expect-error
<SRLWrapper elements={elements} options={options}>
    <div></div>
</SRLWrapper>;

// Test readonly callback parameters
<SRLWrapper
    callbacks={{
        onCountSlides: object => {
            // @ts-expect-error
            object.totalSlide = 2;
        },
        onLightboxOpened: object => {
            // @ts-expect-error
            object.opened = 2;
        },
        onLightboxClosed: object => {
            // @ts-expect-error
            object.currentSlide = 2;
        },
        onSlideChange: object => {
            // @ts-expect-error
            object.index = 2;
        },
    }}
    elements={elements}
/>;
