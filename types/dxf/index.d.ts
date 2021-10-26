// Type definitions for dxf 4.6
// Project: https://github.com/bjnortier/dxf
// Definitions by: Preston Smith <https://github.com/prestonii>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Helper from './Helper';
import * as Blocks from './handlers/blocks';
import * as Entities from './handlers/entities';
import * as Header from './handlers/header';
import * as Information from './Information';
import * as Layers from './Layers';
import * as Styles from './Styles';
import * as Tables from './handlers/tables';
import * as Utils from './Utils';
import colors from './util/colors';
import config from './config';
import parseString from './parseString';
import denormalise from './denormalise';
import groupEntitiesByLayer from './groupEntitiesByLayer';
import toPolylines from './toPolylines';
import toSVG from './toSVG';

export {
  config,
  parseString,
  denormalise,
  groupEntitiesByLayer,
  toPolylines,
  toSVG,
  colors,
  Helper
};

export {
  Blocks,
  Entities,
  Header,
  Information,
  Layers,
  Styles,
  Tables,
  Utils
};

export as namespace dxf;
