/// Code examples derived from
/// https://developers.google.com/web/fundamentals/discovery-and-monetization/payment-request/

async function makeRequest() {
    if (!window.PaymentRequest) {
        return Promise.reject(new Error("PaymentRequest not available"))
    }

    const methodData = [
        {
            supportedMethods: ["visa", "mastercard"]
        }
    ]

    const details: PaymentDetails = {
        displayItems: [
            {
                label: "Original donation amount",
                amount: { currency: "USD", value : "65.00" }, // US$65.00
            },
            {
                label: "Friends and family discount",
                amount: { currency: "USD", value : "-10.00" }, // -US$10.00
            }
        ],
        total:  {
            label: "Total",
            amount: { currency: "USD", value : "55.00" }, // US$55.00
        }
    }

    const options: PaymentOptions = {
        requestShipping: true,
        requestPayerEmail: true,
        requestPayerPhone: true,
        requestPayerName: true,
        shippingType: 'delivery'
    }

    const request = new window.PaymentRequest(methodData, details, options)
    request.addEventListener("shippingaddresschange", (e: any) => {
		e.updateWith(((details, addr) => {
			if (addr.country === 'US') {
				var shippingOption = {
					id: '',
					label: '',
					amount: {currency: 'USD', value: '0.00'},
					selected: true
				};
				if (addr.region === 'US') {
					shippingOption.id = 'us';
					shippingOption.label = 'Standard shipping in US';
					shippingOption.amount.value = '0.00';
					details.total.amount.value = '55.00';
				} else {
					shippingOption.id = 'others';
					shippingOption.label = 'International shipping';
					shippingOption.amount.value = '10.00';
					details.total.amount.value = '65.00';
				}
				if (details.displayItems.length === 2) {
					details.displayItems.splice(1, 0, shippingOption);
				} else {
					details.displayItems.splice(1, 1, shippingOption);
				}

				details.shippingOptions = [shippingOption];
			} else {
				details.shippingOptions = [];
			}
			return Promise.resolve(details);
		})(details, request.shippingAddress));
	})

    let canMakePayment = await request.canMakePayment()
    if (canMakePayment) {
        return request.show()
    } else {
        throw 'can not make payment on this environment.'
    }
}

async function processPayment(): Promise<PaymentResponse> {
	let paymentResponse: PaymentResponse;
    try {
        paymentResponse = await makeRequest()
    } catch (error) {
        location.href = '/checkout';
        return;
    }

    var paymentData = {
        // payment method string
        method: paymentResponse.methodName,
        // payment details as you requested
        details: paymentResponse.details,
        // shipping address information
        address: paymentResponse.shippingAddress,
        // shipping option
        shippingOption: paymentResponse.shippingOption
    }

    // make call to backend to process payment data
    const ok = await Promise.resolve(true)

    if (ok) {
        paymentResponse.complete("success")
    } else {
        paymentResponse.complete("fail")
    }
}

function onShippingAddressChange(e: any) {
}

document.querySelector("#pay").addEventListener("click", processPayment)
