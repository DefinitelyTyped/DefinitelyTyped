import * as jsonlint from 'jsonlint';

jsonlint.parse('{"id":1234}'); // $ExpectType {id: 1234}
try{
  jsonlint.parse('{id:1234}'); // $ExpectType Error
}catch(err){
  // should fail due to invalid JSON format.
}
