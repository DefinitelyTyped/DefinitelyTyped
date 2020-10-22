import ExpiredStorage = require('expired-storage');

const expiredStorage = new ExpiredStorage();

const mjkModel = {
  firstName: 'Maynard',
  middleName: 'James',
  familyName: 'Keenan',
};

expiredStorage.clear();

expiredStorage.setItem('tool', '46&2', 10);

if (expiredStorage.getItem('tool') !== '46&2') {
  throw new Error('.setItem method is not working!');
}

expiredStorage.setJson('mjk', mjkModel, 1);

const mjkTest = expiredStorage.getJson('mjk');

if (typeof mjkTest === 'undefined' || mjkTest.firstName !== mjkModel.firstName || mjkTest.middleName !== mjkModel.middleName || mjkTest.familyName !== mjkModel.familyName) {
  throw new Error('.setJson method is not working!');
}

const keyCheck = expiredStorage.keys(true);

if (keyCheck && keyCheck.length === 2) {
  throw new Error('.keys method has failed.');
}

expiredStorage.setItem('apc', 'brena', 2);

const goBackToSleep = expiredStorage.peek('apc');

if (!goBackToSleep.isExpired && goBackToSleep.value !== 'brena') {
  throw new Error('.peek -- we have expired early... or our value was incorrect...');
}

do {
  // nothing here to see
} while (!expiredStorage.isExpired('apc'));

const expiredKeys = expiredStorage.clearExpired();

if (expiredKeys.indexOf('apc') !== -1) {
  throw new Error('.clearExpired did not work..');
}

if (expiredStorage.getItem('apc') !== null) {
  throw new Error('Expiration as a whole does not work.');
}

expiredStorage.setItem('puscifer', 'the humbling river', 10000);

expiredStorage.updateExpiration('puscifer', 5000);

const checkKeyTime = expiredStorage.getTimeLeft('puscifer');

if (checkKeyTime && checkKeyTime >= 10000) {
  throw new Error('.updateExpiration method is broken -- or .getTimeLeft method is broken.');
}

if (!expiredStorage.isExpired('mjk')) {
  throw new Error('.isExpired or Expiration as a whole is not working...');
}

expiredStorage.clear();
