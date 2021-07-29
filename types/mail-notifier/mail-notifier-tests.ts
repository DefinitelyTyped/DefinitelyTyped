/// <reference types="node" />

import * as notifier from 'mail-notifier';

const a = notifier({
    user: 'hello',
    password: 'world',
    host: 'imap.gmail.com',
    port: 993,
    tls: true,
    tlsOptions: { rejectUnauthorized: false },
})
    .on('mail', mail => {
        console.log(mail);
    })
    .on('error', e => {
        if (!e.toString().includes('Invalid credentials')) throw e;
    })
    .start()
    .stop();
