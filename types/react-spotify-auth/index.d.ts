// Type definitions for react-spotify-auth 1.4
// Project: https://github.com/kevin51jiang/react-spotify-auth
// Definitions by: jsarlo <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.8

import Window = require('trusted-types');
import * as React from 'react';

export as namespace ReactSpotifyAuth;

export function getRedirectUrl(clientId: string, scopes: string[], redirectUri: string, showDialog: string): string;
export function getHash(): Window | object | '';

export default class SpotifyAuth extends React.PureComponent<SpotifyAuthProps> {}
export interface SpotifyAuthProps {
    redirectUri: string;
    clientID: string;
    scopes: string[];
    onAccessToken?: (arg0: string) => void;
    logoClassName?: string;
    title?: string;
    noLogo?: boolean;
    noCookie?: boolean;
    showDialog?: boolean;
    localStorage?: boolean;
    children?: React.ReactNode;
}

export class SpotifyAuthListener extends React.PureComponent<SpotifyAuthListenerProps> {}
export interface SpotifyAuthListenerProps {
    noCookie: boolean;
    localStorage: boolean;
    onAccessToken: () => {};
}

export const Scopes: {
    ugcImageUpload: 'ugc-image-upload',
    userFollowRead: 'user-follow-read',
    userFollowModify: 'user-follow-modify',
    userReadRecentlyPlayed: 'user-read-recently-played',
    userTopRead: 'user-top-read',
    userReadPlaybackPosition: 'user-read-playback-position',
    userLibraryRead: 'user-library-read',
    userLibraryModify: 'user-library-modify',
    userReadPlaybackState: 'user-read-playback-state',
    userReadCurrentlyPlaying: 'user-read-currently-playing',
    userModifyPlaybackState: 'user-modify-playback-state',
    playlistReadCollaborative: 'playlist-read-collaborative',
    playlistModifyPrivate: 'playlist-modify-private',
    playlistModifyPublic: 'playlist-modify-public',
    playlistReadPrivate: 'playlist-read-private',
    streaming: 'streaming',
    appRemoteControl: 'app-remote-control',
    userReadEmail: 'user-read-email',
    userReadPrivate: 'user-read-private'
};
