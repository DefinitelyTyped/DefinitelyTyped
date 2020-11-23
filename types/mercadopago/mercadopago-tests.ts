import mercadopago = require('mercadopago');

const clientId = 'CLIENT_ID';
const clientSecret = 'CLIENT_SECRET';
const accessToken = 'ACCESS_TOKEN';

mercadopago.configurations.configure({
  access_token: accessToken
});

mercadopago.configurations.configure({
  client_id: clientId,
  client_secret: clientSecret
});
