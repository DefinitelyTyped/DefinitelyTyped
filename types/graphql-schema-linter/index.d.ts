// Type definitions for graphql-schema-linter 0.2
// Project: https://github.com/cjoudrey/graphql-schema-linter
// Definitions by: Gago <https://github.com/gagoar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GraphqlSchemaLinter {
    namespace Configuration {
        interface Options {
            configDirectory?: string;
            format?: string | object;
            rules?: ReadonlyArray<string>;
            schemaPaths?: ReadonlyArray<string>;
            stdin?: boolean;
            commentDescriptions?: boolean;
            oldImplementsSyntax?: boolean;
        }
    }
}
