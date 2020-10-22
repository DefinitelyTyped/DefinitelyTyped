import vex = require("vex-js");

var vexContent = vex.open({
  afterClose: (() => null),
  afterOpen: ((vexContent: JQuery) => null),
  content: "<div><p>Modal</p></div>",
  showCloseButton: false,
  escapeButtonCloses: true,
  overlayClosesOnClick: false,
  appendLocation: "body",
  className: "vex-dialog",
  css: {background: "blue"},
  overlayClassName: "vex-overlay",
  overlayCSS: {border: 0},
  contentClassName: "vex-content",
  contentCSS: {margin: "0 auto"},
  closeClassName: "vex-close",
  closeCSS: {margin: 0}
});

var id = vexContent.data().vex.id;

vex.close(id);
vex.closeByID(id);
vex.closeAll();
