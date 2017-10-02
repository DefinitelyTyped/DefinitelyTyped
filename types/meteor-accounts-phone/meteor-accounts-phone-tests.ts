
let booleanResult: boolean;
const options = {};
function noop() {}

SMS.twilio = {
  FROM: 'me',
  ACCOUNT_SID: 'my-account-sid',
  AUTH_TOKEN: 'my-auth-token'
};

SMS.phoneTemplate = {
  from: 'me',
  text: noop
};

SMS.send(options);
SMS.send(options, noop);

Meteor.loginWithPhoneAndPassword(options, 'password');
Meteor.loginWithPhoneAndPassword('options', 'password');
Meteor.loginWithPhoneAndPassword(options, 'password', noop);
Meteor.loginWithPhoneAndPassword('options', 'password', noop);

Accounts._options = {
  verificationCodeLength: 4,
  verificationMaxRetries: 10,
  verificationRetriesWaitTime: 60 * 1000,
  verificationWaitTime: 10 * 1000,
  sendPhoneVerificationCodeOnCreation: true,
  forbidClientAccountCreation: true,
  phoneVerificationMasterCode: ['1234'],
  adminPhoneNumbers: ['+972546999999']
};

Accounts.createUserWithPhone(options);
Accounts.createUserWithPhone(options, noop);

Accounts.requestPhoneVerification('+972546999999');
Accounts.requestPhoneVerification('+972546999999', noop);

Accounts.verifyPhone('+972546999999', '1234');
Accounts.verifyPhone('+972546999999', '1234', noop);
Accounts.verifyPhone('+972546999999', '1234', '123456');
Accounts.verifyPhone('+972546999999', '1234', '123456', noop);

booleanResult = Accounts.isPhoneVerified();

Accounts.onPhoneVerification(noop);
