import nspell = require('nspell')

nspell('')
nspell(new Buffer(''))
nspell(new Buffer(''), new Buffer(''))
nspell({ aff: new Buffer(''), dic: new Buffer('') });
nspell([{ aff: new Buffer('') }, { aff: new Buffer('') }]);

const spell = nspell('', '')
spell.correct('')
spell.suggest('')
spell.spell('')
spell.add('')
spell.remove('')
spell.wordCharacters()
spell.dictionary('')
spell.dictionary(new Buffer(''))
spell.personal('')
spell.personal(new Buffer(''))
