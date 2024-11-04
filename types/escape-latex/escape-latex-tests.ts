import lescape = require("escape-latex");

lescape("String to be escaped here #yolo");

lescape("Hello   World", {
  preseveFormatting: true,
  escapeMapFn: function (defaultEscapes, formattingEscapes) {
    formattingEscapes[" "] = "\\\\";
    return Object.assign({}, defaultEscapes, formattingEscapes);
  },
});
