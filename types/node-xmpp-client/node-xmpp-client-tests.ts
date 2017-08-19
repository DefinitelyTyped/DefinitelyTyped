import {Client} from 'node-xmpp-client';

const client = new Client({
    jid: 'user@example.com',
    password: 'password'
});

client.connect();

client.on('online', () => {});

client.on('stanza', stanza => {
    const _ = stanza;
});

const stanza = new Client.Stanza('chat', {})
    .c('show').t('chat').up()
    .c('status').t('message');
client.send(stanza);

client.disconnect();
