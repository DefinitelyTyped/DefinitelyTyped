export default class NodeFunctionInput {
    isNodeFunctionInput: true;
    count: null | number;
    qualifier: string;
    isConst: boolean;
    constructor(type: string, name: string, count?: number, qualifier?: string, isConst?: boolean);
}
