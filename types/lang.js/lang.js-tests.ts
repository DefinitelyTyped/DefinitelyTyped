import * as Lang from 'lang.js';

const messages: Lang.Messages = {
    en: {
        'test-key': 'test',
    }
};

const lang = new Lang({
    locale: 'en',
    fallback: 'en',
    messages
});

lang.setMessages(messages);

lang.setLocale('en');
lang.getLocale();

lang.setFallback('en');
lang.getFallback();

lang.has('test-key');
lang.has('test-key', 'en');

lang.get('test-key');
lang.get('test-key', {
    param: 'value',
});
lang.get('test-key', {
    param: 'value',
}, 'en');

lang.trans('test-key');
lang.trans('test-key', {
    param: 'value',
});

lang.choice('test.key', 2);
lang.choice('test.key', 2, {
    param: 'value',
});
lang.choice('test.key', 2, {
    param: 'value',
}, 'en');

lang.transChoice('test.key', 2);
lang.transChoice('test.key', 2, {
    param: 'value',
});
