import { init, scan, connect, deleteConnection, disconnect, getCurrentConnections } from 'node-wifi';

// $ExpectType void
init({
    iface: null,
});

// $ExpectType void
scan((error, networks) => {
    // $ExpectType Error | null
    error;
    // $ExpectType WiFiNetwork[]
    networks;
});

// $ExpectType Promise<void>
connect({ ssid: 'ssid', password: 'password' });

// $ExpectType void
disconnect(error => {
    // $ExpectType Error | null
    error;
});

// $ExpectType void
deleteConnection({ ssid: 'ssid' }, error => {
    // $ExpectType Error | null
    error;
});

getCurrentConnections((error, currentConnections) => {
    // $ExpectType Error | null
    error;
    // $ExpectType WiFiNetwork[]
    currentConnections;
});
