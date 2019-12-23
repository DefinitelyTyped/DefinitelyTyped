import { Agent, Logger } from 'openssi-websdk';

new Agent('a', 'b', 'c', 'd');
new Logger('trace', 'name');
new Logger('wrong', 'name'); // $ExpectError
