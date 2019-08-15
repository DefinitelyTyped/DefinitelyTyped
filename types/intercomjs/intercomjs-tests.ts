

function test_intercom_static() {
    var instance: intercom.Intercom = Intercom.getInstance();

    var capturedMessage: any;
    var detect: Function = (msg: any) => capturedMessage = msg;
    instance.on("test", detect);

    var msgToSend: any = {one: 1, two: "2"};
    instance.emit("test", msgToSend);
    console.log(capturedMessage === msgToSend);

    var onceListenerInvokedTimes = 0;
    instance.once("testOnce", ()=>onceListenerInvokedTimes+=1, 300);
    instance.once("testOnce", ()=>onceListenerInvokedTimes+=1, 300);
    console.log(onceListenerInvokedTimes === 1);

    instance.emit("eventWithoutAMessage");

    instance.off("test", detect);
}
