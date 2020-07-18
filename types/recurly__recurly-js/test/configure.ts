export default function configure() {
  window.recurly.configure('my-public-key');
  window.recurly.configure({
    cors: true,
    currency: 'USD',
    fraud: {
      braintree: {
        deviceData: 'my-device-data'
      },
      kount: {
        dataCollector: false
      },
      litle: {
        sessionId: 'my-session-id'
      }
    },
    publicKey: 'my-public-key',
    required: ['cvv'],
    timeout: 60000
  });

  // $ExpectError
  window.recurly.configure({
    cors: true,
    currency: 'USD',
    fraud: {
      braintree: {
        deviceData: 'my-device-data'
      },
      kount: {
        dataCollector: false
      },
      litle: {
        sessionId: 'my-session-id'
      }
    },
    required: ['cvv'],
    timeout: 60000
  });
}
