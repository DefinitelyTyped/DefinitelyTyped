import * as lucene from 'lucene';

const ast = lucene.parse('query'); // $ExpectType AST
lucene.parse(1); // $ExpectError

lucene.toString(ast); // $ExpectType string

lucene.phrase.escape(''); // $ExpectType string
lucene.phrase.escape(1); // $ExpectError

lucene.phrase.unescape(''); // $ExpectType string
lucene.phrase.unescape(1); // $ExpectError
