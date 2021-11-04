import nspell from 'nspell';

// $ExpectType NSpell
nspell('');
// $ExpectType NSpell
nspell(new Buffer(''));
// $ExpectType NSpell
nspell(new Buffer(''), new Buffer(''));
// $ExpectType NSpell
nspell({ aff: new Buffer(''), dic: new Buffer('') });
// $ExpectType NSpell
nspell([{ aff: new Buffer('') }, { aff: new Buffer('') }]);

const spell = nspell('', '');
// $ExpectType boolean
spell.correct('');
// $ExpectType string[]
spell.suggest('');
// $ExpectType SpellCheck
spell.spell('');
// $ExpectType NSpell
spell.add('');
// $ExpectType NSpell
spell.remove('');
// $ExpectType string | undefined
spell.wordCharacters();
// $ExpectType NSpell
spell.dictionary('');
// $ExpectType NSpell
spell.dictionary(new Buffer(''));
// $ExpectType NSpell
spell.personal('');
// $ExpectType NSpell
spell.personal(new Buffer(''));
