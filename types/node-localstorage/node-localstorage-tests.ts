import { LocalStorage, JSONStorage } from 'node-localstorage';

const jsonStore = new JSONStorage('./jsonStore');
const textStore = new LocalStorage('./textStore');

interface Person {
  givenName: string;
  middleName: string;
  familyName: string;
}

const mjkModel: Person = {
  givenName: 'Maynard',
  middleName: 'James',
  familyName: 'Keenan',
};

textStore.clear();
jsonStore.clear();

textStore.on('storage', (event) => {
  if (textStore.getItem(event.key) !== event.newValue) {
    throw new Error('textStore: An error occurred with the event handler.');
  }
});

jsonStore.on('storage', (event) => {
  if (jsonStore.getItem(event.key) !== event.newValue) {
    throw new Error('jsonStore: An error occurred with the event handler.');
  }
});

textStore.setItem('tool', '46&2');

if (textStore.getItem('tool') !== '46&2') {
  throw new Error('.setItem method is not working!');
}

jsonStore.setItem('mjk', mjkModel);

if (jsonStore.getItem('mjk') === null) {
  throw new Error('.getItem failed.');
}

const mjkTest: Person = jsonStore.getItem('mjk');

if (mjkTest === null || mjkTest.givenName !== mjkModel.givenName || mjkTest.middleName !== mjkModel.middleName || mjkTest.familyName !== mjkModel.familyName) {
  throw new Error('.setItem method is not working!');
}

const keyCheck = textStore.key(0);

if (keyCheck && keyCheck !== 'tool') {
  throw new Error('.key method has failed.');
}

textStore.clear();
jsonStore.clear();
