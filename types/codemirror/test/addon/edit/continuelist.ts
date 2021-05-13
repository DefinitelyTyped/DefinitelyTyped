import * as CodeMirror from 'codemirror';
import 'codemirror/addon/edit/continuelist';

const myKeyMap: CodeMirror.KeyMap = {
    test: CodeMirror.commands.newlineAndIndentContinueMarkdownList
};
