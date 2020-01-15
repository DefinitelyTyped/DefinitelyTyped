import { ASTNode, GraphQLError } from 'graphql';
import { Location } from './GraphQLIR';

export type UserError = GraphQLError;

export function createUserError(
  message: string,
  locations?: ReadonlyArray<Location>,
  nodes?: ReadonlyArray<ASTNode>,
): UserError;
