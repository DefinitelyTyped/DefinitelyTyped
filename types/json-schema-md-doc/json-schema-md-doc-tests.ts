import JSONSchemaMarkdown = require('json-schema-md-doc');

const obj = new JSONSchemaMarkdown(); // $ExpectType JSONSchemaMarkdown

// @ts-expect-error
new jsonSchemaMdDoc.JSONSchemaMarkdown('foo');
