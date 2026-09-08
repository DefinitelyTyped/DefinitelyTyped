import {
    AudioPosition,
    createPwThread,
    createSink,
    createSource,
    destroyObject,
    getClients,
    getInputNodes,
    getInputNodesName,
    getLinks,
    getNodes,
    getOutputNodes,
    getOutputNodesName,
    getPorts,
    linkNodesNameToId,
    linkPorts,
    NodeDirection,
    PipewireClient,
    PipewireLink,
    PipewireNode,
    PipewirePort,
    unlinkNodesNameToId,
    unlinkPorts,
    waitForNewNode,
} from "node-pipewire";

createPwThread();
createPwThread(true);

const links: PipewireLink[] = getLinks();
const ports: PipewirePort[] = getPorts();
const nodes: PipewireNode[] = getNodes();
const clients: PipewireClient[] = getClients();
const outputNodes: PipewireNode[] = getOutputNodes();
const inputNodes: PipewireNode[] = getInputNodes();
const outputNodeNames: string[] = getOutputNodesName();
const inputNodeNames: string[] = getInputNodesName();

const portProps: Record<string, string> = ports[0].props;
const nodeProps: Record<string, string> = nodes[0].props;
const linkProps: Record<string, string> = links[0].props;
const clientProps: Record<string, string> = clients[0].props;
const clientPid: number = clients[0].pid;
const clientApplicationName: string = clients[0].application_name;

linkPorts(outputNodes[0].id, inputNodes[0].id);
linkPorts(outputNodes[0].id, inputNodes[0].id, false);
unlinkPorts(outputNodes[1].id, inputNodes[1].id);
linkNodesNameToId(outputNodeNames[0], outputNodes[0].id);
linkNodesNameToId(outputNodeNames[0], outputNodes[0].id, false);
unlinkNodesNameToId(inputNodeNames[0], inputNodes[0].id);

const direction: NodeDirection = "Output";
const newNode: Promise<PipewireNode> = waitForNewNode(outputNodeNames[0], direction, 1_000);

const positions: AudioPosition[] = ["FL", "FR"];
createSource("node-pipewire-test-source", positions);
createSource("node-pipewire-test-source", positions, true);
createSink("node-pipewire-test-sink", positions);
createSink("node-pipewire-test-sink", positions, true);
destroyObject(nodes[0].id);

void portProps;
void nodeProps;
void linkProps;
void clientProps;
void clientPid;
void clientApplicationName;
void newNode;
