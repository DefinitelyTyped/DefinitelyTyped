Translator.fallback = 'en';
Translator.defaultDomain = 'messages';

Translator.add('test', "it work's", 'frontend', 'en');
Translator.add('test', 'message with default domain and local');

Translator.trans('key', {}, 'frontend');
Translator.trans('key', {"foo": "bar"}, 'DOMAIN_NAME');
Translator.trans('key');

Translator.transChoice('key', 1, {}, 'frontend');
Translator.transChoice('key', 123, { foo: 'bar' }, 'DOMAIN_NAME');
