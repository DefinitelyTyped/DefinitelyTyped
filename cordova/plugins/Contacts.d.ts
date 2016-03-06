// Type definitions for Apache Cordova Contacts plugin.
// Project: https://github.com/apache/cordova-plugin-contacts
// Definitions by: Microsoft Open Technologies, Inc. <http://msopentech.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// 
// Copyright (c) Microsoft Open Technologies, Inc.
// Licensed under the MIT license.

interface Navigator {
    /** Provides access to the device contacts database. */
    contacts: Contacts;
}

interface Contacts {
    /**
     * The navigator.contacts.create method is synchronous, and returns a new Contact object.
     * This method does not retain the Contact object in the device contacts database,
     * for which you need to invoke the Contact.save method.
     * @param  properties Object with contact fields
     */
    create(properties?: ContactProperties): Contact;
    /**
     * The navigator.contacts.find method executes asynchronously, querying the device contacts database
     * and returning an array of Contact objects. The resulting objects are passed to the onSuccess
     * callback function specified by the onSuccess parameter.
     * @param fields The fields parameter specifies the fields to be used as a search qualifier,
     * and only those results are passed to the onSuccess callback function. A zero-length fields parameter
     * is invalid and results in ContactError.INVALID_ARGUMENT_ERROR. A contactFields value of "*" returns all contact fields.
     * @param onSuccess Success callback function invoked with the array of Contact objects returned from the database
     * @param onError Error callback function, invoked when an error occurs.
     * @param options Search options to filter navigator.contacts.
     */
    find(fields: string[],
        onSuccess: (contacts: Contact[]) => void,
        onError?: (error: ContactError) => void,
        options?: ContactFindOptions): void;
    /**
     * The navigator.contacts.pickContact method launches the Contact Picker to select a single contact.
     * The resulting object is passed to the contactSuccess callback function specified by the contactSuccess parameter.
     * @param onSuccess Success callback function invoked with the array of Contact objects returned from the database
     * @param onError Error callback function, invoked when an error occurs.
     */
    pickContact(onSuccess: (contact: Contact) => void,
        onError: (error: ContactError) => void): void
}

interface ContactProperties {
    /** A globally unique identifier. */
    id?: string;
    /** The name of this Contact, suitable for display to end users. */
    displayName?: string;
    /** An object containing all components of a persons name. */
    name?: ContactName;
    /** A casual name by which to address the contact. */
    nickname?: string;
    /** An array of all the contact's phone numbers. */
    phoneNumbers?: ContactField[];
    /** An array of all the contact's email addresses. */
    emails?: ContactField[];
    /** An array of all the contact's addresses. */
    addresses?: ContactAddress[];
    /** An array of all the contact's IM addresses. */
    ims?: ContactField[];
    /** An array of all the contact's organizations. */
    organizations?: ContactOrganization[];
    /** The birthday of the contact. */
    birthday?: Date;
    /** A note about the contact. */
    note?: string;
    /** An array of the contact's photos. */
    photos?: ContactField[];
    /** An array of all the user-defined categories associated with the contact. */
    categories?: ContactField[];
    /** An array of web pages associated with the contact. */
    urls?: ContactField[];
}

/**
 * The Contact object represents a user's contact. Contacts can be created, stored, or removed
 * from the device contacts database. Contacts can also be retrieved (individually or in bulk)
 * from the database by invoking the navigator.contacts.find method.
 */
interface Contact extends ContactProperties {
    /**
     * Returns a new Contact object that is a deep copy of the calling object, with the id property set to null
     */
    clone(): Contact;
    /**
     * Removes the contact from the device contacts database, otherwise executes an error callback with a ContactError object.
     * @param onSuccess Success callback function invoked on success operation.
     * @param onError Error callback function, invoked when an error occurs.
     */
    remove(
        onSuccess: () => void,
        onError: (error: Error) => void): void;
    /**
     * Saves a new contact to the device contacts database, or updates an existing contact if a contact with the same id already exists.
     * @param onSuccess Success callback function invoked on success operation with che Contact object.
     * @param onError Error callback function, invoked when an error occurs.
     */
    save(
        onSuccess: (contact: Contact) => void,
        onError: (error: Error) => void): void;
}

declare var Contact: {
    /** Constructor of Contact object */
    new(id?: string,
        displayName?: string,
        name?: ContactName,
        nickname?: string,
        phoneNumbers?: ContactField[],
        emails?: ContactField[],
        addresses?: ContactAddress[],
        ims?: ContactField[],
        organizations?: ContactOrganization[],
        birthday?: Date,
        note?: string,
        photos?: ContactField[],
        categories?: ContactField,
        urls?: ContactField[]): Contact
};

/** The ContactError object is returned to the user through the contactError callback function when an error occurs. */
interface ContactError {
    /** Error code */
    code: number;
    /** Error message */
    message: string;
}

declare var ContactError: {
    new(code: number): ContactError;
    UNKNOWN_ERROR: number;
    INVALID_ARGUMENT_ERROR: number;
    TIMEOUT_ERROR: number;
    PENDING_OPERATION_ERROR: number;
    IO_ERROR: number;
    NOT_SUPPORTED_ERROR: number;
    PERMISSION_DENIED_ERROR: number
};

/** Contains different kinds of information about a Contact object's name. */
interface ContactName {
    /** The complete name of the contact. */
    formatted?: string;
    /** The contact's family name. */
    familyName?: string;
    /** The contact's given name. */
    givenName?: string;
    /** The contact's middle name. */
    middleName?: string;
    /** The contact's prefix (example Mr. or Dr.) */
    honorificPrefix?: string;
    /** The contact's suffix (example Esq.). */
    honorificSuffix?: string;
}

declare var ContactName: {
    /** Constructor for ContactName object */
    new(formatted?: string,
        familyName?: string,
        givenName?: string,
        middleName?: string,
        honorificPrefix?: string,
        honorificSuffix?: string): ContactName
};

/**
 * The ContactField object is a reusable component that represents contact fields generically.
 * Each ContactField object contains a value, type, and pref property. A Contact object stores
 * several properties in ContactField[] arrays, such as phone numbers and email addresses.
 * 
 * In most instances, there are no pre-determined values for a ContactField object's type attribute.
 * For example, a phone number can specify type values of home, work, mobile, iPhone,
 * or any other value that is supported by a particular device platform's contact database.
 * However, for the Contact photos field, the type field indicates the format of the returned image:
 * url when the value attribute contains a URL to the photo image, or base64 when the value
 * contains a base64-encoded image string.
 */
interface ContactField {
    /** A string that indicates what type of field this is, home for example. */
    type: string;
    /** The value of the field, such as a phone number or email address. */
    value: string;
    /** Set to true if this ContactField contains the user's preferred value. */
    pref: boolean;
}

declare var ContactField: {
    /** Constructor for ContactField object */
    new(type?: string,
        value?: string,
        pref?: boolean): ContactField
};

/**
 * The ContactAddress object stores the properties of a single address of a contact.
 * A Contact object may include more than one address in a ContactAddress[] array.
 */
interface ContactAddress {
    /** Set to true if this ContactAddress contains the user's preferred value. */
    pref?: boolean;
    /** A string indicating what type of field this is, home for example. */
    type?: string;
    /** The full address formatted for display. */
    formatted?: string;
    /** The full street address. */
    streetAddress?: string;
    /** The city or locality. */
    locality?: string;
    /** The state or region. */
    region?: string;
    /** The zip code or postal code. */
    postalCode?: string;
    /** The country name. */
    country?: string;
}

declare var ContactAddress: {
    /** Constructor of ContactAddress object */
    new(pref?: boolean,
        type?: string,
        formatted?: string,
        streetAddress?: string,
        locality?: string,
        region?: string,
        postalCode?: string,
        country?: string): ContactAddress
};

/**
 * The ContactOrganization object stores a contact's organization properties. A Contact object stores
 * one or more ContactOrganization objects in an array.
 */
interface ContactOrganization {
    /** Set to true if this ContactOrganization contains the user's preferred value. */
    pref?: boolean;
    /** A string that indicates what type of field this is, home for example. */
    type?: string;
    /** The name of the organization. */
    name?: string;
    /** The department the contract works for. */
    department?: string;
    /** The contact's title at the organization. */
    title?: string;
}

declare var ContactOrganization: {
    /** Constructor for ContactOrganization object */
    new(pref?: boolean,
        type?: string,
        name?: string,
        department?: string,
        title?: string): ContactOrganization
};

/** Search options to filter navigator.contacts.  */
interface ContactFindOptions {
    /** The search string used to find navigator.contacts. */
    filter?: string;
    /** Determines if the find operation returns multiple navigator.contacts. */
    multiple?: boolean;
    /* Contact fields to be returned back. If specified, the resulting Contact object only features values for these fields. */
    desiredFields?: string[];
}

declare var ContactFindOptions: {
    /** Constructor for ContactFindOptions object */
    new(filter?: string,
        multiple?: boolean,
        desiredFields?: string[]): ContactFindOptions
};