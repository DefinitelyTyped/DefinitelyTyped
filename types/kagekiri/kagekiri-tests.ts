import { querySelector, querySelectorAll } from 'kagekiri';

querySelector('div'); // $ExpectType HTMLElement | null
querySelectorAll('div'); // $ExpectType NodeList
