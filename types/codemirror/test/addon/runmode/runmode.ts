import * as CodeMirror from 'codemirror';
import 'codemirror/addon/runmode/runmode';

const query = 'SELECT * FROM Table';

CodeMirror.runMode(query, 'text/x-sql', document.body);
CodeMirror.runMode(query, 'text/x-sql', (text, style, row, column, state) => {});
