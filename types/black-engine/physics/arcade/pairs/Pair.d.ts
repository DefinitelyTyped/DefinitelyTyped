import { Collider } from '../../../colliders/Collider';
import { RigidBody } from '../../../physics/RigidBody';

export class Pair {
    static __id(a: Collider, b: Collider): string;
    static set timeToSleep(arg: number);
    static get timeToSleep(): number;
    static set slop(arg: number);
    static get slop(): number;
    static set baumgarte(arg: number);
    static get baumgarte(): number;
    static set unitsPerMeter(arg: number);
    static get unitsPerMeter(): number;
    static set sleepThreshold(arg: number);
    static get sleepThreshold(): number;
    static set bounceTreshhold(arg: number);
    static get bounceTreshhold(): number;
    a: Collider | null;
    b: Collider | null;
    bodyA: RigidBody | null;
    bodyB: RigidBody | null;
    private mInCollision;
    private mIsStatic;
    private mNormalImpulse;
    private mTangentImpulse;
    private mPositionImpulse;
    private mFriction;
    private mBias;
    private mMass;
    private mOffset;
    private mNormal;
    private mOverlap;
    private mChanged;
    test(): boolean;
    preSolve(): void;
    solveVelocity(): void;
    solvePosition(): void;
}
