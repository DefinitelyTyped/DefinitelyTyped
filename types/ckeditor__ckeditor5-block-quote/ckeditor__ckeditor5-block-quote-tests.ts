import { BlockQuote, BlockQuoteEditing, BlockQuoteUI } from '@ckeditor/ckeditor5-block-quote';
import BlockQuoteCommand from '@ckeditor/ckeditor5-block-quote/src/blockquotecommand';
import { Editor } from '@ckeditor/ckeditor5-core';

class MyEditor extends Editor {}
const editor = new MyEditor();

new BlockQuote(editor);
BlockQuote.requires.length === 2;
BlockQuote.requires.map(Plugin => {
    new Plugin(editor).init();
});

new BlockQuoteEditing(editor).init();
new BlockQuoteUI(editor).init();

new BlockQuoteCommand(editor).execute();
new BlockQuoteCommand(editor).execute({ forceValue: true });

// $ExpectType BlockQuote
editor.plugins.get('BlockQuote');

// $ExpectType BlockQuoteEditing
editor.plugins.get('BlockQuoteEditing');

// $ExpectType BlockQuoteUI
editor.plugins.get('BlockQuoteUI');

// $ExpectType BlockQuoteCommand | undefined
editor.commands.get('BlockQuoteCommand');
