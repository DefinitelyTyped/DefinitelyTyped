import { Client, ReceiverMessage, ReceiverStatusMessage } from "castv2";
import mdns from "mdns";

// This is based on the sample code from the castv2 module's README.

const browser = mdns.createBrowser(mdns.tcp("googlecast"));

browser.on("serviceUp", (service) => {
    ondeviceup(service.addresses[0]);
    browser.stop();
});

browser.start();

function ondeviceup(host: string): void {
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
        const receiver = client.createChannel("sender-0", "receiver-0", "urn:x-cast:com.google.cast.receiver", "JSON");

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
