import emojiRegex from 'emoji-regex';
import emojiRegexText from 'emoji-regex/text';
import emojiRegexEs2015 from 'emoji-regex/es2015';
import emojiRegexEs2015Text from 'emoji-regex/es2015/text';

emojiRegex(); // $ExpectType RegExp
emojiRegexText(); // $ExpectType RegExp
emojiRegexEs2015(); // $ExpectType RegExp
emojiRegexEs2015Text(); // $ExpectType RegExp
