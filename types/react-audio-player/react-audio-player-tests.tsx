import { ReactAudioPlayer } from 'react-audio-player';
import * as React from 'react';
import { render } from 'react-dom';

declare const appContainer: HTMLElement;

render(<ReactAudioPlayer />, appContainer);

render(<ReactAudioPlayer src="/files/George_Gershwin_playing_Rhapsody_in_Blue.ogg" controls />, appContainer);

let rap: ReactAudioPlayer | null = null;
render(
    <ReactAudioPlayer
        ref={r => {
            rap = r;
        }}
        id="player"
        loop
        muted
        onError={() => {}}
        title="Fur Elise"
        volume={10}
    />,
    appContainer,
);

if (rap !== null) {
    (rap as ReactAudioPlayer).clearListenTrack();
    (rap as ReactAudioPlayer).setListenTrack();
    (rap as ReactAudioPlayer).updateVolume(5);
    (rap as ReactAudioPlayer).audioEl.pause();
}
