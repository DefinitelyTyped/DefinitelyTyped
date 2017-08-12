import * as inputrules from 'prosemirror-inputrules';
import { NodeType } from 'prosemirror-model';

let nodeType = new NodeType();
let rule = inputrules.blockQuoteRule(nodeType);
