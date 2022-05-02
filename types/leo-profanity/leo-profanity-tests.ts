import filter = require('leo-profanity');

const list = filter.list();
filter.add('Test');
filter.remove('Test');

filter.add(['Two', 'words']);
filter.remove(['Two', 'words']);

const check = filter.check('b00bs');
const clean = filter.clean('Hello World! b00bs');
const cleanWithKey = filter.clean('Hello World! b00bs', '-');

filter.clearList();
filter.reset();

filter.loadDictionary('fr');
