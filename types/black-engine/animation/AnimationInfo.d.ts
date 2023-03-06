export class AnimationInfo {
    constructor(controller: AnimationController, name: string, frames: Texture[], fps?: number, loop?: boolean);
    private mController;
    private mName;
    private mFrames;
    private mCurrentFrame;
    private mNextFrameAt;
    private mFPS;
    private mFrameDuration;
    private mLoop;
    private mPaused;
    private mElapsed;
    private mStopped;
    private mCompleted;
    __play(): Texture;
    __stop(): void;
    __pause(): void;
    __update(): Texture | null;
    set fps(arg: number);
    get fps(): number;
    set loop(arg: boolean);
    get loop(): boolean;
    get frames(): Texture[];
    get isPlaying(): boolean;
    get isComplete(): boolean;
    get name(): string;
}
import { Texture } from '../textures/Texture';
import { AnimationController } from './AnimationController';
