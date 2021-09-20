import { Editor } from '@ckeditor/ckeditor5-core';
import Indent from '@ckeditor/ckeditor5-indent';
import Command from '@ckeditor/ckeditor5-indent/src/indentblockcommand';
import IndentUsingOffset from '@ckeditor/ckeditor5-indent/src/indentcommandbehavior/indentusingoffset';
import IndentUsingClasses from '@ckeditor/ckeditor5-indent/src/indentcommandbehavior/indentusingclasses';

class MyEditor extends Editor {}
const editor = new MyEditor();

Indent.Indent.requires.map(Plugin => new Plugin(editor).init());
new Indent.Indent(editor);

new Indent.IndentUI(editor);

new Indent.IndentBlock(editor).init();
new Indent.IndentBlock(editor).afterInit();

new Indent.IndentEditing(editor).init();

new Command(editor, { getNextIndent: foo => '' + foo, checkEnabled: foo => foo.startsWith('') }).execute();
new Command(editor, { getNextIndent: foo => foo + '', checkEnabled: foo => foo.startsWith('') }).refresh();

new IndentUsingOffset({ direction: 'forward', offset: 1, unit: '' }).unit.startsWith('');
new IndentUsingOffset({ direction: 'backward', offset: 1, unit: '' }).offset.toFixed();
new IndentUsingOffset({ direction: 'backward', offset: 1, unit: '' }).getNextIndent('')?.startsWith('');
new IndentUsingOffset({ direction: 'backward', offset: 1, unit: '' }).isForward === !0;

new IndentUsingClasses({ direction: 'forward', classes: [''] }).isForward === !0;
new IndentUsingClasses({ direction: 'forward', classes: [''] }).classes.map(c => c.startsWith(''));

// $ExpectType Indent
editor.plugins.get('Indent');

// $ExpectType IndentBlock
editor.plugins.get('IndentBlock');

// $ExpectType IndentEditing
editor.plugins.get('IndentEditing');

// $ExpectType IndentUI
editor.plugins.get('IndentUI');

// $ExpectType IndentBlockCommand | undefined
editor.commands.get("IndentBlockCommand");
