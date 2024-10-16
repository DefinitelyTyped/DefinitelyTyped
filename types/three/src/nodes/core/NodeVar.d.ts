declare class NodeVar {
    readonly isNodeVar: true;
    name: string;
    type: string | null;
    constructor(name: string, type: string | null);
}
export default NodeVar;
