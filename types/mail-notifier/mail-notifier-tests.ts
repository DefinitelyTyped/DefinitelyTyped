import mailNotifier = require('mail-notifier');
import debug = require('debug');

const notifier = mailNotifier({ user: 'hello', password: 'world' }); // $ExpectType Notifier
// @ts-expect-error
mailNotifier({ user: 'hello' });
// @ts-expect-error
mailNotifier({ password: 'world' });
mailNotifier({ user: 'hello', password: 'world', host: 'imap.gmail.com' }); // $ExpectType Notifier
mailNotifier({ user: 'hello', password: 'world', port: 993 }); // $ExpectType Notifier
mailNotifier({ user: 'hello', password: 'world', tls: true }); // $ExpectType Notifier
mailNotifier({ user: 'hello', password: 'world', tlsOptions: { rejectUnauthorized: false } }); // $ExpectType Notifier
mailNotifier({ user: 'hello', password: 'world', box: 'foo' }); // $ExpectType Notifier
mailNotifier({ user: 'hello', password: 'world', search: ['bar'] }); // $ExpectType Notifier
mailNotifier({ user: 'hello', password: 'world', markSeen: false }); // $ExpectType Notifier
mailNotifier({ user: 'hello', password: 'world', connTimeout: 1000 }); // $ExpectType Notifier
mailNotifier({ user: 'hello', password: 'world', authTimeout: 1000 }); // $ExpectType Notifier
mailNotifier({ user: 'hello', password: 'world', debug: debug('') }); // $ExpectType Notifier
mailNotifier({ user: 'hello', password: 'world', debug: debug('') }, debug('')); // $ExpectType Notifier

notifier.start(); // $ExpectType Notifier
notifier.stop(); // $ExpectType Notifier
notifier.scan(() => {}); // $ExpectType Notifier

notifier.addListener('mail', mail => {
    mail; // $ExpectType EmailContent
    mail.text; // $ExpectType string
    mail.html; // $ExpectType string
    mail.headers; // $ExpectType EmailHeaders
    mail.subject; // $ExpectType string
    mail.from; // $ExpectType EmailAddress[]
    mail.from[0].address; // $ExpectType string
    mail.from[0].name; // $ExpectType string
    mail.from; // $ExpectType EmailAddress[]
    mail.cc; // $ExpectType EmailAddress[] | undefined
    mail.bcc; // $ExpectType EmailAddress[] | undefined
    mail.references; // $ExpectType string[] | undefined
    mail.messageId; // $ExpectType string | undefined
    mail.inReplyTo; // $ExpectType string[] | undefined
    mail.priority; // $ExpectType "normal" | "high" | "low" | undefined
    mail.date; // $ExpectType Date | undefined
    mail.attachments; // $ExpectType EmailAttachment[] | undefined
    mail.attachments![0].contentType; // $ExpectType string
    mail.attachments![0].fileName; // $ExpectType string
    mail.attachments![0].contentDisposition; // $ExpectType string
    mail.attachments![0].contentId; // $ExpectType string
    mail.attachments![0].transferEncoding; // $ExpectType string
    mail.attachments![0].length; // $ExpectType number
    mail.attachments![0].generatedFileName; // $ExpectType string
    mail.attachments![0].checksum; // $ExpectType string
    mail.attachments![0].content; // $ExpectType Buffer
    mail.uid; // $ExpectType number
    mail.flags; // $ExpectType string[]
});

notifier.addListener('connected', () => {});
notifier.addListener('end', () => {});
notifier.addListener('mail', mail => {
    mail; // $ExpectType EmailContent
});
notifier.addListener('error', e => {
    e; // $ExpectType Error
});

notifier.on('connected', () => {});
notifier.on('end', () => {});
notifier.on('mail', mail => {
    mail; // $ExpectType EmailContent
});
notifier.on('error', e => {
    e; // $ExpectType Error
});

notifier.once('connected', () => {});
notifier.once('end', () => {});
notifier.once('mail', mail => {
    mail; // $ExpectType EmailContent
});
notifier.once('error', e => {
    e; // $ExpectType Error
});

notifier.removeListener('connected', () => {});
notifier.removeListener('end', () => {});
notifier.removeListener('mail', mail => {
    mail; // $ExpectType EmailContent
});
notifier.removeListener('error', e => {
    e; // $ExpectType Error
});

notifier.off('connected', () => {});
notifier.off('end', () => {});
notifier.off('mail', mail => {
    mail; // $ExpectType EmailContent
});
notifier.off('error', e => {
    e; // $ExpectType Error
});

notifier.prependListener('connected', () => {});
notifier.prependListener('end', () => {});
notifier.prependListener('mail', mail => {
    mail; // $ExpectType EmailContent
});
notifier.prependListener('error', e => {
    e; // $ExpectType Error
});

notifier.prependOnceListener('connected', () => {});
notifier.prependOnceListener('end', () => {});
notifier.prependOnceListener('mail', mail => {
    mail; // $ExpectType EmailContent
});
notifier.prependOnceListener('error', e => {
    e; // $ExpectType Error
});

notifier.emit('connected');
notifier.emit('end');
notifier.emit('mail', null as any as mailNotifier.EmailContent);
notifier.emit('error', new Error());
