
import naturalSort = require("natural-sort");

['10. tenth', 'odd', 1, '', '2. second'].sort(naturalSort());
[3, 4, 1, 5, 2].sort(naturalSort({direction: 'desc'}));

['a', 'B'].sort(naturalSort());
['a', 'B'].sort(naturalSort({caseSensitive: true}));
