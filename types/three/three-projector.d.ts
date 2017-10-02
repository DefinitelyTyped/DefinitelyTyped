import {
    Camera,
    Color,
    Face3,
    Light,
    Material,
    Object3D,
    Scene,
    Vector2,
    Vector3,
    Vector4
} from "./three-core";

// Renderers / Renderables /////////////////////////////////////////////////////////////////////
export class RenderableObject {
    constructor();

    id: number;
    object: any;
    z: number;
}

export class RenderableFace {
    constructor();

    id: number;
    v1: RenderableVertex;
    v2: RenderableVertex;
    v3: RenderableVertex;
    normalModel: Vector3;
    vertexNormalsModel: Vector3[];
    vertexNormalsLength: number;
    color: Color;
    material: Material;
    uvs: Vector2[][];
    z: number;

}

export class RenderableVertex {
    constructor();

    position: Vector3;
    positionWorld: Vector3;
    positionScreen: Vector4;
    visible: boolean;

    copy(vertex: RenderableVertex): void;
}

export class RenderableLine {
    constructor();

    id: number;
    v1: RenderableVertex;
    v2: RenderableVertex;
    vertexColors: Color[];
    material: Material;
    z: number;
}

export class RenderableSprite {
    constructor();

    id: number;
    object: any;
    x: number;
    y: number;
    z: number;
    rotation: number;
    scale: Vector2;
    material: Material;
}

/**
 * Projects points between spaces.
 */
export class Projector {
    constructor();

    // deprecated.
    projectVector(vector: Vector3, camera: Camera): Vector3;

    // deprecated.
    unprojectVector(vector: Vector3, camera: Camera): Vector3;

    /**
     * Transforms a 3D scene object into 2D render data that can be rendered in a screen with your renderer of choice, projecting and clipping things out according to the used camera.
     * If the scene were a real scene, this method would be the equivalent of taking a picture with the camera (and developing the film would be the next step, using a Renderer).
     *
     * @param scene scene to project.
     * @param camera camera to use in the projection.
     * @param sort select whether to sort elements using the Painter's algorithm.
     */
    projectScene(scene: Scene, camera: Camera, sortObjects: boolean, sortElements?: boolean): {
        objects: Object3D[];     // Mesh, Line or other object
        sprites: Object3D[];    // Sprite or Particle
        lights: Light[];
        elements: Face3[];    // Line, Particle, Face3 or Face4
    };
}
