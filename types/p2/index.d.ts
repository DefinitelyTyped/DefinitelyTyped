// Type definitions for p2.js v0.7.1
// Project: https://github.com/schteppe/p2.js/
// Definitions by: Clark Stevenson <https://github.com/clark-stevenson>, Janne Ramstedt <https://github.com/jramstedt>, Alex Brown <https://github.com/JellyAlex>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = p2;
export as namespace p2;

declare namespace p2 {
    export interface AABBOptions {

        upperBound?: [number, number];
        lowerBound?: [number, number];

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

        static AABB: number;
        static BOUNDING_CIRCLE: number;

        static NAIVE: number;
        static SAP: number;

        static boundingRadiusCheck(bodyA: Body, bodyB: Body): boolean;
        static aabbCheck(bodyA: Body, bodyB: Body): boolean;
        static canCollide(bodyA: Body, bodyB: Body): boolean;

        constructor(type: number);

        type: number;
        result: Body[];
        world: World;
        boundingVolumeType: number;

        setWorld(world: World): void;
        getCollisionPairs(world: World): Body[];
        boundingRadiusCheck(bodyA: Body, bodyB: Body): boolean;
        boundingVolumeCheck(bodyA: Body, bodyB: Body): boolean;
        aabbCheck(bodyA: Body, bodyB: Body): boolean;
        canCollide(bodyA: Body, bodyB: Body): boolean;
        aabbQuery(world?: World, aabb?: AABB, result?: Body[]): Body[];

    }

    export class NaiveBroadphase extends Broadphase {
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

        from: [number, number],
        to: [number, number],
        checkCollisionResponse?: boolean;
        skipBackfaces?: boolean;
        collisionMask?: number;
        collisionGroup?: number;
        mode?: number;
        callback?: (result: RaycastResult) => void;

    }

    export class Ray {

        static CLOSEST: number;
        static ANY: number;
        static ALL: number;

        constructor(options?: RayOptions);

        from: [number, number];
        to: [number, number];
        checkCollisionResponse: boolean;
        skipBackfaces: boolean;
        collisionMask: number;
        collisionGroup: number;
        mode: number;
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

        distance?: number;
        localAnchorA?: [number, number];
        localAnchorB?: [number, number];
        maxForce?: number;

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

        angle?: number;
        ratio?: number;
        maxTorque?: number;

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

        localOffsetB?: [number, number];
        localAngleB?: number;
        maxForce?: number;

    }

    export class LockConstraint extends Constraint {

        constructor(bodyA: Body, bodyB: Body, options?: LockConstraintOptions);

        setMaxForce(force: number): void;
        getMaxForce(): number;
        update(): void;

    }

    export interface PrismaticConstraintOptions extends ConstraintOptions {

        maxForce?: number;
        localAnchorA?: [number, number];
        localAnchorB?: [number, number];
        localAxisA?: [number, number];
        disableRotationalLock?: boolean;
        upperLimit?: number;
        lowerLimit?: number;

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

        worldPivot?: [number, number];
        localPivotA?: [number, number];
        localPivotB?: [number, number];
        maxForce?: number;

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

        collideConnected?: boolean;
        wakeUpBodies?: boolean;

    }

    export class Constraint {

        static DISTANCE: number;
        static GEAR: number;
        static LOCK: number;
        static PRISMATIC: number;
        static REVOLUTE: number;

        constructor(bodyA: Body, bodyB: Body, type: number, options?: ConstraintOptions);

        type: number;
        equations: Equation[];
        bodyA: Body;
        bodyB: Body;
        collideConnected: boolean;

        update(): void;
        setStiffness(stiffness: number): void;
        setRelaxation(relaxation: number): void;

    }

    export interface AngleLockEquationOptions {

        angle?: number;
        ratio?: number;

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

        gmult(G: [number, number], vi: [number, number], wi: [number, number], vj: [number, number], wj: [number, number]): number;
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

        angle?: number;

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

        friction?: number;
        restitution?: number;
        stiffness?: number;
        relaxation?: number;
        frictionStiffness?: number;
        frictionRelaxation?: number;
        surfaceVelocity?: number;

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
        static toLocalFrame(out: [number, number], worldPoint: [number, number], framePosition: [number, number], frameAngle: number): void;
        static toGlobalFrame(out: [number, number], localPoint: [number, number], framePosition: [number, number], frameAngle: number): void;
        static vectorToLocalFrame(out: [number, number], worldVector: [number, number], frameAngle: number): void;
        static centroid(out: [number, number], a: [number, number], b: [number, number], c: [number, number]): [number, number];
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
        static getLineSegmentsIntersection(out: [number, number], p1: [number, number], p2: [number, number], p3: [number, number], p4: [number, number]): boolean;
        static getLineSegmentsIntersectionFraction(p1: [number, number], p2: [number, number], p3: [number, number], p4: [number, number]): number;

    }

    export interface BodyOptions {

        force?: [number, number];
        position?: [number, number];
        velocity?: [number, number];
        allowSleep?: boolean;
        collisionResponse?: boolean;
        angle?: number;
        angularDamping?: number;
        angularForce?: number;
        angularVelocity?: number;
        ccdIterations?: number;
        ccdSpeedThreshold?: number;
        fixedRotation?: boolean;
        gravityScale?: number;
        id?: number;
        mass?: number;
        sleepSpeedLimit?: number;
        sleepTimeLimit?: number;
        fixedX?: boolean;
        fixedY?: boolean;

    }

    export class Body extends EventEmitter {

        sleepyEvent: {
            type: string;
        };

        sleepEvent: {
            type: string;
        };

        wakeUpEvent: {
            type: string;
        };

        static DYNAMIC: number;
        static STATIC: number;
        static KINEMATIC: number;
        static AWAKE: number;
        static SLEEPY: number;
        static SLEEPING: number;

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
        type: number;
        boundingRadius: number;
        aabb: AABB;
        aabbNeedsUpdate: boolean;
        allowSleep: boolean;
        sleepState: number;
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
        fromPolygon(path: [number, number][], options?: {
            optimalDecomp?: boolean;
            skipSimpleCheck?: boolean;
            removeCollinearPoints?: boolean | number;
        }): boolean;
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

        restLength?: number;

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

        restAngle?: number

    }

    export class RotationalSpring extends Spring {

        constructor(bodyA: Body, bodyB: Body, options?: RotationalSpringOptions);

        restAngle: number;

    }

    export interface SpringOptions {

        stiffness?: number;
        damping?: number;
        localAnchorA?: [number, number];
        localAnchorB?: [number, number];
        worldAnchorA?: [number, number];
        worldAnchorB?: [number, number];

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

        localForwardVector?: [number, number];
        localPosition?: [number, number];
        sideFriction?: number;

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

    export interface TopDownVehicleOptions {
    }

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

        width?: number;
        height?: number;

    }

    export class Box extends Convex {

        constructor(options?: BoxOptions);

        width: number;
        height: number;

    }

    export interface CapsuleOptions extends SharedShapeOptions {

        length?: number;
        radius?: number;

    }

    export class Capsule extends Shape {

        constructor(options?: CapsuleOptions);

        length: number;
        radius: number;

        computeMomentOfInertia(mass: number): number;
        updateArea(): void;

    }

    export interface CircleOptions extends SharedShapeOptions {

        radius?: number;

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

        vertices?: [number, number]|ArrayLike<number>[];
        axes?: [number, number]|ArrayLike<number>[];

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

        heights?: number[];
        minValue?: number;
        maxValue?: number;
        elementWidth?: number;

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

        length?: number;

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

        position?: [number, number];
        angle?: number;
        collisionGroup?: number;
        collisionMask?: number;
        sensor?: boolean;
        collisionResponse?: boolean;

    }

    export interface ShapeOptions extends SharedShapeOptions {

        type?: number;

    }

    export class Shape {

        static idCounter: number;
        static CIRCLE: number;
        static PARTICLE: number;
        static PLANE: number;
        static CONVEX: number;
        static LINE: number;
        static BOX: number;
        static CAPSULE: number;
        static HEIGHTFIELD: number;

        constructor(options?: ShapeOptions);

        body: Body;
        position: [number, number];
        angle: number;
        type: number;
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

    export interface GSSolverOptions {

        iterations?: number;
        tolerance?: number;

    }

    export class GSSolver extends Solver {

        constructor(options?: GSSolverOptions);

        iterations: number;
        tolerance: number;
        frictionIterations: number;
        usedIterations: number;

        solve(h: number, world: World): void;

    }

    export class Solver extends EventEmitter {

        static GS: number;
        static ISLAND: number;

        constructor(options?: {}, type?: number);

        type: number;
        equations: Equation[];
        equationSortFunction: Equation | boolean

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
        size?: number;
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

    export interface IslandManagerOptions {
    }

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
        solver?: Solver;
        gravity?: [number, number];
        broadphase?: Broadphase;
        islandSplit?: boolean;
    }

    export class World extends EventEmitter {

        postStepEvent: {
            type: string;
        };

        addBodyEvent: {
            type: string;
            body: Body;
        };

        removeBodyEvent: {
            type: string;
            body: Body;
        };

        addSpringEvent: {
            type: string;
            spring: Spring;
        };

        impactEvent: {
            type: string;
            bodyA: Body;
            bodyB: Body;
            shapeA: Shape;
            shapeB: Shape;
            contactEquation: ContactEquation;
        };

        postBroadphaseEvent: {
            type: string;
            pairs: Body[];
        };

        beginContactEvent: {
            type: string;
            shapeA: Shape;
            shapeB: Shape;
            bodyA: Body;
            bodyB: Body;
            contactEquations: ContactEquation[];
        };

        endContactEvent: {
            type: string;
            shapeA: Shape;
            shapeB: Shape;
            bodyA: Body;
            bodyB: Body;
        };

        preSolveEvent: {
            type: string;
            contactEquations: ContactEquation[];
            frictionEquations: FrictionEquation[];
        };

        static NO_SLEEPING: number;
        static BODY_SLEEPING: number;
        static ISLAND_SLEEPING: number;

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
        sleepMode: number;

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
        getBodyByID(id: number): Body; //Body | boolean
        disableBodyCollision(bodyA: Body, bodyB: Body): void;
        enableBodyCollision(bodyA: Body, bodyB: Body): void;
        clear(): void;
        clone(): World;
        hitTest(worldPoint: [number, number], bodies: Body[], precision: number): Body[];
        setGlobalEquationParameters(parameters: {
            relaxation?: number;
            stiffness?: number;
        }): void;
        setGlobalStiffness(stiffness: number): void;
        setGlobalRelaxation(relaxation: number): void;
        raycast(result: RaycastResult, ray: Ray): boolean;

    }

}
