import { Editor } from '@ckeditor/ckeditor5-core';
import { DowncastWriter, StylesProcessor } from '@ckeditor/ckeditor5-engine';
import Document from '@ckeditor/ckeditor5-engine/src/view/document';
import { Mention, MentionEditing, MentionUI } from '@ckeditor/ckeditor5-mention';
import MentionCommand from '@ckeditor/ckeditor5-mention/src/mentioncommand';
import DomWrapperView from '@ckeditor/ckeditor5-mention/src/ui/domwrapperview';
import MentionListItemView from '@ckeditor/ckeditor5-mention/src/ui/mentionlistitemview';
import MentionsView from '@ckeditor/ckeditor5-mention/src/ui/mentionsview';
import { Locale } from '@ckeditor/ckeditor5-utils';

class MyEditor extends Editor {
    static builtinPlugins: [typeof Mention];
}

const myEditor = new MyEditor({
    mention: {
        feeds: [{ marker: '@', minimumCharacters: 1, feed: [{ id: '', text: '' }] }],
    },
});

const element = new DowncastWriter(new Document(new StylesProcessor())).createEmptyElement('');

myEditor.plugins.get(Mention).toMentionAttribute(element, { foo: 'bar' }).foo === 'bar';

// $ExpectError
myEditor.plugins.get(Mention).toMentionAttribute(element).foo.startsWith;

new MentionUI(myEditor).isEnabled = true;

new MentionEditing(myEditor).on('foo', evt => evt.stop());

const command = new MentionCommand(myEditor);

command.execute({
    marker: '@',
    mention: '@John',
    range: myEditor.model.createRange(
        myEditor.model.document.selection.focus!.getShiftedBy(-3),
        myEditor.model.document.selection.focus,
    ),
});

command.execute({
    marker: '@',
    mention: '@John',
    text: '@John Doe',
    range: myEditor.model.createRange(
        myEditor.model.document.selection.focus!.getShiftedBy(-3),
        myEditor.model.document.selection.focus,
    ),
});

command.execute({
    marker: '@',
    mention: '@John',
});

const htmlEl = document.createElement('div');
new DomWrapperView(new Locale(), htmlEl).domElement === htmlEl;
new DomWrapperView(new Locale(), htmlEl).element! === htmlEl;
new DomWrapperView(htmlEl).element! === htmlEl;

new MentionListItemView().children.first!.highlight();

new MentionsView().selected.children.first!.highlight();
new MentionsView().items.first!.highlight();

// $ExpectType Mention
myEditor.plugins.get('Mention');

// $ExpectType MentionEditing
myEditor.plugins.get('MentionEditing');

// $ExpectType MentionUI
myEditor.plugins.get('MentionUI');

// $ExpectType MentionCommand | undefined
myEditor.commands.get('MentionCommand');
