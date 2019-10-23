import { init, run, loadConfig } from 'react-native-community__cli';

/*
 * init
 */
// $ExpectType Promise<void>
init('./resources', 'test');
// $ExpectType Promise<void>
init('./resources', ['test', 'test1']);
// $ExpectError
init(1, 'test');
// $ExpectError
init('./resources', 1);

/*
 * run
 */
// $ExpectType Promise<void>
run();
// $ExpectError
run(1);

/*
 * run
 */
// $ExpectType Config
loadConfig('./resources');
// $ExpectError
loadConfig(1);
