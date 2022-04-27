import HelloSign from 'hellosign-embedded';

// init - without params
new HelloSign();

// init - with params
const client = new HelloSign({ clientId: 'init123' });

// open - only url
client.open('http://example.org');

// open - with options
client.open('http://example.org', {
    allowCancel: true,
    container: document.getElementById('#hellosign-container'),
    debug: true,
    hideHeader: true,
    redirectTo: 'https://github.com/DefinitelyTyped/DefinitelyTyped',
    locale: 'en_US',
    skipDomainVerification: true,
    whiteLabeling: {
        page_background_color: '#f7f8f9',
    },
});

// close
client.close();

// on
// event as string
client.on('error', data => {
    console.log(data.code);
    console.log(data.signatureId);
});
// event as enum
client.on(HelloSign.events.DECLINE, data => {
    console.log(data.reason);
});

// once
// event as string
client.once('ready', data => {
    console.log(data.signatureId);
});
// event as enum
client.once(HelloSign.events.REASSIGN, data => {
    console.log(data.name);
    console.log(data.email);
});

// off
// only name as string
client.off('message');
// only name as enum
client.off(HelloSign.events.CLOSE);
// name and cb as enum
const cb = () => {};
client.off(HelloSign.events.CLOSE, cb);

client.off('cancel');

// getters
client.isOpen;
client.isReady;
client.element;
