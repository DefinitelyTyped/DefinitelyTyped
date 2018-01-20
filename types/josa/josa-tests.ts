import { josa, getJosaPicker, makeJosaify } from 'josa';

// $ExpectType string
josa('비시스와즈');
// $ExpectType string
josa('사람들#{은} 작동만 되면 그 원리#{는} 신경#{을} 안쓰지');
// $ExpectError
josa();
// $ExpectError
josa(0);

getJosaPicker('은');
getJosaPicker('은')('사람');
// $ExpectError
getJosaPicker('은')();
// $ExpectError
getJosaPicker('은')(0);

getJosaPicker('이');
getJosaPicker('이')('사람');
// $ExpectError
getJosaPicker('이')();
// $ExpectError
getJosaPicker('이')(0);

getJosaPicker('을');
getJosaPicker('을')('사람');
// $ExpectError
getJosaPicker('을')();
// $ExpectError
getJosaPicker('을')(0);

getJosaPicker('와');
getJosaPicker('와')('사람');
// $ExpectError
getJosaPicker('와')();
// $ExpectError
getJosaPicker('와')(0);

getJosaPicker('로');
getJosaPicker('로')('사람');
// $ExpectError
getJosaPicker('로')();
// $ExpectError
getJosaPicker('로')(0);

// $ExpectError
getJosaPicker();
// $ExpectError
getJosaPicker(0);
// $ExpectError
getJosaPicker('빠');

makeJosaify('은');
// $ExpectType string
makeJosaify('은')('사람');
// $ExpectError
makeJosaify('은')();
// $ExpectError
makeJosaify('은')(0);

// $ExpectError
makeJosaify();
// $ExpectError
makeJosaify(0);
// $ExpectError
makeJosaify('빠');
