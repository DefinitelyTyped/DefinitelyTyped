import padTimeComponent = require('es-abstract/helpers/padTimeComponent');

padTimeComponent(12); // $ExpectType string
padTimeComponent(123, 4); // $ExpectType string
