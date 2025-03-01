import rangy = require('rangy');
import 'rangy/lib/rangy-textrange';
import { assertAny, assertBoolean, assertString, assertRangyRange } from './test-utils';

function testTextRange() {
    const range: RangyRange = rangy.createRange();

    const movedStart: number = range.moveStart('character', 1);
    assertAny(movedStart);
    range.moveStart('word', 2, { includeTrailingSpace: true });

    const movedEnd: number = range.moveEnd('character', -1);
    assertAny(movedEnd);
    range.moveEnd('word', 3, { wordRegex: /\w+/ });

    const moved: number = range.move('character', 1);
    assertAny(moved);
    range.move('word', -2, { includeTrailingSpace: false });

    const expanded: boolean = range.expand('word');
    assertBoolean(expanded);
    range.expand('character', { trim: true, trimStart: false, trimEnd: true });

    const text: string = range.text();
    assertString(text);

    range.selectCharacters(document.body, 0, 5);

    const charRange: { start: number; end: number } = range.toCharacterRange(document.body);
    assertAny(charRange.start);
    range.toCharacterRange(document.body, { ignoreCharacters: ' ' });

    const found: boolean = range.findText('test');
    assertBoolean(found);
    range.findText(/test/i, { caseSensitive: false, wholeWordsOnly: true });
    range.findText('test', { withinRange: rangy.createRange(), direction: 'backward' });
}