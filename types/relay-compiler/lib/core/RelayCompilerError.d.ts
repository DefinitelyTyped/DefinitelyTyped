import { ASTNode, GraphQLError } from 'graphql';
import { Location } from './GraphQLIR';

export type UserError = GraphQLError;

export const createUserError: (
  message: string,
  locations?: readonly Location[],
  nodes?: readonly ASTNode[],
) => UserError;
