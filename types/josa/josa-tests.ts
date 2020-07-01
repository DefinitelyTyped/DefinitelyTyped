import { josa, getJosaPicker, makeJosaify } from 'josa';

josa('비시스와즈'); // $ExpectType string
josa('사람들#{은} 작동만 되면 그 원리#{는} 신경#{을} 안쓰지'); // $ExpectType string

getJosaPicker('은');
getJosaPicker('은')('사람');

getJosaPicker('이');
getJosaPicker('이')('사람');

getJosaPicker('을');
getJosaPicker('을')('사람');

getJosaPicker('와');
getJosaPicker('와')('사람');

getJosaPicker('로');
getJosaPicker('로')('사람');

makeJosaify('은');
makeJosaify('은')('사람'); // $ExpectType string
