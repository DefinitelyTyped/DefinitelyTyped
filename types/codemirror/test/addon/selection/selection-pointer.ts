import * as CodeMirror from 'codemirror';
import 'codemirror/addon/selection/selection-pointer';

const cm1: CodeMirror.Editor = CodeMirror(document.body, {
    selectionPointer: true,
});

const cm2: CodeMirror.Editor = CodeMirror(document.body, {
    selectionPointer: 'cursor',
});
