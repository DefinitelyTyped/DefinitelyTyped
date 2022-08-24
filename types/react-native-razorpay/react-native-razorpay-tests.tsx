import { Button } from 'react-native';
import RazorpayCheckout, { ErrorResponse } from 'react-native-razorpay';

const Test = () => {
    return (
        <>
            <Button
                title="Pay"
                onPress={() => {
                    RazorpayCheckout.open({
                        key: '',
                        amount: 500,
                        currency: 'INR',
                        order_id: 'sdgnsngzv',
                        name: 'Ankan',
                        description: 'Donation for gaming',
                        prefill: {
                            email: 'void@razorpay.com',
                            contact: '9191919191',
                            name: 'Razorpay Software',
                        },
                        theme: { color: '#F37254' },
                        notes: {
                            name: "Ankan",
                            3: "Points"
                        },
                    })
                        .then(data => {
                            console.log(data);
                        })
                        .catch((error: ErrorResponse) => console.log(error));
                }}
            />
        </>
    );
};
