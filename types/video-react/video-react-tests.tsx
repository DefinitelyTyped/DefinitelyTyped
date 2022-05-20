import * as React from 'react';
import { Player, PlayerProps } from 'video-react';

const testProps: PlayerProps = { autoPlay: true };

function TestComponent(props: PlayerProps): JSX.Element {
    return <Player {...testProps} />;
}
