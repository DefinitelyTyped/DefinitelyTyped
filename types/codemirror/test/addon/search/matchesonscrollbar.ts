import * as CodeMirror from 'codemirror';
import 'codemirror/addon/search/matchesonscrollbar';

const myCodeMirror: CodeMirror.Editor = CodeMirror(document.body, {
    scrollButtonHeight: 15,
});
const annotation = myCodeMirror.showMatchesOnScrollbar('something', true, 'my-annotation');
annotation.clear();

const annotation2 = myCodeMirror.showMatchesOnScrollbar(/foo/);

// @ts-expect-error
myCodeMirror.showMatchesOnScrollbar();
