import * as CodeMirror from 'codemirror';
import 'codemirror/addon/hint/show-hint';

const cm = CodeMirror(document.body, { value: 'text' });
const pos = new CodeMirror.Pos(2, 3);
CodeMirror.showHint(cm);
CodeMirror.showHint(cm, cm => {
    return {
        from: pos,
        list: ['one', 'two'],
        to: pos,
    };
});
CodeMirror.showHint(cm, cm => {
    return {
        from: pos,
        list: [
            {
                text: 'disp1',
                render(el, self, data) {},
            },
            {
                className: 'class2',
                displayText: 'disp2',
                from: pos,
                to: pos,
                text: 'sometext',
            },
        ],
        to: pos,
    };
});
const asyncHintFunc: CodeMirror.AsyncHintFunction = (
    cm: CodeMirror.Editor,
    callback: (hints: CodeMirror.Hints) => any,
) => {
    callback({
        from: pos,
        list: ['one', 'two'],
        to: pos,
    });
};
asyncHintFunc.async = true;

cm.showHint({
    completeSingle: false,
    hint: asyncHintFunc,
});

cm.showHint();

cm.showHint({
    completeSingle: false,
    container: document.body,
});

cm.showHint({
    hint: CodeMirror.hint.auto,
});

cm.showHint({
    hint: CodeMirror.hint.fromList,
    words: ['hello', 'world'],
});

const hintOptions: CodeMirror.ShowHintOptions = { scrollMargin: 5 };

// @ts-expect-error
hintOptions.scrolMargn = 5;

// @ts-expect-error
hintOptions.scrollMargin = '5';

CodeMirror(document.body, { hintOptions });
