import { smartTruncate } from 'smart-truncate';

const length = 9;
let result = '';
result = smartTruncate('Steve Miller', length);
result = smartTruncate('Steve Miller', length, {position: 4});
result = smartTruncate('abcdefghijklmnopqrstuvwxyz', 7, {position: 3, mark: '—'});
