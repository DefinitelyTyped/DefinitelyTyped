import Autoformat from "@ckeditor/ckeditor5-autoformat";
import blockAutoformatEditing from "@ckeditor/ckeditor5-autoformat/src/blockautoformatediting";
import inlineAutoformatEditing from "@ckeditor/ckeditor5-autoformat/src/inlineautoformatediting";
import { Editor } from "@ckeditor/ckeditor5-core";

class MyEditor extends Editor {}
const editor = new MyEditor();
const autoformat = new Autoformat.Autoformat(editor);
autoformat.afterInit();

blockAutoformatEditing(editor, autoformat, /foo/, "foo");

blockAutoformatEditing(editor, autoformat, /^\- $/, context => {
    const { match } = context;
    const headingLevel = match[1].length;

    editor.execute("heading", {
        formatId: `heading${headingLevel}`,
    });
});

inlineAutoformatEditing(editor, autoformat, /foo/, writer => {
    writer.createText("foo");
    return false;
});

inlineAutoformatEditing(editor, autoformat, /(\*\*)([^\*]+?)(\*\*)$/g, (writer, rangesToFormat) => {
    const command = editor.commands.get("bold");

    if (!command!.isEnabled) {
        return false;
    }

    writer.setAttribute("bold", true, rangesToFormat[0]);
});

inlineAutoformatEditing(
    editor,
    autoformat,
    text => {
        return {
            remove: [[5, text.length]],
            format: [[0, 0]],
        };
    },
    (writer, rangesToFormat) => {
        const command = editor.commands.get("bold");

        if (!command!.isEnabled) {
            return false;
        }

        writer.setAttribute("bold", true, rangesToFormat[0]);
    },
);
