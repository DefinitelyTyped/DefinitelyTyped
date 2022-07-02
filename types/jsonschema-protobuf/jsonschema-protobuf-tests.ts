import toProtobuf from 'jsonschema-protobuf';

// $ExpectType string
toProtobuf(`
{
  "type": "object",
  "name": "person",
  "properties": {
    "name": {"type": "string"},
    "age": {"type": "integer", "min": 0, "max": 120},
    "income": {"type": "number", "min": 0},
    "universe": {"type": "string", "enum": ["Marvel", "DC"]},
    "living": {"type": "boolean", "default": true},
    "alterEgos": {"type": "array", "items": {"type": "string"}},
    "location": {
      "type": "object",
      "properties": {
        "city": {"type": "string"},
        "state": {"type": "string", "regex": "/[A-Z]{2}/"}
      }
    }
  },
  "required": ["name", "age", "income"]
}`);

// When the param is incorrect
// @ts-expect-error
toProtobuf(1);
