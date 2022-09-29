import Node from '../core/Node';

export type PositionNodeScope =
    | typeof PositionNode.GEOMETRY
    | typeof PositionNode.LOCAL
    | typeof PositionNode.WORLD
    | typeof PositionNode.VIEW
    | typeof PositionNode.VIEW_DIRECTION;

export default class PositionNode extends Node {
    static GEOMETRY: 'geometry';
    static LOCAL: 'local';
    static WORLD: 'world';
    static VIEW: 'view';
    static VIEW_DIRECTION: 'viewDirection';
    scope: PositionNodeScope;

    constructor(scope?: PositionNodeScope);
}
