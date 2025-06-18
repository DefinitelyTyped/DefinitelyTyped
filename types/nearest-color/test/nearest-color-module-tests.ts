import * as nearestColor from "nearest-color";

nearestColor("#800");

nearestColor.from(["#800"])("#fff");
nearestColor.from(["#800"])("#fff", nearestColor.DEFAULT_COLORS);
nearestColor.from(["#800"])("#fff", [{
    rgb: { r: 0, g: 1, b: 2 },
    source: "#fff",
    name: "myColor",
}]);
