import * as CodeMirror from 'codemirror';
import 'codemirror/addon/search/search';

const editor = CodeMirror(document.body, {
    search: {
        bottom: true,
    }
});

const myKeyMap: CodeMirror.KeyMap = {
    test: CodeMirror.commands.find,
    test2: CodeMirror.commands.findPersistent,
    test3: CodeMirror.commands.findPersistentNext,
    test4: CodeMirror.commands.findPersistentPrev,
    test5: CodeMirror.commands.findNext,
    test6: CodeMirror.commands.findPrev,
    test7: CodeMirror.commands.clearSearch,
    test8: CodeMirror.commands.replace,
    test9: CodeMirror.commands.replaceAll,
};
