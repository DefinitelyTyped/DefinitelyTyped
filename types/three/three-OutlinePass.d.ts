import
{
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
export class OutlinePass
{
    constructor(size: Vector2, scene: Scene, camer: Camera);
    selectedObjects: Array<Object3D>;
    renderCamera: Camera;
}

