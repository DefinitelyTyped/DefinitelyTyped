import * as React from 'react';
import ReactHowler from 'react-howler';

export class ReactHowlerTest extends React.Component {
    private readonly player = React.createRef<ReactHowler>();

    render() {
        const player = this.player.current;

        if (player) {
            player.howler.duration();
        }

        return (
            <div>
                <ReactHowler
                    src={'some-source-url.mp3'}
                    playing={false}
                    mute={true}
                    onPlay={id => console.log('playing sound with id ', id)}
                    onLoad={() => console.log('sound loaded')}
                    onLoadError={id =>
                        console.log('error loading sound with id ', id)
                    }
                    onEnd={() => console.log('sound ended')}
                    onPause={() => console.log('sound paused')}
                    onStop={id => console.log('sound with id paused', id)}
                    volume={0.5}
                    onVolume={id => console.log('volume changed', id)}
                    loop={true}
                    html5={true}
                    format={['mp3']}
                    preload={false}
                    ref={this.player}
                />
            </div>
        );
    }
}
