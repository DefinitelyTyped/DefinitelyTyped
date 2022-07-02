import { timeout } from 'timeout';

timeout('name', 10, () => console.log('I work!')); // $ExpectType string
