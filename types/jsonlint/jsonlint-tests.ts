import * as jsonlint from 'jsonlint';

const parse = jsonlint.parse(); // $ExpectType Parser

parse('{"id":1234}');
try{
  parse('{id:1234}');
}catch(err){
  // should fail due to invalid JSON format.
}
