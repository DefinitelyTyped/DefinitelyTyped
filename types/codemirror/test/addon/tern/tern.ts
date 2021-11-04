import * as CodeMirror from 'codemirror';
import 'codemirror/addon/tern/tern';

const cm = CodeMirror(document.body);

const options: CodeMirror.TernOptions = {
    completionTip: data => {
        const d = data.completions;
        return '';
    },

    showError: (editor, message) => {
        alert(message);
    },
};

const ts = new CodeMirror.TernServer(options);

ts.request(
    cm.getDoc(),
    'completions',
    (_e, d) => {
        if (d) {
            const c = d.completions;
        }
    },
    { ch: 0, line: 0 },
);

ts.complete(cm);

ts.showType(cm);
