import {
  ValueNode,
  /*
    TODO:
    IntValueNode,
    FloatValueNode,
    StringValueNode,
    BooleanValueNode,
    EnumValueNode,
    ListValueNode,
    ObjectValueNode,
    */
} from '../language/ast';
import { GraphQLInputType } from '../type/definition';

/**
 * Produces a GraphQL Value AST given a JavaScript value.
 *
 * A GraphQL type must be provided, which will be used to interpret different
 * JavaScript values.
 *
 * | JSON Value    | GraphQL Value        |
 * | ------------- | -------------------- |
 * | Object        | Input Object         |
 * | Array         | List                 |
 * | Boolean       | Boolean              |
 * | String        | String / Enum Value  |
 * | Number        | Int / Float          |
 * | Mixed         | Enum Value           |
 *
 */
// TODO: this should set overloads according to above the table
export function astFromValue(value: any, type: GraphQLInputType): ValueNode; // Warning: there is a code in bottom: throw new TypeError
