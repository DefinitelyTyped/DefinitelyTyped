import highlight = require('fuzzysearch-highlight');

// $ExpectType string
highlight('tqb', 'The quick brown fox');

// $ExpectType string
highlight('quick', 'The quick brown fox', { tag: 'em' });
