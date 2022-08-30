import { APIContracts, APIControllers, Constants } from 'authorizenet';

const params = {
    expiryMonth: '',
    expiryYear: '',
    cardNumber: '',
    securityCode: '',
    username: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    phoneNumber: '',
    zipCode: '',
    federalTaxId: '',
    companyName: '',
};

const merchantAuthenticationType = new APIContracts.MerchantAuthenticationType();
merchantAuthenticationType.setName('process.env.ANET_LOGIN_KEY');
merchantAuthenticationType.setTransactionKey('process.env.ANET_TRANSACTION_KEY');

const interval = new APIContracts.PaymentScheduleType.Interval();
interval.setLength(1);
interval.setUnit(APIContracts.ARBSubscriptionUnitEnum.MONTHS);

const paymentScheduleType = new APIContracts.PaymentScheduleType();
paymentScheduleType.setInterval(interval);
paymentScheduleType.setStartDate('today');
paymentScheduleType.setTotalOccurrences('9999'); // ongoing occurrence
paymentScheduleType.setTrialOccurrences('2');

const creditCard = new APIContracts.CreditCardType();
const formattedExpireDate = params.expiryMonth + params.expiryYear;
creditCard.setExpirationDate(formattedExpireDate);
creditCard.setCardNumber(params.cardNumber);
creditCard.setCardCode(params.securityCode);

const payment = new APIContracts.PaymentType();
payment.setCreditCard(creditCard);

const orderType = new APIContracts.OrderType();

const customer = new APIContracts.CustomerType();
customer.setEmail(params.username);
customer.setPhoneNumber(params.phoneNumber);
customer.setTaxId(params.federalTaxId);

const billTo = new APIContracts.CustomerAddressType();
billTo.setFirstName(params.firstName);
billTo.setLastName(params.lastName);
billTo.setCompany(params.companyName);
billTo.setAddress(params.address);
billTo.setZip(params.zipCode);
billTo.setCountry('USA');

const arbSubscription = new APIContracts.ARBSubscriptionType();
arbSubscription.setName('subscription');
arbSubscription.setPaymentSchedule(paymentScheduleType);
arbSubscription.setAmount('10.00');
arbSubscription.setTrialAmount('0.00');
arbSubscription.setPayment(payment);
arbSubscription.setOrder(orderType);
arbSubscription.setCustomer(customer);
arbSubscription.setBillTo(billTo);
arbSubscription.setShipTo(billTo);

const cardType = APIContracts.ARBGetSubscriptionListOrderFieldEnum.ACCOUNTNUMBER;

const createRequest = new APIContracts.ARBCreateSubscriptionRequest();
createRequest.setMerchantAuthentication(merchantAuthenticationType);
createRequest.setSubscription(arbSubscription);

const ctrl = new APIControllers.ARBCreateSubscriptionController(createRequest.getJSON());
ctrl.setEnvironment(Constants.endpoint.production);

new Promise((resolve, reject) => {
    ctrl.execute(() => {
        const apiResponse = ctrl.getResponse();
        const response = new APIContracts.ARBUpdateSubscriptionResponse(apiResponse);
        if (response !== null) {
            if (response.getMessages().getResultCode() === APIContracts.MessageTypeEnum.OK) {
                resolve(response.getMessages().getResultCode());
            } else {
                reject(new Error(response.getMessages().getMessage()[0].getText()));
            }
        } else {
            reject(new Error('Null response'));
        }
    });
});
