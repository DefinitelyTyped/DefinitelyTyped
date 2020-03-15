import randtoken = require('rand-token');

randtoken.generate(16);

randtoken.uid(16);

randtoken.suid(16);

const generator = randtoken.generator({
    source: 'default',
    chars: 'a',
});
generator.generate(16);
