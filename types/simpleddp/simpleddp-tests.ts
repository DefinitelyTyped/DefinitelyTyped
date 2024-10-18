import simpleDDP from "simpleddp";

class simpleSocketProvider {
    constructor(url: string) {}
    readonly readyState: number;
    send(data: any) {}
    close(code?: number, reason?: string) {}
    onopen: null;
    onmessage(this: any, event: any) {}
    onerror(this: any, event: any) {}
    onclose(this: any, event: any) {}
}
const success = new simpleDDP({ endpoint: "", SocketConstructor: simpleSocketProvider }); // $ExpectType simpleDDP
