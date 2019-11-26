import * as burns from 'burns';

interface OrderData {
    userName: string;
    orderId: string;
}

function handleEverything() {
    console.log('Do absolutely nothing! 😄');
}

function sendEmail(message: string) {
    console.log(message);
}

function sendOrderShippedEmail(data: OrderData) {
    sendEmail(`Hi ${data.userName}, Your order ${data.orderId} has been shipped`);
}

burns.configure({
    defaultHandler: handleEverything
});
burns.registerEvents({
    newPurchase: sendOrderShippedEmail
});
burns.dispatch('newPurchase', {
    userName: 'Johnny',
    orderId: 'rand'
});
