// This doesn't work when `@types/node` is present:
declare const global: SnapchatLensStudio.Global;

// // Instead, when `@types/node` is present, please add this shim will be needed to establish the typings `global`:
// declare module NodeJS {
//     interface Global extends SnapchatLensStudio.Global {}
// }

/** Returns the time difference in seconds between the current frame and previous frame. */
declare function getDeltaTime(): number;

/** Returns the time in seconds since the lens was started. */
declare function getTime(): number;

/** Returns true if the passed in object is null or destroyed. Useful as a safe way to check if a SceneObject or Component has been destroyed. */
declare function isNull(reference: object): boolean;

/** Prints out a message to the Logger window. */
declare function print(message: any): void;

/**
 * Binds scripts to Events and executes them when triggered. Any script can access the ScriptComponent executing them through the variable script. See also: Scripting Overview, Script Events Guide.
 * ```
 * // Bind a function to the MouthOpened event
 * function onMouthOpen(eventData)
 * {
 *     print("mouth was opened");
 * }
 * var event = script.createEvent("MouthOpenedEvent");
 * event.bind(onMouthOpen);
 * ```
 */
declare const script: Component.ScriptComponent;

/**
 * A two dimensional vector.
 * Lens Studio v1.0.0+
 */
declare class vec2 {
    constructor(x: number, y: number);

    /** Alternate name for the y component. */
    g: number;

    /** Returns the length of the vector. */
    length: number;

    /** Returns the squared length of the vector. */
    lengthSquared: number;

    /** Alternate name for the x component. */
    r: number;

    /** x component of the vec2. */
    x: number;

    /** y component of the vec2. */
    y: number;

    /** Returns the vector plus vec. */
    add(vec: vec2): vec2;

    /** Returns the angle between the vector and vec. */
    angleTo(vec: vec2): number;

    /** Returns a copy of the vector with its length clamped to length. */
    clampLength(length: number): vec2;

    /** Returns the distance between the vector and the vector vec. */
    distance(vec: vec2): number;

    /** Returns the division of the vector by the vector vec. */
    div(vec: vec2): vec2;

    /** Returns the dot product of the vector and vec. */
    dot(vec: vec2): number;

    /** Returns whether this is equal to vec. */
    equal(vec: vec2): boolean;

    /** Returns a copy of the vector moved towards the point point by the amount magnitude. */
    moveTowards(point: vec2, magnitude: number): vec2;

    /** Returns the component-wise multiplication product of the vector and vec. */
    mult(vec: vec2): vec2;

    /** Returns a copy of the vector with its length scaled to 1. */
    normalize(): vec2;

    /** Returns a copy of the vector projected onto the vector vec. */
    project(vec: vec2): vec2;

    /** Projects the vector onto the plane represented by the normal normal. */
    projectOnPlane(normal: vec2): vec2;

    /** Returns a copy of the vector reflected across the plane defined by the normal vec. */
    reflect(vec: vec2): vec2;

    /** Returns the component-wise multiplication product of the vector and vec. */
    scale(vec: vec2): vec2;

    /** Returns the vector minus vec. */
    sub(vec: vec2): vec2;

    /** Returns a string representation of the vector. */
    toString(): string;

    /** Multiplies the components by the number scale. */
    uniformScale(scale: number): vec2;

    /** Returns the vector (0, -1). */
    static down(): vec2;

    /** Returns the vector (-1, 0). */
    static left(): vec2;

    /** Linearly interpolates between the two vectors vecA and vecB by the factor t. */
    static lerp(vecA: vec2, vecB: vec2, t: number): vec2;

    /** Returns a new vector containing the largest value of each component in the two vectors. */
    static max(vecA: vec2, vecB: vec2): vec2;

    /** Returns a new vector containing the smallest value of each component in the two vectors. */
    static min(vecA: vec2, vecB: vec2): vec2;

    /** Returns the vector (1, 1). */
    static one(): vec2;

    /** Returns the vector (1, 0). */
    static right(): vec2;

    /** Returns the vector (0, 1). */
    static up(): vec2;

    /** Returns the vector (0, 0). */
    static zero(): vec2;
}

/**
 * A three dimensional vector.
 * Lens Studio v1.0.0+
 */
declare class vec3 {
    constructor(x: number, y: number, z: number);

    /** Alternate name for the z component. */
    b: number;

    /** Alternate name for the y component. */
    g: number;

    /** Returns the length of the vector. */
    length: number;

    /** Returns the squared length of the vector. */
    lengthSquared: number;

    /** Alternate name for the x component. */
    r: number;

    /** x component of the vec3. */
    x: number;

    /** y component of the vec3. */
    y: number;

    /** z component of the vec3. */
    z: number;

    /** Returns the vector plus vec. */
    add(vec: vec3): vec3;

    /** Returns the angle in radians between the vector and vec. */
    angleTo(vec: vec3): number;

    /** Returns a copy of the vector with its length clamped to length. */
    clampLength(length: number): vec3;

    /** Returns the cross product of the vector and vec */
    cross(vec: vec3): vec3;

    /** Returns the distance between the vector and the vector vec. */
    distance(vec: vec3): number;

    /** Returns the division of the vector by the vector vec. */
    div(vec: vec3): vec3;

    /** Returns the dot product of the vector and vec. */
    dot(vec: vec3): number;

    /** Returns whether this is equal to vec. */
    equal(vec: vec3): boolean;

    /** Returns a copy of the vector moved towards the point point by the amount magnitude. */
    moveTowards(point: vec3, magnitude: number): vec3;

    /** Returns the component-wise multiplication product of the vector and vec. */
    mult(vec: vec3): vec3;

    /** Returns a copy of the vector with its length scaled to 1. */
    normalize(): vec3;

    /** Returns a copy of the vector projected onto the vector vec. */
    project(vec: vec3): vec3;

    /** Projects the vector onto the plane represented by the normal normal. */
    projectOnPlane(normal: vec3): vec3;

    /** Returns a copy of the vector reflected across the plane defined by the normal vec. */
    reflect(vec: vec3): vec3;

    /** Returns a copy of the vector rotated towards the point point by amount. */
    rotateTowards(point: vec3, amount: number): vec3;

    /** Returns the component-wise multiplication product of the vector and vec. */
    scale(vec: vec3): vec3;

    /** Returns the vector minus vec. */
    sub(vec: vec3): vec3;

    /** Returns a string representation of the vector. */
    toString(): string;

    /** Multiplies the components by the number scale. */
    uniformScale(scale: number): vec3;

    /** Returns the vector (0, 0, -1). */
    static back(): vec3;

    /** Returns the vector (0, -1, 0). */
    static down(): vec3;

    /** Returns the vector (0, 0, 1). */
    static forward(): vec3;

    /** Returns the vector (-1, 0, 0). */
    static left(): vec3;

    /** Linearly interpolates between the two vectors vecA and vecB by the factor t. */
    static lerp(vecA: vec3, vecB: vec3, t: number): vec3;

    /** Returns a new vector containing the largest value of each component in the two vectors. */
    static max(vecA: vec3, vecB: vec3): vec3;

    /** Returns a new vector containing the smallest value of each component in the two vectors. */
    static min(vecA: vec3, vecB: vec3): vec3;

    /** Returns the vector (1, 1, 1). */
    static one(): vec3;

    /** Makes the vectors vecA and vecB normalized and orthogonal to each other. */
    static orthonormalize(vecA: vec3, vecB: vec3): void;

    /** Returns the vector (1, 0, 0). */
    static right(): vec3;

    /** Spherically interpolates between the two vectors vecA and vecB by the factor t. */
    static slerp(vecA: vec3, vecB: vec3, t: number): vec3;

    /** Returns the vector (0, 1, 0). */
    static up(): vec3;

    /** Returns the vector (0, 0, 0). */
    static zero(): vec3;
}

/**
 * A four dimensional vector.
 * Lens Studio v1.0.0+
 */
declare class vec4 {
    constructor(x: number, y: number, z: number, w: number);

    /** Alternate name for the w component. */
    a: number;

    /** Alternate name for the z component. */
    b: number;

    /** Alternate name for the y component. */
    g: number;

    /** Returns the length of the vector. */
    length: number;

    /** Returns the squared length of the vector. */
    lengthSquared: number;

    /** Alternate name for the x component. */
    r: number;

    /** w component of the vec4. */
    w: number;

    /** x component of the vec4. */
    x: number;

    /** y component of the vec4. */
    y: number;

    /** z component of the vec4. */
    z: number;

    /** Returns the vector plus vec. */
    add(vec: vec4): vec4;

    /** Returns the angle between the vector and vec. */
    angleTo(vec: vec4): number;

    /** Returns a copy of the vector with its length clamped to length. */
    clampLength(length: number): vec4;

    /** Returns the distance between the vector and the vector vec. */
    distance(vec: vec4): number;

    /** Returns the division of the vector by the vector vec. */
    div(vec: vec4): vec4;

    /** Returns the dot product of the vector and vec. */
    dot(vec: vec4): number;

    /** Returns whether this is equal to vec. */
    equal(vec: vec4): boolean;

    /** Returns a copy of the vector moved towards the point point by the amount magnitude. */
    moveTowards(point: vec4, magnitude: number): vec4;

    /** Returns the component-wise multiplication product of the vector and vec. */
    mult(vec: vec4): vec4;

    /** Returns a copy of the vector with its length scaled to 1. */
    normalize(): vec4;

    /** Returns a copy of the vector projected onto the vector vec. */
    project(vec: vec4): vec4;

    /** Projects the vector onto the plane represented by the normal normal. */
    projectOnPlane(normal: vec4): vec4;

    /** Returns a copy of the vector reflected across the plane defined by the normal vec. */
    reflect(vec: vec4): vec4;

    /** Returns the component-wise multiplication product of the vector and vec. */
    scale(vec: vec4): vec4;

    /** Returns the vector minus vec. */
    sub(vec: vec4): vec4;

    /** Returns a string representation of the vector. */
    toString(): string;

    /** Multiplies the components by the number scale. */
    uniformScale(scale: number): vec4;

    /** Linearly interpolates between the two vectors vecA and vecB by the factor t. */
    static lerp(vecA: vec4, vecB: vec4, t: number): vec4;

    /** Returns a new vector containing the largest value of each component in the two vectors. */
    static max(vecA: vec4, vecB: vec4): vec4;

    /** Returns a new vector containing the smallest value of each component in the two vectors. */
    static min(vecA: vec4, vecB: vec4): vec4;

    /** Returns the vector (1, 1, 1, 1). */
    static one(): vec4;

    /** Returns the vector (0, 0, 0, 0). */
    static zero(): vec4;
}

/**
 * A vector containing 4 boolean values.
 * Lens Studio v1.5.0+
 */
declare class vec4b {
    /** Creates a new instance of a vec4b. */
    constructor(x: boolean, y: boolean, z: boolean, w: boolean);

    /** Returns a string representation of the vector. */
    toString(): string;

    /** Alternate name for the w component. */
    a: boolean;

    /** Alternate name for the z component. */
    b: boolean;

    /** Alternate name for the y component. */
    g: boolean;

    /** Alternate name for the x component. */
    r: boolean;

    /** w component of the vec4b. */
    w: boolean;

    /** x component of the vec4b. */
    x: boolean;

    /** y component of the vec4b. */
    y: boolean;

    /** z component of the vec4b. */
    z: boolean;
}

/** A 2x2 matrix. */
declare class mat2 {
    /** Creates a new mat2, defaulting to identity values. */
    constructor();

    /** The first column of the matrix. */
    column0: vec2;

    /** The second column of the matrix. */
    column1: vec2;

    /** Returns a string representation of the matrix. */
    description: string;

    /** Returns the result of adding the two matrices together. */
    add(mat: mat2): mat2;

    /** Returns the determinant of the matrix. */
    determinant(): number;

    /** Returns the result of dividing the two matrices. */
    div(mat: mat2): mat2;

    /** Returns whether the two matrices are equal. */
    equal(mat: mat2): boolean;

    /** Returns the inverse of the matrix. */
    inverse(): mat2;

    /** Returns the result of multiplying the two matrices. */
    mult(mat: mat2): mat2;

    /** Returns the result of scalar multiplying the matrix. */
    multiplyScalar(scalar: number): mat2;

    /** Returns the result of subtracting the two matrices. */
    sub(mat: mat2): mat2;

    /** Returns a string representation of the matrix. */
    toString(): string;

    /** Returns the transpose of this matrix. */
    transpose(): mat2;

    /** Returns the identity matrix. */
    static identity(): mat2;

    /** Returns a matrix with all zero values. */
    static zero(): mat2;
}

/** A 3x3 matrix. */
declare class mat3 {
    /** Creates a new mat3, defaulting to identity values. */
    constructor();

    /** The first column of the matrix. */
    column0: vec3;

    /** The second column of the matrix. */
    column1: vec3;

    /** The third column of the matrix. */
    column2: vec3;

    /** Returns a string representation of the matrix. */
    description: string;

    /** Returns the result of adding the two matrices together. */
    add(mat: mat3): mat3;

    /** Returns the determinant of the matrix. */
    determinant(): number;

    /** Returns the result of dividing the two matrices. */
    div(mat: mat3): mat3;

    /** Returns whether the two matrices are equal. */
    equal(mat: mat3): boolean;

    /** Returns the inverse of the matrix. */
    inverse(): mat3;

    /** Returns the result of multiplying the two matrices. */
    mult(mat: mat3): mat3;

    /** Returns the result of scalar multiplying the matrix. */
    multiplyScalar(scalar: number): mat3;

    /** Returns the result of subtracting the two matrices. */
    sub(mat: mat3): mat3;

    /** Returns a string representation of the matrix. */
    toString(): string;

    /** Returns the transpose of this matrix. */
    transpose(): mat3;

    /** Returns the identity matrix. */
    static identity(): mat3;

    /** Returns a matrix representing the specified rotation. */
    static makeFromRotation(arg1: quat): mat3;

    /** Returns a matrix with all zero values. */
    static zero(): mat3;
}

/** A 4x4 matrix. */
declare class mat4 {
    /** Creates a new mat4, defaulting to identity values. */
    constructor();

    /** The first column of the matrix. */
    column0: vec4;

    /** The second column of the matrix. */
    column1: vec4;

    /** The third column of the matrix. */
    column2: vec4;

    /** The fourth column of the matrix. */
    column3: vec4;

    /** Returns a string representation of the matrix. */
    description: string;

    /** Returns the result of adding the two matrices together. */
    add(mat: mat4): mat4;

    /** Returns the determinant of the matrix. */
    determinant(): number;

    /** Returns the result of dividing the two matrices. */
    div(mat: mat4): mat4;

    /** Returns whether the two matrices are equal. */
    equal(mat: mat4): boolean;

    /** Returns an euler angle representation of this matrix’s rotation, in radians. */
    extractEulerAngles(): vec3;

    /** Returns the inverse of the matrix. */
    inverse(): mat4;

    /** Returns the result of multiplying the two matrices. */
    mult(mat: mat4): mat4;

    /** Returns the direction vector multiplied by this matrix. */
    multiplyDirection(direction: vec3): vec3;

    /** Returns the point point multiplied by this matrix. */
    multiplyPoint(point: vec3): vec3;

    /** Returns the result of scalar multiplying the matrix. */
    multiplyScalar(scalar: number): mat4;

    /** Returns the vector multiplied by this matrix. */
    multiplyVector(vector: vec4): vec4;

    /** Returns the result of subtracting the two matrices. */
    sub(mat: mat4): mat4;

    /** Returns a string representation of the matrix. */
    toString(): string;

    /** Returns the transpose of this matrix. */
    transpose(): mat4;

    /** Returns the two matrices multiplied component-wise. */
    static compMult(arg1: mat4, arg2: mat4): mat4;

    /** Returns a new matrix with translation  rotation: translation, rotation, and scale scale. */
    static compose(translation: vec3, rotation: quat, scale: vec3): mat4;

    /** Returns a new matrix with the specified euler angles ( radians: in). */
    static fromEulerAngles(euler: vec3): mat4;

    /** Returns a new matrix with x euler angle xAngle ( radians: in). */
    static fromEulerX(xAngle: number): mat4;

    /** Returns a new matrix with y euler angle yAngle ( radians: in). */
    static fromEulerY(yAngle: number): mat4;

    /** Returns a new matrix with z euler angle zAngle ( radians: in). */
    static fromEulerZ(zAngle: number): mat4;

    /** Returns a new matrix with rotation rotation. */
    static fromRotation(rotation: quat): mat4;

    /** Returns a new matrix with scale scale. */
    static fromScale(scale: vec3): mat4;

    /** Returns a new matrix with the translation translation. */
    static fromTranslation(translation: vec3): mat4;

    /** Returns the identity matrix. */
    static identity(): mat4;

    /** Returns a new matrix generated using the provided arguments. */
    static lookAt(eye: vec3, center: vec3, up: vec3): mat4;

    /** Returns a new matrix using the provided vectors. */
    static makeBasis(x: vec3, y: vec3, z: vec3): mat4;

    /** Returns a new matrix generated using the provided arguments. */
    static orthographic(left: number, right: number, bottom: number, top: number, zNear: number, zFar: number): mat4;

    /** Returns the outer product of the two matrices. */
    static outerProduct(arg1: vec4, arg2: vec4): mat4;

    /** Returns a new matrix generated using the provided arguments. */
    static perspective(fovY: number, aspect: number, zNear: number, zFar: number): mat4;

    /** Returns a matrix with all zero values. */
    static zero(): mat4;
}

/** A quaternion, used to represent rotation. */
declare class quat {
    /** w component of the quat. */
    w: number;

    /** x component of the quat. */
    x: number;

    /** y component of the quat. */
    y: number;

    /** z component of the quat. */
    z: number;

    /** Creates a new quat. */
    constructor(w: number, x: number, y: number, z: number);

    /** Returns the dot product of the two quats. */
    dot(quat: quat): number;

    /** Returns whether this quat and b are equal. */
    equal(b: quat): boolean;

    /** Returns the rotation angle of the quat. */
    getAngle(): number;

    /** Returns the rotation axis of the quat. */
    getAxis(): vec3;

    /** Returns an inverted version of the quat. */
    invert(): quat;

    /** Returns the product of this quat and b. */
    multiply(b: quat): quat;

    /** Returns the result of rotating direction vector vec3 by this quat. */
    multiplyVec3(vec3: vec3): vec3;

    /** Normalizes the quat. */
    normalize(): void;

    /** Returns an euler angle representation of the quat, in radians. */
    toEulerAngles(): vec3;

    /** Returns a string representation of the quat. */
    toString(): string;

    /** Returns a new quat with angle angle and axis axis. */
    static angleAxis(angle: number, axis: vec3): quat;

    /** Returns the angle between a and b. */
    static angleBetween(a: quat, b: quat): number;

    /** Returns a new quat using the euler angles x, y, z ( radians: in). */
    static fromEulerAngles(x: number, y: number, z: number): quat;

    /** Returns a new quat using the euler angle eulerVec ( radians: in). */
    static fromEulerVec(eulerVec: vec3): quat;

    /** Returns a new quat linearly interpolated between a and b. */
    static lerp(a: quat, b: quat, t: number): quat;

    /** Returns a new quat with a forward vector forward and up vector up. */
    static lookAt(forward: vec3, up: vec3): quat;

    /** Returns the identity quaternion. */
    static quatIdentity(): quat;

    /** Returns a rotation quat between direction vectors from and to. */
    static rotationFromTo(from: vec3, to: vec3): quat;

    /** Returns a new quat spherically linearly interpolated between a and b. */
    static slerp(a: quat, b: quat, t: number): quat;
}

/** Types of weather returned by UserContextSystem’s requestWeatherCondition() callback. Lens Studio v2.1+ */
declare enum WeatherCondition {
    /** Unknown or unsupported weather condition */
    Unknown,
    Lightning,
    LowVisibility,
    PartlyCloudy,
    ClearNight,
    Cloudy,
    Rainy,
    Hail,
    Snow,
    Windy,
    Sunny,
}

/** Data type used for color values. */
declare enum Colorspace {
    RGBA,
    RG,
    R,
}

/** Describes the current status of a VideoTextureProvider. Lens Studio v1.5.0+ */
declare enum VideoStatus {
    /** The video playback has stopped */
    Stopped,
    /** The video is being prepared */
    Preparing,
    /** The video is playing */
    Playing,
    /** The video playback is paused */
    Paused,
}

declare enum MeshClassificationFormat {
    /** Do not bake classifications to mesh */
    None,
    /** Classifications are baked per vertex - vertices with multiple classes will use the value from the last face */
    PerVertexFast,
}

declare enum MeshIndexType {
    /** No index data type */
    None,
    /** Unsigned integer, this is the value normally used */
    UInt16,
}

declare enum MeshTopology {
    /** Draws unconnected line segments. Each group of two vertices specifies a new line segment. */
    Lines,
    /** Draws connected line segments. Starting with the second vertex, a line is drawn between each vertex and the preceding one. */
    LineStrip,
    /** Draws individual points. Each vertex specifies a new point to draw. */
    Points,
    /** Draws unconnected triangles. Each group of three vertices specifies a new triangle. */
    Triangles,
    /**
     * Draws connected triangles sharing one central vertex. The first vertex is the shared one, or “hub” vertex. Starting with the third vertex, each vertex forms a triangle connecting with the
     * previous vertex and hub vertex.
     */
    TriangleFan,
    /** Draws connected triangles in a strip. After the first two vertices, each vertex defines the third point on a new triangle extending from the previous one. */
    TriangleStrip,
}

/** Used by the horizontalAlignment property in MeshVisual. When a ScreenTransform is attached to the same SceneObject, this determines how the mesh will be positioned horizontally. */
declare enum HorizontalAlignment {
    /** The mesh will be aligned to the left side. */
    Left,
    /** The mesh will be centered. */
    Center,
    /** The mesh will be aligned to the right side. */
    Right,
}

/**
 * Options for stretching a mesh to fit a ScreenTransform’s bounding box. Used in MeshVisual’s stretchMode property, as long as the SceneObject has a ScreenTransform attached. Also used in TextFill’s
 * textureStretch property to control texture stretching when drawing text.
 */
declare enum StretchMode {
    /** Scale uniformly so that both width and height fit within the bounds. */
    Fit,
    /** Scale uniformly so that both width and height meet or exceed the bounds. */
    Fill,
    /** Scale non-uniformly to match the exact width and height of the bounds. */
    Stretch,
    /** Scale uniformly to match the same height as the bounds. */
    FitHeight,
    /** Scale uniformly to match the same width as the bounds. */
    FitWidth,
    /** Same as Fill, but when used with the Image component any area outside of the bounds is cropped out. */
    FillAndCut,
}

/** Used by the verticalAlignment property in MeshVisual. When a ScreenTransform is attached to the same SceneObject, this determines how the mesh will be positioned vertically. */
declare enum VerticalAlignment {
    /** The mesh will be aligned to the bottom side. */
    Bottom,
    /** The mesh will be centered. */
    Center,
    /** The mesh will be aligned to the top side. */
    Top,
}

/** Tracking modes used by the DeviceTracking component to specify what type of tracking to use. */
declare enum DeviceTrackingMode {
    /** Use gyroscope tracking ( only: rotation) */
    Rotation,
    /** Use surface tracking (position and rotation) */
    Surface,
    /** Use native tracking (position and rotation) */
    World,
}

/** Used by Head.setAttachmentPointType() to specify the type of attachment used with a Head binding. */
declare enum AttachmentPointType {
    HeadCenter,
    CandideCenter,
    TriangleBarycentric,
    LeftEyeballCenter,
    RightEyeballCenter,
}

/**
 * Enum values specifying each type of manipulation. See ManipulateComponent.
 * ```
 * // Disables the scale functionality on a manipulate component when a user taps
 * //@input Component.ManipulateComponent manip
 *
 * function onTap(eventData)
 * {
 *     script.manip.enableManipulateType(ManipulateType.Scale, false);
 * }
 * var tapEvent = script.createEvent("TapEvent");
 * tapEvent.bind(onTap);
 * ```
 */
declare enum ManipulateType {
    /** The object can be scaled by pinching with two fingers. */
    Scale,
    /** The object can be rotated by swiveling with two fingers. */
    Swivel,
    /** The object can be moved by touching and dragging. */
    Drag,
}

/**
 * Used with FaceInsetVisual.faceRegion for setting the face region to draw.
 * ```
 * //@input Component.FaceInsetVisual faceInset
 * // Sets the face inset to draw the mouth
 * script.faceInset.faceRegion = FaceInsetRegion.Mouth;
 * ```
 */
declare enum FaceInsetRegion {
    /** Targets the left eye */
    LeftEye,
    /** Targets the right eye */
    RightEye,
    /** Targets the mouth */
    Mouth,
    /** Targets the nose */
    Nose,
    /** Targets the entire face */
    Face,
}

/**
 * Result object returned from ManipulateComponent.intersectManipulateFrame().
 * ```
 * // Returns an intersectManipulateFrame based on user touch position
 * //@input Component.ManipulateComponent manip
 *
 * function onTap(eventData)
 * {
 *     var touchPos = eventData.getTouchPosition();
 *     var intersectManipFrame = script.manip.intersectManipulateFrame(touchPos);
 *     if(intersectManipFrame && intersectManipFrame.isValid())
 *     {
 *         screenPoint = intersectManipFrame.getIntersectionPoint();
 *
 *         print(screenPoint.toString());
 *     }
 * }
 * var tapEvent = script.createEvent("TapEvent");
 * tapEvent.bind(onTap);
 * ```
 */
interface ManipulateFrameIntersectResult {
    /** If there was a valid intersection, returns the intersection point in world space. */
    getIntersectionPoint(): vec3;

    /** Returns whether there was a valid intersection. */
    isValid(): boolean;
}

/**
 * The base class for all components. Components are attached to SceneObjects.
 */
interface Component extends SerializableWithUID {
    /** If disabled, the Component will stop enacting its behavior. */
    enabled: boolean;

    /** Destroys the component. */
    destroy(): void;

    /** Returns the SceneObject the component is attached to. */
    getSceneObject(): SceneObject;

    /** Returns the Transform this component is attached to. */
    getTransform(): Transform;
}

declare namespace Component {
    /** Base class for all visual Components (e.g. MeshVisual). */
    interface Visual extends Component {
        /** Returns the order of this Visual in the render queue. */
        getRenderOrder(): number;

        /** Sets the order of this Visual in the render queue. */
        setRenderOrder(value: number): void;
    }

    /**
     * The base class for all mesh rendering components. Comparable to the former class “MeshVisual”, which was split into the classes: BaseMeshVisual, MaterialMeshVisual, and RenderMeshVisual. Lens
     * Studio v2.3+
     */
    interface BaseMeshVisual extends Visual {
        /**
         * When a ScreenTransform is present on this SceneObject, and extentsTarget is a child of this SceneObject, extentsTarget will be repositioned to match the exact area this MeshVisual is being
         * rendered. Very useful for Image and Text components.
         */
        extentsTarget: ScreenTransform;

        /** When a ScreenTransform is attached to the same SceneObject, this controls how the mesh will be positioned horizontally depending on stretchMode. */
        horizontalAlignment: HorizontalAlignment;

        /** None = 0, Caster = 1, Receiver = 2 */
        meshShadowMode: number;

        /**
         * Affects the color of shadows being cast by this MeshVisual. The color of the cast shadow is a mix between shadowColor and the material’s base texture color. The alpha value of shadowColor
         * controls the mixing of these two colors, with 0 = shadowColor and 1 = shadowColor * textureColor.
         */
        shadowColor: vec4;

        /** Density of shadows cast by this MeshVisual. */
        shadowDensity: number;

        /** When a ScreenTransform is attached to the same SceneObject, this controls how the mesh will be stretched relative to the ScreenTransform’s boundaries. */
        stretchMode: StretchMode;

        /** When a ScreenTransform is attached to the same SceneObject, this controls how the mesh will be positioned vertically depending on stretchMode. */
        verticalAlignment: VerticalAlignment;

        /**
         * Projects screen positions from camera’s view onto the mesh’s UVs. If the MeshVisual’s material uses the same texture as the camera input, the MeshVisual will look identical to the part of
         * the screen it covers.
         */
        snap(camera: Camera): void;
    }

    /**
     * Renders the scene to a Render Target texture. A Camera will only render a SceneObject if the SceneObject’s render layer is enabled on the Camera. For more information, see the Camera and
     * Layers guide.
     */
    interface Camera extends Component {
        /** The aspect ratio of the camera (width/height). */
        aspect: number;

        /** When enableClearColor is true and inputTexture is null, this color is used to clear this Camera’s renderTarget before drawing to it. */
        clearColor: vec4;

        /** Determines the way depth is handled on this Camera. Changing this can help sort objects at different distance ranges. */
        depthBufferMode: Camera.DepthBufferMode;

        /**
         * Controls which Camera settings will be overridden by physical device properties. For example, this can be used to override the fov property to match the device camera’s actual field of
         * view.
         */
        devicePropertyUsage: Camera.DeviceProperty;

        /**
         * If enabled, this Camera will clear the color on its renderTarget before drawing to it. inputTexture will be used to clear it unless it is null, in which case clearColor is used
         * instead.
         */
        enableClearColor: boolean;

        /** If enabled, this Camera will clear the depth buffer on its renderTarget before drawing to it. */
        enableClearDepth: boolean;

        /** The distance of the far clipping plane. */
        far: number;

        /** The Camera’s field of view in radians. */
        fov: number;

        /** When enableClearColor is true, this texture is used to clear this Camera’s renderTarget before drawing. If this texture is null, clearColor will be used instead. */
        inputTexture: Asset.Texture;

        /**
         * A texture controlling which parts of the output texture the camera will draw to. The “red” value of each pixel determines how strongly the camera will draw to that part of the image. For
         * example, a completely black section will cause the camera to not draw there at all. A completely white ( red: or) section will cause the camera to draw normally. Colors in  like:
         * between, gray, will be semitransparent.
         */
        maskTexture: Asset.Texture;

        /** The distance of the near clipping plane. */
        near: number;

        /** Controls the set of layers this Camera will render. */
        renderLayer: LayerSet;

        /** The sorting order the Camera renders in. Every frame, Cameras render in ascending order determined by their renderOrder properties. */
        renderOrder: number;

        /** The RenderTarget this Camera will draw to. */
        renderTarget: Asset.Texture;

        /** The orthographic size of the camera. */
        size: number;

        /** Read-only property describing which type of rendering the camera uses. */
        type: Camera.Type;

        /** For orthographic cameras, returns the camera size as (width, height). */
        getOrthographicSize(): vec2;

        /** Returns true if a sphere with the specified world space center position and radius is visible within the camera frustum, false otherwise. */
        isSphereVisible(center: vec3, radius: number): boolean;

        /**
         * Converts a world space position to a raw screen space position. The screen space position will be returned as a vec3 with x,y representing normalized screen space, and z representing a raw
         * depth value not directly convertible to world units. This returned value will mostly be useful for passing into unproject().
         */
        project(worldSpacePoint: vec3): vec3;

        /**
         * Converts a screen space position to a world space position, given an absolute depth. The screen space position should be provided as a vec2 in the range ([0-1], [0-1]), (0,0) being the
         * top-left of the screen and (1,1) being the bottom-right. The returned world space position will be the point absoluteDepth units away from the Camera’s near plane at the point specified
         * in screen space.
         */
        screenSpaceToWorldSpace(normalizedScreenSpacePoint: vec2, absoluteDepth: number): vec3;

        /**
         * Converts a raw screen space position to a world space position. clipSpacePoint should be a vec3 returned from a previous project() call, since the z value represents a raw depth value not
         * directly convertible to world units.
         */
        unproject(clipSpacePoint: vec3): vec3;

        /**
         * Converts the world space position worldSpacePoint to a screen space position. Screen positions are represented in the range ([0-1], [0-1]), (0,0) being the top-left of the screen and (1,1)
         * being the bottom-right.
         */
        worldSpaceToScreenSpace(worldSpacePoint: vec3): vec2;
    }

    /** Used for positioning objects in 2d screen space. It overrides the regular Transform component on the SceneObject it’s attached to. */
    interface ScreenTransform extends Component {
        /**
         * The anchor rect positioning this ScreenTransform proportional to its parent’s bounds. For each field, a value of 0 equals the parent’s center point, and value of -1 or 1 (depending on the
         * side) equals the parent’s full boundary.
         * For example, a top value of 1.0 means this ScreenTransform’s top edge will be exactly at the top edge of its parent.
         * A bottom value of -0.5 means this ScreenTransform’s bottom edge will be halfway between its parent’s bottom edge and center.
         * A right value of 0 means this ScreenTransform’s right edge will be exactly at its parent’s center.
         * A left value of -2 means this ScreenTransform’s left edge will be twice as far from its parent’s center as its parent’s left edge is.
         */
        anchors: Rect;

        /**
         * This rect is applied after anchors to determine the final boundaries of the ScreenTransform. It adds an offset in world units (based on the parent Camera’s size property) to each edge of
         * the ScreenTransform’s boundaries.
         * For example, a value of 0 for any side will have no effect on boundaries.
         * A value of 1.0 for any side will offset that edge by 1.0 world unit.
         */
        offsets: Rect;

        /** Normalized (x, y) position of the center point used in rotation. (-1, -1) being bottom left, (0, 0) being center, and (1, 1) being top right of the image. */
        pivot: vec2;

        /** Basic local position in world units relative to the parent’s center. Useful for animating screen elements with a simple offset. */
        position: vec3;

        /** Basic local rotation applied to the SceneObject. */
        rotation: quat;

        /** Basic local scaling applied to the SceneObject. */
        scale: vec3;

        /** Returns true if the screen position is within the boundaries of this ScreenTransform. Useful for checking if a touch event overlaps with this object. */
        containsScreenPoint(screenPoint: vec2): boolean;

        /** Returns true if the world position is within the boundaries of this ScreenTransform. The z value of the world position is ignored. */
        containsWorldPoint(worldPoint: vec3): boolean;

        /**
         * Returns true if this ScreenTransform is in a valid screen hierarchy, which is required for anchoring to work. To be in a valid screen hierarchy there must be a Camera component upward in
         * the parent hierarchy, and every object between the Camera and this one must also have a ScreenTransform.
         */
        isInScreenHierarchy(): boolean;

        /** Converts from a normalized (-1 to 1) position within this ScreenTransform’s bounds to a screen position. */
        localPointToScreenPoint(relativeLocalPoint: vec2): vec2;

        /** Converts from a normalized (-1 to 1) position within this ScreenTransform’s bounds to a world position. */
        localPointToWorldPoint(relativeLocalPoint: vec2): vec3;

        /** Converts from a screen position to a normalized (-1 to 1) position within this ScreenTransform’s bounds. */
        screenPointToLocalPoint(screenPoint: vec2): vec2;

        /**
         * Converts from a screen position to a normalized (-1 to 1) position within the parent object’s bounds. This value is useful because it can be used directly for this ScreenTransform’s anchor
         * positioning.
         */
        screenPointToParentPoint(screenPoint: vec2): vec2;

        /** Converts from a world position to a normalized (-1 to 1) position within this ScreenTransform’s bounds. */
        worldPointToLocalPoint(worldPoint: vec3): vec2;

        /**
         * Converts from a world position to a normalized (-1 to 1) position within the parent object’s bounds. This value is useful because it can be used directly for this ScreenTransform’s anchor
         * positioning.
         */
        worldPointToParentPoint(worldPoint: vec3): vec2;
    }

    /** Applies a face stretch effect. Face stretch features can be added to a FaceStretchVisual through the Inspector panel in Lens Studio. See the Face Stretch Guide for more information. */
    interface FaceStretchVisual extends BaseMeshVisual {
        /** The index of the face the stretch will be applied to. */
        faceIndex: number;

        /** Returns the weight of the face stretch feature named feature. */
        getFeatureWeight(feature: string): number;

        /** Sets the weight of the face stretch feature named feature to intensity. The intensity must be greater than -0.5 and less than 2. */
        setFeatureWeight(feature: string, intensity: number): void;
    }

    /** Applies a liquify effect to anything rendered behind it. */
    interface LiquifyVisual extends BaseMeshVisual {
        /** How strong the liquify effect is. */
        intensity: number;

        /** The radius of the liquify effect circle. */
        radius: number;
    }

    /**
     * Base class for all MeshVisual components using Materials to render. Comparable to the former class “MeshVisual”, which was split into the classes: BaseMeshVisual, MaterialMeshVisual, and
     * RenderMeshVisual.
     * ```
     * // @input Component.MaterialMeshVisual visual
     *
     * // Set the material's main color to red
     * script.visual.mainPass.baseColor = new vec4(1, 0, 0, 1);
     * ```
     */
    interface MaterialMeshVisual extends BaseMeshVisual {
        /** Returns the first Material. */
        mainMaterial: Asset.Material;

        /** Returns the mainPass of the mainMaterial. */
        mainPass: Pass;

        /** Adds a Material to use for rendering. */
        addMaterial(material: Asset.Material): void;

        /** Clears all Materials. */
        clearMaterials(): void;

        /** Returns the Material at index index. */
        getMaterial(index: number): Asset.Material;

        /** Returns the number of Materials used for rendering. */
        getMaterialsCount(): number;
    }

    /**
     * Applies an eye color effect to a face.
     * ```
     * // Prints the eye property `faceIndex`, the face the eye color effect is applied to
     * var face = script.getSceneObject().getFirstComponent("Component.EyeColorVisual").faceIndex;
     *
     * print("faceIndex = " + face.toString())
     * ```
     */
    interface EyeColorVisual extends MaterialMeshVisual {
        /** The index of the face this EyeColorVisual is attached to. */
        faceIndex: number;
    }

    /**
     * Draws a section of a tracked face.
     */
    interface FaceInsetVisual extends MaterialMeshVisual {
        /** The index of the face this FaceInsetVisual uses. */
        faceIndex: number;

        /** The region of the face this FaceInsetVisual draws. */
        faceRegion: FaceInsetRegion;

        /** Flips the drawn face region horizontally if enabled. */
        flipX: boolean;

        /** Flips the drawn face region vertically if enabled. */
        flipY: boolean;

        /** The amount of alpha fading applied from the border of the face inset inward. This value must be in the range 0-1. */
        innerBorderRadius: number;

        /** The amount of alpha fading applied from the border of the face inset outward. This value must be in the range 0-1. */
        outerBorderRadius: number;

        /**
         * The x and y scaling used to draw the face region. Think of scaling as meaning how many times the face region could fit into the drawing area. Higher values will zoom away from the face
         * region, and lower values will zoom into it. The normal, unzoomed scaling value is (1,1).
         */
        sourceScale: vec2;

        /** Determines the quality of the face inset’s borders. A higher value means better looking borders but lower performance. This value must be greater than 10 and less than 100. */
        subdivisionsCount: number;
    }

    /**
     * Applies a face mask effect. See the Face Mask Guide for more information.
     * ```
     * // Run this in the "Frame Updated" event to switch between drawn faces twice a second
     * // Make sure "Use Orig. Face" is enabled on the FaceMask
     *
     * //@input Component.FaceMaskVisual faceMask
     * //@input Component.Head head
     *
     * var numFaces = script.head.getFacesCount();
     * script.faceMask.originalFaceIndex = Math.floor(getTime() * 2.0) % numFaces;
     * ```
     */
    interface FaceMaskVisual extends MaterialMeshVisual {
        customMaskOnMouthClosed: Asset.Texture;

        /** The index of the face this effect is attached to. */
        faceIndex: number;

        hidesMaskOnMouthClosed: boolean;

        /** If “Use Orig. Face” is enabled for this FaceMaskVisual in the Inspector panel, this property specifies the face index to use for drawing the mask. */
        originalFaceIndex: number;

        swapsMaskOnMouthClosed: boolean;

        teethAlpha: number;
    }

    /**
     * A 2D visual used for drawing texture assets. Commonly used with ScreenTransform for drawing images on the screen.
     * ```
     * //@input Component.Image image
     * //@input Asset.Texture texture
     *
     * // Set the Image component's texture
     * script.image.mainPass.baseTex = script.texture;
     *
     * // Set the Image's pivot point
     * script.image.pivot = new vec2(1, 1);
     * ```
     */
    interface Image extends MaterialMeshVisual {
        /** If enabled, the drawn image will be flipped horizontally. */
        flipX: boolean;

        /** If enabled, the drawn image will be flipped vertically. */
        flipY: boolean;

        /** The location of the Image’s pivot point relative to its boundaries. Where (-1, -1) is the bottom left corner, (0, 0) is the center, and (1, 1) is the top right corner of the Image. */
        pivot: vec2;
    }

    /**
     * Uses an input color lookup table image to adjust the coloring of the Lens. See the Color Correction Post Effect guide for more information.
     * ```
     * // Sets the post effects texture to a custom texture in script and sets the color to red
     * //@input Component.PostEffectVisual postEffect
     * //@input Asset.Texture texture
     *
     * script.postEffect.mainPass.baseTex = script.texture;
     * script.postEffect.mainPass.baseColor = new vec4(1.0,0.0,0.0,1.0);
     * ```
     */
    type PostEffectVisual = MaterialMeshVisual;

    /**
     * Writes video feed depth information to the depth buffer, which automatically sets up depth occlusion for 3D visuals. Only works in some cases, such as in Lenses for Spectacles 3. See the
     * Lenses for Spectacles guide for more information.
     */
    type DepthSetter = PostEffectVisual;

    /** Renders a RenderMesh asset in the scene. Comparable to the former class “MeshVisual”, which was split into the classes: BaseMeshVisual, MaterialMeshVisual, and RenderMeshVisual. */
    interface RenderMeshVisual extends MaterialMeshVisual {
        /** The BlendShapes component used for rendering this mesh. */
        blendShape: BlendShapes;

        /** The RenderMesh asset to render. */
        mesh: Asset.RenderMesh;

        /** Sets the Skin to use for rendering this mesh. */
        setSkin(skin: Skin): void;
    }

    /**
     * Visual effect used to add subtle retouching effects to detected faces ( skin: soft,  whitening: teeth, etc.). To learn more, visit the Retouch Guide.
     * ```
     * // Sets a Retouch component's teeth whitening intensity
     *
     * //@input Component.RetouchVisual retouchVisual
     *
     * script.retouchVisual.teethWhiteningIntensity = 0.4;
     * ```
     */
    interface RetouchVisual extends MaterialMeshVisual {
        /** The strength of the eye whitening effect. */
        eyeWhiteningIntensity: number;

        /** The index of the face the effect is being applied to. */
        faceIndex: number;

        /** The strength of the eye sharpening effect. */
        sharpenEyeIntensity: number;

        /** The strength of the soft-skin effect. */
        softSkinIntensity: number;

        /** The strength of the teeth whitening effect. */
        teethWhiteningIntensity: number;
    }

    /**
     * Represents a renderable 2D visual in Lens Studio.
     * ```
     * // Flip the Sprite upside down
     * //@input Component.SpriteVisual sprite
     * script.sprite.flipY = true;
     *
     * // Change the Sprite's fill mode to "stretch"
     * //@input Component.SpriteVisual sprite
     * script.sprite.fillMode = 2;
     *
     * // Change the Sprite's pivot point to top right corner
     * //@input Component.SpriteVisual sprite
     * script.sprite.pivot = new vec2(1,1);
     * ```
     */
    interface SpriteVisual extends MaterialMeshVisual {
        /**
         * Which type of fill the sprite uses. Possible values:
         * ```
         * Fit = 0
         * Fill = 1
         * Stretch = 2
         * ```
         */
        fillMode: 0 | 1 | 2;

        /** Whether the sprite is flipped over the Y-axis (sideways). */
        flipX: boolean;

        /** Whether the sprite is flipped over the X-axis (upside-down). */
        flipY: boolean;

        /**
         * The location of the sprite’s pivot point relative to its boundaries. The pivot’s x value is a relative horizontal position, -1 being the sprite’s left border and 1 being the sprite’s right
         * border. Similarly, the y value is a relative vertical position, -1 being the sprite’s bottom border and 1 being the sprite’s top border.
         */
        pivot: vec2;

        /** Returns the width and height of the mesh the SpriteVisual is applied to. */
        getMeshSize(): vec2;
    }

    /** Visual component that renders dynamic text. See the Text guide for more information. */
    interface Text extends BaseMeshVisual {
        /** Settings for drawing a background behind the text. */
        backgroundSettings: BackgroundSettings;

        /** If enabled, the text material will use Depth Testing. Useful when Text exists in 3D space. */
        depthTest: boolean;

        /** Settings for how dropshadow is used in text drawing. */
        dropshadowSettings: DropshadowSettings;

        /** Font asset used. */
        font: Asset.Font;

        /** Controls how text should be handled when it goes past the horizontal boundaries. */
        horizontalOverflow: HorizontalOverflow;

        /**
         * Modifies the spacing between letters. Set to 0 by default, which uses the font’s normal letter spacing. Negative values will remove space between letters, and positive values will add more
         * space between letters.
         */
        letterSpacing: number;

        /** Settings for how text outline is used in text drawing. */
        outlineSettings: OutlineSettings;

        /** Font size used. */
        size: number;

        /** If enabled, the rendered text will always scale to fit the boundaries. */
        sizeToFit: boolean;

        /** Text string to be drawn. */
        text: string;

        /** Settings for how the text is drawn, such as fill color or texture. */
        textFill: TextFill;

        /** Controls how text should be handled when it goes past the vertical boundaries. */
        verticalOverflow: VerticalOverflow;
    }

    /**
     * Transforms inputs (Textures or Float32Array) into outputs (Textures or Float32Array) using a neural network. The neural network is represented by an MLAsset, which is set as the model
     * property. For more information, see the MLComponent Overview.
     */
    interface MLComponent extends Component {
        /** Controls the inference mode that MLComponent will run in. For example, GPU, CPU, etc. */
        inferenceMode: MachineLearning.InferenceMode;

        /** Binary ML model supplied by the user. */
        model: Asset.MLAsset;

        /** Function that gets called when model loading is finished. */
        onLoadingFinished: () => void;

        /** Function that gets called when the model stops running. */
        onRunningFinished: () => void;

        /** Render order of the MLComponent. */
        renderOrder: number;

        /** Returns the current status of the neural network model. */
        state: MachineLearning.ModelState;

        /** Builds the MLComponent model when all placeholders are determined. Config is an array of Input and Output placeholders. */
        build(placeholders: BasePlaceholder[]): void;

        /** Stops running the MLComponent. The onRunningFinished callback will not be executed. */
        cancel(): void;

        /** Returns the InputPlaceholder with the matching name. */
        getInput(name: string): InputPlaceholder;

        /** Returns the OutputPlaceholder with the matching name. */
        getOutput(name: string): OutputPlaceholder;

        /** Returns the end time of the scheduled MLComponent run. */
        getScheduledEnd(): MachineLearning.FrameTiming;

        /** Returns the start time of the scheduled MLComponent run. */
        getScheduledStart(): MachineLearning.FrameTiming;

        /** Returns true if running is requested on each frame. */
        isRecurring(): boolean;

        /** Runs the MLComponent once. */
        runImmediate(sync: boolean): void;

        /** Schedules the MLComponent to run at the start timing and terminate at the end timing. The scheduled running will recur if recurring is true. */
        runScheduled(
            recurring: boolean,
            startTiming: MachineLearning.FrameTiming,
            endTiming: MachineLearning.FrameTiming,
        ): void;

        /** Stops running the MLComponent. */
        stop(): void;

        /** If loading asynchronously, makes the entire system wait until loading is finished. */
        waitOnLoading(): void;

        /** If running asynchronously, makes the entire system wait until the last run is finished. */
        waitOnRunning(): void;
    }

    /** Used to track objects in the camera. Moves the local ScreenTransform to match the detected image. See the Object Tracking guide for more information. */
    interface ObjectTracking extends Component {
        /** If true, child objects of this Component’s SceneObject will be disabled when the object is not being tracked. */
        autoEnableWhenTracking: boolean;

        /** The index of the object being tracked. */
        objectIndex: number;

        /** Function that gets called when the tracked object is found. */
        onObjectFound: () => void;

        /** Function that gets called when the tracked object is lost. */
        onObjectLost: () => void;

        /** Returns true if the object is currently being tracked on camera. */
        isTracking(): boolean;

        /** Registers a callback to be executed when the passed in descriptor ends for this tracked object. */
        registerDescriptorEnd(descriptor: string, callback: (descriptor: string) => void): void;

        /** Registers a callback to be executed when the passed in descriptor starts for this tracked object. */
        registerDescriptorStart(descriptor: string, callback: (descriptor: string) => void): void;
    }

    /** Attaches the SceneObject to the mesh surface of a different SceneObject. See the Pin To Mesh guide for more information. */
    interface PinToMeshComponent extends Component {
        /** The position offset to apply. */
        offsetPosition: vec3;

        /** The euler angle offset to apply. Only has an effect when orientation is set to PositionAndDirection. */
        offsetRotation: vec3;

        /** The orientation type to use. */
        orientation: PinToMeshComponent.Orientation;

        /** The UV coordinates on the target mesh to attach to. */
        pinUV: vec2;

        /** The preferred triangle index to attach to when multiple triangles contain the desired UV coordinate. */
        preferredTriangle: number;

        /** Index of the UV coordinate set to use for pinning. */
        preferredUVLayerIndex: number;

        /** The target mesh to attach to. */
        target: BaseMeshVisual;

        /** If enabled, interpolated vertex normals will be used when calculating the attachment position. */
        useInterpolatedVertexNormal: boolean;
    }

    /** Applies ScreenTransform positioning to match the cropped region of a texture. For more information, see the Crop Textures guide. */
    interface RectangleSetter extends Component {
        /** Cropped texture to match the screen region of. Should be a texture using a RectCropTextureProvider, such as a Screen Crop Texture or Face Crop Texture. */
        cropTexture: Asset.Texture;
    }

    /** Overrides the settings on a local ScreenTransform to fit a screen region on the device. See the Screen Transform guide for more information. */
    interface ScreenRegionComponent extends Component {
        /** The region of the screen the local ScreenTransform will be fit to. */
        region: ScreenRegionType;
    }

    /**
     * Used by AnimationMixer to animate a single object in the hierarchy. These are automatically added to SceneObjects when importing animated FBX files. See also: Playing 3D Animation Guide,
     * AnimationMixer, AnimationLayer.
     */
    interface Animation extends Component {
        /** Returns the AnimationLayer under the name layerName. */
        getAnimationLayerByName(layerName: string): Asset.AnimationLayer;

        /** Removes the AnimationLayer under the name layerName. */
        removeAnimationLayerByName(layerName: string): void;

        /** Adds an AnimationLayer under the name layerName. */
        setAnimationLayerByName(layerName: string, animationLayer: Asset.AnimationLayer): void;
    }

    /** Controls playback of animations on the attached SceneObject and its child objects. Please refer to the Playing 3D Animation Guide for setting up and playing animations. */
    interface AnimationMixer extends Component {
        /** Whether this AnimationMixer is set to automatically play animations on start. */
        autoplay: boolean;

        /**
         * A multiplying value for the speed of all animations being controlled by the AnimationMixer. For example, a value of 2.0 will double animation speed, while a value of 0.5 will cut the speed
         * in half.
         */
        speedRatio: number;

        /** Makes a copy of the layer name and stores it as newName. */
        cloneLayer(name: string, newName: string): AnimationMixerLayer;

        /** Adds a new AnimationMixerLayer to this AnimationMixer. */
        createClip(name: string): AnimationMixerLayer;

        /** Returns a list of names of AnimationLayers in this AnimationMixer. */
        getAnimationLayerNames(): string[];

        /** Returns the AnimationMixerLayer with the name name. */
        getLayer(name: string): AnimationMixerLayer;

        /** Returns a list of all AnimationMixerLayers controlled by the AnimationMixer. */
        getLayers(): AnimationMixerLayer[];

        /** Returns the current time ( seconds: in) of the layer named name. */
        getLayerTime(name: string): number;

        /** Pauses animation layers named name, or all layers if name is empty. */
        pause(name: string): void;

        /** Rebuild the animation hierarchy by finding all Animation components in the SceneObject and its children. */
        resetAnimations(): void;

        /** Resumes any paused animation layer with name name, or all layers if name is empty. */
        resume(name: string): void;

        /**
         * Starts playing animation layers named name, or all layers if name is empty. The animation will start with an offset of offset seconds. The animation will play cycles times, or loop forever
         * if cycles is -1.
         */
        start(name: string, offset: number, cycles: number): void;

        /**
         * Starts playing animation layers named name, or all layers if name is empty. The animation will start with an offset of offset seconds. The animation will play cycles times, or loop forever
         * if cycles is -1. eventCallback will be called after any animation layer finishes playing.
         */
        startWithCallback(
            name: string,
            offset: number,
            cycles: number,
            eventCallback: (name: string, animationMixer: AnimationMixer) => void,
        ): void;

        /** Stops any animation layer with name name, or all layers if name is empty. */
        stop(name: string): void;
    }

    /**
     * Used to play audio in a Lens. You can assign an AudioTrackAsset to play through script or through the AudioComponent’s inspector in Lens Studio. See the Playing Audio guide for more
     * information.
     */
    interface AudioComponent extends Component {
        /** The audio asset currently assigned to play. */
        audioTrack: Asset.AudioTrackAsset;

        /** The length ( seconds: in) of the current sound assigned to play. */
        duration: number;

        /** Length ( seconds: in) of a volume fade in applied to the beginning of sound playback. */
        fadeInTime: number;

        /** Length ( seconds: in) of a volume fade out applied to the end of sound playback. */
        fadeOutTime: number;

        /** The current playback time in seconds */
        position: number;

        /** A volume multiplier for any sounds played by this AudioComponent. */
        volume: number;

        /** Returns whether the sound is currently paused. */
        isPaused(): boolean;

        /** Returns whether the AudioComponent is currently playing sound. */
        isPlaying(): boolean;

        /** Pauses the sound. */
        pause(): boolean;

        /** Plays the current sound loops number of times. If loops is -1, the sound will repeat forever. */
        play(loops: number): void;

        /** Resumes a paused sound. */
        resume(): boolean;

        /** Sets the callback function to be called whenever this sound stops playing. */
        setOnFinish(eventCallback: (audioComponent: AudioComponent) => void): void;

        /** Stops the current sound if already playing. */
        stop(fade: boolean): void;
    }

    /** Represents skinning data for rigged meshes. See also: MeshVisual. */
    type Skin = Component;

    /** Represents transform data for screen-aligned 2D sprites. Use on SceneObjects with a SpriteVisual Component. See also: SpriteVisual. */
    interface SpriteAligner extends Component {
        /** The location of the point this sprite is bound to. */
        bindingPoint: vec2;

        /** The width and height of the SpriteVisual. */
        size: vec2;
    }

    /**
     * Allows the MeshVisual provided to this component to handle touches on the screen (blocking Snapchat from receiving the touches), and optionally let certain touch types to pass through (let
     * Snapchat handle the touch).
     */
    interface TouchComponent extends Component {
        /** Adds a MeshVisual as a target for touch detection. */
        addMeshVisual(meshVisual: BaseMeshVisual): void;

        /** Adds a touch type that this component will ignore. */
        addTouchBlockingException(
            exception:
                | "TouchTypeNone"
                | "TouchTypeTouch"
                | "TouchTypeTap"
                | "TouchTypeDoubleTap"
                | "TouchTypeScale"
                | "TouchTypePan"
                | "TouchTypeSwipe",
        ): void;

        /** Returns the minimum bounding box size used for detecting touches. Value range is from 0-1, relative to screen width. */
        getMinimumTouchSize(): number;

        /** Removes a MeshVisual as a target for touch detection. */
        removeMeshVisual(meshVisual: BaseMeshVisual): void;

        /** Sets the camera that will be used for touch detection. */
        setCamera(cameraValue: Camera): void;

        /** Sets the minimum bounding box size used for detecting touches. Value range is from 0-1, relative to screen width. */
        setMinimumTouchSize(minimumSize: number): void;
    }

    /** Used to help control vertex animations on the SceneObject. */
    interface VertexCache extends Component {
        /** The current time of vertex animations on this SceneObject. */
        currentTime: number;

        /** The weight applied to vertex animations on this SceneObject. */
        weight: number;
    }

    /**
     * Used to add an audio effect to a Lens. When present in the scene, it will automatically apply the selected audio effect to recordings made with the Lens. See the Audio Effect guide for more
     * information.
     */
    type AudioEffectComponent = Component;

    /** Controls blend shapes connected to imported animation content. */
    interface BlendShapes extends Component {
        /** If enabled, normal directions are also blended by blend shapes. */
        blendNormals: boolean;

        /** Removes all blend shapes from the BlendShapesVisual. */
        clearBlendShapes(): void;

        /** Returns the weight of blend shape name. */
        getBlendShape(name: string): number;

        /** Returns whether this BlendShapesVisual has a blend shape named name. */
        hasBlendShape(name: string): boolean;

        /** Sets the weight of blend shape name. */
        setBlendShape(name: string, weight: number): void;

        /** Clears the blendshape with the matching name from the BlendShapes component. */
        unsetBlendShape(name: string): void;
    }

    /** Used to track a landmarker in the camera. Moves the SceneObject’s transform to match the detected landmarker scene. See the Landmarker guide for more information. */
    interface DeviceLocationTrackingComponent extends Component {
        /** Returns the  in: distance, meters, to the location. If the distance is unavailable, -1 is returned. */
        distanceToLocation: number;

        /** Returns the user’s current LocationProximityStatus. Useful for telling if a user is close enough to the location to track it. */
        locationProximityStatus: LocationProximityStatus;

        /** A function that gets called when location data is downloaded. */
        onLocationDataDownloaded: () => void;

        /** A function that gets called when location data fails to download. */
        onLocationDataDownloadFailed: () => void;

        /** A function that gets called when location is found. */
        onLocationFound: () => void;

        /** A function that gets called when location is lost. Note this will also happen when the user flips the camera. */
        onLocationLost: () => void;

        /** Returns whether the location landmarker is currently being tracked. */
        isTracking(): boolean;
    }

    /**
     * Moves or rotates the SceneObject to match device orientation.
     *
     * If using “Surface” tracking mode, adding this to a SceneObject enables surface
     * tracking for the scene, and moves the object to a position and rotation that
     * matches the physical camera’s pose in the world. Surface tracking can also be
     * enhanced with native AR by enabling the “Use Native AR” option in the
     * Inspector panel, or through script by setting the component’s
     * surfaceOptions.enhanceWithNativeAR property.
     *
     * If using “Rotation” tracking mode, adding this to a SceneObject will apply the
     * device’s real world rotation to the object.
     *
     * If using “World” tracking mode, adding this to a SceneObject enables native AR
     * tracking for the scene, and moves the object to a position and rotation that
     * matches the physical camera’s pose in the world.
     *
     * See the Tracking Modes guide for more information.
     *
     * Note: This component was named “WorldTracking” in previous versions of Lens
     * Studio.
     */
    interface DeviceTracking extends Component {
        /** Used to access rotation tracking settings. */
        rotationOptions: RotationOptions;

        /** Used to access surface tracking settings. */
        surfaceOptions: SurfaceOptions;

        /** Helps to improve surface tracking accuracy while the target SceneObject is being moved. */
        surfaceTrackingTarget: SceneObject;

        /** Returns the WorldOptions object of this component, which can be used to control World Tracking settings. */
        worldOptions: WorldOptions;

        /** Returns the World Tracking Capabilities of the current device. */
        worldTrackingCapabilities: WorldTrackingCapabilities;

        /** Calculates a histogram of world mesh surfaces within a sphere at the given world position and radius. Only available when world mesh tracking is supported and enabled. */
        calculateWorldMeshHistogram(center: vec3, radius: number): TrackedMeshHistogramResult;

        /** Returns the actual DeviceTrackingMode being used. This may be different from the requested DeviceTrackingMode. */
        getActualDeviceTrackingMode(): DeviceTrackingMode;

        /**
         * Returns an array of BasicTransform objects describing each point that the camera travels through. Each item in the array matches the camera’s basic transform in the corresponding frame of
         * the video feed that the Lens is applied to. Only available in some cases, such as in Lenses for Spectacles 3. When not available, it will return an empty array. See the Lenses
         * for Spectacles guide for more information.
         */
        getDevicePath(): BasicTransform[];

        /**
         * Returns the current frame index of the video feed that the Lens is being applied to. This can be used as an index to access the current BasicTransform in getDevicePath(). Only available in
         * some cases, such as in Lenses for Spectacles 3. When not available, it will return -1. See the Lenses for Spectacles guide for more information.
         */
        getDevicePathIndex(): number;

        /** Returns the DeviceTrackingMode currently requested to be used. This may be different from the actual DeviceTrackingMode being used. */
        getRequestedDeviceTrackingMode(): DeviceTrackingMode;

        /** Returns an array of TrackedMeshHitTestResult that intersect with a ray cast from screen position screenPos. Only available when world mesh tracking is supported and enabled. */
        hitTestWorldMesh(screenPos: vec2): TrackedMeshHitTestResult[];

        /** Returns whether the DeviceTrackingMode is supported. */
        isDeviceTrackingModeSupported(mode: DeviceTrackingMode): boolean;

        /**
         * Returns an array of TrackedMeshHitTestResult that intersect with a ray cast from the world position from and continuing through the world position to. Only available when world mesh
         * tracking is supported and enabled.
         */
        raycastWorldMesh(from: vec3, to: vec3): TrackedMeshHitTestResult[];

        /** Requests that a DeviceTrackingMode be used. This requested change may not happen immediately. */
        requestDeviceTrackingMode(val: DeviceTrackingMode): void;

        /**
         * Resets the World Tracking origin to the point on the surface plane aligned with the screen position position. Screen positions are represented in the range ([0-1], [0-1]), (0,0) being the
         * top-left of the screen and (1,1) being the bottom-right.
         */
        resetTracking(position: vec2): void;

        /**
         * Offsets the default position of the World Tracking surface origin by offset. Avoid using a y value of zero in offset, because it may cause problems with tracking. If used outside of
         * Initialized or TurnOnEvent, you will need to call resetTracking() to apply the offset. Note: calling resetTracking() will overwrite the x and z components of the offset.
         */
        setWorldOriginOffset(offset: vec3): void;
    }

    /**
     * @deprecated
     * This class has been Deprecated. Please instead use the DeviceTracking component with Tracking Mode set to Rotation. See the Tracking Modes guide for more information. Applies the device’s
     * gyroscope rotation to the SceneObject it is attached to.
     */
    type Gyroscope = Component;

    /** Binds the SceneObject to a tracked face. See the Head Attached 3D Objects Guide for more information. */
    interface Head extends Component {
        /** The index of the face this head is attached to. */
        faceIndex: number;

        /** Returns the total number of faces currently being tracked. */
        getFacesCount(): number;

        /** Returns the screen position of the face landmark at the passed in index. */
        getLandmark(index: number): vec2;

        /** Returns the number of face landmarks being tracked. */
        getLandmarkCount(): number;

        /** Returns a list of screen positions of all tracked landmarks. */
        getLandmarks(): vec2[];

        /** Changes the attachment point type used to anchor this object to a face. */
        setAttachmentPointType(attachmentPointType: AttachmentPointType): void;
    }

    /** Used to show and hide hints to the user. For more information and useful helper scripts, see the Scripting Hints Guide. */
    interface HintsComponent extends Component {
        /** Hides the hint with id hintID. */
        hideHint(hintID: Parameters<HintsComponent["showHint"]>[0]): boolean;

        /** Shows the hint with id hintID for a duration of duration seconds. Use a duration of -1 to keep the hint onscreen forever. */
        showHint(
            hintID: `lens_hint_${
                | "blow_a_kiss"
                | "come_closer"
                | `do_not_${"smile" | "try_with_a_friend"}`
                | "find_face"
                | "keep_raising_your_eyebrows"
                | "kiss"
                | "kiss_again"
                | `look_${"around" | "down" | "left" | "right" | "up"}`
                | "make_some_noise"
                | "nod_your_head"
                | `now_${"kiss" | "open_your_mouth" | "raise_your_eyebrows" | "smile"}`
                | `open_your_${"mouth" | "mouth_again"}`
                | `raise_${"eyebrows_or_open_mouth" | "your_eyebrows" | "your_eyebrows_again"}`
                | "smile"
                | "smile_again"
                | "swap_camera"
                | "tap"
                | `tap_${"a_surface" | "ground" | "ground_to_place" | "surface_to_place"}`
                | `try_${"friend" | "rear_camera"}`
                | "turn_around"
                | "walk_through_the_door"}`,
            time: number,
        ): boolean;
    }

    /** Acts as a source of light in the scene. See the Light and Shadows guide for more information about lighting. */
    interface LightSource extends Component {
        /** If enabled, the LightSource will be automatically positioned based on its orientation relative to any shadow casting meshes in the scene. */
        autoLightSourcePosition: boolean;

        /** If enabled, shadowFrustumSize will be automatically updated based on its orientation relative to any shadow casting meshes in the scene. */
        autoShadowFrustumSize: boolean;

        /** If enabled, the LightSource will be able to cast shadows. */
        castsShadows: boolean;

        /** The color of the light. */
        color: vec3;

        /** A color image applied to an imaginary skybox the LightSource will use for color information. */
        diffuseEnvmapTexture: Asset.Texture;

        /** A value used to increase the intensity of light information derived from the diffuseEnvmapTexture exponentially. */
        envmapExposure: number;

        /** Controls the amount of rotation applied to the diffuseEnvmapTexture. */
        envmapRotation: number;

        /** The strength of the light on a scale of 0.0 – 1.0. */
        intensity: number;

        /** The set of layers this LightSource will affect. */
        renderLayer: LayerSet;

        /** Controls the blurring size used when casting shadows from this LightSource. */
        shadowBlurRadius: number;

        /** Controls the color used when casting shadows from this LightSource. */
        shadowColor: vec4;

        /** The lightness and darkness value of the shadow cast by objects from this light source. */
        shadowDensity: number;

        /** The maximum distance at which shadows will be calculated for this LightSource. */
        shadowFrustumFarClipPlane: number;

        /** The minimum distance at which shadows will be calculated for this LightSource. */
        shadowFrustumNearClipPlane: number;

        /** The simulated distance of the light source from objects to calculate the softness of the shadow. */
        shadowFrustumSize: number;

        /** A color image applied to an imaginary skybox the light source will use for specular and reflection information. */
        specularEnvmapTexture: Asset.Texture;

        /** Enable if you would like the LightSource to use information from the diffuseEnvmapTexture for light color information. */
        useEnvmap: boolean;
    }

    /** Every frame, LookAtComponent rotates its SceneObject to face towards a target SceneObject. */
    interface LookAtComponent extends Component {
        /**
         * The “aim” and “up” vectors used when determining rotation. LookAtComponent will try to point the Aim axis of the SceneObject towards the target, while keeping the Up axis of the
         * SceneObject pointing towards worldUpVector.
         */
        aimVectors: LookAtComponent.AimVectors;

        /** Controls the method of rotation being used. */
        lookAtMode: LookAtComponent.LookAtMode;

        /** Adds an additional rotation offset. */
        offsetRotation: quat;

        /** The SceneObject this LookAtComponent targets. */
        target: SceneObject;

        /** The vector to be considered the “up” vector when determining rotation. */
        worldUpVector: LookAtComponent.WorldUpVector;
    }

    /**
     * Handles input information from user touch input via the TouchComponent to control Scale, Rotation, and Translation of objects.
     * ```
     * // Disables the scale functionality on a manipulate component when a user taps
     * //@input Component.ManipulateComponent manip
     *
     * function onTap(eventData)
     * {
     *     script.manip.enableManipulateType(ManipulateType.Scale, false);
     * }
     * var tapEvent = script.createEvent("TapEvent");
     * tapEvent.bind(onTap);
     * ```
     */
    interface ManipulateComponent extends Component {
        /** Changes swivel behavior based on the object’s height relative to the camera. */
        isContextualSwivel: boolean;

        /** The maximum distance the object can travel from the user. */
        maxDistance: number;

        /** The maximum height of the object. */
        maxHeight: number;

        /** The maximum size the object can scale to. */
        maxScale: number;

        /** The minimum distance the object can be from the user. */
        minDistance: number;

        /** The minimum height of the object. */
        minHeight: number;

        /** The minimum size the object can shrink to. */
        minScale: number;

        /** Multiplier for swivel rotation speed. For example, a value of 0.5 will cut rotation speed in half, and a value of 2.0 will double rotation speed. */
        rotationScale: number;

        /** Repositions the object to be within the bounds of minDistance, maxDistance. */
        clampWorldPosition(): void;

        /** Enables or disables the specified ManipulateType for this ManipulateComponent. */
        enableManipulateType(type: ManipulateType, enable: boolean): void;

        /**
         * Checks for an intersection point between the manipulation plane and a line extending from the camera through the specified screen space point. The screen point is passed in as (x, y) with
         * both values ranging from ([0-1], [0-1]), (0,0) being left-top and (1,1) being right-bottom. The result is returned as a ManipulateFrameIntersectResult object.
         */
        intersectManipulateFrame(screenSpacePoint: vec2): ManipulateFrameIntersectResult;

        /** Returns whether the specified ManipulateType is enabled for this ManipulateComponent. */
        isManipulateTypeEnabled(type: ManipulateType): boolean;
    }

    /**
     * Used to track images in the camera. Moves the containing object’s transform to match the detected image. For more information, see the Marker Tracking guide.
     * ```
     * //@input Component.MarkerTrackingComponent markerTrackingComponent
     *
     * // Get whether or not the marker image is being tracked
     * var isMarkerTracking = markerTrackingComponent.isTracking();
     *
     * // Print current status.
     * if (isMarkerTracking) {
     *     print("Image is in Camera feed.");
     * } else {
     *     print("Image is NOT in Camera feed.");
     * }
     * ```
     */
    interface MarkerTrackingComponent extends Component {
        /** If true, child objects of this Component’s SceneObject will be disabled when the marker image is not being tracked. */
        autoEnableWhenTracking: boolean;

        /** The marker asset describing the tracking target. */
        marker: Asset.MarkerAsset;

        /** A function that gets called when marker tracking begins. */
        onMarkerFound: () => void;

        /** A function that gets called when marker tracking is lost. */
        onMarkerLost: () => void;

        /** Returns whether the marker image is currently being tracked in camera. */
        isTracking(): boolean;
    }

    /**
     * Binds scripts to Events and executes them when triggered. Any script can access the ScriptComponent executing them through the variable script. See also: Scripting Overview, Script Events
     * Guide. Lens Studio v1.0.0+
     *
     * Instead of doing the following:
     * ```
     * const typedScript = script as Component.ScriptComponent<{ anInput: number }, { anApiProp: 'some' | 'thing' }>
     * ```
     * Use the following to type your script's inputs and/or api properties by extending the interfaces of `ScriptInputs` and/or `ScriptApi`:
     * ```
     * declare namespace SnapchatLensStudio {
     *     interface ScriptApi {
     *         some?: 'thing' | 'other-thing'
     *     }
     * }
     * ```
     */
    type ScriptComponent<
        Inputs extends object = SnapchatLensStudio.ScriptInputs,
        Api extends object = SnapchatLensStudio.ScriptApi,
    > =
        & {
            /** Adds a new SceneEvent, triggered by eventType events, to the ScriptComponent. */
            createEvent<T extends keyof EventMapping>(eventType: T): EventMapping[T];

            /** Removes a previously added SceneEvent from the ScriptComponent. */
            removeEvent(event: SceneEvent): void;

            /** Generic object accessible by other instances of ScriptComponent. Use this object to store references to properties and methods that need to be accessible from other ScriptComponents. */
            api: Api;
        }
        & Component
        & Inputs;
}

/**
 * Controls animation playback for a single animation layer. See also: AnimationMixer.
 */
interface AnimationMixerLayer extends ScriptObject {
    /** The name of the animation layer being used for this animation. */
    animationLayerName: string;

    /** The number of times this animation will play. If -1, the animation will loop forever. */
    cycles: number;

    /** If true, the animation will stop having an effect. */
    disabled: boolean;

    /** The framerate (frames per second) of the animation. */
    fps: number;

    /** The starting point for this animation clip. If rangeType is set to Time, this is the point to start at in seconds. If rangeType is set to Frames, this is the frame number to start at. */
    from: number;

    /** The name of the AnimationMixerLayer. */
    name: string;

    /**
     * Defines the animation’s looping behavior. If set to AnimationClip.PostInfinity.Cycle, the animation will restart from the beginning each time it loops. If set to AnimationClip.PostInfinity.
     * Oscillate, the animation will switch between normal and reverse playback each time it loops. This is set to Cycle by default.
     */
    postInfinity: AnimationClip.PostInfinity;

    /**
     * The range type used for defining the animation clip. If set to AnimationClip.RangeType.Time, to and from represent times in seconds. If set to AnimationClip.RangeType.Frames, to and from
     * represent frame numbers.
     */
    rangeType: AnimationClip.RangeType;

    /** If true, the animation will play play in reverse. */
    reversed: boolean;

    /** A multiplying value for the speed of this animation. For example, a value of 2.0 will double animation speed, while a value of 0.5 will cut the speed in half. */
    speedRatio: number;

    /** The ending point for this animation clip. If rangeType is set to Time, this is the point to end at in seconds. If rangeType is set to Frames, this is the frame number to end at. */
    to: number;

    /** The weight of this animation layer. Range is from [0-1], 0 being no animation strength and 1 being full animation strength. */
    weight: number;

    /** Returns a copy of this AnimationMixerLayer, with the name changed to newName. */
    clone(newName: string): AnimationMixerLayer;

    /** Returns the length of the animation in seconds. */
    getDuration(): number;

    /** Returns the current playback position of the animation in seconds. */
    getTime(): number;

    /** Returns whether the animation is currently playing. */
    isPlaying(): boolean;

    /** Pauses the animation. */
    pause(): void;

    /** Resumes the animation if it has been paused. */
    resume(): void;

    /** Starts playing the animation with an offset of offsetArg seconds. The animation will play cycles times, or loop forever if cycles is -1. */
    start(offset: number, cycles: number): void;

    /** Starts the animation with an offset of offsetArg seconds. The animation will play cycles times, or loop forever if cycles is -1. eventCallback will be called after the animation finishes. */
    startWithCallback(
        offset: number,
        cycles: number,
        eventCallback: (name: string, animationMixer: Component.AnimationMixer) => void,
    ): void;

    /** Stops the animation from playing and jumps to the animation’s end. */
    stop(): void;
}

declare namespace AnimationClip {
    /**
     * Used by AnimationMixerLayer for setting animation looping behavior.
     * ```
     * // Set an AnimationMixerLayer to oscillate when looping
     * //@input Component.AnimationMixer mixer
     *
     * var layer = script.mixer.getLayers()[0];
     * layer.postInfinity = AnimationClip.PostInfinity.Oscillate;
     * ```
     */
    enum PostInfinity {
        /** The animation will restart from the beginning each time it loops. */
        Cycle,
        /** The animation will switch between normal and reverse playback each time it loops. */
        Oscillate,
    }

    /**
     * Used by AnimationMixerLayer for setting animation clip range type.
     * ```
     * // Set an AnimationMixerLayer's range using start and end time
     * //@input Component.AnimationMixer mixer
     *
     * var layer = script.mixer.getLayers()[0];
     * layer.rangeType = AnimationClip.RangeType.Time;
     * layer.from = 1.0;
     * layer.to = 2.0;
     * ```
     */
    enum RangeType {
        /** Range is specified by start and end time, in seconds */
        Time,
        /** Range is specified by start and end frame numbers */
        Frames,
    }
}

/** Types of screen regions that can be used with ScreenRegionComponent. */
declare enum ScreenRegionType {
    /** The entire screen area of the device. */
    FullFrame,
    /** The screen area shown to the user when recording. On some devices, this region is a subset of FullFrame region. */
    Capture,
    /** The screen area shown to the user when previewing a Snap. On some devices, this region is a subset of Capture region. */
    Preview,
    /** A screen area that will be visible on all devices and won’t overlap Snapchat UI. Safe area to place any UI elements. */
    SafeRender,
    /** The screen area where the round “Snap” button is drawn. */
    RoundButton,
}

/** Used by DeviceLocationTrackingComponent to indicate the user’s distance from the landmarker location. See the Landmarker guide for more information. */
declare enum LocationProximityStatus {
    /** User’s distance cannot be determined or has not been determined yet. */
    Unknown,
    /** User is close enough to the landmarker location to begin tracking. */
    WithinRange,
    /** User is too far away from the landmarker location to track it. */
    OutOfRange,
}

/** Namespace for Machine Learning related classes and methods. For more information, see the Machine Learning Overview. */
declare namespace MachineLearning {
    /** Creates a new InputBuilder object. */
    function createInputBuilder(): InputBuilder;

    /** Creates a new OutputBuilder object. */
    function createOutputBuilder(): OutputBuilder;

    /** Creates a new TransformerBuilder object. */
    function createTransformerBuilder(): TransformerBuilder;

    /** Inference modes used by MLComponent.inferenceMode. Each mode describes how the neural network will be run. */
    enum InferenceMode {
        /** MLComponent will run the neural network on CPU. Available on all devices. */
        CPU,
        /** MLComponent will attempt to run the neural network on GPU. If the device doesn’t support it, CPU mode will be used instead. */
        GPU,
        /** MLComponent will attempt to use a dedicated hardware accelerator to run the neural network. If the device doesn’t support it, GPU mode will be used instead. */
        Accelerator,
        /** MLComponent will automatically decide how to run the neural network based on what is supported. It will start with Accelerator, then fall back to GPU, then CPU. */
        Auto,
    }

    /** Describes the current state of the MLComponent model. For more information, see the MLComponent Scripting guide. */
    enum ModelState {
        /** Model is running */
        Running,
        /** Model is loading */
        Loading,
        /** Model is built and ready to run */
        Idle,
        /** Model is not ready to run */
        NotReady,
    }

    /** Timing options for when MLComponent should start or stop running. Used with MLComponent.runScheduled(). For more information, see the MLComponent Scripting guide. */
    enum FrameTiming {
        /** Only valid as an end timing. There is no exact time specified when MLComponent should finish its run. */
        None,
        /** Run during MLComponent update, before script update. */
        Update,
        /** Run in MLComponent LateUpdate, after all scripts update, but before they get LateUpdate. */
        LateUpdate,
        /** Run at a specific point during frame rendering. */
        OnRender,
    }

    /**
     * Types of output used by OutputPlaceholder.
     * ```
     * //@input Component.MLComponent mlComponent
     * //@input string outputName
     * //@input Component.Image outputImage
     *
     * script.mlComponent.onLoadingFinished = onLoadingFinished;
     *
     * function onLoadingFinished() {
     *     var output = script.mlComponent.getOutput(script.outputName);
     *     if (output.mode == MachineLearning.OutputMode.Data) {
     *         var outputData = output.data;
     *         for (var i = 0; i < outputData.length; i++) {
     *             print(outputData[i]);
     *         }
     *     } else {
     *         var texture = output.texture;
     *         script.outputImage.mainPass.baseTex = texture;
     *     }
     * }
     * //@input vec2 outputSize = {1, 1}
     * //@input string outputName = "probs"
     *
     * var outputChannels = 200;
     *
     * var outputBuilder = MachineLearning.createOutputBuilder();
     * outputBuilder.setName(script.outputName);
     * outputBuilder.setShape(new vec3(script.outputSize.x, script.outputSize.y, outputChannels));
     * outputBuilder.setOutputMode(MachineLearning.OutputMode.Data);
     * var outputPlaceholder = outputBuilder.build();
     * ```
     */
    enum OutputMode {
        /** The output will be in the form of a Texture. */
        Texture,
        /** The output will be in the form of a Float32Array. */
        Data,
    }
}

/** Builds InputPlaceHolders for MLComponent. */
interface InputBuilder extends ScriptObject {
    /** Builds and returns a new InputPlaceholder. */
    build(): InputPlaceholder;

    /** Sets the input texture of the InputPlaceholder to be built. */
    setInputTexture(texture: Asset.Texture): InputBuilder;

    /** Sets the name of the InputPlaceholder to be built. */
    setName(name: string): InputBuilder;

    /** Sets the shape of the InputPlaceholder to be built. */
    setShape(shape: vec3): InputBuilder;

    /** Sets the Transformer of the InputPlaceholder to be built. */
    setTransformer(transformer: Transformer): InputBuilder;
}

/** Builds OutputPlaceholders for MLComponent. */
interface OutputBuilder extends ScriptObject {
    /** Builds and returns a new OutputPlaceholder. */
    build(): OutputPlaceholder;

    /** Sets the name of the OutputPlaceholder to be built. */
    setName(name: string): OutputBuilder;

    /** Sets the OutputMode of the OutputPlaceholder to be built. */
    setOutputMode(outputMode: MachineLearning.OutputMode): OutputBuilder;

    /** Sets the shape of the OutputPlaceholder to be built. */
    setShape(shape: vec3): OutputBuilder;

    /** Sets the Transformer of the OutputPlaceholder to be built. */
    setTransformer(transformer: Transformer): OutputBuilder;
}

/** Builds Transformer objects for MLComponent. */
interface TransformerBuilder extends ScriptObject {
    /** Builds and returns a Transformer object based on the current settings. */
    build(): Transformer;

    /** Sets the fill value used. */
    setFillColor(color: vec4): TransformerBuilder;

    /** Enables or disables horizontal flipping. */
    setFlipX(value: boolean): TransformerBuilder;

    /** Enables or disables vertical flipping. */
    setFlipY(value: boolean): TransformerBuilder;

    /** Sets the horizontal alignment type used. */
    setHorizontalAlignment(mode: HorizontalAlignment): TransformerBuilder;

    /** Sets the rotation type used. */
    setRotation(mode: TransformerRotation): TransformerBuilder;

    /** Sets the stretching type used. */
    setStretch(value: boolean): TransformerBuilder;

    /** Sets the vertical alignment type used. */
    setVerticalAlignment(mode: VerticalAlignment): TransformerBuilder;
}

/** Rotation types used by TransformBuilder. */
declare enum TransformerRotation {
    /** No rotation */
    None,
    /** Rotates by 90 degrees */
    Rotate90,
    /** Rotates by 180 degrees */
    Rotate180,
    /** Rotates by 270 degrees */
    Rotate270,
}

/** Applies additional transform processing on data for InputPlaceholders and OutputPlaceholders used with MLComponent. For more information, see the MLComponent Overview. */
interface Transformer extends ScriptObject {
    /** Inverse transformation matrix of this Transformer. */
    inverseMatrix: mat3;

    /** Transformation matrix of this Transformer. */
    matrix: mat3;
}

/** Base class for Input and Output Placeholders used by MLComponent. */
interface BasePlaceholder extends ScriptObject {
    /** The name of the Placeholder. */
    name: string;

    /** The shape of the Placeholder’s data. */
    shape: vec3;

    /** Transformer object for applying transformations on the PlaceHolder’s data. */
    transformer: Transformer;
}

/** Provides output data from the neural network used by an MLComponent. For more information, see the MLComponent Scripting guide. */
interface OutputPlaceholder extends BasePlaceholder {
    /** Output as a Float32Array. Usable when mode is set to MachineLearning.OutputMode.Data. */
    data: Float32Array;

    /** Which type of data the output is provided as. For example, Texture or Data. */
    mode: MachineLearning.OutputMode;

    /** Output as a Texture. Usable when mode is set to MachineLearning.OutputMode.Texture. */
    texture: Asset.Texture;
}

/** Controls input data for a neural network used by an MLComponent. For more information, see the MLComponent Scripting guide. */
interface InputPlaceholder extends BasePlaceholder {
    /** Data used as input. */
    data: Float32Array;

    /** Texture used as input. */
    texture: Asset.Texture;
}

/** Provides histogram information about tracked world mesh faces in a given area. Returned by DeviceTracking.calculateWorldMeshHistogram(). Lens Studio v3.2+ */
interface TrackedMeshHistogramResult extends ScriptObject {
    /** Average normal direction, in world space, of the mesh faces. */
    avgNormal: vec3;

    /**
     * Array of relative proportions for each classification, in the order described below. The values all add up to a total of 1.0. The classification value order is: * 0: None * 1: Wall * 2: Floor
     * * 3: Ceiling * 4: Table * 5: Seat * 6: Window * 7: Door
     */
    histogram: number[];
}

/** Used with DeviceTracking.rotationOptions to change settings for Rotation tracking mode. */
interface RotationOptions extends ScriptObject {
    /** If enabled, rotation will be inverted. */
    invertRotation: boolean;
}

/** Used with DeviceTracking.surfaceOptions to change settings for Surface tracking mode. */
interface SurfaceOptions extends ScriptObject {
    /** If enabled, surface tracking will be improved using native AR tracking. */
    enhanceWithNativeAR: boolean;
}

/** Holds settings for world mesh tracking in DeviceTracking component. Accessible through DeviceTracking.worldOptions. */
interface WorldOptions extends ScriptObject {
    /** Enables or disables world mesh classification gathering. */
    enableWorldMeshesClassificationTracking: boolean;

    /** Enables or disables the generation of world meshes. */
    enableWorldMeshesTracking: boolean;
}

/** Provides information about whether certain world tracking features are supported by the device. */
interface WorldTrackingCapabilities extends ScriptObject {
    /** Returns true if the device supports scene reconstruction. */
    sceneReconstructionSupported: boolean;
}

/** Provides information about a TrackedMesh surface hit during a raycast. Is returned in an array when calling DeviceTracking.hitTestWorldMesh() or DeviceTracking.raycastWorldMesh(). */
interface TrackedMeshHitTestResult extends ScriptObject {
    /** Returns the classification of the mesh face at the intersection point. The classification values are: * 0: None * 1: Wall * 2: Floor * 3: Ceiling * 4: Table * 5: Seat * 6: Window * 7: Door */
    classification: number;

    /** Returns the TrackedMesh that was hit. */
    mesh: TrackedMesh;

    /** Returns the world space normal direction of the intersection point. */
    normal: vec3;

    /** Returns the world space position of the intersection point. */
    position: vec3;
}

/** Provides basic information about a transformation. See also: DeviceTracking */
interface BasicTransform extends ScriptObject {
    /** Returns the inverted world matrix of the BasicTransform. */
    getInvertedMatrix(): mat4;

    /** Returns the world matrix of the BasicTransform. */
    getMatrix(): mat4;

    /** Returns the world position of the BasicTransform. */
    getPosition(): vec3;

    /** Returns the world rotation of the BasicTransform. */
    getRotation(): quat;

    /** Returns the world scale of the BasicTransform. */
    getScale(): vec3;
}

declare namespace Camera {
    /** Used in Camera’s depthBufferMode property. Each mode is suited for handling objects at a certain distance range. For more information on depth modes, see the Camera and Layers guide. */
    enum DepthBufferMode {
        /** Gives higher depth precision on nearby objects, so is better suited for scenes near to the camera. */
        Regular,
        /** Gives higher depth precision on far away objects, so is better suited for scenes far away from the camera. */
        Logarithmic,
    }

    /** Used in Camera’s devicePropertyUsage property. Specifies which camera properties should be overridden by device properties. */
    enum DeviceProperty {
        /** No Camera properties are overridden with device properties. */
        None,
        /** Overrides the Camera’s aspect property to use the device’s aspect ratio instead. */
        Aspect,
        /** Overrides the Camera’s fov property to use the device’s field of view instead. */
        Fov,
        /** Overrides both aspect and fov with the device’s properties. */
        All,
    }

    /** Returned from Camera’s type property. */
    enum Type {
        /** Simulates how perspective and depth perception work in the real world. Useful for rendering objects in 3D space. */
        Perspective,
        /** Does not simulate perspective distortion. Useful for 2D effects like Images and Text. */
        Orthographic,
    }
}

declare namespace PinToMeshComponent {
    enum Orientation {
        /** Pins only the position. Rotation is independent from the target mesh. */
        OnlyPosition,
        /** Pins both the position and direction. The normal of the target mesh is the Y axis. The U texture coordinate of the target mesh’s UV is the X axis. */
        PositionAndDirection,
    }
}

declare namespace LookAtComponent {
    /**
     * The “aim” and “up” vectors used with LookAtComponent when determining rotation. LookAtComponent will try to point the Aim axis of the SceneObject towards the target, while keeping the Up axis
     * of the SceneObject pointing towards worldUpVector.
     */
    enum AimVectors {
        /** X Aim, Y Up */
        XAimYUp,
        /** X Aim, Z Up */
        XAimZUp,
        /** Y Aim, X Up */
        YAimXUp,
        /** Y Aim, Z Up */
        YAimZUp,
        /** Z Aim, X Up */
        ZAimXUp,
        /** Z Aim, Y Up */
        ZAimYUp,
        /** X Aim, -Y Up */
        XAimNegativeYUp,
        /** X Aim, -Z Up */
        XAimNegativeZUp,
        /** Y Aim, -X Up */
        YAimNegativeXUp,
        /** Y Aim, -Z Up */
        YAimNegativeZUp,
        /** Z Aim, -X Up */
        ZAimNegativeXUp,
        /** Z Aim, -Y Up */
        ZAimNegativeYUp,
        /** -X Aim, Y Up */
        NegativeXAimYUp,
        /** -X Aim, Z Up */
        NegativeXAimZUp,
        /** -Y Aim, X Up */
        NegativeYAimXUp,
        /** -Y Aim, Z Up */
        NegativeYAimZUp,
        /** -Z Aim, X Up */
        NegativeZAimXUp,
        /** -Z Aim, Y Up */
        NegativeZAimYUp,
        /** -X Aim, -Y Up */
        NegativeXAimNegativeYUp,
        /** -X Aim, -Z Up */
        NegativeXAimNegativeZUp,
        /** -Y Aim, -X Up */
        NegativeYAimNegativeXUp,
        /** -Y Aim, -Z Up */
        NegativeYAimNegativeZUp,
        /** -Z Aim, -X Up */
        NegativeZAimNegativeXUp,
        /** -Z Aim, -Y Up */
        NegativeZAimNegativeYUp,
    }

    /**
     * Modes used in LookAtComponent.lookAtMode to determine the rotation method being used.
     * ```
     * // @input Component.LookAtComponent lookAt
     *
     * script.lookAt.lookAtMode = LookAtComponent.LookAtMode.LookAtPoint;
     * script.lookAt.target = script.getSceneObject();
     * ```
     */
    enum LookAtMode {
        /** Rotation is based on the target object’s position */
        LookAtPoint,
        /** Rotation is based on the target object’s rotation */
        LookAtDirection,
    }

    /**
     * Used with LookAtComponent to set the “up” vector when determining rotation.
     * ```
     * // Set the LookAtComponent's WorldUpVector to SceneY
     * // @input Component.LookAtComponent lookAtComponent
     * script.lookAtComponent.worldUpVector = LookAtComponent.WorldUpVector.SceneY;
     * ```
     */
    enum WorldUpVector {
        /** Scene’s X vector */
        SceneX,
        /** Scene’s Y vector */
        SceneY,
        /** Scene’s Z vector */
        SceneZ,
        /** Target object’s X vector */
        TargetX,
        /** Target object’s Y vector */
        TargetY,
        /** Target object’s Z vector */
        TargetZ,
        /** Current object’s X vector */
        ObjectX,
        /** Current object’s Y vector */
        ObjectY,
        /** Current object’s Z vector */
        ObjectZ,
    }
}

/** Represents the Lens scene. Accessible through global.scene. */
interface ScriptScene extends ScriptObject {
    /** Creates a new Render Target texture with a RenderTargetProvider as its control property. */
    createRenderTargetTexture(): Asset.Texture;

    /** Adds a new SceneObject named name to the scene. */
    createSceneObject(name: string): SceneObject;

    /**
     * Returns a string describing the currently active device camera. Returns “back” if the rear-facing ( World: aka) camera is active. Returns “front” if the front-facing ( Selfie: aka) camera is
     * active. Otherwise, the camera is not initialized.
     */
    getCameraType(): string;

    /** Returns the root SceneObject at index index in the current scene. */
    getRootObject(index: number): SceneObject;

    /** Returns the number of SceneObjects in the current scene. */
    getRootObjectsCount(): number;

    /** Returns whether or not the scene is currently being recorded. */
    isRecording(): boolean;
}

/**
 * Low-level data class.
 */
interface SerializableWithUID extends ScriptObject {
    /** Returns true if this object is the same as other. Useful for checking if two references point to the same thing. */
    isSame(other: SerializableWithUID): boolean;
}

/** An object in the scene hierarchy, containing a Transform and possibly Components. A script can access the SceneObject holding it through the method script.getSceneObject(). */
interface SceneObject extends SerializableWithUID {
    /** Whether the SceneObject, including its components and children, is enabled or disabled. */
    enabled: boolean;

    /** Gets or sets the LayerSet of layers this SceneObject belongs to. This is used to determine which Cameras will render the SceneObject. */
    layer: LayerSet;

    /** The name of the SceneObject. */
    name: string;

    /** Copies component and adds it to the SceneObject, then returns it. */
    copyComponent(component: Component): Component;

    /** Creates a shallow copy of the passed in sceneObject (not including its hierarchy), and parents it to this SceneObject. */
    copySceneObject(sceneObject: SceneObject): SceneObject;

    /** Creates a deep copy of the passed in sceneObject (including its hierarchy), and parents it to this SceneObject. */
    copyWholeHierarchy(sceneObject: SceneObject): SceneObject;

    /** Adds a new component of type typeName to the SceneObject. */
    createComponent(typeName: string): Component;

    /** Destroys the SceneObject. */
    destroy(): void;

    /** Returns this SceneObject’s child at index index. */
    getChild(index: number): SceneObject;

    /** Returns the number of children the SceneObject has. */
    getChildrenCount(): number;

    /** Returns the first attached Component with type matching or deriving from componentType. */
    getComponent<T extends keyof SnapchatLensStudio.ComponentMapping>(
        componentType: T,
    ): SnapchatLensStudio.ComponentMapping[T];
    /** Returns the first attached Component with type matching or deriving from componentType. */
    getComponent(componentType: string): Component;

    /** Returns a list of attached components with types matching or deriving from componentType. */
    getComponents<T extends keyof SnapchatLensStudio.ComponentMapping>(
        componentType: T,
    ): Array<SnapchatLensStudio.ComponentMapping[T]>;
    /** Returns a list of attached components with types matching or deriving from componentType. */
    getComponents(componentType: string): Component[];

    /** Returns the SceneObject’s parent in the hierarchy, or null if there isn’t one. */
    getParent(): SceneObject;

    /** Returns the Transform attached to the SceneObject. */
    getTransform(): Transform;

    /** Returns whether the SceneObject has a parent in the scene hierarchy. */
    hasParent(): boolean;

    /** Unparents the SceneObject in the hierarchy, making it an orphan. */
    removeParent(): void;

    /** Sets the SceneObject’s parent to newParent in the scene hierarchy. */
    setParent(newParent: SceneObject): void;

    /** Changes the parent of the SceneObject without altering its world position, rotation, or scale. */
    setParentPreserveWorldTransform(newParent: SceneObject): void;
}

/** Used to describe a set of layers that an object belongs to or interacts with. See SceneObject’s layer property, Camera’s renderLayer property, and LightSource’s renderLayer property. */
interface LayerSet {
    /** Returns true if all layers in the other LayerSet are also present in this one. */
    contains(other: LayerSet): boolean;

    /** Returns a new LayerSet that contains layers present in this LayerSet but not present in other. */
    except(other: LayerSet): LayerSet;

    /** Returns a new LayerSet that only contains layers present in both this LayerSet and other. */
    intersect(other: LayerSet): LayerSet;

    /** Returns true if this LayerSet contains no layers. */
    isEmpty(): boolean;

    /** Returns a string representation of this LayerSet. */
    toString(): string;

    /** Returns a new LayerSet combining this LayerSet and other. */
    union(other: LayerSet): LayerSet;
}

declare namespace LayerSet {
    /** Returns a new LayerSet based on the passed in number. */
    function fromNumber(layers: number): LayerSet;
}

/**
 * Controls the position, rotation, and scale of a SceneObject. Every SceneObject automatically has a Transform attached.
 * Lens Studio v1.0.0+
 */
interface Transform extends ScriptObject {
    /** Returns the Transform’s back directional vector. */
    back: vec3;

    /** Returns the Transform’s down directional vector. */
    down: vec3;

    /** Returns the Transform’s forward directional vector. */
    forward: vec3;

    /** Returns the Transform’s left directional vector. */
    left: vec3;

    /** Returns the Transform’s right directional vector. */
    right: vec3;

    /** Returns the Transform’s up directional vector. */
    up: vec3;

    /** Returns the Transform’s world-to-local transformation matrix. */
    getInvertedWorldTransform(): mat4;

    /** Returns the Transform’s position relative to its parent. */
    getLocalPosition(): vec3;

    /** Returns the Transform’s rotation relative to its parent. */
    getLocalRotation(): quat;

    /** Returns the Transform’s scale relative to its parent. */
    getLocalScale(): vec3;

    /** Returns the SceneObject the Transform is attached to. */
    getSceneObject(): SceneObject;

    /** Returns the Transform’s position relative to the world. */
    getWorldPosition(): vec3;

    /** Returns the Transform’s rotation relative to the world. */
    getWorldRotation(): quat;

    /** Returns the Transform’s scale relative to the world. */
    getWorldScale(): vec3;

    /** Returns the Transform’s local-to-world transformation matrix. */
    getWorldTransform(): mat4;

    /** Sets the Transform’s position relative to its parent. */
    setLocalPosition(pos: vec3): void;

    /** Sets the Transform’s rotation relative to its parent. */
    setLocalRotation(rotation: quat): void;

    /** Sets the Transform’s scale relative to its parent. */
    setLocalScale(scale: vec3): void;

    /** Sets the Transform’s position relative to the world. */
    setWorldPosition(pos: vec3): void;

    /** Sets the Transform’s rotation relative to the world. */
    setWorldRotation(rotation: quat): void;

    /** Sets the Transform’s scale relative to the world. This may produce lossy results when parent objects are rotated, so use setLocalScale( instead: ) if possible. */
    setWorldScale(scale: vec3): void;
}

/** The base class for animation tracks. */
type AnimationTrack = ScriptObject;

/** The base class for animation tracks using float values. */
type FloatAnimationTrack = AnimationTrack;

/** Represents an animation track using vec2 value keyframes. */
type Vec2AnimationTrack = AnimationTrack;

/** Represents an animation track using vec2 value keyframes. */
interface Vec2AnimationTrackKeyFramed extends Vec2AnimationTrack {
    /** Adds a keyframe value value at time time. */
    addKey(time: number, value: vec2): void;

    /** Removes all keyframes. */
    removeAllKeys(): void;

    /** Removes the keyframe at index. */
    removeKeyAt(index: number): void;
}

/** Represents an animation track using float value keyframes. */
interface FloatAnimationTrackKeyFramed extends FloatAnimationTrack {
    /** Adds a key with value value at time time. */
    addKey(time: number, value: number): void;

    /** Removes all keys. */
    removeAllKeys(): void;

    /** Removes key at index index. */
    removeKeyAt(index: number): void;
}

/** Represents an animation track using vec3 value keyframes for a bezier curve. */
interface FloatBezierAnimationTrackKeyFramed extends FloatAnimationTrack {
    /** Adds a key with value value at time time. */
    addKey(time: number, value: vec3): void;

    /** Removes all keys. */
    removeAllKeys(): void;

    /** Removes key at index index. */
    removeKeyAt(index: number): void;
}

/** Represents an animation track using vec3 value keyframes. */
type Vec3AnimationTrack = AnimationTrack;

/** Represents an animation track using vec3 value keyframes. */
interface Vec3AnimationTrackKeyFramed extends Vec3AnimationTrack {
    /** Adds a keyframe value value at time time. */
    addKey(time: number, value: vec3): void;

    /** Removes all keyframes. */
    removeAllKeys(): void;

    /** Removes the keyframe at index. */
    removeKeyAt(index: number): void;
}

/** Represents an animation track using vec3 animation tracks. */
interface Vec3AnimationTrackXYZ extends Vec3AnimationTrack {
    /** Returns the child track at index index */
    getChildTrackByIndex(index: number): AnimationTrack;

    /** Sets the child track at index index to track */
    setChildTrackByIndex(index: number, track: AnimationTrack): void;
}

/** The base class for animation tracks using quaternion values. */
type QuaternionAnimationTrack = AnimationTrack;

/** Represents an animation track using quaternion value keyframes. */
interface QuaternionAnimationTrackKeyFramed extends QuaternionAnimationTrack {
    /** Adds a key with value value at time time. */
    addKey(time: number, value: quat): void;

    /** Removes all keys. */
    removeAllKeys(): void;

    /** Removes key at index index. */
    removeKeyAt(index: number): void;
}

/** Represents a rotation animation track using euler angles. */
interface QuaternionAnimationTrackXYZEuler extends QuaternionAnimationTrack {
    /** Returns child track at index index. */
    getChildTrackByIndex(index: number): AnimationTrack;

    /** Sets child track at index index to track track. */
    setChildTrackByIndex(index: number, track: AnimationTrack): void;
}

/** The base class for animation tracks using integer values. */
type IntAnimationTrack = AnimationTrack;

/** Represents an animation track using stepped integer value keyframes. */
interface IntStepAnimationTrackKeyFramed extends IntAnimationTrack {
    /** Adds a key with value value at time time. */
    addKey(time: number, value: number): void;

    /** Removes all keys. */
    removeAllKeys(): void;

    /** Removes key at index index. */
    removeKeyAt(index: number): void;
}

/** Represents an animation track using stepped integer value keyframes. */
interface IntStepNoLerpAnimationTrackKeyFramed extends IntAnimationTrack {
    /** Adds a key with value value at time time. */
    addKey(time: number, value: number): void;

    /** Removes all keys. */
    removeAllKeys(): void;

    /** Removes key at index index. */
    removeKeyAt(index: number): void;
}

/** Base class for all assets used in the engine. */
interface Asset extends SerializableWithUID {
    /**
     * The name of the Asset in Lens Studio.
     */
    name: string;
}

declare namespace Asset {
    /** File based asset. */
    type BinAsset = Asset;

    /**
     * Binary ML model supplied by the user.
     * ```
     * //@input Asset.MLAsset model
     * var mlComponent = script.sceneObject.createComponent('MLComponent');
     * mlComponent.model = script.model;
     * ```
     */
    type MLAsset = BinAsset;

    /** Segmentation model used for SegmentationTextureProvider. */
    type SegmentationModel = BinAsset;

    type AudioEffectAsset = Asset;
    /** Represents an audio file asset. See also: AudioComponent. */
    type AudioTrackAsset = Asset;
    type Font = Asset;

    /**
     * Defines a marker to use for Marker Tracking with MarkerTrackingComponent. For more information, see the Marker Tracking guide.
     * ```
     * // Set the MarkerAsset on a MarkerTracking component
     *
     * //@input Component.MarkerTrackingComponent markerTracker
     * //@input Asset.MarkerAsset marker
     *
     * script.markerTracker.marker = script.marker;
     * ```
     */
    interface MarkerAsset extends Asset {
        /** Returns the aspect ratio (width / height) of the texture used by the marker asset. */
        getAspectRatio(): number;
    }

    /**
     * An asset that describes how visual objects should appear. Each Material is a collection of Passes which define the actual rendering passes. Materials are used by MeshVisuals for drawing meshes
     * in the scene.
     * ```
     * // Gets the first pass of a material on a sprite and plays the animation from its texture
     * var sprite = script.getSceneObject().getFirstComponent("Component.SpriteVisual");
     * var material = sprite.getMaterial(0);
     * material.getPass(0).baseTex.control.play(-1,0.0);
     * // Print number of passes
     * print("Pass count = " + material.getPassCount().toString());
     * ```
     */
    interface Material extends Asset {
        /** The first Pass of the Material. */
        mainPass: Pass;

        /** Returns a copy of the Material. */
        clone(): Material;

        /** Returns the Pass of the Material at index index. */
        getPass(index: number): Pass;

        /** Returns the number of Passes for the Material. */
        getPassCount(): number;
    }

    type ObjectPrefab = Asset;
    /** Represents a mesh asset. See also: Asset.RenderMeshVisual. */
    interface RenderMesh extends Asset {
        /** Returns the maximum value in each dimension of the axis-aligned bounding box containing this mesh. */
        aabbMax: vec3;

        /** Returns the minimum value in each dimension of the axis-aligned bounding box containing this mesh. */
        aabbMin: vec3;

        /** The RenderObjectProvider for this RenderMesh, which can provide more controls depending on the mesh type. See also: FaceRenderObjectProvider */
        control: RenderObjectProvider;

        /** The index data type used by this mesh. */
        indexType: MeshIndexType;

        /** The topology type used by this mesh. */
        topology: MeshTopology;
    }

    /** Represents a texture file asset. */
    interface Texture extends Asset {
        /** The TextureProvider for the texture, which may control things like animation depending on the texture type. See also: AnimatedTextureFileProvider. */
        control: TextureProvider;

        /** Returns a Texture that captures the current state of this Texture Asset. */
        copyFrame(): Texture;

        /** Returns the Colorspace of the Texture. */
        getColorspace(): Colorspace;

        /** Returns the height of the texture. */
        getHeight(): number;

        /** Returns the width of the texture. */
        getWidth(): number;
    }

    /**
     * Configures an animation layer for a single SceneObject. Gives access to position, rotation, scale and blend shape animation tracks. See also: Playing 3D Animation Guide, AnimationMixer,
     * Animation.
     */
    interface AnimationLayer extends Asset {
        /** The Vec3AnimationTrack controlling position in this AnimationLayer. */
        position: Vec3AnimationTrack;

        /** The QuaternionAnimationTrack controlling rotation in this AnimationLayer. */
        rotation: QuaternionAnimationTrack;

        /** The Vec3AnimationTrack controlling scale in this AnimationLayer. */
        scale: Vec3AnimationTrack;

        /** The IntAnimationTrack controlling visibility in this AnimationLayer. */
        visibility: IntAnimationTrack;

        /** Returns a FloatAnimationTrack from this AnimationLayer’s blend shapes. */
        getBlendShapeTrack(shapeName: string): FloatAnimationTrack;

        /** Sets or adds a FloatAnimationTrack to this AnimationLayer’s blend shapes. */
        setBlendShapeTrack(shapeName: string, track: FloatAnimationTrack): void;
    }
}

/** Provider for RenderMesh data. */
type RenderObjectProvider = Provider;

/** Mesh provider for a Face Mesh. Accessible through the control property on a Face Mesh RenderMesh. */
interface FaceRenderObjectProvider extends RenderObjectProvider {
    /** When true, a small area in the corners of the eyes will be included in the Face Mesh geometry. */
    eyeCornerGeometryEnabled: boolean;

    /** When true, eyes will be included in the Face Mesh geometry. */
    eyeGeometryEnabled: boolean;

    /** When true, the general face (not including eyes and mouth) will be included in the Face Mesh geometry. */
    faceGeometryEnabled: boolean;

    /** Index of the face this FaceRenderObjectProvider mirrors. */
    faceIndex: number;

    /** When true, the mouth will be included in the Face Mesh geometry. */
    mouthGeometryEnabled: boolean;

    /** When true, the skull will be included in the Face Mesh geometry. */
    skullGeometryEnabled: boolean;

    /** Returns a list of all expression names being tracked. */
    getExpressionNames(): Array<keyof Expressions>;

    /** Returns the weight of the expression with the passed in name. See Expressions for valid expression names. */
    getExpressionWeightByName(expressionName: keyof Expressions): number;

    /** Returns a Float32Array of all expression weights being tracked. */
    getExpressionWeights(): Float32Array;
}

/**
 * Expression names used with FaceRenderObjectProvider.getExpressionWeightByName() and returned by FaceRenderObjectProvider.getExpressionNames().
 * ```
 * // @input Asset.RenderMesh faceMesh
 * var mouthCloseWeight = script.faceMesh.control.getExpressionWeightByName(Expressions.MouthClose);
 * ```
 */
type Expressions = {
    [
        E in
            | `Brows${`Down${"Left" | "Right"}` | `Up${"Center" | "Left" | "Right"}`}`
            | `CheekSquint${"Left" | "Right"}`
            | `Eye${"Blink" | "Down" | "In" | "Open" | "Out" | "Squint" | "Up"}${"Left" | "Right"}`
            | `Jaw${"Forward" | "Left" | "Right" | "Open"}`
            | `${
                | `Lips${"Funnel" | "Pucker"}`
                | `LowerLip${`Down${"Left" | "Right"}` | "Raise"}`
                | `UpperLip${"Close" | "Raise" | `Up${"Left" | "Right"}`}`}`
            | `Mouth${`Close` | `${"Dimple" | "Frown" | "" | "Smile" | "Stretch" | "Up"}${"Left" | "Right"}`}`
            | "Puff"
            | `Sneer${"Left" | "Right"}`
    ]: E;
};

/** RenderObjectProvider for mesh objects generated procedurally. */
type ProceduralMeshRenderObjectProvider = RenderObjectProvider;

/**
 * Provider for RenderMesh data representing the estimated shape of real world objects generated from depth information. Only available when world mesh tracking is supported and enabled. Lens Studio
 * v3.2+
 */
interface WorldRenderObjectProvider extends RenderObjectProvider {
    /** Enable or disable world mesh tracking. */
    enableWorldMeshesTracking: boolean;

    /** Returns the number of faces of the mesh. */
    faceCount: number;

    /** Mesh classification format being used. */
    meshClassificationFormat: MeshClassificationFormat;

    /** Enable or disable normal direction usage. */
    useNormals: boolean;

    /** Returns the number of vertices of the mesh. */
    vertexCount: number;
}

/** Provider for AudioEffectAsset. */
type AudioEffectProvider = Provider;

/** Base class for marker providers. For more information, see the Marker Tracking guide. */
type MarkerProvider = Provider;

/** The base class for specialized Texture providers. Can be accessed through Texture.control. */
interface TextureProvider extends Provider {
    /** Returns the texture’s aspect ratio, which is calculated as width / height. */
    getAspect(): number;

    /** Returns the height of the texture in pixels. */
    getHeight(): number;

    /** Returns the width of the texture in pixels. */
    getWidth(): number;
}

/** Controls an animated texture resource. Can be accessed from Texture.control on an animated texture. See also: 2D Animation Guide. */
interface AnimatedTextureFileProvider extends TextureProvider {
    /** Returns whether the animation was set to automatically play and loop. */
    isAutoplay: boolean;

    /** If enabled, the animation will alternate between normal and reverse each time it loops. */
    isPingPong: boolean;

    /** Whether the animation plays in reverse. */
    isReversed: boolean;

    /** The animation track used to control the frame animation. */
    track: IntStepAnimationTrackKeyFramed;

    /** Returns the index of the frame that is currently playing. */
    getCurrentPlayingFrame(): number;

    /** Returns how long the animation is in seconds. */
    getDuration(): number;

    /** Returns the number of frames in the animation. */
    getFramesCount(): number;

    /** Returns whether the animation is finished playing. */
    isFinished(): boolean;

    /** Returns whether the animation is currently paused. */
    isPaused(): boolean;

    /** Returns whether the animation is currently playing. */
    isPlaying(): boolean;

    /** Pauses the animation. */
    pause(): void;

    /** Pauses the animation at frame frameIndex. */
    pauseAtFrame(frameIndex: number): void;

    /** Plays the animation loops times, starting with an offset of offset seconds. */
    play(loops: number, offset: number): void;

    /** Start playing the animation from frame frameIndex, loops times. */
    playFromFrame(frameIndex: number, loops: number): void;

    /** Resumes a paused animation from the frame that was last played. */
    resume(): void;

    /** Sets the callback function to be called whenever the animation stops playing. */
    setOnFinish(eventCallback: (animatedTexture: AnimatedTextureFileProvider) => void): void;

    /** Stops the animation. */
    stop(): void;
}

/** Base class for Texture Providers that crop an input texture. */
interface CropTextureProvider extends TextureProvider {
    /** Input texture to crop. */
    inputTexture: Asset.Texture;
}

/**
 * Texture Provider giving a cropped region of the input texture, calculated based on face position. Can be accessed using Texture.control on a FaceCropTexture asset. For more information, see the
 * Crop Textures guide.
 */
interface FaceCropTextureProvider extends CropTextureProvider {
    /** Ratio of the mouth position on the cropped texture. Value ranges from 0 to 1, with 0 having no effect and 1 centering the image on the mouth. */
    faceCenterMouthWeight: number;

    /** Index of the face being tracked. */
    faceIndex: number;

    /** Scaling of the cropped texture. */
    textureScale: vec2;
}

/**
 * Texture Provider providing a cropped region of the input texture. The region is specified by the cropRect in local space and rotation. Can be accessed using Texture.control on a RectCropTexture
 * asset, such as a Screen Crop Texture. For more information, see the Crop Textures guide.
 */
interface RectCropTextureProvider extends CropTextureProvider {
    /** The cropped region to draw. */
    cropRect: Rect;

    /**  in: Angle, radians, the cropped region is rotated by. */
    rotation: number;
}

/** An axis aligned rectangle. Used by anchors and offsets in ScreenTransform to represent screen boundaries. */
interface Rect extends ScriptObject {
    /** The y position of the rectangle’s bottom side. */
    bottom: number;

    /** The x position of the rectangle’s left side. */
    left: number;

    /** The x position of the rectangle’s right side. */
    right: number;

    /** The y position of the rectangle’s top side. */
    top: number;

    /** Returns the rectangle’s center position as (x, y). */
    getCenter(): vec2;

    /** Returns the size of the rectangle as (width, height). */
    getSize(): vec2;

    /** Sets the rectangle’s center position while maintaining its size. */
    setCenter(value: vec2): void;

    /** Sets the rectangle’s size while maintaining its center position. */
    setSize(value: vec2): void;

    /** Returns a string representation of the Rect. */
    toString(): string;
}

declare namespace Rect {
    /** Creates a new Rect with the given properties. */
    function create(left: number, right: number, bottom: number, top: number): Rect;
}

/**
 * Provides depth information of the video feed that the Lens is being applied to when available, such as in Lenses for Spectacles 3. Can be accessed from mainPass.baseTex.control of a Spectacles
 * Depth material.
 */
interface DepthTextureProvider extends TextureProvider {
    /**
     * Returns the depth at the screen space position “point”. The value returned is between 0 and 6,550, which corresponds to the distance the point is from the camera in centimeters, or world-space
     * units. If depth data is not available, -1 will be returned. Note that depth data isn’t available during the very first Initialize event, before TurnOn event fires.
     */
    getDepth(point: vec2): number;
}

/** TextureProvider for face textures. See the Face Texture Guide for more information. Can be accessed using Texture.control on a face texture asset. */
interface FaceTextureProvider extends TextureProvider {
    /** The source texture being drawn. This is useful for controlling which effects are visible on the face texture, based on which camera output texture is being used. */
    inputTexture: Asset.Texture;

    /**
     * The x and y scale used to draw the face within the texture region. A lower scale will be more zoomed in on the face, and a higher scale will be more zoomed out. The default scale is
     * (1, 1).
     */
    scale: vec2;
}

/** A TextureProvider for textures originating from files. */
type FileTextureProvider = TextureProvider;

/** Controls an image picker texture and UI. Can be accessed through Texture.control on an Image Picker texture. For more information, see the Image Picker Texture guide. */
interface ImagePickerTextureProvider extends TextureProvider {
    /** If enabled, the image picker UI will be shown automatically when the Lens starts. */
    autoShowImagePicker: boolean;

    /** Hides the image picker UI. */
    hideImagePicker(): void;

    /** Binds a callback function for when the user selects or changes an image from the picker. */
    setImageChangedCallback(callback: () => void): void;

    /** Shows the image picker UI. */
    showImagePicker(): void;
}

/** Controls the face image picker texture resource. Can be accessed through Texture.control on a Face Image Picker texture. For more information, see the Face Image Picker Texture guide. */
interface FaceImagePickerTextureProvider extends ImagePickerTextureProvider {
    /** If enabled, the selected image will be cropped to only show the face region. */
    cropToFace: boolean;

    /** The FaceTextureProvider used to provide the face texture. */
    faceControl: FaceTextureProvider;
}

/** Controls a segmentation texture and its placement using information provided by Object tracking. */
interface ObjectTrackingTextureProvider extends TextureProvider {
    /** Index of the tracked object to use for segmentation. */
    objectIndex: number;
}

/** Provides a texture that can be written to or read from. Can be accessed using Texture.control on a Procedural Texture. */
interface ProceduralTextureProvider extends TextureProvider {
    /**
     * Returns a Uint8 array containing the pixel values in a region of the texture. The region starts at the pixel coordinates x, y, and extends rightward by width and upward by height. Values
     * returned are integers ranging from 0 to 255.
     */
    getPixels(x: number, y: number, width: number, height: number, data: Uint8Array): void;

    /**
     * Sets a region of pixels on the texture. The region starts at the pixel coordinates x, y, and extends rightward by width and upward by height. Uses the values of the passed in Uint8Array data,
     * which should be integer values ranging from 0 to 255.
     */
    setPixels(x: number, y: number, width: number, height: number, data: Uint8Array): void;
}

declare namespace ProceduralTextureProvider {
    /** Creates a new, blank Texture Provider using the passed in dimensions and Colorspace. The ProceduralTextureProvider can be accessed through the control property on the returned texture. */
    function create(width: number, height: number, colorspace: Colorspace): Asset.Texture;

    /** Creates a new Procedural Texture based on the passed in texture. The ProceduralTextureProvider can be accessed through the control property on the returned texture. */
    function createFromTexture(texture: Asset.Texture): Asset.Texture;
}

/** Controls a camera texture resource. Can be accessed through Texture.control on a Camera texture. For more information, see the Camera and Layers guide. */
interface RenderTargetProvider extends TextureProvider {
    /** When clearColorEnabled is true and inputTexture is null, this color is used to clear this RenderTarget the first time it is drawn to each frame. */
    clearColor: vec4;

    /**
     * If true, the color on this RenderTarget will be cleared the first time it is drawn to each frame. inputTexture will be used to clear it unless it is null, in which case clearColor is used
     * instead.
     */
    clearColorEnabled: boolean;

    /** If true, the depth buffer will be cleared on this RenderTarget the first time it is drawn to each frame. */
    clearDepthEnabled: boolean;

    /** When clearColorEnabled is true, this texture is used to clear this RenderTarget the first time it is drawn to each frame. If this texture is null, clearColor will be used instead. */
    inputTexture: Asset.Texture;

    /** When useScreenResolution is false, controls the horizontal and vertical resolution of the Render Target. */
    resolution: vec2;

    /** If true, the Render Target’s resolution will match the device’s screen resolution. */
    useScreenResolution: boolean;
}

/** Texture providing the current Render Target being rendered. Lens Studio v3.0+ */
interface ScreenTextureProvider extends TextureProvider {
    /** Returns the texture’s aspect ratio, which is calculated as width / height. */
    getAspect(): number;

    /** Returns the height of the texture in pixels. */
    getHeight(): number;

    /** Returns the width of the texture in pixels. */
    getWidth(): number;

    /** Returns the name of this object’s type. */
    getTypeName(): string;

    /** Returns true if the object matches or derives from the passed in type. */
    isOfType(type: string): boolean;
}

/** Controls a segmentation texture resource. Can be accessed through Texture.control on a Segmentation texture. For more information, see the Segmentation guide. Lens Studio v1.7.0+ */
type SegmentationTextureProvider = TextureProvider;

/** Controls a text rendering texture. Can be accessed through the main rendering pass on a Label component. The properties here mirror those on Label. Lens Studio v1.7.0+ */
interface TextProvider extends TextureProvider {
    /** The font used for rendering text. */
    fontAsset: Asset.Font;

    /** The color used for the outline effect. */
    outlineColor: vec4;

    /** The strength of the outline effect. */
    outlineSize: number;

    /** The color used for dropshadow. */
    shadowColor: vec4;

    /** The horizontal and vertical offset used for dropshadow. */
    shadowOffset: vec2;

    /** The font size being used. */
    size: number;

    /** The text being rendered. */
    text: string;

    /** The color for rendering text. */
    textColor: vec4;

    /** If enabled, adds a dropshadow to the text. */
    useDropshadow: boolean;

    /** If enabled, renders an outline around the text. */
    useOutline: boolean;
}

/** Controls a video texture resource. Can be accessed through Texture.control. Lens Studio v1.5.0+ */
interface VideoTextureProvider extends TextureProvider {
    /** The audio volume of the video resource, normalized from 0 to 1. */
    volume: number;

    /** Returns the number of times the video has played consecutively. */
    getCurrentPlayCount(): number;

    /** Returns the status of the video resource. */
    getStatus(): VideoStatus;

    /** Pauses the video playback. */
    pause(): void;

    /** Plays the video playCount times. If playCount is less than 0, it loops infinitely. */
    play(playCount: number): void;

    /** Resumes the video playback. */
    resume(): void;

    /** Sets callback as the function invoked when the video resource stops playing. */
    setOnFinish(callback: () => void): void;

    /** Sets callback as the function invoked when the video resource is ready to be played. */
    setOnReady(onReadyCallback: () => void): void;

    /** Stops the video playback. */
    stop(): void;
}

/** Base class for all resource providers. */
type Provider = ScriptObject;

interface EventMapping {
    BrowsLoweredEvent: BrowsLoweredEvent;
    BrowsRaisedEvent: BrowsRaisedEvent;
    BrowsReturnedToNormalEvent: BrowsReturnedToNormalEvent;
    CameraBackEvent: CameraBackEvent;
    CameraFrontEvent: CameraFrontEvent;
    DelayedCallbackEvent: DelayedCallbackEvent;
    FaceFoundEvent: FaceFoundEvent;
    FaceLostEvent: FaceLostEvent;
    FaceTrackingEvent: FaceTrackingEvent;
    KissFinishedEvent: KissFinishedEvent;
    KissStartedEvent: KissStartedEvent;
    LateUpdateEvent: LateUpdateEvent;
    ManipulateEndEvent: ManipulateEndEvent;
    ManipulateStartEvent: ManipulateStartEvent;
    MouthClosedEvent: MouthClosedEvent;
    MouthOpenedEvent: MouthOpenedEvent;
    SceneEvent: SceneEvent;
    SceneObjectEvent: SceneObjectEvent;
    SmileFinishedEvent: SmileFinishedEvent;
    SmileStartedEvent: SmileStartedEvent;
    SurfaceTrackingResetEvent: SurfaceTrackingResetEvent;
    TapEvent: TapEvent;
    TouchEndEvent: TouchEndEvent;
    TouchMoveEvent: TouchMoveEvent;
    TouchStartEvent: TouchStartEvent;
    TurnOffEvent: TurnOffEvent;
    TurnOnEvent: TurnOnEvent;
    UpdateEvent: UpdateEvent;
}

/** Triggered when the device’s back facing camera becomes active. */
interface CameraBackEvent extends SceneEvent<CameraBackEvent> {}

/** Triggered when the device’s front facing camera becomes active. */
interface CameraFrontEvent extends SceneEvent<CameraFrontEvent> {}

/** An event that gets triggered after a delay. */
interface DelayedCallbackEvent extends SceneEvent<DelayedCallbackEvent> {
    /** Returns the total delay time in seconds set on the event. */
    getDelayTime(): number;

    /** Returns the current time in seconds left in the event’s delay. */
    getTimeLeft(): number;

    /** Calling this will cause the event to trigger in time seconds. */
    reset(time: number): void;
}

/** This is the base class for all face tracking events. This event won’t actually get triggered itself, so use one of the child classes instead. */
interface FaceTrackingEvent extends SceneEvent<FaceTrackingEvent> {
    /** The index of the face this event is tracking. Change this value to control which face the event tracks. */
    faceIndex: number;
}

/** Triggered when eyebrows are lowered on the tracked face. */
type BrowsLoweredEvent = FaceTrackingEvent;
/** Triggered when eyebrows are raised on the tracked face. */
type BrowsRaisedEvent = FaceTrackingEvent;
/** Triggered when eyebrows are returned to normal on the tracked face. */
type BrowsReturnedToNormalEvent = FaceTrackingEvent;
/** Triggered when a new face is detected and starts being tracked. */
type FaceFoundEvent = FaceTrackingEvent;
/** Triggered when a face can no longer be tracked. For example, if a face gets blocked from the camera’s view, or gets too far away. */
type FaceLostEvent = FaceTrackingEvent;
/** Triggered when the tracked face ends a kiss. */
type KissFinishedEvent = FaceTrackingEvent;
/** Triggered when the tracked face starts a kiss. */
type KissStartedEvent = FaceTrackingEvent;
/** Triggered when the tracked face’s mouth closes. */
type MouthClosedEvent = FaceTrackingEvent;
/** Triggered when the tracked face’s mouth opens. */
type MouthOpenedEvent = FaceTrackingEvent;
/** Triggered when a smile ends on the tracked face. */
type SmileFinishedEvent = FaceTrackingEvent;
/** Triggered when a smile begins on the tracked face. */
type SmileStartedEvent = FaceTrackingEvent;

/** This event is triggered at the end of every frame, after normal UpdateEvents trigger but before rendering occurs. */
interface LateUpdateEvent extends SceneEvent<LateUpdateEvent> {
    /** Returns the time elapsed ( seconds: in) between the current frame and previous frame. */
    getDeltaTime(): number;
}

/** Base class for all object-based Event types in Lens Studio (ManipulateStartEvent, TapEvent, etc.). */
interface SceneObjectEvent extends SceneEvent<SceneObjectEvent> {
    /** Returns the SceneObject this Event is associated with. */
    getSceneObject(): SceneObject;
}

/** This event is triggered when manipulation on the object ends. */
type ManipulateEndEvent = SceneObjectEvent;
/** This event is triggered when manipulation on the object begins. */
type ManipulateStartEvent = SceneObjectEvent;
/** This event is triggered when the user taps on the screen. */
interface TapEvent extends SceneObjectEvent {
    /** Returns the normalized 2D screen position of the user’s tap. The normalized coordinates range from ([0-1], [0-1]), (0,0) being top-left and (1,1) being bottom-right. */
    getTapPosition(): vec2;
}
interface _TouchEvent extends SceneObjectEvent {
    /** Returns the ID of this specific touch. Useful for distinguishing between touches when multiple are occurring simultaneously. */
    getTouchId(): number;

    /** Returns the normalized 2D screen position of the user’s touch. The normalized coordinates range from ([0-1], [0-1]), (0,0) being top-left and (1,1) being bottom-right. */
    getTouchPosition(): vec2;
}
/** Triggered when a touch event ends. */
type TouchEndEvent = _TouchEvent;
/** Triggered when a touch position on the screen is moved. */
type TouchMoveEvent = _TouchEvent;
/** Triggered when a touch event starts. */
type TouchStartEvent = _TouchEvent;

/** If a DeviceTracking component is present in the scene, this event is triggered when the tracking is restarted (typically when the Lens starts, or if the user taps the ground). */
interface SurfaceTrackingResetEvent extends SceneEvent<SurfaceTrackingResetEvent> {}

/** Triggered when the lens turns off. */
interface TurnOffEvent extends SceneEvent<TurnOffEvent> {}

/** Triggered when the lens turns on. */
interface TurnOnEvent extends SceneEvent<TurnOnEvent> {}

/** Triggered every frame. */
interface UpdateEvent extends SceneEvent<UpdateEvent> {
    /** Returns the time elapsed ( seconds: in) between the current frame and previous frame. */
    getDeltaTime(): number;
}

/** Triggered when new world tracking meshes are detected. Only available when a Device Tracking component is in the scene, and world mesh tracking is supported and enabled. */
interface WorldTrackingMeshesAddedEvent extends SceneEvent<WorldTrackingMeshesAddedEvent> {
    /** Returns an array of newly added Tracked Meshes. */
    getMeshes(): TrackedMesh[];
}

/** Represents a mesh generated by world tracking. Only available when world mesh tracking is supported and enabled. */
interface TrackedMesh extends ScriptObject {
    /** Returns whether the tracked mesh is valid. */
    isValid: boolean;

    /** Returns the World Transformation matrix of the detected mesh. */
    transform: mat4;
}

/** Triggered when some world tracking meshes are no longer detected. Only available when a Device Tracking component is in the scene, and world mesh tracking is supported and enabled. */
interface WorldTrackingMeshesRemovedEvent extends SceneEvent<WorldTrackingMeshesRemovedEvent> {
    /** Returns an array of TrackedMeshes that are no longer detected. */
    getMeshes(): TrackedMesh[];
}

/** Triggered when world tracking meshes are updated. Only available when a Device Tracking component is in the scene, and world mesh tracking is supported and enabled. */
interface WorldTrackingMeshesUpdatedEvent extends SceneEvent<WorldTrackingMeshesUpdatedEvent> {
    /** Returns an array of TrackedMeshes that were updated. */
    getMeshes(): TrackedMesh[];
}

/** The base class for scenewide events. SceneEvents can be created using ScriptComponent’s createEvent method. */
interface SceneEvent<T extends SceneEvent = any> extends IEventParameters {
    /** If true, the event is able to trigger. If false, the event will not trigger. */
    enabled: boolean;

    /** Binds a callback function to this event. */
    bind(evCallback: (eventData: Omit<T, "enabled">) => void): void;

    /** Returns the typename of the SceneEvent. */
    getTypeName(): string;
}

/** The base class for parameter objects passed into event callbacks. */
type IEventParameters = ScriptObject;

/** Base class for objects representing Script data. */
interface ScriptObject {
    /** Returns the name of this object’s type. */
    getTypeName(): string;

    /** Returns true if the object matches or derives from the passed in type. */
    isOfType(type: string): boolean;
}

/**
 * Controls how a mesh will get rendered. Each Pass acts as an interface for the shader
 * it’s associated with. Any properties on a Pass’s shader will automatically become
 * properties on that Pass. For example, if the shader defines a variable named baseColor,
 * a script would be able to access that property as Pass.baseColor.
 *
 * @see https://lensstudio.snapchat.com/api/classes/Pass/
 *
 * If you need to rely on any of the Shader Properties documented below, then use a block like the following in your script to augment the Pass interface:
 * @see https://lensstudio.snapchat.com/api/ShaderProperties/
 * ```
 * declare global {
 *     interface Pass {
 *         // Specifies the base color (albedo) of the material if the ‘Base Texture’ is disabled. Multiplied with the ‘Base Texture’ otherwise.
 *         baseColor: vec4
 *         // Most materials use a base texture (albedo), but disabling it means the base texture will be considered white, and ‘Base Color’ will solely control the color.
 *         baseTex: Asset.Texture
 *         // Normally, the Base Texture’s alpha is taken as opacity. Enabling this allows you to define a separate greyscale opacity texture. The ‘Opacity Texture’ value will be multiplied with the
 *         // Base Texture’s alpha (which is 1 for textures without alpha) to get the final opacity. ‘Opacity Texture’ is only available if ‘Blend Mode’ is not ‘Disabled’.
 *         opacityTex: Asset.Texture
 *     }
 * }
 * ```
 */
interface Pass extends ScriptObject {
    /**
     * The blend mode used for rendering. Possible values:
     *
     * BlendMode - Value - Expression
     *
     * Normal - 0 - SrcAlpha, OneMinusSrcAlpha
     *
     * MultiplyLegacy [DEPRECATED] - 1 - DstColor, OneMinusSrcAlpha
     *
     * AddLegacy [DEPRECATED] - 2 - One, One
     *
     * Screen - 3 - One, OneMinusSrcColor
     *
     * PremultipliedAlpha - 4 - One, OneMinusSrcAlpha
     *
     * AlphaToCoverage - 5 - Blend Disabled
     *
     * Disabled - 6 - Blend Disabled
     *
     * Add - 7 - SrcAlpha, One
     *
     * AlphaTest - 8 - Blend Disabled
     *
     * ColoredGlass - 9 - Blend Disabled
     *
     * Multiply - 10 - DstColor, Zero
     *
     * Min - 11 - One, One
     *
     * Max - 12 - One, One
     *
     * ```
     * // Sets the blend mode of the main pass for a material to Screen
     * //@input Asset.Material material
     * script.material.mainPass.blendMode = 3;
     * ```
     */
    blendMode: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

    /** Controls the masking of color channels with a vec4b representing each channel with a boolean. */
    colorMask: vec4b;

    /** The cull mode used for rendering. */
    cullMode: CullMode;

    /** Enables depth-sorting. */
    depthTest: boolean;

    /** Enables writing pixels to the depth buffer. */
    depthWrite: boolean;

    /** Number of times the pass will be rendered. Useful with the Instance ID node in Material Editor. */
    instanceCount: number;

    /** Line width used for rendering. */
    lineWidth: number;

    /** The name of the Pass. */
    name: string;

    /** Changes the position that each polygon gets drawn. */
    polygonOffset: vec2;

    /** Whether the material renders on both sides of a mesh face. */
    twoSided: boolean;
}

/** Used with Pass’s cullMode property. Determines which faces of a surface are culled (not rendered). */
declare enum CullMode {
    /** Front facing surfaces are not rendered. */
    Front,
    /** Back facing surfaces are not rendered. */
    Back,
    /** Neither front facing nor back facing surfaces are rendered. */
    FrontAndBack,
}

/**
 * Allows data to be stored and retrieved between Lens sessions. In other words, data can be saved on device and loaded back in the next time the Lens is opened. Can be accessed with global.
 * persistentStorageSystem.
 */
interface PersistentStorageSystem extends ScriptObject {
    /** The GeneralDataStore object used to store and retrieve data. */
    store: GeneralDataStore;
}

/** Class for storing and retrieving data based on keys. Used by PersistentStorageSystem. For more information, see the Persistent Storage guide. */
interface GeneralDataStore extends ScriptObject {
    /**
     * Callback function that gets called when the allowed storage limit has been passed. The store won’t be saved if it is full, so if this is called make sure to remove data until back under the
     * limit.
     */
    onStoreFull: () => void;

    /** Clears all data stored in the General Data Store. */
    clear(): void;

    /** Returns a boolean value stored under the given key, or false if none exists. */
    getBool(key: string): boolean;

    /** Returns a boolean array being stored under the given key, or an empty array if none exists. */
    getBoolArray(key: string): boolean[];

    /** Returns a double precision floating point number stored under the given key, or 0 if none exists. */
    getDouble(key: string): number;

    /** Returns a floating point value stored under the given key, or 0 if none exists. */
    getFloat(key: string): number;

    /** Returns a floating point array being stored under the given key, or an empty array if none exists. */
    getFloatArray(key: string): number[];

    /** Returns an integer number stored under the given key, or 0 if none exists. */
    getInt(key: string): number;

    /** Returns an integer array being stored under the given key, or an empty array if none exists. */
    getIntArray(key: string): number[];

    /** Returns a mat2 value stored under the given key, or a default mat2 if none exists. */
    getMat2(key: string): mat2;

    /** Returns a mat2 array being stored under the given key, or an empty array if none exists. */
    getMat2Array(key: string): mat2[];

    /** Stores a mat3 value under the given key. */
    getMat3(key: string): mat3;

    /** Returns a mat3 array being stored under the given key, or an empty array if none exists. */
    getMat3Array(key: string): mat3[];

    /** Returns a mat4 value stored under the given key, or a default mat4 if none exists. */
    getMat4(key: string): mat4;

    /** Returns a mat4 array being stored under the given key, or an empty array if none exists. */
    getMat4Array(key: string): mat4[];

    /** Returns the maximum total size  in: allowed, bytes, of all data stored in this General Data Store. */
    getMaxSizeInBytes(): number;

    /** Returns a quat value stored under the given key, or a default quat if none exists. */
    getQuat(key: string): quat;

    /** Returns a quat array being stored under the given key, or an empty array if none exists. */
    getQuatArray(key: string): quat[];

    /** If onStoreFull has been set, this method returns the current total  in: size, bytes, of all data stored in this General Data Store. Otherwise, 0 is returned. */
    getSizeInBytes(): number;

    /** Returns a string value stored under the given key, or empty string if none exists. */
    getString(key: string): string;

    /** Returns a string array being stored under the given key, or an empty array if none exists. */
    getStringArray(key: string): string[];

    /** Returns a vec2 value stored under the given key, or a default vec2 if none exists. */
    getVec2(key: string): vec2;

    /** Returns a vec2 array being stored under the given key, or an empty array if none exists. */
    getVec2Array(key: string): vec2[];

    /** Returns a vec3 value stored under the given key, or a default vec3 if none exists. */
    getVec3(key: string): vec3;

    /** Returns a vec3 array being stored under the given key, or an empty array if none exists. */
    getVec3Array(key: string): vec3[];

    /** Returns a vec4 value stored under the given key, or a default vec4 if none exists. */
    getVec4(key: string): vec4;

    /** Returns a vec4 array being stored under the given key, or an empty array if none exists. */
    getVec4Array(key: string): vec4[];

    /** Returns true if a value is being stored under the given key. */
    has(key: string): boolean;

    /** Stores a boolean value under the given key. */
    putBool(key: string, value: boolean): void;

    /** Stores a boolean array under the given key. */
    putBoolArray(key: string, value: boolean[]): void;

    /** Stores a double precision floating point number under the given key. */
    putDouble(key: string, value: number): void;

    /** Stores a floating point value under the given key. */
    putFloat(key: string, value: number): void;

    /** Stores a floating point array under the given key. */
    putFloatArray(key: string, value: number[]): void;

    /** Stores an integer number value under the given key. */
    putInt(key: string, value: number): void;

    /** Stores an integer array under the given key. */
    putIntArray(key: string, value: number[]): void;

    /** Stores a mat2 value under the given key. */
    putMat2(key: string, value: mat2): void;

    /** Stores a mat2 array under the given key. */
    putMat2Array(key: string, value: mat2[]): void;

    /** Stores a mat3 value under the given key. */
    putMat3(key: string, value: mat3): void;

    /** Stores a mat3 array under the given key. */
    putMat3Array(key: string, value: mat3[]): void;

    /** Stores a mat4 value under the given key. */
    putMat4(key: string, value: mat4): void;

    /** Stores a mat4 array under the given key. */
    putMat4Array(key: string, value: mat4[]): void;

    /** Stores a quat value under the given key. */
    putQuat(key: string, value: quat): void;

    /** Stores a quat array under the given key. */
    putQuatArray(key: string, value: quat[]): void;

    /** Stores a string value under the given key. */
    putString(key: string, value: string): void;

    /** Stores a string array under the given key. */
    putStringArray(key: string, value: string[]): void;

    /** Stores a vec2 value under the given key. */
    putVec2(key: string, value: vec2): void;

    /** Stores a vec2 array under the given key. */
    putVec2Array(key: string, value: vec2[]): void;

    /** Stores a vec3 value under the given key. */
    putVec3(key: string, value: vec3): void;

    /** Stores a vec3 array under the given key. */
    putVec3Array(key: string, value: vec3[]): void;

    /** Stores a vec4 value under the given key. */
    putVec4(key: string, value: vec4): void;

    /** Stores a vec4 array under the given key. */
    putVec4Array(key: string, value: vec4[]): void;

    /** Removes the value being stored under the given key. If no value exists under the key, nothing will happen. */
    remove(key: string): void;
}

/**
 * Provides information about the user such as display name, birthday,
 * and current weather. Accessible through global.userContextSystem.
 *
 * All callbacks will execute as soon as the requested information is available.
 * In some rare cases, the requested information may be completely unavailable,
 * and the callback will never occur.
 *
 * Note that formatted or localized strings may appear differently to users
 * depending on their region.
 */
interface UserContextSystem extends ScriptObject {
    /** Provides the user’s current altitude as a localized string. */
    requestAltitudeFormatted(callback: (formattedData: string) => void): void;

    /** Provides the user’s current altitude in meters. */
    requestAltitudeInMeters(callback: (data: number) => void): void;

    /** Provides the user’s birth date as a Date object. */
    requestBirthdate(callback: (data: Date) => void): void;

    /** Provides the user’s birth date as localized string. */
    requestBirthdateFormatted(callback: (formattedData: string) => void): void;

    /** Provides the name of the city the user is currently located in. */
    requestCity(callback: (data: string) => void): void;

    /** Provides the user’s display name. */
    requestDisplayName(callback: (data: string) => void): void;

    /** Provides the user’s current temperature in celsius. */
    requestTemperatureCelsius(callback: (data: number) => void): void;

    /** Provides the user’s current temperature in fahrenheit. */
    requestTemperatureFahrenheit(callback: (data: number) => void): void;

    /** Provides the user’s current temperature as a localized string. */
    requestTemperatureFormatted(callback: (formattedData: string) => void): void;

    /** Provides the user’s current weather condition. */
    requestWeatherCondition(callback: (data: WeatherCondition) => void): void;

    /** Provides the user’s current weather condition as a localized string. */
    requestWeatherLocalized(callback: (formattedData: string) => void): void;
}

/**
 * Helps convert data types to localized string representations. Accessible through global.localizationSystem. Note that formatted or localized strings may appear differently to users depending on
 * their region. The example results given here are representative of a user in the United States, but may appear differently for users in other regions.
 */
interface LocalizationSystem extends ScriptObject {
    /** Returns a localized string for the date and time of the passed in Date object. Example: “Jan 1, 2019 at 12:34 AM” */
    getDateAndTimeFormatted(date: Date): string;

    /** Returns a localized string for the date of the passed in Date object. Example: “Jan 1, 2019” */
    getDateFormatted(date: Date): string;

    /** Returns a short, localized string for the date of the passed in Date object. Example: “1/1/19” */
    getDateShortFormatted(date: Date): string;

    /** Returns a localized string for the day of the week of the passed in Date object. Example: “Tuesday” */
    getDayOfWeek(date: Date): string;

    /** Returns a localized, formatted string representation of the distance in meters passed in. Example: “39.4 in” (from 1 passed in) */
    getFormattedDistanceFromMeters(meters: number): string;

    /** Returns a localized, formatted string representation of the number passed in. Example: “1,234” (from 1234 passed in) */
    getFormattedNumber(number: number): string;

    /** Returns a localized, formatted string representing the number of seconds passed in. Example: “2:06” (from 126 passed in) */
    getFormattedSeconds(seconds: number): string;

    /** Returns a localized, formatted string representation of the celsius temperature passed in. Example: “32°F” (from 0 passed in) */
    getFormattedTemperatureFromCelsius(temperature: number): string;

    /** Returns a localized, formatted string representation of the fahrenheit temperature passed in. Example: “32°F” (from 32 passed in) */
    getFormattedTemperatureFromFahrenheit(temperature: number): string;

    /** Returns the language code of the language being used on the device. Example: “en” ( English: for) */
    getLanguage(): string;

    /** Returns a localized string for the month of the passed in Date object. Example: “January” */
    getMonth(date: Date): string;

    /** Returns a localized string for the time of the passed in Date object. Example: “12:34 AM” */
    getTimeFormatted(date: Date): string;
}

/**
 * This provider is returned by global.touchSystem and allows your lens to handle any touches on the screen, and optionally let certain touch types to pass through (let Snapchat handle the
 * touch).
 */
interface TouchDataProvider extends ScriptObject {
    /**
     * Set your lens to handle touches on the screen, preventing default Snapchat touch behavior from occuring. Useful for enabling full screen touches without any touch components. It is similar to
     * creating a plane the size of the screen in front of the camera.
     */
    touchBlocking: boolean;

    /** The current touch mask. */
    touchBlockingExceptionMask: number;

    /** Returns a copy of currentMask with the newException flag set to true. */
    composeTouchBlockingExceptionMask(currentMask: number, newException: TouchTypeException): number;

    /** Allow or stop allowing a certain TouchType to pass through your lens. Useful for allowing Snapchat to handle certain TouchType, e.g. allowing TouchTypeDoubleTap to flip the camera. */
    enableTouchBlockingException(exception: TouchTypeException, enable: boolean): void;
}

/** Settings for rendering the background on a Text component. Accessible through the Text component’s backgroundSettings property. */
interface BackgroundSettings extends ScriptObject {
    /** If enabled, the background will be rendered. */
    enabled: boolean;

    /** Settings for how the inside of the background is drawn. */
    fill: TextFill;

    /** Controls how far in each direction the background should extend away from the text. */
    margins: Rect;
}

/** Used in Text’s dropShadowSettings property. Configures how dropshadow will appear on a Text component. */
interface DropshadowSettings extends ScriptObject {
    /** Whether dropshadow is enabled on the Text. */
    enabled: boolean;

    /** Settings for how the inside of the dropshadow is drawn. */
    fill: TextFill;

    /** An (x, y) offset controlling where the dropshadow is drawn relative to the Text. */
    offset: vec2;
}

/** Fill settings used by several text related classes. Used in Text’s textFill property, DropshadowSettings’ fill property, and OutlineSettings’ fill property. */
interface TextFill extends ScriptObject {
    /** If mode is set to TextFillMode.Solid, this will be used as the solid color used in drawing. */
    color: vec4;

    /** Controls which drawing method is used. Can switch between Texture mode (for drawing using a tiled texture) or Solid mode (for drawing a solid color). */
    mode: TextFillMode;

    /** If mode is set to TextFillMode.Texture, this will be used as the texture asset used in drawing. */
    texture: Asset.Texture;

    /** If mode is set to TextFillMode.Texture, this defines what type of stretching is used when the Texture’s aspect ratio doesn’t match the drawing area’s aspect ratio. */
    textureStretch: StretchMode;

    /** If mode is set to TextFillMode.Texture, this defines how many times the texture will tile across its drawing zone. */
    tileCount: number;

    /** If mode is set to TextFillMode.Texture, this defines what area should be used for tiling the texture. */
    tileZone: TileZone;
}

/** Used in TextFill’s mode property. Controls which drawing method is used for the TextFill. */
declare enum TextFillMode {
    /** Solid color will be used for drawing. */
    Solid,
    /** Tiled texture will be used for drawing. */
    Texture,
}

/** Defines the bounding area used for texture tiling with TextFill’s tileZone property. */
declare enum TileZone {
    /** The attached ScreenTransform’s bounding rectangle is used for texture tiling */
    Rect,
    /** The Text component’s drawn area (extents) is used for texture tiling */
    Extents,
    /** Each character uses its own drawn area for texture tiling */
    Character,
    /** The position of each character in screen space is used for tiling */
    Screen,
}

/** Options for wrapping text horizontally. Used by Text component’s horizontalOverflow property. */
declare enum HorizontalOverflow {
    /** Text will continue drawing past horizontal boundaries. */
    Overflow,
    /** Text is clipped to the width of horizontal boundaries. */
    Truncate,
    /** Text wraps when reaching horizontal boundaries and continues on the next line. */
    Wrap,
    /** Text will shrink to fit within the horizontal boundaries. */
    Shrink,
}

/** Options for handling vertical text overflow. Used by Text component’s verticalOverflow property. */
declare enum VerticalOverflow {
    /** Text will continue to draw past the end of the vertical boundaries. */
    Overflow,
    /** Text will be clipped at the end of the vertical boundaries. */
    Truncate,
    /** Text will shrink to fit within the vertical boundaries. */
    Shrink,
}

/** Used in Text’s outlineSettings property. Configures how text outlining will appear on a Text component. */
interface OutlineSettings extends ScriptObject {
    /** Whether outline is enabled on the Text. */
    enabled: boolean;

    /** Settings for how the outline is drawn. */
    fill: TextFill;

    /** The strength of the outline effect, ranging from 0.0 ( outline: no) to 1.0 (very strong outline). */
    size: number;
}

type TouchTypeException = `TouchType${"None" | "Touch" | "Tap" | "DoubleTap" | "Scale" | "Pan" | "Swipe"}`;

declare namespace SnapchatLensStudio {
    interface Global {
        /** Returns the global GeneralDataStore for Launch Params, which provides any special data passed in when the Lens is launched. */
        launchParams: GeneralDataStore;

        /** Returns the global LocalizationSystem, which helps convert times, dates, and other units to user friendly strings. */
        localizationSystem: LocalizationSystem;

        /** Returns the global PersistentStorageSystem, which allows data to persist between Lens sessions. */
        persistentStorageSystem: PersistentStorageSystem;

        /** Returns the global ScriptScene object, which offers information and controls for the current scene. */
        scene: ScriptScene;

        /** Returns the global TouchDataProvider, which controls how the Lens handles touch events. */
        touchSystem: TouchDataProvider;

        /** Returns the global UserContextSystem, which provides information about the user such as display name, birthday, and even current weather. */
        userContextSystem: UserContextSystem;

        /** Returns the time difference in seconds between the current frame and previous frame. */
        getDeltaTime(): number;

        /** Returns the time in seconds since the lens was started. */
        getTime(): number;

        /** Returns true if the passed in object is null or destroyed. Useful as a safe way to check if a SceneObject or Component has been destroyed. */
        isNull(reference: object): boolean;

        /** Prints out a message to the Logger window. */
        print(message: object): void;
    }

    interface ComponentMapping {
        "Component.ScriptComponent": Component.ScriptComponent;

        "Component.Visual": Component.Visual;
        "Component.Camera": Component.Camera;
        "Component.ScreenTransform": Component.ScreenTransform;
        "Component.MLComponent": Component.MLComponent;
        "Component.ObjectTracking": Component.ObjectTracking;
        "Component.PinToMeshComponent": Component.PinToMeshComponent;
        "Component.RectangleSetter": Component.RectangleSetter;
        "Component.ScreenRegionComponent": Component.ScreenRegionComponent;
        "Component.Animation": Component.Animation;
        "Component.AnimationMixer": Component.AnimationMixer;
        "Component.AudioComponent": Component.AudioComponent;
        "Component.SpriteAligner": Component.SpriteAligner;
        "Component.TouchComponent": Component.TouchComponent;
        "Component.VertexCache": Component.VertexCache;
        "Component.BlendShapes": Component.BlendShapes;
        "Component.DeviceLocationTrackingComponent": Component.DeviceLocationTrackingComponent;
        "Component.DeviceTracking": Component.DeviceTracking;
        "Component.Head": Component.Head;
        "Component.HintsComponent": Component.HintsComponent;
        "Component.LightSource": Component.LightSource;
        "Component.LookAtComponent": Component.LookAtComponent;
        "Component.ManipulateComponent": Component.ManipulateComponent;
        "Component.MarkerTrackingComponent": Component.MarkerTrackingComponent;

        "Component.BaseMeshVisual": Component.BaseMeshVisual;

        "Component.FaceStretchVisual": Component.FaceStretchVisual;
        "Component.LiquifyVisual": Component.LiquifyVisual;
        "Component.MaterialMeshVisual": Component.MaterialMeshVisual;
        "Component.Text": Component.Text;

        "Component.EyeColorVisual": Component.EyeColorVisual;
        "Component.FaceInsetVisual": Component.FaceInsetVisual;
        "Component.FaceMaskVisual": Component.FaceMaskVisual;
        "Component.Image": Component.Image;
        "Component.RenderMeshVisual": Component.RenderMeshVisual;
        "Component.RetouchVisual": Component.RetouchVisual;
        "Component.SpriteVisual": Component.SpriteVisual;
    }

    interface ScriptInputs {} // tslint:disable-line no-empty-interface
    interface ScriptApi {} // tslint:disable-line no-empty-interface
}
