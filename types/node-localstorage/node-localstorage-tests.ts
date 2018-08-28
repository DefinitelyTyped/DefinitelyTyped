import { LocalStorage, JSONStorage } from 'node-localstorage';

const jsonStore = new JSONStorage('./jsonStore');
const textStore = new LocalStorage('./textStore');

const mjkModel = {
  firstName: 'Maynard',
  middleName: 'James',
  familyName: 'Keenan',
};

textStore.clear();
jsonStore.clear();

textStore.setItem('tool', '46&2');

if (textStore.getItem('tool') !== '46&2') {
  throw new Error('.setItem method is not working!');
}

jsonStore.setItem('mjk', mjkModel);

const mjkTest = jsonStore.getItem('mjk');

if (mjkTest === null || mjkTest.firstName !== mjkModel.firstName || mjkTest.middleName !== mjkModel.middleName || mjkTest.familyName !== mjkModel.familyName) {
  throw new Error('.setJson method is not working!');
}

const keyCheck = textStore.key(0);

if (keyCheck && keyCheck !== 'tool') {
  throw new Error('.key method has failed.');
}

textStore.clear();
jsonStore.clear();
