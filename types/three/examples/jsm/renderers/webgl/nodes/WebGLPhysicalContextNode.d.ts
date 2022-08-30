import ContextNode from '../../../nodes/core/ContextNode.js';
import Node from '../../../nodes/core/Node';

export type WebGLPhysicalContextScope =
    | typeof WebGLPhysicalContextNode.RADIANCE
    | typeof WebGLPhysicalContextNode.IRRADIANCE;

export default class WebGLPhysicalContextNode extends ContextNode {
    static RADIANCE: 'radiance';
    static IRRADIANCE: 'irradiance';

    constructor(scope: WebGLPhysicalContextScope, node: Node);
}
