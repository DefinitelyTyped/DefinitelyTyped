

import S = require('string');

S('hello').s //"hello"
S(['a,b']).s //"a,b"
S({hi: 'jp'}).s //"[object Object]""

S('<a>foo</a>').between('<a>', '</a>').s // => 'foo'
S('<a>foo</a></a>').between('<a>', '</a>').s // => 'foo'
S('<a><a>foo</a></a>').between('<a>', '</a>').s // => '<a>foo'
S('<a>foo').between('<a>', '</a>').s // => ''
S('Some strings } are very {weird}, dont you think?').between('{', '}').s // => 'weird'
S('This is a test string').between('test').s // => ' string'
S('This is a test string').between('', 'test').s // => 'This is a '

S('data_rate').camelize().s; //'dataRate'
S('background-color').camelize().s; //'backgroundColor'
S('-moz-something').camelize().s; //'MozSomething'
S('_car_speed_').camelize().s; //'CarSpeed'
S('yes_we_can').camelize().s; //'yesWeCan'

S('jon').capitalize().s; //'Jon'
S('JP').capitalize().s; //'Jp'

S('foobar').chompLeft('foo').s; //'bar'
S('foobar').chompLeft('bar').s; //'foobar'

S('foobar').chompRight('bar').s; //'foo'
S('foobar').chompRight('foo').s; //'foobar'

var str = S('  String   \t libraries are   \n\n\t fun\n!  ').collapseWhitespace().s; //'String libraries are fun !'

S('JavaScript is one of the best languages!').contains('one'); //true

S('JP likes to program. JP does not play in the NBA.').count("JP")// 2
S('Does not exist.').count("Flying Spaghetti Monster") //0
S('Does not exist.').count("Bigfoot") //0
S('JavaScript is fun, therefore Node.js is fun').count("fun") //2
S('funfunfun').count("fun") //3

S('dataRate').dasherize().s; //'data-rate'
S('CarSpeed').dasherize().s; //'-car-speed'
S('yesWeCan').dasherize().s; //'yes-we-can'
S('backgroundColor').dasherize().s; //'background-color'

S('Ken Thompson &amp; Dennis Ritchie').decodeHTMLEntities().s; //'Ken Thompson & Dennis Ritchie'
S('3 &lt; 4').decodeHTMLEntities().s; //'3 < 4'

S("hello jon").endsWith('jon'); //true

S('<div>hi</div>').escapeHTML().s; //&lt;div&gt;hi&lt;/div&gt;

S('subdir').ensureLeft('/').s; //'/subdir'
S('/subdir').ensureLeft('/').s; //'/subdir'

S('dir').ensureRight('/').s; //'dir/'
S('dir/').ensureRight('/').s; //'dir/'

S('the_humanize_string_method').humanize().s  //'The humanize string method'
S('ThehumanizeStringMethod').humanize().s //'Thehumanize string method'
S('the humanize string method').humanize().s  //'The humanize string method'
S('the humanize_id string method_id').humanize().s //'The humanize id string method'
S('the  humanize string method  ').humanize().s //'The humanize string method'
S('   capitalize dash-CamelCase_underscore trim  ').humanize().s //'Capitalize dash camel case underscore trim'

S('JavaScript is one of the best languages!').include('one'); //true

S("afaf").isAlpha(); //true
S('fdafaf3').isAlpha(); //false
S('dfdf--dfd').isAlpha(); //false

S("afaf35353afaf").isAlphaNumeric(); //true
S("FFFF99fff").isAlphaNumeric(); //true
S("99").isAlphaNumeric(); //true
S("afff").isAlphaNumeric(); //true
S("Infinity").isAlphaNumeric(); //true
S("-Infinity").isAlphaNumeric(); //false
S("-33").isAlphaNumeric(); //false
S("aaff..").isAlphaNumeric(); //false

S(' ').isEmpty(); //true
S('\t\t\t    ').isEmpty(); //true
S('\n\n ').isEmpty(); //true
S('helo').isEmpty(); //false
S(null).isEmpty(); //true
S(undefined).isEmpty(); //true

S('a').isLower(); //true
S('z').isLower(); //true
S('B').isLower(); //false
S('hijp').isLower(); //true
S('hi jp').isLower(); //false
S('HelLO').isLower(); //false

S("3").isNumeric(); //true
S("34.22").isNumeric(); //false
S("-22.33").isNumeric(); //false
S("NaN").isNumeric(); //false
S("Infinity").isNumeric(); //false
S("-Infinity").isNumeric(); //false
S("JP").isNumeric(); //false
S("-5").isNumeric(); //false
S("000992424242").isNumeric(); //true

S('a').isUpper() //false
S('z').isUpper()  //false
S('B').isUpper() //true
S('HIJP').isUpper() //true
S('HI JP').isUpper() //false
S('HelLO').isUpper() //true
S('crème brûlée').latinise().s // 'creme brulee'

S('My name is JP').left(2).s; //'My'
S('Hi').left(0).s; //''
S('My name is JP').left(-2).s; //'JP', same as right(2)

var stuff = "My name is JP\nJavaScript is my fav language\r\nWhat is your fav language?"
var lines = S(stuff).lines()
console.dir(lines) 
/*
[ 'My name is JP',
  'JavaScript is my fav language',
  'What is your fav language?' ]
*/

S('hello').pad(5).s //'hello'
S('hello').pad(10).s //'   hello  '
S('hey').pad(7).s //'  hey  '
S('hey').pad(5).s //' hey '
S('hey').pad(4).s //' hey'
S('hey').pad(7, '-').s//'--hey--'

S('hello').padLeft(5).s //'hello'
S('hello').padLeft(10).s //'     hello'
S('hello').padLeft(7).s //'  hello'
S('hello').padLeft(6).s //' hello'
S('hello').padLeft(10, '.').s //'.....hello'

S('hello').padRight(5).s //'hello'
S('hello').padRight(10).s //'hello     '
S('hello').padRight(7).s //'hello  '
S('hello').padRight(6).s //'hello '
S('hello').padRight(10, '.').s //'hello.....'

S("'a','b','c'").parseCSV(',', "'") //['a', 'b', 'c'])
S('"a","b","c"').parseCSV() // ['a', 'b', 'c'])
S('a,b,c').parseCSV(',', null)  //['a', 'b', 'c'])
S("'a,','b','c'").parseCSV(',', "'") //['a,', 'b', 'c'])
S('"a","b",4,"c"').parseCSV(',', null) //['"a"', '"b"', '4', '"c"'])
S('"a","b","4","c"').parseCSV() //['a', 'b', '4', 'c'])
S('"a","b",       "4","c"').parseCSV() //['a', 'b', '4', 'c'])
S('"a","b",       4,"c"').parseCSV(",", null) //[ '"a"', '"b"', '       4', '"c"' ])
S('"a","b\\"","d","c"').parseCSV() //['a', 'b"', 'd', 'c'])
S('"a","b\\"","d","c"').parseCSV() //['a', 'b"', 'd', 'c'])
S('"a\na","b","c"\n"a", """b\nb", "a"').parseCSV(',', '"', '"', '\n'); // [ [ 'a\na', 'b', 'c' ], [ 'a', '"b\nb', 'a' ] ]

S(' ').repeat(5).s; //'     '
S('*').repeat(3).s; //'***'

S(' does IT work? ').replaceAll(' ', '_').s; //'_does_IT_work?_'
S('Yes it does!').replaceAll(' ', '').s; //'Yesitdoes!'

S(' 1 2 3--__--4 5 6-7__8__9--0').strip(' ', '_', '-').s; //'1234567890'
S('can words also be stripped out?').strip('words', 'also', 'be').s; //'can    stripped out?'

S('  hello ').stripLeft().s; //'hello '
S('abcz').stripLeft('a-z').s; //'bcz'
S('www.example.com').stripLeft('w.').s; //'example.com'

S('  hello ').stripRight().s; //'  hello'
S('abcz').stripRight('a-z').s; //'abc'

S('I AM CRAZY').right(2).s; //'ZY'
S('Does it work?  ').right(4).s; //'k?  '
S('Hi').right(0).s; //''
S('My name is JP').right(-2).s; //'My', same as left(2)

S('my name is JP.').capitalize().s; //My name is JP.
var a = "Hello " + S('joe!'); //a = "Hello joe!"
S("Hello").toString() === S("Hello").s; //true

var myString = S('War');
myString.setValue('Peace').s; // 'Peace'

S('Global Thermonuclear Warfare').slugify().s // 'global-thermonuclear-warfare'
S('Crème brûlée').slugify().s // 'creme-brulee'

S("JP is a software engineer").startsWith("JP"); //true
S('wants to change the world').startsWith("politicians"); //false

S('My, st[ring] *full* of %punct)').stripPunctuation().s; //My string full of punct

S('<p>just <b>some</b> text</p>').stripTags().s //'just some text'
S('<p>just <b>some</b> text</p>').stripTags('p').s //'just <b>some</b> text'

var str = "Hello {{name}}! How are you doing during the year of {{date-year}}?"
var values = {name: 'JP', 'date-year': 2013}
console.log(S(str).template(values).s) //'Hello JP! How are you doing during the year of 2013?'

str = "Hello #{name}! How are you doing during the year of #{date-year}?"
console.log(S(str).template(values, '#{', '}').s) //'Hello JP! How are you doing during the year of 2013?'

S.TMPL_OPEN = '{'
S.TMPL_CLOSE = '}'
str = "Hello {name}! How are you doing during the year of {date-year}?"
console.log(S(str).template(values).s) //'Hello JP! How are you doing during the year of 2013?'

S(' ').times(5).s //'     '
S('*').times(3).s //'***'

S('Like ice in the sunshine').titleCase().s // 'Like Ice In The Sunshine'
S('data_rate').titleCase().s // 'Data_Rate'
S('background-color').titleCase().s // 'Background-Color'

S('true').toBoolean() //true
S('false').toBoolean() //false
S('hello').toBoolean() //false
S(true).toBoolean() //true
S('on').toBoolean() //true
S('yes').toBoolean() //true
S('TRUE').toBoolean() //true
S('TrUe').toBoolean() //true
S('YES').toBoolean() //true
S('ON').toBoolean() //true
S('').toBoolean() //false
S(undefined).toBoolean() //false
S('undefined').toBoolean() //false
S(null).toBoolean() //false
S(false).toBoolean() //false
S({}).toBoolean() //false
S(1).toBoolean() //true
S(-1).toBoolean() //false
S(0).toBoolean() //false

S(['a', 'b', 'c']).toCSV().s //'"a","b","c"'
S(['a', 'b', 'c']).toCSV(':').s //'"a":"b":"c"'
S(['a', 'b', 'c']).toCSV(':', null).s //'a:b:c')
S(['a', 'b', 'c']).toCSV('*', "'").s //"'a'*'b'*'c'"
S(['a"', 'b', 4, 'c']).toCSV({delimiter: ',', qualifier: '"', escape: '\\',  encloseNumbers: false}).s //'"a\\"","b",4,"c"'
S({firstName: 'JP', lastName: 'Richardson'}).toCSV({keys: true}).s //'"firstName","lastName"'
S({firstName: 'JP', lastName: 'Richardson'}).toCSV().s //'"JP","Richardson"'

S('5').toFloat() // 5
S('5.3').toFloat()  //5.3
S(5.3).toFloat()  //5.3
S('-10').toFloat()  //-10
S('55.3 adfafaf').toFloat() // 55.3
S('afff 44').toFloat()  //NaN
S(3.45522222333232).toFloat(2) // 3.46

S('5').toInt(); //5
S('5.3').toInt(); //5;
S(5.3).toInt(); //5;
S('-10').toInt(); //-10
S('55 adfafaf').toInt(); //55
S('afff 44').toInt(); //NaN
S('0xff').toInt() //255

S('my name is JP.').capitalize().toString(); //My name is JP.
var a = "Hello " + S('joe!'); //a = "Hello joe!"
S("Hello").toString() === S("Hello").s; //true

S('hello ').trim().s; //'hello'
S(' hello ').trim().s; //'hello'
S('\nhello').trim().s; //'hello'
S('\nhello\r\n').trim().s; //'hello'
S('\thello\t').trim().s; //'hello'

S('  How are you?').trimLeft().s; //'How are you?';

S('How are you?   ').trimRight().s; //'How are you?';

S('this is some long text').truncate(3).s //'...'
S('this is some long text').truncate(7).s //'this is...'
S('this is some long text').truncate(11).s //'this is...'
S('this is some long text').truncate(12).s //'this is some...'
S('this is some long text').truncate(11).s //'this is...'
S('this is some long text').truncate(14, ' read more').s //'this is some read more'

S('dataRate').underscore().s; //'data_rate'
S('CarSpeed').underscore().s; //'_car_speed'
S('yesWeCan').underscore().s; //'yes_we_can'

S('&lt;div&gt;hi&lt;/div&gt;').unescapeHTML().s; //<div>hi</div>

S('Venkat').wrapHTML().s //<span>Venkat</span>
S('Venkat').wrapHTML('div').s //<div>Venkat</div>
S('Venkat').wrapHTML('div', {
    "class": "left bullet"
}).s //<div class="left bullet">Venkat</div>
S('Venkat').wrapHTML('div', {
    "id": "content",
    "class": "left bullet"
}).s // <div id="content" class="left bullet">Venkat</div>

S.VERSION; //1.0.0