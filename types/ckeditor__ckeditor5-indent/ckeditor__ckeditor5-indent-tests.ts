import { Editor } from '@ckeditor/ckeditor5-core';
import { Indent, IndentBlock, IndentEditing, IndentUI } from '@ckeditor/ckeditor5-indent';
import IndentBlockCommand from '@ckeditor/ckeditor5-indent/src/indentblockcommand';
import IndentUsingClasses from '@ckeditor/ckeditor5-indent/src/indentcommandbehavior/indentusingclasses';
import IndentUsingOffset from '@ckeditor/ckeditor5-indent/src/indentcommandbehavior/indentusingoffset';

class MyEditor extends Editor {}
const editor = new MyEditor();

Indent.requires.map(Plugin => new Plugin(editor).init());
new Indent(editor);

new IndentUI(editor);

new IndentBlock(editor).init();
new IndentBlock(editor).afterInit();

new IndentEditing(editor).init();

new IndentBlockCommand(editor, { getNextIndent: foo => '' + foo, checkEnabled: foo => foo.startsWith('') }).execute();
new IndentBlockCommand(editor, { getNextIndent: foo => foo + '', checkEnabled: foo => foo.startsWith('') }).refresh();

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
