import {
    Mailbox,
    MailLocation,
    MIMEHeader,
    MimeMessage,
    MIMEMessageContent,
    MIMEMessageHeader,
    RecipientOptions,
    RecipientType,
    TextFormat,
} from 'mimetext';

const [mailbox] = [
    new Mailbox(''),
    new Mailbox('', { type: 'to' }),
    new Mailbox({ addr: '' }),
    new Mailbox({ addr: '', name: '', type: 'to' }),
];

// $ExpectType MailLocationData
mailbox.parseSpecCompliantText('');

// $ExpectType void
mailbox.createMailbox();

// $ExpectType InputType
mailbox.findInputType('');

// $ExpectType string
mailbox.getAddrDomain();

// $ExpectType string
mailbox.dump();

// $ExpectType Required<MailboxInput>
mailbox.toObject();

const mimeHeader: MIMEHeader = {
    custom: true,
    dump: v => v,
    name: '',
    placement: 'content',
    value: '',
};

const [messageHeader] = [new MIMEMessageHeader('content'), new MIMEMessageHeader('header')];

// $ExpectType string | null
messageHeader.get('');

// $ExpectType MIMEHeader
messageHeader.set('', '');

// $ExpectType Record<string, string>
messageHeader.toObject();

// $ExpectType string
messageHeader.dump({});
messageHeader.dump({
    toBase64: input => `${input}`,
    store: [mimeHeader],
});

const messageContent = new MIMEMessageContent('');

// $ExpectType Record<string, string>
messageContent.getHeaders();

// $ExpectType string | undefined
messageContent.getHeader('');

// $ExpectType boolean
messageContent.isAttachment();

// $ExpectType string
messageContent.dump({}, { alt: '', mixed: '' });
messageContent.dump({ toBase64: input => `${input}`, store: [mimeHeader] }, { alt: '', mixed: '' });

// $ExpectType MIMEMessageContent
messageContent.setHeader('', '');

// $ExpectType MIMEMessageContent
messageContent.setHeaders(['']);
messageContent.setHeaders({ '': '' });

let textFormat: TextFormat = 'text/html';
textFormat = 'text/plain';

const mailLocation: MailLocation = { addr: '' };
mailLocation.name = '';

const recipientType: RecipientType = 'bcc';

const recipientOptions: RecipientOptions = {};
recipientOptions.type = recipientType;

const mimeMessage = new MimeMessage();

// $ExpectType MIMEMessageContent[]
mimeMessage.asAttachments();

// $ExpectType string
mimeMessage.asEncoded();

// $ExpectType string
mimeMessage.asRaw();

// $ExpectType string | undefined
mimeMessage.getHeader('');

// $ExpectType MIMEMessageContent
mimeMessage.getMessageByType('');

// $ExpectType Mailbox[]
mimeMessage.getRecipients();
mimeMessage.getRecipients({ type: recipientType });

// $ExpectType Mailbox
mimeMessage.getSender();

// $ExpectType string
mimeMessage.getSubject();

// $ExpectType MIMEMessageContent
mimeMessage.setAttachment('', textFormat, '');

// $ExpectType Mailbox[]
mimeMessage.setBcc('');
mimeMessage.setBcc(['']);
mimeMessage.setBcc(mailLocation);
mimeMessage.setBcc([mailLocation]);

// $ExpectType Mailbox[]
mimeMessage.setCc('');
mimeMessage.setCc(['']);
mimeMessage.setCc(mailLocation);
mimeMessage.setCc([mailLocation]);

// $ExpectType string
mimeMessage.setHeader('', '');

// $ExpectType MIMEMessageContent
mimeMessage.setMessage(textFormat, '');

// $ExpectType Mailbox[]
mimeMessage.setRecipient(mailLocation);
mimeMessage.setRecipient(mailLocation, recipientOptions);

// $ExpectType Mailbox
mimeMessage.setSender(mailLocation);
mimeMessage.setSender([mailLocation]);

// $ExpectType void
mimeMessage.setSubject('');

// $ExpectType Mailbox[]
mimeMessage.setTo('');
mimeMessage.setTo(['']);
mimeMessage.setTo(mailLocation);
mimeMessage.setTo([mailLocation]);
