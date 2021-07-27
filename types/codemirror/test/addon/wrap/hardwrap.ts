import * as CodeMirror from 'codemirror';
import 'codemirror/addon/wrap/hardwrap';

const editor = CodeMirror(document.body);
const position = CodeMirror.Pos(12);
const position2 = CodeMirror.Pos(20);
editor.wrapParagraph();
editor.wrapParagraph(position);
editor.wrapParagraph(position, {
    column: 70,
    forceBreak: false,
    killTrailingSpace: true,
});
editor.wrapRange(position, position2);
editor.wrapRange(position, position2, {
    column: 70,
    forceBreak: false,
    killTrailingSpace: true,
});
editor.wrapParagraphsInRange(position, position2);
editor.wrapParagraphsInRange(position, position2, {
    column: 70,
    forceBreak: false,
    killTrailingSpace: true,
});

const myKeyMap: CodeMirror.KeyMap = {
    test: CodeMirror.commands.wrapLines
};
