import * as React from "react";
import {
    ControlBar,
    CurrentTimeDisplay,
    DurationDisplay,
    Player,
    PlayerProps,
    ProgressControl,
    TimeDivider,
} from "video-react";

const testProps: PlayerProps = {
    autoPlay: true,
    crossOrigin: "anonymous",
    videoId: "123",
    onPlay: () => {},
    onEnded: () => {},
    onLoadStart: () => {},
    onPause: () => {},
};

function TestComponent(props: PlayerProps): React.JSX.Element {
    return (
        <div>
            <Player>
                <ControlBar>
                    <CurrentTimeDisplay order={1} />
                    <DurationDisplay order={2} />
                    <ProgressControl order={3} />
                    <TimeDivider order={4} />
                </ControlBar>
            </Player>
            <Player {...testProps}>
                <ControlBar>
                    <CurrentTimeDisplay order={1} />
                    <DurationDisplay order={2} />
                    <ProgressControl order={3} />
                    <TimeDivider order={4} />
                </ControlBar>
            </Player>
        </div>
    );
}
