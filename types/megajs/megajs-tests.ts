import mega from 'megajs';

// $ExpectType Storage
mega({email: 'test@test.net', password: '1234'});

// tslint:disable-next-line no-duplicate-imports
import { Storage } from 'megajs';

const storage = new Storage({email: 'test@test.net', password: '1234'});
