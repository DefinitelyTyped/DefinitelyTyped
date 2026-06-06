import rangeMap = require("range-map");

const mapped = rangeMap(50, 0, 100, 0, 1000);
// mapped == 500

const clampMapped = rangeMap(500, 0, 100, 0, 1000, true);
// clampMapped == 1000
