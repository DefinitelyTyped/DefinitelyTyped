import * as CodeMirror from 'codemirror';
import 'codemirror/mode/meta';

const a = CodeMirror.findModeByMIME('foo');
const b = CodeMirror.findModeByExtension('foo');
const c = CodeMirror.findModeByFileName('foo');
const d = CodeMirror.findModeByName('foo');
