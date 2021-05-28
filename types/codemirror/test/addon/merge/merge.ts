import * as CodeMirror from 'codemirror';
import 'codemirror/addon/merge/merge';

const mergeView = new CodeMirror.MergeView(document.body, {
    value: 'text',
    origLeft: 'old',
    origRight: 'alternate',
    showDifferences: true,
    allowEditingOriginals: false,
    collapseIdentical: true,
});
const editor: CodeMirror.Editor = mergeView.editor();

const mergeViewWithoutNew = CodeMirror.MergeView(document.body, {
    value: 'text',
    orig: 'old',
});
mergeViewWithoutNew.setShowDifferences(false);

const myKeyMap: CodeMirror.KeyMap = {
    test: CodeMirror.commands.goPrevDiff,
    test2: CodeMirror.commands.goNextDiff,
};
