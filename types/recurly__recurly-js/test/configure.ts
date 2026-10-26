export default function configure () {
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

  window.recurly.configure({
    publicKey: 'my-public-key',
    required: ['cvv'],
    risk: {
      threeDSecure: {
        preflightDeviceDataCollector: {
          enabled: true,
          billingInfoId: 'my-billing-info-id'
        },
        proactive: {
          enabled: true,
          gatewayCode: 'my-gateway-code',
          amount: 10,
          currency: 'USD'
        }
      }
    }
  });

  const elementOptions = {
    selector: 'my-selector',
    format: true,
    inputType: 'text',
    tabIndex: '1',
    coBadgeSelector: true,
    style: {
      invalid: {
        fontSize: '16px'
      },
      padding: '10px',
      placeholder: {
        color: 'red',
        content: 'content'
      }
    }
  };

  window.recurly.configure({
    publicKey: 'my-public-key',
    fields: {
      all: elementOptions,
      number: elementOptions,
      month: elementOptions,
      year: elementOptions,
      cvv: elementOptions,
      card: {
        selector: 'my-card-element-selector',
        inputType: 'mobileSelect',
        displayIcon: true,
        coBadgeSelector: true,
        style: {
          fontSize: '1em',
          placeholder: {
            color: 'gray !important',
            fontWeight: 'bold',
            content: {
              number: 'Card number',
              cvv: 'CVC'
            }
          },
          invalid: {
            fontColor: 'red'
          }
        }
      }
    }
  });

  // @ts-expect-error
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
