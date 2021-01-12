// Type definitions for non-npm package tizen-accessory-browser 1.0
// Project: https://developer.samsung.com/galaxy-accessory/overview.html
// Definitions by: Egor Shulga <https://github.com/egorshulga>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace webapis {
    const sa: SAManager;
}

interface SAManager {
    requestSAAgent(success: (agents: SAAgent[]) => void, error?: (err: Error) => void): void;
    setDeviceStatusListener(callback: (type: SATransport, status: 'DETACHED' | 'ATTACHED') => void): void;
}

interface SAAgent {
    readonly id: string;
    readonly name: string;
    readonly role: 'consumer' | 'provider';
    readonly channelIds: number[];

    requestServiceConnection(peerAgent: SAPeerAgent): void;
    setServiceConnectionListener(callback: {
        onrequest?: (peerAgent: SAPeerAgent) => void;
        onconnect?: (socket: SASocket) => void;
        onerror?: (errorCode: string, peerAgent: SAPeerAgent) => void;
    }): void;
    authenticatePeerAgent(
        peerAgent: SAPeerAgent,
        success: (peerAgent: SAPeerAgent, authToken: SAAuthenticationToken) => void,
        error?: (e: Error) => void,
    ): void;
    acceptServiceConnectionRequest(peerAgent: SAPeerAgent): void;
    rejectServiceConnectionRequest(peerAgent: SAPeerAgent): void;
    findPeerAgents(): void;
    setPeerAgentFindListener(callback: {
        onpeeragentfound: (peerAgent: SAPeerAgent) => void;
        onpeeragentupdated?: (peerAgent: SAPeerAgent, status: 'AVAILABLE' | 'UNAVAILABLE') => void;
        onerror?: (errorCode: string) => void;
    }): void;
    getSAFileTransfer(): SAFileTransfer;
    getSAMessage(): SAMessage;
}

interface SAPeerAgent {
    readonly peerAccessory: SAPeerAccessory;
    readonly appName: string;
    readonly maxAllowedDataSize: number;
    readonly peerId: string;
    readonly profileVersion: string;
    readonly feature: string[];
}

interface SAPeerAccessory {
    readonly deviceAddress: string;
    readonly deviceName: string;
    readonly productId: string;
    readonly transportType: string;
    readonly vendorId: string;
    readonly accessoryId: string;
}

interface SASocket {
    readonly peerAgent: SAPeerAgent;

    close(): void;
    isConnected(): boolean;
    sendData(channelId: number, data: string): void;
    sendSecureData(channelId: number, data: string): void;
    setDataReceiveListener(dataReceiveCallback: (channelId: number, data: string) => void): void;
    setSocketStatusListener(socketStatusCallback: (reason: string) => void): void;
}

interface SAAuthenticationToken {
    readonly authenticationType: string;
    readonly key: string;
}

interface SAFileTransfer {
    readonly defaultReceivePath: string;

    sendFile(peerAgent: SAPeerAgent, filePath: string): number;
    setFileSendListener(callback: {
        onprogress?: (id: string, progress: number) => void;
        oncomplete?: (id: string, localPath: string) => void;
        onerror?: (errorCode: string, id: string) => void;
    }): void;
    setFileReceiveListener(callback: {
        onreceive?: (id: string, fileName: string) => void;
        onprogress?: (id: string, progress: number) => void;
        oncomplete?: (id: string, localPath: string) => void;
        onerror?: (errorCode: string, id: string) => void;
    }): void;
    receiveFile(id: string, localPath: string): void;
    cancelFile(id: string): void;
    rejectFile(id: string): void;
}

interface SAMessage {
    sendData(
        peerAgent: SAPeerAgent,
        data: string,
        callback: {
            onsent?: (peerAgent: SAPeerAgent, id: string) => void;
            onerror?: (errorCode: string, peerAgent: SAPeerAgent, id: string) => void;
        },
    ): void;
    sendSecureData(
        peerAgent: SAPeerAgent,
        data: string,
        callback: {
            onsent?: (peerAgent: SAPeerAgent, id: string) => void;
            onerror?: (errorCode: string, peerAgent: SAPeerAgent, id: string) => void;
        },
    ): void;
    setMessageReceiveListener(receiveDataCallback: (peerAgent: SAPeerAgent, data: string) => void): void;
}

declare enum SATransport {
    TRANSPORT_WIFI = 'TRANSPORT_WIFI',
    TRANSPORT_BT = 'TRANSPORT_BT',
    TRANSPORT_BLE = 'TRANSPORT_BLE',
    TRANSPORT_USB = 'TRANSPORT_USB',
    TRANSPORT_MOBILE = 'TRANSPORT_MOBILE',
}
