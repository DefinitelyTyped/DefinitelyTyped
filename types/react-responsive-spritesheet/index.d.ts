// Type definitions for react-responsive-spritesheet 1.0
// Project: https://github.com/danilosetra/react-responsive-spritesheet
// Definitions by: Michael Liu <https://github.com/triangularcube>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
import * as CSS from 'csstype';

declare class ReactResponsiveSpritesheet extends React.Component<ReactResponsiveSpritesheet.Props> {
    play(): void;
    pause(): void;
    goToAndPlay(frame: number): void;
    goToAndPause(frame: number): void;
    setStartAt(frame: number): void;
    setEndAt(frame: number): void;
    setFps(fps: number): void;
    setDirection(direction: ReactResponsiveSpritesheet.Direction): void;
    getInfo(type: ReactResponsiveSpritesheet.NumberInfoType): number;
    getInfo(type: ReactResponsiveSpritesheet.BooleanInfoType): boolean;
    getInfo(type: 'direction'): ReactResponsiveSpritesheet.Direction;
}

declare namespace ReactResponsiveSpritesheet {
    interface Props {
        className?: string;
        style?: CSS.Properties;
        image: string;
        widthFrame: number;
        heightFrame: number;
        steps: number;
        fps: number;
        direction: Direction;
        timeout?: number;
        autoplay?: boolean;
        loop?: boolean;
        isResponsive?: boolean;
        startAt?: number;
        endAt?: number;
        background?: string;
        backgroundSize?: CSS.Property.BackgroundSize;
        backgroundRepeat?: CSS.Property.BackgroundRepeat;
        backgroundPosition?: CSS.Property.BackgroundPosition;
        getInstance?: Callback;
        onClick?: Callback;
        onDoubleClick?: Callback;
        onMouseMove?: Callback;
        onMouseEnter?: Callback;
        onMouseLeave?: Callback;
        onMouseOver?: Callback;
        onMouseOut?: Callback;
        onMouseDown?: Callback;
        onMouseUp?: Callback;
        onInit?: Callback;
        onResize?: Callback;
        onPlay?: Callback;
        onPause?: Callback;
        onLoopComplete?: Callback;
        onEachFrame?: Callback;
        onEnterFrame?: Array<{
            frame: number;
            callback: () => void;
        }>;
    }

    type Callback = (spritesheet: ReactResponsiveSpritesheet) => void;
    type Direction = 'forward' | 'rewind';
    type NumberInfoType = 'frame' | 'fps' | 'steps' | 'width' | 'height' | 'scale' | 'completeLoopCicles';
    type BooleanInfoType = 'isPlaying' | 'isPaused';
}

export default ReactResponsiveSpritesheet;
