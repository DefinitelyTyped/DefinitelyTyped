import * as defaultGateway from 'default-gateway';

defaultGateway.v4().then(result => {
    result; // $ExpectType Gateway
});
defaultGateway.v6().then(result => {
    result; // $ExpectType Gateway
});

defaultGateway.v4.sync(); // $ExpectType Gateway
defaultGateway.v6.sync(); // $ExpectType Gateway
