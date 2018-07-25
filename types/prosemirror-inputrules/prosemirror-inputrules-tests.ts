import * as inputrules from 'prosemirror-inputrules';
import { NodeType } from 'prosemirror-model';
import { Transaction } from 'prosemirror-state';

const nodeType = new NodeType();
const rule1: inputrules.InputRule = inputrules.wrappingInputRule(/^\$/, nodeType);
const rule2 = new inputrules.InputRule(/^$/, 'str');
const rule3 = new inputrules.InputRule(/^$/, () => null);
