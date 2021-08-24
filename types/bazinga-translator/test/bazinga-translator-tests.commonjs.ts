import Translator = require('bazinga-translator');

Translator.fallback = 'en';
Translator.defaultDomain = 'messages';

Translator.add('test key', "it work's", 'frontend', 'en');
Translator.add('test key', 'message with default domain and local');

Translator.trans('test key', {}, 'frontend');
Translator.trans('test key', { foo: 'bar' }, 'DOMAIN_NAME');
Translator.trans('test key');

Translator.transChoice('test key', 1, {}, 'frontend');
Translator.transChoice('test key', 123, { foo: 'bar' }, 'DOMAIN_NAME');
