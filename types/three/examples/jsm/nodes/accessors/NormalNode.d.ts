import Node from '../core/Node';

export type NormalNodeScope =
    | typeof NormalNode.GEOMETRY
    | typeof NormalNode.LOCAL
    | typeof NormalNode.WORLD
    | typeof NormalNode.VIEW;

export default class NormalNode extends Node {
    static GEOMETRY: 'geometry';
    static LOCAL: 'local';
    static WORLD: 'world';
    static VIEW: 'view';
    scope: NormalNodeScope;

    constructor(scope?: NormalNodeScope);
}
