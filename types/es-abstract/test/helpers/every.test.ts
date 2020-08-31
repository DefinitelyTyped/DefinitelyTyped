import every = require('es-abstract/helpers/every');

every([1, 2, '3'], v => typeof v === 'number'); // $ExpectType boolean
