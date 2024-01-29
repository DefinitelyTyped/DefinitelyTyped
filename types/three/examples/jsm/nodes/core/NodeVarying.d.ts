import NodeVar from './NodeVar.js';

export default class NodeVarying extends NodeVar {
    needsInterpolation: false;
    isNodeVarying: true;

    constructor(name: string, type: string);
}
