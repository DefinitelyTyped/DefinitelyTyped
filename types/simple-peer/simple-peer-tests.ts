import SimplePeer = require("simple-peer");

declare const stream: MediaStream;

{
    let signal;

    const p = new SimplePeer({
        initiator: location.hash === "#1",
        trickle: false,
        stream,
        iceCompleteTimeout: 500,
        allowHalfTrickle: false
    });

    p.on("error", err => console.log("error", err));

    p.on("signal", data => {
        signal = data;
    });

    if (signal) {
        p.signal(signal);
    }

    p.on("connect", () => {
        console.log("CONNECT");
        p.send("whatever" + Math.random());
    });

    p.on("data", data => {
        console.log("data: " + data);
    });

    p.on("stream", stream => {
        // got remote video stream, now let's show it in a video tag
        const video = document.querySelector("video");
        if (video) {
            video.srcObject = stream;
            video.play();
        }
    });
}

{
    const peer = new SimplePeer();
    peer.on("data", chunk => {
        console.log(`got a chunk: ${chunk}`);
    });
    peer.write(Buffer.from("hey"));

    peer.addStream(stream);
    peer.removeStream(stream);
}
