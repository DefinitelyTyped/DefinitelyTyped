export class Time {
    private mTime;
    private mActualTime;
    private mDeltaTimeMs;
    private mDeltaTime;
    private mScale;
    private mAlphaTime;
    private mRenderOffset;
    get now(): number;
    get dt(): number;
    get alpha(): number;
    get delta(): number;
    set scale(arg: number);
    get scale(): number;
}
