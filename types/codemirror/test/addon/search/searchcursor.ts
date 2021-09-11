import * as CodeMirror from 'codemirror';
import 'codemirror/addon/search/searchcursor';

const cm = CodeMirror(document.body);
const doc = new CodeMirror.Doc('text some string and another text match');
let cursor = doc.getSearchCursor('text', new CodeMirror.Pos(0, 0), false);
cursor = doc.getSearchCursor('text', new CodeMirror.Pos(0, 0));
cursor = doc.getSearchCursor('text');
cursor = cm.getSearchCursor('text');

cursor.find(false);
cursor.findNext();
cursor.findPrevious();
cursor.from();
cursor.to();
cursor.replace('blah');
cursor.replace('text', 'origin');
