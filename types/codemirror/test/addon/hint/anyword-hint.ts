import * as CodeMirror from 'codemirror';
import 'codemirror/addon/hint/anyword-hint';
import 'codemirror/addon/hint/show-hint';

const cm = CodeMirror(document.body, { value: 'text' });
cm.showHint({
    hint: CodeMirror.hint.anyword,
    word: /test/,
});
