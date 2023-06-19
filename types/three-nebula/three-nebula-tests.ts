import * as THREE from 'three';
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
    ease,
} from 'three-nebula';
import { Vector3 } from './src/core/three';

let System;

// prettier-ignore
// @ts-expect-error - wrong type
System = new ParticleSystem('string')

// prettier-ignore
// @ts-expect-error - wrong type
System = new ParticleSystem({ properties: 'string' })

// prettier-ignore
// $ExpectType ParticleSystem
System = new ParticleSystem()
System = new ParticleSystem(500);

let emitter;

// prettier-ignore
// $ExpectType Emitter
const emitter2 = new Emitter()

// prettier-ignore
// @ts-expect-error - wrong type
emitter = new Emitter('string')

// prettier-ignore
// @ts-expect-error - wrong type
emitter = new Emitter(122)

// prettier-ignore
// @ts-expect-error - wrong type
emitter.addInitializers('string')

// prettier-ignore
// @ts-expect-error - wrong type
emitter.addInitializers(122)

// prettier-ignore
// @ts-expect-error - wrong type
emitter.addInitializers([122])

// prettier-ignore
// @ts-expect-error - wrong type
emitter.addInitializers([new Alpha({})])

// prettier-ignore
// @ts-expect-error - wrong type
emitter.addInitializers([new Alpha({ properties: 'string' })])

// prettier-ignore
// @ts-expect-error - wrong type
emitter.addInitializers([new Alpha({ properties: 122 })])

// prettier-ignore
// @ts-expect-error - wrong type
emitter.addInitializer('string')

// prettier-ignore
// @ts-expect-error - wrong type
emitter.addInitializer(122)

// prettier-ignore
// @ts-expect-error - wrong type
emitter.addInitializer([122])

// prettier-ignore
// @ts-expect-error - wrong type
emitter.addInitializer([new Alpha({})])

/**
 * Initializers
 */
// prettier-ignore
// @ts-expect-error - wrong type
emitter.addInitializers([new Alpha({ properties: 'string' })])

// prettier-ignore
// $ExpectType Emitter
emitter.addInitializer(new Life(100, 200))

// prettier-ignore
// $ExpectType Emitter
emitter.addInitializer(new Mass(1, 2))

// prettier-ignore
// $ExpectType Emitter
emitter.addInitializer(new Radius(1, 2))

// prettier-ignore
// $ExpectType Emitter
emitter.addInitializer(new RadialVelocity(10, new Vector3D(1, 2, 3)))

// prettier-ignore
// $ExpectType Emitter
emitter.addInitializer(new Body(new THREE.Mesh()))

// prettier-ignore
// $ExpectType Emitter
emitter.addInitializer(new Position(new PointZone(new Vector3D(1, 2, 3))))

// prettier-ignore
// $ExpectType Emitter
emitter.addInitializer(new Radius(1, 2))

// prettier-ignore
// $ExpectType Emitter
emitter.addInitializer(new Rate(1, 2))

// prettier-ignore
// $ExpectType Emitter
emitter.addInitializer(new Texture(THREE, new THREE.Texture()))

// prettier-ignore
// $ExpectType Emitter
emitter.addInitializer(new BodySprite(THREE, 'path/to/texture.png'))

// prettier-ignore
// $ExpectType Emitter
emitter.addInitializer(new PolarVelocity(new Polar3D(1, 2, 3), 1, true))

// prettier-ignore
// $ExpectType Emitter
emitter.addInitializer(new VectorVelocity(new Vector3D(1, 2, 3), 1, true))

/**
 * Behaviours
 */
// prettier-ignore
// $ExpectType Emitter
emitter.addBehaviour(new Alpha(1, 2))

// prettier-ignore
// $ExpectType Emitter
emitter.addBehaviour(new Attraction(new Vector3D(1, 2, 3), 1, 2))

// prettier-ignore
// $ExpectType Emitter
emitter.addBehaviour(new Collision(emitter2, true))

// prettier-ignore
// $ExpectType Emitter
emitter.addBehaviour(
  new Color(new THREE.Color(0xff0000), new THREE.Color(0x00ff00))
)

// prettier-ignore
// $ExpectType Emitter
emitter.addBehaviour(
  new CrossZone(new PointZone(new Vector3D(1, 2, 3)), 'bound')
)

// prettier-ignore
// $ExpectType Emitter
emitter.addBehaviour(new Force(1, 2, 3, Infinity, ease.easeInSine))

// prettier-ignore
// $ExpectType Emitter
emitter.addBehaviour(new Gravity(1, 2, ease.easeInSine))

// prettier-ignore
// $ExpectType Emitter
emitter.addBehaviour(new RandomDrift(1, 2, 3, 10, Infinity, ease.easeInSine))

// prettier-ignore
// $ExpectType Emitter
emitter.addBehaviour(
  new Repulsion(new Vector3D(1, 2, 3), 1, 2, Infinity, ease.easeInSine)
)

// prettier-ignore
// $ExpectType Emitter
emitter.addBehaviour(new Rotate(1, 2, 3, Infinity, ease.easeInSine))

// prettier-ignore
// $ExpectType Emitter
emitter.addBehaviour(new Scale(1, 2, Infinity, ease.easeInSine))

// prettier-ignore
// $ExpectType Emitter
emitter.addBehaviour(new Spring(1, 2, 3, 10, 2, Infinity, ease.easeInSine))

// prettier-ignore
// @ts-expect-error - wrong type
System.addEmitter('default', emitter)

// prettier-ignore
// $ExpectType System
System.addEmitter(emitter)

// prettier-ignore
// @ts-expect-error - wrong type
System.addRenderer('string')

// prettier-ignore
// $ExpectType System
System.addRenderer(new THREE.WebGLRenderer())

// prettier-ignore
// $ExpectType string
const testJson = JSON.stringify({
  test: 'data',
})

// prettier-ignore
// @ts-expect-error - wrong type
ParticleSystem.fromJSONAsync()

// prettier-ignore
// @ts-expect-error - wrong type
ParticleSystem.fromJSONAsync('s')

// prettier-ignore
// @ts-expect-error - wrong type
ParticleSystem.fromJSONAsync(JSON.parse(testJson))

// prettier-ignore
// $ExpectType Promise<ParticleSystem>
ParticleSystem.fromJSONAsync(JSON.parse(testJson), THREE)

// prettier-ignore
// $ExpectType Promise<ParticleSystem>
ParticleSystem.fromJSONAsync(JSON.parse(testJson), THREE, { options: true })

// prettier-ignore
// @ts-expect-error - wrong type
Debug.addEventListener('emitterAdded', (emitter) => {
  console.log(emitter)
})

// prettier-ignore
// $ExpectType void
Debug.addEventListener(System, (emitter) => {
  console.log(emitter)
})

// prettier-ignore
// @ts-expect-error - wrong type
MathUtils.toColor16('0xff0000')

// prettier-ignore
// $ExpectType number
MathUtils.toColor16(0xff0000)

// prettier-ignore
// @ts-expect-error - wrong type
InitializerUtil.initialize(emitter, System)

// prettier-ignore
// @ts-expect-error - wrong type
const vec = new Vector3('s', 2, 3)

// prettier-ignore
// $ExpectType Vector3
const vec2 = new Vector3(1, 2, 3)

// prettier-ignore
// $ExpectType Vector3D
const vec3d = new Vector3D(1, 2, 3)

// prettier-ignore
// $ExpectType SphereZone
const sphereZone = new SphereZone(1, 2, 3, 4)

// prettier-ignore
// $ExpectType BoxZone
const boxZone = new BoxZone(1, 2, 3, 4, 5, 6)

// prettier-ignore
// $ExpectType PointZone
const pointZone = new PointZone(vec3d)

// prettier-ignore
// $ExpectType LineZone
const lineZone = new LineZone(vec3d, vec3d)

// prettier-ignore
// $ExpectType MeshZone
const meshZone = new MeshZone(new THREE.Mesh(), new THREE.BufferGeometry())

// prettier-ignore
// $ExpectType ScreenZone
const screenZone = new ScreenZone(
  new THREE.PerspectiveCamera(),
  new THREE.WebGLRenderer()
)

// prettier-ignore
// $ExpectType EasingFunction
const easing = ease.easeInSine

// prettier-ignore
// $ExpectType Span
const span = new Span(1, 2)

// prettier-ignore
// $ExpectType ArraySpan
const arraySpan = new ArraySpan([1, 2, 3])

// prettier-ignore
// $ExpectType ColorSpan
const colorSpan = new ColorSpan(['0xff0000', '0x00ff00'])

// prettier-ignore
// $ExpectType Polar3D
const polar3d = new Polar3D(1, 2, 3)

// prettier-ignore
// $ExpectType Box
const box = new Box(1, 2, 3, 4, 5, 6)

// prettier-ignore
// $ExpectType MeshRenderer
const meshRenderer = new MeshRenderer(new THREE.Object3D(), THREE)

// prettier-ignore
// $ExpectType SpriteRenderer
const spriteRenderer = new SpriteRenderer(new THREE.Scene(), THREE)

// prettier-ignore
// $ExpectType CustomRenderer
const customRenderer = new CustomRenderer()

// prettier-ignore
// $ExpectType GPURenderer
const gpuRenderer = new GPURenderer(new THREE.Scene(), THREE)
