import { extensions as config } from 'interpret';
import { prepare } from 'rechoir';

// $ExpectType true | Attempt[]
prepare(config, './test/fixtures/test.coffee');
prepare(config, './test/fixtures/test.coffee', './');
