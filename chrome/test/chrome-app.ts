

import runtime = chrome.app.runtime;
import cwindow = chrome.app.window;

var createOptions: cwindow.CreateWindowOptions = {
    id: "My Window",
    bounds: {
        left: 0,
        top: 0,
        width: 640,
        height: 480
    },
    resizable: true
};

//Create new window on app launch
chrome.app.runtime.onLaunched.addListener(function (launchData: runtime.LaunchData) {
    chrome.app.window.create('app/url', createOptions, function (created_window: cwindow.AppWindow) {
        return;
    });
});

chrome.app.runtime.onRestarted.addListener(function () { return; });

// retrieving windows
var currentWindow: cwindow.AppWindow = chrome.app.window.current();
var otherWindow: cwindow.AppWindow = chrome.app.window.get('some-string');
var allWindows: cwindow.AppWindow[] = chrome.app.window.getAll();

// listening to window events
currentWindow.onBoundsChanged.addListener(function () { return; });
currentWindow.onClosed.addListener(function () { return; });
currentWindow.onFullscreened.addListener(function () { return; });
currentWindow.onMaximized.addListener(function () { return; });
currentWindow.onMinimized.addListener(function () { return; });
currentWindow.onRestored.addListener(function () { return; });

// check platform capabilities
var visibleEverywhere: boolean = chrome.app.window.canSetVisibleOnAllWorkspaces();

// FileSystem
// https://developer.chrome.com/apps/fileSystem

function test_fileSystem(): void {
    var accepts: chrome.fileSystem.AcceptOptions[] = [
        {mimeTypes: ["text/*"], extensions: ['js', 'css', 'txt', 'html', 'xml', 'tsv', 'csv', 'rtf']}
    ];
    var chooseOption: chrome.fileSystem.ChooseEntryOptions = {
        type: "openFile",
        suggestedName: "foo.txt",
        accepts: accepts,
        acceptsAllTypes: false,
        acceptsMultiple: false
    };
    chrome.fileSystem.chooseEntry(chooseOption, (entry: Entry) => {
        chrome.fileSystem.getDisplayPath(entry, (displayPath: string) => { });

        var retainedId = chrome.fileSystem.retainEntry(entry);
        chrome.fileSystem.isRestorable(retainedId, (isRestorable: boolean) => {
            if(isRestorable){
                chrome.fileSystem.restoreEntry(retainedId, (restoredEntry: Entry) => { });
            }
        });

        chrome.fileSystem.getWritableEntry(entry, (writableEntry: Entry) => {});
        chrome.fileSystem.isWritableEntry(entry, (isWritable: boolean) => {});
    });
}

// Sockets
// https://developer.chrome.com/apps/sockets_tcp
function test_socketsTcp(): void {
    var socketId: number = 0;
    var properties: chrome.sockets.tcp.SocketProperties = {};
    var buffer: ArrayBuffer = new ArrayBuffer(256);

    // create
    chrome.sockets.tcp.create((info) => {
        socketId = info.socketId;
    });

    chrome.sockets.tcp.create(properties, (info) => {
        socketId = info.socketId;
    });

    // update
    chrome.sockets.tcp.update(socketId, properties);
    chrome.sockets.tcp.update(socketId, properties, () => { });

    // setPaused
    chrome.sockets.tcp.setPaused(socketId, true);
    chrome.sockets.tcp.setPaused(socketId, true, () => { });

    // setKeepAlive
    chrome.sockets.tcp.setKeepAlive(socketId, true, (result: number) => { });
    chrome.sockets.tcp.setKeepAlive(socketId, true, 0, (result: number) => { });

    // setNoDelay
    chrome.sockets.tcp.setNoDelay(socketId, true, (result: number) => { });

    // connect
    chrome.sockets.tcp.connect(socketId, "192.168.0.1", 8080, (result: number) => { });

    // disconnect
    chrome.sockets.tcp.disconnect(socketId);
    chrome.sockets.tcp.disconnect(socketId, () => { });

    // send
    chrome.sockets.tcp.send(socketId, buffer, (info: chrome.sockets.tcp.SendInfo) => { });

    // close
    chrome.sockets.tcp.close(socketId);
    chrome.sockets.tcp.close(socketId, () => { });

    // getInfo
    chrome.sockets.tcp.getInfo(socketId, (info: chrome.sockets.tcp.SocketInfo) => { });

    // getSockets
    chrome.sockets.tcp.getSockets((infos: chrome.sockets.tcp.SocketInfo[]) => { });
}

function test_socketsTcpEvents(): void {
    chrome.sockets.tcp.onReceive.addListener((info: chrome.sockets.tcp.ReceiveEventArgs) => { });
    chrome.sockets.tcp.onReceiveError.addListener((info: chrome.sockets.tcp.ReceiveErrorEventArgs) => { });
}

function testSocketsTcpTypes(): void {
    // SocketProperties
    var properties: chrome.sockets.tcp.SocketProperties;

    properties = {
    };

    properties = {
        persistent: true,
        name: "test",
        bufferSize: 1024
    };

    // SocketInfo
    var socketInfo: chrome.sockets.tcp.SocketInfo;

    socketInfo = {
        socketId: 1,
        persistent: true,
        paused: true,
        connected: false
    };

    socketInfo.name = "test";
    socketInfo.bufferSize = 1024;
    socketInfo.localAddress = "192.168.0.2";
    socketInfo.localPort = 8000;
    socketInfo.peerAddress = "192.168.0.3";
    socketInfo.peerPort = 1000;
}

// https://developer.chrome.com/apps/sockets_udp
function test_socketsUdp(): void {
    var socketId: number = 0
    var properties: chrome.sockets.udp.SocketProperties = {};
    var buffer: ArrayBuffer = new ArrayBuffer(256);

    // create
    chrome.sockets.udp.create((info) => {
        socketId = info.socketId;
    });

    chrome.sockets.udp.create(properties, (info) => {
        socketId = info.socketId;
    });

    // update
    chrome.sockets.udp.update(socketId, properties);
    chrome.sockets.udp.update(socketId, properties, () => { });

    // setPaused
    chrome.sockets.udp.setPaused(socketId, true);
    chrome.sockets.udp.setPaused(socketId, true, () => { });

    // bind
    chrome.sockets.udp.bind(socketId, "0.0.0.0", 8080, (result: number) => { });

    // send
    chrome.sockets.udp.send(socketId, buffer, "172.21.0.1", 10080, (info: chrome.sockets.udp.SendInfo) => { });

    // close
    chrome.sockets.udp.close(socketId);
    chrome.sockets.udp.close(socketId, () => { });

    // getInfo
    chrome.sockets.udp.getInfo(socketId, (info: chrome.sockets.udp.SocketInfo) => { });

    // getSockets
    chrome.sockets.udp.getSockets((infos: chrome.sockets.udp.SocketInfo[]) => { });

    // joinGroup
    chrome.sockets.udp.joinGroup(socketId, "224.0.0.1", (result: number) => { });

    // leaveGroup
    chrome.sockets.udp.leaveGroup(socketId, "224.0.0.1", (result: number) => { });

    // setMulticastTimeToLive
    chrome.sockets.udp.setMulticastTimeToLive(socketId, 100, (result: number) => { });

    // setMulticastLoopbackMode
    chrome.sockets.udp.setMulticastLoopbackMode(socketId, true, (result: number) => { });

    // getJoinedGroups
    chrome.sockets.udp.getJoinedGroups(socketId, (groups: string[]) => { });
}

function test_socketsUdpEvents(): void {
    chrome.sockets.udp.onReceive.addListener((info: chrome.sockets.udp.ReceiveEventArgs) => { });
    chrome.sockets.udp.onReceiveError.addListener((info: chrome.sockets.udp.ReceiveErrorEventArgs) => { });
}

function testSocketsUdpTypes(): void {
    // SocketProperties
    var properties: chrome.sockets.udp.SocketProperties;

    properties = {
    };

    properties = {
        persistent: true,
        name: "test",
        bufferSize: 1024
    };

    // SocketInfo
    var socketInfo: chrome.sockets.udp.SocketInfo;

    socketInfo = {
        socketId: 1,
        persistent: true,
        paused: true
    };

    socketInfo.name = "test";
    socketInfo.bufferSize = 1024;
    socketInfo.localAddress = "192.168.0.2";
    socketInfo.localPort = 8000;
}

// https://developer.chrome.com/apps/sockets_tcpServer
function test_socketsTcpServer(): void {
    var socketId: number = 0;
    var properties: chrome.sockets.tcpServer.SocketProperties = {};
    var buffer: ArrayBuffer = new ArrayBuffer(256);

    // create
    chrome.sockets.tcpServer.create((info) => {
        socketId = info.socketId;
    });

    chrome.sockets.tcpServer.create(properties, (info) => {
        socketId = info.socketId;
    });

    // update
    chrome.sockets.tcpServer.update(socketId, properties);
    chrome.sockets.tcpServer.update(socketId, properties, () => { });

    // setPaused
    chrome.sockets.tcpServer.setPaused(socketId, true);
    chrome.sockets.tcpServer.setPaused(socketId, true, () => { });

    // listen
    chrome.sockets.tcpServer.listen(socketId, "0.0.0.0", 80, (result: number) => { });
    chrome.sockets.tcpServer.listen(socketId, "0.0.0.0", 80, 128, (result: number) => { });

    // disconnect
    chrome.sockets.tcp.disconnect(socketId);
    chrome.sockets.tcp.disconnect(socketId, () => { });

    // close
    chrome.sockets.udp.close(socketId);
    chrome.sockets.udp.close(socketId, () => { });

    // getInfo
    chrome.sockets.udp.getInfo(socketId, (info: chrome.sockets.udp.SocketInfo) => { });

    // getSockets
    chrome.sockets.tcp.getSockets((infos: chrome.sockets.tcp.SocketInfo[]) => { });
}

function test_socketsTcpServerEvents(): void {
    chrome.sockets.tcpServer.onAccept.addListener((info: chrome.sockets.tcpServer.AcceptEventArgs) => { });
    chrome.sockets.tcpServer.onAcceptError.addListener((info: chrome.sockets.tcpServer.AcceptErrorEventArgs) => { });
}

function testSocketsTcpServerTypes(): void {
    // SocketProperties
    var properties: chrome.sockets.tcpServer.SocketProperties;

    properties = {
    };

    properties = {
        persistent: true,
        name: "test"
    };

    // SocketInfo
    var socketInfo: chrome.sockets.tcpServer.SocketInfo;

    socketInfo = {
        socketId: 1,
        persistent: true,
        paused: true
    };

    socketInfo.name = "test";
    socketInfo.localAddress = "192.168.0.2";
    socketInfo.localPort = 8000;
}

function testSystemNetwork() {
    chrome.system.network.getNetworkInterfaces((networkInterfaces) => {
        var iface: chrome.system.network.NetworkInterface;
        for (var i in networkInterfaces) {
            iface = networkInterfaces[i];
        }
    });
}
