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
                            <path d="M367.243,28.754c-59.795-1.951-100.259,31.591-121.447,100.664c10.912-4.494,21.516-6.762,31.858-6.762c21.804,0,31.455,12.237,28.879,36.776c-1.278,14.86-10.911,36.482-28.879,64.858c-18.039,28.423-31.513,42.61-40.464,42.61c-11.621,0-22.199-21.958-31.857-65.82c-3.239-12.918-9.031-45.812-17.324-98.765c-7.775-49.046-28.32-71.962-61.727-68.741C112.15,34.873,90.98,47.815,62.726,72.308C42.113,91.032,21.228,109.761,0,128.471l20.225,26.112c19.303-13.562,30.595-20.311,33.731-20.311c14.802,0,28.625,23.219,41.488,69.651c11.53,42.644,23.158,85.23,34.744,127.812c17.256,46.466,38.529,69.708,63.552,69.708c40.473,0,90.028-38.065,148.469-114.223c56.537-72.909,85.725-130.352,87.694-172.341C432.498,58.764,411.613,30.028,367.243,28.754z" />
                        </svg>,
                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 512 512">
                            <path d="M490.24,113.92c-13.888-24.704-28.96-29.248-59.648-30.976C399.936,80.864,322.848,80,256.064,80c-66.912,0-144.032,0.864-174.656,2.912c-30.624,1.76-45.728,6.272-59.744,31.008C7.36,138.592,0,181.088,0,255.904C0,255.968,0,256,0,256c0,0.064,0,0.096,0,0.096v0.064c0,74.496,7.36,117.312,21.664,141.728c14.016,24.704,29.088,29.184,59.712,31.264C112.032,430.944,189.152,432,256.064,432c66.784,0,143.872-1.056,174.56-2.816c30.688-2.08,45.76-6.56,59.648-31.264C504.704,373.504,512,330.688,512,256.192c0,0,0-0.096,0-0.16c0,0,0-0.064,0-0.096C512,181.088,504.704,138.592,490.24,113.92z M192,352V160l160,96L192,352z" />
                        </svg>,
                        <svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="00 430.118 430.118">
                            <path d="M367.243,28.754c-59.795-1.951-100.259,31.591-121.447,100.664c10.912-4.494,21.516-6.762,31.858-6.762c21.804,0,31.455,12.237,28.879,36.776c-1.278,14.86-10.911,36.482-28.879,64.858c-18.039,28.423-31.513,42.61-40.464,42.61c-11.621,0-22.199-21.958-31.857-65.82c-3.239-12.918-9.031-45.812-17.324-98.765c-7.775-49.046-28.32-71.962-61.727-68.741C112.15,34.873,90.98,47.815,62.726,72.308C42.113,91.032,21.228,109.761,0,128.471l20.225,26.112c19.303-13.562,30.595-20.311,33.731-20.311c14.802,0,28.625,23.219,41.488,69.651c11.53,42.644,23.158,85.23,34.744,127.812c17.256,46.466,38.529,69.708,63.552,69.708c40.473,0,90.028-38.065,148.469-114.223c56.537-72.909,85.725-130.352,87.694-172.341C432.498,58.764,411.613,30.028,367.243,28.754z" />
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
                                viewBox: "0 0 278 278",
                                width: "17px",
                                height: "17px",
                                d: "M0 0 H119.054 V119.054 H0 V0 z M158.946 0 H278 V119.054 H158.946 V0 z M158.946 158.946 H278 V278 H158.946 V158.946 z M0 158.946 H119.054 V278 H0 V158.946 z",
                                title: "Preview"
                            },
                            zoomIn: {
                                width: "20px"
                            },
                            zoomOut: {
                                height: "20px"
                            },
                            slideshow: {
                                start: {
                                    width: "20px"
                                },
                                pause: {
                                    viewBox: "0 0 31 31"
                                }
                            },
                            fullscreen: {
                                enter: {
                                    title: "Fullscreen — Show",
                                },
                                exit: {
                                    title: "Fullscreen — Exit"
                                }
                            },
                            close: {
                                height: "32px"
                            }
                        },
                        slideButtons: {
                            previous: {
                                width: "40px",
                            },
                            next: {
                                title: "Next"
                            }
                        }
                    }}
                />
            </div>
        );
    }
}
