import { Kochava } from 'kochava';

const kochava = Kochava.create(); // $ExpectType KochavaInstance
Kochava.createForNode(); // $ExpectType KochavaInstance
Kochava.createForReact(); // $ExpectType KochavaInstance
Kochava.createForVue(); // $ExpectType KochavaInstance
Kochava.createForAngular(); // $ExpectType KochavaInstance

kochava.startWithAppGuid('app-guid'); // $ExpectType void
kochava.sendPageEvent('page-name', { data: 'data' }); // $ExpectType void
kochava.sendEvent('event-name', { data: 'data' }); // $ExpectType void
kochava.registerIdentityLink('identity-link-name', 'identifier'); // $ExpectType void
kochava.setSleep(true); // $ExpectType void
kochava.getDeviceId(deviceId => {}); // $ExpectType void
kochava.setLogLevel('info'); // $ExpectType void
kochava.shutdown(true); // $ExpectType void
kochava.shutdown(false); // $ExpectType void
kochava.useCookies(true); // $ExpectType void
kochava.useCookies(false); // $ExpectType void
kochava.disableAutoPage(true); // $ExpectType void
kochava.disableAutoPage(false); // $ExpectType void
kochava.executeAdvancedInstruction('wrapper', '{data:"some data"}', () => {}); // $ExpectType void
kochava.registerCustomValue('key', 'value'); // $ExpectType void
kochava.registerCustomDeviceIdentifier('key', 'value'); // $ExpectType void
kochava.getStarted(); // $ExpectType boolean
kochava.performNewKvinit(); // $ExpectType unknown
kochava.checkResendId(); // $ExpectType unknown
kochava.performInstall(); // $ExpectType unknown