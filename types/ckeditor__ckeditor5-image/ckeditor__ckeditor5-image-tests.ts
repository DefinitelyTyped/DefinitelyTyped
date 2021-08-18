import CKDataTransfer from '@ckeditor/ckeditor5-clipboard/src/datatransfer';
import { Editor } from '@ckeditor/ckeditor5-core';
import { DowncastWriter, StylesProcessor, ViewDocument } from '@ckeditor/ckeditor5-engine';
import DowncastDispatcher from '@ckeditor/ckeditor5-engine/src/conversion/downcastdispatcher';
import Selection from '@ckeditor/ckeditor5-engine/src/model/selection';
import Writer from '@ckeditor/ckeditor5-engine/src/model/writer';
import Document from '@ckeditor/ckeditor5-engine/src/view/document';
import View from '@ckeditor/ckeditor5-engine/src/view/view';
import {
    AutoImage,
    Image,
    ImageCaption,
    ImageCaptionEditing,
    ImageEditing,
    ImageInsert,
    ImageInsertUI,
    ImageResize,
    ImageResizeButtons,
    ImageResizeEditing,
    ImageResizeHandles,
    ImageStyle,
    ImageStyleEditing,
    ImageStyleUI,
    ImageTextAlternative,
    ImageTextAlternativeEditing,
    ImageTextAlternativeUI,
    ImageToolbar,
    ImageUpload,
    ImageUploadProgress,
    ImageUploadUI,
} from '@ckeditor/ckeditor5-image';
import * as ImageConverters from '@ckeditor/ckeditor5-image/src/image/converters';
import ImageLoadObserver from '@ckeditor/ckeditor5-image/src/image/imageloadobserver';
import ImageTypeCommand from '@ckeditor/ckeditor5-image/src/image/imagetypecommand';
import ImageInsertCommand from '@ckeditor/ckeditor5-image/src/image/insertimagecommand';
import * as ImageUIUtils from '@ckeditor/ckeditor5-image/src/image/ui/utils';
import ImageBlock from '@ckeditor/ckeditor5-image/src/imageblock';
import ImageCaptionUI from '@ckeditor/ckeditor5-image/src/imagecaption/imagecaptionui';
import ToggleImageCaptionCommand from '@ckeditor/ckeditor5-image/src/imagecaption/toggleimagecaptioncommand';
import * as ImageCaptionUtils from '@ckeditor/ckeditor5-image/src/imagecaption/utils';
import ImageInsertFormRowView from '@ckeditor/ckeditor5-image/src/imageinsert/ui/imageinsertformrowview';
import ImageInsertPanelView from '@ckeditor/ckeditor5-image/src/imageinsert/ui/imageinsertpanelview';
import * as ImageInsertUtils from '@ckeditor/ckeditor5-image/src/imageinsert/utils';
import ImageResizeCommand from '@ckeditor/ckeditor5-image/src/imageresize/resizeimagecommand';
import * as ImageStyleConverters from '@ckeditor/ckeditor5-image/src/imagestyle/converters';
import ImageStyleCommand from '@ckeditor/ckeditor5-image/src/imagestyle/imagestylecommand';
import ImageStyleUtils from '@ckeditor/ckeditor5-image/src/imagestyle/utils';
import ImageAlternateCommand from '@ckeditor/ckeditor5-image/src/imagetextalternative/imagetextalternativecommand';
import TextAlternativeFormView from '@ckeditor/ckeditor5-image/src/imagetextalternative/ui/textalternativeformview';
import ImageUploadEditing, { isHtmlIncluded } from '@ckeditor/ckeditor5-image/src/imageupload/imageuploadediting';
import ImageUploadCommand from '@ckeditor/ckeditor5-image/src/imageupload/uploadimagecommand';
import * as ImageUploadUtils from '@ckeditor/ckeditor5-image/src/imageupload/utils';
import ImageUtils from '@ckeditor/ckeditor5-image/src/imageutils';
import PictureEditing from '@ckeditor/ckeditor5-image/src/pictureediting';
import { Locale } from '@ckeditor/ckeditor5-utils';

class MyEditor extends Editor {}
const editor = new MyEditor();
const bool = true;
const modelElement = new Writer().createElement('div');
const viewElement = new DowncastWriter(new ViewDocument(new StylesProcessor())).createEmptyElement('div');
const imageUtils = new ImageUtils(editor);

AutoImage.requires.map(Plugin => new Plugin(editor));
Image.requires.map(Plugin => new Plugin(editor));
ImageCaption.requires.map(Plugin => new Plugin(editor).init());
ImageInsert.requires.map(Plugin => new Plugin(editor));
ImageResize.requires.map(Plugin => new Plugin(editor).init());
ImageResizeButtons.requires.map(Plugin => new Plugin(editor).init());
ImageResizeHandles.requires.map(Plugin => new Plugin(editor).init());
ImageStyle.requires.map(Plugin => new Plugin(editor).init());
ImageTextAlternative.requires.map(Plugin => new Plugin(editor).init());
ImageTextAlternativeUI.requires.map(Plugin => new Plugin(editor));
ImageToolbar.requires.map(Plugin => new Plugin(editor).init?.());
ImageUpload.requires.map(Plugin => new Plugin(editor).init());
ImageUploadEditing.requires.map(Plugin => new Plugin(editor));

new AutoImage(editor);
new Image(editor);
new ImageEditing(editor);
new ImageCaption(editor);
new ImageCaptionEditing(editor);
new ImageInsert(editor);
new ImageInsertUI(editor);
new ImageResize(editor);
new ImageResizeButtons(editor);
new ImageResizeEditing(editor);
new ImageResizeHandles(editor);
new ImageStyle(editor);
new ImageStyleEditing(editor);
new ImageStyleUI(editor);
new ImageTextAlternative(editor);
new ImageTextAlternativeEditing(editor);
new ImageTextAlternativeUI(editor).destroy();
new ImageToolbar(editor);
new ImageUpload(editor);
new ImageUploadEditing(editor);
new ImageUploadProgress(editor);
new ImageUploadUI(editor);

isHtmlIncluded(new CKDataTransfer(new DataTransfer()));

const downcastdispatcher = null;
ImageConverters.viewFigureToModel()(downcastdispatcher as unknown as DowncastDispatcher);
ImageConverters.srcsetAttributeConverter()(downcastdispatcher as unknown as DowncastDispatcher);
ImageConverters.modelToViewAttributeConverter('foo')(downcastdispatcher as unknown as DowncastDispatcher);

new ImageLoadObserver(new View(new StylesProcessor()));

new ImageInsertCommand(editor).execute();
new ImageInsertCommand(editor).execute('');
new ImageInsertCommand(editor).execute(['']);

ImageUIUtils.getBalloonPositionData(editor).positions;
ImageUIUtils.repositionContextualBalloon(editor);

imageUtils.isImage(modelElement) === bool;
imageUtils.insertImage({
    src: 'foo',
});
imageUtils.isBlockImage(modelElement) === bool;
imageUtils.isInlineImage(modelElement) === bool;
imageUtils.isBlockImageView(viewElement) === bool;
imageUtils.isInlineImageView(viewElement) === bool;
imageUtils.findViewImgElement(viewElement).getPath()[0] === 0;

ImageCaptionUtils.getCaptionFromModelSelection(imageUtils, new Selection(null)) === null;
ImageCaptionUtils.matchImageCaptionViewElement(imageUtils, viewElement)!.name === bool;
ImageCaptionUtils.getCaptionFromImageModelElement(modelElement) === modelElement;

new ImageInsertFormRowView(new Locale());

new ImageInsertPanelView(new Locale());

ImageInsertUtils.prepareIntegrations(editor).foo.setTemplate;
ImageInsertUtils.createLabeledInputView(new Locale()).setTemplate;

new ImageResizeCommand(editor).execute({ width: null });

ImageStyleConverters.modelToViewStyleAttribute([{ icon: '', name: '', className: '', title: '' }]);
ImageStyleConverters.viewToModelStyleAttribute([{ icon: '', name: '', className: '', title: '' }]);

new ImageStyleCommand(editor, [{ icon: '', name: '', className: '', title: '' }]).execute({
    value: '',
});

new ImageAlternateCommand(editor).execute({ newValue: '' });

new TextAlternativeFormView().setTemplate;

new ImageUploadCommand(editor);

const emptyElement = new DowncastWriter(new Document(new StylesProcessor())).createEmptyElement('div');
ImageUploadUtils.isLocalImage(imageUtils, emptyElement);
ImageUploadUtils.fetchLocalImage(emptyElement);

new ImageBlock(editor);
ImageBlock.requires.forEach(Plugin => new Plugin(editor));

new ImageTypeCommand(editor, 'imageBlock').execute() === null;
new ImageTypeCommand(editor, 'imageBlock').execute()!.oldElement === viewElement;

new ImageCaptionUI(editor).init();
ImageCaptionUI.requires[0].pluginName.startsWith('');

new ToggleImageCaptionCommand(editor).execute();
new ToggleImageCaptionCommand(editor).execute({
    focusCaptionOnShow: true,
});

ImageStyleUtils.isValidOption({ name: 'foo' }, { isBlockPluginLoaded: true, isInlinePluginLoaded: false }) === bool;

new PictureEditing(editor).afterInit();
PictureEditing.requires.forEach(Plugin => new Plugin(editor));
