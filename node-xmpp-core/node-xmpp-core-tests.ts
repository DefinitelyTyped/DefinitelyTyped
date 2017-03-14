import {Connection} from './index';

const con = new Connection();
con.on('online', () => {
    con.eventNames();
});
