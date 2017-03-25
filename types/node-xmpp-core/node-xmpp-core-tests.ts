import {Connection} from 'node-xmpp-core';

const con = new Connection();
con.on('online', () => {
    con.eventNames();
});
