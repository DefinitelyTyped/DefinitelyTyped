import Twilio from "twilio-client";

const device = new Twilio.Device();

Twilio.Device.setup("some_token");

device.on("cancel", connection => {
    console.log(connection.status());
});

device.on("connect", connection => {
    const localStream = connection.getLocalStream();
});

device.on("error", err => {
    const { code, message, connection } = err;
});

device.audio.on("deviceChange", lostActiveDevices => {
    if (lostActiveDevices) {
        lostActiveDevices.map(device => {
            console.log(`Lost ${device.deviceId}`);
        });
    }
});

device.audio.isOutputSelectionSupported;

const connection = device.activeConnection();
if (connection) {
    connection.on("mute", (isMuted, conn) => {
        if (isMuted) {
            conn.mute(false);
        }
    });

    connection.on("warning", warningName => {
        if (warningName === "high-rtt") {
            window.alert("uh-oh! experiencing some lag right now!");
        }
    });

    connection.isMuted();
}
