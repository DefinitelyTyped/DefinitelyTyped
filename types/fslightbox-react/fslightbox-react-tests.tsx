import * as React from 'react';
import FsLightbox from 'fslightbox-react';

class Test extends React.Component {
    handleEvent = (instance: any) => {};

    render() {
        return (
            <div>
                <FsLightbox toggler={false} sources={['https://i.imgur.com/fsyrScY.jpg']} type={'image'} />

                <FsLightbox toggler={false} sources={['https://i.imgur.com/fsyrScY.jpg']} types={['image']} />

                <FsLightbox
                    toggler={false}
                    sources={[
                        'https://i.imgur.com/fsyrScY.jpg',
                        'https://www.youtube.com/watch?v=xshEZzpS4CQ',
                        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                    ]}
                    thumbs={[
                        null,
                        'https://www.youtube.com/watch?v=xshEZzpS4CQ',
                        'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                    ]}
                    thumbsIcons={[
                        <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="00 430.118 430.118">
                            <path d="M0 0 H119.054 V119.054 H0 V0 z M158.946 0 H278 V119.054 H158.946 V0 z M158.946 158.946 H278 V278 H158.946 V158.946 z M0 158.946 H119.054 V278 H0 V158.946 z" />
                        </svg>,
                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 512 512">
                            <path d="M0 0 H119.054 V119.054 H0 V0 z M158.946 0 H278 V119.054 H158.946 V0 z M158.946 158.946 H278 V278 H158.946 V158.946 z M0 158.946 H119.054 V278 H0 V158.946 z" />
                        </svg>,
                        <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="00 430.118 430.118">
                            <path d="M0 0 H119.054 V119.054 H0 V0 z M158.946 0 H278 V119.054 H158.946 V0 z M158.946 158.946 H278 V278 H158.946 V158.946 z M0 158.946 H119.054 V278 H0 V158.946 z" />
                        </svg>,
                    ]}
                    captions={[<h2>Caption 1</h2>, 'Caption 2', 'Caption 3']}
                    customAttributes={[
                        { 'data-custom-attribute': 'custom attribute' },
                        { 'data-custom-attribute': 'custom attribute' },
                        { 'data-custom-attribute': 'custom attribute' },
                    ]}
                    showThumbsOnMount={false}
                    disableThumbs={false}
                    videosPosters={[null, null, 'https://i.imgur.com/fsyrScY.jpg']}
                    openOnMount={false}
                    disableLocalStorage={true}
                    exitFullscreenOnClose={false}
                    slideDistance={0.5}
                    slideshowTime={10000}
                    UIFadeOutTime={10000}
                    zoomIncrement={0.5}
                    onInit={this.handleEvent}
                    onOpen={this.handleEvent}
                    onShow={this.handleEvent}
                    onClose={this.handleEvent}
                    onSlideChange={this.handleEvent}
                    maxYoutubeVideoDimensions={{ width: 400, height: 300 }}
                    initialAnimation="example-initial-animation"
                />

                <FsLightbox
                    toggler={false}
                    customSources={[
                        <iframe
                            src="https://player.vimeo.com/video/22439234"
                            width="1920px"
                            height="1080px"
                            frameBorder="0"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                        />,
                        <iframe
                            src="//maps.google.com/maps?q=?&q=London&output=embed"
                            width="1920px"
                            height="1080px"
                            allowFullScreen
                            scrolling="no"
                            allow="autoplay; fullscreen"
                        />,
                        <div style={{ width: '200px', height: '100px' }}>
                            <h3>I'm a completely custom source</h3>
                        </div>,
                    ]}
                    svg={{
                        toolbarButtons: {
                            thumbs: {
                                viewBox: '0 0 278 278',
                                width: '17px',
                                height: '17px',
                                d: 'M0 0 H119.054 V119.054 H0 V0 z M158.946 0 H278 V119.054 H158.946 V0 z M158.946 158.946 H278 V278 H158.946 V158.946 z M0 158.946 H119.054 V278 H0 V158.946 z',
                                title: 'Preview',
                            },
                            zoomIn: {
                                width: '20px',
                            },
                            zoomOut: {
                                height: '20px',
                            },
                            slideshow: {
                                start: {
                                    width: '20px',
                                },
                                pause: {
                                    viewBox: '0 0 31 31',
                                },
                            },
                            fullscreen: {
                                enter: {
                                    title: 'Fullscreen — Show',
                                },
                                exit: {
                                    title: 'Fullscreen — Exit',
                                },
                            },
                            close: {
                                height: '32px',
                            },
                        },
                        slideButtons: {
                            previous: {
                                width: '40px',
                            },
                            next: {
                                title: 'Next',
                            },
                        },
                    }}
                />
            </div>
        );
    }
}
