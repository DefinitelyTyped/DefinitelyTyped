import BQ from "@ckeditor/ckeditor5-block-quote";
import BlockQuoteCommand from "@ckeditor/ckeditor5-block-quote/src/blockquotecommand";
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
