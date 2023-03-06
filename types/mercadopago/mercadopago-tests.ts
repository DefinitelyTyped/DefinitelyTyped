import * as MP from 'mercadopago';
import { MercadoPago } from 'mercadopago/interface';
import { Currency } from 'mercadopago/shared/currency';
import { PayerAdditionalInfo } from 'mercadopago/models/payment/create-payload.model';

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

const payerAdditionalInfoWithoutAddress: PayerAdditionalInfo = {
  first_name: "John",
  last_name: "Doe",
};

const payerAdditionalInfoWithAddress: PayerAdditionalInfo = {
  first_name: "John",
  last_name: "Doe",
  address: {
    street_name: "Street Name",
    street_number: 1234,
    zip_code: "00000",
  }
};

const payerAdditionalInfoWithEmptyAddress: PayerAdditionalInfo = {
  first_name: "John",
  last_name: "Doe",
  address: {},
};

MP.card.delete('customer_id', 'card_id');
MP.card.delete('customer_id', 123456789);
