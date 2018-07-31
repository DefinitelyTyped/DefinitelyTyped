


var doc = new CodeMirror.Doc('text some string and another text match');
var cursor = doc.getSearchCursor('text', new CodeMirror.Pos(0,0), false);
cursor = doc.getSearchCursor('text', new CodeMirror.Pos(0,0));
cursor = doc.getSearchCursor('text');


cursor.find(false);
cursor.findNext();
cursor.findPrevious();
cursor.from();
cursor.to();
cursor.replace("blah");
cursor.replace("text", "origin");
