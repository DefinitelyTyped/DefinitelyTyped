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
                    preload={false}
                    playing={false}
                    loop={true}
                    mute={true}
                    volume={0.5}
                    rate={1}
                    html5={true}
                    format={['mp3']}
                    xhr={{ method: 'GET' }}
                    onPlay={id => console.log('playing sound with id ', id)}
                    onPause={id => console.log('sound paused with id ', id)}
                    onVolume={id => console.log('sound volume with id ', id)}
                    onStop={id => console.log('sound stopped with id ', id)}
                    onLoad={() => console.log('sound loaded')}
                    onLoadError={id => console.log('error loading sound with id ', id)}
                    onEnd={id => console.log('sound ended')}
                    onSeek={id => console.log('sound seeked with id ', id)}
                    onPlayError={id => console.log('error playing sound with id', id)}
                    ref={this.player}
                />
            </div>
        );
    }
}
