import { Socket as TCPSocket } from "node:net";

export default Socket;

declare class Socket extends TCPSocket {
    secure: boolean;
}
