import { createMimeMessage, MailLocation, MIMEHeader, RecipientOptions, RecipientType, TextFormat } from 'mimetext';

let textFormat: TextFormat = 'text/html';
textFormat = 'text/plain';

const mailLocation: MailLocation = { addr: '' };
mailLocation.name = '';

const recipientType: RecipientType = 'bcc';

const recipientOptions: RecipientOptions = {};
recipientOptions.type = recipientType;

// $ExpectType NodeMIMEMessage
const mimeMessage = createMimeMessage();

// $ExpectType MIMEMessageContent[]
mimeMessage.asAttachments();

// $ExpectType string
mimeMessage.asEncoded();

// $ExpectType string
mimeMessage.asRaw();

// $ExpectType string | undefined
mimeMessage.getHeader('');

// $ExpectType MIMEMessageContent | undefined
mimeMessage.getMessageByType('');

// $ExpectType Mailbox[]
mimeMessage.getRecipients();
mimeMessage.getRecipients({ type: recipientType });

// $ExpectType Mailbox
mimeMessage.getSender();

// $ExpectType string | undefined
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

// $ExpectType string
mimeMessage.setSubject('');

// $ExpectType Mailbox[]
mimeMessage.setTo('');
mimeMessage.setTo(['']);
mimeMessage.setTo(mailLocation);
mimeMessage.setTo([mailLocation]);

// $ExpectType Mailbox
const mailbox = mimeMessage.getSender();

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

const [messageContent] = mimeMessage.asAttachments();

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
