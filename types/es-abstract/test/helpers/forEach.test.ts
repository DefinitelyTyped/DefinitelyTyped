import forEach = require('es-abstract/helpers/forEach');

forEach([1, 2, '3'], v => {
	v; // $ExpectType string | number
});
