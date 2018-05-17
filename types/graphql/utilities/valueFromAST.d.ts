import Maybe from "../tsutils/Maybe";
import { GraphQLInputType } from "../type/definition";
import { ValueNode, VariableNode, ListValueNode, ObjectValueNode } from "../language/ast";

/**
 * Produces a JavaScript value given a GraphQL Value AST.
 *
 * A GraphQL type must be provided, which will be used to interpret different
 * GraphQL Value literals.
 *
 * Returns `undefined` when the value could not be validly coerced according to
 * the provided type.
 *
 * | GraphQL Value        | JSON Value    |
 * | -------------------- | ------------- |
 * | Input Object         | Object        |
 * | List                 | Array         |
 * | Boolean              | Boolean       |
 * | String               | String        |
 * | Int / Float          | Number        |
 * | Enum Value           | Mixed         |
 * | NullValue            | null          |
 *
 */
export function valueFromAST(
    valueNode: Maybe<ValueNode>,
    type: GraphQLInputType,
    variables?: Maybe<{ [key: string]: any }>
): any;
