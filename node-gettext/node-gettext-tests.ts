// with  tsc v 2.7 & esModuleInterop & allowSyntheticDefaultImports enabled in tsconfig.json
import Gettext from 'node-gettext';
// or without
// import Gettext = require('node-getttext');

const translations = {};
const gt = new Gettext({ debug: true });
const msgid = 'Get translation';
const msgidPlural = 'Get translations';
const domain = 'domain';
const msgctxt = 'context';
const count = 2;

gt.addTranslations('en-US', 'messages', translations);
gt.setTextDomain(domain);
gt.textdomain(domain);
gt.setLocale('en-US');
gt.gettext(msgid);
gt.dgettext('', msgid);
gt.dngettext(domain, msgid, msgidPlural, count);
gt.dnpgettext(domain, msgctxt, msgid, msgidPlural, count);
gt.dpgettext(domain, msgctxt, msgid);
gt.getComment(domain, msgctxt, msgid);
gt.ngettext(msgid, msgidPlural, count);
gt.npgettext(msgctxt, msgid, msgidPlural, count);
gt.pgettext(msgctxt, msgid);
Gettext.getLanguageCode('en-US');
gt.warn('warning');
const errorListener = (error: string) => {
    // do something;
};
gt.on('error', errorListener);
gt.emit('error', 'Error occurred');
gt.off('error', errorListener);
