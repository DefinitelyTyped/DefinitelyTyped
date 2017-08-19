import { DocumentNode, Location } from '../language/ast';
import { Source } from '../language/source';
import { GraphQLSchema } from '../type/schema';


/**
 * This takes the ast of a schema document produced by the parse function in
 * src/language/parser.js.
 *
 * If no schema definition is provided, then it will look for types named Query
 * and Mutation.
 *
 * Given that AST it constructs a GraphQLSchema. The resulting schema
 * has no resolve methods, so execution will use default resolvers.
 */
export function buildASTSchema(ast: DocumentNode): GraphQLSchema;

/**
 * Given an ast node, returns its string description based on a contiguous
 * block full-line of comments preceding it.
 */
export function getDescription(node: { loc?: Location }): string;

/**
 * A helper function to build a GraphQLSchema directly from a source
 * document.
*/
export function buildSchema(source: string | Source): GraphQLSchema;
