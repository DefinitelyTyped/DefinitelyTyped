// Type definitions for Leap Motion TS 0.7.9
// Project: https://github.com/logotype/LeapMotionTS
// Definitions by: Victor Norgren <https://github.com/logotype/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped  


export declare class EventDispatcher {
    private _listeners;
    constructor();
    public hasEventListener(type: string, listener: Function): boolean;
    public addEventListener(typeStr: string, listenerFunc: Function): void;
    public removeEventListener(typeStr: string, listenerFunc: Function): void;
    public dispatchEvent(evt: LeapEvent): void;
}

export interface Listener {
    onConnect(controller: Controller): void;
    onDisconnect(controller: Controller): void;
    onExit(controller: Controller): void;
    onFrame(controller: Controller, frame: Frame): void;
    onInit(controller: Controller): void;
}

export declare class DefaultListener extends EventDispatcher implements Listener {
    constructor();
    public onConnect(controller: Controller): void;
    public onDisconnect(controller: Controller): void;
    public onExit(controller: Controller): void;
    public onFrame(controller: Controller, frame: Frame): void;
    public onInit(controller: Controller): void;
}

export declare class LeapEvent {
    static LEAPMOTION_INIT: string;
    static LEAPMOTION_CONNECTED: string;
    static LEAPMOTION_DISCONNECTED: string;
    static LEAPMOTION_EXIT: string;
    static LEAPMOTION_FRAME: string;
    private _type;
    private _target;
    public frame: Frame;
    constructor(type: string, targetListener: Listener, frame?: Frame);
    public getTarget(): any;
    public getType(): string;
}

export declare class LeapUtil {
    static PI: number;
    static DEG_TO_RAD: number;
    static RAD_TO_DEG: number;
    static TWO_PI: number;
    static HALF_PI: number;
    static EPSILON: number;
    constructor();
    static toDegrees(radians: number): number;
    static isNearZero(value: number): boolean;
    static vectorIsNearZero(inVector: Vector3): boolean;
    static extractRotation(mtxTransform: Matrix): Matrix;
    static rotationInverse(mtxRot: Matrix): Matrix;
    static rigidInverse(mtxTransform: Matrix): Matrix;
    static componentWiseMin(vLHS: Vector3, vRHS: Vector3): Vector3;
    static componentWiseMax(vLHS: Vector3, vRHS: Vector3): Vector3;
    static componentWiseScale(vLHS: Vector3, vRHS: Vector3): Vector3;
    static componentWiseReciprocal(inVector: Vector3): Vector3;
    static minComponent(inVector: Vector3): number;
    static maxComponent(inVector: Vector3): number;
    static heading(inVector: Vector3): number;
    static elevation(inVector: Vector3): number;
    static normalizeSpherical(vSpherical: Vector3): Vector3;
    static cartesianToSpherical(vCartesian: Vector3): Vector3;
    static sphericalToCartesian(vSpherical: Vector3): Vector3;
    static clamp(inVal: number, minVal: number, maxVal: number): number;
    static lerp(a: number, b: number, coefficient: number): number;
    static lerpVector(vec1: Vector3, vec2: Vector3, coefficient: number): Vector3;
}

export declare class Controller extends EventDispatcher {
    private listener;
    public frameHistory: Frame[];
    private latestFrame;
    public connection: WebSocket;
    public _isConnected: boolean;
    public _isGesturesEnabled: boolean;
    constructor(host?: string);
    private static getHandByID(frame, id);
    private static getPointableByID(frame, id);
    public frame(history?: number): Frame;
    public setListener(listener: Listener): void;
    public enableGesture(type: number, enable?: boolean): void;
    public isGestureEnabled(type: number): boolean;
    public isConnected(): boolean;
}

export declare class Pointable {
    public direction: Vector3;
    public frame: Frame;
    public hand: Hand;
    public id: number;
    public length: number;
    public width: number;
    public tipPosition: Vector3;
    public tipVelocity: Vector3;
    public isFinger: boolean;
    public isTool: boolean;
    constructor();
    public isValid(): boolean;
    public isEqualTo(other: Pointable): boolean;
    static invalid(): Pointable;
    public toString(): string;
}

export declare class Gesture {
    static STATE_INVALID: number;
    static STATE_START: number;
    static STATE_UPDATE: number;
    static STATE_STOP: number;
    static TYPE_INVALID: number;
    static TYPE_SWIPE: number;
    static TYPE_CIRCLE: number;
    static TYPE_SCREEN_TAP: number;
    static TYPE_KEY_TAP: number;
    public duration: number;
    public durationSeconds: number;
    public frame: Frame;
    public hands: Hand[];
    public id: number;
    public pointables: Pointable[];
    public state: number;
    public type: number;
    constructor();
    public isEqualTo(other: Gesture): boolean;
    public isValid(): boolean;
    static invalid(): Gesture;
    public toString(): string;
}

export declare class Finger extends Pointable {
    constructor();
    static invalid(): Finger;
}

export declare class Tool extends Pointable {
    constructor();
    static invalid(): Tool;
}

export declare class Hand {
    public direction: Vector3;
    public fingers: Finger[];
    public frame: Frame;
    public id: number;
    public palmNormal: Vector3;
    public palmPosition: Vector3;
    public palmVelocity: Vector3;
    public pointables: Pointable[];
    public sphereCenter: Vector3;
    public sphereRadius: number;
    public tools: Tool[];
    public rotation: Matrix;
    public scaleFactorNumber: number;
    public translationVector: Vector3;
    constructor();
    public isValid(): boolean;
    public isEqualTo(other: Hand): boolean;
    public finger(id: number): Finger;
    public tool(id: number): Tool;
    public pointable(id: number): Pointable;
    public rotationAxis(sinceFrame: Frame): Vector3;
    public rotationAngle(sinceFrame: Frame, axis?: Vector3): number;
    public rotationMatrix(sinceFrame: Frame): Matrix;
    public scaleFactor(sinceFrame: Frame): number;
    public translation(sinceFrame: Frame): Vector3;
    static invalid(): Hand;
}

export declare class Frame {
    public fingers: Finger[];
    public hands: Hand[];
    public pointables: Pointable[];
    public _gestures: Gesture[];
    public id: number;
    public timestamp: number;
    public tools: Tool[];
    public rotation: Matrix;
    public scaleFactorNumber: number;
    public translationVector: Vector3;
    public controller: Controller;
    constructor();
    public hand(id: number): Hand;
    public finger(id: number): Finger;
    public tool(id: number): Tool;
    public pointable(id: number): Pointable;
    public gesture(id: number): Gesture;
    public gestures(sinceFrame?: Frame): Gesture[];
    public rotationAxis(sinceFrame: Frame): Vector3;
    public rotationAngle(sinceFrame: Frame, axis?: Vector3): number;
    public rotationMatrix(sinceFrame: Frame): Matrix;
    public scaleFactor(sinceFrame: Frame): number;
    public translation(sinceFrame: Frame): Vector3;
    public isEqualTo(other: Frame): boolean;
    public isValid(): boolean;
    static invalid(): Frame;
}

export declare class Matrix {
    public origin: Vector3;
    public xBasis: Vector3;
    public yBasis: Vector3;
    public zBasis: Vector3;
    constructor(x: Vector3, y: Vector3, z: Vector3, _origin?: Vector3);
    public setRotation(_axis: Vector3, angleRadians: number): void;
    public transformPoint(inVector: Vector3): Vector3;
    public transformDirection(inVector: Vector3): Vector3;
    public rigidInverse(): Matrix;
    public multiply(other: Matrix): Matrix;
    public multiplyAssign(other: Matrix): Matrix;
    public isEqualTo(other: Matrix): boolean;
    static identity(): Matrix;
    public toString(): string;
}

export declare class CircleGesture extends Gesture {
    static classType: number;
    public center: Vector3;
    public normal: Vector3;
    public pointable: Pointable;
    public progress: number;
    public radius: number;
    constructor();
}

export declare class KeyTapGesture extends Gesture {
    static classType: number;
    public direction: Vector3;
    public pointable: Pointable;
    public position: Vector3;
    public progress: number;
    constructor();
}

export declare class ScreenTapGesture extends Gesture {
    static classType: number;
    public direction: Vector3;
    public pointable: Pointable;
    public position: Vector3;
    public progress: number;
    constructor();
}

export declare class SwipeGesture extends Gesture {
    static classType: number;
    public direction: Vector3;
    public pointable: Pointable;
    public position: Vector3;
    public speed: number;
    public startPosition: Vector3;
    constructor();
}

export declare class Vector3 {
    public x: number;
    public y: number;
    public z: number;
    constructor(x: number, y: number, z: number);
    public opposite(): Vector3;
    public plus(other: Vector3): Vector3;
    public plusAssign(other: Vector3): Vector3;
    public minus(other: Vector3): Vector3;
    public minusAssign(other: Vector3): Vector3;
    public multiply(scalar: number): Vector3;
    public multiplyAssign(scalar: number): Vector3;
    public divide(scalar: number): Vector3;
    public divideAssign(scalar: number): Vector3;
    public isEqualTo(other: Vector3): boolean;
    public angleTo(other: Vector3): number;
    public cross(other: Vector3): Vector3;
    public distanceTo(other: Vector3): number;
    public dot(other: Vector3): number;
    public isValid(): boolean;
    static invalid(): Vector3;
    public magnitude(): number;
    public magnitudeSquared(): number;
    public normalized(): Vector3;
    public pitch : number;
    public yaw : number;
    public roll : number;
    static zero(): Vector3;
    static xAxis(): Vector3;
    static yAxis(): Vector3;
    static zAxis(): Vector3;
    static left(): Vector3;
    static right(): Vector3;
    static down(): Vector3;
    static up(): Vector3;
    static forward(): Vector3;
    static backward(): Vector3;
    public toString(): string;
}
