import { HelloSign } from 'hellosign-embedded';

HelloSign.init('abc123');

// some options
HelloSign.open({
    url: 'http://example.org',
    messageListener: (e: HelloSign.MessageEvent) => {
        if (e.event === HelloSign.EVENT_SIGNED) {
            console.log('signed');
        }
    },
    uxVersion: 2
});

// all options
HelloSign.open({
    url: 'http://example.org',
    redirectUrl: 'https://github.com/DefinitelyTyped/DefinitelyTyped',
    allowCancel: true,
    messageListener: (e: HelloSign.MessageEvent) => {
        if (e.event === HelloSign.EVENT_SIGNED) {
            console.log('signed');
        }
    },
    userCulture: HelloSign.CULTURES.EN_US,
    debug: true,
    skipDomainVerification: true,
    container: document.getElementById('#hellosign-container'),
    height: 1326,
    hideHeader: true,
    uxVersion: 2,
    requester: 'hellosign@example.org',
    whiteLabelingOptions: {
        "page_background_color": "#f7f8f9"
    }
});

HelloSign.close();
