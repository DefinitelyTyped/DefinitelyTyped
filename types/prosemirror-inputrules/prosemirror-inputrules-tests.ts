import * as inputrules from 'prosemirror-inputrules';
import { NodeType } from 'prosemirror-model';

const nodeType = new NodeType();
const rule = inputrules.blockQuoteRule(nodeType);
