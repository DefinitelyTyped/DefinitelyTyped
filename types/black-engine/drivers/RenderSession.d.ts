export class RenderSession {
    parentRenderers: Renderer[];
    endPassParentRenderers: Renderer[];
    isBackBufferActive: boolean;
    customTransform: Matrix | null;
    reset(): void;
}
import { Matrix } from "../geom/Matrix";
import { Renderer } from "./Renderer";
