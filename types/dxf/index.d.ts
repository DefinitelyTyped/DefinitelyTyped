import config from "./config";
import denormalise from "./denormalise";
import groupEntitiesByLayer from "./groupEntitiesByLayer";
import Blocks = require("./handlers/blocks");
import Entities = require("./handlers/entities");
import Header = require("./handlers/header");
import Tables = require("./handlers/tables");
import Helper from "./Helper";
import Information = require("./Information");
import Layers = require("./Layers");
import parseString from "./parseString";
import Styles = require("./Styles");
import toPolylines from "./toPolylines";
import toSVG from "./toSVG";
import colors from "./util/colors";
import Utils = require("./Utils");

export { colors, config, denormalise, groupEntitiesByLayer, Helper, parseString, toPolylines, toSVG };

export { Blocks, Entities, Header, Information, Layers, Styles, Tables, Utils };

export as namespace dxf;
