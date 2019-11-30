import { parse } from 'graphql';
import { Configuration } from 'graphql-schema-linter/lib/configuration';
import { validateSchemaDefinition } from 'graphql-schema-linter/lib/validator';
import { ValidationError } from 'graphql-schema-linter/lib/validation_error';
import { DefinedTypesAreUsed } from 'graphql-schema-linter/lib/rules/defined_types_are_used';
import { DeprecationsHaveAReason } from 'graphql-schema-linter/lib/rules/deprecations_have_a_reason';
import { EnumValuesAllCaps } from 'graphql-schema-linter/lib/rules/enum_values_all_caps';
import { EnumValuesHaveDescriptions } from 'graphql-schema-linter/lib/rules/enum_values_have_descriptions';
import { EnumValuesSortedAlphabetically } from 'graphql-schema-linter/lib/rules/enum_values_sorted_alphabetically';
import { FieldsHaveDescriptions } from 'graphql-schema-linter/lib/rules/fields_have_descriptions';
import { InputObjectValuesAreCamelCased } from 'graphql-schema-linter/lib/rules/input_object_values_are_camel_cased';
import { InputObjectValuesHaveDescriptions } from 'graphql-schema-linter/lib/rules/input_object_values_have_descriptions';
import { RelayConnectionArgumentsSpec } from 'graphql-schema-linter/lib/rules/relay_connection_arguments_spec';
import { RelayConnectionTypesSpec } from 'graphql-schema-linter/lib/rules/relay_connection_types_spec';
import { RelayPageInfoSpec } from 'graphql-schema-linter/lib/rules/relay_page_info_spec';
import { TypesAreCapitalized } from 'graphql-schema-linter/lib/rules/types_are_capitalized';
import { FieldsAreCamelCased } from 'graphql-schema-linter/lib/rules/fields_are_camel_cased';
import { TypesHaveDescriptions } from 'graphql-schema-linter/lib/rules/types_have_descriptions';

const schema = `Query {
  field: String!
}`;

const AST = parse(schema);

const configuration = new Configuration({
  configDirectory: './',
  commentDescriptions: true,
  format: 'someFormat',
  rules: ['fields-are-camel-cased']
}, null);

const rules = [
  DeprecationsHaveAReason,
  EnumValuesAllCaps,
  EnumValuesHaveDescriptions,
  EnumValuesSortedAlphabetically,
  FieldsAreCamelCased,
  FieldsHaveDescriptions,
  InputObjectValuesAreCamelCased,
  InputObjectValuesHaveDescriptions,
  RelayConnectionArgumentsSpec,
  RelayConnectionTypesSpec,
  RelayPageInfoSpec,
  TypesAreCapitalized,
  TypesHaveDescriptions,
  DefinedTypesAreUsed,
];

validateSchemaDefinition(configuration.getSchema(), rules, configuration);
validateSchemaDefinition(`Query { field: String!}`, configuration.getRules(), configuration);

validateSchemaDefinition(`Query { field: String!}`, [FieldsAreCamelCased, TypesHaveDescriptions], configuration);
new ValidationError('TypesHaveDescriptions', 'type Example has no Description', [AST]);
