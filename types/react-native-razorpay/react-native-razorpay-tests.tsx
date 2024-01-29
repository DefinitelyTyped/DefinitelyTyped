import { Button } from "react-native";
import RazorpayCheckout, { ErrorResponse } from "react-native-razorpay";

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

const CheckoutOptions = {
    key: "", // add razorpay key
    amount: 500,
    currency: "INR",
    order_id: "order_Koa8EA83rMMIOP", // replace it with correct order_id
    name: "Ankan",
    description: "Donation for gaming",
    prefill: {
        email: "void@razorpay.com",
        contact: "9191919191",
        name: "Razorpay Software",
    },
    theme: { color: "#F37254" },
    notes: {
        name: "Ankan",
        3: "Points",
    },
};

const Test = () => {
    return (
        <>
            <Button
                title="Pay"
                onPress={() => {
                    RazorpayCheckout.open(CheckoutOptions)
                        .then(data => {
                            // type should match SuccessResponse definition
                            console.log(data);
                        })
                        .catch((error: ErrorResponse) => {
                            // type should match ErrorResponse definition
                            // type valid for errors after successful API integration
                            console.log(error);
                        });
                }}
            />
        </>
    );
};
