import { Editor } from '@ckeditor/ckeditor5-core';
import { HorizontalLine, HorizontalLineEditing, HorizontalLineUI } from '@ckeditor/ckeditor5-horizontal-line';
import HorizontalLineCommand from '@ckeditor/ckeditor5-horizontal-line/src/horizontallinecommand';

class MyEditor extends Editor {}
const editor = new MyEditor();

new HorizontalLine(editor);
HorizontalLine.requires.map(Plugin => new Plugin(editor).init());

new HorizontalLineUI(editor);
new HorizontalLineEditing(editor);

new HorizontalLineCommand(editor).execute();
new HorizontalLineCommand(editor).refresh();

// $ExpectType HorizontalLine
editor.plugins.get('HorizontalLine');

// $ExpectType HorizontalLineEditing
editor.plugins.get('HorizontalLineEditing');

// $ExpectType HorizontalLineUI
editor.plugins.get('HorizontalLineUI');

// $ExpectType EditorUI
editor.plugins.get('HorizontalLineUI').editor.ui;

// $ExpectType HorizontalLineCommand | undefined
editor.commands.get('horizontalLine');

editor.commands.get('horizontalLine')?.execute();
// @ts-expect-error
editor.commands.get('horizontalLine')?.execute(true);

editor.commands.get('horizontalLine')?.on(
    'execute',
    ev => {
        // $ExpectType EventInfo<HorizontalLineCommand, "execute">
        ev;
    },
    { priority: 'lowest' },
);

editor.commands.get('horizontalLine')?.off('execute', ev => {
    // $ExpectType EventInfo<HorizontalLineCommand, "execute">
    ev;
});

editor.commands.get('horizontalLine')?.fire('execute');
// @ts-expect-error
editor.commands.get('horizontalLine')?.fire('execute', true);
