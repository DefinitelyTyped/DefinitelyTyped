import * as THREE from "three";
import ParticleSystem, {
    Alpha,
    ArraySpan,
    Attraction,
    Body,
    BodySprite,
    Box,
    BoxZone,
    Collision,
    Color,
    ColorSpan,
    CrossZone,
    CustomRenderer,
    Debug,
    ease,
    Emitter,
    Force,
    GPURenderer,
    Gravity,
    InitializerUtil,
    Life,
    LineZone,
    Mass,
    MathUtils,
    MeshRenderer,
    MeshZone,
    PointZone,
    Polar3D,
    PolarVelocity,
    Position,
    RadialVelocity,
    Radius,
    RandomDrift,
    Rate,
    Repulsion,
    Rotate,
    Scale,
    ScreenZone,
    Span,
    SphereZone,
    Spring,
    SpriteRenderer,
    Texture,
    Vector3D,
    VectorVelocity,
} from "three-nebula";

let System;

// @ts-expect-error - wrong type
System = new ParticleSystem("string");

// @ts-expect-error - wrong type
System = new ParticleSystem({ properties: "string" });

// $ExpectType System
System = new ParticleSystem();
System = new ParticleSystem(500);

let emitter;

// $ExpectType Emitter
const emitter2 = new Emitter();

// @ts-expect-error - wrong type
emitter = new Emitter("string");

// @ts-expect-error - wrong type
emitter = new Emitter(122);

// @ts-expect-error - wrong type
emitter.addInitializers("string");

// @ts-expect-error - wrong type
emitter.addInitializers(122);

// @ts-expect-error - wrong type
emitter.addInitializers([122]);

// @ts-expect-error - wrong type
emitter.addInitializers([new Alpha({})]);

// @ts-expect-error - wrong type
emitter.addInitializers([new Alpha({ properties: "string" })]);

// @ts-expect-error - wrong type
emitter.addInitializers([new Alpha({ properties: 122 })]);

// @ts-expect-error - wrong type
emitter.addInitializer("string");

// @ts-expect-error - wrong type
emitter.addInitializer(122);

// @ts-expect-error - wrong type
emitter.addInitializer([122]);

// @ts-expect-error - wrong type
emitter.addInitializer([new Alpha({})]);

/**
 * Initializers
 */

// @ts-expect-error - wrong type
emitter.addInitializers([new Alpha({ properties: "string" })]);

// $ExpectType Emitter
emitter.addInitializer(new Life(100, 200));

// $ExpectType Emitter
emitter.addInitializer(new Mass(1, 2));

// $ExpectType Emitter
emitter.addInitializer(new Radius(1, 2));

// $ExpectType Emitter
emitter.addInitializer(new RadialVelocity(10, new Vector3D(1, 2, 3)));

// $ExpectType Emitter
emitter.addInitializer(new Body(new THREE.Mesh()));

// $ExpectType Emitter
emitter.addInitializer(new Position(new PointZone(new Vector3D(1, 2, 3))));

// $ExpectType Emitter
emitter.addInitializer(new Radius(1, 2));

// $ExpectType Emitter
emitter.addInitializer(new Rate(1, 2));

// $ExpectType Emitter
emitter.addInitializer(new Texture(THREE, new THREE.Texture()));

// $ExpectType Emitter
emitter.addInitializer(new BodySprite(THREE, "path/to/texture.png"));

// $ExpectType Emitter
emitter.addInitializer(new PolarVelocity(new Polar3D(1, 2, 3), 1, true));

// $ExpectType Emitter
emitter.addInitializer(new VectorVelocity(new Vector3D(1, 2, 3), 1, true));

/**
 * Behaviours
 */

// $ExpectType Emitter
emitter.addBehaviour(new Alpha(1, 2));

// $ExpectType Emitter
emitter.addBehaviour(new Attraction(new Vector3D(1, 2, 3), 1, 2));

// $ExpectType Emitter
emitter.addBehaviour(new Collision(emitter2, true));

// $ExpectType Emitter
emitter.addBehaviour(new Color(new THREE.Color(0xff0000), new THREE.Color(0x00ff00)));

// $ExpectType Emitter
emitter.addBehaviour(new CrossZone(new PointZone(new Vector3D(1, 2, 3)), "bound"));

// $ExpectType Emitter
emitter.addBehaviour(new Force(1, 2, 3, Infinity, ease.easeInSine));

// $ExpectType Emitter
emitter.addBehaviour(new Gravity(1, 2, ease.easeInSine));

// $ExpectType Emitter
emitter.addBehaviour(new RandomDrift(1, 2, 3, 10, Infinity, ease.easeInSine));

// $ExpectType Emitter
emitter.addBehaviour(new Repulsion(new Vector3D(1, 2, 3), 1, 2, Infinity, ease.easeInSine));

// $ExpectType Emitter
emitter.addBehaviour(new Rotate(1, 2, 3, Infinity, ease.easeInSine));

// $ExpectType Emitter
emitter.addBehaviour(new Scale(1, 2, Infinity, ease.easeInSine));

// $ExpectType Emitter
emitter.addBehaviour(new Spring(1, 2, 3, 10, 2, Infinity, ease.easeInSine));

// @ts-expect-error - wrong type
System.addEmitter("default", emitter);

// $ExpectType System
System.addEmitter(emitter);

// @ts-expect-error - wrong type
System.addRenderer("string");

// $ExpectType System
System.addRenderer(new THREE.WebGLRenderer());

// $ExpectType string
const testJson = JSON.stringify({
    test: "data",
});

// @ts-expect-error - wrong type
ParticleSystem.fromJSONAsync();

// @ts-expect-error - wrong type
ParticleSystem.fromJSONAsync("s");

// @ts-expect-error - wrong type
ParticleSystem.fromJSONAsync(JSON.parse(testJson));

// $ExpectType Promise<System>
ParticleSystem.fromJSONAsync(JSON.parse(testJson), THREE);

// $ExpectType Promise<System>
ParticleSystem.fromJSONAsync(JSON.parse(testJson), THREE, { options: true });

// @ts-expect-error - wrong type
Debug.addEventListener("emitterAdded", emitter => {
    console.log(emitter);
});

// $ExpectType typeof Debug
Debug.addEventListener(System, emitter => {
    console.log(emitter);
});

// @ts-expect-error - wrong type
MathUtils.toColor16("0xff0000");

// $ExpectType string
MathUtils.toColor16(0xff0000);

// @ts-expect-error - wrong type
InitializerUtil.initialize(emitter, System);

// $ExpectType Vector3D
const vec3d = new Vector3D(1, 2, 3);

// $ExpectType SphereZone
const sphereZone = new SphereZone(1, 2, 3, 4);

// $ExpectType BoxZone
const boxZone = new BoxZone(1, 2, 3, 4, 5, 6);

// $ExpectType PointZone
const pointZone = new PointZone(vec3d);

// $ExpectType LineZone
const lineZone = new LineZone(vec3d, vec3d);

// $ExpectType MeshZone
const meshZone = new MeshZone(new THREE.Mesh(), new THREE.BufferGeometry());

// $ExpectType ScreenZone
const screenZone = new ScreenZone(new THREE.PerspectiveCamera(), new THREE.WebGLRenderer());

// $ExpectType (value: number) => number
const easing = ease.easeInSine;

// $ExpectType Span
const span = new Span(1, 2);

// $ExpectType ArraySpan
const arraySpan = new ArraySpan([1, 2, 3]);

// $ExpectType ColorSpan
const colorSpan = new ColorSpan(["0xff0000", "0x00ff00"]);

// $ExpectType Polar3D
const polar3d = new Polar3D(1, 2, 3);

// $ExpectType Box
const box = new Box(1, 2, 3, 4, 5, 6);

// $ExpectType MeshRenderer
const meshRenderer = new MeshRenderer(new THREE.Object3D(), THREE);

// $ExpectType SpriteRenderer
const spriteRenderer = new SpriteRenderer(new THREE.Scene(), THREE);

// $ExpectType CustomRenderer
const customRenderer = new CustomRenderer();

// $ExpectType GPURenderer
const gpuRenderer = new GPURenderer(new THREE.Scene(), THREE);
