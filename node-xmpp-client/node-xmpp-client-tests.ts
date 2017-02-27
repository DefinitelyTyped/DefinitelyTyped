import {Client} from './index';

let client = new Client({
    jid: 'user@example.com',
    password: 'password'
});

client.connect();

client.on('online', () => {});

client.on('stanza', stanza => {
    let _ = stanza;
});

let stanza = new Client.Stanza('chat', {})
    .c('show').t('chat').up()
    .c('status').t('message');
client.send(stanza);

client.disconnect();
