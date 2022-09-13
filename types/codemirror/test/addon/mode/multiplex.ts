import * as CodeMirror from 'codemirror';
import 'codemirror/addon/mode/multiplex';

CodeMirror.defineMode("demo", (config) => {
    return CodeMirror.multiplexingMode(
        CodeMirror.getMode(config, "text/html"),
        {
            open: '<<',
            close: '>>',
            mode: CodeMirror.getMode(config, 'text/plain'),
            delimStyle: 'delimit'
        },
        {
            open: '{{',
            close: '}}',
            mode: CodeMirror.getMode(config, 'template/mustache'),
            delimStyle: 'delimit',
            innerStyle: 'expression',
        }
    );
});
