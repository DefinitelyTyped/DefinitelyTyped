

import pluralize = require('pluralize');

pluralize('test'); //=> "tests"
pluralize('test', 1); //=> "test"
pluralize('test', 5); //=> "tests"
pluralize('test', 1, true); //=> "1 test"
pluralize('test', 5, true); //=> "5 tests"

pluralize.plural('regex'); //=> "regexes"
pluralize.addPluralRule(/gex$/i, 'gexii');
pluralize.plural('regex'); //=> "regexii"

pluralize.singular('singles'); //=> "single"
pluralize.addSingularRule(/singles$/i, 'singular');
pluralize.singular('singles'); //=> "singular"

pluralize.plural('irregular'); //=> "irregulars"
pluralize.addIrregularRule('irregular', 'regular');
pluralize.plural('irregular'); //=> "regular"

pluralize.plural('paper'); //=> "papers"
pluralize.addUncountableRule('paper');
pluralize.plural('paper'); //=> "paper"

pluralize.isPlural('test') //=> false
pluralize.isSingular('test') //=> true

pluralize.isPlural('tests') //=> true
pluralize.isSingular('tests') //=> false
