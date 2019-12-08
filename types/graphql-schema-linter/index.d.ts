// Type definitions for graphql-schema-linter 0.2
// Project: https://github.com/cjoudrey/graphql-schema-linter
// Definitions by: Gago <https://github.com/gagoar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Configuration } from './lib/configuration';
import { validateSchemaDefinition } from './lib/validator';

export interface configuration {
    Configuration: Configuration;
}

export interface validator {
    validateSchemaDefinition: typeof validateSchemaDefinition;
}
