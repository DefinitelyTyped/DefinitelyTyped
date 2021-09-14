import { Editor } from "@ckeditor/ckeditor5-core";
import { ExportPdf } from "@ckeditor/ckeditor5-export-pdf";
import { ExportPdfConfig } from "@ckeditor/ckeditor5-export-pdf/src/exportpdf";
import ExportPdfCommand from "@ckeditor/ckeditor5-export-pdf/src/exportpdfcommand";

class MyEditor extends Editor {}

const bool: boolean = ExportPdf.isContextPlugin;
const plugin = new ExportPdf(new MyEditor());
if (plugin.destroy) {
    const destroyPromise = plugin.destroy();
    if (destroyPromise instanceof Promise) {
        destroyPromise.then(() => {});
    }
}

let config: ExportPdfConfig = {};
config = {
    converterOptions: {},
};
config = {
    converterOptions: {
        margin_top: 0,
        margin_bottom: "15cm",
        margin_right: "1cm",
        margin_left: 0,
        format: "A6",
        page_orientation: "landscape",
        header_and_footer_css: "",
        footer_html: "",
        header_html: "",
        wait_for_selector: "",
        wait_for_network: false,
        wait_time: 45,
    },
};
config = {
    converterUrl: "",
    dataCallback(editor) {
        return "";
    },
    fileName: "",
    stylesheets: [""],
    tokenUrl: false,
};

config = {
    tokenUrl() {
        return Promise.resolve("");
    },
};
config = {
    tokenUrl: "",
};

new ExportPdfCommand(new MyEditor()).execute();

// $ExpectType ExportPdf
(new MyEditor()).plugins.get('ExportPdf');

// $ExpectType ExportPdfCommand | undefined
(new MyEditor()).commands.get('ExportPdfCommand');
