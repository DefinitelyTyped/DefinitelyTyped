import * as React from 'react';
import {
    ControlBar,
    CurrentTimeDisplay,
    DurationDisplay,
    Player,
    PlayerProps,
    ProgressControl,
    TimeDivider,
} from 'video-react';

const testProps: PlayerProps = { autoPlay: true };

function TestComponent(props: PlayerProps): JSX.Element {
    return (
        <Player {...testProps}>
            <ControlBar>
                <CurrentTimeDisplay order={1} />
                <DurationDisplay order={2} />
                <ProgressControl order={3} />
                <TimeDivider order={4} />
            </ControlBar>
        </Player>
    );
}
