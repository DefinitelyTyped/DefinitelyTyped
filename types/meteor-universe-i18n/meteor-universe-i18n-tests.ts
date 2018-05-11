import { i18n, Translator } from 'meteor/universe:i18n';

/**
 * All code below was copied from the examples at https://github.com/vazco/meteor-universe-i18n
 * When necessary, code was added to make the examples work (e.g. declaring a variable
 * that was assumed to have been declared earlier);
 */

let translator: Translator;
translator = i18n.createTranslator('test', {
    _locale: 'de-CH',
    _purify: true,
});
translator = i18n.createTranslator('test');

i18n.createComponent();
i18n.createComponent(translator);
i18n.createComponent(translator, 'de-CH');

i18n.addTranslation('de-CH', 'test.foo', 'bar');
i18n.addTranslation('de-CH', 'test', 'foo', 'bar');
i18n.addTranslation('en-US', 'Common', 'no', 'No');
i18n.addTranslation('en-US', 'Common.ok', 'Ok');

i18n.addTranslations('en-US', {
    Common: {
        hello: 'Hello {$name} {$0}!'
    }
});

i18n.addTranslations('en-US', 'Common', {
    hello: 'Hello {$name} {$0}!'
});
i18n.__('foo');
i18n.__('foo', { _locale: 'de-CH', _namespace: 'test' });
i18n.__('test', 'foo', { _locale: 'de-CH' });
i18n.__('hello', { name: 'Ania' }); // output: Hello Ania!
i18n.__('lengthOfArr', { length: ['a', 'b', 'c'].length }); // output: length 3
i18n.__('items', ['a', 'b', 'c']); // output: The first item is a and the last one is c!
i18n.getTranslations('test', 'de-CH');

i18n.setOptions({
    // default locale
    defaultLocale: 'en-US',

    // opens string
    open: '{$',

    // closes string
    close: '}',

    // cleanups untrust/unknown tags, to secure your application against XSS attacks.
    // at browser side, default policy is to sanitize strings as a PCDATA
    purify: () => { }, // On server side as a default option is that nothing is purifying (but you can provide function for that);

    // decides whether to show when there's no translation in the current and default language
    hideMissing: false,

    // url to the host with translations (default: Meteor.absoluteUrl());
    // useful when you want to load translations from a different host
    hostUrl: 'http://current.host.url/',

    // (on the server side only) gives you the possibility to add/change response headers
    translationsHeaders: { 'Cache-Control': 'max-age=2628000' },

    // synchronizes server connection with locale on client. (method invoked by client will be with client side locale);
    sameLocaleOnServerConnection: true
});

i18n.parseNumber('7013217.715'); // 7,013,217.715
i18n.parseNumber('16217 and 17217,715'); // 16,217 and 17,217.715
i18n.parseNumber('7013217.715', 'ru-RU'); // 7 013 217,715

i18n.setLocale('de-CH').then(() => {
    console.log('already is!');
});

i18n.setLocaleOnConnection('de-CH');
i18n.setLocaleOnConnection('de-CH', 1);

i18n.getLocale();

i18n.getLanguages(); // ['en', 'de']
i18n.getLanguages('name'); // ['English', 'German']

i18n.getLanguageName();
i18n.getLanguageName('de-CH');

i18n.getLanguageNativeName();
i18n.getLanguageNativeName('de-CH');

i18n.getCurrencySymbol();
i18n.getCurrencySymbol('en-US'); // = $
i18n.getCurrencySymbol('USD'); // = $
i18n.getCurrencyCodes();
i18n.getCurrencyCodes('en-US'); // = ["USD", "USN", "USS"]

i18n.isRTL();
i18n.isRTL('en-US'); // = $

i18n.getAllKeysForLocale();
i18n.getAllKeysForLocale('de-CH');
i18n.getAllKeysForLocale('de-CH', true);

i18n.onChangeLocale((newLocale: string) => {
    console.log(newLocale);
});
