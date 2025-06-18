import tableCellStyle = require("@mapbox/hast-util-table-cell-style");

// $ExpectType Root
tableCellStyle({ type: "root", children: [] });

// $ExpectType Element
tableCellStyle({ type: "element", tagName: "div", properties: {}, children: [] });
