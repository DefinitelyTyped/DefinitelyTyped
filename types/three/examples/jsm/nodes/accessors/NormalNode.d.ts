import Node from '../core/Node';

export type NormalNodeScope = typeof NormalNode.GEOMETRY | typeof NormalNode.LOCAL | typeof NormalNode.VIEW;

export default class NormalNode extends Node {
    static GEOMETRY: 'geometry';
    static LOCAL: 'local';
    static VIEW: 'view';
    scope: NormalNodeScope;

    constructor(scope?: NormalNodeScope);
}
