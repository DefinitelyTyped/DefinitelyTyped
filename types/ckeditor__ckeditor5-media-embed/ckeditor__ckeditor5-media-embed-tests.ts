import { Editor } from '@ckeditor/ckeditor5-core';
import { Element, DowncastWriter, Model, StylesProcessor } from '@ckeditor/ckeditor5-engine';
import Selection from '@ckeditor/ckeditor5-engine/src/view/selection';
import ModelSelection from '@ckeditor/ckeditor5-engine/src/model/selection';
import Document from '@ckeditor/ckeditor5-engine/src/view/document';
import ME from '@ckeditor/ckeditor5-media-embed';
import * as converters from '@ckeditor/ckeditor5-media-embed/src/converters';
import { Locale } from '@ckeditor/ckeditor5-utils';
import MediaRegistry from '@ckeditor/ckeditor5-media-embed/src/mediaregistry';
import Command from '@ckeditor/ckeditor5-media-embed/src/mediaembedcommand';
import View from '@ckeditor/ckeditor5-media-embed/src/ui/mediaformview';
import * as utils from '@ckeditor/ckeditor5-media-embed/src/utils';
import Position from '@ckeditor/ckeditor5-engine/src/model/position';
import EmptyElement from '@ckeditor/ckeditor5-engine/src/view/emptyelement';

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

utils.insertMedia(new Model(), '', new Position(new Element('div'), [4]));
utils.isMediaWidget(new EmptyElement()) !== !0;
utils.toMediaWidget(new EmptyElement(), new DowncastWriter(new Document(new StylesProcessor())), '');
utils.createMediaFigureElement(
    new DowncastWriter(new Document(new StylesProcessor())),
    new MediaRegistry(new Locale(), {}),
    '',
);
utils.getSelectedMediaViewWidget(new Selection());
utils.getSelectedMediaModelWidget(new ModelSelection(null));
