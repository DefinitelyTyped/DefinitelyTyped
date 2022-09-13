import * as CodeMirror from 'codemirror';
import 'codemirror/addon/scroll/simplescrollbars';

const cm1: CodeMirror.Editor = CodeMirror(document.body, {
    scrollbarStyle: 'simple',
});
const cm2: CodeMirror.Editor = CodeMirror(document.body, {
    scrollbarStyle: 'overlay',
});
