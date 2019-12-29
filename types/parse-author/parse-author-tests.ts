import * as parse from 'parse-author';

const author = parse('Jon Schlinkert <jon.schlinkert@sellside.com> (https://github.com/jonschlinkert)');
author.name === 'Jon Schlinkert';
author.email === 'jon.schlinkert@sellside.com';
author.url === 'https://github.com/jonschlinkert';
