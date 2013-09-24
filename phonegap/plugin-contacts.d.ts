interface ContactAddress {
    pref: boolean;
    type: string;
    formatted: string;
    streetAddress: string;
    locality: string;
    region: string;
    postalCode: string;
    country: string;
}

interface ContactField {
    type: string;
    value: string;
    pref: boolean;
}
declare var ContactField: {
    new(type: string, calue: string, perf: boolean): ContactField;
}

interface Contact {
    id: string;
    displayName: string;
    name: ContactName;
    nickname: string;
    phoneNumbers: ContactField[];
    emails: ContactField[];
    addresses: ContactAddress[];
    ims: ContactField[];
    organizations: ContactOrganization[];
    birthday: Date;
    note: string;
    photos: ContactField[];
    categories: ContactField[];
    urls: ContactField[];

    save(onSuccess?: (contacts: Contacts) => any, onError?: (contactError: ContactError) => any);
    remove(onSuccess?: (contacts: Contacts) => any, onError?: (contactError: ContactError) => any);
    clone(): Contact;
}

interface ContactFindOptions {
    filter?: string;
    multiple?: boolean;
}
declare var ContactFindOptions : {
    new(): ContactFindOptions;
}

interface ContactName {
    formatted: string;
    familyName: string;
    givenName: string;
    middleName: string;
    honorificPrefix: string;
    honorificSuffix: string;
}
declare var ContactName: {
    new(): ContactName;
}

interface ContactOrganization {
    pref: boolean;
    type: string;
    name: string;
    department: string;
    title: string;
}

interface ContactError {
    code: number;
}

declare var ContactError: {
    UNKNOWN_ERROR: number;
    INVALID_ARGUMENT_ERROR: number;
    TIMEOUT_ERROR: number;
    PENDING_OPERATION_ERROR: number;
    IO_ERROR: number;
    NOT_SUPPORTED_ERROR: number;
    PERMISSION_DENIED_ERROR: number;
}

interface Contacts {
    create(properties?: any): Contact;
    find(contactFields: string[], contactSuccess: (contacts: Contact[]) => void , contactError?: (error: ContactError) => void , contactFindOptions?: ContactFindOptions): void;
}

interface Navigator {
    contacts: Contacts;
}