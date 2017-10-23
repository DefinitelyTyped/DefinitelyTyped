import * as RNContacts from 'react-native-contacts';

const contact: RNContacts.Contact = {
  recordID: '1234',
  company: 'Microsoft',
  emailAddresses: [
    {
      label: 'Personal',
      email: 'fake_email@test.com'
    }
  ],
  familyName: 'Smith',
  givenName: 'John Smith',
  middleName: 'William',
  jobTitle: 'Software Engineer',
  phoneNumbers: [
    {
      label: 'Work',
      number: '+12345'
    }
  ],
  hasThumbnail: true,
  thumbnailPath: 'file:///thumbnailPath',
  postalAddresses: [
    {
      label: 'Home',
      formattedAddress: 'Edmonds, Seattle, WA, 98114, USA',
      street: 'Edmonds',
      pobox: '12 33',
      neighborhood: '',
      city: 'Seattle',
      region: 'King',
      state: 'WA',
      postCode: '98114',
      country: 'USA'
    }
  ],
  prefix: 'Mr.',
  suffix: 'PhD.',
  department: 'Engineering',
};

RNContacts.getAll((error: any, contacts: RNContacts.Contact[]) => {}); // $ExpectType void
RNContacts.getAllWithoutPhotos((error: any, contacts: RNContacts.Contact[]) => {}); // $ExpectType void
RNContacts.getPhotoForId('1', (error: any, photoUri: string) => {}); // $ExpectType void
RNContacts.addContact(contact, (error?: any) => {}); // $ExpectType void
RNContacts.updateContact(contact, (error?: any) => {}); // $ExpectType void
RNContacts.deleteContact(contact, (error?: any) => {}); // $ExpectType void
RNContacts.getContactsMatchingString('John Smith', (error: any, contacts: RNContacts.Contact[]) => {}); // $ExpectType void
RNContacts.checkPermission((error: any, result: 'authorized' | 'denied') => {}); // $ExpectType void
RNContacts.requestPermission((error: any, result: 'authorized' | 'denied') => {}); // $ExpectType void
