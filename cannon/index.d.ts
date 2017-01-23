// Type definitions for cannon
// Project: https://github.com/clark-stevenson/cannon.d.ts
// Definitions by: Clark Stevenson <https://github.com/clark-stevenson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module CANNON {

    export interface IAABBOptions {

        upperBound?: Vec3;
        lowerBound?: Vec3;

    }

    export class AABB {

        lowerBound: Vec3;
        upperBound: Vec3;

        constructor(options?: IAABBOptions);

        clone() : AABB;
        setFromPoints(points: Vec3[], position?: Vec3, quaternion?: Quaternion, skinSize?: number): void;
        copy(aabb: AABB): void;
        extend(aabb: AABB): void;
        getCorners( a: Vec3, b: Vec3, c: Vec3, d: Vec3, e: Vec3, f: Vec3, g: Vec3, h: Vec3 ) : void;
        overlaps(aabb: AABB): boolean;
        toLocalFrame( frame: Transform, target: AABB ) : AABB;
        toWorldFrame( frame: Transform, target: AABB ) : AABB;
    }

    export class ArrayCollisionMatrix {

        matrix: Mat3[];

        get(i: number, j: number): number;
        set(i: number, j: number, value?: number): void;
        reset(): void;
        setNumObjects(n: number): void;

    }

    export class Broadphase {

        world: World;
        useBoundingBoxes: boolean;
        dirty: boolean;

        collisionPairs(world: World, p1: Body[], p2: Body[]): void;
        needBroadphaseCollision(bodyA: Body, bodyB: Body): boolean;
        intersectionTest(bodyA: Body, bodyB: Body, pairs1: Body[], pairs2: Body[]): void;
        doBoundingSphereBroadphase(bodyA: Body, bodyB: Body, pairs1: Body[], pairs2: Body[]): void;
        doBoundingBoxBroadphase(bodyA: Body, bodyB: Body, pairs1: Body[], pairs2: Body[]): void;
        makePairsUnique(pairs1: Body[], pairs2: Body[]): void;
        setWorld(world: World): void;
        boundingSphereCheck(bodyA: Body, bodyB: Body): boolean;
        aabbQuery(world: World, aabb: AABB, result: Body[]): Body[];

    }

    export class GridBroadphase extends Broadphase {

        nx: number;
        ny: number;
        nz: number;
        aabbMin: Vec3;
        aabbMax: Vec3;
        bins: any[];

        constructor(aabbMin?: Vec3, aabbMax?: Vec3, nx?: number, ny?: number, nz?: number);

    }

    export class NaiveBroadphase extends Broadphase {
    }

    export class ObjectCollisionMatrix {

        matrix: number[];

        get(i: number, j: number): number;
        set(i: number, j: number, value: number): void;
        reset(): void;
        setNumObjects(n: number): void;

    }

    export interface IRayIntersectWorldOptions {

        mode: number;
        result: boolean;
        skipBackfaces: boolean;
        collisionFilterMask: number;
        collisionFilterGroup: number;
        from: Vec3;
        to: Vec3;
        callback: Function;

    }

    export class Ray {

        static CLOSEST: number;
        static ANY: number;
        static ALL: number;

        from: Vec3;
        to: Vec3;
        precision: number;
        checkCollisionResponse: boolean;
        callback: Function;
        collisionFilterGroup: number;
        collisionFilterMask: number;
        hasHit: boolean;
        mode: number;
        result: RaycastResult;
        skipBackfaces: boolean;

        constructor(from?: Vec3, to?: Vec3);

        getAABB(result: RaycastResult): void;
        intersectBodies(bodies: Body[], result?: RaycastResult): void;
        intersectWorld(world: World, options: IRayIntersectWorldOptions): boolean;

    }

    export class RaycastResult {

        rayFromWorld: Vec3;
        rayToWorld: Vec3;
        hitNormalWorld: Vec3;
        hitPointWorld: Vec3;
        hitFaceIndex: number;
        hasHit: boolean;
        shape: Shape;
        body: Body;
        distance: number;

        abort(): void;
        reset(): void;
        set(rayFromWorld: Vec3, rayToWorld: Vec3, hitNormalWorld: Vec3, hitPointWorld: Vec3, shape: Shape, body: Body, distance: number): void;

    }

    export class SAPBroadphase extends Broadphase {

        static insertionSortX(a: any[]): any[];
        static insertionSortY(a: any[]): any[];
        static insertionSortZ(a: any[]): any[];
        static checkBounds(bi: Body, bj: Body, axisIndex?: number): boolean;

        axisList: any[];
        world: World;
        axisIndex: number;

        constructor(world?: World);

        autoDetectAxis(): void;
        aabbQuery(world: World, aabb: AABB, result?: Body[]): Body[];

    }

    export interface IConstraintOptions {

        collideConnected?: boolean;
        wakeUpBodies?: boolean;

    }

    export class Constraint {

        equations: any[];
        bodyA: Body;
        bodyB: Body;
        id: number;
        collideConnected: boolean;

        constructor(bodyA: Body, bodyB: Body, options?: IConstraintOptions);

        update(): void;
        disable(): void;
        enable(): void;

    }

    export class DistanceConstraint extends Constraint {

        distance: number;
        distanceEquation: ContactEquation;

        constructor(bodyA: Body, bodyB: Body, distance?: number, maxForce?: number);

    }

    export interface IHingeConstraintOptions {

        pivotA?: Vec3;
        axisA?: Vec3;
        pivotB?: Vec3;
        axisB?: Vec3;
        maxForce?: number;

    }

    export class HingeConstraint extends Constraint {

        axisA: Vec3;
        axisB: Vec3;
        rotationalEquation1: RotationalEquation;
        rotationalEquation2: RotationalEquation;
        motorEnabled: boolean;
        motorTargetVelocity: number;
        motorMinForce: number;
        motorMaxForce: number;
        motorEquation: RotationalMotorEquation;

        constructor(bodyA: Body, bodyB: Body, options?: IHingeConstraintOptions);

        enableMotor(): void;
        disableMotor(): void;
        setMotorMaxForce(maxForce: number): void;
        setMotorSpeed(speed: number): void;

    }

    export class PointToPointConstraint extends Constraint {

        equationX: ContactEquation;
        equationY: ContactEquation;
        equationZ: ContactEquation;
        pivotA: Vec3;
        pivotB: Vec3;

        constructor(bodyA: Body, pivotA: Vec3, bodyB: Body, pivotB: Vec3, maxForce?: number);

    }

    export class ConeTwistConstraint extends PointToPointConstraint {

        coneEquation: ConeEquation;
        twistEquation: RotationalEquation;

        constructor(bodyA: Body, bodyB: Body, options?: IHingeConstraintOptions);

    }

    export class LockConstraint extends PointToPointConstraint {

        rotationalEquation1: RotationalEquation;
        rotationalEquation2: RotationalEquation;
        rotationalEquation3: RotationalEquation;

        constructor(bodyA: Body, bodyB: Body, maxForce?: number);

    }

    export class Equation {

        id: number;
        minForce: number;
        maxForce: number;
        bi: Body;
        bj: Body;
        a: number;
        b: number;
        eps: number;
        jacobianElementA: JacobianElement;
        jacobianElementB: JacobianElement;
        enabled: boolean;

        constructor(bi: Body, bj: Body, minForce?: number, maxForce?: number);

        setSpookParams(stiffness: number, relaxation: number, timeStep: number): void;
        computeB(a: number, b: number, h: number): number;
        computeGq(): number;
        computeGW(): number;
        computeGWlamda(): number;
        computeGiMf(): number;
        computeGiMGt(): number;
        addToWlamda(deltalambda: number): number;
        computeC(): number;
        computeInvC( eps: number ): number;
    }

    export class FrictionEquation extends Equation {

        constructor(bi: Body, bj: Body, slipForce: number);

    }

    export interface IRotationalEquationOptions {

        axisA?: Vec3;
        axisB?: Vec3;
        maxForce?: number;

    }

    export class RotationalEquation extends Equation {

        ni: Vec3;
        nj: Vec3;
        nixnj: Vec3;
        njxni: Vec3;
        invIi: Mat3;
        invIj: Mat3;
        relVel: Vec3;
        relForce: Vec3;

        constructor(bodyA: Body, bodyB: Body, options?: IRotationalEquationOptions);

    }

    export class RotationalMotorEquation extends Equation {

        axisA: Vec3;
        axisB: Vec3;
        invLi: Mat3;
        invIj: Mat3;
        targetVelocity: number;

        constructor(bodyA: Body, bodyB: Body, maxForce?: number);

    }

    export interface IConeEquationOptions {

        axisA?: Vec3;
        axisB?: Vec3;
        maxForce?: number;

    }

    export class ConeEquation extends Equation {

        angle: number;

        constructor(bodyA: Body, bodyB: Body, options?: IConeEquationOptions);

    }

    export class ContactEquation extends Equation {

        restitution: number;
        ri: Vec3;
        rj: Vec3;
        ni: Vec3;

        constructor(bi: Body, bj: Body);

        getImpactVelocityAlongNormal(): number;

    }

    export interface IContactMaterialOptions {

        friction?: number;
        restitution?: number;
        contactEquationStiffness?: number;
        contactEquationRelaxation?: number;
        frictionEquationStiffness?: number;
        frictionEquationRelaxation?: number;

    }

    export class ContactMaterial {

        id: number;
        materials: Material[];
        friction: number;
        restitution: number;
        contactEquationStiffness: number;
        contactEquationRelaxation: number;
        frictionEquationStiffness: number;
        frictionEquationRelaxation: number;

        constructor(m1: Material, m2: Material, options?: IContactMaterialOptions);

    }

    export class Material {

        id: number;
        name: string;
        friction: number;
        restitution: number;

        constructor(name?: string);

    }

    export class JacobianElement {

        spatial: Vec3;
        rotational: Vec3;

        multiplyElement(element: JacobianElement): number;
        multiplyVectors(spacial: Vec3, rotational: Vec3): number;

    }

    export class Mat3 {

        elements: number[];

        constructor(elements?: number[]);

        identity(): void;
        setZero(): void;
        setTrace(vec3: Vec3): void;
        getTrace(target: Vec3): void;
        vmult(v: Vec3, target?: Vec3): Vec3;
        smult(s: number): void;
        mmult(m: Mat3): Mat3;
        scale(v: Vec3, target?: Mat3): Mat3;
        solve(b: Vec3, target?: Vec3): Vec3;
        e(row: number, column: number, value?: number): number;
        copy(source: Mat3): Mat3;
        toString(): string;
        reverse(target?: Mat3): Mat3;
        setRotationFromQuaternion(q: Quaternion): Mat3;
        transpose(target?: Mat3): Mat3;

    }

    export class Trimesh extends Shape {

        aabb: AABB;
        edges: number[];
        indices: number[];
        normals: number[];
        scale: Vec3;
        tree: Octree;
        vertices: number[];

        static computeNormal(va: Vec3, vb: Vec3, vc: Vec3, target: Vec3): void;
        static createTorus(radius?: number, tube?: number, radialSegments?: number, tubularSegments?: number, arc?: number): Trimesh;

        constructor(vertices: number[], indices: number[]);

        calculateWorldAABB(pos: Vec3, quat: Quaternion, min: Vec3, max: Vec3): void;
        computeLocalAABB(aabb: AABB): void;
        getEdgeVector(edgeIndex: number, vectorStore: Vec3): void;
        getEdgeVertex(edgeIndex: number, firstOrSecond: number, vertexStore: Vec3): void;
        getNormal(i: number, target: Vec3): Vec3;
        getTrianglesAABB(aabb: AABB, result: number[]): void;
        getTriangleVertices(i: number, a: Vec3, b: Vec3, c: Vec3): void;
        getVertex(i: number, out: Vec3): Vec3;
        getWorldVertex(i: number, pos: Vec3, quat: Quaternion, out: Vec3): Vec3;
        setScale(scale: Vec3): void;
        updateAABB(): void;
        updateEdges(): void;
        updateNormals(): void;
        updateTree(): void;

    }

    export class Quaternion {

        x: number;
        y: number;
        z: number;
        w: number;

        constructor(x?: number, y?: number, z?: number, w?: number);

        set(x: number, y: number, z: number, w: number): void;
        toString(): string;
        toArray(): number[];
        setFromAxisAngle(axis: Vec3, angle: number): void;
        toAxisAngle(targetAxis?: Vec3): any[];
        setFromVectors(u: Vec3, v: Vec3): void;
        mult(q: Quaternion, target?: Quaternion): Quaternion;
        inverse(target?: Quaternion): Quaternion;
        conjugate(target?: Quaternion): Quaternion;
        normalize(): void;
        normalizeFast(): void;
        vmult(v: Vec3, target?: Vec3): Vec3;
        copy(source: Quaternion): Quaternion;
        toEuler(target: Vec3, order?: string): void;
        setFromEuler(x: number, y: number, z: number, order?: string): Quaternion;
        clone(): Quaternion;

    }

    export class Transform {

        static pointToLocalFrame(position: Vec3, quaternion: Quaternion, worldPoint: Vec3, result?: Vec3): Vec3;
        static pointToWorldFrame(position: Vec3, quaternion: Quaternion, localPoint: Vec3, result?: Vec3): Vec3;
        static vectorToWorldFrame(quaternion: Quaternion, localVector: Vec3, result: Vec3): Vec3;
        static vectorToLocalFrame(position: Vec3, quaternion: Quaternion, worldVector: Vec3, result?: Vec3): Vec3;

        position: Vec3;
        quaternion: Quaternion;

        pointToLocal(point: Vec3, result: Vec3): Vec3;
        pointToWorld(point: Vec3, result: Vec3): Vec3;

    }

    export class Vec3 {

        static ZERO: Vec3;
        static UNIT_X: Vec3;
        static UNIT_Y: Vec3;
        static UNIT_Z: Vec3;

        x: number;
        y: number;
        z: number;

        constructor(x?: number, y?: number, z?: number);

        cross(v: Vec3, target?: Vec3): Vec3;
        set(x: number, y: number, z: number): Vec3;
        setZero(): void;
        vadd(v: Vec3, target?: Vec3): Vec3;
        vsub(v: Vec3, target?: Vec3): Vec3;
        crossmat(): Mat3;
        normalize(): number;
        unit(target?: Vec3): Vec3;
        norm(): number;
        norm2(): number;
        distanceTo(p: Vec3): number;
        distanceSquared(p: Vec3): number;
        mult(scalar: number, target?: Vec3): Vec3;
        scale(scalar: number, target?: Vec3): Vec3;
        dot(v: Vec3): number;
        isZero(): boolean;
        negate(target?: Vec3): Vec3;
        tangents(t1: Vec3, t2: Vec3): void;
        toString(): string;
        toArray(): number[];
        copy(source: Vec3): Vec3;
        length(): number;
        lengthSquared(): number;
        lerp(v: Vec3, t: number, target?: Vec3): void;
        almostEquals(v: Vec3, precision?: number): boolean;
        almostZero(precision?: number): boolean;
        isAntiparallelTo(v: Vec3, prescision?: number): boolean;
        clone(): Vec3;

    }

    export interface IBodyOptions {

        position?: Vec3;
        velocity?: Vec3;
        angularVelocity?: Vec3;
        quaternion?: Quaternion;
        mass?: number;
        material?: Material;
        type?: number;
        linearDamping?: number;
        angularDamping?: number;
        allowSleep?: boolean;
        sleepSpeedLimit?: number;
        sleepTimeLimit?: number;
        collisionFilterGroup?: number;
        collisionFilterMask?: number;
        fixedRotation?: boolean;
        shape?: Shape;

    }

    export class Body extends EventTarget {

        static DYNAMIC: number;
        static STATIC: number;
        static KINEMATIC: number;
        static AWAKE: number;
        static SLEEPY: number;
        static SLEEPING: number;
        static sleepyEvent: IEvent;
        static sleepEvent: IEvent;

        id: number;
        world: World;
        preStep: Function;
        postStep: Function;
        vlambda: Vec3;
        collisionFilterGroup: number;
        collisionFilterMask: number;
        collisionResponse: boolean;
        position: Vec3;
        previousPosition: Vec3;
        initPosition: Vec3;
        boundingRadius: number;
        velocity: Vec3;
        initVelocity: Vec3;
        force: Vec3;
        mass: number;
        invMass: number;
        material: Material;
        linearDamping: number;
        type: number;
        allowSleep: boolean;
        sleepState: number;
        sleepSpeedLimit: number;
        sleepTimeLimit: number;
        timeLastSleepy: number;
        torque: Vec3;
        quaternion: Quaternion;
        initQuaternion: Quaternion;
        angularVelocity: Vec3;
        initAngularVelocity: Vec3;
        interpolatedPosition: Vec3;
        interpolatedQuaternion: Quaternion;
        shapes: Shape[];
        shapeOffsets: any[];
        shapeOrentiations: any[];
        inertia: Vec3;
        invInertia: Vec3;
        invInertiaWorld: Mat3;
        invMassSolve: number;
        invInertiaSolve: Vec3;
        invInteriaWorldSolve: Mat3;
        fixedRotation: boolean;
        angularDamping: number;
        aabb: AABB;
        aabbNeedsUpdate: boolean;
        wlambda: Vec3;

        constructor(options?: IBodyOptions);

        wakeUp(): void;
        sleep(): void;
        sleepTick(time: number): void;
        pointToLocalFrame(worldPoint: Vec3, result?: Vec3): Vec3;
        pointToWorldFrame(localPoint: Vec3, result?: Vec3): Vec3;
        vectorToLocalFrame(worldPoint: Vec3, result?: Vec3): Vec3;
        vectorToWorldFrame(localVector: Vec3, result?: Vec3): Vec3;
        addShape(shape: Shape, offset?: Vec3, orientation?: Vec3): void;
        computeAABB(): void;
        applyForce(force: Vec3, worldPoint: Vec3): void;
        applyImpulse(impulse: Vec3, worldPoint: Vec3): void;
        applyLocalForce(force: Vec3, localPoint: Vec3): void;
        applyLocalImplse(impulse: Vec3, localPoint: Vec3): void;
        updateBoundingRadius(): void;
        updateMassProperties(): void;
        updateInertiaWorld(force: Vec3): void;
        updateSolveMassProperties(): void;
        getVelocityAtWorldPoint(worldPoint: Vec3, result: Vec3): Vec3;

    }

    export interface IWheelInfoOptions {

        chassisConnectionPointLocal?: Vec3;
        chassisConnectionPointWorld?: Vec3;
        directionLocal?: Vec3;
        directionWorld?: Vec3;
        axleLocal?: Vec3;
        axleWorld?: Vec3;
        suspensionRestLength?: number;
        suspensionMaxLength?: number;
        radius?: number;
        suspensionStiffness?: number;
        dampingCompression?: number;
        dampingRelaxation?: number;
        frictionSlip?: number;
        steering?: number;
        rotation?: number;
        deltaRotation?: number;
        rollInfluence?: number;
        maxSuspensionForce?: number;
        isFrontWheel?: boolean;
        clippedInvContactDotSuspension?: number;
        suspensionRelativeVelocity?: number;
        suspensionForce?: number;
        skidInfo?: number;
        suspensionLength?: number;
        maxSuspensionTravel?: number;
        useCustomSlidingRotationalSpeed?: boolean;
        customSlidingRotationalSpeed?: number;

        position?: Vec3;
        direction?: Vec3;
        axis?: Vec3;
        body?: Body;

    }

    export class WheelInfo {

        axleLocal: Vec3;
        axleWorld: Vec3;
        brake: number;
        chassisConnectionPointLocal: Vec3;
        chassisConnectionPointWorld: Vec3;
        clippedInvContactDotSuspension: number;
        customSlidingRotationalSpeed: number;
        dampingCompression: number;
        dampingRelaxation: number;
        deltaRotation: number;
        directionLocal: Vec3;
        directionWorld: Vec3;
        engineForce: number;
        forwardImpulse: number;
        frictionSlip: number;
        isFrontWheel: boolean;
        isInContact: boolean;
        maxSuspensionForce: number;
        maxSuspensionTravel: number;
        radius: number;
        raycastResult: RaycastResult;
        rollInfluence: number;
        rotation: number;
        sideImpulse: number;
        skidInfo: number;
        sliding: boolean;
        steering: number;
        suspensionForce: number;
        suspensionLength: number;
        suspensionMaxLength: number;
        suspensionRelativeVelocity: number;
        suspensionStiffness: number;
        suspensionRestLength: number;
        useCustomSlidingRotationalSpeed: boolean;
        worldTransform: Transform;

        constructor(options?: IWheelInfoOptions);

    }

    export interface IRaycastVehicleOptions {

        chassisBody?: Body;
        indexRightAxis?: number;
        indexLeftAxis?: number;
        indexUpAxis?: number;

    }

    export class RaycastVehicle {

        chassisBody: Body;
        wheelInfos: IWheelInfoOptions[];
        sliding: boolean;
        world: World;
        iindexRightAxis: number;
        indexForwardAxis: number;
        indexUpAxis: number;

        constructor(options?: IRaycastVehicleOptions);

        addWheel(options?: IWheelInfoOptions): void;
        setSteeringValue(value: number, wheelIndex: number): void;
        applyEngineForce(value: number, wheelIndex: number): void;
        setBrake(brake: number, wheelIndex: number): void;
        addToWorld(world: World): void;
        getVehicleAxisWorld(axisIndex: number, result: Vec3): Vec3;
        updateVehicle(timeStep: number): void;
        updateSuspension(deltaTime: number): void;
        updateWheelTransform(wheelIndex: number): void;
        removeFromWorld(world: World): void;
        getWheelTransformWorld(wheelIndex: number): Transform;

    }

    export interface IRigidVehicleOptions {

        chassisBody: Body;

    }

    export class RigidVehicle {

        wheelBodies: Body[];
        coordinateSystem: Vec3;
        chassisBody: Body;
        constraints: Constraint[];
        wheelAxes: Vec3[];
        wheelForces: Vec3[];

        constructor(options?: IRigidVehicleOptions);

        addWheel(options?: IWheelInfoOptions): Body;
        setSteeringValue(value: number, wheelIndex: number): void;
        setMotorSpeed(value: number, wheelIndex: number): void;
        disableMotor(wheelIndex: number): void;
        setWheelForce(value: number, wheelIndex: number): void;
        applyWheelForce(value: number, wheelIndex: number): void;
        addToWorld(world: World): void;
        removeFromWorld(world: World): void;
        getWheelSpeed(wheelIndex: number): number;

    }

    export class SPHSystem {

        particles: Particle[];
        density: number;
        smoothingRadius: number;
        speedOfSound: number;
        viscosity: number;
        eps: number;
        pressures: number[];
        densities: number[];
        neighbors: number[];

        add(particle: Particle): void;
        remove(particle: Particle): void;
        getNeighbors(particle: Particle, neighbors: Particle[]): void;
        update(): void;
        w(r: number): number;
        gradw(rVec: Vec3, resultVec: Vec3): void;
        nablaw(r: number): number;

    }

    export interface ISpringOptions {

        restLength?: number;
        stiffness?: number;
        damping?: number;
        worldAnchorA?: Vec3;
        worldAnchorB?: Vec3;
        localAnchorA?: Vec3;
        localAnchorB?: Vec3;

    }

    export class Spring {

        restLength: number;
        stffness: number;
        damping: number;
        bodyA: Body;
        bodyB: Body;
        localAnchorA: Vec3;
        localAnchorB: Vec3;

        constructor(options?: ISpringOptions);

        setWorldAnchorA(worldAnchorA: Vec3): void;
        setWorldAnchorB(worldAnchorB: Vec3): void;
        getWorldAnchorA(result: Vec3): void;
        getWorldAnchorB(result: Vec3): void;
        applyForce(): void;

    }

    export class Box extends Shape {

        static calculateInertia(halfExtents: Vec3, mass: number, target: Vec3): void;

        halfExtents: Vec3;
        convexPolyhedronRepresentation: ConvexPolyhedron;

        constructor(halfExtents: Vec3);

        updateConvexPolyhedronRepresentation(): void;
        getSideNormals(sixTargetVectors: boolean, quat?: Quaternion): Vec3[];
        forEachWorldCorner(pos: Vec3, quat: Quaternion, callback: Function): void;

    }

    export class ConvexPolyhedron extends Shape {

        static computeNormal(va: Vec3, vb: Vec3, vc: Vec3, target: Vec3): void;
        static project(hull: ConvexPolyhedron, axis: Vec3, pos: Vec3, quat: Quaternion, result: number[]): void;
        static getFaceNormal(va: Vec3, vb: Vec3, vc: Vec3, target: Vec3): void;

        vertices: Vec3[];
        worldVertices: Vec3[];
        worldVerticesNeedsUpdate: boolean;
        faces: number[];
        faceNormals: Vec3[];
        uniqueEdges: Vec3[];
        uniqueAxes: Vec3[];

        constructor(points?: Vec3[], faces?: number[]);

        computeEdges(): void;
        computeNormals(): void;
        getFaceNormal(i: number, target: Vec3): Vec3;
        clipAgainstHull(posA: Vec3, quatA: Quaternion, hullB: Vec3, quatB: Quaternion, separatingNormal: Vec3, minDist: number, maxDist: number, result: any[]): void;
        findSeparatingAxis(hullB: ConvexPolyhedron, posA: Vec3, quatA: Quaternion, posB: Vec3, quatB: Quaternion, target: Vec3, faceListA: any[], faceListB: any[]): boolean;
        testSepAxis(axis: Vec3, hullB: ConvexPolyhedron, posA: Vec3, quatA: Quaternion, posB: Vec3, quatB: Quaternion): number;
        getPlaneConstantOfFace(face_i: number): number;
        clipFaceAgainstHull(separatingNormal: Vec3, posA: Vec3, quatA: Quaternion, worldVertsB1: Vec3[], minDist: number, maxDist: number, result: any[]): void;
        clipFaceAgainstPlane(inVertices: Vec3[], outVertices: Vec3[], planeNormal: Vec3, planeConstant: number): Vec3;
        computeWorldVertices(position: Vec3, quat: Quaternion): void;
        computeLocalAABB(aabbmin: Vec3, aabbmax: Vec3): void;
        computeWorldFaceNormals(quat: Quaternion): void;
        calculateWorldAABB(pos: Vec3, quat: Quaternion, min: Vec3, max: Vec3): void;
        getAveragePointLocal(target: Vec3): Vec3;
        transformAllPoints(offset: Vec3, quat: Quaternion): void;
        pointIsInside(p: Vec3): boolean;

    }

    export class Cylinder extends ConvexPolyhedron {

        constructor(radiusTop: number, radiusBottom: number, height: number, numSegments: number);

    }

    export interface IHightfieldOptions {

        minValue?: number;
        maxValue?: number;
        elementSize: number;

    }

    export class Heightfield extends Shape {

        data: number[];
        maxValue: number;
        minValue: number;
        elementSize: number;
        cacheEnabled: boolean;
        pillarConvex: ConvexPolyhedron;
        pillarOffset: Vec3;
        type: number;

        constructor(data: number[], options?: IHightfieldOptions);

        update(): void;
        updateMinValue(): void;
        updateMaxValue(): void;
        setHeightValueAtIndex(xi: number, yi: number, value: number): void;
        getRectMinMax(iMinX: number, iMinY: number, iMaxX: number, iMaxY: number, result: any[]): void;
        getIndexOfPosition(x: number, y: number, result: any[], clamp: boolean): boolean;
        getConvexTrianglePillar(xi: number, yi: number, getUpperTriangle: boolean): void;

    }

    export class Particle extends Shape {

    }

    export class Plane extends Shape {

        worldNormal: Vec3;
        worldNormalNeedsUpdate: boolean;
        boundingSphereRadius: number;

        computeWorldNormal(quat: Quaternion): void;
        calculateWorldAABB(pos: Vec3, quat: Quaternion, min: number, max: number): void;

    }

    export class Shape {

        static types: {

            SPHERE: number;
            PLANE: number;
            BOX: number;
            COMPOUND: number;
            CONVEXPOLYHEDRON: number;
            HEIGHTFIELD: number;
            PARTICLE: number;
            CYLINDER: number;

        }

        id: number;
        type: number;
        boundingSphereRadius: number;
        collisionResponse: boolean;

        updateBoundingSphereRadius(): number;
        volume(): number;
        calculateLocalInertia(mass: number, target?: Vec3): Vec3;

    }

    export class Sphere extends Shape {

        radius: number;

        constructor(radius: number);

    }

    export class GSSolver extends Solver {

        iterations: number;
        tolerance: number;

        solve(dy: number, world: World): number;


    }

    export class Solver {

        equations: Equation[];

        solve(dy: number, world: World): number;
        addEquation(eq: Equation): void;
        removeEquation(eq: Equation): void;
        removeAllEquations(): void;

    }

    export class SplitSolver extends Solver {

        subsolver: Solver;

        constructor(subsolver: Solver);

        solve(dy: number, world: World): number;

    }

    export class EventTarget {

        addEventListener(type: string, listener: Function): EventTarget;
        hasEventListener(type: string, listener: Function): boolean;
        removeEventListener(type: string, listener: Function): EventTarget;
        dispatchEvent(event: IEvent): IEvent;

    }

    export class Pool {

        objects: any[];
        type: any[];

        release(): any;
        get(): any;
        constructObject(): any;

    }

    export class TupleDictionary {

        data: {
            keys: any[];
        };

        get(i: number, j: number): number;
        set(i: number, j: number, value: number): void;
        reset(): void;

    }

    export class Utils {

        static defaults(options?: any, defaults?: any): any;

    }

    export class Vec3Pool extends Pool {

        static defaults(options: Object, defaults: Object): Object;

        constructObject(): Vec3;

    }

    export class NarrowPhase {

        contactPointPool: Pool[];
        enableFrictionReduction: boolean;
        v3pool: Vec3Pool;

        convexHeightfield(convexShape: Shape, hfShape: Heightfield, convexPos: Vec3, hfPos: Vec3, convexQuat: Quaternion, hfQuat: Quaternion, convexBody: Body, hfBody: Body): void;
        convexConvex(si: Shape, sj: Shape, xi: Vec3, xj: Vec3, qi: Quaternion, qj: Quaternion, bi: Body, bj: Body): void;
        convexParticle(result: ContactEquation[], si: Shape, sj: Shape, xi: Vec3, xj: Vec3, qi: Quaternion, qj: Quaternion, bi: Body, bj: Body): void;
        convexTrimesh( result: ContactEquation[], si: Shape, sj: Shape, xi: Vec3, xj: Vec3, qi: Quaternion, qj: Quaternion, bi: Body, bj: Body): void;
        createContactEquation(bi: Body, bj: Body, si: Shape, sj: Shape, rsi: Shape, rsj: Shape): ContactEquation;
        getContacts(p1: Body[], p2: Body[], world: World, result: ContactEquation[], oldcontacts: ContactEquation[]): void;
        particlePlane( result: ContactEquation[], si: Shape, sj: Shape, xi: Vec3, xj: Vec3, qi: Quaternion, qj: Quaternion, bi: Body, bj: Body): void;
        particleSphere(result: ContactEquation[], si: Shape, sj: Shape, xi: Vec3, xj: Vec3, qi: Quaternion, qj: Quaternion, bi: Body, bj: Body): void;
        planeBox(result: ContactEquation[], si: Shape, sj: Shape, xi: Vec3, xj: Vec3, qi: Quaternion, qj: Quaternion, bi: Body, bj: Body): void;
        planeConvex(si: Shape, sj: Shape, xi: Vec3, xj: Vec3, qi: Quaternion, qj: Quaternion, bi: Body, bj: Body): void;
        planeTrimesh(si: Shape, sj: Shape, xi: Vec3, xj: Vec3, qi: Quaternion, qj: Quaternion, bi: Body, bj: Body): void;
        sphereBox(si: Shape, sj: Shape, xi: Vec3, xj: Vec3, qi: Quaternion, qj: Quaternion, bi: Body, bj: Body): void;
        sphereConvex(si: Shape, sj: Shape, xi: Vec3, xj: Vec3, qi: Quaternion, qj: Quaternion, bi: Body, bj: Body): void;
        sphereHeightfield(sphereShape: Shape, hfShape: Heightfield, spherePos: Vec3, hfPos: Vec3, sphereQuat: Quaternion, hfQuat: Quaternion, sphereBody: Body, hfBody: Body): void;
        spherePlane( si: Shape, sj: Shape, xi: Vec3, xj: Vec3, qi: Quaternion, qj: Quaternion, bi: Body, bj: Body): void;
        sphereSphere(si: Shape, sj: Shape, xi: Vec3, xj: Vec3, qi: Quaternion, qj: Quaternion, bi: Body, bj: Body): void;
        sphereTrimesh(sphereShape: Shape, trimeshShape: Shape, spherePos: Vec3, trimeshPos: Vec3, sphereQuat: Quaternion, trimeshQuat: Quaternion, sphereBody: Body, trimeshBody: Body): void;

    }

    export interface IOctreeOptions {

        root: Octree;
        aabb: AABB;

    }

    export class OctreeNode {

        aabb: AABB;
        children: Octree[];
        data: number[];
        root: OctreeNode;

    }

    export class Octree extends OctreeNode {

        maxDepth: number;

        constructor(aabb: AABB, options: IOctreeOptions);

        aabbQuery(aabb: AABB, result: Object[]): Object[];
        insert(aabb: AABB, elementData: Object): boolean;
        rayQuery(ray: Ray, treeTransform: Transform, result: Object[]): Object[];
        removeEmptyNodes(): void;
        subdivide(): void;

    }

    export interface IWorld {

        collisisonFilterMask?: number;
        collisionFilterGroup?: number;
        skipBackfaces?: boolean;
        checkCollisionResponse?: boolean;

    }

    export class World extends EventTarget {

        dt: number;
        allowSleep: boolean;
        contacts: ContactEquation[];
        frictionEquations: FrictionEquation[];
        quatNormalizeSkip: number;
        quatNormalizeFast: boolean;
        time: number;
        stepnumber: number;
        default_dt: number;
        nextId: number;
        gravity: Vec3;
        broadphase: NaiveBroadphase;
        bodies: Body[];
        solver: Solver;
        constraints: Constraint[];
        narrowPhase: NarrowPhase;
        collisionMatrix: ArrayCollisionMatrix;
        collisionMatrixPrevious: ArrayCollisionMatrix;
        materials: Material[];
        contactMaterials: ContactMaterial[];
        contactMaterialTable: TupleDictionary;
        defaultMaterial: Material;
        defaultContactMaterial: ContactMaterial;
        doProfiling: boolean;
        profile: {
            solve: number;
            makeContactConstraints: number;
            broadphaser: number;
            integrate: number;
            narrowphase: number;
        };
        subsystems: any[];
        addBodyEvent: IBodyEvent;
        removeBodyEvent: IBodyEvent;

        addBody(body: Body): void;
        addConstraint(c: Constraint): void;
        addContactMaterial(cmat: ContactMaterial): void;
        addEventListener(type: string, listener: Function): EventTarget;
        addMaterial(m: Material): void;
        clearForces(): void;
        collisionMatrixTick(): void;
        getContactMaterial(m1: Material, m2: Material): ContactMaterial;
        numObjects(): number;
        raycastAll(from: Vec3, to: Vec3, options: IWorld, callback: Function): boolean;
        raycastAny(from: Vec3, to: Vec3, options: IWorld, result: RaycastResult): boolean;
        raycastClosest(from: Vec3, to: Vec3, options: IWorld, result: RaycastResult): boolean;
        rayTest(from: Vec3, to: Vec3, result: RaycastResult): void;
        remove(body: Body): void;
        removeBody(body: Body): void;
        removeConstraint(c: Constraint): void;
        removeEventListener(type: string, listener: Function): EventTarget;
        step(dy: number, timeSinceLastCalled?: number, maxSubSteps?: number): void;

    }

    export interface IEvent {

        type: string;

    }

    export interface IBodyEvent extends IEvent {

        body: Body;

    }

    export class Demo {

        constructor( options: Object );

        addScene( title: string, initfunc: Function ): void;
        restartCurrentScene(): void;

    }

}

declare module "cannon" {
    export = CANNON;
}
