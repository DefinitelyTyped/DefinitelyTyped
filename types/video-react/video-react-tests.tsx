import * as React from 'react';
import { Player, PlayerProps } from 'video-react';

const testProps: PlayerProps = { autoPlay: true };

const TestComponent: React.StatelessComponent<PlayerProps> = (props: PlayerProps) => {
    return <Player {...testProps} />;
};
