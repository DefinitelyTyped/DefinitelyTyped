import { GraphQLInputType } from 'graphql/type/definition';
import {
    ValueNode,
    VariableNode,
    ListValueNode,
    ObjectValueNode
} from 'graphql/language/ast';


export function valueFromAST(
    valueNode: ValueNode,
    type: GraphQLInputType,
    variables?: {
        [key: string]: any
    }
): any;
