// Type definitions for @ckeditor/ckeditor5-build-decoupled-document 29.1
// Project: https://ckeditor.com/docs/ckeditor5/latest/builds/index.html
// Definitions by: Federico Panico <https://github.com/fedemp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.3

import DecoupledEditorBase from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import ListStyle from '@ckeditor/ckeditor5-list/src/liststyle';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';

export default class DecoupledEditor extends DecoupledEditorBase {
    static builtinPlugins: [
        typeof Essentials,
        typeof Alignment,
        typeof FontSize,
        typeof FontFamily,
        typeof FontColor,
        typeof FontBackgroundColor,
        typeof UploadAdapter,
        typeof Autoformat,
        typeof Bold,
        typeof Italic,
        typeof Strikethrough,
        typeof Underline,
        typeof BlockQuote,
        typeof CKFinder,
        typeof CloudServices,
        typeof EasyImage,
        typeof Heading,
        typeof Image,
        typeof ImageCaption,
        typeof ImageResize,
        typeof ImageStyle,
        typeof ImageToolbar,
        typeof ImageUpload,
        typeof Indent,
        typeof IndentBlock,
        typeof Link,
        typeof List,
        typeof ListStyle,
        typeof MediaEmbed,
        typeof Paragraph,
        typeof PasteFromOffice,
        typeof Table,
        typeof TableToolbar,
        typeof TextTransformation,
    ];

    static defaultConfig: {
        toolbar: {
            items: [
                'heading',
                '|',
                'fontfamily',
                'fontsize',
                'fontColor',
                'fontBackgroundColor',
                '|',
                'bold',
                'italic',
                'underline',
                'strikethrough',
                '|',
                'alignment',
                '|',
                'numberedList',
                'bulletedList',
                '|',
                'outdent',
                'indent',
                '|',
                'link',
                'blockquote',
                'uploadImage',
                'insertTable',
                'mediaEmbed',
                '|',
                'undo',
                'redo',
            ];
        };
        image: {
            resizeUnit: 'px';
            toolbar: [
                'imageStyle:inline',
                'imageStyle:wrapText',
                'imageStyle:breakText',
                '|',
                'toggleImageCaption',
                'imageTextAlternative',
            ];
        };
        table: {
            contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'];
        };
        // This value must be kept in sync with the language defined in webpack.config.js.
        language: 'en';
    };
}
