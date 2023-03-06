import * as CodeMirror from 'codemirror';
import 'codemirror/addon/scroll/annotatescrollbar';

const myCodeMirror: CodeMirror.Editor = CodeMirror(document.body, {
    scrollButtonHeight: 15,
});
const annotation = myCodeMirror.annotateScrollbar('my-annotation');
annotation.update([{from: CodeMirror.Pos(25), to: CodeMirror.Pos(26)}]);
annotation.clear();

const annotation2 = myCodeMirror.annotateScrollbar({
    className: 'my-annotation',
    listenForChanges: false,
});

// @ts-expect-error
myCodeMirror.annotateScrollbar();

// @ts-expect-error
myCodeMirror.annotateScrollbar({
    listenForChanges: false,
});
