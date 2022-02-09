import { Editor } from '@ckeditor/ckeditor5-core';
import { DowncastWriter, Element, Model, StylesProcessor } from '@ckeditor/ckeditor5-engine';
import Position from '@ckeditor/ckeditor5-engine/src/model/position';
import ModelSelection from '@ckeditor/ckeditor5-engine/src/model/selection';
import Document from '@ckeditor/ckeditor5-engine/src/view/document';
import Selection from '@ckeditor/ckeditor5-engine/src/view/selection';
import ME from '@ckeditor/ckeditor5-media-embed';
import * as converters from '@ckeditor/ckeditor5-media-embed/src/converters';
import Command from '@ckeditor/ckeditor5-media-embed/src/mediaembedcommand';
import MediaRegistry from '@ckeditor/ckeditor5-media-embed/src/mediaregistry';
import View from '@ckeditor/ckeditor5-media-embed/src/ui/mediaformview';
import * as utils from '@ckeditor/ckeditor5-media-embed/src/utils';
import { Locale } from '@ckeditor/ckeditor5-utils';

class MyEditor extends Editor {}
const editor = new MyEditor();

ME.MediaEmbed.requires.map(Plugin => new Plugin(editor).init());
new ME.MediaEmbed(editor);

ME.MediaEmbedUI.requires.map(Plugin => new Plugin(editor).init());
new ME.MediaEmbedUI(editor).init();

ME.AutoMediaEmbed.requires.map(Plugin => new Plugin(editor));
new ME.AutoMediaEmbed(editor).init();

new ME.MediaEmbedEditing(editor).init();
new ME.MediaEmbedEditing(editor).registry.getMediaViewElement(
    new DowncastWriter(new Document(new StylesProcessor())),
    '',
    { elementName: '', renderMediaPreview: true, renderForEditingView: true },
);
new ME.MediaEmbedEditing(editor).registry.hasMedia('') === !!0;
new ME.MediaEmbedEditing(editor).registry.providerDefinitions?.forEach;
new ME.MediaEmbedEditing(editor).registry.locale.t('');

ME.MediaEmbedToolbar.requires.map(Plugin => new Plugin(editor).init());
new ME.MediaEmbedToolbar(editor).afterInit();

converters.modelToViewUrlAttributeConverter(new MediaRegistry(new Locale(), {}), {
    elementName: '',
    renderMediaPreview: true,
    renderForEditingView: true,
});

new Command(editor).execute('');
new Command(editor).refresh();

new View([() => ''], new Locale()).mediaURLInputValue.startsWith('');
new View([() => ''], new Locale()).url.startsWith('');
new View([() => ''], new Locale()).isValid() === !0;
new View([() => ''], new Locale()).resetFormStatus();
new View([() => ''], new Locale()).urlInputView.render();

utils.insertMedia(new Model(), '', new Position(Element.fromJSON({ name: 'div' }), [4]));
const emptyElement = new DowncastWriter(new Document(new StylesProcessor())).createEmptyElement('foo');
utils.isMediaWidget(emptyElement) !== !0;
utils.toMediaWidget(emptyElement, new DowncastWriter(new Document(new StylesProcessor())), '');
utils.createMediaFigureElement(
    new DowncastWriter(new Document(new StylesProcessor())),
    new MediaRegistry(new Locale(), {}),
    '',
);
utils.getSelectedMediaViewWidget(new Selection());
utils.getSelectedMediaModelWidget(new ModelSelection(null));

// $ExpectType AutoMediaEmbed
editor.plugins.get('AutoMediaEmbed');

// $ExpectType MediaEmbed
editor.plugins.get('MediaEmbed');

// $ExpectType MediaEmbedEditing
editor.plugins.get('MediaEmbedEditing');

// $ExpectType MediaEmbedToolbar
editor.plugins.get('MediaEmbedToolbar');

// $ExpectType MediaEmbedUI
editor.plugins.get('MediaEmbedUI');

// $ExpectType MediaEmbedCommand | undefined
editor.commands.get('MediaEmbedCommand');
