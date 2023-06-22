import * as jsonlint from 'jsonlint';

jsonlint.parse('{"id":1234}'); // $ExpectType Record<string, unknown>
try {
  jsonlint.parse('{id:1234}'); // $ExpectType Record<string, unknown>
} catch (err) {
  // should fail due to invalid JSON format.
}
