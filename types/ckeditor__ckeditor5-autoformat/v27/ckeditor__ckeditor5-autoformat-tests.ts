import AF from "@ckeditor/ckeditor5-autoformat";
import blockAutoformatEditing from "@ckeditor/ckeditor5-autoformat/src/blockautoformatediting";
import inlineAutoformatEditing from "@ckeditor/ckeditor5-autoformat/src/inlineautoformatediting";
import { Editor } from "@ckeditor/ckeditor5-core";

class MyEditor extends Editor {}
const autoformat = new AF.Autoformat(new MyEditor());
autoformat.afterInit();

blockAutoformatEditing(new MyEditor(), autoformat, /foo/, "foo");
blockAutoformatEditing(new MyEditor(), autoformat, /foo/, arg => {
    arg?.index;
    return;
});

inlineAutoformatEditing(new MyEditor(), autoformat, /foo/, writer => {
    writer.createText("foo");
    return false;
});

// $ExpectType Autoformat
(new MyEditor()).plugins.get('Autoformat');
