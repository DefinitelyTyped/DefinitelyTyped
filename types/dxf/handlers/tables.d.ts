import Layers = require("../Layers");
import Styles = require("../Styles");

export interface DXFTable {
    layers: Layers.Layer[];
    styles: Styles.Style[];
}
