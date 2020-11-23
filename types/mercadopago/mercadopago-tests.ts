import * as MercadoPago from 'mercadopago';

const clientId = 'CLIENT_ID';
const clientSecret = 'CLIENT_SECRET';
const accessToken = 'ACCESS_TOKEN';

MercadoPago.configure({
  access_token: accessToken
});

MercadoPago.configurations.configure({
  client_id: clientId,
  client_secret: clientSecret
});
