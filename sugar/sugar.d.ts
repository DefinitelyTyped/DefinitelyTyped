// Type definitions for Sugar 1.3.9
// Project: http://sugarjs.com/
// Definitions by: Josh Baldwin <https://github.com/jbaldwin/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
/*
sugar-1.3.9.d.ts may be freely distributed under the MIT license.

Copyright (c) 2013 Josh Baldwin https://github.com/jbaldwin/sugar.d.ts

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation 
files (the "Software"), to deal in the Software without 
restriction, including without limitation the rights to use, 
copy, modify, merge, publish, distribute, sublicense, and/or sell 
copies of the Software, and to permit persons to whom the 
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be 
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES 
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR 
OTHER DEALINGS IN THE SOFTWARE.
*/

interface String {

	/**
	* Adds <str> at [index].<br/> Negative values are also allowed.
	* @param str String to add.
	* @param index Index where <str> is added. Default = str.length
	* @returns Original string with <str> added at [index].
	* @extra %insert% is provided as an alias, and is generally more readable when using an index.
	* @example
	*   'schfifty'.add(' five')         -> schfifty five
	*   'dopamine'.insert('e', 3)       -> dopeamine
	*   'spelling eror'.insert('r', -3) -> spelling error
	**/
	add(str: string, index?: number): string;

	/**
	* @see add
	**/
	insert(str: string, index?: number): string;

	/**
	* Assigns variables to tokens in a string.
	* @param objs Variable tokens to assign in the string.
	* @returns String with <objs> assigned to variables in the original string.
	* @extra If an object is passed, it's properties can be assigned using
	*        the object's keys. If a non-object (string, number, etc.)
	*        is passed it can be accessed by the argument number beginning
	*        with 1 (as with regex tokens). Multiple objects can be passed
	*        and will be merged together (original objects are unaffected).
	* @example
	*   'Welcome, Mr. {name}.'.assign({ name: 'Franklin' })   -> 'Welcome, Mr. Franklin.'
	*   'You are {1} years old today.'.assign(14)             -> 'You are 14 years old today.'
	*   '{n} and {r}'.assign({ n: 'Cheech' }, { r: 'Chong' }) -> 'Cheech and Chong'
	**/
	assign(...objs: any[]): string;

	/***
	* Gets the character(s) at a given index.
	* @param index Indicies of the character(s) requested.
	* @param loop Loop around the string or stop at the end, default = true.
	* @returns Character(s) at the specified indices.
	* @extra When [loop] is true, overshooting the end of the string
	*        (or the beginning) will begin counting from the other end.
	*        As an alternate syntax, passing multiple indexes will get
	*        the characters at those indexes.
	* @example
	*   'jumpy'.at(0)               -> 'j'
	*   'jumpy'.at(2)               -> 'm'
	*   'jumpy'.at(5)               -> 'j'
	*   'jumpy'.at(5, false)        -> ''
	*   'jumpy'.at(-1)              -> 'y'
	*   'lucky charms'.at(2,4,6,8) -> ['u','k','y',c']
	***/
	at(index: number, loop?: boolean): string;

	/**
	* @see at
	* @limitation Typescript does not allow for arguments after a variable argument list.
	**/
	at(...indicies: number[]): string[];

	/**
	* Converts underscores and hyphens to camel case.
	* @param first If [first] is true the first letter will also be capitalized, default = true
	* @returns Camel case version of the string.
	* @extra If the Inflections package is included acryonyms can also
	*        be defined that will be used when camelizing.
	* @example
	*   'caps_lock'.camelize()              -> 'CapsLock'
	*   'moz-border-radius'.camelize()      -> 'MozBorderRadius'
	*   'moz-border-radius'.camelize(false) -> 'mozBorderRadius'
	**/
	camelize(first?: boolean): string;

	/**
	* Capitalizes the first character in the string.
	* @method capitalize([all] = false)
	* @param all Default = false
	* @returns String
	* @extra If [all] is true, all words in the string will be capitalized.
	* @example
	*
	*   'hello'.capitalize()           -> 'Hello'
	*   'hello kitty'.capitalize()     -> 'Hello kitty'
	*   'hello kitty'.capitalize(true) -> 'Hello Kitty'
	*
	**/
	capitalize(all?: boolean): string;

	/**
	* Runs callback [fn] against each character in the string.
	* Returns an array of characters.
	* @param fn Callback function for each character in the string.
	* @returns string[] with each element containing one character
	*          in the string.
	* @example
	*   'jumpy'.chars() -> ['j','u','m','p','y']
	*   'jumpy'.chars(function(c) {
	*     // Called 5 times: "j","u","m","p","y"
	*   });
	**/
	chars(fn?: (c: string) => void ): string[];

	/**
	* Runs callback [fn] against each character code in the string.
	  Returns an array of character codes.
	* @param fn Callback function for each character code in the string.
	* @returns number[] with each element containing one character code
	*          in the string.
	* @example
	*   'jumpy'.codes() -> [106,117,109,112,121]
	*   'jumpy'.codes(function(c) {
	*     // Called 5 times: 106, 117, 109, 112, 121
	*   });
	***/
	codes(fn?: (c: string) => void ): number[];

	/**
	* Compacts all white space in the string to a single space and trims the ends.
	* @returns String with all whitespace compated to a single space.
	* @example
	*   'too \n much \n space'.compact() -> 'too much space'
	*   'enough \n '.compact()           -> 'enough'
	**/
	compact(): string;

	/**
	* Converts underscores and camel casing to hypens.
	* @returns String with underscores and camel casing changed to hypens.
	* @example
	*   'a_farewell_to_arms'.dasherize() -> 'a-farewell-to-arms'
	*   'capsLock'.dasherize()           -> 'caps-lock'
	**/
	dasherize(): string;

	/**
	* Decodes the string from base64 encoding.
	* @returns Decoded base64 string.
	* @extra This method wraps the browser native %atob% when available,
	*        and uses a custom implementation when not available.
	* @example
	*   'aHR0cDovL3R3aXR0ZXIuY29tLw=='.decodeBase64() -> 'http://twitter.com/'
	*   'anVzdCBnb3QgZGVjb2RlZA=='.decodeBase64()     -> 'just got decoded!'
	**/
	decodeBase64(): string;

	/**
	* Runs callback [fn] against each occurence of [search].
	* @param fn Callback function for each occurance of [search].
	*           If [search] is not provided each character is matched.
	* @param search Search item to look for in the string.
	* @returns string[] of each item matched in the string.
	* @extra Returns an array of matches. [search] may be either
	*        a string or regex, and defaults to every character in the string.
	* @example
	*   'jumpy'.each() -> ['j','u','m','p','y']
	*   'jumpy'.each(/[r-z]/) -> ['u','y']
	*   'jumpy'.each(/[r-z]/, function(m) {
	*     // Called twice: "u", "y"
	*   });
	**/
	each(search: string, fn?: (m: string) => void): string[];

	/**
	* @see each
	**/
	each(search: RegExp, fn?: (m: string) => void): string[];

	/**
	* @see each
	**/
	each(fn?: (m: string) => void ): string[];

	/**
	* Encodes the string into base64 encoding.
	* @returns Base64 encoded string.
	* @extra This method wraps the browser native %btoa% when available,
	*        and uses a custom implementation when not available.
	* @example
	*   'gonna get encoded!'.encodeBase64()  -> 'Z29ubmEgZ2V0IGVuY29kZWQh'
	*   'http://twitter.com/'.encodeBase64() -> 'aHR0cDovL3R3aXR0ZXIuY29tLw=='
	**/
	encodeBase64(): string;

	/**
	* Returns true if the string ends with <find>.
	* @param find String or RegExp to find at the end of the string.
	* @param pos Ending position to search for, defaults to the end of the string.
	* @param case_ True for case sensitive, default = true.
	* @returns True if the string ends with <find>.
	* @example
	*   'jumpy'.endsWith('py')         -> true
	*   'jumpy'.endsWith(/[q-z]/)      -> true
	*   'jumpy'.endsWith('MPY')        -> false
	*   'jumpy'.endsWith('MPY', false) -> true
	**/
	endsWith(find: string, pos?: number, case_?: boolean): boolean;

	/**
	* @see endsWith
	**/
	endsWith(find: string, case_?: boolean): boolean;

	/**
	* @see endsWith
	**/
	endsWith(find: RegExp, pos?: number, case_?: boolean): boolean;

	/**
	* @see endsWith
	**/
	endsWith(find: RegExp, case_?: boolean): boolean;

	/**
	* Converts HTML characters to their entity equivalents.
	* @returns HTML escaped string.
	* @example
	*   '<p>some text</p>'.escapeHTML() -> '&lt;p&gt;some text&lt;/p&gt;'
	*   'one & two'.escapeHTML()        -> 'one &amp; two'
	**/
	escapeHTML(): string;

	/**
	* Escapes all RegExp tokens in the string.
	* @returns RegExp escaped string.
	* @example
	*   'really?'.escapeRegExp()       -> 'really\?'
	*   'yes.'.escapeRegExp()         -> 'yes\.'
	*   '(not really)'.escapeRegExp() -> '\(not really\)'
	**/
	escapeRegExp(): string;

	/**
	* Escapes characters in a string to make a valid URL.
	* @returns URL escaped string.
	* @extra If [param] is true, it will also escape valid URL 
	*        characters for use as a URL parameter.
	* @example
	*   'http://foo.com/"bar"'.escapeURL()     -> 'http://foo.com/%22bar%22'
	*   'http://foo.com/"bar"'.escapeURL(true) -> 'http%3A%2F%2Ffoo.com%2F%22bar%22'
	**/
	escapeURL(param?: boolean): string;

	/**
	* Returns the first [n] characters of the string.
	* @returns String
	* @example
	*   'lucky charms'.first()   -> 'l'
	*   'lucky charms'.first(3)  -> 'luc'
	**/
	first(n?: number): string;

	/**
	* Returns a section of the string starting from [index].
	* @returns String
	* @example
	*   'lucky charms'.from()   -> 'lucky charms'
	*   'lucky charms'.from(7)  -> 'harms'
	**/
	from(index?: number): string;

	/**
	* Converts full-width characters (zenkaku) to half-width (hankaku).
	* @param mode default = 'all'
	* @returns Converted string to hankaku.
	* @extra [mode] accepts any combination of 
	*        "a" (alphabet),
	*        "n" (numbers),
	*        "k" (katakana),
	*        "s" (spaces),
	*        "p" (punctuation),
	*        or "all".
	* @example
	*   '??? YAMADA??!'.hankaku()                      -> '??? YAMADA??!'
	*   '??? YAMADA??!'.hankaku('a')                   -> '??? YAMADA??!'
	*   '??? YAMADA??!'.hankaku('alphabet')            -> '??? YAMADA??!'
	*   '?????! 25???!'.hankaku('katakana', 'numbers') -> '?????! 25???!'
	*   '?????! 25???!'.hankaku('k', 'n')              -> '?????! 25???!'
	*   '?????! 25???!'.hankaku('kn')                  -> '?????! 25???!'
	*   '?????! 25???!'.hankaku('sp')                  -> '?????! 25???!'
	**/
	hankaku(mode?: string): string;

	/**
	* @see hankaku
	**/
	hankaku(...modes: string[]): string;

	/**
	* Returns true if the string matches <find>.
	* @param find Search parameters.
	* @returns True if the string matchs <find>, otherwise false.
	* @example
	*   'jumpy'.has('py')     -> true
	*   'broken'.has(/[a-n]/) -> true
	*   'broken'.has(/[s-z]/) -> false
	**/
	has(find: string): boolean;

	/**
	* @see has
	**/
	has(find: RegExp): boolean;

	/**
	* Returns true if the string contains any characters in Arabic.
	* @returns True if the string contains Arabic.
	* @example
	*   '?????'.hasArabic()          -> true
	*   '?????'.hasCyrillic()        -> true
	*   '? ?????!'.hasHangul() -> true
	*   '??????'.hasKatakana() -> true
	*   "l'année".hasLatin()         -> true
	**/
	hasArabic(): boolean;

	/**
	* Returns true if the string contains any characters in Cyrillic.
	* @returns True if the string contains Cyrillic.
	**/
	hasCyrillic(): boolean;

	/**
	* Returns true if the string contains any characters in Greek.
	* @returns True if the string contains Greek.
	**/
	hasGreek(): boolean;

	/**
	* Returns true if the string contains any characters in Hangul.
	* @returns True if the string contains Hangul.
	**/
	hasHangul(): boolean;

	/**
	* Returns true if the string contains any characters in Han.
	* @returns True if the string contains Han.
	**/
	hasHan(): boolean;

	/**
	* Returns true if the string contains any characters in Kanji.
	* @returns True if the string contains Kanji.
	**/
	hasKanji(): boolean;

	/**
	* Returns true if the string contains any characters in Hebrew.
	* @returns True if the string contains Hebrew.
	**/
	hasHebrew(): boolean;

	/**
	* Returns true if the string contains any characters in Hiragana.
	* @returns True if the string contains Hiragana.
	**/
	hasHiragana(): boolean;

	/**
	* Returns true if the string contains any characters in Kana.
	* @returns True if the string contains Kana.
	**/
	hasKana(): boolean;

	/**
	* Returns true if the string contains any characters in Katakana.
	* @returns True if the string contains Katakana.
	**/
	hasKatakana(): boolean;

	/**
	* Returns true if the string contains any characters in Latin.
	* @returns True if the string contains Latin.
	**/
	hasLatin(): boolean;

	/**
	* Returns true if the string contains any characters in Thai.
	* @returns True if the string contains Thai.
	**/
	hasThai(): boolean;

	/**
	* Returns true if the string contains any characters in Devanagari.
	* @returns True if the string contains Devanagari.
	**/
	hasDevanagari(): boolean;

	/**
	* Converts katakana into hiragana.
	* @param all If [all] is false, only full-width katakana will be converted, default = true.
	* @returns Converted string to hiragana.
	* @example
	*   '????'.hiragana()   -> '????'
	*   '?????'.hiragana() -> '?????'
	*   '????'.hiragana()       -> '????'
	*   '????'.hiragana(false)  -> '????'
	**/
	hiragana(all?: boolean): string;

	/**
	* Creates a human readable string.
	* @returns Pretty printed version of the string.
	* @extra Capitalizes the first word and turns underscores into spaces and strips a
	*        trailing '_id', if any. Like String#titleize, this is meant for creating pretty output.
	* @example
	*   'employee_salary'.humanize() -> 'Employee salary'
	*   'author_id'.humanize()       -> 'Author'
	**/
	humanize(): string;

	/**
	* Returns true if the string has a length of 0 or contains only whitespace.
	* @returns True if the string has a length of 0 or contains only whitespace.
	* @example
	*   ''.isBlank()      -> true
	*   '   '.isBlank()   -> true
	*   'noway'.isBlank() -> false
	**/
	isBlank(): boolean;

	/**
	* Returns true if the string contains only characters in Arabic. Whitespace is ignored.
	* @returns True if the string containsly only characters in Arabic.
	* @example
	*   '?????'.isArabic()          -> true
	*   '?????'.isCyrillic()        -> true
	*   '? ?????!'.isHangul() -> true
	*   '??????'.isKatakana() -> false
	*   "l'année".isLatin()         -> true
	**/
	isArabic(): boolean;

	/**
	* Returns true if the string contains only characters in Cyrillic. Whitespace is ignored.
	* @returns True if the string containsly only characters in Cyrillic.
	**/
	isCyrillic(): boolean;

	/**
	* Returns true if the string contains only characters in Greek. Whitespace is ignored.
	* @returns True if the string containsly only characters in Greek.
	**/
	isGreek(): boolean;

	/**
	* Returns true if the string contains only characters in Hangul. Whitespace is ignored.
	* @returns True if the string containsly only characters in Hangul.
	**/
	isHangul(): boolean;

	/**
	* Returns true if the string contains only characters in Han. Whitespace is ignored.
	* @returns True if the string containsly only characters in Han.
	**/
	isHan(): boolean;

	/**
	* Returns true if the string contains only characters in Kanji. Whitespace is ignored.
	* @returns True if the string containsly only characters in Kanji.
	**/
	isKanji(): boolean;

	/**
	* Returns true if the string contains only characters in Hebrew. Whitespace is ignored.
	* @returns True if the string containsly only characters in Hebrew.
	**/
	isHebrew(): boolean;

	/**
	* Returns true if the string contains only characters in Hiragana. Whitespace is ignored.
	* @returns True if the string containsly only characters in Hiragana.
	**/
	isHiragana(): boolean;

	/**
	* Returns true if the string contains only characters in Kana. Whitespace is ignored.
	* @returns True if the string containsly only characters in Kana.
	**/
	isKana(): boolean;

	/**
	* Returns true if the string contains only characters in Katakana. Whitespace is ignored.
	* @returns True if the string containsly only characters in Katakana.
	**/
	isKatakana(): boolean;

	/**
	* Returns true if the string contains only characters in Latin. Whitespace is ignored.
	* @returns True if the string containsly only characters in Latin.
	**/
	isLatin(): boolean;

	/**
	* Returns true if the string contains only characters in Thai. Whitespace is ignored.
	* @returns True if the string containsly only characters in Thai.
	**/
	isThai(): boolean;

	/**
	* Returns true if the string contains only characters in Devanagari. Whitespace is ignored.
	* @returns True if the string containsly only characters in Devanagari.
	**/
	isDevanagari(): boolean;

	/**
	* Converts hiragana into katakana.
	* @returns Converted string to katakana.
	* @example
	*   '????'.katakana()   -> '????'
	*   '?????'.katakana() -> '?????'
	**/
	katakana(): string;

	/**
	* Returns the last [n] characters of the string.
	* @param last Default = 1.
	* @returns The last [n] characters of the string.
	* @example
	*   'lucky charms'.last()   -> 's'
	*   'lucky charms'.last(3)  -> 'rms'
	**/
	last(n?: number): string;

	/**
	* Runs callback [fn] against each line in the string.
	* @param fn Callback against each line in the original string.
	* @returns A string[] where each element is a line in the original string.
	* @example
	*   'broken wear\nand\njumpy jump'.lines() -> ['broken wear','and','jumpy jump']
	*   'broken wear\nand\njumpy jump'.lines(function(l) {
	*     // Called three times: "broken wear", "and", "jumpy jump"
	*   });
	**/
	lines(fn?: (l: string) => void): string[];

	/**
	* Returns the string with accented and non-standard Latin-based
	* characters converted into ASCII approximate equivalents.
	* @returns String
	* @example
	*   'á'.normalize()                  -> 'a'
	*   'Ménage à trois'.normalize()     -> 'Menage a trois'
	*   'Volkswagen'.normalize()         -> 'Volkswagen'
	*   'FULLWIDTH'.normalize() -> 'FULLWIDTH'
	**/
	normalize(): string;

	/**
	* Pads either/both sides of the string.
	* @param padding The padding characters to add to the string.
	* @param num The number of <padding> to add to the string, default = 1.
	* @returns String
	* @extra [num] is the number of characters on each side,
	*        and [padding] is the character to pad with.
	* @example
	*   'wasabi'.pad('-')         -> '-wasabi-'
	*   'wasabi'.pad('-', 2)      -> '--wasabi--'
	*   'wasabi'.padLeft('-', 2)  -> '--wasabi'
	*   'wasabi'.padRight('-', 2) -> 'wasabi--'
	**/
	pad(padding: string, num?: number): string;

	/**
	* @see pad
	**/
	padLeft(padding: string, num?: number): string;

	/**
	* @see pad
	**/
	padRight(padding: string, num?: number): string;

	/**
	* Runs callback [fn] against each paragraph in the string.
	* @param fn Callback function called for each paragraph in the string.
	* @returns Returns a string[] where each element is a paragraph in the original string.
	* @extra A paragraph here is defined as a block of text bounded
	*        by two or more line breaks.
	* @example
	*   'Once upon a time.\n\nIn the land of oz...'.paragraphs() -> ['Once upon a time.','In the land of oz...']
	*   'Once upon a time.\n\nIn the land of oz...'.paragraphs(function(p) {
	*     // Called twice: "Once upon a time.", "In teh land of oz..."
	*   });
	**/
	paragraphs(fn?: (p: string) => void): string[];

	/**
	* Replaces special characters in a string so that it may be used as part of a pretty URL.
	* @returns URL parameterizes the string.
	* @example
	*   'hell, no!'.parameterize() -> 'hell-no'
	**/
	parameterize(): string;

	/**
	* Returns the plural form of the word in the string.
	* @method pluralize()
	* @returns String
	* @example
	*   'post'.pluralize()         -> 'posts'
	*   'octopus'.pluralize()      -> 'octopi'
	*   'sheep'.pluralize()        -> 'sheep'
	*   'words'.pluralize()        -> 'words'
	*   'CamelOctopus'.pluralize() -> 'CamelOctopi'
	**/
	pluralize(): string;

	/**
	* Removes any part of the string that matches <find>.
	* @param find Remove this from the string.
	* @returns String with all instances of <find> removed.
	* @extra <find> can be a string or a regex.
	* @example
	*   'schfifty five'.remove('f')     -> 'schity ive'
	*   'schfifty five'.remove(/[a-f]/g) -> 'shity iv'
	**/
	remove(find: string): string;

	/**
	* @see remove
	**/
	remove(find: RegExp): string;

	/**
	* Removes all HTML tags and their contents from the string
	* @param tags Remove these HTML tags.
	* @returns String with HTML tags removed.
	* @extra Tags to remove may be enumerated in the parameters, otherwise will remove all.
	* @example
	*   '<p>just <b>some</b> text</p>'.removeTags()    -> ''
	*   '<p>just <b>some</b> text</p>'.removeTags('b') -> '<p>just text</p>'
	**/
	removeTags(...tags: string[]): string;

	/**
	* Returns the string repeated [num] times.
	* @param num Number of times to repeat the string, default = 0.
	* @returns Repeated [num] string.
	* @example
	*   'jumpy'.repeat(2) -> 'jumpyjumpy'
	*   'a'.repeat(5)     -> 'aaaaa'
	*   'a'.repeat(0)     -> ''
	**/
	repeat(num?: number): string;

	/**
	* Reverses the string.
	* @returns Reversed string.
	* @example
	*   'jumpy'.reverse()        -> 'ypmuj'
	*   'lucky charms'.reverse() -> 'smrahc ykcul'
	**/
	reverse(): string;

	/**
	* Shifts each character in the string <num> places in the character map.
	* @param num Number of characters to shift in the character map.
	* @returns String with characters shifted <num>.
	* @example
	*   'a'.shift(1)  -> 'b'
	*   '?'.shift(1) -> '?'
	**/
	shift(num: number): string[];

	/**
	* The reverse of String#pluralize.
	* @returns Returns the singular form of a word in a string.
	* @example
	*   'posts'.singularize()       -> 'post'
	*   'octopi'.singularize()      -> 'octopus'
	*   'sheep'.singularize()       -> 'sheep'
	*   'word'.singularize()        -> 'word'
	*   'CamelOctopi'.singularize() -> 'CamelOctopus'
	**/
	singularize(): string;

	/**
	* Converts camel case, underscores, and hyphens to a properly spaced string.
	* @returns String
	* @example
	*   'camelCase'.spacify()                         -> 'camel case'
	*   'an-ugly-string'.spacify()                    -> 'an ugly string'
	*   'oh-no_youDid-not'.spacify().capitalize(true) -> 'something else'
	**/
	spacify(): string;

	/**
	* Returns true if the string starts with <find>.
	* @param find String or RegExp to look for at the beginning of the string.
	* @param pos Starting position to start searching, default = 0.
	* @param case_ True for case sensitive, default = true.
	* @returns True if the string starts with `find`.
	* @example
	*   'hello'.startsWith('hell')        -> true
	*   'hello'.startsWith(/[a-h]/)       -> true
	*   'hello'.startsWith('HELL')        -> false
	*   'hello'.startsWith('HELL', false) -> true
	**/
	startsWith(find: string, pos?: number, case_?: boolean): boolean;

	/**
	* @see startsWith
	**/
	startsWith(find: string, case_?: boolean): boolean;

	/**
	* @see startsWith
	**/
	startsWith(find: RegExp, pos?: number, case_?: boolean): boolean;

	/**
	* @see startsWith
	**/
	startsWith(find: RegExp, case_?: boolean): boolean;

	/**
	* Strips all HTML tags from the string.
	* @param tags HTML tags to strip from the string.
	* @returns Returns the string with all HTML removed.
	* @extra Tags to strip may be enumerated in the parameters, otherwise will strip all.
	* @example
	*   '<p>just <b>some</b> text</p>'.stripTags()    -> 'just some text'
	*   '<p>just <b>some</b> text</p>'.stripTags('p') -> 'just <b>some</b> text'
	**/
	stripTags(...tags: string[]): string;

	/**
	* Creates a title version of the string.
	* @returns Returns a titlized version of the string.
	* @extra Capitalizes all the words and replaces some characters
	*        in the string to create a nicer looking title.
	*        String#titleize is meant for creating pretty output.
	* @example
	*   'man from the boondocks'.titleize() -> 'Man from the Boondocks'
	*   'x-men: the last stand'.titleize() -> 'X Men: The Last Stand'
	*   'TheManWithoutAPast'.titleize() -> 'The Man Without a Past'
	*   'raiders_of_the_lost_ark'.titleize() -> 'Raiders of the Lost Ark'
	**/
	titleize(): string;

	/**
	* Returns a section of the string ending at [index].
	* @param index Ending position in the substring, default = string.length.
	* @returns Substring ending at [index].
	* @example
	*   'lucky charms'.to()   -> 'lucky charms'
	*   'lucky charms'.to(7)  -> 'lucky ch'
	**/
	to(index?: number): string;

	/**
	* Converts the string into a number in base [base].
	* @param base The base to parse the number in, default = 10.
	* @returns Parsed number.
	* @extra Any value with a "." fill be converted to a floating point value,
	*        otherwise an integer.
	* @example
	*   '153'.toNumber()    -> 153
	*   '12,000'.toNumber() -> 12000
	*   '10px'.toNumber()   -> 10
	*   'ff'.toNumber(16)   -> 255
	**/
	toNumber(base?: number): number;

	/**
	* Removes leading and/or trailing whitespace from the string.
	* @returns Returns a string with leading and trailing whitespace removed.
	* @extra Whitespace is defined as line breaks, tabs, and any character
	*        in the "Space, Separator" Unicode category, conforming to the
	*        the ES5 spec. The standard %trim% method is only added when
	*        not fully supported natively.
	* @example
	*   '   wasabi   '.trim()      -> 'wasabi'
	*   '   wasabi   '.trimLeft()  -> 'wasabi   '
	*   '   wasabi   '.trimRight() -> '   wasabi'
	**/
	// Trim is already available on lib.d.ts interface definition.
	//trim(): string;

	/**
	* Removes leading whitespace from the string.
	* @see trim
	* @return Returns a string with leading whitespace removed.
	**/
	trimLeft(): string;

	/**
	* Removes trailing whitespace from the string.
	* @see trim
	* @return Returns a string with trailing whitespace removed.
	**/
	trimRight(): string;

	/**
	* Truncates a string.
	* @param length The length to keep in the string before truncating.
	* @param split True to split words, false keeps them intact but may truncate earlier.
	* @param from Where to truncate the string from, default = 'right'.
	* @param ellipsis Character to use as ellipsis.
	* @returns Truncated string.
	* @extra If [split] is %false%, will not split words up, and instead
	*        discard the word where the truncation occurred. [from] can
	*        also be %"middle"% or %"left"%.
	* @example
	*   'just sittin on the dock of the bay'.truncate(20)                 -> 'just sittin on the do...'
	*   'just sittin on the dock of the bay'.truncate(20, false)          -> 'just sittin on the...'
	*   'just sittin on the dock of the bay'.truncate(20, true, 'middle') -> 'just sitt...of the bay'
	*   'just sittin on the dock of the bay'.truncate(20, true, 'left')   -> '...the dock of the bay'
	**/
	truncate(length: number, split?: boolean, from?: string, ellipsis?: string): string;

	/**
	* Converts hyphens and camel casing to underscores.
	* @returns Returns a converted string.
	* @example
	*   'a-farewell-to-arms'.underscore() -> 'a_farewell_to_arms'
	*   'capsLock'.underscore()           -> 'caps_lock'
	* @note Not to be confused with the populate underscore.js library.
	**/
	underscore(): string;

	/**
	* Restores escaped HTML characters.
	* @returns Returns unescaped HTML string.
	* @example
	*   '&lt;p&gt;some text&lt;/p&gt;'.unescapeHTML() -> '<p>some text</p>'
	*   'one &amp; two'.unescapeHTML()                -> 'one & two'
	**/
	unescapeHTML(): string;

	/**
	* Restores escaped characters in a URL escaped string.
	* @param partial If true only escape non-valid URL characters, default = false.
	* @returns String
	* @extra If [partial] is true, it will only unescape non-valid URL characters. [partial] is included here for completeness, but should very rarely be needed.
	* @example
	*   'http%3A%2F%2Ffoo.com%2Fthe%20bar'.unescapeURL()     -> 'http://foo.com/the bar'
	*   'http%3A%2F%2Ffoo.com%2Fthe%20bar'.unescapeURL(true) -> 'http%3A%2F%2Ffoo.com%2Fthe bar'
	**/
	unescapeURL(partial?: boolean): string;

	/**
	* Runs callback [fn] against each word in the string.
	* @param fn Callback to run against each word in the string.
	* @returns Returns an string[] with each element containing a word.
	* @extra A "word" here is defined as any sequence of non-whitespace characters.
	* @example
	*   'broken wear'.words() -> ['broken','wear']
	*   'broken wear'.words(function(w) {
	*     // Called twice: "broken", "wear"
	*   });
	**/
	words(fn?: (word: string) => void): string[];

	/**
	* Converts half-width characters (hankaku) to full-width (zenkaku).
	* @param modes Types of characters to convert, default = 'all'.
	* @returns String
	* @extra [mode] accepts any combination of
	*        "a" (alphabet),
	*        "n" (numbers),
	*        "k" (katakana),
	*        "s" (spaces),
	*        "p" (punctuation),
	*        or "all".
	* @example
	*   '??? YAMADA??!'.zenkaku()                         -> '??? YAMADA??!'
	*   '??? YAMADA??!'.zenkaku('a')                      -> '??? YAMADA??!'
	*   '??? YAMADA??!'.zenkaku('alphabet')               -> '??? YAMADA??!'
	*   '?????! 25???!'.zenkaku('katakana', 'numbers') -> '?????! 25???!'
	*   '?????! 25???!'.zenkaku('k', 'n')              -> '?????! 25???!'
	*   '?????! 25???!'.zenkaku('kn')                  -> '?????! 25???!'
	*   '?????! 25???!'.zenkaku('sp')                  -> '?????! 25???!'
	**/
	zenkaku(...modes: string[]): string;
}

// Todo: fix when TypeScript supports adding static functions to native types.
interface NumberStatic {

	/**
	* Returns a random integer between [n1] and [n2].
	* @param n1 Lower bound, default = 0.
	* @param n2 Uppder bound, default = 1.
	* @returns Random number between [n1] and [n2].
	* @extra If only 1 number is passed, the other will be 0. If none are passed, the number will be either 0 or 1.
	* @example
	*   Number.random(50, 100) -> ex. 85
	*   Number.random(50)      -> ex. 27
	*   Number.random()        -> ex. 0
	**/
	random(n1?: number, n2?: number): number;
}

interface Number {

	/**
	* Returns an abbreviated form of the number.
	* @param precision Rounding precision, default = 0.
	* @returns Abbreviated string representation of the number.
	* @extra [precision] will round to the given precision.
	* @example
	*   (1000).abbr()    -> "1k"
	*   (1000000).abbr() -> "1m"
	*   (1280).abbr(1)   -> "1.3k"
	**/
	abbr(precision?: number): string;

	/**
	* Returns an abbreviated form of the number, considered to be "Bytes".
	* @param precision Rounding precision, default = 0.
	* @param limit Upper limit for the units, default = 4 which is terabytes.
	* @returns Abbreviated string representation of the number in bytes.
	* @extra [precision] will round to the given precision.
	*        [limit] is the upper limit for the units.
	*        The default is %4%, which is "terabytes" (TB).
	*        If [limit] is %false%, the upper limit will be "exa".
	* @example
	*   (1000).bytes()                 -> "1kB"
	*   (1000).bytes(2)                -> "0.98kB"
	*   ((10).pow(20)).bytes()         -> "90,949,470TB"
	*   ((10).pow(20)).bytes(0, false) -> "87EB"
	**/
	bytes(precision?: number, limit?: number): string;

	/*
	* @see bytes
	* @limit If false upper limit for units is 'exa'.
	**/
	bytes(precision?: number, limit?: boolean): string;

	/**
	* Shortcut for %Math.ceil% that also allows a <precision>.
	* @param precision Rounding precision, default = 0.
	* @returns Ceiling rounded number.
	* @example
	*   (3.241).ceil()  -> 4
	*   (-3.241).ceil() -> -3
	*   (3.241).ceil(2) -> 3.25
	*   (3748).ceil(-2) -> 3800
	**/
	ceil(precision?: number): number;

	/**
	* Returns a string at the code point of the number.
	* @returns String from character code.
	* @example
	*   (65).chr() -> "A"
	*   (75).chr() -> "K"
	**/
	chr(): string;

	/**
	* Returns an array containing numbers from the number down to <num>.
	* @param num Number to count down to.
	* @param fn Callback function to call for each number.
	* @param step Number to subtract each iteration, default = 1.
	* @returns number[] containing numbers from number down to <num>.
	* @extra Optionally calls [fn] callback for each number in that array.
	*        [step] allows multiples greater than 1.
	* @example
	*   (8).downto(3) -> [8, 7, 6, 5, 4, 3]
	*   (8).downto(3, function(n) {
	*     // This function is called 6 times receiving n as the value.
	*   });
	*   (8).downto(2, null, 2) -> [8, 6, 4, 2]
	**/
	downto(num: number, fn?: (n: number) => void, step?: number): number[];

	/**
	* Takes the number as milliseconds and returns a unit-adjusted localized string.
	* @param locale Locale to convert the ms to, default = currentLocale.
	* @returns String representation of the duration in [locale].
	* @extra This method is the same as %Date#relative% without 
	*        the localized equivalent of "from now" or "ago".
	*        [locale] can be passed as the first (and only) parameter.
	*        Note that this method is only available when the dates
	*        package is included.
	* @example
	*   (500).duration() -> '500 milliseconds'
	*   (1200).duration() -> '1 second'
	*   (75).minutes().duration() -> '1 hour'
	*   (75).minutes().duration('es') -> '1 hora'
	**/
	duration(locale?: string): string;

	/**
	* Shortcut for %Math.floor% that also allows a <precision>.
	* @param precision Rounding precision, default = 0.
	* @returns Floor rounded number.
	* @example
	*   (3.241).floor()  -> 3
	*   (-3.841).floor() -> -4
	*   (3.241).floor(2) -> 3.24
	*   (3748).floor(-2) -> 3700
	**/
	floor(precision?: number): number;

	/**
	* Formats the number to a readable string.
	* @method format([place] = 0, [thousands] = ',', [decimal] = '.')
	* @param place default = 0.
	* @param thousands Thousands character, default = ','.
	* @param decimal Decimal character, default = '.'.
	* @returns String
	* @extra If [place] is %undefined%, will automatically determine the place.
	*        [thousands] is the character used for the thousands separator.
	*        [decimal] is the character used for the decimal point.
	* @example
	*   (56782).format()           -> '56,782'
	*   (56782).format(2)          -> '56,782.00'
	*   (4388.43).format(2, ' ')      -> '4 388.43'
	*   (4388.43).format(2, '.', ',') -> '4.388,43'
	**/
	format(place?: number, thousands?: string, decimal?: string): string;

	/**
	* Converts the number to hexidecimal.
	* @method hex([pad] = 1)
	* @param pad Number of characters to pad.
	* @returns Hexidecimal number.
	* @extra [pad] will pad the resulting string to that many places.
	* @example
	*   (255).hex()   -> 'ff';
	*   (255).hex(4)  -> '00ff';
	*   (23654).hex() -> '5c66';
	**/
	hex(pad?: number): string;

	/**
	* Returns true if the number is even.
	* @returns True if the number is even, otherwise false.
	* @example
	*   (6).isEven()  -> true
	*   (17).isEven() -> false
	**/
	isEven(): boolean;

	/**
	* Returns true if the number has no trailing decimal.
	* @returns True if the number is an integer, otherwise false.
	* @example
	*   (420).isInteger() -> true
	*   (4.5).isInteger() -> false
	**/
	isInteger(): boolean;

	/**
	* Returns true if the number is a multiple of <num>.
	* @param num Number to check for multiple of.
	* @returns True if the number is a multiple of <num>.
	* @example
	*   (6).isMultipleOf(2)  -> true
	*   (17).isMultipleOf(2) -> false
	*   (32).isMultipleOf(4) -> true
	*   (34).isMultipleOf(4) -> false
	**/
	isMultipleOf(num: number): boolean;

	/**
	* Returns true if the number is odd.
	* @returns True if the number is odd, otherwise false.
	* @example
	*   (3).isOdd()  -> true
	*   (18).isOdd() -> false
	**/
	isOdd(): boolean;

	/**
	* Returns the logarithm of the number with base <base>,
	* or natural logarithm of the number if <base> is undefined.
	* @param base default = Math.E.
	* @returns Logarithm of the number with base <base>.
	* @example
	*   (64).log(2) -> 6
	*   (9).log(3)  -> 2
	*   (5).log()   -> 1.6094379124341003
	**/
	log(base?: number): number;

	/**
	* Determines the absolute value of the number.
	* @returns Absolute value of the number.
	* @example
	*   (-3).abs() -> 3
	**/
	abs(): number;

	/**
	* sine
	**/
	sin(): number;

	/**
	* arcsine
	**/
	asin(): number;

	/**
	* cosine
	**/
	cos(): number;

	/**
	* arccosine
	**/
	acos(): number;

	/**
	* tangent
	**/
	tan(): number;

	/**
	* arctangent
	**/
	atan(): number;

	/**
	* @example
	*   (1024).sqrt() -> 32
	**/
	sqrt(): number;

	/**
	* E^X
	**/
	exp(): number;

	/**
	* n^m
	* @example
	*   (3).pow(3) -> 27
	**/
	pow(num: number): number;

	/***
	* Returns the number as a string in metric notation.
	* @method metric([precision] = 0, [limit] = 1)
	* @param precision Rounding precision, default = 0.
	* @param limit Upper limit for the metric units, default = 1 which is kilo.
	* @returns Metric string notation for the number.
	* @extra [precision] will round to the given precision.
	*        Both very large numbers and very small numbers are supported.
	*        [limit] is the upper limit for the units.
	*        The default is %1%, which is "kilo".
	*        If [limit] is %false%, the upper limit will be "exa".
	*        The lower limit is "nano", and cannot be changed.
	* @example
	*   (1000).metric()            -> "1k"
	*   (1000000).metric()         -> "1,000k"
	*   (1000000).metric(0, false) -> "1M"
	*   (1249).metric(2) + 'g'     -> "1.25kg"
	*   (0.025).metric() + 'm'     -> "25mm"
	**/
	metric(precision?: number, limit?: number): string;

	/**
	* @see metric
	* @limit If false the upper limit for the metric units will be 'exa'.
	**/
	metric(precision?: number, limit?: boolean): string;

	/**
	* Returns an ordinalized (English) string, i.e. "1st", "2nd", etc.
	* @returns Ordinalized string number equivalent.
	* @example
	*   (1).ordinalize() -> '1st';
	*   (2).ordinalize() -> '2nd';
	*   (8).ordinalize() -> '8th';
	**/
	ordinalize(): string;

	/**
	* Pads a number with "0" to <place>.
	* @method pad(<place> = 0, [sign] = false, [base] = 10)
	* @param place Pad up to this many characters, default = 0.
	* @param sign True to force the sign (+/-), default = false.
	* @param base The base of the new number, default = 10.
	* @returns Padded number.
	* @extra [sign] allows you to force the sign as well (+05, etc). [base] can change the base for numeral conversion.
	* @example
	*   (5).pad(2)        -> '05'
	*   (-5).pad(4)       -> '-0005'
	*   (82).pad(3, true) -> '+082'
	**/
	pad(place?: number, sign?: boolean, base?: number): string;

	/**
	* Shortcut for %Math.round% that also allows a [precision].
	* @param precision Rounding precision, default = 0.
	* @returns Rounded number to [precision].
	* @example
	*   (3.241).round()  -> 3
	*   (-3.841).round() -> -4
	*   (3.241).round(2) -> 3.24
	*   (3748).round(-2) -> 3800
	**/
	round(precision?: number): number;

	/***
	* Calls <fn> a number of times equivalent to the number.
	* @param fn Callback function to call n times.
	* @returns The original number.
	* @example
	*   (8).times(function(i) {
	*     // This function is called 8 times.
	*   });
	***/
	times(fn: (i: number) => void): number;

	/***
	* Returns a number. This is mostly for compatibility reasons.
	* @returns The original number.
	* @example
	*   (420).toNumber() -> 420
	***/
	toNumber(): number;

	/**
	* Takes the number as a corresponding unit of time and converts to [unit].
	* @method [unit]()
	* @returns Number
	* @extra Method names can be both singular and plural.
	*        Note that as "a month" is ambiguous as a unit of time,
	*        %months% will be equivalent to 30.4375 days, the average
	*        number in a month. Be careful using %months% if you need
	*        exact precision.
	* @set
	*   millisecond
	*   milliseconds
	*   second
	*   seconds
	*   minute
	*   minutes
	*   hour
	*   hours
	*   day
	*   days
	*   week
	*   weeks
	*   month
	*   months
	*   year
	*   years
	* @example
	*   (5).milliseconds() -> 5
	*   (10).hours()       -> 36000000
	*   (1).day()          -> 86400000
	**/
	millisecond(): number;

	/**
	* @see millisecond
	**/
	milliseconds(): number;

	/**
	* @see millisecond
	**/
	second(): number;

	/**
	* @see millisecond
	**/
	seconds(): number;

	/**
	* @see millisecond
	**/
	minute(): number;

	/**
	* @see millisecond
	**/
	minutes(): number;

	/**
	* @see millisecond
	**/
	hour(): number;

	/**
	* @see millisecond
	**/
	hours(): number;

	/**
	* @see millisecond
	**/
	day(): number;

	/**
	* @see millisecond
	**/
	days(): number;

	/**
	* @see millisecond
	**/
	week(): number;

	/**
	* @see millisecond
	**/
	weeks(): number;

	/**
	* @see millisecond
	**/
	month(): number;

	/**
	* @see millisecond
	**/
	months(): number;

	/**
	* @see millisecond
	**/
	year(): number;

	/**
	* @see millisecond
	**/
	years(): number;

	/**
	* Returns a date <n> units after <d>, where <n> is the number.
	* @method [unit]After([d], [locale] = currentLocale)
	* @param d Date to start from.
	* @param locale Locale for return Date, default = currentLocale.
	* @returns Date <n> units after <d>.
	* @extra [d] will accept a date object, timestamp, or text format.
	*        Note that "months" is ambiguous as a unit of time. If the
	*        target date falls on a day that does not exist
	*        (ie. August 31 -> February 31), the date will be shifted
	*        to the last day of the month. Be careful using %monthsAfter%
	*        if you need exact precision. See @date_format for more.
	* @set
	*   millisecondAfter
	*   millisecondsAfter
	*   secondAfter
	*   secondsAfter
	*   minuteAfter
	*   minutesAfter
	*   hourAfter
	*   hoursAfter
	*   dayAfter
	*   daysAfter
	*   weekAfter
	*   weeksAfter
	*   monthAfter
	*   monthsAfter
	*   yearAfter
	*   yearsAfter
	* @example
	*   (5).daysAfter('tuesday')          -> 5 days after tuesday of this week
	*   (1).yearAfter('January 23, 1997') -> January 23, 1998
	**/
	millisecondAfter(d: string, locale?: string): Date;

	/**
	* @see millisecondAfter
	**/
	millisecondAfter(d: Date, locale?: string): Date;

	/**
	* @see millisecondAfter
	**/
	millisecondsAfter(d: string, locale?: string): Date;

	/**
	* @see millisecondAfter
	**/
	millisecondsAfter(d: Date, locale?: string): Date;

	/**
	* @see millisecondAfter
	**/
	secondAfter(d: string, locale?: string): Date;

	/**
	* @see millisecondAfter
	**/
	secondAfter(d: Date, locale?: string): Date;

	/**
	* @see millisecondAfter
	**/
	secondsAfter(d: string, locale?: string): Date;

	/**
	* @see millisecondAfter
	**/
	secondsAfter(d: Date, locale?: string): Date;

	/**
	* @see millisecondAfter
	**/
	minuteAfter(d: string, locale?: string): Date;

	/**
	* @see millisecondAfter
	**/
	minuteAfter(d: Date, locale?: string): Date;

	/**
	* @see millisecondAfter
	**/
	minutesAfter(d: string, locale?: string): Date;

	/**
	* @see millisecondAfter
	**/
	minutesAfter(d: Date, locale?: string): Date;

	/**
	* @see millisecondAfter
	**/
	hourAfter(d: string, locale?: string): Date;

	/**
	* @see millisecondAfter
	**/
	hourAfter(d: Date, locale?: string): Date;

	/**
	* @see millisecondAfter
	**/
	hoursAfter(d: string, locale?: string): Date;

	/**
	* @see millisecondAfter
	**/
	hoursAfter(d: Date, locale?: string): Date;

	/**
	* @see millisecondAfter
	**/
	dayAfter(d: string, locale?: string): Date;

	/**
	* @see millisecondAfter
	**/
	dayAfter(d: Date, locale?: string): Date;

	/**
	* @see millisecondAfter
	**/
	daysAfter(d: string, locale?: string): Date;

	/**
	* @see millisecondAfter
	**/
	daysAfter(d: Date, locale?: string): Date;

	/**
	* @see millisecondAfter
	**/
	weekAfter(d: string, locale?: string): Date;

	/**
	* @see millisecondAfter
	**/
	weekAfter(d: Date, locale?: string): Date;

	/**
	* @see millisecondAfter
	**/
	weeksAfter(d: string, locale?: string): Date;

	/**
	* @see millisecondAfter
	**/
	weeksAfter(d: Date, locale?: string): Date;

	/**
	* @see millisecondAfter
	**/
	monthAfter(d: string, locale?: string): Date;

	/**
	* @see millisecondAfter
	**/
	monthAfter(d: Date, locale?: string): Date;

	/**
	* @see millisecondAfter
	**/
	monthsAfter(d: string, locale?: string): Date;

	/**
	* @see millisecondAfter
	**/
	yearAfter(d: string, locale?: string): Date;

	/**
	* @see millisecondAfter
	**/
	yearAfter(d: Date, locale?: string): Date;

	/**
	* @see millisecondAfter
	**/
	yearsAfter(d: string, locale?: string): Date;

	/**
	* @see millisecondAfter
	**/
	yearsAfter(d: Date, locale?: string): Date;

	/**
	* Returns a date that is <n> units ago.
	* @method [unit]Ago()
	* @returns Date
	* @extra Note that "months" is ambiguous as a unit of time.
	*        If the target date falls on a day that does not exist
	*        (ie. August 31 -> February 31), the date will be shifted
	*        to the last day of the month. Be careful using %monthsAgo% 
	*        if you need exact precision.
	* @set
	*   millisecondAgo
	*   millisecondsAgo
	*   secondAgo
	*   secondsAgo
	*   minuteAgo
	*   minutesAgo
	*   hourAgo
	*   hoursAgo
	*   dayAgo
	*   daysAgo
	*   weekAgo
	*   weeksAgo
	*   monthAgo
	*   monthsAgo
	*   yearAgo
	*   yearsAgo
	* @example
	*   (5).weeksAgo() -> 5 weeks ago
	*   (1).yearAgo()  -> January 23, 1996
	**/
	millisecondAgo(): Date;

	/**
	* @see millisecondAgo
	**/
	millisecondsAgo(): Date;

	/**
	* @see millisecondAgo
	**/
	secondAgo(): Date;

	/**
	* @see millisecondAgo
	**/
	secondsAgo(): Date;

	/**
	* @see millisecondAgo
	**/
	minuteAgo(): Date;

	/**
	* @see millisecondAgo
	**/
	minutesAgo(): Date;

	/**
	* @see millisecondAgo
	**/
	hourAgo(): Date;

	/**
	* @see millisecondAgo
	**/
	hoursAgo(): Date;

	/**
	* @see millisecondAgo
	**/
	dayAgo(): Date;

	/**
	* @see millisecondAgo
	**/
	daysAgo(): Date;

	/**
	* @see millisecondAgo
	**/
	weekAgo(): Date;

	/**
	* @see millisecondAgo
	**/
	weeksAgo(): Date;

	/**
	* @see millisecondAgo
	**/
	monthAgo(): Date;

	/**
	* @see millisecondAgo
	**/
	monthsAgo(): Date;

	/**
	* @see millisecondAgo
	**/
	yearAgo(): Date;

	/**
	* @see millisecondAgo
	**/
	yearsAgo(): Date;

	/**
	* Returns a date that is <n> units before <d>, where <n> is the number.
	* @method [unit]Before([d], [locale] = currentLocale)
	* @param d Date to start from.
	* @param locale Locale for return Date, default = currentLocale.
	* @returns Date <n> units before <d>.
	* @extra [d] will accept a date object, timestamp, or text format.
	*        Note that "months" is ambiguous as a unit of time. If the
	*        target date falls on a day that does not exist
	*        (ie. August 31 -> February 31), the date will be shifted to
	*        the last day of the month. Be careful using %monthsBefore%
	*        if you need exact precision. See @date_format for more.
	* @set
	*   millisecondBefore
	*   millisecondsBefore
	*   secondBefore
	*   secondsBefore
	*   minuteBefore
	*   minutesBefore
	*   hourBefore
	*   hoursBefore
	*   dayBefore
	*   daysBefore
	*   weekBefore
	*   weeksBefore
	*   monthBefore
	*   monthsBefore
	*   yearBefore
	*   yearsBefore
	* @example
	*   (5).daysBefore('tuesday')          -> 5 days before tuesday of this week
	*   (1).yearBefore('January 23, 1997') -> January 23, 1996
	**/
	millisecondBefore(d: string, locale?: string): Date;

	/**
	* @see millisecondBefore
	**/
	millisecondBefore(d: Date, locale?: string): Date;

	/**
	* @see millisecondBefore
	**/
	millisecondsBefore(d: string, locale?: string): Date;

	/**
	* @see millisecondBefore
	**/
	millisecondsBefore(d: Date, locale?: string): Date;

	/**
	* @see millisecondBefore
	**/
	secondBefore(d: string, locale?: string): Date;

	/**
	* @see millisecondBefore
	**/
	secondBefore(d: Date, locale?: string): Date;

	/**
	* @see millisecondBefore
	**/
	secondsBefore(d: string, locale?: string): Date;

	/**
	* @see millisecondBefore
	**/
	secondsBefore(d: Date, locale?: string): Date;

	/**
	* @see millisecondBefore
	**/
	minuteBefore(d: string, locale?: string): Date;

	/**
	* @see millisecondBefore
	**/
	minuteBefore(d: Date, locale?: string): Date;

	/**
	* @see millisecondBefore
	**/
	minutesBefore(d: string, locale?: string): Date;

	/**
	* @see millisecondBefore
	**/
	minutesBefore(d: Date, locale?: string): Date;

	/**
	* @see millisecondBefore
	**/
	hourBefore(d: string, locale?: string): Date;

	/**
	* @see millisecondBefore
	**/
	hourBefore(d: Date, locale?: string): Date;

	/**
	* @see millisecondBefore
	**/
	hoursBefore(d: string, locale?: string): Date;

	/**
	* @see millisecondBefore
	**/
	hoursBefore(d: Date, locale?: string): Date;

	/**
	* @see millisecondBefore
	**/
	dayBefore(d: string, locale?: string): Date;

	/**
	* @see millisecondBefore
	**/
	dayBefore(d: Date, locale?: string): Date;

	/**
	* @see millisecondBefore
	**/
	daysBefore(d: string, locale?: string): Date;

	/**
	* @see millisecondBefore
	**/
	daysBefore(d: Date, locale?: string): Date;

	/**
	* @see millisecondBefore
	**/
	weekBefore(d: string, locale?: string): Date;

	/**
	* @see millisecondBefore
	**/
	weekBefore(d: Date, locale?: string): Date;

	/**
	* @see millisecondBefore
	**/
	weeksBefore(d: string, locale?: string): Date;

	/**
	* @see millisecondBefore
	**/
	weeksBefore(d: Date, locale?: string): Date;

	/**
	* @see millisecondBefore
	**/
	monthBefore(d: string, locale?: string): Date;

	/**
	* @see millisecondBefore
	**/
	monthBefore(d: Date, locale?: string): Date;

	/**
	* @see millisecondBefore
	**/
	monthsBefore(d: string, locale?: string): Date;

	/**
	* @see millisecondBefore
	**/
	monthsBefore(d: Date, locale?: string): Date;

	/**
	* @see millisecondBefore
	**/
	yearBefore(d: string, locale?: string): Date;

	/**
	* @see millisecondBefore
	**/
	yearBefore(d: Date, locale?: string): Date;

	/**
	* @see millisecondBefore
	**/
	yearsBefore(d: string, locale?: string): Date;

	/**
	* @see millisecondBefore
	**/
	yearsBefore(d: Date, locale?: string): Date;

	/**
	* Returns a date <n> units from now.
	* @method [unit]FromNow()
	* @returns Date
	* @extra Note that "months" is ambiguous as a unit of time.
	*        If the target date falls on a day that does not exist
	*        (ie. August 31 -> February 31), the date will be shifted
	*        to the last day of the month. Be careful using %monthsFromNow%
	*        if you need exact precision.
	* @set
	*   millisecondFromNow
	*   millisecondsFromNow
	*   secondFromNow
	*   secondsFromNow
	*   minuteFromNow
	*   minutesFromNow
	*   hourFromNow
	*   hoursFromNow
	*   dayFromNow
	*   daysFromNow
	*   weekFromNow
	*   weeksFromNow
	*   monthFromNow
	*   monthsFromNow
	*   yearFromNow
	*   yearsFromNow
	* @example
	*   (5).weeksFromNow() -> 5 weeks ago
	*   (1).yearFromNow()  -> January 23, 1998
	**/
	millisecondFromNow(): Date;

	/**
	* @see millisecondFromNow
	**/
	millisecondsFromNow(): Date;

	/**
	* @see millisecondFromNow
	**/
	secondFromNow(): Date;

	/**
	* @see millisecondFromNow
	**/
	secondsFromNow(): Date;

	/**
	* @see millisecondFromNow
	**/
	minuteFromNow(): Date;

	/**
	* @see millisecondFromNow
	**/
	minutesFromNow(): Date;

	/**
	* @see millisecondFromNow
	**/
	hourFromNow(): Date;

	/**
	* @see millisecondFromNow
	**/
	hoursFromNow(): Date;

	/**
	* @see millisecondFromNow
	**/
	dayFromNow(): Date;

	/**
	* @see millisecondFromNow
	**/
	daysFromNow(): Date;

	/**
	* @see millisecondFromNow
	**/
	weekFromNow(): Date;

	/**
	* @see millisecondFromNow
	**/
	weeksFromNow(): Date;

	/**
	* @see millisecondFromNow
	**/
	monthFromNow(): Date;

	/**
	* @see millisecondFromNow
	**/
	monthsFromNow(): Date;

	/**
	* @see millisecondFromNow
	**/
	yearFromNow(): Date;

	/**
	* @see millisecondFromNow
	**/
	yearsFromNow(): Date;

	/**
	* Returns an array containing numbers from the number up to <num>.
	* @param num Number to count down to.
	* @param fn Callback function to call for each number.
	* @param step Number to add each iteration, default = 1.
	* @returns number[] containing numbers from number up to <num>.
	* @extra Optionally calls [fn] callback for each number in that array.
	*       [step] allows multiples greater than 1.
	* @example
	*   (2).upto(6) -> [2, 3, 4, 5, 6]
	*   (2).upto(6, function(n) {
	*     // This function is called 5 times receiving n as the value.
	*   });
	*   (2).upto(8, null, 2) -> [2, 4, 6, 8]
	**/
	upto(num: number, fn?: Function, step?: number): number[];
}

// Todo: Fix when TypeScript supports static members on native types.
interface ArrayStatic {

	/**
	* Alternate array constructor.
	* @param args Elements to create the array from.
	* @returns Array containing the elements in <args>.
	* @extra This method will create a single array by calling %concat%
	*        on all arguments passed. In addition to ensuring that an unknown
	*        variable is in a single, flat array (the standard constructor will
	*        create nested arrays, this one will not), it is also a useful
	*        shorthand to convert a function's arguments object into a standard
	*        array.
	* @example
	*   Array.create('one', true, 3)   -> ['one', true, 3]
	*   Array.create(['one', true, 3]) -> ['one', true, 3]
	*   Array.create(function(n) {
	*     return arguments;
	*   }('howdy', 'doody'));
	**/
	create<T>(...args: T[]): T[];

	/**
	* Returns true if <obj> is an Array.
	* @param obj Object to check if it is an Array.
	* @returns True if <obj> is of type Array.
	* @extra This method is provided for browsers that don't support it internally.
	* @example
	*   Array.isArray(3)        -> false
	*   Array.isArray(true)     -> false
	*   Array.isArray('wasabi') -> false
	*   Array.isArray([1,2,3])  -> true
	**/
	isArray(obj: any): boolean;
}

interface Array<T> {

	/**
	* Adds <el> to the array.
	* @param el Elements to add to the array.
	* @param index Specifies the index where to insert/add <el> into the array, default = Array.length
	* @returns Array containing the added <el> elements at position <index>.
	* @extra If [index] is specified, it will add at [index], otherwise
	*        adds to the end of the array. %add% behaves like %concat%
	*        in that if <el> is an array it will be joined, not inserted.
	*        This method will change the array! Use %include% for a
	*        non-destructive alias. Also, %insert% is provided as an
	*        alias that reads better when using an index.
	* @example
	*   [1,2,3,4].add(5)       -> [1,2,3,4,5]
	*   [1,2,3,4].add([5,6,7]) -> [1,2,3,4,5,6,7]
	*   [1,2,3,4].insert(8, 1) -> [1,8,2,3,4]
	**/
	add(el: T, index?: number): T[];

	/**
	* @see add
	**/
	add(el: T[], index?: number): T[];

	/**
	* @see add
	**/
	insert(el: T, index?: number): T[];

	/**
	* @see add
	**/
	insert(el: T[], index?: number): T[];

	/***
	* Gets the element(s) at a given index.
	* @param index Element's index to retrieve.
	* @param loop Continue counting if the index overshoots the Array.length
	* @returns The element at <index>.
	* @extra When [loop] is true, overshooting the end of the array (or the beginning)
	*        will begin counting from the other end. As an alternate syntax, passing
	*        multiple indexes will get the elements at those indexes.
	* @example
	*   [1,2,3].at(0)        -> 1
	*   [1,2,3].at(2)        -> 3
	*   [1,2,3].at(4)        -> 2
	*   [1,2,3].at(4, false) -> null
	*   [1,2,3].at(-1)       -> 3
	*   [1,2,3].at(0,1)      -> [1,2]
	**/
	at(index: number, loop?: boolean): T;

	/**
	* @see at
	* @param start Start index.
	* @param end End index.
	* @return Elements between <start> and <end>
	**/
	at(start: number, stop: number): T[];

	/**
	* Averages all values in the array.
	* @param map Maps each element to a number.
	* @returns The average of the entire array.
	* @extra [map] may be a function mapping the value to be averaged or
	*        a string acting as a shortcut.
	* @example
	*   [1,2,3].average()                           -> 2
	*   [{age:35},{age:11},{age:11}].average(function(n) {
	*     return n.age;
	*   });                                         -> 19
	*   [{age:35},{age:11},{age:11}].average('age') -> 19
	**/
	average(map?: (e: T) => number): number;

	/**
	* Clones the array.
	* @returns Cloned array.
	* @example
	*   [1,2,3].clone() -> [1,2,3]
	**/
	clone(): T[];

	/**
	* Removes all instances of %undefined%, %null%, and %NaN% from the array.
	* @param all Remove false elements, default = false.
	* @returns The same array with the special values removed.
	* @extra If [all] is %true%, all "falsy" elements will be removed. This includes empty strings, 0, and false.
	* @example
	*   [1,null,2,undefined,3].compact() -> [1,2,3]
	*   [1,'',2,false,3].compact()       -> [1,'',2,false,3]
	*   [1,'',2,false,3].compact(true)   -> [1,2,3]
	**/
	compact(all?: boolean): T[];

	/**
	* Counts all elements in the array that match <f>.
	* @param f object to match against in the array.
	* @returns Number of elements in the array that match <f>.
	* @extra <f> will match a string, number, array, object, or alternately test against a function or regex. This method implements @array_matching.
	* @example
	*   [1,2,3,1].count(1)       -> 2
	*   ['a','b','c'].count(/b/) -> 1
	*   [{a:1},{b:2}].count(function(n) {
	*     return n['a'] > 1;
	*   });                      -> 0
	**/
	count(f: T): number;

	/**
	* Runs <fn> against each element in the array. Enhanced version of %Array#forEach%.
	* @param fn Callback function for applied to each element in the array.
	* @param index Starting index, default = 0.
	* @param loop Continue from the beginning if the end of the array is reached, default = false.
	* @returns Original array.
	* @extra Parameters passed to <fn> are identical to %forEach%,
	*        ie. the first parameter is the current element, second
	*        parameter is the current index, and third parameter is
	*        the array itself. If <fn> returns %false% at any time
	*        it will break out of the loop. Once %each% finishes,
	*        it will return the array. If [index] is passed, <fn> will
	*        begin at that index and work its way to the end. If [loop]
	*        is true, it will then start over from the beginning of the
	*        array and continue until it reaches [index] - 1.
	* @example
	*   [1,2,3,4].each(function(n) {
	*     // Called 4 times: 1, 2, 3, 4
	*   });
	*   [1,2,3,4].each(function(n) {
	*     // Called 4 times: 3, 4, 1, 2
	*   }, 2, true);
	**/
	each(
		fn: (element: T, index?: number, array?: T[]) => any,
		index?: number,
		loop?: boolean): T[];

	/**
	* Returns true if all elements in the array match <f>.
	* @param f Match all elements to this.
	* @param scope [this] object.
	* @returns Boolean
	* @extra [scope] is the %this% object. %all% is provided an alias.
	*        In addition to providing this method for browsers that don't
	*        support it natively, this method also implements @array_matching.
	* @example
	*   ['a','a','a'].every(function(n) {
	*     return n == 'a';
	*   });
	*   ['a','a','a'].every('a')   -> true
	*   [{a:2},{a:2}].every({a:2}) -> true
	**/
	every(f: T, scope?: any): boolean;

	/**
	* @see every
	* @note Already defined in lib.d.ts.
	**/
	//every(f: (element: T, index: number, array: T[]) => boolean, scope?: any): boolean;

	/**
	* @see every
	**/
	all(f: T, scope?: any): boolean;

	/**
	* @see every
	**/
	all(f: (element: T, index: number, array: T[]) => boolean, scope?: any): boolean;

	/**
	* Removes any element in the array that matches [f1], [f2], etc.
	* @param f Elements to find in the array and remove.
	* @returns A copy of the original array with all instances of <f> removed.
	* @extra This is a non-destructive alias for %remove%. It will not change the original array. This method implements @array_matching.
	* @example
	*   [1,2,3].exclude(3)         -> [1,2]
	*   ['a','b','c'].exclude(/b/) -> ['a','c']
	*   [{a:1},{b:2}].exclude(function(n) {
	*     return n['a'] == 1;
	*   });                       -> [{b:2}]
	**/
	exclude(...f: T[]): T[];

	/**
	* @see exclude
	**/
	exclude(f: (element: T, index: number, array: T[]) => boolean): T[];

	/**
	* Returns any elements in the array that match <f>.
	* @param f Find these elements in the array.
	* @param scope %this% object while filtering.
	* @returns Array containing th items <f> found in the array.
	* @extra [scope] is the %this% object. In addition to providing this
	*        method for browsers that don't support it natively, this method
	*        also implements @array_matching.
	* @example
	*   [1,2,3].filter(function(n) {
	*     return n > 1;
	*   });
	*   [1,2,2,4].filter(2) -> 2
	**/
	filter(f: T, scope?: any): T[];

	/**
	* @see filter
	* @note Already defined in lib.d.ts.
	**/
	//filter(f: (element: T, index: number, array: T[]) => boolean, scope?: any): T[];

	/**
	* Returns the first element that matches <f>.
	* @param f Elements to match against.
	* @param index Index to start searching from, default = 0.
	* @param loop Loop around the end of the array, default = false.
	* @returns First element matching <f>.
	* @extra <f> will match a string, number, array, object, or alternately
	*        test against a function or regex. Starts at [index], and will
	*        continue once from index = 0 if [loop] is true. This method
	*        implements @array_matching.
	* @example
	*   [{a:1,b:2},{a:1,b:3},{a:1,b:4}].find(function(n) {
	*     return n['a'] == 1;
	*   });                                     -> {a:1,b:3}
	*   ['cuba','japan','canada'].find(/^c/, 2) -> 'canada'
	**/
	find(f: T, index?: number, loop?: boolean): T;

	/**
	* @see find
	**/
	find(f: (element: T, index: number, array: T[]) => boolean, index?: number, loop?: boolean): T;

	/**
	* Returns all elements that match <f>.
	* @param f Element to match against.
	* @param index Index to start searching from, default = 0.
	* @param loop Loop around the end of the array, default = false.
	* @returns Elements matching <f>.
	* @extra <f> will match a string, number, array, object, or alternately
	*        test against a function or regex. Starts at [index], and will
	*        continue once from index = 0 if [loop] is true. This method
	*        implements @array_matching.
	* @example
	*   [{a:1,b:2},{a:1,b:3},{a:2,b:4}].findAll(function(n) {
	*     return n['a'] == 1;
	*   });                                        -> [{a:1,b:3},{a:1,b:4}]
	*   ['cuba','japan','canada'].findAll(/^c/)    -> 'cuba','canada'
	*   ['cuba','japan','canada'].findAll(/^c/, 2) -> 'canada'
	**/
	findAll(f: T, index?: number, loop?: boolean): T[];

	/**
	* @see findAll
	**/
	findAll(f: (element: T, index: number, array: T[]) => boolean, index?: number, loop?: boolean): T[];

	/**
	* Returns the index of the first element that matches <f>
	*        or -1 if not found.
	* @method findIndex(<f>, [startIndex] = 0, [loop] = false)
	* @param f Element to match against.
	* @param startIndex Index to start searching from, default = 0.
	* @param loop Loop around the end of th array, default = false.
	* @returns Index at which <f> is found.
	* @extra This method has a few notable differences to native %indexOf%.
	*        Although <f> will similarly match a primitive such as a string
	*        or number, it will also match deep objects and arrays that are
	*        not equal by reference (%===%). Additionally, if a function is
	*        passed it will be run as a matching function (similar to the
	*        behavior of %Array#filter%) rather than attempting to find that
	*        function itself by reference in the array. Starts at [index],
	*        and will continue once from index = 0 if [loop] is true.
	*        This method implements @array_matching.
	* @example
	*   [1,2,3,4].findIndex(3);  -> 2
	*   [1,2,3,4].findIndex(function(n) {
	*     return n % 2 == 0;
	*   }); -> 1
	*   ['one','two','three'].findIndex(/th/); -> 2
	**/
	findIndex(f: T, startIndex?: number, loop?: boolean): number;

	/**
	* @see findIndex
	**/
	findIndex(f: (element: T, index: number, array: T[]) => boolean, startIndex?: number, loop?: boolean): number;

	/**
	* Returns the first element(s) in the array.
	* @param num Retrieve this many elements in the array, default = 1.
	* @returns <num> first elements in the array.
	* @extra When <num> is passed, returns the first <num> elements in the array.
	* @note If <num> is omitted then the return type is the element itself, not an array of the element,
	*       For example 1 instead of [1], however if <num> is present the result is always wrapped in an
	*       array like first(1) -> [1], not 1.
	* @example
	*   [1,2,3].first()        -> 1
	*   [1,2,3].first(2)       -> [1,2]
	**/
	first(): T;

	/**
	* @see first
	**/
	first(num: number): T[];

	/**
	* Returns a flattened, one-dimensional copy of the array.
	* @param limit Limit the flattening to this depth, default = Infinity.
	* @returns Flattened array.
	* @extra You can optionally specify a [limit], which will only flatten
	*        that depth.
	* @example
	*   [[1], 2, [3]].flatten()      -> [1,2,3]
	*   [['a'],[],'b','c'].flatten() -> ['a','b','c']
	**/
	flatten(limit?: number): T[];

	/**
	* Iterates over the array, calling [fn] on each loop.
	* @param fn Callback function for each element in the array.
	* @param scope Scope during [fn] callbacks, default = this.
	* @returns Nothing
	* @extra This method is only provided for those browsers that do not support
	*        it natively. [scope] becomes the %this% object.
	* @example
	*   ['a','b','c'].forEach(function(a) {
	*     // Called 3 times: 'a','b','c'
	*   });
	* @note Already defined in lib.d.ts.
	**/
	//forEach(fn: (element: T, index: number, array: T[]) => void, scope?: any): void;

	/**
	* Returns a slice of the array from <index>.
	* @param index Index to start the slice from.
	* @returns Subarray starting from [index] to the end of the original array.
	* @example
	*   [1,2,3].from(1)  -> [2,3]
	*   [1,2,3].from(2)  -> [3]
	**/
	from(index: number): T[];

	/**
	* Groups the array by <map>.
	* @param map Property on the elements in the array.
	* @param fn Optional callback for each group, default = No callback.
	* @returns 
	* @extra Will return an object with keys equal to the grouped values.
	*        <map> may be a mapping function, or a string acting as a shortcut.
	*        Optionally calls [fn] for each group.
	* @example
	*   ['fee','fi','fum'].groupBy('length') -> { 2: ['fi'], 3: ['fee','fum'] }
	*   [{age:35,name:'ken'},{age:15,name:'bob'}].groupBy(function(n) {
	*     return n.age;
	*   });                                  -> { 35: [{age:35,name:'ken'}], 15: [{age:15,name:'bob'}] }
	**/
	groupBy<U>(map: string, fn?: (key: string, items: T[]) => void): { [key: string]: T };

	/**
	* @see groupBy
	* @param map Callback function for each element, returns the key for the group the element should be in.
	**/
	groupBy<U>(map: (element: T) => U, fn?: (key: string, items: T[]) => void): { [key: string]: T[] };

	/**
	* Groups the array into <num> arrays.
	* @param num The number of sub-arrays to create.
	* @param padding Padding element if the groups do not make whole amounts.
	* @returns Array with <num> sub-arrays.
	* @extra [padding] specifies a value with which to pad the last array
	*        so that they are all equal length.
	* @example
	*   [1,2,3,4,5,6,7].inGroups(3)         -> [ [1,2,3], [4,5,6], [7] ]
	*   [1,2,3,4,5,6,7].inGroups(3, 'none') -> [ [1,2,3], [4,5,6], [7,'none','none'] ]
	* @note removed because of TSC bug https://typescript.codeplex.com/workitem/1143?FocusElement=CommentTextBox
	**/
	//inGroups(num: number, padding?: T): T[][];

	/**
	* Groups the array into arrays of <num> elements each.
	* @param num The number of elements to put into each sub-array.
	* @param padding Padding element if the groups do not make whole amounts.
	* @returns Array with sub-arrays each containing <num> elements.
	* @extra [padding] specifies a value with which to pad the last array so that they are all equal length.
	* @example
	*   [1,2,3,4,5,6,7].inGroupsOf(4)         -> [ [1,2,3,4], [5,6,7] ]
	*   [1,2,3,4,5,6,7].inGroupsOf(4, 'none') -> [ [1,2,3,4], [5,6,7,'none'] ]
	* @note removed because of TSC bug https://typescript.codeplex.com/workitem/1143?FocusElement=CommentTextBox
	**/
	//inGroupsOf(num: number, padding?: T): T[][];

	/**
	* Adds <element> to the array.
	* @param element Element to add to the array.
	* @param index , default = Array.length.
	* @returns Array with <element> included at [index].
	* @extra This is a non-destructive alias for %add%. It will not change
	*        the original array.
	* @example
	*   [1,2,3,4].include(5)       -> [1,2,3,4,5]
	*   [1,2,3,4].include(8, 1)    -> [1,8,2,3,4]
	*   [1,2,3,4].include([5,6,7]) -> [1,2,3,4,5,6,7]
	**/
	include(element: T, index?: number): T[];

	/**
	* @see include
	* @param elements Elements to include into the array at [index].
	**/
	include(elements: T[], index?: number): T[];

	/**
	* Searches the array and returns the first index where <search> occurs, or -1 if the element is not found.
	* @method indexOf(<search>, [fromIndex])
	* @param search Element to search for in the array.
	* @param fromIndex Index to start searching from, default = 0.
	* @returns Index of <search> or -1 if <search> is not found.
	* @extra [fromIndex] is the index from which to begin the search.
	*        This method performs a simple strict equality comparison on <search>.
	*        It does not support enhanced functionality such as searching
	*        the contents against a regex, callback, or deep comparison of objects.
	*        For such functionality, use the %findIndex% method instead.
	* @example
	*   [1,2,3].indexOf(3)           -> 1
	*   [1,2,3].indexOf(7)           -> -1
	* @note Already defined in lib.d.ts.
	**/
	//indexOf(search: T, fromIndex?: number): number;

	/**
	* Returns an array containing the elements all arrays have in common.
	* @param args Elements to intersect with.
	* @returns An array containing the intersecting elements.
	* @extra This method will also correctly operate on arrays of objects.
	* @example
	*   [1,3,5].intersect([5,7,9])   -> [5]
	*   ['a','b'].intersect('b','c') -> ['b']
	**/
	intersect(...args: T[]): T[];

	/***
	* Returns true if the array is empty.
	* @returns True if the array is empty, otherwise false.
	* @extra This is true if the array has a length of zero, or contains
	*        only %undefined%, %null%, or %NaN%.
	* @example
	*   [].isEmpty()               -> true
	*   [null,undefined].isEmpty() -> true
	***/
	isEmpty(): boolean;

	/**
	* Returns the last element(s) in the array.
	* @method last([num] = 1)
	* @returns The last element in the array, if [num] is present then it returns an array of the last [num] elements.
	* @extra When <num> is passed, returns the last <num> elements in the array.
	* @example
	*   [1,2,3].last()        -> 3
	*   [1,2,3].last(2)       -> [2,3]
	**/
	last(): T;

	/**
	* @see last
	* @param num The number of elements to return.
	**/
	last(num: number): T[];

	/**
	* Searches the array and returns the last index where <search> occurs,
	* or -1 if the element is not found.
	* @param search The element to search for.
	* @param fromIndex Start the search from this index, default = Array.length.
	* @returns The last index of <search> or -1 if <search> is not found.
	* @extra [fromIndex] is the index from which to begin the search.
	*        This method performs a simple strict equality comparison on <search>.
	* @example
	*   [1,2,1].lastIndexOf(1)                 -> 2
	*   [1,2,1].lastIndexOf(7)                 -> -1
	**/
	lastIndexOf(search: any, fromIndex?: number): number;

	/**
	* Returns the elements in the array with the least
	*        commonly occuring value.
	* @method least([map])
	* @param map Property on elements in the array.
	* @returns Array
	* @extra [map] may be a function mapping the value to be checked or a
	*        string acting as a shortcut.
	* @example
	*   [3,2,2].least()                   -> [3]
	*   ['fe','fo','fum'].least('length') -> ['fum']
	*   [{age:35,name:'ken'},{age:12,name:'bob'},{age:12,name:'ted'}].least(function(n) {
	*     return n.age;
	*   });                               -> [{age:35,name:'ken'}]
	**/
	least(map: string): T[];

	/**
	* @see least
	* @param map Callback to retrieve the 'least' property to compare elements against.
	**/
	least<U>(map: (n: T) => U): T[];

	/**
	* Maps the array to another array containing the values that
	*        are the result of calling <map> on each element.
	* @param map Property on each element in the array or callback function.
	* @param scope This pointer in <map> callback.
	* @returns Mapped array.
	* @extra [scope] is the %this% object. In addition to providing this method
	*        for browsers that don't support it natively, this enhanced method
	*        also directly accepts a string, which is a shortcut for a function
	*        that gets that property (or invokes a function) on each element.
	* @example
	*   [1,2,3].map(function(n) {
	*     return n * 3;
	*   });                                  -> [3,6,9]
	*   ['one','two','three'].map(function(n) {
	*     return n.length;
	*   });                                  -> [3,3,5]
	*   ['one','two','three'].map('length')  -> [3,3,5]
	**/
	map<U>(map: string, scope?: any): U[];

	/**
	* @see map
	* @param map Callback function to map each element in the array.
	**/
	map<U>(map: (n: T) => U, scope?: any): U[];

	/**
	* Returns the element in the array with the greatest value.
	* @method max([map], [all] = false)
	* @param map Property on each element in the array or callback function.
	* @returns Maximum element in the array.
	* @extra [map] may be a function mapping the value to be checked or a string
	*        acting as a shortcut. If [all] is true, will return all max values
	*        in an array.
	* @example
	*   [1,2,3].max()                          -> 3
	*   ['fee','fo','fum'].max('length')       -> 'fee'
	*   ['fee','fo','fum'].max('length', true) -> ['fee']
	*   [{a:3,a:2}].max(function(n) {
	*     return n['a'];
	*   });                              -> {a:3}
	**/
	max(map?: string): T;

	/**
	* @see max
	* @param If true return all max values in the array, default = false.
	* @return All max values in the array.
	**/
	max(map: string, all: boolean): T[];

	/**
	* @see max
	* @param map Callback function to determine the max value of each element in the array.
	**/
	max<U>(map: (n: T) => U): T;

	/**
	* @see max
	**/
	max<U>(map: (n: T) => U, all: boolean): T[];

	/***
	* Returns the element in the array with the lowest value.
	* @param map Property on each element in the array or callback.
	* @returns Minimum element in the array.
	* @extra [map] may be a function mapping the value to be checked or a string acting as a shortcut. If [all] is true, will return all min values in an array.
	* @example
	*   [1,2,3].min()                          -> 1
	*   ['fee','fo','fum'].min('length')       -> 'fo'
	*   ['fee','fo','fum'].min('length', true) -> ['fo']
	*   ['fee','fo','fum'].min(function(n) {
	*     return n.length;
	*   });                              -> ['fo']
	*   [{a:3,a:2}].min(function(n) {
	*     return n['a'];
	*   });                              -> [{a:2}]
	**/
	min(map?: string): T;

	/**
	* @see min If true return all min values in the array, default = false.
	* @param all
	**/
	min(map: string, all: boolean): T[];

	/**
	* @see min
	* @param map Callback function to determine the min value of each element in the array.
	**/
	min<U>(map: (n: T) => U): T;

	/**
	* @see min
	**/
	min<U>(map: (n: T) => U, all: boolean): T[];

	/**
	* Returns the elements in the array with the most commonly occuring value.
	* @param map Property on each element in the array or 
	* @returns Array of elements that have the most common property.
	* @extra [map] may be a function mapping the value to be checked or a string
	*              acting as a shortcut.
	* @example
	*   [3,2,2].most()                   -> [2]
	*   ['fe','fo','fum'].most('length') -> ['fe','fo']
	*   [{age:35,name:'ken'},{age:12,name:'bob'},{age:12,name:'ted'}].most(function(n) {
	*     return n.age;
	*   });                              -> [{age:12,name:'bob'},{age:12,name:'ted'}]
	**/
	most(map?: string): T[];

	/**
	* @see most
	* @param map Callback function to determine the element that contains the most commonly occuring value.
	**/
	most<U>(map: (n: T) => U): T[];

	/**
	* Returns true if none of the elements in the array match <f>.
	* @param f Value to see if it exists in the array.
	* @returns True if none of the values match <f>, false if one or more match <f>.
	* @extra <f> will match a string, number, array, object, or alternately test
	*        against a function or regex. This method implements @array_matching.
	* @example
	*
	*   [1,2,3].none(5)         -> true
	*   ['a','b','c'].none(/b/) -> false
	*   [{a:1},{b:2}].none(function(n) {
	*     return n['a'] > 1;
	*   });                     -> true
	**/
	none(f: T): boolean;

	/**
	* @see none
	* @param f Callback function to determine if none of the elements in the array contain a certain value.
	**/
	none(f: (n: T) => boolean): boolean;

	/***
	* Returns a copy of the array with the elements randomized.
	* @returns Copy of the array with the elements in a random order.
	* @extra Uses Fisher-Yates algorithm.
	* @example
	*   [1,2,3,4].randomize()  -> [?,?,?,?]
	***/
	randomize(): T[];

	/**
	* Reduces the array to a single result.
	* @param fn Reduce function callback.
	* @param init First argument to the callback if present.
	* @returns Reduced value of the entire array.
	* @extra If [init] is passed as a starting value, that value will be passed
	*        as the first argument to the callback. The second argument will be
	*        the first element in the array. From that point, the result of the
	*        callback will then be used as the first argument of the next
	*        iteration. This is often refered to as "accumulation", and [init]
	*        is often called an "accumulator". If [init] is not passed, then
	*         <fn> will be called n - 1 times, where n is the length of the array.
	*        In this case, on the first iteration only, the first argument will
	*        be the first element of the array, and the second argument will be
	*        the second. After that callbacks work as normal, using the result
	*        of the previous callback as the first argument of the next. This
	*        method is only provided for those browsers that do not support it
	*        natively.
	* @example
	*   [1,2,3,4].reduce(function(a, b) {
	*     return a - b;
	*   });
	*   [1,2,3,4].reduce(function(a, b) {
	*     return a - b;
	*   }, 100);
	**/
	reduce(fn: (a: T, b: T) => T, init: T): T;

	/**
	* Identical to %Array#reduce%, but operates on the elements in reverse order.
	* @param fn Reduce function callback.
	* @param init First argument to the callback if present.
	* @returns Reduced right value of the entire array.
	* @extra This method is only provided for those browsers that do not support
	*        it natively.
	* @example
	*   [1,2,3,4].reduceRight(function(a, b) {
	*     return a - b;
	*   });
	**/
	reduceRight(fn: (a: T, b: T) => T, init: T): T;

	/**
	* Removes any element in the array that matches [f1], [f2], etc.
	* @param args Elements that should be removed from the array.
	* @returns The array with <args> elements removed.
	* @extra Will match a string, number, array, object, or alternately test
	*        against a function or regex. This method will change the array!
	*        Use %exclude% for a non-destructive alias. This method implements
	*        @array_matching.
	* @example
	*   [1,2,3].remove(3)         -> [1,2]
	*   ['a','b','c'].remove(/b/) -> ['a','c']
	*   [{a:1},{b:2}].remove(function(n) {
	*     return n['a'] == 1;
	*   });                       -> [{b:2}]
	**/
	remove(...args: T[]): T[];

	/**
	* @see remove
	* @param fn Callback function to check if elements should be removed.
	**/
	remove(fn: (n: T) => boolean): T[];

	/**
	* Removes element at <start>. If [end] is specified, removes the range
	*        between <start> and [end]. This method will change the array!
	*        If you don't intend the array to be changed use %clone% first.
	* @param start Starting index.
	* @param end Stop index, default = Array.length.
	* @returns Subarray with elements <start> to [end] removed.
	* @example
	*   ['a','b','c'].removeAt(0) -> ['b','c']
	*   [1,2,3,4].removeAt(1, 3)  -> [1]
	**/
	removeAt(start: number, end?: number): T[];

	/**
	* Returns a random element from the array.
	* @returns Single random element in the array.
	* @extra If [num] is passed, will return [num] samples from the array.
	* @example
	*   [1,2,3,4,5].sample()  -> // Random element
	*   [1,2,3,4,5].sample(3) -> // Array of 3 random elements
	**/
	sample(): T;

	/**
	* @see sample
	* @param num Grab this many random elements in the array.
	* @return <num> random elements in the array.
	**/
	sample(num: number): T[];

	/***
	* Returns true if any element in the array matches <f>.
	* @method some(<f>, [scope])
	* @param f Element to match or callback function.
	* @param scope this object in the callback.
	* @returns Returns true if any element in the array matchs <f>.
	* @extra [scope] is the %this% object. %any% is provided as an alias.
	*        In addition to providing this method for browsers that don't
	*        support it natively, this method also implements @array_matching.
	* @example
	*   ['a','b','c'].some(function(n) {
	*     return n == 'a';
	*   });
	*   ['a','b','c'].some(function(n) {
	*     return n == 'd';
	*   });
	*   ['a','b','c'].some('a')   -> true
	*   [{a:2},{b:5}].some({a:2}) -> true
	**/
	some(f: T, scope?: any): boolean;

	/**
	* @see some
	**/
	some(f: (n: T) => boolean, scope?: any): boolean;

	/**
	* Sorts the array by <map>.
	* @param map Property on each element in the array or map callback function.
	* @param desc True to sort the array in descending order, default = false.
	* @returns Sorted array.
	* @extra <map> may be a function, a string acting as a shortcut, or blank
	*        (direct comparison of array values). [desc] will sort the array in
	*        descending order. When the field being sorted on is a string, the
	*        resulting order will be determined by an internal collation algorithm
	*        that is optimized for major Western languages, but can be customized.
	*        For more information see @array_sorting.
	* @example
	*   ['world','a','new'].sortBy('length')       -> ['a','new','world']
	*   ['world','a','new'].sortBy('length', true) -> ['world','new','a']
	*   [{age:72},{age:13},{age:18}].sortBy(function(n) {
	*     return n.age;
	*   });                                        -> [{age:13},{age:18},{age:72}]
	**/
	sortBy(map: string, desc?: boolean): T[];

	/**
	* @see sortBy
	**/
	sortBy<U>(fn: (n: T) => U, desc?: boolean): T[];

	/**
	* Subtracts from the array all elements in [a1], [a2], etc.
	* @param args Elements to remove from the array.
	* @returns Array with <args> removed.
	* @extra This method will also correctly operate on arrays of objects.
	* @example
	*   [1,3,5].subtract([5,7,9])   -> [1,3]
	*   [1,3,5].subtract([3],[5])   -> [1]
	*   ['a','b'].subtract('b','c') -> ['a']
	**/
	subtract(...args: T[]): T[];
	
	/**
	* @see subtract
	**/
	subtract(args: T[]): T[];
	
	/**
	* Sums all values in the array.
	* @param map Property on each element in the array or callback function to sum up the elements.
	* @returns The sum of all elements in the array.
	* @extra [map] may be a function mapping the value to be summed or a string
	*        acting as a shortcut.
	* @example
	*   [1,2,2].sum()                           -> 5
	*   [{age:35},{age:12},{age:12}].sum(function(n) {
	*     return n.age;
	*   });                                     -> 59
	*   [{age:35},{age:12},{age:12}].sum('age') -> 59
	**/
	sum(map: string): number;

	/**
	* @see sum
	**/
	sum(map: (n: T) => number): number;

	/**
	* Returns a slice of the array up to <index>.
	* @param index Slick the array up to this index.
	* @returns Slice of the array from 0 to <index>.
	* @example
	*   [1,2,3].to(1)  -> [1]
	*   [1,2,3].to(2)  -> [1,2]
	**/
	to(index: number): any[];

	/**
	* Returns an array containing all elements in all arrays with duplicates removed.
	* @method union([a1], [a2], ...)
	* @param array 
	* @returns Union between the original array and <array>.
	* @extra This method will also correctly operate on arrays of objects.
	* @example
	*   [1,3,5].union([5,7,9])     -> [1,3,5,7,9]
	*   ['a','b'].union(['b','c']) -> ['a','b','c']
	**/
	union(array: T[]): T[];

	/**
	* @see union
	* @param args Elements to create a union with.
	* @return Union between the original array and <args>
	**/
	union(...args: T[]): T[];

	/**
	* Removes all duplicate elements in the array.
	* @param map Property on each element in the array or callback function to pick a property on the element.
	* @returns Array with only unique elements.
	* @extra [map] may be a function mapping the value to be uniqued on or a
	*        string acting as a shortcut. This is most commonly used when you
	*        have a key that ensures the object's uniqueness, and don't need to
	*        check all fields. This method will also correctly operate on arrays
	*        of objects.
	* @example
	*   [1,2,2,3].unique()                 -> [1,2,3]
	*   [{foo:'bar'},{foo:'bar'}].unique() -> [{foo:'bar'}]
	*   [{foo:'bar'},{foo:'bar'}].unique(function(obj){
	*     return obj.foo;
	*   }); -> [{foo:'bar'}]
	*   [{foo:'bar'},{foo:'bar'}].unique('foo') -> [{foo:'bar'}]
	**/
	unique(map?: string): T[];

	/**
	* @see unique
	* @param fn Callback to pluck the property to check for uniqueness.
	**/
	unique<U>(fn: (obj: T) => U): T[];

	/**
	* Merges multiple arrays together.
	* @param arrays Arrays to zip together.
	* @returns Zipped arrays.
	* @extra This method "zips up" smaller arrays into one large whose elements
	*        are "all elements at index 0", "all elements at index 1", etc.
	*        Useful when you have associated data that is split over separated
	*        arrays. If the arrays passed have more elements than the original
	*        array, they will be discarded. If they have fewer elements, the
	*        missing elements will filled with %null%.
	* @example
	*   [1,2,3].zip([4,5,6])                                       -> [[1,2], [3,4], [5,6]]
	*   ['Martin','John'].zip(['Luther','F.'], ['King','Kennedy']) -> [['Martin','Luther','King'], ['John','F.','Kennedy']]
	* @note removed because of TSC bug https://typescript.codeplex.com/workitem/1143?FocusElement=CommentTextBox
	**/
	//zip(...arrays: T[]): T[][];
}

interface ObjectStatic {

	/**
	* Creates a new object, equivalent to %new Object()% or %{}%, but with extended methods.
	* @param obj , default = {}.
	* @returns Extended object.
	* @extra See extended objects for more.
	* @example
	*   Object.extended()
	*   Object.extended({ happy:true, pappy:false }).keys() -> ['happy','pappy']
	*   Object.extended({ happy:true, pappy:false }).values() -> [true, false]
	**/
	extended(obj?: any): any;

	/**
	* Converts the query string of a URL into an object.
	* @method Object.fromQueryString(<str>, [deep] = true)
	* @param str Query string to convert into an object.
	* @param deep If false the conversion will only accept shallow params, default = true.
	* @returns Object generated from the <str>.
	* @extra If [deep] is %false%, conversion will only accept shallow params (ie. no object or arrays with %[]% syntax) as these are not universally supported.
	* @example
	*   Object.fromQueryString('foo=bar&broken=wear') -> { foo: 'bar', broken: 'wear' }
	*   Object.fromQueryString('foo[]=1&foo[]=2')     -> { foo: [1,2] }
	**/
	fromQueryString<T extends {}>(str: string, deep?: boolean): T;
	
	/**
	* Returns true if <obj> is an object of that type.
	* @method Object.is[Type](<obj>)
	* @param obj Object to check if it is of type [Type].
	* @returns True if <obj> is of type [Type].
	* @extra %isObject% will return false on anything that is not an object
	*        literal, including instances of inherited classes. Note also
	*        that %isNaN% will ONLY return true if the object IS %NaN%.
	*        It does not mean the same as browser native %isNaN%, which returns
	*        true for anything that is "not a number".
	* @set
	*   isArray
	*   isObject
	*   isBoolean
	*   isDate
	*   isFunction
	*   isNaN
	*   isNumber
	*   isString
	*   isRegExp
	* @example
	*   Object.isArray([1,2,3])            -> true
	*   Object.isDate(3)                   -> false
	*   Object.isRegExp(/wasabi/)          -> true
	*   Object.isObject({ broken:'wear' }) -> true
	**/
	isArray(obj: any): boolean;

	/**
	* @see isArray
	**/
	isObject(obj: any): boolean;

	/**
	* @see isArray
	**/
	isBoolean(obj: any): boolean;

	/**
	* @see isArray
	**/
	isDate(obj: any): boolean;

	/**
	* @see isArray
	**/
	isFunction(obj: any): boolean;

	/**
	* @see isArray
	**/
	isNaN(obj: any): boolean;

	/**
	* @see isArray
	**/
	isNumber(obj: any): boolean;

	/**
	* @see isArray
	**/
	isString(obj: any): boolean;

	/**
	* @see isArray
	**/
	isRegExp(obj: any): boolean;

	/**
	* Converts the object into a query string. Accepts deep nested objects and arrays.
	* If namespace is passed, it will be prefixed to all param names.
	* @param obj Object to convert to a query string.
	* @param namespace Namespace to prefix properties with in the query string.
	* @return A query string generated from `obj` and `namespace`.
	**/
	toQueryString(obj: any, namespace?: string): string;

	/**
	* Creates a clone (copy) of <obj>.
	* @method clone(<obj> = {}, [deep] = false)
	* @param obj Object to clone.
	* @param deep If true then deep clone, default = false.
	* @returns Cloned object.
	* @extra Default is a shallow clone, unless [deep] is true. %clone%
	*        is available as an instance method on extended objects.
	* @example
	*   Object.clone({foo:'bar'})            -> { foo: 'bar' }
	*   Object.clone()                       -> {}
	*   Object.extended({foo:'bar'}).clone() -> { foo: 'bar' }
	**/
	clone<T extends {}>(obj?: T, deep?: boolean): T;

	/**
	* Enumerable methods in the Array package are also available to
	*        the Object class. They will perform their normal operations for
	*        every property in <obj>.
	* @method [enumerable](<obj>)
	* @returns Boolean
	* @extra In cases where a callback is used, instead of %element, index%,
	*        the callback will instead be passed %key, value%. Enumerable methods
	*        are also available to extended objects as instance methods.
	* @set
	*   each
	*   map
	*   any
	*   all
	*   none
	*   count
	*   find
	*   findAll
	*   reduce
	*   isEmpty
	*   sum
	*   average
	*   min
	*   max
	*   least
	*   most
	* @example
	*   Object.any({foo:'bar'}, 'bar')            -> true
	*   Object.extended({foo:'bar'}).any('bar')   -> true
	*   Object.isEmpty({})                        -> true
	*   Object.map({ fred: { age: 52 } }, 'age'); -> { fred: 52 }
	**/
	map<T, U>(obj: T, map: string): U;

	/**
	* @see map
	**/
	map<T, U>(obj: T, map: (key: string, value: any) => any): U;

	/**
	* @see map
	**/
	any(obj: any, map: string): boolean;

	/**
	* @see map
	**/
	any(obj: any, map: (key: string, value: any) => boolean): boolean;

	/**
	* @see map
	**/
	all(obj: any, map: string): boolean;

	/**
	* @see map
	**/
	all(obj: any, map: (key: string, value: any) => boolean): boolean;

	/**
	* @see map
	**/
	none(obj: any, map: string): boolean;

	/**
	* @see map
	**/
	none(obj: any, map: (key: string, value: any) => boolean): boolean;

	/**
	* @see map
	**/
	count(obj: any, map: string): number;

	/**
	* @see map
	**/
	count(obj: any, map: (key: string, value: any) => boolean): number;

	/**
	* @see map
	**/
	find(obj: any, map: string): any;

	/**
	* @see map
	**/
	find(obj: any, map: (key: string, value: any) => boolean): any;

	/**
	* @see map
	**/
	findAll(obj: any, map: string): any[];

	/**
	* @see map
	**/
	findAll(obj: any, map: (key: string, value: any) => boolean): any[];

	/**
	* @see map
	**/
	reduce(obj: any, map: string, init?: any): any;

	/**
	* @see map
	**/
	reduce(obj: any, map: (key: string, value: any) => any, init?: any): any;

	/**
	* @see map
	**/
	isEmpty(obj: any): boolean;

	/**
	* @see map
	**/
	sum(obj: any, map: string): number;

	/**
	* @see map
	**/
	sum(obj: any, map: (key: string, value: any) => number): number;

	/**
	* @see map
	**/
	average(obj: any, map: string): number;

	/**
	* @see map
	**/
	average(obj: any, map: (key: string, value: any) => number): number;

	/**
	* @see map
	**/
	min(obj: any, map: string): any;

	/**
	* @see map
	**/
	min(obj: any, map: (key: string, value: any) => any): any;

	/**
	* @see map
	**/
	max(obj: any, map: string): any;

	/**
	* @see map
	**/
	max(obj: any, map: (key: string, value: any) => any): any;

	/**
	* @see map
	**/
	least(obj: any, map: string): any;

	/**
	* @see map
	**/
	least(obj: any, map: (key: string, value: any) => any): any;

	/**
	* @see map
	**/
	most(obj: any, map: string): any;

	/**
	* @see map
	**/
	most(obj: any, map: (key: string, value: any) => any): any;

	/**
	* Returns true if <a> and <b> are equal.
	* @param a First object to compare.
	* @param b Second object to compare.
	* @returns True if the objects are equal, otherwise false.
	* @extra %equal% in Sugar is "egal", meaning the values are equal
	*        if they are "not observably distinguishable". Note that on
	*        extended objects the name is %equals% for readability.
	* @example
	*   Object.equal({a:2}, {a:2}) -> true
	*   Object.equal({a:2}, {a:3}) -> false
	*   Object.extended({a:2}).equals({a:3}) -> false
	**/
	equal(a: any, b: any): boolean;

	/**
	* Checks if <obj> has <key> using hasOwnProperty from Object.prototype.
	* @param obj Object to check for the property <key>.
	* @param key Property to check to see if it exists on <obj>.
	* @returns True if <key> exists on <obj>, otherwise false.
	* @extra This method is considered safer than %Object#hasOwnProperty% when
	*        using objects as hashes. See 
	*        http://www.devthought.com/2012/01/18/an-object-is-not-a-hash/ 
	*        for more.
	* @example
	*   Object.has({ foo: 'bar' }, 'foo') -> true
	*   Object.has({ foo: 'bar' }, 'baz') -> false
	*   Object.has({ hasOwnProperty: true }, 'foo') -> false
	**/
	has(obj: any, key: string): boolean;

	/**
	* Returns an array containing the keys in <obj>. Optionally calls [fn] for each key.
	* @param obj Retreive all keys/properties from this object.
	* @param fn Optional callback for each key/value pair.
	* @returns Array of each property on <obj>.
	* @extra This method is provided for browsers that don't support it natively,
	*        and additionally is enhanced to accept the callback [fn]. Returned
	*        keys are in no particular order. %keys% is available as an instance
	*        method on extended objects.
	* @example
	*   Object.keys({ broken: 'wear' }) -> ['broken']
	*   Object.keys({ broken: 'wear' }, function(key, value) {
	*     // Called once for each key.
	*   });
	*   Object.extended({ broken: 'wear' }).keys() -> ['broken']
	**/
	keys(obj: any, fn?: (key: string, value: any) => void ): string[];

	/**
	* Merges all the properties of <source> into <target>.
	* @param target
	* @param source
	* @param deep If true then deep merge, default = false.
	* @param resolve If false then properties of source are used in the merge, default = true.
	* @returns Merged object
	* @extra Merges are shallow unless [deep] is %true%. Properties of <source>
	*        will win in the case of conflicts, unless [resolve] is %false%.
	*        [resolve] can also be a function that resolves the conflict.
	*        In this case it will be passed 3 arguments, %key%, %targetVal%,
	*        and %sourceVal%, with the context set to <source>. This will allow
	*        you to solve conflict any way you want, ie. adding two numbers
	*        together, etc. %merge% is available as an instance method on
	*        extended objects.
	* @example
	*   Object.merge({a:1},{b:2}) -> { a:1, b:2 }
	*   Object.merge({a:1},{a:2}, false, false) -> { a:1 }
	+   Object.merge({a:1},{a:2}, false, function(key, a, b) {
	*     return a + b;
	*   }); -> { a:3 }
	*   Object.extended({a:1}).merge({b:2}) -> { a:1, b:2 }
	**/
	merge(target: any, source: any, deep?: boolean, resolve?: boolean): any;

	/**
	* @see merge
	* @param resolve Callback to resolve conflicts in the merge.
	**/
	merge(target: any, source: any, deep?: boolean, resolve?: (key: string, targetVal: any, sourceVal: any) => any): any;

	/**
	* Builds a new object containing all values except those specified in find.
	* When find is a string, that single key will be rejected. It can also be a regex,
	* rejecting any key that matches, or an object which will match if the key also
	* exists in that object, effectively "subtracting" that object. Multiple selections
	* may also be passed as an array or directly as enumerated arguments. reject is
	* available as an instance method on extended objects.
	* @param obj Object to remove the properties in `find`.
	* @param find The property (string), properties (object) or RegExp to remove from `obj`.
	* @return Modified `obj` with `find` properties removed.
	**/
	reject(obj: any, ...find: any[]): any;

	/**
	* Builds a new object containing the values specified in find. When find is a string,
	* that single key will be selected. It can also be a regex, selecting any key that
	* matches, or an object which will match if the key also exists in that object,
	* effectively doing an "intersect" operation on that object. Multiple selections
	* may also be passed as an array or directly as enumerated arguments. select is
	* available as an instance method on extended objects.
	* @param obj Object to keep the properties in `find`.
	* @param find The property (string), properties (object) or RegExp to keep on `obj`.
	* @return Modified `obj` with only the `find` properties remaining.
	**/
	select(obj: any, ...find: any[]): any;


	/**
	* Returns the number of properties in <obj>.
	* @param obj Object to determine the number of properties on.
	* @returns The number of properties on <obj>.
	* @extra %size% is available as an instance method on extended objects.
	* @example
	*   Object.size({ foo: 'bar' }) -> 1
	**/
	size(obj: Object): number;

	/**
	* Runs <fn> and returns <obj>.
	* @param obj Object to tap.
	* @param fn Function to tap on <obj>.
	* @returns <obj>
	* @extra  A string can also be used as a shortcut to a method. This method
	*         is used to run an intermediary function in the middle of method
	*         chaining. As a standalone method on the Object class it doesn't
	*         have too much use. The power of %tap% comes when using extended
	*         objects or modifying the Object prototype with Object.extend().
	* @example
	*   Object.extend();
	*   [2,4,6].map(Math.exp).tap(function(arr) {
	*     arr.pop()
	*   });
	*   [2,4,6].map(Math.exp).tap('pop').map(Math.round); ->  [7,55]
	**/
	tap(obj: any, fn: string): any;

	/**
	* @see tap
	**/
	tap(obj: any, fn: (...args: any[]) => any): any;

	/**
	* Returns an array containing the values in <obj>.  Optionally calls [fn] for each value.
	* @param obj Object to retrieve all values from.
	* @param fn Optional callback for each value on <obj>.
	* @returns Array
	* @extra Returned values are in no particular order. %values% is available
	*        as an instance method on extended objects.
	* @example
	*   Object.values({ broken: 'wear' }) -> ['wear']
	*   Object.values({ broken: 'wear' }, function(value) {
	*     // Called once for each value.
	*   });
	*   Object.extended({ broken: 'wear' }).values() -> ['wear']
	**/
	values(obj: any, fn?: (value: any) => any): any[];

	/**
	* Watches a property of <obj> and runs <fn> when it changes.
	* @param obj Object to watch.
	* @param prop Property to watch on <obj>
	* @param fn Callback function when <prop> changes on <obj>.
	* @extra <fn> is passed three arguments: the property <prop>, the old value,
	*        and the new value. The return value of [fn] will be set as the new
	*        value. This method is useful for things such as validating or cleaning
	*        the value when it is set. Warning: this method WILL NOT work in
	*        browsers that don't support %Object.defineProperty%. This notably
	*        includes IE 8 and below, and Opera. This is the only method in Sugar
	*        that is not fully compatible with all browsers. %watch% is available
	*        as an instance method on extended objects.
	* @example
	*
	*   Object.watch({ foo: 'bar' }, 'foo', function(prop, oldVal, newVal) {
	*     // Will be run when the property 'foo' is set on the object.
	*   });
	*   Object.extended().watch({ foo: 'bar' }, 'foo', function(prop, oldVal, newVal) {
	*     // Will be run when the property 'foo' is set on the object.
	*   });
	*
	**/
	watch(obj: any, prop: string, fn: (prop?: string, oldVal?: any, newVal?: any) => any): void;
}

interface Object {

	/**
	* Creates a new object, equivalent to %new Object()% or %{}%, but with extended methods.
	* @returns Extended object.
	* @extra See extended objects for more.
	* @example
	*   Object.extended()
	*   Object.extended({ happy:true, pappy:false }).keys() -> ['happy','pappy']
	*   Object.extended({ happy:true, pappy:false }).values() -> [true, false]
	**/
	extended(): Object;

	/**
	* Returns true if <obj> is an object of that type.
	* @method Object.is[Type](<obj>)
	* @returns True if <obj> is of type [Type].
	* @extra %isObject% will return false on anything that is not an object
	*        literal, including instances of inherited classes. Note also
	*        that %isNaN% will ONLY return true if the object IS %NaN%.
	*        It does not mean the same as browser native %isNaN%, which returns
	*        true for anything that is "not a number".
	* @set
	*   isArray
	*   isObject
	*   isBoolean
	*   isDate
	*   isFunction
	*   isNaN
	*   isNumber
	*   isString
	*   isRegExp
	* @example
	*   Object.isArray([1,2,3])            -> true
	*   Object.isDate(3)                   -> false
	*   Object.isRegExp(/wasabi/)          -> true
	*   Object.isObject({ broken:'wear' }) -> true
	**/
	isArray(): boolean;

	/**
	* @see isArray
	**/
	isObject(): boolean;

	/**
	* @see isArray
	**/
	isBoolean(): boolean;

	/**
	* @see isArray
	**/
	isDate(): boolean;

	/**
	* @see isArray
	**/
	isFunction(): boolean;

	/**
	* @see isArray
	**/
	isNaN(): boolean;

	/**
	* @see isArray
	**/
	isNumber(): boolean;

	/**
	* @see isArray
	**/
	isString(): boolean;

	/**
	* @see isArray
	**/
	isRegExp(): boolean;

	/**
	* Converts the object into a query string. Accepts deep nested objects and arrays.
	* If namespace is passed, it will be prefixed to all param names.
	* @param obj Object to convert to a query string.
	* @param namespace Namespace to prefix properties with in the query string.
	* @return A query string generated from `obj` and `namespace`.
	**/
	toQueryString(namespace?: string): string;

	/**
	* Creates a clone (copy) of <obj>.
	* @param deep If true then deep clone, default = false.
	* @returns Cloned object.
	* @extra Default is a shallow clone, unless [deep] is true. %clone%
	*        is available as an instance method on extended objects.
	* @example
	*   Object.clone({foo:'bar'})            -> { foo: 'bar' }
	*   Object.clone()                       -> {}
	*   Object.extended({foo:'bar'}).clone() -> { foo: 'bar' }
	**/
	clone(deep?: boolean): any;

	/**
	* Enumerable methods in the Array package are also available to
	*        the Object class. They will perform their normal operations for
	*        every property in <obj>.
	* @method [enumerable](<obj>)
	* @returns Boolean
	* @extra In cases where a callback is used, instead of %element, index%,
	*        the callback will instead be passed %key, value%. Enumerable methods
	*        are also available to extended objects as instance methods.
	* @set
	*   each
	*   map
	*   any
	*   all
	*   none
	*   count
	*   find
	*   findAll
	*   reduce
	*   isEmpty
	*   sum
	*   average
	*   min
	*   max
	*   least
	*   most
	* @example
	*   Object.any({foo:'bar'}, 'bar')            -> true
	*   Object.extended({foo:'bar'}).any('bar')   -> true
	*   Object.isEmpty({})                        -> true
	*   Object.map({ fred: { age: 52 } }, 'age'); -> { fred: 52 }
	**/
	map<U>(map: string): U;

	/**
	* @see map
	**/
	map<U>(map: (key: string, value: any) => any): U;

	/**
	* @see map
	**/
	any(map: string): boolean;

	/**
	* @see map
	**/
	any(map: (key: string, value: any) => boolean): boolean;

	/**
	* @see map
	**/
	all(map: string): boolean;

	/**
	* @see map
	**/
	all(map: (key: string, value: any) => boolean): boolean;

	/**
	* @see map
	**/
	none(map: string): boolean;

	/**
	* @see map
	**/
	none(map: (key: string, value: any) => boolean): boolean;

	/**
	* @see map
	**/
	count(map: string): number;

	/**
	* @see map
	**/
	count(map: (key: string, value: any) => boolean): number;

	/**
	* @see map
	**/
	find(map: string): any;

	/**
	* @see map
	**/
	find(map: (key: string, value: any) => boolean): any;

	/**
	* @see map
	**/
	findAll(map: string): any[];

	/**
	* @see map
	**/
	findAll(map: (key: string, value: any) => boolean): any[];

	/**
	* @see map
	**/
	reduce(map: string, init?: any): any;

	/**
	* @see map
	**/
	reduce(map: (key: string, value: any) => any, init?: any): any;

	/**
	* @see map
	**/
	isEmpty(): boolean;

	/**
	* @see map
	**/
	sum(map: string): number;

	/**
	* @see map
	**/
	sum(map: (key: string, value: any) => number): number;

	/**
	* @see map
	**/
	average(map: string): number;

	/**
	* @see map
	**/
	average(map: (key: string, value: any) => number): number;

	/**
	* @see map
	**/
	min(map: string): any;

	/**
	* @see map
	**/
	min(map: (key: string, value: any) => any): any;

	/**
	* @see map
	**/
	max(map: string): any;

	/**
	* @see map
	**/
	max(map: (key: string, value: any) => any): any;

	/**
	* @see map
	**/
	least(map: string): any;

	/**
	* @see map
	**/
	least(map: (key: string, value: any) => any): any;

	/**
	* @see map
	**/
	most(map: string): any;

	/**
	* @see map
	**/
	most(map: (key: string, value: any) => any): any;

	/**
	* Returns true if <a> and <b> are equal.
	* @param b Compare to this object
	* @returns True if the objects are equal, otherwise false.
	* @extra %equal% in Sugar is "egal", meaning the values are equal
	*        if they are "not observably distinguishable". Note that on
	*        extended objects the name is %equals% for readability.
	* @example
	*   Object.equal({a:2}, {a:2}) -> true
	*   Object.equal({a:2}, {a:3}) -> false
	*   Object.extended({a:2}).equals({a:3}) -> false
	**/
	equal(b: any): boolean;

	/**
	* Checks if <obj> has <key> using hasOwnProperty from Object.prototype.
	* @param key Property to check to see if it exists on <obj>.
	* @returns True if <key> exists on <obj>, otherwise false.
	* @extra This method is considered safer than %Object#hasOwnProperty% when
	*        using objects as hashes. See 
	*        http://www.devthought.com/2012/01/18/an-object-is-not-a-hash/ 
	*        for more.
	* @example
	*   Object.has({ foo: 'bar' }, 'foo') -> true
	*   Object.has({ foo: 'bar' }, 'baz') -> false
	*   Object.has({ hasOwnProperty: true }, 'foo') -> false
	**/
	has(key: string): boolean;

	/**
	* Returns an array containing the keys in <obj>. Optionally calls [fn] for each key.
	* @param fn Optional callback for each key/value pair.
	* @returns Array of each property on <obj>.
	* @extra This method is provided for browsers that don't support it natively,
	*        and additionally is enhanced to accept the callback [fn]. Returned
	*        keys are in no particular order. %keys% is available as an instance
	*        method on extended objects.
	* @example
	*   Object.keys({ broken: 'wear' }) -> ['broken']
	*   Object.keys({ broken: 'wear' }, function(key, value) {
	*     // Called once for each key.
	*   });
	*   Object.extended({ broken: 'wear' }).keys() -> ['broken']
	**/
	keys(fn?: (key: string, value: any) => void ): string[];

	/**
	* Merges all the properties of <source> into <target>.
	* @param source
	* @param deep If true then deep merge, default = false.
	* @param resolve If false then properties of source are used in the merge, default = true.
	* @returns Merged object
	* @extra Merges are shallow unless [deep] is %true%. Properties of <source>
	*        will win in the case of conflicts, unless [resolve] is %false%.
	*        [resolve] can also be a function that resolves the conflict.
	*        In this case it will be passed 3 arguments, %key%, %targetVal%,
	*        and %sourceVal%, with the context set to <source>. This will allow
	*        you to solve conflict any way you want, ie. adding two numbers
	*        together, etc. %merge% is available as an instance method on
	*        extended objects.
	* @example
	*   Object.merge({a:1},{b:2}) -> { a:1, b:2 }
	*   Object.merge({a:1},{a:2}, false, false) -> { a:1 }
	+   Object.merge({a:1},{a:2}, false, function(key, a, b) {
	*     return a + b;
	*   }); -> { a:3 }
	*   Object.extended({a:1}).merge({b:2}) -> { a:1, b:2 }
	**/
	merge(source: any, deep?: boolean, resolve?: boolean): any;

	/**
	* @see merge
	* @param resolve Callback to resolve conflicts in the merge.
	**/
	merge(source: any, deep?: boolean, resolve?: (key: string, targetVal: any, sourceVal: any) => any): any;

	/**
	* Builds a new object containing all values except those specified in find.
	* When find is a string, that single key will be rejected. It can also be a regex,
	* rejecting any key that matches, or an object which will match if the key also
	* exists in that object, effectively "subtracting" that object. Multiple selections
	* may also be passed as an array or directly as enumerated arguments. reject is
	* available as an instance method on extended objects.
	* @param find The property (string), properties (object) or RegExp to remove from `obj`.
	* @return Modified `obj` with `find` properties removed.
	**/
	reject(...find: any[]): any;

	/**
	* Builds a new object containing the values specified in find. When find is a string,
	* that single key will be selected. It can also be a regex, selecting any key that
	* matches, or an object which will match if the key also exists in that object,
	* effectively doing an "intersect" operation on that object. Multiple selections
	* may also be passed as an array or directly as enumerated arguments. select is
	* available as an instance method on extended objects.
	* @param find The property (string), properties (object) or RegExp to keep on `obj`.
	* @return Modified `obj` with only the `find` properties remaining.
	**/
	select(...find: any[]): any;


	/**
	* Returns the number of properties in <obj>.
	* @returns The number of properties on <obj>.
	* @extra %size% is available as an instance method on extended objects.
	* @example
	*   Object.size({ foo: 'bar' }) -> 1
	**/
	size(): number;

	/**
	* Runs <fn> and returns <obj>.
	* @param fn Function to tap on <obj>.
	* @returns <obj>
	* @extra  A string can also be used as a shortcut to a method. This method
	*         is used to run an intermediary function in the middle of method
	*         chaining. As a standalone method on the Object class it doesn't
	*         have too much use. The power of %tap% comes when using extended
	*         objects or modifying the Object prototype with Object.extend().
	* @example
	*   Object.extend();
	*   [2,4,6].map(Math.exp).tap(function(arr) {
	*     arr.pop()
	*   });
	*   [2,4,6].map(Math.exp).tap('pop').map(Math.round); ->  [7,55]
	**/
	tap(fn: string): any;

	/**
	* @see tap
	**/
	tap(fn: (...args: any[]) => any): any;

	/**
	* Returns an array containing the values in <obj>.  Optionally calls [fn] for each value.
	* @param fn Optional callback for each value on <obj>.
	* @returns Array
	* @extra Returned values are in no particular order. %values% is available
	*        as an instance method on extended objects.
	* @example
	*   Object.values({ broken: 'wear' }) -> ['wear']
	*   Object.values({ broken: 'wear' }, function(value) {
	*     // Called once for each value.
	*   });
	*   Object.extended({ broken: 'wear' }).values() -> ['wear']
	**/
	values(fn?: (value: any) => any): any[];

	/**
	* Watches a property of <obj> and runs <fn> when it changes.
	* @param obj Object to watch.
	* @param prop Property to watch on <obj>
	* @param fn Callback function when <prop> changes on <obj>.
	* @extra <fn> is passed three arguments: the property <prop>, the old value,
	*        and the new value. The return value of [fn] will be set as the new
	*        value. This method is useful for things such as validating or cleaning
	*        the value when it is set. Warning: this method WILL NOT work in
	*        browsers that don't support %Object.defineProperty%. This notably
	*        includes IE 8 and below, and Opera. This is the only method in Sugar
	*        that is not fully compatible with all browsers. %watch% is available
	*        as an instance method on extended objects.
	* @example
	*
	*   Object.watch({ foo: 'bar' }, 'foo', function(prop, oldVal, newVal) {
	*     // Will be run when the property 'foo' is set on the object.
	*   });
	*   Object.extended().watch({ foo: 'bar' }, 'foo', function(prop, oldVal, newVal) {
	*     // Will be run when the property 'foo' is set on the object.
	*   });
	*
	**/
	watch(prop: string, fn: (prop?: string, oldVal?: any, newVal?: any) => any): void;
}

interface Function {

	/**
	* Creates a function that will execute after [num] calls.
	* @param num Execute the function after this many calls, default = 1.
	* @returns Function that can only execute after it has been called <num> times.
	* @extra %after% is useful for running a final callback after a series of
	*        asynchronous operations, when the order in which the operations will
	*        complete is unknown.
	* @example
	*   var fn = (function() {
	*     // Will be executed once only
	*   }).after(3); fn(); fn(); fn();
	**/
	after(num?: number): Function;

	/**
	* Binds <scope> as the %this% object for the function when it is called.
	*        Also allows currying an unlimited number of parameters.
	* @param scope this object during the function call.
	* @param args Curried parameters.
	* @returns Function with bound 'this' and curried parameters.
	* @extra "currying" means setting parameters ([arg1], [arg2], etc.) ahead of
	*         time so that they are passed when the function is called later.
	*         If you pass additional parameters when the function is actually
	*         called, they will be added will be added to the end of the curried
	*         parameters. This method is provided for browsers that don't support
	*         it internally.
	* @example
	*   (function() {
	*     return this;
	*   }).bind('woof')(); -> returns 'woof'; function is bound with 'woof' as the this object.
	*   (function(a) {
	*     return a;
	*   }).bind(1, 2)();   -> returns 2; function is bound with 1 as the this object and 2 curried as the first parameter
	*   (function(a, b) {
	*     return a + b;
	*   }).bind(1, 2)(3);  -> returns 5; function is bound with 1 as the this object, 2 curied as the first parameter and 3 passed as the second when calling the function
	**/
	bind(scope?: any, ...args: any[]): Function;

	/**
	* Cancels a delayed function scheduled to be run.
	* @returns Function
	* @extra %delay%, %lazy%, %throttle%, and %debounce% can all set delays.
	* @example
	*   (function() {
	*     alert('hay'); // Never called
	*   }).delay(500).cancel();
	**/
	cancel(): Function;

	/**
	* Creates a "debounced" function that postpones its execution until after <ms> milliseconds have passed.
	* @param ms Number of milliseconds to debounce the function.
	* @returns Deboucned function by ms <ms>.
	* @extra This method is useful to execute a function after things have
	*        "settled down". A good example of this is when a user tabs quickly
	*        through form fields, execution of a heavy operation should happen
	*        after a few milliseconds when they have "settled" on a field.
	* @example
	*   var fn = (function(arg1) {
	*     // called once 50ms later
	*   }).debounce(50); fn() fn() fn();
	**/
	debounce(ms: number): Function;

	/**
	* Executes the function after <ms> milliseconds.
	* @param ms Milliseconds to delay execution, default = 0.
	* @param args Additional arguments.
	* @returns Reference to itself.
	* @extra Returns a reference to itself. %delay% is also a way to execute
	*        non-blocking operations that will wait until the CPU is free.
	*        Delayed functions can be canceled using the %cancel% method.
	*        Can also curry arguments passed in after <ms>.
	* @example
	*   (function(arg1) {
	*     // called 1s later
	*   }).delay(1000, 'arg1');
	**/
	delay(ms?: number, ...args: any[]): Function;

	/**
	* Returns a new version of the function which when called will have
	*        some of its arguments pre-emptively filled in, also known as "currying".
	* @param args Pre-filled arguments.
	* @returns Function with pre-filled arguments.
	* @extra Arguments passed to a "filled" function are generally appended to
	*        the curried arguments. However, if %undefined% is passed as any of
	*        the arguments to %fill%, it will be replaced, when the "filled"
	*        function is executed. This allows currying of arguments even when
	*        they occur toward the end of an argument list (the example
	*        demonstrates this much more clearly).
	* @example
	*   var delayOneSecond = setTimeout.fill(undefined, 1000);
	*   delayOneSecond(function() {
	*     // Will be executed 1s later
	*   });
	**/
	fill(...args: any[]): Function;

	/**
	* Creates a lazy function that, when called repeatedly, will queue execution and wait [ms] milliseconds to execute again.
	* @method lazy([ms] = 1, [limit] = Infinity)
	* @param ms Wait this long between successive calls, default = 1.
	* @param limit Maximum number of times the function can execute, default = Infinity.
	* @returns Function
	* @extra Lazy functions will always execute as many times as they are called
	*        up to [limit], after which point subsequent calls will be ignored
	*        (if it is set to a finite number). Compare this to %throttle%, which
	*        will execute only once per [ms] milliseconds. %lazy% is useful when
	*        you need to be sure that every call to a function is executed, but
	*        in a non-blocking manner. Calling %cancel% on a lazy function will
	*       clear the entire queue. Note that [ms] can also be a fraction.
	* @example
	*   (function() {
	*     // Executes immediately.
	*   }).lazy()();
	*   (3).times(function() {
	*     // Executes 3 times, with each execution 20ms later than the last.
	*   }.lazy(20));
	*   (100).times(function() {
	*     // Executes 50 times, with each execution 20ms later than the last.
	*   }.lazy(20, 50));
	**/
	lazy(ms?: number, limit?: number): Function;

	/**
	* Creates a function that will execute only once and store the result.
	* @returns Function
	* @extra %once% is useful for creating functions that will cache the result of
	*        an expensive operation and use it on subsequent calls. Also it can be
	*        useful for creating initialization functions that only need to be run
	*        once.
	* @example
	*   var fn = (function() {
	*     // Will be executed once only
	*   }).once(); fn(); fn(); fn();
	**/
	once(): Function;

	/**
	* Creates a "throttled" version of the function that will only be executed once per <ms> milliseconds.
	* @param ms Execute only once in this time span.
	* @returns Function
	* @extra This is functionally equivalent to calling %lazy% with a [limit]
	*        of %1%. %throttle% is appropriate when you want to make sure a
	*        function is only executed at most once for a given duration.
	*        Compare this to %lazy%, which will queue rapid calls and execute
	*        them later.
	* @example
	*   (3).times(function() {
	*     // called only once. will wait 50ms until it responds again
	*   }.throttle(50));
	**/
	throttle(ms: number): Function;
}

interface RegExpStatic {

	/**
	* Escapes all RegExp tokens in a string.
	* @param str Escape RegExp tokens in this string.
	* @returns Escaped RegExp tokens in <str>.
	* @example
	*   RegExp.escape('really?')      -> 'really\?'
	*   RegExp.escape('yes.')         -> 'yes\.'
	*   RegExp.escape('(not really)') -> '\(not really\)'
	**/
	escape(str: string): string;
}

interface RegExp {

	/**
	* Adds <flag> to the regex.
	* @param flag RegExp flag to add.
	* @returns RegExp with <flag> added.
	* @example
	*   /texty/.addFlag('g') -> now has global flag set
	**/
	addFlag(flag: string): RegExp;

	/**
	* Returns the flags of the regex as a string.
	* @returns RegExp flags.
	* @example
	*   /texty/gim.getFlags('testy') -> 'gim'
	**/
	getFlags(): string;

	/**
	* Removes <flag> from the regex.
	* @param flag RegExp flag to remove.
	* @returns RegExp with flag <flag> removed.
	* @example
	*   /texty/g.removeFlag('g') -> now has global flag removed
	**/
	removeFlag(flag: string): RegExp;

	/**
	* Sets the flags on a regex and retuns a copy.
	* @param flags Set the RegExp to have these flags.
	* @returns Copy of RegExp with <flags>.
	* @example
	*   /texty/.setFlags('gim') -> now has global, ignoreCase, and multiline set
	**/
	setFlags(flags: string): RegExp;
}

interface Locale {
	plural: boolean;
	months: string;
	weekdays: string;
	units: string;
	numbers: string;
	tokens: string[];
	short: string;
	long: string;
	full: string;
	past: string;
	future: string;
	duration: string;
	timeMarker: string;
	ampm: string;
	modifiers:
		{
			name: string;
			src: string;
			value: number;
		}[];
	dateParse: string[];
	timeParse: string[];
}

interface DateStatic {

	/**
	* Adds a locale <set> to the locales understood by Sugar.
	* @method Date.addLocale(<code>, <set>)
	* @param code Locale code.
	* @param set Locale definition.
	* @returns Locale
	* @extra For more see @date_format.
	**/
	addLocale(code: string, set: Locale): Locale;

	/**
	* Alternate Date constructor which understands many different text formats,
	*        a timestamp, or another date.
	* @method Date.create(<d>, [locale] = currentLocale)
	* @param locale Locale to create the date in, default = currentLocale.
	* @returns Date
	* @extra If no argument is given, date is assumed to be now. %Date.create% additionally
	*        can accept enumerated parameters as with the standard date constructor. [locale]
	*        can be passed to specify the locale that the date is in. When unspecified, the
	*        current locale (default is English) is assumed. UTC-based dates can be created
	*        through the %utc% object. For more see @date_format.
	* @set
	*   Date.utc.create
	* @example
	*   Date.create('July')          -> July of this year
	*   Date.create('1776')          -> 1776
	*   Date.create('today')         -> today
	*   Date.create('wednesday')     -> This wednesday
	*   Date.create('next friday')   -> Next friday
	*   Date.create('July 4, 1776')  -> July 4, 1776
	*   Date.create(-446806800000)   -> November 5, 1955
	*   Date.create(1776, 6, 4)      -> July 4, 1776
	*   Date.create('1776?07?04?', 'ja') -> July 4, 1776
	*   Date.utc.create('July 4, 1776', 'en')  -> July 4, 1776
	**/
	create(locale?: string): Date;

	/**
	* @see create
	* @param d Human readable date to convert to a Date object.
	**/
	create(d: string, locale?: string): Date;

	/**
	* @see create
	* @param year Year YYYY
	* @param month Month MM
	* @param day Day DD
	**/
	create(year: number, month: number, day: number, locale?: string): Date;

	/**
	* Alternate form of %Date.create% with any ambiguity assumed to be the future.
	* @method Date.future(<d>, [locale] = currentLocale)
	* @param d Future human redable date to convert to a Date object.
	* @param locale Locale to create the date in, default = currentLocale.
	* @returns Date
	* @extra For example %"Sunday"% can be either "the Sunday coming up" or "the Sunday last"
	*        depending on context. Note that dates explicitly in the past ("last Sunday") will
	*        remain in the past. This method simply provides a hint when ambiguity exists. UTC
	*       -based dates can be created through the %utc% object. For more, see @date_format.
	* @set
	*   Date.utc.future
	* @example
	*   Date.future('July')          -> July of this year or next depending on the current month
	*   Date.future('Wednesday')     -> This wednesday or next depending on the current weekday
	**/
	future(d: string, locale?: string): Date;

	/**
	* Gets the locale for the given code, or the current locale.
	* @method Date.getLocale([code] = current)
	* @param code Locale code to retrieve.
	* @returns Locale
	* @extra The resulting locale object can be manipulated to provide more control over date localizations.
	*        For more about locales, see @date_format.
	**/
	getLocale(code?: string): Locale;

	/**
	* Returns the number of milliseconds since January 1st, 1970 00:00:00 (UTC time).
	* @method Date.now()
	* @returns String
	* @extra Provided for browsers that do not support this method.
	* @example
	*   Date.now() -> ex. 1311938296231
	**/
	now(): string;

	/**
	* Alternate form of %Date.create% with any ambiguity assumed to be the past.
	* @method Date.past(<d>, [locale] = currentLocale)
	* @param d Past human readable date to convert to a Date object.
	* @param locale , default = currentLocale.
	* @returns Date
	* @extra For example %"Sunday"% can be either "the Sunday coming up" or "the Sunday last" depending
	*        on context. Note that dates explicitly in the future ("next Sunday") will remain in the future.
	*        This method simply provides a hint when ambiguity exists. UTC-based dates can be created
	*        through the %utc% object. For more, see @date_format.
	* @set
	*   Date.utc.past
	* @example
	*   Date.past('July')          -> July of this year or last depending on the current month
	*   Date.past('Wednesday')     -> This wednesday or last depending on the current weekday
	**/
	past(d: string, local?: string): Date;

	/**
	* Creates a new date range.
	* @method Date.range([start], [end])
	* @param start Beginning date.
	* @param end Ending date.
	* @returns DateRange
	* @extra If either [start] or [end] are null, they will default to the current date.
	**/
	range(start: Date, end: Date): DateRange;

	/**
	* Sets the current locale to be used with dates.
	* @method Date.setLocale(<code>)
	* @param code Locale code.
	* @returns Locale
	* @extra Sugar has support for 13 locales that are available through the
	*        "Date Locales" package. In addition you can define a new locale with
	*         %Date.addLocale%. For more see @date_format.
	**/
	setLocale(code: string): Locale;
}

interface DateFields {
	year?: number;
	month?: number;
	day?: number;
}

interface Date {

	/**
	* Adds <num> of the unit to the date. If [reset] is true, all lower units will be reset.
	* @method add[Units](<num>, [reset] = false)
	* @param num Add this many [Units] to the date.
	* @param reset If true lower units will be reset.
	* @returns Date
	* @extra Note that "months" is ambiguous as a unit of time. If the target
	*        date falls on a day that does not exist (ie. August 31 -> February 31),
	*        the date will be shifted to the last day of the month. Don't use
	*        %addMonths% if you need precision.
	* @set
	*   addMilliseconds
	*   addSeconds
	*   addMinutes
	*   addHours
	*   addDays
	*   addWeeks
	*   addMonths
	*   addYears
	* @example
	*   Date.create().addMilliseconds(5) -> current time + 5 milliseconds
	*   Date.create().addDays(5)         -> current time + 5 days
	*   Date.create().addYears(5)        -> current time + 5 years
	**/
	addMilliseconds(num: number, reset?: boolean): Date;

	/**
	* @see addMilliseconds
	**/
	addSeconds(num: number, reset?: boolean): Date;

	/**
	* @see addMilliseconds
	**/
	addMinutes(num: number, reset?: boolean): Date;

	/**
	* @see addMilliseconds
	**/
	addHours(num: number, reset?: boolean): Date;

	/**
	* @see addMilliseconds
	**/
	addDays(num: number, reset?: boolean): Date;

	/**
	* @see addMilliseconds
	**/
	addWeeks(num: number, reset?: boolean): Date;

	/**
	* @see addMilliseconds
	**/
	addMonths(num: number, reset?: boolean): Date;
	
	/**
	* @see addMilliseconds
	**/
	addYears(num: number, reset?: boolean): Date;

	/**
	* Sets the date forward.
	* @method advance(<set>, [reset] = false)
	* @param set Human readable amount of time to advance the date.
	* @param reset If true resets the lower date fields to zero.
	* @returns Date
	* @extra This method can accept multiple formats including an object, a string
	*        in the format %3 days%, a single number as milliseconds, or enumerated
	*        parameters (as with the Date constructor). If [reset] is %true%, any
	*        units more specific than those passed will be reset. For more see
	*        @date_format.
	* @example
	*   new Date().advance({ year: 2 }) -> 2 years in the future
	*   new Date().advance('2 days')    -> 2 days in the future
	*   new Date().advance(0, 2, 3)     -> 2 months 3 days in the future
	*   new Date().advance(86400000)    -> 1 day in the future
	**/
	advance(set: string, reset?: boolean): Date;

	/**
	* @see advance
	* @param year YYYY to advance.
	* @param month MM to advance.
	* @param day DD to advance.
	**/
	advance(year: number, month: number, day: number, reset?: boolean): Date;

	/**
	* @see advance
	* @param milliseconds Milliseconds to advance the date.
	**/
	advance(milliseconds: number, reset?: boolean): Date;

	/**
	* @see advance
	* @param set Advance the year/month/day of the date from a single object.
	**/
	advance(set: DateFields, reset?: boolean): Date;

	/**
	* Sets the date to the beginning of the appropriate unit.
	* @method beginningOf[Unit]()
	* @returns Date
	* @set
	*   beginningOfDay
	*   beginningOfWeek
	*   beginningOfMonth
	*   beginningOfYear
	* @example
	*   Date.create().beginningOfDay()   -> the beginning of today (resets the time)
	*   Date.create().beginningOfWeek()  -> the beginning of the week
	*   Date.create().beginningOfMonth() -> the beginning of the month
	*   Date.create().beginningOfYear()  -> the beginning of the year
	**/
	beginningOfDay(): Date;
	beginningOfWeek(): Date;
	beginningOfMonth(): Date;
	beginningOfYear(): Date;

	/**
	* Clones the date.
	* @method clone()
	* @returns Date
	* @example
	*   Date.create().clone() -> Copy of now
	**/
	clone(): Date;

	/**
	* Returns the number of days in the date's month.
	* @method daysInMonth()
	* @returns Number
	* @example
	*   Date.create('May').daysInMonth()            -> 31
	*   Date.create('February, 2000').daysInMonth() -> 29
	**/
	daysInMonth(): number;

	/**
	* Sets the date to the end of the appropriate unit.
	* @method endOf[Unit]()
	* @returns Date
	* @set
	*   endOfDay
	*   endOfWeek
	*   endOfMonth
	*   endOfYear
	* @example
	*   Date.create().endOfDay()   -> the end of today (sets the time to 23:59:59.999)
	*   Date.create().endOfWeek()  -> the end of the week
	*   Date.create().endOfMonth() -> the end of the month
	*   Date.create().endOfYear()  -> the end of the year
	**/
	endOfDay(): Date;
	endOfWeek(): Date;
	endOfMonth(): Date;
	endOfYear(): Date;

	/**
	* Formats and outputs the date.
	* @method format(<format>, [locale] = currentLocale)
	* @returns String
	* @extra <format> can be a number of pre-determined formats or a string of
	*        tokens. Locale-specific formats are %short%, %long%, and %full% which
	*        have their own aliases and can be called with %date.short()%, etc.
	*        If <format> is not specified the %long% format is assumed. [locale]
	*        specifies a locale code to use (if not specified the current locale 
	*        is used). See @date_format for more details.
	* @set
	*   short
	*   long
	*   full
	* @example
	*   Date.create().format()                                   -> ex. July 4, 2003
	*   Date.create().format('{Weekday} {d} {Month}, {yyyy}')    -> ex. Monday July 4, 2003
	*   Date.create().format('{hh}:{mm}')                        -> ex. 15:57
	*   Date.create().format('{12hr}:{mm}{tt}')                  -> ex. 3:57pm
	*   Date.create().format(Date.ISO8601_DATETIME)              -> ex. 2011-07-05 12:24:55.528Z
	*   Date.create('last week').format('short', 'ja')                -> ex. ??
	*   Date.create('yesterday').format(function(value,unit,ms,loc) {
	*     // value = 1, unit = 3, ms = -86400000, loc = [current locale object]
	*   });                                                      -> ex. 1 day ago
	**/
	format(format: string, locale?: string): string;
    	short(locale?: string): string;
    	long(locale?: string): string;
    	full(locale?: string): string;

	/**
	* Returns a string representation of the offset from UTC time. If [iso]
	*        is true the offset will be in ISO8601 format.
	* @method getUTCOffset([iso])
	* @returns String
	* @example
	*   new Date().getUTCOffset()     -> "+0900"
	*   new Date().getUTCOffset(true) -> "+09:00"
	**/
	getUTCOffset(iso?: boolean): string;

	/**
	* Gets the date's week (of the year).
	* @returns The date's week of the year as defined by the ISO-8601 standard.
	* @extra If %utc% is set on the date, the week will be according to UTC time.
	* @example
	*   new Date().getWeek()    -> today's week of the year
	**/
	getISOWeek(): number;

	/**
	* Alias for %getDay%.
	* @method getWeekday()
	* @returns Number
	* @set
	*   getUTCWeekday
	* @example
	*   Date.create().getWeekday();    -> (ex.) 3
	*   Date.create().getUTCWeekday();    -> (ex.) 3
	**/
	getWeekday(): number;
	getUTCWeekday(): number;
	//getDay(): number;
	//getUTCDay(): number;

	/**
	* Returns true if the date is <d>.
	* @method is(<d>, [margin] = 0)
	* @returns Boolean
	* @extra <d> will accept a date object, timestamp, or text format. %is%
	*        additionally understands more generalized expressions like
	*        month/weekday names, 'today', etc, and compares to the precision
	*        implied in <d>. [margin] allows an extra margin of error in
	*        milliseconds.  For more, see @date_format.
	* @example
	*   Date.create().is('July')               -> true or false?
	*   Date.create().is('1776')               -> false
	*   Date.create().is('today')              -> true
	*   Date.create().is('weekday')            -> true or false?
	*   Date.create().is('July 4, 1776')       -> false
	*   Date.create().is(-6106093200000)       -> false
	*   Date.create().is(new Date(1776, 6, 4)) -> false
	**/
	is(d: string, margin?: number): boolean;
	is(milliseconds: number, margin?: number): boolean;
	is(d: Date, margin?: number): boolean;

	/**
	* Returns true if the date is after the <d>.
	* @method isAfter(<d>, [margin] = 0)
	* @returns Boolean
	* @extra [margin] is to allow extra margin of error (in ms). <d> will accept
	*        a date object, timestamp, or text format. If not specified, <d> is
	*        assumed to be now. See @date_format for more.
	* @example
	*   new Date().isAfter('tomorrow')  -> false
	*   new Date().isAfter('yesterday') -> true
	**/
	isAfter(d: string, margin?: number): boolean;
	isAfter(milliseconds: number, margin?: number): boolean;
	isAfter(d: Date, margin?: number): boolean;

	/**
	* Returns true if the date is before <d>.
	* @method isBefore(<d>, [margin] = 0)
	* @returns Boolean
	* @extra [margin] is to allow extra margin of error (in ms). <d> will accept 
	*        a date object, timestamp, or text format. If not specified, <d> is
	*        assumed to be now. See @date_format for more.
	* @example
	*   new Date().isBefore('tomorrow')  -> true
	*   new Date().isBefore('yesterday') -> false
	**/
	isBefore(d: string, margin?: number): boolean;
	isBefore(milliseconds: number, margin?: number): boolean;
	isBefore(d: Date, margin?: number): boolean;

	/**
	* Returns true if the date falls between <d1> and <d2>.
	* @method isBetween(<d1>, <d2>, [margin] = 0)
	* @returns Boolean
	* @extra [margin] is to allow extra margin of error (in ms). <d1> and <d2>
	*        will accept a date object, timestamp, or text format. If not specified,
	*        they are assumed to be now. See @date_format for more.
	* @example
	*   new Date().isBetween('yesterday', 'tomorrow')    -> true
	*   new Date().isBetween('last year', '2 years ago') -> false
	**/
	isBefore(start: string, end: string, margin?: number): boolean;
	isBefore(start: number, end: string, margin?: number): boolean;
	isBefore(start: Date, end: Date, margin?: number): boolean;

	/**
	* Returns true if the date falls on that day.
	* @method is[Day]()
	* @returns Boolean
	* @extra Also available: %isYesterday%, %isToday%, %isTomorrow%, %isWeekday%,
	*        and %isWeekend%.
	* @set
	*   isToday
	*   isYesterday
	*   isTomorrow
	*   isWeekday
	*   isWeekend
	*   isSunday
	*   isMonday
	*   isTuesday
	*   isWednesday
	*   isThursday
	*   isFriday
	*   isSaturday
	* @example
	*   Date.create('tomorrow').isToday() -> false
	*   Date.create('thursday').isTomorrow() -> ?
	*   Date.create('yesterday').isWednesday() -> ?
	*   Date.create('today').isWeekend() -> ?
	**/
	isToday(): boolean;
	isYesterday(): boolean;
	isTomorrow(): boolean;
	isWeekday(): boolean;
	isWeekend(): boolean;
	isSunday(): boolean;
	isMonday(): boolean;
	isTuesday(): boolean;
	isWednesday(): boolean;
	isThursday(): boolean;
	isFriday(): boolean;
	isSaturday(): boolean;

	/**
	* Returns true if the date is in the future.
	* @method isFuture()
	* @returns Boolean
	* @example
	*   Date.create('next week').isFuture() -> true
	*   Date.create('last week').isFuture() -> false
	**/
	isFuture(): boolean;

	/**
	* Returns true if the date is last week/month/year.
	* @method isLast[Unit]()
	* @returns Boolean
	* @set
	*   isLastWeek
	*   isLastMonth
	*   isLastYear
	* @example
	*   Date.create('yesterday').isLastWeek()  -> true or false?
	*   Date.create('yesterday').isLastMonth() -> probably not...
	*   Date.create('yesterday').isLastYear()  -> even less likely...
	**/
	isLastWeek(): boolean;
	isLastMonth(): boolean;
	isLastYear(): boolean;

	/**
	* Returns true if the date is a leap year.
	* @method isLeapYear()
	* @returns Boolean
	* @example
	*   Date.create('2000').isLeapYear() -> true
	**/
	isLeapYear(): boolean;

	/**
	* Returns true if the date is next week/month/year.
	* @method isNext[Unit]()
	* @returns Boolean
	* @set
	*   isNextWeek
	*   isNextMonth
	*   isNextYear
	* @example
	*   Date.create('tomorrow').isNextWeek()  -> true or false?
	*   Date.create('tomorrow').isNextMonth() -> probably not...
	*   Date.create('tomorrow').isNextYear()  -> even less likely...
	**/
	isNextWeek(): boolean;
	isNextMonth(): boolean;
	isNextYear(): boolean;

	/**
	* Returns true if the date is in the past.
	* @method isPast()
	* @returns Boolean
	* @example
	*   Date.create('last week').isPast() -> true
	*   Date.create('next week').isPast() -> false
	**/
	isPast(): boolean;

	/**
	* Returns true if the date is this week/month/year.
	* @method isThis[Unit]()
	* @returns Boolean
	* @set
	*   isThisWeek
	*   isThisMonth
	*   isThisYear
	* @example
	*   Date.create('tomorrow').isThisWeek()  -> true or false?
	*   Date.create('tomorrow').isThisMonth() -> probably...
	*   Date.create('tomorrow').isThisYear()  -> signs point to yes...
	**/
	isThisWeek(): boolean;
	isThisMonth(): boolean;
	isThisYear(): boolean;

	/**
	* Returns true if the date has no timezone offset.
	* @method isUTC()
	* @returns Boolean
	* @extra This will also return true for a date that has had %toUTC% called on it. This is intended to help approximate shifting timezones which is not possible in client-side Javascript. Note that the native method %getTimezoneOffset% will always report the same thing, even if %isUTC% becomes true.
	* @example
	*   new Date().isUTC()         -> true or false?
	*   new Date().toUTC().isUTC() -> true
	**/
	isUTC(): boolean;

	/**
	* Returns true if the date is valid.
	* @method isValid()
	* @returns Boolean
	* @example
	*   new Date().isValid()         -> true
	*   new Date('flexor').isValid() -> false
	**/
	isValid(): boolean;

	/**
	* @method iso()
	* @method toISOString()
	* @returns String
	* Formats the string to ISO8601 format.
	* @extra This will always format as UTC time. Provided for browsers that do not
	*        support this method.
	* @example
	*   Date.create().toISOString() -> ex. 2011-07-05 12:24:55.528Z
	**/
	iso(): string;
	//toISOString(): string;

	/**
	* Returns a relative date string offset to the current time.
	* @method relative([fn], [locale] = currentLocale)
	* @returns String
	* @extra [fn] can be passed to provide for more granular control over the
	*        resulting string. [fn] is passed 4 arguments: the adjusted value,
	*        unit, offset in milliseconds, and a localization object. As an
	*        alternate syntax, [locale] can also be passed as the first (and only)
	*        parameter. For more, see @date_format.
	* @example
	*   Date.create('90 seconds ago').relative() -> 1 minute ago
	*   Date.create('January').relative()        -> ex. 5 months ago
	*   Date.create('January').relative('ja')    -> 3???
	*   Date.create('120 minutes ago').relative(function(val,unit,ms,loc) {
	*     // value = 2, unit = 3, ms = -7200, loc = [current locale object]
	*   });                                      -> ex. 5 months ago
	**/
	relative(locale: string): string;
	relative(fn?: (value: number, unit: string, ms: number, loc: Locale) => string, locale?: string): string;

	/**
	* Resets the unit passed and all smaller units. Default is "hours",
	*        effectively resetting the time.
	* @method reset([unit] = 'hours')
	* @returns Date
	* @example
	*   Date.create().reset('day')   -> Beginning of today
	*   Date.create().reset('month') -> 1st of the month
	**/
	reset(unit?: string): Date;

	/**
	* Sets the date back.
	* @method rewind(<set>, [reset] = false)
	* @returns Date
	* @extra This method can accept multiple formats including a single number as a
	*        timestamp, an object, or enumerated parameters (as with the Date
	*        constructor). If [reset] is %true%, any units more specific than
	*        those passed will be reset. For more see @date_format.
	* @example
	*   new Date().rewind({ year: 2 }) -> 2 years in the past
	*   new Date().rewind(0, 2, 3)     -> 2 months 3 days in the past
	*   new Date().rewind(86400000)    -> 1 day in the past
	**/
	rewind(ms: number, reset?: boolean): Date;
	rewind(year: number, month: number, day: number, reset?: boolean): Date;
	rewind(d: DateFields, reset?: boolean): Date;

	/**
	* Sets the date object.
	* @method set(<set>, [reset] = false)
	* @returns Date
	* @extra This method can accept multiple formats including a single number as a
	*        timestamp, an object, or enumerated parameters (as with the Date
	*        constructor). If [reset] is %true%, any units more specific than those
	*        passed will be reset.
	* @example
	*   new Date().set({ year: 2011, month: 11, day: 31 }) -> December 31, 2011
	*   new Date().set(2011, 11, 31)                       -> December 31, 2011
	*   new Date().set(86400000)                           -> 1 day after Jan 1, 1970
	*   new Date().set({ year: 2004, month: 6 }, true)     -> June 1, 2004, 00:00:00.000
	**/
	set(ms: number): Date;
	set(year: number, month: number, day: number): Date;
	set(d: DateFields, reset?: boolean): Date;

	/**
	* Sets the week (of the year).
	* @example
	*   d = new Date(); d.setWeek(15); d; -> 15th week of the year
	**/
	setISOWeek(week: number): void;

	/**
	* Sets the weekday of the date.
	* @method setWeekday()
	* @returns Nothing
	* @example
	*   d = new Date(); d.setWeekday(1); d; -> Monday of this week
	*   d = new Date(); d.setWeekday(6); d; -> Saturday of this week
	**/
	setWeekday(day: number): void;

	/**
	* Returns a JSON representation of the date.
	* @method toJSON()
	* @returns String
	* @extra This is effectively an alias for %toISOString%. Will always return
	*        the date in UTC time. Provided for browsers that do not support this
	*        method.
	* @example
	*   Date.create().toJSON() -> ex. 2011-07-05 12:24:55.528Z
	**/
	toJSON(): string;

	/**
	* Returns the time ago in the appropriate unit.
	* @method [units]Ago()
	* @returns Number
	* @set
	*   millisecondsAgo
	*   secondsAgo
	*   minutesAgo
	*   hoursAgo
	*   daysAgo
	*   weeksAgo
	*   monthsAgo
	*   yearsAgo
	* @example
	*   Date.create('last year').millisecondsAgo() -> 3,600,000
	*   Date.create('last year').daysAgo()         -> 7
	*   Date.create('last year').yearsAgo()        -> 15
	**/
	millisecondsAgo(): number;
	secondsAgo(): number;
	minutesAgo(): number;
	hoursAgo(): number;
	daysAgo(): number;
	weeksAgo(): number;
	monthsAgo(): number;
	yearsAgo(): number;

	/**
	* Returns the time from now in the appropriate unit.
	* @method [units]FromNow()
	* @returns Number
	* @set
	*   millisecondsFromNow
	*   secondsFromNow
	*   minutesFromNow
	*   hoursFromNow
	*   daysFromNow
	*   weeksFromNow
	*   monthsFromNow
	*   yearsFromNow
	* @example
	*   Date.create('next year').millisecondsFromNow() -> 3,600,000
	*   Date.create('next year').daysFromNow()         -> 7
	*   Date.create('next year').yearsFromNow()        -> 15
	**/
	millisecondsFromNow(): number;
	secondsFromNow(): number;
	minutesFromNow(): number;
	hoursFromNow(): number;
	daysFromNow(): number;
	weeksFromNow(): number;
	monthsFromNow(): number;
	yearsFromNow(): number;

	/**
	* Returns the time since [d] in the appropriate unit.
	* @method [units]Since([d], [locale] = currentLocale)
	* @returns Number
	* @extra [d] will accept a date object, timestamp, or text format. If not
	*        specified, [d] is assumed to be now. [locale] can be passed to specify
	*        the locale that the date is in. %[unit]Ago% is provided as an alias to
	*        make this more readable when [d] is assumed to be the current date.
	*        For more see @date_format.
	* @set
	*   millisecondsSince
	*   secondsSince
	*   minutesSince
	*   hoursSince
	*   daysSince
	*   weeksSince
	*   monthsSince
	*   yearsSince
	* @example
	*   Date.create().millisecondsSince('1 hour ago') -> 3,600,000
	*   Date.create().daysSince('1 week ago')         -> 7
	*   Date.create().yearsSince('15 years ago')      -> 15
	*   Date.create('15 years ago').yearsAgo()        -> 15
	**/
	millisecondsSince(date?: Date, locale?: string): number;
	millisecondsSince(date: string, locale?: string): number;
	secondsSince(date?: Date, locale?: string): number;
	secondsSince(date: string, locale?: string): number;
	minutesSince(date?: Date, locale?: string): number;
	minutesSince(date: string, locale?: string): number;
	hoursSince(date?: Date, locale?: string): number;
	hoursSince(date: string, locale?: string): number;
	daysSince(date?: Date, locale?: string): number;
	daysSince(date: string, locale?: string): number;
	weeksSince(date?: Date, locale?: string): number;
	weeksSince(date: string, locale?: string): number;
	monthsSince(date?: Date, locale?: string): number;
	monthsSince(date: string, locale?: string): number;
	yearsSince(date?: Date, locale?: string): number;
	yearsSince(date: string, locale?: string): number;

	/**
	* Returns the time until [d] in the appropriate unit.
	* @method [units]Until([d], [locale] = currentLocale)
	* @returns Number
	* @extra [d] will accept a date object, timestamp, or text format. If not
	*        specified, [d] is assumed to be now. [locale] can be passed to specify
	*        the locale that the date is in. %[unit]FromNow% is provided as an
	*        alias to make this more readable when [d] is assumed to be the current
	*        date. For more see @date_format.
	* @set
	*   millisecondsUntil
	*   secondsUntil
	*   minutesUntil
	*   hoursUntil
	*   daysUntil
	*   weeksUntil
	*   monthsUntil
	*   yearsUntil
	* @example
	*   Date.create().millisecondsUntil('1 hour from now') -> 3,600,000
	*   Date.create().daysUntil('1 week from now')         -> 7
	*   Date.create().yearsUntil('15 years from now')      -> 15
	*   Date.create('15 years from now').yearsFromNow()    -> 15
	**/
	millisecondsUntil(date?: Date, locale?: string): number;
	millisecondsUntil(date: string, locale?: string): number;
	secondsUntil(date?: Date, locale?: string): number;
	secondsUntil(date: string, locale?: string): number;
	minutesUntil(date?: Date, locale?: string): number;
	minutesUntil(date: string, locale?: string): number;
	hoursUntil(date?: Date, locale?: string): number;
	hoursUntil(date: string, locale?: string): number;
	daysUntil(date?: Date, locale?: string): number;
	daysUntil(date: string, locale?: string): number;
	weeksUntil(date?: Date, locale?: string): number;
	weeksUntil(date: string, locale?: string): number;
	monthsUntil(date?: Date, locale?: string): number;
	monthsUntil(date: string, locale?: string): number;
	yearsUntil(date?: Date, locale?: string): number;
	yearsUntil(date: string, locale?: string): number;

	/**
	* Sets the internal utc flag for the date. When on, UTC-based methods
	*        will be called internally.
	* @method utc([on] = true)
	* @returns Date
	* @extra For more see @date_format.
	* @example
	*   new Date().utc(true)
	*   new Date().utc(false)
	**/
	utc(on?: boolean): Date;
}

/**
* @package DateRange
* @dependency date
* @description Date Ranges define a range of time. They can enumerate over specific points
*              within that range, and be manipulated and compared.
**/
interface DateRange {
	start: Date;
	end: Date;

	/**
	* Returns true if <d> is contained inside the DateRange.
	*        <d> may be a date or another DateRange.
	* @param d Date to check if it is contained within this DateRange.
	* @returns True if <d> is contained within the DateRange, false otherwise.
	* @example
	*   Date.range('2003', '2005').contains(Date.create('2004')) -> true
	**/
	contains(d: Date): boolean;

	/**
	* @see contains
	**/
	contains(d: DateRange): boolean;

	/**
	* Return the duration of the DateRange in milliseconds.
	* @returns Duration of the DateRange in milliseconds.
	* @example
	*   Date.range('2003', '2005').duration() -> 94694400000
	**/
	duration(): number;

	/**
	* Increments through the date range for each [unit], calling [fn] if it is passed.
	*        Returns an array of each increment visited.
	* @method each[Unit]([fn])
	* @param fn Callback function for each date in the requested increments.
	* @returns Array of Dates for each increment.
	* @set
	*   eachMillisecond
	*   eachSecond
	*   eachMinute
	*   eachHour
	*   eachDay
	*   eachWeek
	*   eachMonth
	*   eachYear
	* @example
	*   Date.range('2003-01', '2003-02').eachMonth()     -> [...]
	*   Date.range('2003-01-15', '2003-01-16').eachDay() -> [...]
	**/
	eachMillisecond(fn?: (d: Date) => void): Date[];

	/**
	* @see eachMillisecond
	**/
	eachSecond(fn?: (d: Date) => void): Date[];

	/**
	* @see eachMillisecond
	**/
	eachMinute(fn?: (d: Date) => void): Date[];

	/**
	* @see eachMillisecond
	**/
	eachHour(fn?: (d: Date) => void): Date[];

	/**
	* @see eachMillisecond
	**/
	eachDay(fn?: (d: Date) => void): Date[];

	/**
	* @see eachMillisecond
	**/
	eachWeek(fn?: (d: Date) => void): Date[];

	/**
	* @see eachMillisecond
	**/
	eachMonth(fn?: (d: Date) => void): Date[];

	/**
	* @see eachMillisecond
	**/
	eachYear(fn?: (d: Date) => void): Date[];

	/**
	* Iterates through the DateRange for every <increment>,
	*        calling [fn] if it is passed. Returns an array of each increment visited.
	* @method every(<increment>, [fn])
	* @param ms Time span to increment by.
	* @param fn Callback for each incremented date.
	* @returns An array of each incremented date visited.
	* @extra When <increment> is a number, increments will be to the exact millisecond.
	*        <increment> can also be a string in the format %{number} {unit}s%, in which
	*        case it will increment in the unit specified. Note that a discrepancy exists
	*        in the case of months, as %(2).months()% is an approximation. Stepping
	*        through the actual months by passing %"2 months"% is usually preferable in
	*        this case.
	* @example
	*   Date.range('2003-01', '2003-03').every("2 months") -> [...]
	**/
	every(ms: number, fn?: (d: Date) => void ): Date[];

	/**
	* @see every
	* @param increment Time span to increment by.
	**/
	every(increment: string, fn?: (d: Date) => void ): Date[];

	/**
	* Returns a new DateRange with the latest starting point as its start, and the
	*        earliest ending point as its end. If the two ranges do not intersect this will
	*        effectively produce an invalid range.
	* @param range DateRange to intersect with.
	* @returns DateRange
	* @example
	*   Date.range('2003-01', '2005-01').intersect(Date.range('2004-01', '2006-01')) -> Jan 1, 2004..Jan 1, 2005
	**/
	intersect(range: DateRange): DateRange;

	/**
	* Returns true if the DateRange is valid, false otherwise.
	* @returns True if the date range is valid, false otherwise.
	* @example
	*   Date.range('2003', '2005').isValid() -> true
	*   Date.range('2005', '2003').isValid() -> false
	**/
	isValid(): boolean;

	/**
	* Returns a string representation of the DateRange.
	* @returns String representation of the DateRange.
	* @example
	*   Date.range('2003', '2005').toString() -> January 1, 2003..January 1, 2005
	**/
	toString(): string;

	/**
	* Returns a new DateRange with the earliest starting point as its start,
	*        and the latest ending point as its end. If the two ranges do not intersect
	*        this will effectively remove the "gap" between them.
	* @param range DateRange to create a union with.
	* @returns DateRange
	* @example
	*   Date.range('2003=01', '2005-01').union(Date.range('2004-01', '2006-01')) -> Jan 1, 2003..Jan 1, 2006
	**/
	union(range: DateRange): DateRange;
}
