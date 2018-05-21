import * as moduleAlias from 'module-alias';

moduleAlias.isPathMatchesAlias('./path', '@alias'); // $ExpectType boolean
