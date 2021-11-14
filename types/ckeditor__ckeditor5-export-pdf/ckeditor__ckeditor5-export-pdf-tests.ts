import { Editor } from '@ckeditor/ckeditor5-core';
import { ExportPdf } from '@ckeditor/ckeditor5-export-pdf';
import { ExportPdfConfig } from '@ckeditor/ckeditor5-export-pdf/src/exportpdf';
import ExportPdfCommand from '@ckeditor/ckeditor5-export-pdf/src/exportpdfcommand';

class MyEditor extends Editor {}

// $ExpectType false
ExportPdf.isContextPlugin;
// $ExpectType ExportPdf
new ExportPdf(new MyEditor());

let config: ExportPdfConfig = {};
config = {
    converterOptions: {},
};
config = {
    converterOptions: {
        margin_top: 0,
        margin_bottom: '15cm',
        margin_right: '1cm',
        margin_left: 0,
        format: 'A6',
        page_orientation: 'landscape',
        header_and_footer_css: '',
        footer_html: '',
        header_html: '',
        wait_for_selector: '',
        wait_for_network: false,
        wait_time: 45,
    },
};
config = {
    converterUrl: '',
    dataCallback(_editor) {
        return '';
    },
    fileName: '',
    stylesheets: [''],
    tokenUrl: false,
};

config = {
    tokenUrl() {
        return Promise.resolve('');
    },
};
config = {
    tokenUrl: '',
};

new ExportPdfCommand(new MyEditor()).execute();
// $ExpectType false
new ExportPdfCommand(new MyEditor()).affectsData;

// $ExpectType ExportPdf
new MyEditor().plugins.get('ExportPdf');

// $ExpectType ExportPdfCommand | undefined
new MyEditor().commands.get('ExportPdfCommand');
