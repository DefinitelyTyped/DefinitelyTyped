import neffos = require("neffos.js");

const wsURL = "ws://localhost:8080/echo";
const noOpErr = new Error("no op");

async function asumeExample() {
    try {
        const conn = await neffos.dial(wsURL, {
            default: { // "default" namespace.
                _OnNamespaceConnected: (ns: neffos.NSConn, msg: neffos.Message): Error => {
                    return noOpErr;
                },
                _OnNamespaceDisconnect: (ns: neffos.NSConn, msg: neffos.Message): Error => {
                    return noOpErr;
                },
                _OnRoomJoined: (ns: neffos.NSConn, msg: neffos.Message): Error => {
                    return noOpErr;
                },
                _OnRoomLeft: (ns: neffos.NSConn, msg: neffos.Message): Error => {
                    return noOpErr;
                },
                chat: (ns: neffos.NSConn, msg: neffos.Message): Error => { // "chat" event.
                    let prefix = "Server says: ";

                    if (msg.Room !== "") {
                        prefix = msg.Room + " >> ";
                    }

                    return noOpErr;
                },
            }
        });

        const nsConn = await conn.connect("default");
        nsConn.emit("chat", "Hello from client side!");

        const msg = new neffos.Message();
        msg.Namespace = "default";
        msg.Event = "chat";
        msg.Body = "Hello from client (again) using the conn's write method!";
        conn.write(msg);
        nsConn.conn.write(msg);

        const reply = await nsConn.ask("question", "what's my name");
        if (reply.Err !== "") {
            throw new Error("error from reply: " + reply.Err);
        }

        const room = await nsConn.joinRoom("room1");
        room.emit("chat", "I joined.");
        room.leave();

        room.nsConn.leaveAll();

        room.nsConn.room("undefined").leave();

        nsConn.disconnect().then(() => { });
    } catch (err) { }
}

asumeExample();
