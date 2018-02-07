import { GraphQLInputType } from '../type/definition';
import {
  ValueNode,
  VariableNode,
  ListValueNode,
  ObjectValueNode,
} from '../language/ast';

export function valueFromAST(
  valueNode: ValueNode,
  type: GraphQLInputType,
  variables?: {
    [key: string]: any;
  },
): any;
