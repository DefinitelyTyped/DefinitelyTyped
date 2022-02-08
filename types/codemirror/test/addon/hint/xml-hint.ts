import * as CodeMirror from 'codemirror';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/xml-hint';

const cm = CodeMirror(document.body, { value: 'text' });
cm.showHint({
    hint: CodeMirror.hint.xml
});
