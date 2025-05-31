import Display from "../display";
import Inflator from "../inflator";
import WebSock from "../websock";

export default class CopyRectDecoder {
    decodeRect(x: number, y: number, width: number, height: number, sock: WebSock, display: Display, depth: number): boolean;
}
