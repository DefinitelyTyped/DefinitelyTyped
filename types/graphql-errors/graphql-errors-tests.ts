import { GraphQLSchema, buildSchema } from 'graphql';
import {
    UserError,
    maskErrors,
    HandlerFunction,
    setDefaultHandler
} from 'graphql-errors';

// $ExpectType GraphQLSchema
const schema: GraphQLSchema = buildSchema(`
  # graphql schema definition
`);

const customHandler: HandlerFunction = err => {
    return { ...err, message: 'Internal error' };
};

/**
 * Mask GraphQL error messages
 */

// $ExpectType void
maskErrors(schema);

// $ExpectType void
maskErrors(schema, customHandler);

// $ExpectError
maskErrors('schema');

/**
 * Set callback function that modifies the errors
 */

// $ExpectType void
setDefaultHandler(customHandler);

// $ExpectError
setDefaultHandler();

// $ExpectError
setDefaultHandler(err => {});

/**
 * Thrown an user error
 */
new UserError("Uh, Houston, we've had a problem");
