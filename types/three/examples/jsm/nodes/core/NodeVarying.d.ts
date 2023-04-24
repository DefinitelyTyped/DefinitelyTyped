import NodeVar from './NodeVar';

export default class NodeVarying extends NodeVar {
    needsInterpolation: false;
    isNodeVarying: true;

    constructor(name: string, type: string);
}
