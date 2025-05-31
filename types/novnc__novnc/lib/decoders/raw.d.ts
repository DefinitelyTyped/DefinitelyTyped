import Display from "../display";
import WebSock from "../websock";

export default class RawDecoder {
    decodeRect(x: number, y: number, width: number, height: number, sock: WebSock, display: Display, depth: number): boolean;
}
