import { Editor } from "@ckeditor/ckeditor5-core";
import Batch from "@ckeditor/ckeditor5-engine/src/model/batch";
import { Undo, UndoEditing } from "@ckeditor/ckeditor5-undo";
import UndoUI from "@ckeditor/ckeditor5-undo/src/undoui";
import RedoCommand from "@ckeditor/ckeditor5-undo/src/redocommand";
import UndoCommand from "@ckeditor/ckeditor5-undo/src/undocommand";

class MyEditor extends Editor {}
const editor = new MyEditor();

new Undo(editor);
Undo.requires.map(Plugin => {
    new Plugin(editor).init();
});
Undo.requires.length === 2;

const command = new UndoCommand(editor);
command.execute();
command.execute(new Batch("transparent"));

const redo = new RedoCommand(editor);
redo.execute();
// $ExpectError
redo.execute(new Batch());

// $ExpectType Undo
editor.plugins.get('Undo');

// $ExpectType UndoEditing
editor.plugins.get('UndoEditing');

// $ExpectType UndoUI
editor.plugins.get('UndoUI');

// $ExpectType RedoCommand | undefined
editor.commands.get('RedoCommand');

// $ExpectType UndoCommand | undefined
editor.commands.get('UndoCommand');
