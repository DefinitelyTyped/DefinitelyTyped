import { createLightship, BeaconControllerType, ConfigurationInputType, LightshipType } from 'lightship';

const lightshipParams: ConfigurationInputType = {
    detectKubernetes: false,
    gracefulShutdownTimeout: 5_000,
    shutdownHandlerTimeout: 2_000,
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
