import * as CodeMirror from 'codemirror';
import 'codemirror/addon/fold/foldcode';

const myCodeMirror: CodeMirror.Editor = CodeMirror(document.body, {
    foldOptions: {
        widget: (from, to) => {
            return '\u2194';
        },
    },
});

const rangeFinder = () => {
    return { from: { line: 1, ch: 1 }, to: { line: 2, ch: 1 } };
};
myCodeMirror.foldCode(CodeMirror.Pos(5, 0));
myCodeMirror.foldCode(myCodeMirror.getCursor(), rangeFinder);
myCodeMirror.foldCode(myCodeMirror.getCursor(), {
    widget: '\u2194',
});

CodeMirror.commands.fold(myCodeMirror);
