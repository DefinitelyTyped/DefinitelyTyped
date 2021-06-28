import * as CodeMirror from 'codemirror';
import 'codemirror/addon/runmode/colorize';

CodeMirror.colorize();
CodeMirror.colorize(document.querySelectorAll('pre'));
CodeMirror.colorize(document.querySelectorAll('pre code'), 'text/html');
