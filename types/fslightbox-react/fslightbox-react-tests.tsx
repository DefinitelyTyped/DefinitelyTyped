import * as React from 'react';
import FsLightbox from 'fslightbox-react';

class Test extends React.Component {
    handleEvent = () => {};

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
                    videosPosters={[null, null, 'https://i.imgur.com/fsyrScY.jpg']}
                    openOnMount={false}
                    disableLocalStorage={true}
                    onInit={this.handleEvent}
                    onOpen={this.handleEvent}
                    onShow={this.handleEvent}
                    onClose={this.handleEvent}
                    maxYoutubeVideoDimensions={{ width: 400, height: 300 }}
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
                />
            </div>
        );
    }
}
