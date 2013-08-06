﻿/// <reference path="sugar.d.ts" />

'schfifty'.add(' five');		// - > schfifty five
'dopamine'.insert('e', 3);		// - > dopeamine
'spelling eror'.insert('r', -3);// - > spelling error

'Welcome, Mr. {name}.'.assign({ name: 'Franklin' });	// - > 'Welcome, Mr. Franklin.'
'You are {1} years old today.'.assign(14);				// - > 'You are 14 years old today.'
'{n} and {r}'.assign({ n: 'Cheech' }, { r: 'Chong' });	// - > 'Cheech and Chong'

'jumpy'.at(0);					// - > 'j'
'jumpy'.at(2);					//- > 'm'
'jumpy'.at(5);					// - > 'j'
'jumpy'.at(5, false);			// - > ''
'jumpy'.at(-1);					// - > 'y'
'lucky charms'.at(2, 4, 6, 8);	// - > ['u', 'k', 'y', c']

'caps_lock'.camelize();					// - > 'CapsLock'
'moz-border-radius'.camelize();			// - > 'MozBorderRadius'
'moz-border-radius'.camelize(false);	// - > 'mozBorderRadius'

'caps_lock'.camelize();					// - > 'CapsLock'
'moz-border-radius'.camelize();			// - > 'MozBorderRadius'
'moz-border-radius'.camelize(false);	// - > 'mozBorderRadius'

'jumpy'.chars();	// - > ['j', 'u', 'm', 'p', 'y']
'jumpy'.chars(function (c) {
	// Called 5 times: "j","u","m","p","y"
});

'jumpy'.codes();	// - > [106, 117, 109, 112, 121]
'jumpy'.codes(function (c) {
	// Called 5 times: 106, 117, 109, 112, 121
});

'too \n much \n space'.compact();	// - > 'too much space'
'enough \n '.compact();				// - > 'enough'

'a_farewell_to_arms'.dasherize();	// - > 'a-farewell-to-arms'
'capsLock'.dasherize();				// - > 'caps-lock'

'aHR0cDovL3R3aXR0ZXIuY29tLw=='.decodeBase64();	// - > 'http://twitter.com/'
'anVzdCBnb3QgZGVjb2RlZA=='.decodeBase64();		// - > 'just got decoded!'

'jumpy'.each();			// - > ['j', 'u', 'm', 'p', 'y']
'jumpy'.each(/[r-z]/);	// - > ['u', 'y']
'jumpy'.each(/[r-z]/, function (m) {
	// Called twice: "u", "y"
});

'gonna get encoded!'.encodeBase64();	// - > 'Z29ubmEgZ2V0IGVuY29kZWQh'
'http://twitter.com/'.encodeBase64();	// - > 'aHR0cDovL3R3aXR0ZXIuY29tLw=='

'jumpy'.endsWith('py');			// - > true
'jumpy'.endsWith(/[q-z]/);		// - > true
'jumpy'.endsWith('MPY');		// - > false
'jumpy'.endsWith('MPY', false);	// - > true

'<p>some text</p>'.escapeHTML();	// - > '&lt;p&gt;some text&lt;/p&gt;'
'one & two'.escapeHTML();			// - > 'one &amp; two'

'really?'.escapeRegExp();		// - > 'really\?'
'yes.'.escapeRegExp();			// - > 'yes\.'
'(not really)'.escapeRegExp();	// - > '\(not really\)'

'http://foo.com/"bar"'.escapeURL();		// - > 'http://foo.com/%22bar%22'
'http://foo.com/"bar"'.escapeURL(true);	// - > 'http%3A%2F%2Ffoo.com%2F%22bar%22'

'lucky charms'.first();		// - > 'l'
'lucky charms'.first(3);	// - > 'luc'

'lucky charms'.from();	// - > 'lucky charms'
'lucky charms'.from(7);	// - > 'harms'

// visual studio is not liking these characters very much.
'??? YAMADA??!'.hankaku();						// - > '??? YAMADA??!'
'??? YAMADA??!'.hankaku('a');					// - > '??? YAMADA??!'
'??? YAMADA??!'.hankaku('alphabet');			// - > '??? YAMADA??!'
'?????! 25???!'.hankaku('katakana', 'numbers');	// - > '?????! 25???!'
'?????! 25???!'.hankaku('k', 'n');				// - > '?????! 25???!'
'?????! 25???!'.hankaku('kn');					// - > '?????! 25???!'
'?????! 25???!'.hankaku('sp');					// - > '?????! 25???!'

'jumpy'.has('py');		// - > true
'broken'.has(/[a-n]/);	// - > true
'broken'.has(/[s-z]/);	// - > false

// visual studio is not liking these characters very much.
'?????'.hasArabic();		// - > true
'?????'.hasCyrillic();		// - > true
'? ?????!'.hasHangul();		// - > true
'??????'.hasKatakana();		// - > true
"l'année".hasLatin();		// - > true

// visual studio is not liking these characters very much.
'????'.hiragana();		// - > '????'
'?????'.hiragana();		// - > '?????'
'????'.hiragana();		// - > '????'
'????'.hiragana(false);	// - > '????'

'employee_salary'.humanize();	// - > 'Employee salary'
'author_id'.humanize();			// - > 'Author'

''.isBlank();		// - > true
'   '.isBlank();	// - > true
'noway'.isBlank();	// - > false

// visual studio is not liking these characters very much.
'?????'.isArabic();		// - > true
'?????'.isCyrillic();	// - > true
'? ?????!'.isHangul();	// - > true
'??????'.isKatakana();	// - > false
"l'année".isLatin();	// - > true

// visual studio is not liking these characters very much.
'????'.katakana();	// - > '????'
'?????'.katakana();	// - > '?????'

'lucky charms'.last();	// - > 's'
'lucky charms'.last(3);	// - > 'rms'

'broken wear\nand\njumpy jump'.lines();	// - > ['broken wear', 'and', 'jumpy jump']
'broken wear\nand\njumpy jump'.lines(function (l) {
	// Called three times: "broken wear", "and", "jumpy jump"
});

'á'.normalize();				// - > 'a'
'Ménage à trois'.normalize();	// - > 'Menage a trois'
'Volkswagen'.normalize();		// - > 'Volkswagen'
'FULLWIDTH'.normalize();		// - > 'FULLWIDTH'

'wasabi'.pad('-');			// - > '-wasabi-'
'wasabi'.pad('-', 2);		// - > '--wasabi--'
'wasabi'.padLeft('-', 2);	// - > '--wasabi'
'wasabi'.padRight('-', 2);	// - > 'wasabi--'

'Once upon a time.\n\nIn the land of oz...'.paragraphs();	// - > ['Once upon a time.', 'In the land of oz...']
'Once upon a time.\n\nIn the land of oz...'.paragraphs(function (p) {
	// Called twice: "Once upon a time.", "In teh land of oz..."
});

'hell, no!'.parameterize();	// - > 'hell-no'

'post'.pluralize();			// - > 'posts'
'octopus'.pluralize();		// - > 'octopi'
'sheep'.pluralize();		// - > 'sheep'
'words'.pluralize();		// - > 'words'
'CamelOctopus'.pluralize();	// - > 'CamelOctopi'

'schfifty five'.remove('f');		// - > 'schity ive'
'schfifty five'.remove(/[a-f]/g);	// - > 'shity iv'

'<p>just <b>some</b> text</p>'.removeTags();	// - > ''
'<p>just <b>some</b> text</p>'.removeTags('b');	// - > '<p>just text</p>'

'jumpy'.repeat(2);	// - > 'jumpyjumpy'
'a'.repeat(5);		// - > 'aaaaa'
'a'.repeat(0);		// - > ''

'jumpy'.reverse();			// - > 'ypmuj'
'lucky charms'.reverse();	// - > 'smrahc ykcul'

'a'.shift(1);	// - > 'b'
'?'.shift(1);	//- > '?'

'posts'.singularize();			// -> 'post'
'octopi'.singularize();			// -> 'octopus'
'sheep'.singularize();			// -> 'sheep'
'word'.singularize();			// -> 'word'
'CamelOctopi'.singularize();	// -> 'CamelOctopus'

'camelCase'.spacify();							// - > 'camel case'
'an-ugly-string'.spacify();						// - > 'an ugly string'
'oh-no_youDid-not'.spacify().capitalize(true);	// - > 'something else'

'hello'.startsWith('hell');			// - > true
'hello'.startsWith(/[a-h]/);		// - > true
'hello'.startsWith('HELL');			// - > false
'hello'.startsWith('HELL', false);	// - > true

'<p>just <b>some</b> text</p>'.stripTags();		// - > 'just some text'
'<p>just <b>some</b> text</p>'.stripTags('p');	// - > 'just <b>some</b> text'

'man from the boondocks'.titleize();	// - > 'Man from the Boondocks'
'x-men: the last stand'.titleize();		// - > 'X Men: The Last Stand'
'TheManWithoutAPast'.titleize();		// - > 'The Man Without a Past'
'raiders_of_the_lost_ark'.titleize();	// - > 'Raiders of the Lost Ark'

'lucky charms'.to();	// - > 'lucky charms'
'lucky charms'.to(7);	// - > 'lucky ch'

'153'.toNumber();		// - > 153
'12,000'.toNumber();	// - > 12000
'10px'.toNumber();		// - > 10
'ff'.toNumber(16);		// - > 255

'   wasabi   '.trim();		// - > 'wasabi'
'   wasabi   '.trimLeft();	// - > 'wasabi   '
'   wasabi   '.trimRight();	// - > '   wasabi'

'just sittin on the dock of the bay'.truncate(20);					// - > 'just sittin on the do...'
'just sittin on the dock of the bay'.truncate(20, false);			// - > 'just sittin on the...'
'just sittin on the dock of the bay'.truncate(20, true, 'middle');	// - > 'just sitt...of the bay'
'just sittin on the dock of the bay'.truncate(20, true, 'left');	// - > '...the dock of the bay'

'a-farewell-to-arms'.underscore();	// - > 'a_farewell_to_arms'
'capsLock'.underscore();			// - > 'caps_lock'

'&lt;p&gt;some text&lt;/p&gt;'.unescapeHTML();	// - > '<p>some text</p>'
'one &amp; two'.unescapeHTML();					// - > 'one & two'

'http%3A%2F%2Ffoo.com%2Fthe%20bar'.unescapeURL();		// - > 'http://foo.com/the bar'
'http%3A%2F%2Ffoo.com%2Fthe%20bar'.unescapeURL(true);	// - > 'http%3A%2F%2Ffoo.com%2Fthe bar'

'broken wear'.words();	// - > ['broken', 'wear']
'broken wear'.words(function (w) {
     // Called twice: "broken", "wear"
});

'??? YAMADA??!'.zenkaku();						// - > '??? YAMADA??!'
'??? YAMADA??!'.zenkaku('a');					// - > '??? YAMADA??!'
'??? YAMADA??!'.zenkaku('alphabet');			// - > '??? YAMADA??!'
'?????! 25???!'.zenkaku('katakana', 'numbers');	// - > '?????! 25???!'
'?????! 25???!'.zenkaku('k', 'n');				// - > '?????! 25???!'
'?????! 25???!'.zenkaku('kn');					// - > '?????! 25???!'
'?????! 25???!'.zenkaku('sp');					// - > '?????! 25???!'

// static
//Number.random(50, 100);	// - > ex.85
//Number.random(50);		// - > ex.27
//Number.random();		// - > ex.0

(1000).abbr();		// - > "1k"
(1000000).abbr();	// - > "1m"
(1280).abbr(1);		// - > "1.3k"

(1000).bytes();					// - > "1kB"
(1000).bytes(2);				// - > "0.98kB"
((10).pow(20)).bytes();			// - > "90,949,470TB"
((10).pow(20)).bytes(0, false);	// - > "87EB"

(1000).bytes();					// - > "1kB"
(1000).bytes(2);				// - > "0.98kB"
((10).pow(20)).bytes();			// - > "90,949,470TB"
((10).pow(20)).bytes(0, false);	// - > "87EB"

(3.241).ceil();		// - > 4
(-3.241).ceil();	// - > -3
(3.241).ceil(2);	// - > 3.25
(3748).ceil(-2);	// - > 3800

(65).chr();	// - > "A"
(75).chr();	// - > "K"

(8).downto(3);	// - > [8, 7, 6, 5, 4, 3]
(8).downto(3, function (n) {
     // This function is called 6 times receiving n as the value.
});
(8).downto(2, null, 2);	// - > [8, 6, 4, 2]

(500).duration();				// - > '500 milliseconds'
(1200).duration();				// - > '1 second'
(75).minutes().duration();		// - > '1 hour'
(75).minutes().duration('es');	// - > '1 hora'

(3.241).floor();	// - > 3
(-3.841).floor();	// - > -4
(3.241).floor(2);	// - > 3.24
(3748).floor(-2);	// - > 3700

(56782).format();				//- > '56,782'
(56782).format(2);				// - > '56,782.00'
(4388.43).format(2, ' ');		// - > '4 388.43'
(4388.43).format(2, '.', ',');	// - > '4.388,43'

(255).hex();	// - > 'ff';
(255).hex(4);	// - > '00ff';
(23654).hex();	// - > '5c66';

(6).isEven();	// - > true
(17).isEven();	// - > false

(420).isInteger();	// - > true
(4.5).isInteger();	// - > false

(6).isMultipleOf(2);	// - > true
(17).isMultipleOf(2);	// - > false
(32).isMultipleOf(4);	// - > true
(34).isMultipleOf(4);	// - > false

(3).isOdd();	// - > true
(18).isOdd();	// - > false

(64).log(2);	// - > 6
(9).log(3);		// - > 2
(5).log();		// - > 1.6094379124341003

(3).pow(3);		// - > 27
(-3).abs();		// - > 3
(1024).sqrt();	// - > 32

(1000).metric();				// - > "1k"
(1000000).metric();				// - > "1,000k"
(1000000).metric(0, false);		// - > "1M"
(1249).metric(2) + 'g';			// - > "1.25kg"
(0.025).metric() + 'm';			// - > "25mm"

(1).ordinalize();	// - > '1st'
(2).ordinalize();	// - > '2nd'
(8).ordinalize();	// - > '8th'

(5).pad(2);			// - > '05'
(-5).pad(4);		// - > '-0005'
(82).pad(3, true);	// - > '+082'

(3.241).round();	// - > 3
(-3.841).round();	// - > -4
(3.241).round(2);	// - > 3.24
(3748).round(-2);	// - > 3800

(8).times(function (i) {
     // This function is called 8 times.
});

(420).toNumber();	// - > 420

(5).milliseconds();	// - > 5
(10).hours();		// - > 36000000
(1).day();			// - > 86400000

(5).daysAfter('tuesday');			// - > 5 days after tuesday of this week
(1).yearAfter('January 23, 1997');	// - > January 23, 1998

(5).weeksAgo();	// - > 5 weeks ago
(1).yearAgo();	// - > January 23, 1996

(5).daysBefore('tuesday');			// - > 5 days before tuesday of this week
(1).yearBefore('January 23, 1997');	// - > January 23, 1996

(5).weeksFromNow();	// - > 5 weeks ago
(1).yearFromNow();	// - > January 23, 1998

(2).upto(6);	// - > [2, 3, 4, 5, 6]
(2).upto(6, function (n) {
		// This function is called 5 times receiving n as the value.
});
(2).upto(8, null, 2);	// - > [2, 4, 6, 8]


//#region Arrays

[1, 2, 3, 4].add(5);
[1, 2, 3, 4].add([5, 6, 7]);
[1, 2, 3, 4].insert(8, 1);

[1, 2, 3].at(0);
[1, 2, 3].at(2);
[1, 2, 3].at(4);
[1, 2, 3].at(4, false);
[1, 2, 3].at(-1);
[1, 2, 3].at(0, 1);

[1, 2, 3].average();
[{age:35},{age:11},{age:11}].average(function(n) {
    return n.age;
}); 
[{ age: 35 }, { age: 11 }, { age: 11 }].average('age');

[1, 2, 3].clone();

[1, null, 2, undefined, 3].compact();
[1, '', 2, false, 3].compact();
[1, '', 2, false, 3].compact(true);

[1, 2, 3, 1].count(1);
['a', 'b', 'c'].count(/b/);
[{a:1},{b:2}].count(function(n) {
    return n['a'] > 1;
});

[1,2,3,4].each(function(n) {
    // Called 4 times: 1, 2, 3, 4    
});
[1,2,3,4].each(function(n) {
  // Called 4 times: 3, 4, 1, 2
}, 2, true);
[1,2,3,4].each(n => false);

['a','a','a'].every(function(n) {
  return n == 'a';
});
['a', 'a', 'a'].every('a');
[{ a: 2 }, { a: 2 }].every({ a: 2 });

[1, 2, 3].exclude(3);
['a', 'b', 'c'].exclude(/b/);
[{a:1},{b:2}].exclude(function(n) {
  return n['a'] == 1;
});
["a", "bbb", "ccc"].exclude((e,i,a) => e.length > 2, (e,i,a) => e.length < 0);

[1,2,3].filter(function(n) {
  return n > 1;
});
[1, 2, 2, 4].filter(2);

[{a:1,b:2},{a:1,b:3},{a:1,b:4}].find(function(n) {
  return n['a'] == 1;
});
['cuba', 'japan', 'canada'].find(/^c/, 2);

[{a:1,b:2},{a:1,b:3},{a:2,b:4}].findAll(function(n) {
  return n['a'] == 1;
});
['cuba', 'japan', 'canada'].findAll(/^c/); 
['cuba', 'japan', 'canada'].findAll(/^c/, 2);

[1,2,3,4].findIndex(3);
[1,2,3,4].findIndex(function(n) {
  return n % 2 == 0;
});
['one','two','three'].findIndex(/th/);

[1, 2, 3].first();
[1, 2, 3].first(2);

[[1], 2, [3]].flatten();
[['a'], [], 'b', 'c'].flatten();

['a','b','c'].forEach(function(a) {
  // Called 3 times: 'a','b','c'
});

[1, 2, 3].from(1);
[1, 2, 3].from(2);

['fee', 'fi', 'fum'].groupBy('length');
[{age:35,name:'ken'},{age:15,name:'bob'}].groupBy(function(n) {
  return n.age;
});

[1, 2, 3, 4, 5, 6, 7].inGroups(3); 
[1, 2, 3, 4, 5, 6, 7].inGroups(3, 'none');

[1, 2, 3, 4, 5, 6, 7].inGroupsOf(4);   
[1, 2, 3, 4, 5, 6, 7].inGroupsOf(4, 'none');

[1, 2, 3, 4].include(5);
[1, 2, 3, 4].include(8, 1);
[1, 2, 3, 4].include([5, 6, 7]);

[1, 2, 3].indexOf(3);
[1, 2, 3].indexOf(7);

[1, 3, 5].intersect([5, 7, 9]);
['a', 'b'].intersect('b', 'c');

[1, 2, 3].last();
[1, 2, 3].last(2);

[1, 2, 1].lastIndexOf(1);
[1, 2, 1].lastIndexOf(7);

[3, 2, 2].least();
['fe', 'fo', 'fum'].least('length');
[{age:35,name:'ken'},{age:12,name:'bob'},{age:12,name:'ted'}].least(function(n) {
  return n.age;
});

[1,2,3].map(function(n) {
  return n * 3;
});
['one','two','three'].map(function(n) {
  return n.length;
});
['one', 'two', 'three'].map('length');

[1, 2, 3].max();
['fee', 'fo', 'fum'].max('length');
['fee', 'fo', 'fum'].max('length', true);
[{a:3,a:2}].max(function(n) {
  return n['a'];
});

[1, 2, 3].min();
['fee', 'fo', 'fum'].min('length');
['fee', 'fo', 'fum'].min('length', true);
['fee','fo','fum'].min(function(n) {
  return n.length;
});
[{a:3,a:2}].min(function(n) {
  return n['a'];
}); 

[3, 2, 2].most();
['fe', 'fo', 'fum'].most('length');
[{age:35,name:'ken'},{age:12,name:'bob'},{age:12,name:'ted'}].most(function(n) {
  return n.age;
});

[1, 2, 3].none(5);
['a', 'b', 'c'].none(/b/);
[{a:1},{b:2}].none(function(n) {
  return n['a'] > 1;
});

[1, 2, 3, 4].randomize();

[1,2,3,4].reduce(function(a, b) {
  return a - b;
});
[1,2,3,4].reduce(function(a, b) {
  return a - b;
}, 100);

[1,2,3,4].reduceRight(function(a, b) {
  return a - b;
});

[1, 2, 3].remove(3);
['a', 'b', 'c'].remove(/b/);
[{a:1},{b:2}].remove(function(n) {
  return n['a'] == 1;
}); 

[1, 2, 3].remove(3); 
['a', 'b', 'c'].remove(/b/);
[{a:1},{b:2}].remove(function(n) {
  return n['a'] == 1;
});

['a', 'b', 'c'].removeAt(0);
[1, 2, 3, 4].removeAt(1, 3);

[1, 2, 3, 4, 5].sample();
[1, 2, 3, 4, 5].sample(3);

['a','b','c'].some(function(n) {
  return n == 'a';
});
['a','b','c'].some(function(n) {
  return n == 'd';
});
['a', 'b', 'c'].some('a');
[{ a: 2 }, { b: 5 }].some({ a: 2 });

['world', 'a', 'new'].sortBy('length');
['world', 'a', 'new'].sortBy('length', true);
[{age:72},{age:13},{age:18}].sortBy(function(n) {
  return n.age;
});

[1, 3, 5].subtract([5, 7, 9]);  
[1, 3, 5].subtract([3], [5]);  
['a', 'b'].subtract('b', 'c');

[1, 2, 2].sum();
[{age:35},{age:12},{age:12}].sum(function(n) {
  return n.age;
});
[{ age: 35 }, { age: 12 }, { age: 12 }].sum('age');

[1, 2, 3].to(1);
[1, 2, 3].to(2);

[1, 3, 5].union([5, 7, 9]);  
['a', 'b'].union(['b', 'c']);

[1, 2, 2, 3].unique();
[{ foo: 'bar' }, { foo: 'bar' }].unique();
[{foo:'bar'},{foo:'bar'}].unique(function(obj){
  return obj.foo;
});
[{ foo: 'bar' }, { foo: 'bar' }].unique('foo');

[1, 2, 3].zip([4, 5, 6]);                                      
['Martin', 'John'].zip(['Luther', 'F.'], ['King', 'Kennedy']);

//#endregion