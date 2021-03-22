import { ASTNode, GraphQLError } from 'graphql';
import { Location } from './IR';

export type UserError = GraphQLError;

export function createUserError(
  message: string,
  locations?: ReadonlyArray<Location>,
  nodes?: ReadonlyArray<ASTNode>,
): UserError;
