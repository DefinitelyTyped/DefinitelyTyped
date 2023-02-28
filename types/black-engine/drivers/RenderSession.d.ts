export class RenderSession {
    parentRenderers: Renderer[];
    endPassParentRenderers: Renderer[];
    isBackBufferActive: boolean;
    customTransform: Matrix | null;
    reset(): void;
}
import { Renderer } from './Renderer';
import { Matrix } from '../geom/Matrix';
