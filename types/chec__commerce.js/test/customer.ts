import Commerce = require('@chec/commerce.js');

const commerce = new Commerce('{your_public_key}');

const email = 'test@test.com';
const base_url = 'at';
const customerId = 'cstmr_VNplJa1EaYwL60';
const token = 'token';
const orderId = 'ord_p7ZAMo1xwNJ4xX';

commerce.customer.login(email, base_url).then((response) => {});
commerce.customer.getToken(token, true).then((response) => {});
commerce.customer.update({}, customerId, token).then((response) => {});
commerce.customer.getOrders(customerId, token, {}).then((response) => {});
commerce.customer.getOrder(orderId, customerId, token).then((response) => {});
commerce.customer.about().then((response) => {});
commerce.customer.id();
commerce.customer.token();
commerce.customer.isLoggedIn();
commerce.customer.logout();
