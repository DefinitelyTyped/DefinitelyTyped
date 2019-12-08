import { Configuration, Rule } from './configuration';
import { ValidationError } from './validation_error';
export function validateSchemaDefinition(
  schemaDefinition: string,
  rules: ReadonlyArray<Rule>,
  configuration: Configuration,
): ReadonlyArray<ValidationError>;
