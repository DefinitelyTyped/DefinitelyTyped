import appdynamics = require('appdynamics');

// $ExpectType void
appdynamics.profile({
    controllerHostName: 'host-name',
    controllerPort: 443,
    controllerSslEnabled: true,
    tierName: 'tier-name',
    nodeName: 'node-name',
});
