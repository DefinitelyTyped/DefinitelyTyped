import TokenList from '@wordpress/token-list';

// $ExpectType DOMTokenList
new TokenList();

// $ExpectType DOMTokenList
const list = new TokenList('foo bar');
