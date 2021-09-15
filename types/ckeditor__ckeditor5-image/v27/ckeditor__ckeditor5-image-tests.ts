import CKDataTransfer from '@ckeditor/ckeditor5-clipboard/src/datatransfer';
import { Editor } from '@ckeditor/ckeditor5-core';
import { DowncastWriter, Model, StylesProcessor, ViewDocument } from '@ckeditor/ckeditor5-engine';
import DowncastDispatcher from '@ckeditor/ckeditor5-engine/src/conversion/downcastdispatcher';
import Writer from '@ckeditor/ckeditor5-engine/src/model/writer';
import Document from '@ckeditor/ckeditor5-engine/src/view/document';
import View from '@ckeditor/ckeditor5-engine/src/view/view';
import Image from '@ckeditor/ckeditor5-image';
import * as ImageConverters from '@ckeditor/ckeditor5-image/src/image/converters';
import ImageLoadObserver from '@ckeditor/ckeditor5-image/src/image/imageloadobserver';
import InsertImageCommand from '@ckeditor/ckeditor5-image/src/image/insertimagecommand';
import * as ImageUIUtils from '@ckeditor/ckeditor5-image/src/image/ui/utils';
import * as ImageUtils from '@ckeditor/ckeditor5-image/src/image/utils';
import * as ImageCaptionUtils from '@ckeditor/ckeditor5-image/src/imagecaption/utils';
import ImageInsertFormRowView from '@ckeditor/ckeditor5-image/src/imageinsert/ui/imageinsertformrowview';
import ImageInsertPanelView from '@ckeditor/ckeditor5-image/src/imageinsert/ui/imageinsertpanelview';
import * as ImageInsertUtils from '@ckeditor/ckeditor5-image/src/imageinsert/utils';
import ResizeImageCommand from '@ckeditor/ckeditor5-image/src/imageresize/resizeimagecommand';
import * as ImageStyleConverters from '@ckeditor/ckeditor5-image/src/imagestyle/converters';
import ImageStyleCommand from '@ckeditor/ckeditor5-image/src/imagestyle/imagestylecommand';
import * as ImageStyleUtils from '@ckeditor/ckeditor5-image/src/imagestyle/utils';
import ImageTextAlternativeCommand from '@ckeditor/ckeditor5-image/src/imagetextalternative/imagetextalternativecommand';
import TextAlternativeFormView from '@ckeditor/ckeditor5-image/src/imagetextalternative/ui/textalternativeformview';
import { isHtmlIncluded } from '@ckeditor/ckeditor5-image/src/imageupload/imageuploadediting';
import UploadImageCommand from '@ckeditor/ckeditor5-image/src/imageupload/uploadimagecommand';
import * as ImageUploadUtils from '@ckeditor/ckeditor5-image/src/imageupload/utils';
import { Locale } from '@ckeditor/ckeditor5-utils';

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

new InsertImageCommand(editor).execute();
new InsertImageCommand(editor).execute('');
new InsertImageCommand(editor).execute(['']);

ImageUIUtils.getBalloonPositionData(editor).positions;
ImageUIUtils.repositionContextualBalloon(editor);

ImageUtils.insertImage(new Model());
ImageUtils.isImage(new Writer().createElement('div')) ===
    ImageUtils.isImageWidget(new DowncastWriter(new ViewDocument(new StylesProcessor())).createEmptyElement('div'));
ImageUtils.getViewImgFromWidget(new DowncastWriter(new ViewDocument(new StylesProcessor())).createEmptyElement('div'));
ImageCaptionUtils.isCaption(new DowncastWriter(new ViewDocument(new StylesProcessor())).createEmptyElement('div'));
ImageCaptionUtils.getCaptionFromImage(new Writer().createElement('div'));

new ImageInsertFormRowView(new Locale());

new ImageInsertPanelView(new Locale());

ImageInsertUtils.prepareIntegrations(editor).foo.setTemplate;
ImageInsertUtils.createLabeledInputView(new Locale()).setTemplate;

new ResizeImageCommand(editor).execute({ width: null });

ImageStyleConverters.modelToViewStyleAttribute([{ icon: '', name: '', className: '', title: '' }]);
ImageStyleConverters.viewToModelStyleAttribute([{ icon: '', name: '', className: '', title: '' }]);

new ImageStyleCommand(editor, [{ icon: '', name: '', className: '', title: '' }]).execute({
    value: [{ icon: '', name: '', className: '', title: '' }],
});

ImageStyleUtils.normalizeImageStyles(['']);
ImageStyleUtils.normalizeImageStyles([{ name: '' }]);

new ImageTextAlternativeCommand(editor).execute({ newValue: '' });

new TextAlternativeFormView().setTemplate;

new UploadImageCommand(editor);

const emptyElement = new DowncastWriter(new Document(new StylesProcessor())).createEmptyElement('div');
ImageUploadUtils.isLocalImage(emptyElement);
ImageUploadUtils.fetchLocalImage(emptyElement);

//
// ImageConfig
//
new MyEditor({
    image: {
        insert: {
            integrations: ['insertImageViaUrl', 'openCKFinder', 'pluginXButton'],
        },
        resizeOptions: [
            {
                name: 'resizeImage:25',
                value: '25',
                icon: 'small',
                label: 'Small',
            },
        ],
        resizeUnit: '%',
        styles: [
            {
                name: 'fullSize',
                icon: '<svg></svg>',
                title: 'Full size image',
                className: 'image-full-size',
            },
        ],
        toolbar: [
            'imageStyle:inline',
            'imageStyle:wrapText',
            'imageStyle:breakText',
            '|',
            'toggleImageCaption',
            'imageTextAlternative',
        ],
        upload: {
            types: ['png', 'jpeg'],
        },
    },
});

// Everything is optional
new MyEditor({
    image: {},
});

// resizeOptions require only name and value
new MyEditor({
    image: {
        resizeOptions: [
            {
                name: 'resizeImage:25',
                value: '25',
            },
        ],
    },
});

// styles options require only name
new MyEditor({
    image: {
        styles: [
            {
                name: 'fullSize',
            },
        ],
    },
});

// styles supports strings and objects
new MyEditor({
    image: {
        styles: [
            {
                name: 'fullSize',
                icon: '<svg></svg>',
                title: 'Full size image',
                className: 'image-full-size',
            },
            '50%',
        ],
    },
});

// $ExpectType AutoImage
editor.plugins.get('AutoImage');

// $ExpectType Image
editor.plugins.get('Image');

// $ExpectType ImageCaption
editor.plugins.get('ImageCaption');

// $ExpectType ImageCaptionEditing
editor.plugins.get('ImageCaptionEditing');

// $ExpectType ImageEditing
editor.plugins.get('ImageEditing');

// $ExpectType ImageInsert
editor.plugins.get('ImageInsert');

// $ExpectType ImageInsertUI
editor.plugins.get('ImageInsertUI');

// $ExpectType ImageResize
editor.plugins.get('ImageResize');

// $ExpectType ImageResizeButtons
editor.plugins.get('ImageResizeButtons');

// $ExpectType ImageResizeEditing
editor.plugins.get('ImageResizeEditing');

// $ExpectType ImageResizeHandles
editor.plugins.get('ImageResizeHandles');

// $ExpectType ImageStyle
editor.plugins.get('ImageStyle');

// $ExpectType ImageStyleEditing
editor.plugins.get('ImageStyleEditing');

// $ExpectType ImageStyleUI
editor.plugins.get('ImageStyleUI');

// $ExpectType ImageTextAlternative
editor.plugins.get('ImageTextAlternative');

// $ExpectType ImageTextAlternativeEditing
editor.plugins.get('ImageTextAlternativeEditing');

// $ExpectType ImageTextAlternativeUI
editor.plugins.get('ImageTextAlternativeUI');

// $ExpectType ImageToolbar
editor.plugins.get('ImageToolbar');

// $ExpectType ImageUpload
editor.plugins.get('ImageUpload');

// $ExpectType ImageUploadEditing
editor.plugins.get('ImageUploadEditing');

// $ExpectType ImageUploadProgress
editor.plugins.get('ImageUploadProgress');

// $ExpectType ImageUploadUI
editor.plugins.get('ImageUploadUI');

// $ExpectType InsertImageCommand | undefined
editor.commands.get('InsertImageCommand');

// $ExpectType ResizeImageCommand | undefined
editor.commands.get('ResizeImageCommand');

// $ExpectType ImageStyleCommand | undefined
editor.commands.get('ImageStyleCommand');

// $ExpectType ImageTextAlternativeCommand | undefined
editor.commands.get('ImageTextAlternativeCommand');

// $ExpectType UploadImageCommand | undefined
editor.commands.get('UploadImageCommand');
