import { Editor } from '@ckeditor/ckeditor5-core';
import HL from '@ckeditor/ckeditor5-highlight';
import HLCommand from '@ckeditor/ckeditor5-highlight/src/highlightcommand';

class MyEditor extends Editor {}
const editor = new MyEditor();

new HL.Highlight(editor);
HL.Highlight.requires.map(Plugin => new Plugin(editor).init());
new HL.HighlightUI(editor);
new HL.HighlightEditing(editor);

new HLCommand(editor).execute();
