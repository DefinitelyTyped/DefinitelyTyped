import { Editor } from '@ckeditor/ckeditor5-core';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import { Element, Model, Range } from '@ckeditor/ckeditor5-engine';
import Position from '@ckeditor/ckeditor5-engine/src/model/position';
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace';
import FindAndReplaceEditing from '@ckeditor/ckeditor5-find-and-replace/src/findandreplaceediting';
import FindAndReplaceUI from '@ckeditor/ckeditor5-find-and-replace/src/findandreplaceui';
import FindCommand from '@ckeditor/ckeditor5-find-and-replace/src/findcommand';
import FindNextCommand from '@ckeditor/ckeditor5-find-and-replace/src/findnextcommand';
import FindPreviousCommand from '@ckeditor/ckeditor5-find-and-replace/src/findpreviouscommand';
import ReplaceAllCommand from '@ckeditor/ckeditor5-find-and-replace/src/replaceallcommand';
import ReplaceCommand from '@ckeditor/ckeditor5-find-and-replace/src/replacecommand';
import * as utils from '@ckeditor/ckeditor5-find-and-replace/src/utils';

class MyEditor extends Editor {}
const editor = new MyEditor();

const bool = true;

ClassicEditor.create('', { plugins: [FindAndReplace] });
FindAndReplace.requires.map(Plugin => new Plugin(editor));

const plugin = editor.plugins.get('FindAndReplaceEditing');
if (plugin instanceof FindAndReplaceEditing) {
    plugin.find('')!.map(item => item.marker.getEnd());
}
if (plugin instanceof FindAndReplaceUI) {
    plugin.formView!.findButtonView.isEnabled === bool;
    plugin.formView!.findInputView.fieldView.value = 'cake';
    plugin.formView!.findButtonView.fire('execute');
    plugin.formView!.findNextButtonView.isEnabled === bool;
}

if (plugin instanceof FindAndReplaceEditing) {
    plugin.state.highlightedResult!.marker.name.startsWith('');
    const command = editor.commands.get('find');
    if (command instanceof FindCommand) {
        command.isEnabled === bool;
        plugin.state === command.state;
        const { results } = command.execute('bar', { matchCase: true });
        results.map(item => item.marker.name.startsWith(''));
        command.execute('bar', { wholeWords: true });
        command.execute('bar');

        new FindCommand(editor, command.state);
        new FindNextCommand(editor, command.state);
        new FindPreviousCommand(editor, command.state);
        new ReplaceAllCommand(editor, command.state).execute('', '');
        new ReplaceAllCommand(editor, command.state).execute('', command.state.results);
        new ReplaceCommand(editor, command.state).execute('', { marker: plugin.state.highlightedResult!.marker });
        new ReplaceCommand(editor, command.state).execute('bar', results.get(0)!);
    }
}

const range = new Range(new Position(Element.fromJSON({ name: '' }), [0]));

utils.rangeToText(range).startsWith('') === bool;

utils
    .findByTextCallback('', { matchCase: true, wholeWords: true })({ text: '' })
    .forEach(item => item.label[0].startsWith(''));

utils.updateFindResultFromRange(range, new Model(), (str, options) => {
    str.startsWith('');
    return utils.findByTextCallback(str, options);
});

// $ExpectType FindAndReplace
editor.plugins.get('FindAndReplace');

// $ExpectType FindAndReplaceEditing
editor.plugins.get('FindAndReplaceEditing');

// $ExpectType FindAndReplaceUI
editor.plugins.get('FindAndReplaceUI');

// $ExpectType ReplaceCommand | undefined
editor.commands.get('ReplaceCommand');

// $ExpectType ReplaceAllCommand | undefined
editor.commands.get('ReplaceAllCommand');

// $ExpectType FindCommand | undefined
editor.commands.get('FindCommand');

// $ExpectType FindNextCommand | undefined
editor.commands.get('FindNextCommand');

// $ExpectType FindPreviousCommand | undefined
editor.commands.get('FindPreviousCommand');
