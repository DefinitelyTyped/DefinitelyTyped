import { HandCashConnect } from 'handcash__handcash-connect';

// $ExpectType HandCashConnect
const connect = new HandCashConnect({ appId: '', appSecret: '' });
// $ExpectType string
connect.getChangeSpendLimitsUrl();
// $ExpectType string
connect.getRedirectionUrl();

// $ExpectType HandCashCloudAccount
const account = connect.getAccountFromAuthToken("");

// $ExpectType Profile
const profile = account.profile;
// $ExpectType Promise<UserProfile>
profile.getCurrentProfile();
// $ExpectType Promise<EncryptionKeypair>
profile.getEncryptionKeypair();
// $ExpectType Promise<UserPublicProfile[]>
profile.getFriends();
// $ExpectType Promise<string[]>
profile.getPermissions();
// $ExpectType Promise<DataSignature>
profile.signData({ value: '', format: 'base64' });

// $ExpectType Wallet
const wallet = account.wallet;
// $ExpectType Promise<ExchangeRate>
wallet.getExchangeRate("JPY");
// $ExpectType Promise<PaymentResult>
wallet.getPayment("");
// $ExpectType Promise<SpendableBalance>
wallet.getSpendableBalance("JPY");
// $ExpectType Promise<PaymentResult>
wallet.pay({
  description: '',
  appAction: '',
  payments: [],
  attachment: { value: '', format: '' }
});
