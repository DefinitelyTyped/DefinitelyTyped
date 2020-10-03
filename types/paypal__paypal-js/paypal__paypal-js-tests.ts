import paypaljs = require('@paypal/paypal-js');

paypaljs.loadScript({"client-id": "foo"}).then(paypal => {
    paypal.Buttons().render('#your-container-element');
});

paypaljs.findScript("foo", { foo: 'bar' });
paypaljs.insertScriptElement({ url: 'foo', dataAttributes: { foo: 'bar' },
    onSuccess: () => {
    },
    onError: () => {
    }
});
paypaljs.processOptions({ foo: 'bar' });
paypaljs.objectToQueryString({ foo: 'bar' });
