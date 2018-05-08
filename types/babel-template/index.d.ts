// Type definitions for babel-template 6.25
// Project: https://github.com/babel/babel/tree/master/packages/babel-template
// Definitions by: Troy Gerwien <https://github.com/yortus>
//                 Marvin Hagemeister <https://github.com/marvinhagemeister>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { BabylonOptions } from 'babylon';
import * as t from 'babel-types';
type Node = t.Node;

// NB: This export doesn't match the handbook example, where `template` is the default export.
// But it does match the runtime behaviour (at least at the time of this writing). For some reason,
// babel-template/lib/index.js has this line at the bottom: module.exports = exports["default"];
export = template;
declare function template(code: string, opts?: BabylonOptions): UseTemplate;

type UseTemplate = (nodes?: {[placeholder: string]: Node}) => Node;
