import * as CSS from "csstype";
import * as React from "react";

export default class ReactResponsiveSpritesheet extends React.Component<Props> {
    play(): void;
    pause(): void;
    goToAndPlay(frame: number): void;
    goToAndPause(frame: number): void;
    setStartAt(frame: number): void;
    setEndAt(frame: number): void;
    setFps(fps: number): void;
    setDirection(direction: Direction): void;
    getInfo(type: NumberInfoType): number;
    getInfo(type: BooleanInfoType): boolean;
    getInfo(type: "direction"): Direction;
}

export interface Props {
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

export type Callback = (spritesheet: ReactResponsiveSpritesheet) => void;
export type Direction = "forward" | "rewind";
export type NumberInfoType = "frame" | "fps" | "steps" | "width" | "height" | "scale" | "completeLoopCicles";
export type BooleanInfoType = "isPlaying" | "isPaused";
