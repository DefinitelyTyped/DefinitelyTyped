// $ExpectType string
const version = Sinch.version();

const defaultSinchClient = Sinch.getSinchClientBuilder().applicationKey('app-key').userId('user-id').build();

// $ExpectType Promise<void>
const result = defaultSinchClient.setSupportManagedPush();

// $ExpectType boolean
const isStarted = defaultSinchClient.isStarted();

const call = defaultSinchClient.callClient.getCall('callId');

// $ExpectType Promise<void>
const startSinchClient = defaultSinchClient.start();

defaultSinchClient.addListener({
    onClientFailed: () => {},
    onClientStarted: () => {},
    onCredentialsRequired: () => {},
});

// $ExpectType void
defaultSinchClient.terminate();
