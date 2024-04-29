webapis.sa.requestSAAgent(handleSAAgent);
webapis.sa.requestSAAgent(handleSAAgent, handleSAAgentError);

declare let agent: SAAgent;
function handleSAAgent(agents: SAAgent[]): void {
    agent = agents[0];
    agent.channelIds.forEach(x => x !== -1);
    if (agent.id === "id") {
    }
    if (agent.name === "name") {
    }
    if (agent.role === "consumer") {
    }
}
function handleSAAgentError(e: Error): void {
    const errorMessage = `requestSAAgent Error name : ${e.name} Error message : ${e.message}`;
}

declare const peer: SAPeerAgent;
agent.requestServiceConnection(peer);
agent.setServiceConnectionListener({
    onrequest: (peer: SAPeerAgent) => peer.peerId,
    onconnect: (socket: SASocket) => {
        socket.isConnected;
        socket.close();
        socket.peerAgent === peer;
        socket.setDataReceiveListener((channelId: number, data: string) => {});
        socket.setSocketStatusListener((reas: string) => {});
        socket.sendData(123, "test");
        socket.sendSecureData(123, "secure test");
    },
    onerror: (errorCode: string, peerAgent: SAPeerAgent) => {},
});
agent.authenticatePeerAgent(peer, (peer: SAPeerAgent, token: SAAuthenticationToken) => {
    token.authenticationType === "14";
    token.key === "key";
});
agent.acceptServiceConnectionRequest(peer);
agent.rejectServiceConnectionRequest(peer);
agent.findPeerAgents();
agent.setPeerAgentFindListener({
    onpeeragentfound: (peer: SAPeerAgent) => {},
    onpeeragentupdated: (peer: SAPeerAgent, status: string) => {},
    onerror: (errorCode: string) => {},
});

const saFileTransfer = agent.getSAFileTransfer();
saFileTransfer.setFileReceiveListener({
    onreceive: (id: string, fileName: string) => {
        if (fileName === "aaa") saFileTransfer.receiveFile(id, "local path");
        else saFileTransfer.rejectFile(id);
        saFileTransfer.cancelFile(id);
    },
    oncomplete: (id: string, localPath: string) => {},
});
saFileTransfer.setFileSendListener({
    onprogress: (id: string, progress: number) => {},
    oncomplete: (id: string, localPath: string) => {},
});
const fileId: number = saFileTransfer.sendFile(peer, "file");

const saMessage: SAMessage = agent.getSAMessage();
saMessage.setMessageReceiveListener((peer: SAPeerAgent, data: string) => {
    peer.peerAccessory.accessoryId;
    data === "test";
});
saMessage.sendData(peer, "Hello World", {
    onsent: (peer, id: string) => {},
});
saMessage.sendSecureData(peer, "Hello Secure World", {
    onsent: (peer, id: string) => {},
});

webapis.sa.setDeviceStatusListener(deviceStatusListener);
function deviceStatusListener(type: SATransport, status: "DETACHED" | "ATTACHED"): void {
    switch (type) {
        case SATransport.TRANSPORT_BLE:
            break;
        case SATransport.TRANSPORT_BT:
            break;
        case SATransport.TRANSPORT_MOBILE:
            break;
        case SATransport.TRANSPORT_USB:
            break;
        case SATransport.TRANSPORT_WIFI:
            break;
    }
    if (status === "DETACHED") {
    }
    if (status === "ATTACHED") {
    }
}
