function log(msg: string): void {
    console.log(msg);
}

function rawInput(data: string): void {
    log('RECV: ' + data);
}

function rawOutput(data: string): void {
    log('SENT: ' + data);
}

function onOwnMessage(msg: HTMLElement): boolean {

    console.log(msg);
    var elems = msg.getElementsByTagName('own-message');
    if (elems.length > 0) {
        var own = elems[0];
        var to = msg.getAttribute('to');
        var from = msg.getAttribute('from');
        var iq = $iq({
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
    var to = msg.getAttribute('to');
    var from = msg.getAttribute('from');
    var type = msg.getAttribute('type');
    var elems = msg.getElementsByTagName('body');

    if (type == "chat" && elems.length > 0) {
        var body = elems[0];

        log('ECHOBOT: I got a message from ' + from + ': ' +
            Strophe.getText(body));

        var text = Strophe.getText(body) + " (this is echo)";
    
        //var reply = $msg({to: from, from: to, type: 'chat', id: 'purple4dac25e4'}).c('active', {xmlns: "http://jabber.org/protocol/chatstates"}).up().cnode(body);
        //.cnode(Strophe.copyElement(body)); 
        //connection.send(reply.tree());

        log('ECHOBOT: I sent ' + from + ': ' + Strophe.getText(body));
    }

    // we must return true to keep the handler alive.  
    // returning false would remove it after it finishes.
    return true;
}


function sendMessage() {
    var message = "some message";
    var to = "some recipient";
    if (message && to) {
        var reply = $msg({
            to: to,
            type: 'chat'
        })
            .cnode(Strophe.xmlElement('body', message)).up()
            .c('active', { xmlns: "http://jabber.org/protocol/chatstates" });

        connection.send(reply);

        log('I sent ' + to + ': ' + message);
    }
}

var connection = new Strophe.Connection("someservice");
connection.rawInput = rawInput;
connection.rawOutput = rawOutput;

function onConnect(status: Strophe.Status): void {
    if (status == Strophe.Status.CONNECTING) {
        log('Strophe is connecting.');
    } else if (status == Strophe.Status.CONNFAIL) {
        log('Strophe failed to connect.');
    } else if (status == Strophe.Status.DISCONNECTING) {
        log('Strophe is disconnecting.');
    } else if (status == Strophe.Status.DISCONNECTED) {
        log('Strophe is disconnected.');
    } else if (status == Strophe.Status.CONNECTED) {
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
  let from = stanza.getAttribute("from");
  console.log(`${from} precense updated`);
  return true;
}

function onRoomRoster(occupants: Strophe.MUC.OccupantMap, room: Strophe.MUC.XmppRoom): boolean {
  for (let nick of Object.keys(occupants)) {
    let occupant = occupants[nick];
    console.log(occupant.nick, occupant.show, occupant.status);
  }
  return true;
}

connection.muc.init(connection);
connection.muc.join("room", "nick", onRoomMessage, onRoomPresence, onRoomRoster);
