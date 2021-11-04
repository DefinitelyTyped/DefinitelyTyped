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

myCodeMirror.foldCode(myCodeMirror.getCursor(), CodeMirror.fold.auto);
myCodeMirror.foldCode(myCodeMirror.getCursor(), CodeMirror.fold.combine(rangeFinder, CodeMirror.fold.auto));

const myKeyMap: CodeMirror.KeyMap = {
    test: CodeMirror.commands.fold,
    test2: CodeMirror.commands.unfold,
    test3: CodeMirror.commands.toggleFold,
    test4: CodeMirror.commands.foldAll,
    test5: CodeMirror.commands.unfoldAll,
};
