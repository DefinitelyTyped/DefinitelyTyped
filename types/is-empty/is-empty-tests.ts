import isEmpty = require('is-empty');

isEmpty({});
isEmpty(null);
isEmpty(undefined);
isEmpty(9);
isEmpty(new Object());
isEmpty(Array);
isEmpty('');
isEmpty(() => {});
