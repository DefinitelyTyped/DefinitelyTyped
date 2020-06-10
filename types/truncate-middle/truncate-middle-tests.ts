import truncateMiddle = require('truncate-middle');

truncateMiddle('text');

truncateMiddle('text', 1);

truncateMiddle('text', 1, 2);

truncateMiddle('text', 1, 2, '...');

truncateMiddle(null);
