import { Editor } from "@ckeditor/ckeditor5-core";
import { ExportWord } from "@ckeditor/ckeditor5-export-word";
import { ExportWordConfig } from "@ckeditor/ckeditor5-export-word/src/exportword";

class MyEditor extends Editor {}

const bool: boolean = ExportWord.isContextPlugin;
const plugin = new ExportWord(new MyEditor());
plugin.destroy?.()?.then(() => {});

let config: ExportWordConfig = {};
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
        auto_pagination: bool,
    },
};
config = {
    converterUrl: "",
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
