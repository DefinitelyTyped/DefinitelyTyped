// Type definitions for @ckeditor/ckeditor5-build-classic 29.0
// Project: https://ckeditor.com/docs/ckeditor5/latest/builds/index.html
// Definitions by: Federico Panico <https://github.com/fedemp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.3
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';

export default class ClassicEditor extends ClassicEditorBase {
    static builtinPlugins: [
        typeof Essentials,
        typeof UploadAdapter,
        typeof Autoformat,
        typeof Bold,
        typeof Italic,
        typeof BlockQuote,
        typeof CKFinder,
        typeof CloudServices,
        typeof EasyImage,
        typeof Heading,
        typeof Image,
        typeof ImageCaption,
        typeof ImageStyle,
        typeof ImageToolbar,
        typeof ImageUpload,
        typeof Indent,
        typeof Link,
        typeof List,
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
                'bold',
                'italic',
                'link',
                'bulletedList',
                'numberedList',
                '|',
                'outdent',
                'indent',
                '|',
                'uploadImage',
                'blockQuote',
                'insertTable',
                'mediaEmbed',
                'undo',
                'redo',
            ];
        };
        image: {
            toolbar: [
                'imageStyle:inline',
                'imageStyle:block',
                'imageStyle:side',
                '|',
                'toggleImageCaption',
                'imageTextAlternative',
            ];
        };
        table: {
            contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'];
        };
        language: string;
    };
}
