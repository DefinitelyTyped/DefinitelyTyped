import CKDataTransfer from '@ckeditor/ckeditor5-clipboard/src/datatransfer';
import { Editor } from '@ckeditor/ckeditor5-core';
import { Element, Model, StylesProcessor } from '@ckeditor/ckeditor5-engine';
import ViewElement from '@ckeditor/ckeditor5-engine/src/view/element';
import DowncastDispatcher from '@ckeditor/ckeditor5-engine/src/conversion/downcastdispatcher';
import EmptyElement from '@ckeditor/ckeditor5-engine/src/view/emptyelement';
import View from '@ckeditor/ckeditor5-engine/src/view/view';
import Image from '@ckeditor/ckeditor5-image';
import * as ImageConverters from '@ckeditor/ckeditor5-image/src/image/converters';
import ImageLoadObserver from '@ckeditor/ckeditor5-image/src/image/imageloadobserver';
import ImageInsertCommand from '@ckeditor/ckeditor5-image/src/image/insertimagecommand';
import * as ImageUIUtils from '@ckeditor/ckeditor5-image/src/image/ui/utils';
import * as ImageUtils from '@ckeditor/ckeditor5-image/src/image/utils';
import * as ImageCaptionUtils from '@ckeditor/ckeditor5-image/src/imagecaption/utils';
import ImageInsertFormRowView from '@ckeditor/ckeditor5-image/src/imageinsert/ui/imageinsertformrowview';
import ImageInsertPanelView from '@ckeditor/ckeditor5-image/src/imageinsert/ui/imageinsertpanelview';
import * as ImageInsertUtils from '@ckeditor/ckeditor5-image/src/imageinsert/utils';
import ImageResizeCommand from '@ckeditor/ckeditor5-image/src/imageresize/resizeimagecommand';
import * as ImageStyleConverters from '@ckeditor/ckeditor5-image/src/imagestyle/converters';
import ImageStyleCommand from '@ckeditor/ckeditor5-image/src/imagestyle/imagestylecommand';
import { isHtmlIncluded } from '@ckeditor/ckeditor5-image/src/imageupload/imageuploadediting';
import { Locale } from '@ckeditor/ckeditor5-utils';
import * as ImageStyleUtils from '@ckeditor/ckeditor5-image/src/imagestyle/utils';
import ImageAlternateCommand from '@ckeditor/ckeditor5-image/src/imagetextalternative/imagetextalternativecommand';
import TextAlternativeFormView from '@ckeditor/ckeditor5-image/src/imagetextalternative/ui/textalternativeformview';
import ImageUploadCommand from '@ckeditor/ckeditor5-image/src/imageupload/uploadimagecommand';
import * as ImageUploadUtils from '@ckeditor/ckeditor5-image/src/imageupload/utils';

class MyEditor extends Editor {}
const editor = new MyEditor();

Image.AutoImage.requires.map(Plugin => new Plugin(editor));
Image.Image.requires.map(Plugin => new Plugin(editor));
Image.ImageCaption.requires.map(Plugin => new Plugin(editor).init());
Image.ImageInsert.requires.map(Plugin => new Plugin(editor));
Image.ImageResize.requires.map(Plugin => new Plugin(editor).init());
Image.ImageResizeButtons.requires.map(Plugin => new Plugin(editor).init());
Image.ImageResizeHandles.requires.map(Plugin => new Plugin(editor).init());
Image.ImageStyle.requires.map(Plugin => new Plugin(editor).init());
Image.ImageTextAlternative.requires.map(Plugin => new Plugin(editor).init());
Image.ImageTextAlternativeUI.requires.map(Plugin => new Plugin(editor));
Image.ImageToolbar.requires.map(Plugin => new Plugin(editor).init());
Image.ImageUpload.requires.map(Plugin => new Plugin(editor).init());
Image.ImageUploadEditing.requires.map(Plugin => new Plugin(editor));

new Image.AutoImage(editor);
new Image.Image(editor);
new Image.ImageEditing(editor);
new Image.ImageCaption(editor);
new Image.ImageCaptionEditing(editor);
new Image.ImageInsert(editor);
new Image.ImageInsertUI(editor);
new Image.ImageResize(editor);
new Image.ImageResizeButtons(editor);
new Image.ImageResizeEditing(editor);
new Image.ImageResizeHandles(editor);
new Image.ImageStyle(editor);
new Image.ImageStyleEditing(editor);
new Image.ImageStyleUI(editor);
new Image.ImageTextAlternative(editor);
new Image.ImageTextAlternativeEditing(editor);
new Image.ImageTextAlternativeUI(editor).destroy();
new Image.ImageToolbar(editor);
new Image.ImageUpload(editor);
new Image.ImageUploadEditing(editor);
new Image.ImageUploadProgress(editor);
new Image.ImageUploadUI(editor);

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

ImageUtils.insertImage(new Model());
ImageUtils.isImage(new Element('')) === ImageUtils.isImageWidget(new EmptyElement());
ImageUtils.getViewImgFromWidget(new EmptyElement());

ImageCaptionUtils.isCaption(new EmptyElement());
ImageCaptionUtils.getCaptionFromImage(new Element(''));

new ImageInsertFormRowView(new Locale());

new ImageInsertPanelView(new Locale());

ImageInsertUtils.prepareIntegrations(editor).foo.setTemplate;
ImageInsertUtils.createLabeledInputView(new Locale()).setTemplate;

new ImageResizeCommand(editor).execute({ width: null });

ImageStyleConverters.modelToViewStyleAttribute({ icon: '', name: '', className: '', title: '' });
ImageStyleConverters.viewToModelStyleAttribute({ icon: '', name: '', className: '', title: '' });

new ImageStyleCommand(editor, [{ icon: '', name: '', className: '', title: '' }]).execute({
    value: [{ icon: '', name: '', className: '', title: '' }],
});

ImageStyleUtils.normalizeImageStyles(['']);
ImageStyleUtils.normalizeImageStyles([{ name: '' }]);

new ImageAlternateCommand(editor).execute({ newValue: '' });

new TextAlternativeFormView().setTemplate;

new ImageUploadCommand(editor);

ImageUploadUtils.isLocalImage(new EmptyElement());
ImageUploadUtils.fetchLocalImage(new EmptyElement());
