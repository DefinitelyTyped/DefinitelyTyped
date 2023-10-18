import config from "./config";
import denormalise from "./denormalise";
import groupEntitiesByLayer from "./groupEntitiesByLayer";
import * as Blocks from "./handlers/blocks";
import * as Entities from "./handlers/entities";
import * as Header from "./handlers/header";
import * as Tables from "./handlers/tables";
import Helper from "./Helper";
import * as Information from "./Information";
import * as Layers from "./Layers";
import parseString from "./parseString";
import * as Styles from "./Styles";
import toPolylines from "./toPolylines";
import toSVG from "./toSVG";
import colors from "./util/colors";
import * as Utils from "./Utils";

export { colors, config, denormalise, groupEntitiesByLayer, Helper, parseString, toPolylines, toSVG };

export { Blocks, Entities, Header, Information, Layers, Styles, Tables, Utils };

export as namespace dxf;
