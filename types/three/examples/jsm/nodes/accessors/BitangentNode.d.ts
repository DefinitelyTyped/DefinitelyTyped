import Node from '../core/Node';

export type BitangentScope =
    | typeof BitangentNode.LOCAL
    | typeof BitangentNode.VIEW
    | typeof BitangentNode.WORLD
    | typeof BitangentNode.GEOMETRY;

export default class BitangentNode extends Node {
    static GEOMETRY: 'geometry';
    static LOCAL: 'local';
    static VIEW: 'view';
    static WORLD: 'world';

    scope: BitangentScope;

    constructor(scope?: BitangentScope);
}
