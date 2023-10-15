import { DEFAULT_COLORS, from, nearestColor } from "nearest-color";

nearestColor("#800");

from(["#800"])("#fff");
from(["#800"])("#fff", DEFAULT_COLORS);
from(["#800"])("#fff", [{
    rgb: { r: 0, g: 1, b: 2 },
    source: "#fff",
    name: "myColor",
}]);
