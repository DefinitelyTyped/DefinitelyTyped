import { ReactAudioPlayer } from 'react-audio-player';
import * as React from 'react';
import { render } from 'react-dom';

declare const appContainer: HTMLElement;

render(<ReactAudioPlayer />, appContainer);

render(<ReactAudioPlayer src="/files/George_Gershwin_playing_Rhapsody_in_Blue.ogg" controls />, appContainer);

render(<ReactAudioPlayer id="player" loop muted onError={() => {}} title="Fur Elise" volume={10} />, appContainer);
