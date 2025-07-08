import * as React from "react";
import { Button } from "react-native";
import SabPaisaCheckout , {SabpaisaErrorResponse } from "sabpaisa-react-lite";

/**
 * Steps to test
 * 1) Create a Razorpay account.
 * 2) Generate test API Keys from the Razorpay Dashboard and pass the key to the CheckoutOptions
 * 3) Create Order and pass the Order ID to the CheckoutOptions
 * 4) Execute Button's onPress
 * 5) Select a UPI payment option
 * 6) Use UPI ID: success@razorpay to make a successful payment
 * 7) Use UPI ID: failure@razorpay to make a failure payment
 *
 * Reference
 * 1) https://razorpay.com/docs/payments/payment-gateway/quick-integration
 * 2) https://razorpay.com/docs/payments/payment-gateway/quick-integration/build-integration/
 */

const SabpaisaCheckoutOptions = {
    first_name: 'firstnamereact',
    last_name: 'lastnamereact',
    currency: 'INR',
    mobile_number: '9999999999',
    email_id: 'lokesh.d@eywa.com',
    client_code: 'DJ020',
    aes_iv: 'M+aUFgRMPq7ci+Cmoytp3KJ2GPBOwO72Z2Cjbr55zY7++pT9mLES2M5cIblnBtaX',
    aes_key: 'ISTrmmDC2bTvkxzlDRrVguVwetGS8xC/UFPsp6w+Itg=',
    user_name: 'DJL754@sp',
    password: '4q3qhgmJNM4m',
    env: 'staging',
    txn_id: '11223344343',
    amount:'100'
 };

const Test = () => {
    return (
        <>
            <Button
                title="Pay"
                onPress={() => {
                    SabPaisaCheckout.open(SabpaisaCheckoutOptions)
                        .then(data => {
                            // type should match SuccessResponse definition
                            console.log(data);
                        })
                        .catch((error: SabpaisaErrorResponse) => {
                            // type should match ErrorResponse definition
                            // type valid for errors after successful API integration
                            console.log(error);
                        });
                }}
            />
        </>
    );
};
