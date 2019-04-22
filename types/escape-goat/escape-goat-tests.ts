import * as escapeGoat from 'escape-goat';

// $ExpectType string
escapeGoat.escape('🦄 & 🐐');

// $ExpectType string
escapeGoat.unescape('🦄 &amp; 🐐');

// $ExpectType string
escapeGoat.escape('Hello <em>World</em>');

const url = 'https://sindresorhus.com?x="🦄"';
// $ExpectType string
escapeGoat.escapeTag`<a href="${url}">Unicorn</a>`;
