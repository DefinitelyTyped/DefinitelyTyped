import * as glossy from 'glossy';

const rawMessage = '<166>1 2021-10-15T16:59:18.00-04:00 localhost sudo 123 - - Nice, Neat, New, Oh Wow';

const parser = glossy.Parse;

let parsedMessage = parser.parse(rawMessage); // $ExpectType void | SyslogMessage
parsedMessage = parser.parse(Buffer.from(rawMessage, 'utf8')); // $ExpectType void | SyslogMessage

parser.parse(rawMessage, parsedMessage => {}); // $ExpectType void | SyslogMessage
parser.parse(Buffer.from(rawMessage, 'utf8'), parsedMessage => {}); // $ExpectType void | SyslogMessage

const messageOptions = {
    facility: 'local4',
    severity: 'error',
    prival: 191,
    host: 'localhost',
    appName: 'starman',
    pid: '123',
    date: new Date(Date()),
    time: new Date(Date()),
    msgID: 'ID48',
    message: 'ACHTUNG!',
    structuredData: {
        'plack@host': {
            status: 'broken',
            hasTried: 'not really',
        },
    },
};

const bsdProducer = new glossy.Produce('BSD');

let compiledMessage = bsdProducer.produce(messageOptions); // $ExpectType string | void

const producerWithOptions = new glossy.Produce({
    facility: 'ftp',
    severity: 'error',
    host: '::1',
    appName: 'sudo',
    pid: 42,
    msgID: 'ID47',
    type: 'BSD',
});

compiledMessage = producerWithOptions.alert(messageOptions); // $ExpectType string | void
compiledMessage = producerWithOptions.crit(messageOptions); // $ExpectType string | void
compiledMessage = producerWithOptions.debug(messageOptions); // $ExpectType string | void
compiledMessage = producerWithOptions.emergency(messageOptions); // $ExpectType string | void
compiledMessage = producerWithOptions.info(messageOptions); // $ExpectType string | void
compiledMessage = producerWithOptions.notice(messageOptions); // $ExpectType string | void
compiledMessage = producerWithOptions.produce(messageOptions); // $ExpectType string | void
compiledMessage = producerWithOptions.warn(messageOptions); // $ExpectType string | void

producerWithOptions.alert(messageOptions, compiledMessage => {}); // $ExpectType string | void
producerWithOptions.crit(messageOptions, compiledMessage => {}); // $ExpectType string | void
producerWithOptions.debug(messageOptions, compiledMessage => {}); // $ExpectType string | void
producerWithOptions.emergency(messageOptions, compiledMessage => {}); // $ExpectType string | void
producerWithOptions.info(messageOptions, compiledMessage => {}); // $ExpectType string | void
producerWithOptions.notice(messageOptions, compiledMessage => {}); // $ExpectType string | void
producerWithOptions.produce(messageOptions, compiledMessage => {}); // $ExpectType string | void
producerWithOptions.warn(messageOptions, compiledMessage => {}); // $ExpectType string | void
