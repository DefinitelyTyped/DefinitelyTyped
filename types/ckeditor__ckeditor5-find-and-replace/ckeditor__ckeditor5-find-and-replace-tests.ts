import { Editor } from '@ckeditor/ckeditor5-core';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import { Element as ModelElement, Model, Range } from '@ckeditor/ckeditor5-engine';
import Position from '@ckeditor/ckeditor5-engine/src/model/position';
import TextProxy from '@ckeditor/ckeditor5-engine/src/model/textproxy';
import { FindAndReplace } from '@ckeditor/ckeditor5-find-and-replace';
import FindAndReplaceEditing from '@ckeditor/ckeditor5-find-and-replace/src/findandreplaceediting';
import FindAndReplaceState from '@ckeditor/ckeditor5-find-and-replace/src/findandreplacestate';
import FindCommand from '@ckeditor/ckeditor5-find-and-replace/src/findcommand';
import FindNextCommand from '@ckeditor/ckeditor5-find-and-replace/src/findnextcommand';
import FindPreviousCommand from '@ckeditor/ckeditor5-find-and-replace/src/findpreviouscommand';
import ReplaceAllCommand from '@ckeditor/ckeditor5-find-and-replace/src/replaceallcommand';
import ReplaceCommand from '@ckeditor/ckeditor5-find-and-replace/src/replacecommand';
import * as utils from '@ckeditor/ckeditor5-find-and-replace/src/utils';

class MyEditor extends Editor {}
const editor = new MyEditor();

ClassicEditor.create('', { plugins: [FindAndReplace] });
FindAndReplace.requires.map(Plugin => new Plugin(editor));

const state = new FindAndReplaceState(new Model());
// $ExpectType string
state.searchText;
// @ts-expect-error
state.searchText = 'foo';
// $ExpectType string
state.replaceText;
// @ts-expect-error
state.replaceText = 'foo';
// $ExpectType boolean
state.matchCase;
// @ts-expect-error
state.matchCase = true;
state.clear(new Model());
// $ExpectType Collection<Result, "id">
state.results;
// @ts-expect-error
state.results = state.results;

state.on('foo', (ev, ...args) => {
    // $ExpectType EventInfo<FindAndReplaceState, "foo">
    ev;
    // $ExpectType any[]
    args;
});

state.set('foo');

const plugin = editor.plugins.get('FindAndReplaceEditing');
if (plugin instanceof FindAndReplaceEditing) {
    plugin.find('')!.map(item => item.marker.getEnd());
}

if (plugin instanceof FindAndReplaceEditing) {
    plugin.state.highlightedResult!.marker.name.startsWith('');
    const command = editor.commands.get('find');
    if (command instanceof FindCommand) {
        const { results } = command.execute('bar', { matchCase: true });
        results.map(item => item.marker.name.startsWith(''));
        command.execute('bar', { wholeWords: true });
        command.execute('bar');

        new FindCommand(editor, state);
        new FindNextCommand(editor, state);
        new FindPreviousCommand(editor, state);
        new ReplaceAllCommand(editor, state).execute('', '');
        new ReplaceAllCommand(editor, state).execute('', state.results);
        new ReplaceCommand(editor, state).execute('', { marker: plugin.state.highlightedResult!.marker });
        new ReplaceCommand(editor, state).execute('bar', results.get(0)!);
    }
}

const range = new Range(new Position(ModelElement.fromJSON({ name: '' }), [0]));

// $ExpectType string
utils.rangeToText(range);

utils
    .findByTextCallback('', { matchCase: true, wholeWords: true })({ text: '' })
    .forEach(item => item.label[0].startsWith(''));

utils.updateFindResultFromRange(
    range,
    new Model(),
    ({ item, text }: { item: ModelElement | TextProxy; text: string }) => {
        console.log(item, text);
        return [{ label: text, start: 0, end: 0 }];
    },
);

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
