// Type definitions for react-native-contacts 1.0
// Project: https://github.com/rt2zz/react-native-contacts
// Definitions by: Fitzpasd <https://github.com/Fitzpasd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function getAll(callback: (error: any, contacts: Contact[]) => void): void;
export function getAllWithoutPhotos(callback: (error: any, contacts: Contact[]) => void): void;
export function getPhotoForId(contactId: string, callback: (error: any, photoUri: string) => void): void;
export function addContact(contact: Contact, callback: (error?: any) => void): void;
export function updateContact(contact: Contact, callback: (error?: any) => void): void;
export function deleteContact(contact: Contact, callback: (error?: any) => void): void;
export function getContactsMatchingString(str: string, callback: (error: any, contacts: Contact[]) => void): void;
export function checkPermission(callback: (error: any, result: 'authorized' | 'denied') => void): void;
export function requestPermission(callback: (error: any, result: 'authorized' | 'denied') => void): void;

export interface EmailAddress {
    label: string;
    email: string;
}

export interface PhoneNumber {
    label: string;
    number: string;
}

export interface PostalAddress {
    label: string;
    formattedAddress: string;
    street: string;
    pobox: string;
    neighborhood: string;
    city: string;
    region: string;
    state: string;
    postCode: string;
    country: string;
}

export interface Contact {
    recordID: string;
    company: string;
    emailAddresses: EmailAddress[];
    familyName: string;
    givenName: string;
    middleName: string;
    jobTitle: string;
    phoneNumbers: PhoneNumber[];
    hasThumbnail: boolean;
    thumbnailPath: string;
    postalAddresses: PostalAddress[];
    prefix: string;
    suffix: string;
    department: string;
}
