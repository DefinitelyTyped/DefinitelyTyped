import * as React from "react";
import YouTube from 'react-youtube';

// https://github.com/troybetz/react-youtube
class Example extends React.Component {
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1 as 1
            }
        };

        return (
            <YouTube
                videoId="2g811Eo7K8U"
                opts={opts}
                onReady={this._onReady}
            />
        );
    }

    _onReady(event: { target: any }) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}
