import * as AVS from "alexa-voice-service";

const options = {
    debug: true,
    clientId: "",
    clientSecret: "",
    deviceId: "",
    refreshToken: "",
};

const avsInstance = new AVS(options);

avsInstance.on(AVS.EventTypes.RECORD_START, () => {
});

avsInstance.on(AVS.EventTypes.RECORD_STOP, () => {
});

avsInstance.player.on(AVS.Player.EventTypes.PLAY, () => {
});

avsInstance.refreshToken().then((tokens) => {
}).catch((error: Error) => {
});

avsInstance.requestMic();

avsInstance.startRecording();

avsInstance.stopRecording().then((dataView: any) => { });

const dataView = new DataView(new ArrayBuffer(1));

avsInstance.sendAudio(dataView).then(({ xhr, response }: any) => { });
