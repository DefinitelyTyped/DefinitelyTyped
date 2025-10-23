import * as bser from "bser";
import net from "net";

const obj = "sample data";
const bunser = new bser.BunserBuf();

bunser.on("value", obj => {
    console.log("data from socket", obj);
});

const socket = net.connect("/socket");

socket.on("data", buf => {
    bunser.append(buf);
});
socket.write(bser.dumpToBuffer(obj));
