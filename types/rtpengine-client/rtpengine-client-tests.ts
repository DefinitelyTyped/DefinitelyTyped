import { Client, RtpEngineError, RtpEngineResponse, TcpClient, WsClient } from "rtpengine-client";

// --- Client (UDP) ---

// Constructor forms
const c1 = new Client();
const c2 = new Client(12345);
const c3 = new Client(12345, "127.0.0.1");
const c4 = new Client({ localPort: 12345, localAddress: "0.0.0.0", timeout: 1000, rejectOnError: true });
const c5 = new Client(() => {/* listening */});

// Events
c1.on("listening", () => {});
c1.on("error", (err: Error) => {});
c1.on("end", () => {});

// Command: port+host form — Promise
c1.offer(22222, "10.0.0.1", { "call-id": "abc", sdp: "v=0..." }).then((res: RtpEngineResponse) => {
    const result: string = res.result;
    const sdp: string | undefined = res.sdp;
});

// Command: {port, host} form — Promise
c1.answer({ port: 22222, host: "10.0.0.1" }, { "call-id": "abc", sdp: "v=0..." }).then((res) => {});

// Command: callback form — returns Client
c1.offer(22222, "10.0.0.1", { "call-id": "abc" }, (err, data) => {
    if (err) return;
    const result: string = data.result;
}).on("error", () => {});

// Other commands
c1.ping(22222, "10.0.0.1");
c1.delete(22222, "10.0.0.1", { "call-id": "abc" });
c1.query(22222, "10.0.0.1", { "call-id": "abc" });
c1.startRecording(22222, "10.0.0.1", { "call-id": "abc" });
c1.stopRecording(22222, "10.0.0.1", { "call-id": "abc" });
c1.blockDTMF(22222, "10.0.0.1", { "call-id": "abc" });
c1.unblockDTMF(22222, "10.0.0.1", { "call-id": "abc" });
c1.playDTMF(22222, "10.0.0.1", { "call-id": "abc", code: "1" });
c1.blockMedia(22222, "10.0.0.1", { "call-id": "abc" });
c1.unblockMedia(22222, "10.0.0.1", { "call-id": "abc" });
c1.silenceMedia(22222, "10.0.0.1", { "call-id": "abc" });
c1.unsilenceMedia(22222, "10.0.0.1", { "call-id": "abc" });
c1.startForwarding(22222, "10.0.0.1", { "call-id": "abc" });
c1.stopForwarding(22222, "10.0.0.1", { "call-id": "abc" });
c1.playMedia(22222, "10.0.0.1", { "call-id": "abc" });
c1.stopMedia(22222, "10.0.0.1", { "call-id": "abc" });
c1.statistics(22222, "10.0.0.1");
c1.publish(22222, "10.0.0.1", { "call-id": "abc" });
c1.subscribeRequest(22222, "10.0.0.1", { "call-id": "abc" });
c1.subscribeAnswer(22222, "10.0.0.1", { "call-id": "abc" });
c1.unsubscribe(22222, "10.0.0.1", { "call-id": "abc" });
c1.list(22222, "10.0.0.1");

c1.close();

// --- WsClient ---

const ws1 = new WsClient("ws://10.0.0.1:9900");
const ws2 = new WsClient({ url: "ws://10.0.0.1:9900", timeout: 2000 });

ws1.on("listening", () => {});
ws1.on("close", () => {});
ws1.on("reconnected", () => {});
ws1.on("error", (err: Error) => {});

// Command: Promise form
ws1.offer({ "call-id": "abc", sdp: "v=0..." }).then((res: RtpEngineResponse) => {
    const result: string = res.result;
});

// Command: no opts
ws1.ping().then((res) => {});
ws1.statistics();

// Command: callback form — returns WsClient
ws1.offer({ "call-id": "abc" }, (err, data) => {
    if (err) return;
}).on("error", () => {});

ws1.close();

// --- TcpClient ---

const tcp1 = new TcpClient("10.0.0.1:9900");
const tcp2 = new TcpClient({ hostport: "10.0.0.1:9900", timeout: 2000 });

tcp1.on("connect", () => {});
tcp1.on("listening", () => {});
tcp1.on("error", (err: Error) => {});
tcp1.on("end", () => {});

// Command: Promise form
tcp1.offer({ "call-id": "abc", sdp: "v=0..." }).then((res: RtpEngineResponse) => {});

// Command: callback form — returns TcpClient
tcp1.answer({ "call-id": "abc" }, (err, data) => {}).on("error", () => {});

tcp1.close();

// --- RtpEngineError ---

const err = new RtpEngineError("timeout");
const msg: string = err.message;
