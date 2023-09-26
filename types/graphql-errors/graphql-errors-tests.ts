import { buildSchema, GraphQLSchema } from "graphql";
import { HandlerFunction, maskErrors, setDefaultHandler, UserError } from "graphql-errors";

// $ExpectType GraphQLSchema
const schema: GraphQLSchema = buildSchema(`
  # graphql schema definition
`);

const customHandler: HandlerFunction = err => {
    return { ...err, message: "Internal error" };
};

/**
 * Mask GraphQL error messages
 */

// $ExpectType void
maskErrors(schema);

// $ExpectType void
maskErrors(schema, customHandler);

// @ts-expect-error
maskErrors("schema");

/**
 * Set callback function that modifies the errors
 */

// $ExpectType void
setDefaultHandler(customHandler);

// @ts-expect-error
setDefaultHandler();

// @ts-expect-error
setDefaultHandler(err => {});

/**
 * Thrown an user error
 */
new UserError("Uh, Houston, we've had a problem");
