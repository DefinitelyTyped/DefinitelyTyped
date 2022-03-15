import { Editor } from '@ckeditor/ckeditor5-core';
import { Highlight, HighlightEditing, HighlightUI } from '@ckeditor/ckeditor5-highlight';
import HighlightCommand from '@ckeditor/ckeditor5-highlight/src/highlightcommand';

class MyEditor extends Editor {}
const editor = new MyEditor();

new Highlight(editor);
Highlight.requires.map(Plugin => new Plugin(editor).init());
new HighlightUI(editor);
new HighlightEditing(editor);

new HighlightCommand(editor).execute();
new HighlightCommand(editor).execute({ value: '' });

// $ExpectType Highlight
editor.plugins.get('Highlight');

// $ExpectType HighlightEditing
editor.plugins.get('HighlightEditing');

// $ExpectType HighlightUI
editor.plugins.get('HighlightUI');

// $ExpectType HighlightCommand | undefined
editor.commands.get('HighlightCommand');
