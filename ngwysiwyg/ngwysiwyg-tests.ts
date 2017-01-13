

//import ngWYSIWYG = require("ngWYSIWYG");

var complete: ngWYSIWYG.Config = {
    sanitize: false,
    toolbar: [
        { name: "basicStyling", items: ["bold", "italic", "underline", "strikethrough", "subscript", "superscript", "-", "leftAlign", "centerAlign", "rightAlign", "blockJustify", "-"] },
        { name: "paragraph", items: ["orderedList", "unorderedList", "outdent", "indent", "-"] },
        { name: "doers", items: ["removeFormatting", "undo", "redo", "-"] },
        { name: "colors", items: ["fontColor", "backgroundColor", "-"] },
        { name: "links", items: ["image", "hr", "symbols", "link", "unlink", "-"] },
        { name: "tools", items: ["print", "-"] },
        { name: "styling", items: ["font", "size", "format"] },
    ]
};

var partial: ngWYSIWYG.Config = {
    sanitize: false
};
