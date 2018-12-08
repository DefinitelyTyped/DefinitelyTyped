import slugify = require('@sindresorhus/slugify');

// $ExpectType string
slugify('I ♥ Dogs');
slugify('BAR and baz', { separator: '_' });
slugify('Déjà Vu!', { lowercase: false });
slugify('fooBar', { decamelize: false });
slugify('I ♥ 🦄 & 🐶', { customReplacements: [['🐶', 'dog']] });
