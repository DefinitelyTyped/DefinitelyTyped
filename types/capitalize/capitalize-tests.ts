import * as capitalize from 'capitalize';
// tslint:disable-next-line:no-duplicate-imports
import { words } from 'capitalize';

// @ts-expect-error
capitalize();
// $ExpectType string
capitalize('united states');
// $ExpectType string
capitalize('uniTed staTes', true);
// $ExpectType string
capitalize.words('united states');
// $ExpectType string
capitalize.words('uniTed staTes', true);
// $ExpectType string
capitalize.words('uniTed staTes', false);
// $ExpectType string
capitalize.words('hello-cañapolísas');
// $ExpectType string
capitalize.words("it's a nice day", false);
// @ts-expect-error
words();
// $ExpectType string
words('united states');
// $ExpectType string
words('united states', false);
