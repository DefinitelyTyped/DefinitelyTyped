import * as strman from 'strman';

strman.append('hello', 'world', '!'); // $ExpectType string
strman.appendArray('hello', ['world', '!']); // $ExpectType string
strman.at('hello', 1); // $ExpectType string
strman.base64decode('c3RybWFu'); // $ExpectType string
strman.base64encode('value'); // $ExpectType string
strman.between('[abc] [def]', '[', ']'); // $ExpectType string[]
strman.binDecode('value'); // $ExpectType string
strman.binEncode('value'); // $ExpectType string
strman.chars('value'); // $ExpectType string[]
strman.collapseWhitespace('value'); // $ExpectType string
strman.compare('stringA', 'stringB'); // $ExpectType number
strman.contains('hello', 'll', false); // $ExpectType boolean
strman.containsAll('hello', ['he', 'lo'], true); // $ExpectType boolean
strman.containsAny('hello', ['he', 'lo'], true); // $ExpectType boolean
strman.countSubstr('hello fella', 'll', false, true); // $ExpectType number
strman.decDecode('001150011600114001090009700110'); // $ExpectType string
strman.decEncode('value'); // $ExpectType string
strman.endsWith('hello', 'lo'); // $ExpectType boolean
strman.ensureLeft('lo world', 'hello'); // $ExpectType string
strman.ensureRight('hello wo', 'world'); // $ExpectType string
strman.equal('hello', 'hello'); // $ExpectType boolean
strman.first('hello world', 2); // $ExpectType string
strman.format('%{0}% %{1}%!', 'hello', 'world'); // $ExpectType string
strman.hexDecode('007300740072006d0061006e'); // $ExpectType string
strman.hexEncode('value'); // $ExpectType string
strman.htmlDecode('&lt;div&gt;'); // $ExpectType string
strman.htmlEncode('<div>'); // $ExpectType string
strman.inequal('stringA', 'stringB'); // $ExpectType boolean
strman.insert('helo', 'l', 2); // $ExpectType string
strman.isLowerCase('value'); // $ExpectType boolean
strman.isString('value'); // $ExpectType boolean
strman.isString(123); // $ExpectType boolean
strman.isUpperCase('VALUE'); // $ExpectType boolean
strman.last('hello', 2); // $ExpectType string
strman.lastIndexOf('hello', 'l'); // $ExpectType string
strman.leftPad('hello', 10, '-'); // $ExpectType string
strman.leftTrim('   hello'); // $ExpectType string
strman.prepend('world', 'hel', 'lo', ' '); // $ExpectType string
strman.prependArray('world', ['hel', 'lo', ' ']); // $ExpectType string
strman.removeEmptyStrings(['hello', null, 'world', undefined, '']); // $ExpectType string[]
strman.removeLeft('hhello', 'h'); // $ExpectType string
strman.removeNonWords('__hello../'); // $ExpectType string
strman.removeRight('hello worldd', 'd'); // $ExpectType string
strman.removeSpaces('hello   world'); // $ExpectType string
strman.repeat('hello', 2); // $ExpectType string
strman.replace('hello world', 'world', 'ts'); // $ExpectType string
strman.reverse('hello'); // $ExpectType string
strman.rightPad('hello', 15, '-'); // $ExpectType string
strman.rightTrim('hhello', 'h'); // $ExpectType string
strman.safeTruncate('hello world friend!', 8, '...'); // $ExpectType string
strman.shuffle('hello'); // $ExpectType string
strman.slice('hello', 2, 2); // $ExpectType string
strman.slugify('héllö'); // $ExpectType string
strman.split('hello world', ' '); // $ExpectType string[]
strman.startsWith('hello', 'he'); // $ExpectType boolean
strman.substr('hello', 2, 2); // $ExpectType string
strman.surround('hello', '¡', '!'); // $ExpectType string
strman.toCamelCase('hello world'); // $ExpectType string
strman.toDecamelize('hello world'); // $ExpectType string
strman.toKebabCase('hello world'); // $ExpectType string
strman.toLowerCase('hello world'); // $ExpectType string
strman.toSnakeCase('hello world'); // $ExpectType string
strman.toStudlyCaps('hello world'); // $ExpectType string
strman.toUpperCase('hello world'); // $ExpectType string
strman.transliterate('value'); // $ExpectType string
strman.trim('  hello  '); // $ExpectType string
strman.truncate('hello world', 8, '...'); // $ExpectType string
strman.urlDecode('https://github.com/dleitee/strman/&name=%C3%A1%C3%A9%C3%AD%C3%B3%C3%BA'); // $ExpectType string
strman.urlEncode('https://github.com/dleitee/strman/&name=áéíóú'); // $ExpectType string
