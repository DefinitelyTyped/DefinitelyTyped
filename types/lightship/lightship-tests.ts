import { createLightship, BeaconControllerType, UserConfigurationType, LightshipType } from 'lightship';

const lightshipParams: UserConfigurationType = {
    detectKubernetes: false,
    timeout: 1000,
    port: 50,
    signals: ['SIGBUS'],
};

const lightship: LightshipType = createLightship(lightshipParams);

lightship.isServerReady(); // $ExpectType boolean
lightship.isServerShuttingDown(); // $ExpectType boolean
lightship.registerShutdownHandler(() => {}); // $ExpectType void
lightship.shutdown(); // $ExpectType Promise<void>
lightship.signalNotReady(); // $ExpectType void
lightship.signalReady(); // $ExpectType void
lightship.server.headersTimeout; // $ExpectType number

const beacon: BeaconControllerType = lightship.createBeacon({ foo: 'bar' });
beacon.die(); // $ExpectType Promise<void>
