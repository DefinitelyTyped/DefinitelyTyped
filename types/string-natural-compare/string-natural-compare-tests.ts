import naturalCompare from 'string-natural-compare';

naturalCompare('a', 'b');
naturalCompare('a', 'b', { caseInsensitive: true });
naturalCompare('a', 'b', { alphabet: 'ba' });
