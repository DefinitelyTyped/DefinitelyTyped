
import * as Inflector from "inflected";

Inflector.pluralize("Category");
Inflector.singularize("Categories");
Inflector.camelize("nerd_bar", false);
Inflector.underscore('FooBar')      // => 'foo_bar'
//Inflector.humanize('employee_salary')                   // => 'Employee salary'
//Inflector.humanize('author_id')                         // => 'Author'
Inflector.humanize('author_id', { capitalize: false })  // => 'author'

Inflector.titleize('man from the boondocks')   // => 'Man From The Boondocks'
Inflector.titleize('x-men: the last stand')    // => 'X Men: The Last Stand'
Inflector.titleize('TheManWithoutAPast')       // => 'The Man Without A Past'
Inflector.titleize('raiders_of_the_lost_ark')  // => 'Raiders Of The Lost Ark'

Inflector.tableize('RawScaledScorer')  // => 'raw_scaled_scorers'
Inflector.tableize('egg_and_ham')      // => 'egg_and_hams'
Inflector.tableize('fancyCategory')    // => 'fancy_categories'

Inflector.classify('egg_and_hams')  // => 'EggAndHam'
Inflector.classify('posts')         // => 'Post'

Inflector.dasherize('puni_puni')  // => 'puni-puni'

Inflector.foreignKey('Message')         // => 'message_id'
Inflector.foreignKey('Message', false)  // => 'messageid'

Inflector.ordinal(1)      // => 'st'
Inflector.ordinal(2)      // => 'nd'
Inflector.ordinal(1002)   // => 'nd'
Inflector.ordinal(1003)   // => 'rd'
Inflector.ordinal(-11)    // => 'th'
Inflector.ordinal(-1021)  // => 'st'

Inflector.ordinalize(1)      // => '1st'
Inflector.ordinalize(2)      // => '2nd'
Inflector.ordinalize(1002)   // => '1002nd'
Inflector.ordinalize(1003)   // => '1003rd'
Inflector.ordinalize(-11)    // => '-11th'
Inflector.ordinalize(-1021)  // => '-1021st'

Inflector.transliterate('Ærøskøbing')  // => 'AEroskobing'

Inflector.parameterize('Donald E. Knuth')                      // => 'donald-e-knuth'
Inflector.parameterize('Donald E. Knuth', { separator: '+' })  // => 'donald+e+knuth'

