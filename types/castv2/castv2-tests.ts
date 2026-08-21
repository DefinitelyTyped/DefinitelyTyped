import {
    Channel,
    Client,
    ClientOptions,
    LaunchRequestMessage,
    MediaStatusMessage,
    ReceiverLaunchErrorMessage,
    ReceiverLaunchStatusMessage,
    ReceiverMessage,
    ReceiverStatusMessage,
} from "castv2";

function connectHostOnly(host: string): void {
    const client = new Client();
    client.connect(host, () => {});
}

function connectOptionsWithHostOnly(host: string): void {
    const client = new Client();
    const options: ClientOptions = {
        host,
    };
    client.connect(options, () => {});
}

function connectOptionsWithHostAndPort(host: string, port: number): void {
    const client = new Client();
    const options: ClientOptions = {
        host,
        port,
    };
    client.connect(options, () => {});
}

function connectOptionsWithHostAndReject(host: string, reject: boolean): void {
    const client = new Client();
    const options: ClientOptions = {
        host,
        rejectUnauthorized: reject,
    };
    client.connect(options, () => {});
}

function connectAllOptions(host: string, port: number, reject: boolean): void {
    const client = new Client();
    const options: ClientOptions = {
        host,
        port,
        rejectUnauthorized: reject,
    };
    client.connect(options, () => {});
}

function handleErrors(host: string): void {
    const client = new Client();
    client.on("error", (error: Error) => console.log(error));
    client.connect(host, () => {});
}

function sendPreEncodedMessages(host: string): void {
    const client = new Client();
    client.connect(host, () => {
        const channel = client.createChannel(
            "sender-0",
            "receiver-0",
            "urn:x-cast:com.google.cast.tp.connection",
            "JSON",
        );
        channel.send("raw string");
        channel.send(new Buffer("raw buffer"));
    });
}

function closeChannelsAndclient(host: string): void {
    const client = new Client();
    client.connect(host, () => {
        const channel = client.createChannel(
            "sender-0",
            "receiver-0",
            "urn:x-cast:com.google.cast.tp.connection",
            "JSON",
        );
        channel.close();
        client.close();
    });
}

function handleStatusMessages(channel: Channel): void {
    channel.on("message", (message: ReceiverMessage, broadcast: boolean) => {
        if (message.type == "RECEIVER_STATUS") {
            const status = (message as ReceiverStatusMessage).status;
            if (status.applications) {
                for (const app of status.applications) {
                    console.log(`appId: ${app.appId}`);
                    console.log(`appType: ${app.appType}`);
                    console.log(`displayName: ${app.displayName}`);
                    console.log(`iconUrl: ${app.iconUrl}`);
                    console.log(`isIdleScreen: ${app.isIdleScreen}`);
                    console.log(`launchedFromCloud: ${app.launchedFromCloud}`);
                    console.log(`namespaces: ${app.namespaces}`);
                    console.log(`sessionId: ${app.sessionId}`);
                    console.log(`statusText: ${app.statusText}`);
                    console.log(`transportId: ${app.transportId}`);
                    console.log(`universalAppId: ${app.universalAppId}`);
                }
            }
            if (status.volume) {
                console.log(`controlType: ${status.volume.controlType}`);
                console.log(`level: ${status.volume.level}`);
                console.log(`muted: ${status.volume.muted}`);
                console.log(`stepInterval: ${status.volume.stepInterval}`);
            }
            console.log(`isActiveInput: ${status.isActiveInput}`);
            console.log(`isStandBy: ${status.isStandBy}`);
        } else if (message.type == "MEDIA_STATUS") {
            const status = (message as MediaStatusMessage).status[0];
            console.log(`mediaSessionId: ${status.mediaSessionId}`);
            console.log(`playerState: ${status.playerState}`);
            console.log(`currentTime: ${status.currentTime}`);
        }
    });
}

function sendSimpleLaunchRequest(channel: Channel) {
    channel.send({
        requestId: 1,
        type: "LAUNCH",
        appId: "foo",
    });
}

function sendExplicitLaunchRequest(channel: Channel) {
    const launchRequest: LaunchRequestMessage = {
        requestId: 1,
        type: "LAUNCH",
        appId: "foo",
    };
    channel.send(launchRequest);
}

function sendExplicitLaunchRequestWithParameters(channel: Channel) {
    const launchRequest: LaunchRequestMessage = {
        requestId: 1,
        type: "LAUNCH",
        appId: "foo",
        commandParameters: "bar",
    };
    channel.send(launchRequest);
}

function handleLaunchErrorMessages(channel: Channel) {
    channel.on("message", (message: ReceiverMessage, broadcast: boolean) => {
        if (message.type == "LAUNCH_ERROR") {
            const launchError = message as ReceiverLaunchErrorMessage;
            const reason = launchError.reason;
            const extendedError = launchError.extendedError;
            console.log(`Launch failed, reason "${reason}" (${extendedError})`);
        }
    });
}

function handleLaunchStatusMessage(channel: Channel) {
    channel.on("message", (message: ReceiverMessage, broadcast: boolean) => {
        if (message.type == "LAUNCH_STATUS") {
            const status = (message as ReceiverLaunchStatusMessage).status;
            console.log(`Launch status: ${status}`);
        }
    });
}

// Adapted from the sample code of the module, exercises functionality not
// covered above:
function onDeviceUp(host: string): void {
    const client = new Client();
    client.connect(host, () => {
        // create various namespace handlers
        const connection = client.createChannel(
            "sender-0",
            "receiver-0",
            "urn:x-cast:com.google.cast.tp.connection",
            "JSON",
        );
        const heartbeat = client.createChannel(
            "sender-0",
            "receiver-0",
            "urn:x-cast:com.google.cast.tp.heartbeat",
            "JSON",
        );
        const receiver = client.createChannel(
            "sender-0",
            "receiver-0",
            "urn:x-cast:com.google.cast.receiver",
            "JSON",
        );

        // establish virtual connection to the receiver
        connection.send({ type: "CONNECT" });

        // start heartbeating
        setInterval(() => {
            heartbeat.send({ type: "PING" });
        }, 5000);

        // launch YouTube app
        receiver.send({ type: "LAUNCH", appId: "YouTube", requestId: 1 });

        // display receiver status updates
        receiver.on("message", (data: ReceiverMessage, broadcast: boolean) => {
            if (data.type == "RECEIVER_STATUS") {
                const statusMessage = data as ReceiverStatusMessage;
                console.log(statusMessage.status);
            }
        });
    });
}
