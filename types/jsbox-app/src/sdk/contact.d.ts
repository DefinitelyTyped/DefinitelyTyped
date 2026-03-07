// JSBox Contact API TypeScript Declaration

declare namespace ContactTypes {
    interface ContactItem {
        readonly identifier: string;
        readonly content: string;
        readonly contactType: number;
        namePrefix: string;
        givenName: string;
        middleName: string;
        familyName: string;
        nameSuffix: string;
        nickname: string;
        organizationName: string;
        departmentName: string;
        jobTitle: string;
        note: string;
        imageData: NSData;
        phoneNumbers: {
            label: string;
            content: string;
            identifier: string;
        }[];
        emailAddresses: {
            label: string;
            value: string;
            content: string;
            identifier: string;
        }[];
        postalAddresses: {
            label: string;
            content: string;
            identifier: string;
        }[];
        urlAddresses: {
            label: string;
            content: string;
            identifier: string;
        }[];
        instantMessageAddresses: {
            label: string;
            content: string;
            identifier: string;
        }[];
    }

    interface Group {
        name: string;
        identifier: string;
        __clsName: string;
    }

    interface ContactPickOptions {
        multi?: false;
        handler: (contact: ContactItem) => void;
    }

    interface ContactMultiPickOptions {
        multi: true;
        handler: (contact: ContactItem[]) => void;
    }

    interface ContactFetchOptions {
        key?: string;
        group?: Group;
        handler: (contacts: ContactItem[]) => void;
    }

    interface ContactCreateOptions {
        givenName?: string;
        familyName?: string;
        phoneNumbers?: Record<string, string>;
        emails?: Record<string, string>;
        handler: (resp: { status: number; error?: NSError }) => void;
    }

    interface ContactSaveOptions {
        contact: ContactItem;
        handler: (resp: { status: number; error?: NSError }) => void;
    }

    interface ContactDeleteOptions {
        contacts: ContactItem[];
        handler: (resp: { status: boolean }) => void;
    }
}

interface JBContact {
    pick(options: ContactTypes.ContactPickOptions): void;
    pick(options?: Omit<ContactTypes.ContactPickOptions, "handler">): Promise<ContactTypes.ContactItem>;
    pick(options: ContactTypes.ContactMultiPickOptions): void;
    pick(options?: Omit<ContactTypes.ContactMultiPickOptions, "handler">): Promise<ContactTypes.ContactItem[]>;
    fetch(options: ContactTypes.ContactFetchOptions): void; // This API is actually unusable.
    create(options: ContactTypes.ContactCreateOptions): void;
    create(options: Omit<ContactTypes.ContactCreateOptions, "handler">): Promise<void>;
    save(options: ContactTypes.ContactSaveOptions): void;
    save(options: Omit<ContactTypes.ContactSaveOptions, "handler">): Promise<void>;
    delete(options: ContactTypes.ContactDeleteOptions): void;
    delete(options: Omit<ContactTypes.ContactDeleteOptions, "handler">): Promise<void>;
    fetchGroups(): Promise<ContactTypes.Group[]>;
    addGroup(options: { name: string; handler: (resp: ContactTypes.Group) => void }): void;
    // It is not documented, but it exists based on empirical testing.
    addGroup(options: { name: string }): Promise<void>;
    // The documentation is incorrect; the asynchronous call actually does not return a value.
    deleteGroup(group: ContactTypes.Group): void;
    updateGroup(group: ContactTypes.Group): void;
    addToGroup(options: { contact: ContactTypes.ContactItem; group: ContactTypes.Group }): void;
    removeFromGroup(options: { contact: ContactTypes.ContactItem; group: ContactTypes.Group }): void;
}

declare const $contact: JBContact;
