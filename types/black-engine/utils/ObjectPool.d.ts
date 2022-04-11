export class ObjectPool {
    constructor(type: () => void, capacity?: number);
    mReleased: any[];
    mCapacity: number;
    mType: () => void;
    set capacity(arg: number);
    get capacity(): number;
    releaseAll(): void;
    get(): any;
    release(object: any): void;
}
