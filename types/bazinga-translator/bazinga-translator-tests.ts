Translator.fallback = 'en';
Translator.defaultDomain = 'messages';

Translator.add("test", "it work", "frontend", "en");

Translator.trans('key', {}, 'frontend');
Translator.trans('key', {"foo": "bar"}, 'DOMAIN_NAME');

Translator.transChoice('key', 1, {}, 'frontend');
Translator.transChoice('key', 123, {"foo": "bar"}, 'DOMAIN_NAME');