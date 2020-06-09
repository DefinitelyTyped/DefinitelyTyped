import * as capitalize from 'capitalize';
// tslint:disable-next-line:no-duplicate-imports
import { words } from 'capitalize';

capitalize('united states');
capitalize('uniTed staTes', true); // $ExpectType string

capitalize.words('united states');
capitalize.words('uniTed staTes', true); // $ExpectType string

capitalize.words('hello-cañapolísas');
capitalize.words("it's a nice day");

words('united states');
