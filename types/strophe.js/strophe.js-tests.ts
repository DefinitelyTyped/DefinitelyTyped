/// <reference types="../strophe.js/muc" />
function log(msg: string): void {
    console.log(msg);
}

function rawInput(data: string): void {
    log('RECV: ' + data);
}

function rawOutput(data: string): void {
    log('SENT: ' + data);
}

function onOwnMessage(msg: Element): boolean {
    console.log(msg);
    const elems = msg.getElementsByTagName('own-message');
    if (elems.length > 0) {
        const own = elems[0];
        const to = msg.getAttribute('to');
        const from = msg.getAttribute('from');
        const iq = $iq({
            to: from,
            type: 'error',
            id: msg.getAttribute('id')
        }).cnode(own).up().c('error', { type: 'cancel', code: '501' })
            .c('feature-not-implemented', { xmlns: 'urn:ietf:params:xml:ns:xmpp-stanzas' });

        connection.sendIQ(iq);
    }

    return true;
}

function onMessage(msg: Element): boolean {
    const to = msg.getAttribute('to');
    const from = msg.getAttribute('from');
    const type = msg.getAttribute('type');
    const elems = msg.getElementsByTagName('body');

    if (type === "chat" && elems.length > 0) {
        const body = elems[0];

        log('ECHOBOT: I got a message from ' + from + ': ' +
            Strophe.getText(body));

        const text = Strophe.getText(body) + " (this is echo)";

        log('ECHOBOT: I sent ' + from + ': ' + Strophe.getText(body));
    }

    // we must return true to keep the handler alive.
    // returning false would remove it after it finishes.
    return true;
}


function sendMessage() {
    const message = "some message";
    const to = "some recipient";
    if (message && to) {
        const reply = $msg({
            to: to,
            type: 'chat'
        })
            .cnode(Strophe.xmlElement('body', message)).up()
            .c('active', { xmlns: "http://jabber.org/protocol/chatstates" });

        connection.send(reply);

        log('I sent ' + to + ': ' + message);
    }
}

const connection = new Strophe.Connection("someservice");
connection.rawInput = rawInput;
connection.rawOutput = rawOutput;

function onConnect(status: Strophe.Status): void {
    if (status === Strophe.Status.CONNECTING) {
        log('Strophe is connecting.');
    } else if (status === Strophe.Status.CONNFAIL) {
        log('Strophe failed to connect.');
    } else if (status === Strophe.Status.DISCONNECTING) {
        log('Strophe is disconnecting.');
    } else if (status === Strophe.Status.DISCONNECTED) {
        log('Strophe is disconnected.');
    } else if (status === Strophe.Status.CONNECTED) {
        log('Strophe is connected.');
        log('ECHOBOT: Send a message to ' + connection.jid +
            ' to talk to me.');

        connection.addHandler(onMessage, null, 'message', null, null, null);
        connection.addHandler(onOwnMessage, null, 'iq', 'set', null, null);
        connection.send($pres().tree());
    }
}

function onRoomMessage(stanza: Element, room: Strophe.MUC.XmppRoom): boolean {
  console.log(Strophe.serialize(stanza));
  room.groupchat("hello");
  return true;
}

function onRoomPresence(stanza: Element, room: Strophe.MUC.XmppRoom): boolean {
  const from = stanza.getAttribute("from");
  console.log(`${from} precense updated`);
  return true;
}

function onRoomRoster(occupants: Strophe.MUC.OccupantMap, room: Strophe.MUC.XmppRoom): boolean {
  for (const nick of Object.keys(occupants)) {
    const occupant = occupants[nick];
    console.log(occupant.nick, occupant.show, occupant.status);
  }
  return true;
}

connection.muc.init(connection);
connection.muc.join("room", "nick", onRoomMessage, onRoomPresence, onRoomRoster);
