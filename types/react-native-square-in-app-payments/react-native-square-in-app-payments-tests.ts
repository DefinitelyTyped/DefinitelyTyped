import {
  SQIPCore,
  SQIPCardEntry,
  SQIPApplePay,
  SQIPGooglePay,
} from 'react-native-square-in-app-payments';

SQIPCore.setSquareApplicationId('');

SQIPCardEntry.setIOSCardEntryTheme({});
SQIPCardEntry.startCardEntryFlow(null, () => {}, () => {});
SQIPCardEntry.startCardEntryFlowWithBuyerVerification(null, () => {}, () => {}, () => {});
SQIPCardEntry.showCardNonceProcessingError('');
SQIPCardEntry.completeCardEntry(() => {});

SQIPApplePay.canUseApplePay();
SQIPApplePay.initializeApplePay('');
SQIPApplePay.requestApplePayNonce({
  countryCode: '',
  currencyCode: '',
  price: '',
  summaryLabel: '',
}, () => {}, () => {}, () => {});
SQIPApplePay.completeApplePayAuthorization(true);
SQIPApplePay.completeApplePayAuthorization(true, '');

SQIPGooglePay.canUseGooglePay();
SQIPGooglePay.initializeGooglePay('', SQIPGooglePay.GooglePayEnvironment.EnvironmentTest);
SQIPGooglePay.requestGooglePayNonce({
  currencyCode: '',
  price: '',
  priceStatus: SQIPGooglePay.GooglePayPriceStatus.TotalPriceStatusFinal,
}, () => {}, () => {}, () => {});
