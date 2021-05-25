import Commerce = require('@chec/commerce.js');

const commerce = new Commerce('{your_public_key}');

const email = 'test@test.com';
const base_url = 'at';
const customerId = 'cstmr_VNplJa1EaYwL60';
const token = 'token';
const orderId = 'ord_p7ZAMo1xwNJ4xX';

// $ExpectType Promise<{ success: boolean; }>
commerce.customer.login(email, base_url);

// $ExpectType Promise<{ customer_id: string; jwt: string; }>
commerce.customer.getToken(token, true);

// $ExpectType Promise<any>
commerce.customer.update({}, customerId, token);

// $ExpectType Promise<any>
commerce.customer.getOrders(customerId, token, {});

// $ExpectType Promise<any>
commerce.customer.getOrder(orderId, customerId, token);

// $ExpectType Promise<any>
commerce.customer.about();

// $ExpectType string | null
commerce.customer.id();

// $ExpectType string | null
commerce.customer.token();

// $ExpectType boolean
commerce.customer.isLoggedIn();

// $ExpectType void
commerce.customer.logout();
