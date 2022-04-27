import parse from 'json-templates';

const templateFromString = parse('{{foo:bar}}');

const templateFromObject = parse({ foo: { value: 'baz' } });

const parameters = templateFromString.parameters;

const processedWithDefaultTemplate = templateFromString();

const processedTemplate = templateFromObject({ foo: { value: 'bar' } });
