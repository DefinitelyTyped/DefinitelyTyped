// Type definitions for p2.js v0.7.1
// Project: https://github.com/schteppe/p2.js/
// Definitions by: Clark Stevenson <https://github.com/clark-stevenson>, Janne Ramstedt <https://github.com/jramstedt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = p2;
export as namespace p2;

declare namespace p2 {
    export interface AABBOptions {
        upperBound?: [number, number] | undefined;
        lowerBound?: [number, number] | undefined;
    }

    export class AABB {
        constructor(options?: AABBOptions);

        lowerBound: [number, number];
        upperBound: [number, number];

        setFromPoints(points: [number, number][], position: [number, number], angle?: number, skinSize?: number): void;
        copy(aabb: AABB): void;
        extend(aabb: AABB): void;
        overlaps(aabb: AABB): boolean;
        containsPoint(point: [number, number]): boolean;
        overlapsRay(ray: Ray): number;
    }

    export class Broadphase {
        static AABB: 1;
        static BOUNDING_CIRCLE: 2;

        static NAIVE: 1;
        static SAP: 2;

        static boundingRadiusCheck(bodyA: Body, bodyB: Body): boolean;
        static aabbCheck(bodyA: Body, bodyB: Body): boolean;
        static canCollide(bodyA: Body, bodyB: Body): boolean;

        constructor(type: typeof Broadphase.NAIVE | typeof Broadphase.SAP);

        type: typeof Broadphase.NAIVE | typeof Broadphase.SAP;
        result: Body[];
        world: World;
        boundingVolumeType: typeof Broadphase.AABB | typeof Broadphase.BOUNDING_CIRCLE;

        setWorld(world: World): void;
        getCollisionPairs(world: World): Body[];
        boundingRadiusCheck(bodyA: Body, bodyB: Body): boolean;
        boundingVolumeCheck(bodyA: Body, bodyB: Body): boolean;
        aabbCheck(bodyA: Body, bodyB: Body): boolean;
        canCollide(bodyA: Body, bodyB: Body): boolean;
        aabbQuery(world?: World, aabb?: AABB, result?: Body[]): Body[];
    }

    export class NaiveBroadphase extends Broadphase {
        type: typeof Broadphase.NAIVE;
    }

    export class Narrowphase {
        contactEquations: ContactEquation[];
        frictionEquations: FrictionEquation[];
        enableFriction: boolean;
        enabledEquations: boolean;
        slipForce: number;
        contactEquationPool: ContactEquationPool;
        frictionEquationPool: FrictionEquationPool;
        enableFrictionReduction: boolean;
        collidingBodiesLastStep: TupleDictionary;
        currentContactMaterial: ContactMaterial;

        bodiesOverlap(bodyA: Body, bodyB: Body, checkCollisionMasks?: boolean): boolean;
        collidedLastStep(bodyA: Body, bodyB: Body): boolean;
        reset(): void;
        createContactEquation(bodyA: Body, bodyB: Body, shapeA: Shape, shapeB: Shape): ContactEquation;
        createFrictionEquation(bodyA: Body, bodyB: Body, shapeA: Shape, shapeB: Shape): FrictionEquation;
        createFrictionFromContact(c: ContactEquation): FrictionEquation;
    }

    export interface RayOptions {
        from: [number, number];
        to: [number, number];
        checkCollisionResponse?: boolean | undefined;
        skipBackfaces?: boolean | undefined;
        collisionMask?: number | undefined;
        collisionGroup?: number | undefined;
        mode?: typeof Ray.CLOSEST | typeof Ray.ANY | typeof Ray.ALL | undefined;
        callback?: ((result: RaycastResult) => void) | undefined;
    }

    export class Ray {
        static CLOSEST: 1;
        static ANY: 2;
        static ALL: 4;

        constructor(options?: RayOptions);

        from: [number, number];
        to: [number, number];
        checkCollisionResponse: boolean;
        skipBackfaces: boolean;
        collisionMask: number;
        collisionGroup: number;
        mode: typeof Ray.CLOSEST | typeof Ray.ANY | typeof Ray.ALL;
        callback: (result: RaycastResult) => void;
        direction: [number, number];
        length: number;

        update(): void;
        intersectBodies(result: RaycastResult, bodies: Body[]): void;
        getAABB(): AABB;
    }

    export class RaycastResult {
        normal: [number, number];
        shape: Shape;
        body: Body;
        faceIndex: number;
        fraction: number;
        isStopped: boolean;

        reset(): void;
        getHitDistance(ray: Ray): number;
        hasHit(): boolean;
        getHitPoint(out: [number, number], ray: Ray): void;
        stop(): void;
        shouldStop(ray: Ray): boolean;
        set(normal: [number, number], shape: Shape, body: Body, friction: number, faceIndex: number): void;
    }

    export class SAPBroadphase extends Broadphase {
        axisList: Body[];
        axisIndex: number;

        setWorld(world: World): void;
    }

    export interface DistanceConstraintOptions extends ConstraintOptions {
        distance?: number | undefined;
        localAnchorA?: [number, number] | undefined;
        localAnchorB?: [number, number] | undefined;
        maxForce?: number | undefined;
    }

    export class DistanceConstraint extends Constraint {
        constructor(bodyA: Body, bodyB: Body, options?: DistanceConstraintOptions);

        localAnchorA: [number, number];
        localAnchorB: [number, number];
        distance: number;
        maxForce: number;
        upperLimitEnabled: boolean;
        upperLimit: number;
        lowerLimitEnabled: boolean;
        lowerLimit: number;
        position: number;

        setMaxForce(maxForce: number): void;
        getMaxForce(): number;
        update(): void;
    }

    export interface GearConstraintOptions extends ConstraintOptions {
        angle?: number | undefined;
        ratio?: number | undefined;
        maxTorque?: number | undefined;
    }

    export class GearConstraint extends Constraint {
        constructor(bodyA: Body, bodyB: Body, options?: GearConstraintOptions);

        ratio: number;
        angle: number;

        setMaxTorque(torque: number): void;
        getMaxTorque(): number;
        update(): void;
    }

    export interface LockConstraintOptions extends ConstraintOptions {
        localOffsetB?: [number, number] | undefined;
        localAngleB?: number | undefined;
        maxForce?: number | undefined;
    }

    export class LockConstraint extends Constraint {
        constructor(bodyA: Body, bodyB: Body, options?: LockConstraintOptions);

        setMaxForce(force: number): void;
        getMaxForce(): number;
        update(): void;
    }

    export interface PrismaticConstraintOptions extends ConstraintOptions {
        maxForce?: number | undefined;
        localAnchorA?: [number, number] | undefined;
        localAnchorB?: [number, number] | undefined;
        localAxisA?: [number, number] | undefined;
        disableRotationalLock?: boolean | undefined;
        upperLimit?: number | undefined;
        lowerLimit?: number | undefined;
    }

    export class PrismaticConstraint extends Constraint {
        constructor(bodyA: Body, bodyB: Body, options?: PrismaticConstraintOptions);

        localAnchorA: [number, number];
        localAnchorB: [number, number];
        localAxisA: [number, number];
        position: number;
        velocity: number;
        lowerLimitEnabled: boolean;
        upperLimitEnabled: boolean;
        lowerLimit: number;
        upperLimit: number;
        upperLimitEquation: ContactEquation;
        lowerLimitEquation: ContactEquation;
        motorEquation: Equation;
        motorEnabled: boolean;
        motorSpeed: number;

        enableMotor(): void;
        disableMotor(): void;
        setLimits(lower: number, upper: number): void;
        update(): void;
    }

    export interface RevoluteConstraintOptions extends ConstraintOptions {
        worldPivot?: [number, number] | undefined;
        localPivotA?: [number, number] | undefined;
        localPivotB?: [number, number] | undefined;
        maxForce?: number | undefined;
    }

    export class RevoluteConstraint extends Constraint {
        constructor(bodyA: Body, bodyB: Body, options?: RevoluteConstraintOptions);

        angle: number;
        lowerLimitEnabled: boolean;
        upperLimitEnabled: boolean;
        lowerLimit: number;
        upperLimit: number;

        setLimits(lower: number, upper: number): void;
        update(): void;

        motorEnabled: boolean;
        motorSpeed: number;
        motorMaxForce: number;

        enableMotor(): void;
        disableMotor(): void;
        motorIsEnabled(): boolean;
        setMotorSpeed(speed: number): void;
        getMotorSpeed(): number;
    }

    export interface ConstraintOptions {
        collideConnected?: boolean | undefined;
        wakeUpBodies?: boolean | undefined;
    }

    export class Constraint {
        static DISTANCE: 1;
        static GEAR: 2;
        static LOCK: 3;
        static PRISMATIC: 4;
        static REVOLUTE: 5;

        constructor(
            bodyA: Body,
            bodyB: Body,
            type:
                | typeof Constraint.DISTANCE
                | typeof Constraint.GEAR
                | typeof Constraint.LOCK
                | typeof Constraint.PRISMATIC
                | typeof Constraint.REVOLUTE,
            options?: ConstraintOptions,
        );

        type:
            | typeof Constraint.DISTANCE
            | typeof Constraint.GEAR
            | typeof Constraint.LOCK
            | typeof Constraint.PRISMATIC
            | typeof Constraint.REVOLUTE;
        equations: Equation[];
        bodyA: Body;
        bodyB: Body;
        collideConnected: boolean;

        update(): void;
        setStiffness(stiffness: number): void;
        setRelaxation(relaxation: number): void;
    }

    export interface AngleLockEquationOptions {
        angle?: number | undefined;
        ratio?: number | undefined;
    }

    export class AngleLockEquation extends Equation {
        constructor(bodyA: Body, bodyB: Body, options?: AngleLockEquationOptions);

        angle: number;
        ratio: number;

        setRatio(ratio: number): number;
        setMaxTorque(torque: number): void;
    }

    export class ContactEquation extends Equation {
        constructor(bodyA: Body, bodyB: Body);

        contactPointA: [number, number];
        penetrationVec: [number, number];
        contactPointB: [number, number];
        normalA: [number, number];
        restitution: number;
        firstImpact: boolean;
        shapeA: Shape;
        shapeB: Shape;

        computeB(a: number, b: number, h: number): number;
        getVelocityAlongNormal(): number;
    }

    export class Equation {
        static DEFAULT_STIFFNESS: number;
        static DEFAULT_RELAXATION: number;

        constructor(bodyA: Body, bodyB: Body, minForce?: number, maxForce?: number);

        minForce: number;
        maxForce: number;
        bodyA: Body;
        bodyB: Body;
        stiffness: number;
        relaxation: number;
        G: [number, number];
        epsilon: number;
        timeStep: number;
        needsUpdate: boolean;
        multiplier: number;
        relativeVelocity: number;
        enabled: boolean;

        gmult(
            G: [number, number],
            vi: [number, number],
            wi: [number, number],
            vj: [number, number],
            wj: [number, number],
        ): number;
        computeB(a: number, b: number, h: number): number;
        computeGq(): number;
        computeGW(): number;
        computeGWlambda(): number;
        computeGiMf(): number;
        computeGiMGt(): number;
        addToWlambda(deltalambda: number): number;
        computeInvC(eps: number): number;
        update(): void;
    }

    export class FrictionEquation extends Equation {
        constructor(bodyA: Body, bodyB: Body, slipForce: number);

        contactPointA: [number, number];
        contactPointB: [number, number];
        t: [number, number];
        contactEquations: ContactEquation[];
        shapeA: Shape;
        shapeB: Shape;
        frictionCoefficient: number;

        setSlipForce(slipForce: number): void;
        getSlipForce(): number;
    }

    export interface RotationalLockEquationOptions {
        angle?: number | undefined;
    }

    export class RotationalLockEquation extends Equation {
        constructor(bodyA: Body, bodyB: Body, options?: RotationalLockEquationOptions);

        angle: number;
    }

    export class RotationalVelocityEquation extends Equation {
        constructor(bodyA: Body, bodyB: Body);

        computeB(a: number, b: number, h: number): number;
    }

    export class EventEmitter {
        on(type: string, listener: Function, context?: any): EventEmitter;
        has(type: string, listener: Function): boolean;
        off(type: string, listener: Function): EventEmitter;
        emit(event: any): EventEmitter;
    }

    export interface ContactMaterialOptions {
        friction?: number | undefined;
        restitution?: number | undefined;
        stiffness?: number | undefined;
        relaxation?: number | undefined;
        frictionStiffness?: number | undefined;
        frictionRelaxation?: number | undefined;
        surfaceVelocity?: number | undefined;
    }

    export class ContactMaterial {
        static idCounter: number;

        constructor(materialA: Material, materialB: Material, options?: ContactMaterialOptions);

        id: number;
        materialA: Material;
        materialB: Material;
        friction: number;
        restitution: number;
        stiffness: number;
        relaxation: number;
        frictionStuffness: number;
        frictionRelaxation: number;
        surfaceVelocity: number;
        contactSkinSize: number;
    }

    export class Material {
        static idCounter: number;

        constructor(id?: number);

        id: number;
    }

    export class vec2 {
        static crossLength(a: [number, number], b: [number, number]): number;
        static crossVZ(out: [number, number], vec: [number, number], zcomp: number): [number, number];
        static crossZV(out: [number, number], zcomp: number, vec: [number, number]): [number, number];
        static rotate(out: [number, number], a: [number, number], angle: number): void;
        static rotate90cw(out: [number, number], a: [number, number]): void;
        static toLocalFrame(
            out: [number, number],
            worldPoint: [number, number],
            framePosition: [number, number],
            frameAngle: number,
        ): void;
        static toGlobalFrame(
            out: [number, number],
            localPoint: [number, number],
            framePosition: [number, number],
            frameAngle: number,
        ): void;
        static vectorToLocalFrame(out: [number, number], worldVector: [number, number], frameAngle: number): void;
        static centroid(
            out: [number, number],
            a: [number, number],
            b: [number, number],
            c: [number, number],
        ): [number, number];
        static create(): [number, number];
        static clone(a: [number, number]): [number, number];
        static fromValues(x: number, y: number): [number, number];
        static copy(out: [number, number], a: [number, number]): [number, number];
        static set(out: [number, number], x: number, y: number): [number, number];
        static add(out: [number, number], a: [number, number], b: [number, number]): [number, number];
        static subtract(out: [number, number], a: [number, number], b: [number, number]): [number, number];
        static sub(out: [number, number], a: [number, number], b: [number, number]): [number, number];
        static multiply(out: [number, number], a: [number, number], b: [number, number]): [number, number];
        static mul(out: [number, number], a: [number, number], b: [number, number]): [number, number];
        static divide(out: [number, number], a: [number, number], b: [number, number]): [number, number];
        static div(out: [number, number], a: [number, number], b: [number, number]): [number, number];
        static scale(out: [number, number], a: [number, number], b: number): [number, number];
        static distance(a: [number, number], b: [number, number]): number;
        static dist(a: [number, number], b: [number, number]): number;
        static squaredDistance(a: [number, number], b: [number, number]): number;
        static sqrDist(a: [number, number], b: [number, number]): number;
        static length(a: [number, number]): number;
        static len(a: [number, number]): number;
        static squaredLength(a: [number, number]): number;
        static sqrLen(a: [number, number]): number;
        static negate(out: [number, number], a: [number, number]): [number, number];
        static normalize(out: [number, number], a: [number, number]): [number, number];
        static dot(a: [number, number], b: [number, number]): number;
        static str(a: [number, number]): string;
        static lerp(out: [number, number], a: [number, number], b: [number, number], t: number): [number, number];
        static reflect(out: [number, number], vector: [number, number], normal: [number, number]): void;
        static getLineSegmentsIntersection(
            out: [number, number],
            p1: [number, number],
            p2: [number, number],
            p3: [number, number],
            p4: [number, number],
        ): boolean;
        static getLineSegmentsIntersectionFraction(
            p1: [number, number],
            p2: [number, number],
            p3: [number, number],
            p4: [number, number],
        ): number;
    }

    export interface BodyOptions {
        type?: typeof Body.DYNAMIC | typeof Body.STATIC | typeof Body.KINEMATIC | undefined;
        force?: [number, number] | undefined;
        position?: [number, number] | undefined;
        velocity?: [number, number] | undefined;
        allowSleep?: boolean | undefined;
        collisionResponse?: boolean | undefined;
        angle?: number | undefined;
        angularDamping?: number | undefined;
        angularForce?: number | undefined;
        angularVelocity?: number | undefined;
        ccdIterations?: number | undefined;
        ccdSpeedThreshold?: number | undefined;
        damping?: number | undefined;
        fixedRotation?: boolean | undefined;
        gravityScale?: number | undefined;
        id?: number | undefined;
        mass?: number | undefined;
        sleepSpeedLimit?: number | undefined;
        sleepTimeLimit?: number | undefined;
        fixedX?: boolean | undefined;
        fixedY?: boolean | undefined;
    }

    export type SleepyEvent = Body['sleepyEvent'];
    export type SleepEvent = Body['sleepEvent'];
    export type WakeUpEvent = Body['wakeUpEvent'];

    export class Body extends EventEmitter {
        sleepyEvent: {
            type: 'sleepy';
        };

        sleepEvent: {
            type: 'sleep';
        };

        wakeUpEvent: {
            type: 'wakeup';
        };

        static DYNAMIC: 1;
        static STATIC: 2;
        static KINEMATIC: 4;

        static AWAKE: 0;
        static SLEEPY: 1;
        static SLEEPING: 2;

        constructor(options?: BodyOptions);

        id: number;
        world: World;
        shapes: Shape[];
        mass: number;
        invMass: number;
        inertia: number;
        invInertia: number;
        invMassSolve: number;
        invInertiaSolve: number;
        fixedRotation: boolean;
        fixedX: boolean;
        fixedY: boolean;
        position: [number, number];
        interpolatedPosition: [number, number];
        previousPosition: [number, number];
        velocity: [number, number];
        vlambda: [number, number];
        wlambda: [number, number];
        angle: number;
        previousAngle: number;
        interpolatedAngle: number;
        angularVelocity: number;
        force: [number, number];
        angularForce: number;
        damping: number;
        angularDamping: number;
        type: typeof Body.DYNAMIC | typeof Body.STATIC | typeof Body.KINEMATIC;
        boundingRadius: number;
        aabb: AABB;
        aabbNeedsUpdate: boolean;
        allowSleep: boolean;
        sleepState: typeof Body.AWAKE | typeof Body.SLEEPY | typeof Body.SLEEPING;
        sleepSpeedLimit: number;
        sleepTimeLimit: number;
        gravityScale: number;
        collisionResponse: boolean;
        idleTime: number;
        ccdSpeedThreshold: number;
        ccdIterations: number;

        updateSolveMassProperties(): void;
        setDensity(density: number): void;
        getArea(): number;
        getAABB(): AABB;
        updateAABB(): void;
        updateBoundingRadius(): void;
        addShape(shape: Shape, offset?: [number, number], angle?: number): void;
        removeShape(shape: Shape): boolean;
        updateMassProperties(): void;
        applyForce(force: [number, number], relativePoint?: [number, number]): void;
        applyForceLocal(localForce: [number, number], localPoint?: [number, number]): void;
        applyImpulse(impulseVector: [number, number], relativePoint?: [number, number]): void;
        applyImpulseLocal(localImpulse: [number, number], localPoint?: [number, number]): void;
        toLocalFrame(out: [number, number], worldPoint: [number, number]): void;
        toWorldFrame(out: [number, number], localPoint: [number, number]): void;
        vectorToLocalFrame(out: [number, number], worldVector: [number, number]): void;
        vectorToWorldFrame(out: [number, number], localVector: [number, number]): void;
        fromPolygon(
            path: [number, number][],
            options?: {
                optimalDecomp?: boolean | undefined;
                skipSimpleCheck?: boolean | undefined;
                removeCollinearPoints?: boolean | number | undefined;
            },
        ): boolean;
        adjustCenterOfMass(): void;
        setZeroForce(): void;
        applyDamping(dt: number): void;
        wakeUp(): void;
        sleep(): void;
        sleepTick(time: number, dontSleep: boolean, dt: number): void;
        overlaps(body: Body): boolean;
        integrate(dy: number): void;
        getVelocityAtPoint(result: [number, number], relativePoint: [number, number]): [number, number];
    }

    export interface LinearSpringOptions extends SpringOptions {
        restLength?: number | undefined;
    }

    export class LinearSpring extends Spring {
        constructor(bodyA: Body, bodyB: Body, options?: LinearSpringOptions);

        localAnchorA: [number, number];
        localAnchorB: [number, number];
        restLength: number;

        setWorldAnchorA(worldAnchorA: [number, number]): void;
        setWorldAnchorB(worldAnchorB: [number, number]): void;
        getWorldAnchorA(result: [number, number]): [number, number];
        getWorldAnchorB(result: [number, number]): [number, number];
        applyForce(): void;
    }

    export interface RotationalSpringOptions extends SpringOptions {
        restAngle?: number | undefined;
    }

    export class RotationalSpring extends Spring {
        constructor(bodyA: Body, bodyB: Body, options?: RotationalSpringOptions);

        restAngle: number;
    }

    export interface SpringOptions {
        stiffness?: number | undefined;
        damping?: number | undefined;
        localAnchorA?: [number, number] | undefined;
        localAnchorB?: [number, number] | undefined;
        worldAnchorA?: [number, number] | undefined;
        worldAnchorB?: [number, number] | undefined;
    }

    export class Spring {
        constructor(bodyA: Body, bodyB: Body, options?: SpringOptions);

        stiffness: number;
        damping: number;
        bodyA: Body;
        bodyB: Body;

        applyForce(): void;
    }

    export interface WheelConstraintOptions {
        localForwardVector?: [number, number] | undefined;
        localPosition?: [number, number] | undefined;
        sideFriction?: number | undefined;
    }

    export class WheelConstraint extends Constraint {
        constructor(vehicle: TopDownVehicle, options?: WheelConstraintOptions);

        protected vehicle: TopDownVehicle;
        protected forwardEquation: FrictionEquation;
        protected sideEquation: FrictionEquation;

        steerValue: number;
        engineForce: number;
        localForwardVector: [number, number];
        localPosition: [number, number];

        setBrakeForce(force: number): void;
        setSideFriction(force: number): void;

        getSpeed(): number;

        update(): void;
    }

    export interface TopDownVehicleOptions {}

    export class TopDownVehicle {
        constructor(chasisBody: Body, options?: TopDownVehicleOptions);

        chasisBody: Body;
        wheels: WheelConstraint[];
        world: World;

        addToWorld(world: World): void;
        removeFromWorld(): void;
        addWheel(wheelOptions?: WheelConstraintOptions): WheelConstraint;

        update(): void;
    }

    export interface BoxOptions extends SharedShapeOptions {
        width?: number | undefined;
        height?: number | undefined;
    }

    export class Box extends Convex {
        constructor(options?: BoxOptions);

        width: number;
        height: number;
    }

    export interface CapsuleOptions extends SharedShapeOptions {
        length?: number | undefined;
        radius?: number | undefined;
    }

    export class Capsule extends Shape {
        constructor(options?: CapsuleOptions);

        length: number;
        radius: number;

        computeMomentOfInertia(mass: number): number;
        updateArea(): void;
    }

    export interface CircleOptions extends SharedShapeOptions {
        radius?: number | undefined;
    }

    export class Circle extends Shape {
        constructor(options?: CircleOptions);

        radius: number;
        computeMomentOfInertia(mass: number): number;
        updateArea(): void;
        computeAABB(out: AABB, position: [number, number]): void;
        raycast(result: RaycastResult, ray: Ray, position: [number, number]): void;
    }

    export interface ConvexOptions extends SharedShapeOptions {
        vertices?: ([number, number] | ArrayLike<number>)[] | undefined;
        axes?: ([number, number] | ArrayLike<number>)[] | undefined;
    }

    export class Convex extends Shape {
        static triangleArea(a: number[], b: number[], c: number[]): number;

        constructor(options?: ConvexOptions);

        vertices: [number, number][];
        axes: [number, number][];
        centerOfMass: [number, number];
        triangles: [[number, number], [number, number], [number, number]];
        boundingRadius: number;

        projectOntoLocalAxis(localAxis: number[], result: number[]): void;
        projectOntoWorldAxis(localAxis: number[], shapeOffset: number[], shapeAngle: number, result: number[]): void;

        updateCenterOfMass(): void;
        updateNormals(): void;
        updateTriangles(): void;
        computeMomentOfInertia(mass: number): number;
        updateArea(): void;
        computeAABB(out: AABB, position: [number, number], angle: number): void;
    }

    export interface HeightfieldOptions extends SharedShapeOptions {
        heights?: number[] | undefined;
        minValue?: number | undefined;
        maxValue?: number | undefined;
        elementWidth?: number | undefined;
    }

    export class Heightfield extends Shape {
        constructor(options?: HeightfieldOptions);

        heights: number[];
        maxValue: number;
        minValue: number;
        elementWidth: number;

        updateMaxMinValues(): void;
        computeMomentOfInertia(): number;
        updateArea(): void;
        computeAABB(out: AABB, position: [number, number], angle: number): void;
    }

    export interface LineOptions extends SharedShapeOptions {
        length?: number | undefined;
    }

    export class Line extends Shape {
        constructor(options?: LineOptions);

        length: number;

        computeMomentOfInertia(mass: number): number;
        computeAABB(out: AABB, position: [number, number], angle: number): void;
    }

    export class Particle extends Shape {
        constructor(options?: SharedShapeOptions);

        computeMomentOfInertia(): number;
        computeAABB(out: AABB, position: [number, number]): void;
    }

    export class Plane extends Shape {
        constructor(options?: SharedShapeOptions);

        updateArea(): void;
    }

    export interface SharedShapeOptions {
        position?: [number, number] | undefined;
        angle?: number | undefined;
        collisionGroup?: number | undefined;
        collisionMask?: number | undefined;
        sensor?: boolean | undefined;
        collisionResponse?: boolean | undefined;
    }

    export interface ShapeOptions extends SharedShapeOptions {
        type?:
            | typeof Shape.CIRCLE
            | typeof Shape.PARTICLE
            | typeof Shape.PLANE
            | typeof Shape.CONVEX
            | typeof Shape.LINE
            | typeof Shape.BOX
            | typeof Shape.CAPSULE
            | typeof Shape.HEIGHTFIELD
            | undefined;
    }

    export class Shape {
        static idCounter: number;

        static CIRCLE: 1;
        static PARTICLE: 2;
        static PLANE: 4;
        static CONVEX: 8;
        static LINE: 16;
        static BOX: 32;
        static CAPSULE: 64;
        static HEIGHTFIELD: 128;

        constructor(options?: ShapeOptions);

        body: Body;
        position: [number, number];
        angle: number;
        type:
            | typeof Shape.CIRCLE
            | typeof Shape.PARTICLE
            | typeof Shape.PLANE
            | typeof Shape.CONVEX
            | typeof Shape.LINE
            | typeof Shape.BOX
            | typeof Shape.CAPSULE
            | typeof Shape.HEIGHTFIELD;
        id: number;
        boundingRadius: number;
        collisionGroup: number;
        collisionResponse: boolean;
        collisionMask: number;
        material: Material;
        area: number;
        sensor: boolean;

        computeMomentOfInertia(mass?: number): number;
        updateBoundingRadius(): number;
        updateArea(): void;
        computeAABB(out?: AABB, position?: [number, number], angle?: number): void;
        raycast(result?: RaycastResult, ray?: Ray, position?: [number, number], angle?: number): void;
    }

    export interface GSSolverOptions extends SolverOptions {
        iterations?: number | undefined;
        tolerance?: number | undefined;
        frictionIterations?: number | undefined;
    }

    export class GSSolver extends Solver {
        constructor(options?: GSSolverOptions);

        type: typeof Solver.GS;

        iterations: number;
        tolerance: number;
        frictionIterations: number;
        usedIterations: number;

        solve(h: number, world: World): void;
    }

    export interface SolverOptions {
        equationSortFunction?: Equation | undefined;
    }

    export class Solver extends EventEmitter {
        static GS: 1;

        constructor(options: SolverOptions | undefined, type: typeof Solver.GS);

        type: number;
        equations: Equation[];
        equationSortFunction: Equation | boolean;

        solve(dt: number, world: World): void;
        solveIsland(dt: number, island: Island): void;
        sortEquations(): void;
        addEquation(eq: Equation): void;
        addEquations(eqs: Equation[]): void;
        removeEquation(eq: Equation): void;
        removeAllEquations(): void;
    }

    export class ContactEquationPool extends Pool {
        create(): ContactEquation;
        destroy(equation: ContactEquation): ContactEquationPool;
    }

    export class FrictionEquationPool extends Pool {
        create(): FrictionEquation;
        destroy(equation: FrictionEquation): FrictionEquationPool;
    }

    export class IslandNodePool extends Pool {
        create(): IslandNode;
        destroy(node: IslandNode): IslandNodePool;
    }

    export class IslandPool extends Pool {
        create(): Island;
        destroy(island: Island): IslandPool;
    }

    export class OverlapKeeper {
        constructor();

        overlappingShapesLastState: TupleDictionary;
        overlappingShapesCurrentState: TupleDictionary;
        OverlapKeeperRecordPool: OverlapKeeperRecordPool;
        tmpDict: TupleDictionary;
        tmpArray1: any[];

        shapeA: Shape;
        shapeB: Shape;
        bodyA: Body;
        bodyB: Body;

        tick(): void;
        setOverlapping(bodyA: Body, shapeA: Shape, bodyB: Body, shapeB: Body): void;
        bodiesAreOverlapping(bodyA: Body, bodyB: Body): boolean;
    }

    export class OverlapKeeperRecord {
        shapeA: Shape;
        shapeB: Shape;
        bodyA: Body;
        bodyB: Body;

        constructor(bodyA: Body, shapeA: Shape, bodyB: Body, shapeB: Shape);

        set(bodyA: Body, shapeA: Shape, bodyB: Body, shapeB: Shape): void;
    }

    export class OverlapKeeperRecordPool extends Pool {
        create(): OverlapKeeperRecord;
        destroy(record: OverlapKeeperRecord): OverlapKeeperRecordPool;
    }

    export interface PoolOptions {
        size?: number | undefined;
    }

    export class Pool {
        objects: any[];

        constructor(options?: PoolOptions);

        resize(size: number): Pool;
        get(): any;
        release(object: any): Pool;
    }

    export class TupleDictionary {
        data: any;
        keys: number[];

        getKey(id1: number, id2: number): string;
        getByKey(key: number): any;
        get(i: number, j: number): number;
        set(i: number, j: number, value: number): number;
        reset(): void;
        copy(dict: TupleDictionary): void;
    }

    export class Utils {
        static appendArray<T>(a: Array<T>, b: Array<T>): Array<T>;
        static splice<T>(array: Array<T>, index: number, howMany: number): void;
        static arrayRemove<T>(array: Array<T>, element: number): void;
        static extend(a: any, b: any): void;
        static defaults(options: any, defaults: any): any;
        static shallowClone<T>(obj: T): T;
    }

    export class Island {
        equations: Equation[];
        bodies: Body[];

        reset(): void;
        getBodies(result: any[]): Body[];
        wantsToSleep(): boolean;
        sleep(): boolean;
    }

    export interface IslandManagerOptions {}

    export class IslandManager extends Solver {
        static getUnvisitedNode(nodes: IslandNode[]): IslandNode | Boolean;

        constructor(options?: IslandManagerOptions);

        equations: Equation[];
        islands: Island[];
        nodes: IslandNode[];

        visit(node: IslandNode, bds: Body[], eqs: Equation[]): void;
        bfs(root: IslandNode, bds: Body[], eqs: Equation[]): void;
        split(world: World): Island[];
    }

    export class IslandNode {
        constructor(body: Body);

        body: Body;
        neighbors: IslandNode[];
        equations: Equation[];
        visited: boolean;

        reset(): void;
    }

    export interface WorldOptions {
        solver?: Solver | undefined;
        gravity?: [number, number] | undefined;
        broadphase?: Broadphase | undefined;
        islandSplit?: boolean | undefined;
    }

    export type PostStepEvent = World['postStepEvent'];
    export type AddBodyEvent = World['addBodyEvent'];
    export type RemoveBodyEvent = World['removeBodyEvent'];
    export type AddSpringEvent = World['addSpringEvent'];
    export type ImpactEvent = World['impactEvent'];
    export type PostBroadphaseEvent = World['postBroadphaseEvent'];
    export type BeginContactEvent = World['beginContactEvent'];
    export type EndContactEvent = World['endContactEvent'];
    export type PreSolveEvent = World['preSolveEvent'];

    export class World extends EventEmitter {
        postStepEvent: {
            type: 'postStep';
        };

        addBodyEvent: {
            type: 'addBody';
            body: Body;
        };

        removeBodyEvent: {
            type: 'removeBody';
            body: Body;
        };

        addSpringEvent: {
            type: 'addSpring';
            spring: Spring;
        };

        impactEvent: {
            type: 'impact';
            bodyA: Body;
            bodyB: Body;
            shapeA: Shape;
            shapeB: Shape;
            contactEquation: ContactEquation;
        };

        postBroadphaseEvent: {
            type: 'postBroadphase';
            pairs: Body[];
        };

        beginContactEvent: {
            type: 'beginContact';
            shapeA: Shape;
            shapeB: Shape;
            bodyA: Body;
            bodyB: Body;
            contactEquations: ContactEquation[];
        };

        endContactEvent: {
            type: 'endContact';
            shapeA: Shape;
            shapeB: Shape;
            bodyA: Body;
            bodyB: Body;
        };

        preSolveEvent: {
            type: 'preSolve';
            contactEquations: ContactEquation[];
            frictionEquations: FrictionEquation[];
        };

        static NO_SLEEPING: 1;
        static BODY_SLEEPING: 2;
        static ISLAND_SLEEPING: 4;

        //static integrateBody(body: Body, dy: number): void;

        constructor(options?: WorldOptions);

        springs: Spring[];
        bodies: Body[];
        solver: Solver;
        narrowphase: Narrowphase;
        islandManager: IslandManager;
        gravity: [number, number];
        frictionGravity: number;
        useWorldGravityAsFrictionGravity: boolean;
        useFrictionGravityOnZeroGravity: boolean;
        doProfiling: boolean;
        lastStepTime: number;
        broadphase: Broadphase;
        constraints: Constraint[];
        defaultMaterial: Material;
        defaultContactMaterial: ContactMaterial;
        lastTimeStep: number;
        applySpringForces: boolean;
        applyDamping: boolean;
        applyGravity: boolean;
        solveConstraints: boolean;
        contactMaterials: ContactMaterial[];
        time: number;
        accumulator: number;
        stepping: boolean;
        islandSplit: boolean;
        emitImpactEvent: boolean;
        sleepMode: typeof World.NO_SLEEPING | typeof World.BODY_SLEEPING | typeof World.ISLAND_SLEEPING;

        addConstraint(c: Constraint): void;
        addContactMaterial(contactMaterial: ContactMaterial): void;
        getContactMaterial(materialA: Material, materialB: Material): ContactMaterial; // ContactMaterial | boolean
        removeConstraint(constraint: Constraint): void;
        removeContactMaterial(cm: ContactMaterial): void;
        step(dt: number, timeSinceLastCalled?: number, maxSubSteps?: number): void;
        addSpring(spring: Spring): void;
        removeSpring(spring: Spring): void;
        addBody(body: Body): void;
        removeBody(body: Body): void;
        /** @returns The body, or false if it was not found. */
        getBodyById(id: number): Body | false;
        disableBodyCollision(bodyA: Body, bodyB: Body): void;
        enableBodyCollision(bodyA: Body, bodyB: Body): void;
        clear(): void;
        clone(): World;
        hitTest(worldPoint: [number, number], bodies: Body[], precision: number): Body[];
        setGlobalEquationParameters(parameters: {
            relaxation?: number | undefined;
            stiffness?: number | undefined;
        }): void;
        setGlobalStiffness(stiffness: number): void;
        setGlobalRelaxation(relaxation: number): void;
        raycast(result: RaycastResult, ray: Ray): boolean;
    }
}
