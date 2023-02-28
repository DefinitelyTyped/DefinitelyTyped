export class Timer extends Component {
    constructor(interval?: number, ticksCount?: number, startOnAdded?: boolean);
    private mStartOnAdded;
    private mInterval;
    private mTicksCount;
    private mIsRunning;
    private mTick;
    private mElapsedSeconds;
    private mTotalElapsedSeconds;
    onAdded(): void;
    start(): Timer;
    stop(): Timer;
    pause(): Timer;
    reset(): Timer;
    get ticksLeft(): number;
    get currentTick(): number;
    get elapsedSeconds(): number;
    get secondsToNextTick(): number;
    get isRunning(): boolean;
    get isComplete(): boolean;
    set ticksCount(arg: number);
    get ticksCount(): number;
    set interval(arg: number);
    get interval(): number;
    get totalElapsedSeconds(): number;
    set startOnAdded(arg: boolean);
    get startOnAdded(): boolean;
}
import { Component } from '../core/Component';
