import * as React from "react";
import { Button } from "react-native";
import SabPaisaCheckout, { SabpaisaErrorResponse } from "sabpaisa-react-lite";

const SabpaisaCheckoutOptions = {
    first_name: "firstnamereact",
    last_name: "lastnamereact",
    currency: "INR",
    mobile_number: "9999999999",
    email_id: "lokesh.d@eywa.com",
    client_code: "<client_code>",
    aes_iv: "<aes_iv>",
    aes_key: "<aes_key>",
    user_name: "<user_name>",
    password: "<password>",
    env: "staging",
    txn_id: "11223344343",
    amount: "100",
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
