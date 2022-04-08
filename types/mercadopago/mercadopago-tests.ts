import * as MP from 'mercadopago';
import { MercadoPago } from 'mercadopago/interface';
import { Currency } from 'mercadopago/shared/currency';

const clientId = 'CLIENT_ID';
const clientSecret = 'CLIENT_SECRET';
const accessToken = 'ACCESS_TOKEN';

MP.configure({
  access_token: accessToken
});

MP.configurations.configure({
  client_id: clientId,
  client_secret: clientSecret
});

const currencyIdIso4217: Currency = 'USD';

const mpObj: Partial<MercadoPago> = {};
