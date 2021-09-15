import BQ from "@ckeditor/ckeditor5-block-quote";
import BlockQuoteCommand from "@ckeditor/ckeditor5-block-quote/src/blockquotecommand";
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import BlockQuoteEditing from '@ckeditor/ckeditor5-block-quote/src/blockquoteediting';
import BlockQuoteUI from '@ckeditor/ckeditor5-block-quote/src/blockquoteui';
import { Editor } from "@ckeditor/ckeditor5-core";

class MyEditor extends Editor {}
const editor = new MyEditor();

new BQ.BlockQuote(editor);
BQ.BlockQuote.requires.length === 2;
BQ.BlockQuote.requires.map(Plugin => {
    new Plugin(editor).init();
});

new BQ.BlockQuoteEditing(editor).init();
new BQ.BlockQuoteUI(editor).init();

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
