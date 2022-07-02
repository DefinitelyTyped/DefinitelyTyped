import JsBarcode = require('jsbarcode');

JsBarcode("#barcode", "1234", {
  format: "pharmacode",
  lineColor: "#0aa",
  width: 4,
  height: 40,
  displayValue: false
});

const module = JsBarcode.getModule("CODE128");
