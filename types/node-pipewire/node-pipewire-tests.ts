import {
    createPwThread,
    getInputNodes,
    getInputNodesName,
    getLinks,
    getNodes,
    getOutputNodes,
    getOutputNodesName,
    getPorts,
    linkNodesNameToId,
    linkPorts,
    unlinkNodesNameToId,
    unlinkPorts,
    waitForNewNode,
} from "node-pipewire";

createPwThread();

const links = getLinks();
const ports = getPorts();
const nodes = getNodes();
const outputNodes = getOutputNodes();
const inputNodes = getInputNodes();
const outputNodeNames = getOutputNodesName();
const inputNodeNames = getInputNodesName();

linkPorts(outputNodes[0].id, inputNodes[0].id);
unlinkPorts(outputNodes[1].id, inputNodes[1].id);
linkNodesNameToId(outputNodeNames[0], outputNodes[0].id);
unlinkNodesNameToId(inputNodeNames[0], inputNodes[0].id);
waitForNewNode(outputNodeNames[0]);
