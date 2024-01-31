import Renderer from './Renderer.js';
import { Node } from '../../nodes/Nodes.js';

export default class PostProcessing {
    renderer: Renderer;
    outputNode: Node;

    constructor(renderer: Renderer, outputNode?: Node);

    render(): Promise<void>;
}
