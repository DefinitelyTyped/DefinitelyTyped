import {Button} from "react-native";
import ReactNativeRazorpay, {ErrorResponse} from "react-native-razorpay";

const Test = () => {
    <>
        <Button
            title="Pay"
            onPress={() => {
                ReactNativeRazorpay.open({
                    key: "",
                    amount: 500,
                    currency: "INR",
                    order_id: "sdgnsngzv",
                    name: "Ankan",
                    description: "Donation for gaming",
                    prefill: {
                        email: 'void@razorpay.com',
                        contact: '9191919191',
                        name: 'Razorpay Software',
                      },
                    theme: {color: '#F37254'},
                })
                .then((data) => {
                    console.log(data);
                })
                .catch((error: ErrorResponse) => console.log(error))
            }}
        />
    </>
}
