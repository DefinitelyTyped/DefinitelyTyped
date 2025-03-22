import * as React from "react";
import SpotifyAuth, { Scopes, SpotifyAuthListener, SpotifyAuthListenerProps, SpotifyAuthProps } from 'react-spotify-auth';

export class SpotifyAuthTest extends React.PureComponent {
    render(): JSX.Element {
        const props: SpotifyAuthProps = {
            redirectUri: 'localhost:1',
            clientID: 'test',
            scopes: [Scopes.streaming]
        };
        return (<SpotifyAuth {...props}>
            <div></div>
        </SpotifyAuth>
        );
    }
}

export class SpotifyAuthListenerTest extends React.PureComponent {
    render(): JSX.Element {
        const props: SpotifyAuthListenerProps = {
            noCookie: false,
            localStorage: false,
            onAccessToken() { return {}; }
        };

        return (
            <SpotifyAuthListener {...props}>
                <div></div>
            </SpotifyAuthListener>
        );
    }
}
