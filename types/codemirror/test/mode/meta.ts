import * as CodeMirror from 'codemirror';
import { ModeInfo } from 'codemirror/mode/meta';

let info: ModeInfo | undefined = CodeMirror.findModeByName('html');
info = CodeMirror.findModeByMIME('text/sql');
info = CodeMirror.findModeByFileName('JenkinsFile');
info = CodeMirror.findModeByExtension('js');
