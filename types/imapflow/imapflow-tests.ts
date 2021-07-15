import ImapFlow = require('imapflow');

// $ExpectType ImapFlow
const client = new ImapFlow({
    host: '127.0.0.1',
    auth: {
        user: 'test',
        pass: 'test',
    },
    port: 993,
});

// $ExpectType Promise<MailboxLockObject>
client.getMailboxLock('INBOX');

// $ExpectType Promise<FetchMessageObject>
client.fetchOne('*', { uid: true });

// $Expect void
client.logout();
