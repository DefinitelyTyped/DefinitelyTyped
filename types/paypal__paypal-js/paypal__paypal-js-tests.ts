import paypaljs = require('@paypal/paypal-js');

paypaljs.loadScript({"client-id": "foo"}).then(paypal => {
    paypal.Buttons().render('#your-container-element');
});
