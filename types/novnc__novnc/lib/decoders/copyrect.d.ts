import Display from "../display";
import Inflator from "../inflator"; // Assuming WebSock uses typeName rQ for its queue
import WebSock from "../websock";

export default class CopyRectDecoder {
    decodeRect(x: number, y: number, width: number, height: number, sock: WebSock, display: Display, depth: number): boolean;
}
