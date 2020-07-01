import * as auth from 'auth-header';

const basic: string = auth.format('Basic');
const basic2: string = auth.format({scheme: 'Basic'});

const parsed: {scheme: string, token: null | string | string[]} = auth.parse('');
