import { getFirstConsistentlyInteractive } from 'tti-polyfill';

getFirstConsistentlyInteractive(); // $ExpectType Promise<number | null>
