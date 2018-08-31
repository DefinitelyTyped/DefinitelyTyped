import moduleAlias = require('module-alias');

moduleAlias('path'); // $ExpectType void
moduleAlias({ base : 'path' }); // $ExpectType void

moduleAlias.isPathMatchesAlias('./path', '@alias'); // $ExpectType boolean

moduleAlias.addPath('path'); // $ExpectType void
moduleAlias.addAliases({ alias : 'path', anotherAlias : 'anotherPath' }); // $ExpectType void
moduleAlias.addAlias('@alias', 'somePath'); // $ExpectType void

moduleAlias.reset(); // $ExpectType void
