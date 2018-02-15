import dateArithmetic = require('dateArithmetic');

dateArithmetic.add(new Date(2010, 7, 23), 2, 'second');
dateArithmetic.add(new Date(2010, 7, 23), 2, 'minutes');
dateArithmetic.add(new Date(2010, 7, 23), 2, 'hours');
dateArithmetic.add(new Date(2010, 7, 23), 2, 'day');
dateArithmetic.add(new Date(2010, 7, 23), 2, 'week');
dateArithmetic.add(new Date(2010, 7, 23), 2, 'month');
dateArithmetic.add(new Date(2010, 7, 23), 2, 'year');
dateArithmetic.add(new Date(2010, 7, 23), 2, 'decade');
dateArithmetic.add(new Date(2010, 7, 23), 2, 'century');

dateArithmetic.subtract(new Date(2010, 7, 30), 1, 'second');
dateArithmetic.subtract(new Date(2010, 7, 29), 2, 'minutes');
dateArithmetic.subtract(new Date(2010, 7, 28), 3, 'hours');
dateArithmetic.subtract(new Date(2010, 7, 27), 4, 'day');
dateArithmetic.subtract(new Date(2010, 7, 26), 5, 'week');
dateArithmetic.subtract(new Date(2010, 7, 24), 6, 'month');
dateArithmetic.subtract(new Date(2010, 7, 23), 7, 'year');
dateArithmetic.subtract(new Date(2010, 7, 22), 8, 'decade');
dateArithmetic.subtract(new Date(2010, 7, 21), 9, 'century');
