import Node from '../core/Node';

export type ViewportNodeScope =
    | typeof ViewportNode.COORDINATE
    | typeof ViewportNode.RESOLUTION
    | typeof ViewportNode.TOP_LEFT
    | typeof ViewportNode.BOTTOM_LEFT
    | typeof ViewportNode.TOP_RIGHT
    | typeof ViewportNode.BOTTOM_RIGHT;

export default class ViewportNode extends Node {
    static COORDINATE: 'coordinate';
    static RESOLUTION: 'resolution';
    static TOP_LEFT: 'topLeft';
    static BOTTOM_LEFT: 'bottomLeft';
    static TOP_RIGHT: 'topRight';
    static BOTTOM_RIGHT: 'bottomRight';

    scope: ViewportNodeScope;
    isViewportNode: true;

    constructor(scope: ViewportNodeScope);
}
