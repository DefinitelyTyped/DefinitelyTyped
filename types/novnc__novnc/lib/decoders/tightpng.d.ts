import TightDecoder from "./tight";
import Display from "../display";
import WebSock from "../websock";

export default class TightPNGDecoder extends TightDecoder {
    protected _pngRect(x: number, y: number, width: number, height: number, sock: WebSock, display: Display, depth: number): boolean;
}
