import CKDataTransfer from '@ckeditor/ckeditor5-clipboard/src/datatransfer';
import { Editor } from '@ckeditor/ckeditor5-core';
import PluginCollection from '@ckeditor/ckeditor5-core/src/plugincollection';
import { DowncastWriter, StylesProcessor, ViewDocument } from '@ckeditor/ckeditor5-engine';
import Schema from '@ckeditor/ckeditor5-engine/src/model/schema';
import { default as ModelSelection, default as Selection } from '@ckeditor/ckeditor5-engine/src/model/selection';
import Writer from '@ckeditor/ckeditor5-engine/src/model/writer';
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
    ImageUploadEditing,
    ImageUploadProgress,
    ImageUploadUI,
} from '@ckeditor/ckeditor5-image';
import {
    downcastSrcsetAttribute,
    upcastImageFigure,
    upcastPicture,
} from '@ckeditor/ckeditor5-image/src/image/converters';
import ImageLoadObserver from '@ckeditor/ckeditor5-image/src/image/imageloadobserver';
import ImageTypeCommand from '@ckeditor/ckeditor5-image/src/image/imagetypecommand';
import InsertImageCommand from '@ckeditor/ckeditor5-image/src/image/insertimagecommand';
import * as ImageUIUtils from '@ckeditor/ckeditor5-image/src/image/ui/utils';
import * as utils from '@ckeditor/ckeditor5-image/src/image/utils';
import ImageBlock from '@ckeditor/ckeditor5-image/src/imageblock';
import ImageCaptionUI from '@ckeditor/ckeditor5-image/src/imagecaption/imagecaptionui';
import ImageCaptionUtils from '@ckeditor/ckeditor5-image/src/imagecaption/imagecaptionutils';
import ToggleImageCaptionCommand from '@ckeditor/ckeditor5-image/src/imagecaption/toggleimagecaptioncommand';
import ImageInsertFormRowView from '@ckeditor/ckeditor5-image/src/imageinsert/ui/imageinsertformrowview';
import ImageInsertPanelView from '@ckeditor/ckeditor5-image/src/imageinsert/ui/imageinsertpanelview';
import * as ImageInsertUtils from '@ckeditor/ckeditor5-image/src/imageinsert/utils';
import ResizeImageCommand from '@ckeditor/ckeditor5-image/src/imageresize/resizeimagecommand';
import * as ImageStyleConverters from '@ckeditor/ckeditor5-image/src/imagestyle/converters';
import ImageStyleCommand from '@ckeditor/ckeditor5-image/src/imagestyle/imagestylecommand';
import { default as ImageStyleutils } from '@ckeditor/ckeditor5-image/src/imagestyle/utils';
import ImageTextAlternativeCommand from '@ckeditor/ckeditor5-image/src/imagetextalternative/imagetextalternativecommand';
import TextAlternativeFormView from '@ckeditor/ckeditor5-image/src/imagetextalternative/ui/textalternativeformview';
import { isHtmlIncluded } from '@ckeditor/ckeditor5-image/src/imageupload/imageuploadediting';
import UploadImageCommand from '@ckeditor/ckeditor5-image/src/imageupload/uploadimagecommand';
import * as ImageUploadUtils from '@ckeditor/ckeditor5-image/src/imageupload/utils';
import ImageUtils from '@ckeditor/ckeditor5-image/src/imageutils';
import PictureEditing from '@ckeditor/ckeditor5-image/src/pictureediting';
import { Locale } from '@ckeditor/ckeditor5-utils';

const downcastWriter = new DowncastWriter(new ViewDocument(new StylesProcessor()));
class MyEditor extends Editor {}
const editor = new MyEditor();
const modelElement = new Writer().createElement('div');
const viewElement = downcastWriter.createEmptyElement('div');
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

new ImageLoadObserver(new View(new StylesProcessor()));

// @ts-expect-error
new InsertImageCommand(editor).execute();
// @ts-expect-error
new InsertImageCommand(editor).execute('');
// @ts-expect-error
new InsertImageCommand(editor).execute(['']);
new InsertImageCommand(editor).execute({ source: '' });
new InsertImageCommand(editor).execute({ source: ['', ''] });

// $ExpectType ((targetRect: Rect, elementRect: Rect) => Position | null)[]
ImageUIUtils.getBalloonPositionData(editor).positions;
ImageUIUtils.repositionContextualBalloon(editor);

// $ExpectType boolean
imageUtils.isImage(modelElement);
// $ExpectType Element | null
imageUtils.insertImage({
    src: 'foo',
});
// $ExpectType boolean
imageUtils.isBlockImage(modelElement);
// $ExpectType boolean
imageUtils.isInlineImage(modelElement);
// $ExpectType boolean
imageUtils.isBlockImageView(viewElement);
// $ExpectType boolean
imageUtils.isInlineImageView(viewElement);
// $ExpectType number
imageUtils.findViewImgElement(viewElement).getPath()[0];

// $ExpectType Element | null
new ImageCaptionUtils(editor).getCaptionFromModelSelection(new Selection());
// $ExpectType true | undefined
new ImageCaptionUtils(editor).matchImageCaptionViewElement(viewElement)?.name;
// $ExpectType Element | null
new ImageCaptionUtils(editor).getCaptionFromImageModelElement(modelElement);

// @ts-expect-error
new ImageInsertFormRowView();
new ImageInsertFormRowView(new Locale());

new ImageInsertPanelView(new Locale()).destroy();

ImageInsertUtils.prepareIntegrations(editor).foo.setTemplate;
ImageInsertUtils.createLabeledInputView(new Locale()).setTemplate;

new ResizeImageCommand(editor).execute({ width: null });

ImageStyleConverters.modelToViewStyleAttribute([{ icon: '', name: '', className: '', title: '' }]);
ImageStyleConverters.viewToModelStyleAttribute([{ icon: '', name: '', className: '', title: '' }]);

new ImageStyleCommand(editor, [{ icon: '', name: '', className: '', title: '' }]).execute({
    value: '',
});

new ImageTextAlternativeCommand(editor).execute({ newValue: '' });

new TextAlternativeFormView(new Locale()).setTemplate({ tag: 'p' });
new TextAlternativeFormView(new Locale()).destroy();

new UploadImageCommand(editor);

const emptyElement = downcastWriter.createEmptyElement('div');
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

new PictureEditing(editor).afterInit();
PictureEditing.requires.forEach(Plugin => new Plugin(editor));

//
// ImageConfig
//
new MyEditor({
    image: {
        insert: {
            type: 'inline',
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
        styles: {
            options: [
                {
                    name: 'fullSize',
                    icon: '<svg></svg>',
                    title: 'Full size image',
                    className: 'image-full-size',
                    modelElements: ['imageBlock', 'imageInline'],
                },
            ],
        },
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
        styles: {
            options: [
                {
                    name: 'fullSize',
                },
            ],
        },
    },
});

// styles options supports strings and objects
new MyEditor({
    image: {
        styles: {
            options: [
                {
                    name: 'fullSize',
                    icon: '<svg></svg>',
                    title: 'Full size image',
                    className: 'image-full-size',
                },
                '50%',
            ],
        },
    },
});

// $ExpectType MatcherPattern
utils.getImgViewElementMatcher(
    editor,
    utils.determineImageTypeForInsertionAtSelection(new Schema(), new ModelSelection()),
);

// $ExpectType AutoImage
editor.plugins.get('AutoImage');

// $ExpectType Image
editor.plugins.get('Image');

// $ExpectType ImageBlock
editor.plugins.get('ImageBlock');

// $ExpectType ImageBlockEditing
editor.plugins.get('ImageBlockEditing');

// $ExpectType ImageCaption
editor.plugins.get('ImageCaption');

// $ExpectType ImageCaptionEditing
editor.plugins.get('ImageCaptionEditing');

// $ExpectType ImageCaptionUI
editor.plugins.get('ImageCaptionUI');

// $ExpectType ImageCaptionUtils
editor.plugins.get('ImageCaptionUtils');

// $ExpectType ImageEditing
editor.plugins.get('ImageEditing');

// $ExpectType ImageInline
editor.plugins.get('ImageInline');

// $ExpectType ImageInlineEditing
editor.plugins.get('ImageInlineEditing');

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

// $ExpectType ImageUtils
editor.plugins.get('ImageUtils');

// $ExpectType PictureEditing
editor.plugins.get('PictureEditing');

// $ExpectType ImageTypeCommand | undefined
editor.commands.get('ImageTypeCommand');

// $ExpectType InsertImageCommand | undefined
editor.commands.get('InsertImageCommand');

// $ExpectType ToggleImageCaptionCommand | undefined
editor.commands.get('ToggleImageCaptionCommand');

// $ExpectType ResizeImageCommand | undefined
editor.commands.get('ResizeImageCommand');

// $ExpectType ImageStyleCommand | undefined
editor.commands.get('ImageStyleCommand');

// $ExpectType ImageTextAlternativeCommand | undefined
editor.commands.get('ImageTextAlternativeCommand');

// $ExpectType UploadImageCommand | undefined
editor.commands.get('UploadImageCommand');

// $ExpectType (dispatcher: UpcastDispatcher) => void
upcastImageFigure(imageUtils);
// $ExpectType (dispatcher: UpcastDispatcher) => void
upcastPicture(imageUtils);
// $ExpectType (dispatcher: DowncastDispatcher<{}>) => void
downcastSrcsetAttribute(imageUtils, 'imageInline');
// $ExpectType (dispatcher: DowncastDispatcher<{}>) => void
downcastSrcsetAttribute(imageUtils, 'imageBlock');
// $ExpectType (dispatcher: DowncastDispatcher<{}>) => void
downcastSrcsetAttribute(imageUtils, 'imageBlock');

ImageStyleutils.getDefaultStylesConfiguration(true, true);
ImageStyleutils.getDefaultDropdownDefinitions(new PluginCollection(editor));

// $ExpectType ContainerElement
utils.createInlineImageViewElement(downcastWriter);

// $ExpectType ContainerElement
utils.createBlockImageViewElement(downcastWriter);
