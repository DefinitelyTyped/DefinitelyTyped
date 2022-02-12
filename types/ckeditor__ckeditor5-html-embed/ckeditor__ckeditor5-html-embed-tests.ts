import { Editor } from '@ckeditor/ckeditor5-core';
import { HtmlEmbed, HtmlEmbedUI, HtmlEmbedEditing } from '@ckeditor/ckeditor5-html-embed';
import HtmlEmbedCommand from '@ckeditor/ckeditor5-html-embed/src/htmlembedcommand';

class MyEditor extends Editor {}
const editor = new MyEditor();

HtmlEmbed.requires.forEach(Plugin => new Plugin(editor).init());
new HtmlEmbed(editor);

[HtmlEmbedUI, HtmlEmbedEditing].forEach(Plugin => new Plugin(editor).init());

new HtmlEmbedCommand(editor).execute();
new HtmlEmbedCommand(editor).refresh();
new HtmlEmbedCommand(editor).execute('');

// $ExpectType HtmlEmbed
editor.plugins.get('HtmlEmbed');

// $ExpectType HtmlEmbedEditing
editor.plugins.get('HtmlEmbedEditing');

// $ExpectType HtmlEmbedUI
editor.plugins.get('HtmlEmbedUI');

// $ExpectType HtmlEmbedCommand | undefined
editor.commands.get('HtmlEmbedCommand');
