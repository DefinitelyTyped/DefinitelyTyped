import { Editor } from '@ckeditor/ckeditor5-core';
import { HtmlEmbed, HtmlEmbedUI, HtmlEmbedEditing } from '@ckeditor/ckeditor5-html-embed';
import InsertHtmlEmbedCommand from '@ckeditor/ckeditor5-html-embed/src/inserthtmlembedcommand';
import UpdateHtmlEmbedCommand from '@ckeditor/ckeditor5-html-embed/src/updatehtmlembedcommand';

class MyEditor extends Editor {}
const editor = new MyEditor();

HtmlEmbed.requires.forEach(Plugin => new Plugin(editor).init());
new HtmlEmbed(editor);

[HtmlEmbedUI, HtmlEmbedEditing].forEach(Plugin => new Plugin(editor).init());

new InsertHtmlEmbedCommand(editor).execute();
new InsertHtmlEmbedCommand(editor).refresh();

new UpdateHtmlEmbedCommand(editor).execute('');
new UpdateHtmlEmbedCommand(editor).refresh();

// $ExpectType HtmlEmbed
editor.plugins.get('HtmlEmbed');

// $ExpectType HtmlEmbedEditing
editor.plugins.get('HtmlEmbedEditing');

// $ExpectType HtmlEmbedUI
editor.plugins.get('HtmlEmbedUI');

// $ExpectType InsertHtmlEmbedCommand | undefined
editor.commands.get('InsertHtmlEmbedCommand');

// $ExpectType UpdateHtmlEmbedCommand | undefined
editor.commands.get('UpdateHtmlEmbedCommand');
