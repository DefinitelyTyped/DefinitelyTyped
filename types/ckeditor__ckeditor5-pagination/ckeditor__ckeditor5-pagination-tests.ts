import { Editor } from '@ckeditor/ckeditor5-core';
import { Pagination } from '@ckeditor/ckeditor5-pagination';
import { PaginationConfig } from '@ckeditor/ckeditor5-pagination/src/pagination';

class MyEditor extends Editor {}
const editor = new MyEditor();

new Pagination(editor);

const config: PaginationConfig = {
    pageMargins: {
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
    },
    pageWidth: '',
    pageHeight: '',
};

// $ExpectType Pagination
editor.plugins.get('Pagination');
