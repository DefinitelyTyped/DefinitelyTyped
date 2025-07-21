import * as React from "react";
import { Button } from "react-native";
import SabPaisaCheckout, { SabpaisaErrorResponse } from "sabpaisa-react-lib-lite";


const SabpaisaCheckoutOptions = {
    first_name: 'firstnamereact',
    last_name: 'lastnamereact',
    currency: 'INR',
    mobile_number: '9999999999',
    email_id: 'lokesh.d@eywa.com',
    client_code: '<client_code>',
    aes_iv: '<aes_iv>',
    aes_key: '<aes_key>',
    user_name: '<user_name>',
    password: '<password>',
    env: 'staging',
    txn_id: '11223344343',
    amount: '100',
    callback_url: 'http://localhost:8080',
    udf1: '',
    udf2: '',
    udf3: '',
    udf4: '',
    udf5: '',
    udf6: '',
    udf7: '',
    udf8: '',
    udf9: '',
    udf10: '',
    udf11: '',
    udf12: '',
    udf13: '',
    udf14: '',
    udf15: '',
    udf16: '',
    udf17: '',
    udf18: '',
    udf19: '',
    udf20: ''
}

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
