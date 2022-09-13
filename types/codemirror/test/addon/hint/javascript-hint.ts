import * as CodeMirror from 'codemirror';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/addon/hint/show-hint';

const cm = CodeMirror(document.body, { value: 'text' });
cm.showHint({
    hint: CodeMirror.hint.javascript
});
cm.showHint({
    hint: CodeMirror.hint.coffeescript
});
