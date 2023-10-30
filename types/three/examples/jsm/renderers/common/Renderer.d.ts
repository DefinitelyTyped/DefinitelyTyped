import { Camera, ColorSpace, CoordinateSystem, Scene, ToneMapping } from '../../../../src/Three.js';
import Backend from './Backend.js';
import Info from './Info.js';

export default class Renderer {
    isRenderer: true;

    domElement: HTMLCanvasElement;

    backend: Backend;

    autoClear: boolean;
    autoClearColor: boolean;
    autoClearDepth: boolean;
    autoClearStencil: boolean;

    outputColorSpace: ColorSpace;

    toneMapping: ToneMapping;
    toneMappingExposure: number;

    sortObjects: boolean;

    depth: boolean;
    stencil: boolean;

    info: Info;

    constructor(backend: Backend);

    init(): Promise<void>;

    get coordinateSystem(): CoordinateSystem;

    render(scene: Scene, camera: Camera): Promise<void>;

    setAnimationLoop(callback: ((time: DOMHighResTimeStamp) => void) | null): void;

    setPixelRatio(value?: number): void;

    setSize(width: number, height: number, updateStyle?: boolean): void;
}
