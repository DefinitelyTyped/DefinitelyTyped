
import Gently = require('gently');

var g = new Gently();

g.expect(null, '', () => {
	// ..
})();
g.expect(null, '', 0, () => {
	// ..
})();

g.restore(null, '');
