/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
    namespace Contacts {
        /**
         * Address field in a contact.
         * @deprecated DO NOT USE
         */
        interface AddressField {
            /** @deprecated DO NOT USE */ deleteAddressField(): void;
            getAddress(): string;
            getLabel(): Field | ExtendedField | string;
            isPrimary(): boolean;
            setAddress(address: string): AddressField;
            setAsPrimary(): AddressField;
            setLabel(field: Field): AddressField;
            setLabel(label: string): AddressField;
        }
        /**
         * Company field in a Contact.
         * @deprecated DO NOT USE
         */
        interface CompanyField {
            /** @deprecated DO NOT USE */ deleteCompanyField(): void;
            /** @deprecated DO NOT USE */ getCompanyName(): string;
            /** @deprecated DO NOT USE */ getJobTitle(): string;
            /** @deprecated DO NOT USE */ isPrimary(): boolean;
            /** @deprecated DO NOT USE */ setAsPrimary(): CompanyField;
            /** @deprecated DO NOT USE */ setCompanyName(company: string): CompanyField;
            /** @deprecated DO NOT USE */ setJobTitle(title: string): CompanyField;
        }
        /**
         * A Contact contains the name, address, and various contact details of a contact.
         * @deprecated DO NOT USE
         */
        interface Contact {
            /** @deprecated DO NOT USE */ addAddress(
                label: typeof ContactsApp.Field | string,
                address: string,
            ): AddressField;
            /** @deprecated DO NOT USE */ addCompany(company: string, title: string): CompanyField;
            /** @deprecated DO NOT USE */ addCustomField(
                label: typeof ContactsApp.ExtendedField | string,
                content: any,
            ): CustomField;
            /** @deprecated DO NOT USE */ addDate(
                label: typeof ContactsApp.Field | string,
                month: Base.Month,
                day: Integer,
                year: Integer,
            ): DateField;
            /** @deprecated DO NOT USE */ addEmail(
                label: typeof ContactsApp.Field | string,
                address: string,
            ): EmailField;
            /** @deprecated DO NOT USE */ addIM(label: typeof ContactsApp.Field | string, address: string): IMField;
            /** @deprecated DO NOT USE */ addPhone(
                label: typeof ContactsApp.Field | string,
                number: string,
            ): PhoneField;
            /** @deprecated DO NOT USE */ addToGroup(group: ContactGroup): Contact;
            /** @deprecated DO NOT USE */ addUrl(label: typeof ContactsApp.Field | string, url: string): UrlField;
            /** @deprecated DO NOT USE */ deleteContact(): void;
            /** @deprecated DO NOT USE */ getAddresses(): AddressField[];
            /** @deprecated DO NOT USE */ getAddresses(label: typeof ContactsApp.Field | string): AddressField[];
            /** @deprecated DO NOT USE */ getCompanies(): CompanyField[];
            /** @deprecated DO NOT USE */ getContactGroups(): ContactGroup[];
            /** @deprecated DO NOT USE */ getCustomFields(): CustomField[];
            /** @deprecated DO NOT USE */ getCustomFields(
                label: typeof ContactsApp.ExtendedField | string,
            ): CustomField[];
            /** @deprecated DO NOT USE */ getDates(): DateField[];
            /** @deprecated DO NOT USE */ getDates(label: typeof ContactsApp.Field | string): DateField[];
            /** @deprecated DO NOT USE */ getEmails(): EmailField[];
            /** @deprecated DO NOT USE */ getEmails(label: typeof ContactsApp.Field | string): EmailField[];
            /** @deprecated DO NOT USE */ getFamilyName(): string;
            /** @deprecated DO NOT USE */ getFullName(): string;
            /** @deprecated DO NOT USE */ getGivenName(): string;
            /** @deprecated DO NOT USE */ getIMs(): IMField[];
            /** @deprecated DO NOT USE */ getIMs(label: typeof ContactsApp.Field | string): IMField[];
            /** @deprecated DO NOT USE */ getId(): string;
            /** @deprecated DO NOT USE */ getInitials(): string;
            /** @deprecated DO NOT USE */ getLastUpdated(): Base.Date;
            /** @deprecated DO NOT USE */ getMaidenName(): string;
            /** @deprecated DO NOT USE */ getMiddleName(): string;
            /** @deprecated DO NOT USE */ getNickname(): string;
            /** @deprecated DO NOT USE */ getNotes(): string;
            /** @deprecated DO NOT USE */ getPhones(): PhoneField[];
            /** @deprecated DO NOT USE */ getPhones(label: typeof ContactsApp.Field | string): PhoneField[];
            /** @deprecated DO NOT USE */ getPrefix(): string;
            /** @deprecated DO NOT USE */ getPrimaryEmail(): string;
            /** @deprecated DO NOT USE */ getShortName(): string;
            /** @deprecated DO NOT USE */ getSuffix(): string;
            /** @deprecated DO NOT USE */ getUrls(): UrlField[];
            /** @deprecated DO NOT USE */ getUrls(label: typeof ContactsApp.Field | string): UrlField[];
            /** @deprecated DO NOT USE */ removeFromGroup(group: ContactGroup): Contact;
            /** @deprecated DO NOT USE */ setFamilyName(familyName: string): Contact;
            /** @deprecated DO NOT USE */ setFullName(fullName: string): Contact;
            /** @deprecated DO NOT USE */ setGivenName(givenName: string): Contact;
            /** @deprecated DO NOT USE */ setInitials(initials: string): Contact;
            /** @deprecated DO NOT USE */ setMaidenName(maidenName: string): Contact;
            /** @deprecated DO NOT USE */ setMiddleName(middleName: string): Contact;
            /** @deprecated DO NOT USE */ setNickname(nickname: string): Contact;
            /** @deprecated DO NOT USE */ setNotes(notes: string): Contact;
            /** @deprecated DO NOT USE */ setPrefix(prefix: string): Contact;
            /** @deprecated DO NOT USE */ setShortName(shortName: string): Contact;
            /** @deprecated DO NOT USE */ setSuffix(suffix: string): Contact;
            /** @deprecated DO NOT USE */ getEmailAddresses(): string[];
            /** @deprecated DO NOT USE */ getHomeAddress(): string;
            /** @deprecated DO NOT USE */ getHomeFax(): string;
            /** @deprecated DO NOT USE */ getHomePhone(): string;
            /** @deprecated DO NOT USE */ getMobilePhone(): string;
            /** @deprecated DO NOT USE */ getPager(): string;
            /** @deprecated DO NOT USE */ getUserDefinedField(key: string): string;
            /** @deprecated DO NOT USE */ getUserDefinedFields(): object;
            /** @deprecated DO NOT USE */ getWorkAddress(): string;
            /** @deprecated DO NOT USE */ getWorkFax(): string;
            /** @deprecated DO NOT USE */ getWorkPhone(): string;
            /** @deprecated DO NOT USE */ setHomeAddress(addr: string): void;
            /** @deprecated DO NOT USE */ setHomeFax(phone: string): void;
            /** @deprecated DO NOT USE */ setHomePhone(phone: string): void;
            /** @deprecated DO NOT USE */ setMobilePhone(phone: string): void;
            /** @deprecated DO NOT USE */ setPager(phone: string): void;
            /** @deprecated DO NOT USE */ setPrimaryEmail(primaryEmail: string): void;
            /** @deprecated DO NOT USE */ setUserDefinedField(key: string, value: string): void;
            /** @deprecated DO NOT USE */ setUserDefinedFields(o: object): void;
            /** @deprecated DO NOT USE */ setWorkAddress(addr: string): void;
            /** @deprecated DO NOT USE */ setWorkFax(phone: string): void;
            /** @deprecated DO NOT USE */ setWorkPhone(phone: string): void;
        }
        /**
         * A ContactGroup is is a group of contacts.
         * @deprecated DO NOT USE
         */
        interface ContactGroup {
            /** @deprecated DO NOT USE */ addContact(contact: Contact): ContactGroup;
            /** @deprecated DO NOT USE */ deleteGroup(): void;
            /** @deprecated DO NOT USE */ getContacts(): Contact[];
            /** @deprecated DO NOT USE */ getId(): string;
            /** @deprecated DO NOT USE */ getName(): string;
            /** @deprecated DO NOT USE */ isSystemGroup(): boolean;
            /** @deprecated DO NOT USE */ removeContact(contact: Contact): ContactGroup;
            /** @deprecated DO NOT USE */ setName(name: string): ContactGroup;
            /** @deprecated DO NOT USE */ getGroupName(): string;
            /** @deprecated DO NOT USE */ setGroupName(name: string): void;
        }
        /**
         * This class allows users to access their own Google Contacts and create, remove, and update
         * contacts listed therein.
         * @deprecated DO NOT USE
         */
        interface ContactsApp {
            /** @deprecated DO NOT USE */ ExtendedField: typeof ExtendedField;
            /** @deprecated DO NOT USE */ Field: typeof Field;
            /** @deprecated DO NOT USE */ Gender: typeof Gender;
            /** @deprecated DO NOT USE */ Month: typeof Base.Month;
            /** @deprecated DO NOT USE */ Priority: typeof Priority;
            /** @deprecated DO NOT USE */ Sensitivity: typeof Sensitivity;
            /** @deprecated DO NOT USE */ createContact(givenName: string, familyName: string, email: string): Contact;
            /** @deprecated DO NOT USE */ createContactGroup(name: string): ContactGroup;
            /** @deprecated DO NOT USE */ deleteContact(contact: Contact): void;
            /** @deprecated DO NOT USE */ deleteContactGroup(group: ContactGroup): void;
            /** @deprecated DO NOT USE */ getContact(emailAddress: string): Contact;
            /** @deprecated DO NOT USE */ getContactById(id: string): Contact;
            /** @deprecated DO NOT USE */ getContactGroup(name: string): ContactGroup;
            /** @deprecated DO NOT USE */ getContactGroupById(id: string): ContactGroup;
            /** @deprecated DO NOT USE */ getContactGroups(): ContactGroup[];
            /** @deprecated DO NOT USE */ getContacts(): Contact[];
            /** @deprecated DO NOT USE */ getContactsByAddress(query: string): Contact[];
            /** @deprecated DO NOT USE */ getContactsByAddress(query: string, label: Field): Contact[];
            /** @deprecated DO NOT USE */ getContactsByAddress(query: string, label: string): Contact[];
            /** @deprecated DO NOT USE */ getContactsByCompany(query: string): Contact[];
            /** @deprecated DO NOT USE */ getContactsByCustomField(
                query: typeof ContactsApp.ExtendedField | string,
                label: ExtendedField,
            ): Contact[];
            /** @deprecated DO NOT USE */ getContactsByDate(month: Base.Month, day: Integer, label: Field): Contact[];
            /** @deprecated DO NOT USE */ getContactsByDate(
                month: Base.Month,
                day: Integer,
                year: Integer,
                label: Field,
            ): Contact[];
            /** @deprecated DO NOT USE */ getContactsByDate(
                month: Base.Month,
                day: Integer,
                year: Integer,
                label: string,
            ): Contact[];
            /** @deprecated DO NOT USE */ getContactsByDate(month: Base.Month, day: Integer, label: string): Contact[];
            /** @deprecated DO NOT USE */ getContactsByEmailAddress(query: string): Contact[];
            /** @deprecated DO NOT USE */ getContactsByEmailAddress(query: string, label: Field): Contact[];
            /** @deprecated DO NOT USE */ getContactsByEmailAddress(query: string, label: string): Contact[];
            /** @deprecated DO NOT USE */ getContactsByGroup(group: ContactGroup): Contact[];
            /** @deprecated DO NOT USE */ getContactsByIM(query: string): Contact[];
            /** @deprecated DO NOT USE */ getContactsByIM(query: string, label: Field): Contact[];
            /** @deprecated DO NOT USE */ getContactsByIM(query: string, label: string): Contact[];
            /** @deprecated DO NOT USE */ getContactsByJobTitle(query: string): Contact[];
            /** @deprecated DO NOT USE */ getContactsByName(query: string): Contact[];
            /** @deprecated DO NOT USE */ getContactsByName(query: string, label: Field): Contact[];
            /** @deprecated DO NOT USE */ getContactsByNotes(query: string): Contact[];
            /** @deprecated DO NOT USE */ getContactsByPhone(query: string): Contact[];
            /** @deprecated DO NOT USE */ getContactsByPhone(query: string, label: Field): Contact[];
            /** @deprecated DO NOT USE */ getContactsByPhone(query: string, label: string): Contact[];
            /** @deprecated DO NOT USE */ getContactsByUrl(query: string): Contact[];
            /** @deprecated DO NOT USE */ getContactsByUrl(query: string, label: Field): Contact[];
            /** @deprecated DO NOT USE */ getContactsByUrl(query: string, label: string): Contact[];
            /** @deprecated DO NOT USE */ findByEmailAddress(email: string): Contact;
            /** @deprecated DO NOT USE */ findContactGroup(name: string): ContactGroup;
            /** @deprecated DO NOT USE */ getAllContacts(): Contact[];
        }
        /**
         * A custom field in a Contact.
         * @deprecated DO NOT USE
         */
        interface CustomField {
            /** @deprecated DO NOT USE */ deleteCustomField(): void;
            getLabel(): Field | ExtendedField | string;
            /** @deprecated DO NOT USE */ getValue(): any;
            /** @deprecated DO NOT USE */ setLabel(field: ExtendedField): CustomField;
            /** @deprecated DO NOT USE */ setLabel(label: string): CustomField;
            /** @deprecated DO NOT USE */ setValue(value: any): CustomField;
        }
        /**
         * A date field in a Contact.
         *
         * This class is only used by the Contacts service, and dates used elsewhere in App Script use
         * JavaScript's standard
         * Date object.
         * @deprecated DO NOT USE
         */
        interface DateField {
            /** @deprecated DO NOT USE */ deleteDateField(): void;
            /** @deprecated DO NOT USE */ getDay(): Integer;
            getLabel(): Field | ExtendedField | string;
            /** @deprecated DO NOT USE */ getMonth(): Base.Month;
            /** @deprecated DO NOT USE */ getYear(): Integer;
            /** @deprecated DO NOT USE */ setDate(month: Base.Month, day: Integer): DateField;
            /** @deprecated DO NOT USE */ setDate(month: Base.Month, day: Integer, year: Integer): DateField;
            /** @deprecated DO NOT USE */ setLabel(label: Field): DateField;
            /** @deprecated DO NOT USE */ setLabel(label: string): DateField;
        }
        /**
         * An email field in a Contact.
         * @deprecated DO NOT USE
         */
        interface EmailField {
            /** @deprecated DO NOT USE */ deleteEmailField(): void;
            getAddress(): string;
            /** @deprecated DO NOT USE */ getDisplayName(): string;
            getLabel(): Field | ExtendedField | string;
            isPrimary(): boolean;
            setAddress(address: string): EmailField;
            setAsPrimary(): EmailField;
            /** @deprecated DO NOT USE */ setDisplayName(name: string): EmailField;
            setLabel(field: Field): EmailField;
            setLabel(label: string): EmailField;
        }
        /**
         * An enum for extended contacts fields.
         * @deprecated DO NOT USE
         */
        enum ExtendedField {
            /** @deprecated DO NOT USE */ HOBBY,
            /** @deprecated DO NOT USE */ MILEAGE,
            /** @deprecated DO NOT USE */ LANGUAGE,
            /** @deprecated DO NOT USE */ GENDER,
            /** @deprecated DO NOT USE */ BILLING_INFORMATION,
            /** @deprecated DO NOT USE */ DIRECTORY_SERVER,
            /** @deprecated DO NOT USE */ SENSITIVITY,
            /** @deprecated DO NOT USE */ PRIORITY,
            /** @deprecated DO NOT USE */ HOME,
            /** @deprecated DO NOT USE */ WORK,
            /** @deprecated DO NOT USE */ USER,
            /** @deprecated DO NOT USE */ OTHER,
        }
        /**
         * An enum for contacts fields.
         * @deprecated DO NOT USE
         */
        enum Field {
            /** @deprecated DO NOT USE */ FULL_NAME,
            /** @deprecated DO NOT USE */ GIVEN_NAME,
            /** @deprecated DO NOT USE */ MIDDLE_NAME,
            /** @deprecated DO NOT USE */ FAMILY_NAME,
            /** @deprecated DO NOT USE */ MAIDEN_NAME,
            /** @deprecated DO NOT USE */ NICKNAME,
            /** @deprecated DO NOT USE */ SHORT_NAME,
            /** @deprecated DO NOT USE */ INITIALS,
            /** @deprecated DO NOT USE */ PREFIX,
            /** @deprecated DO NOT USE */ SUFFIX,
            /** @deprecated DO NOT USE */ HOME_EMAIL,
            /** @deprecated DO NOT USE */ WORK_EMAIL,
            /** @deprecated DO NOT USE */ BIRTHDAY,
            /** @deprecated DO NOT USE */ ANNIVERSARY,
            /** @deprecated DO NOT USE */ HOME_ADDRESS,
            /** @deprecated DO NOT USE */ WORK_ADDRESS,
            /** @deprecated DO NOT USE */ ASSISTANT_PHONE,
            /** @deprecated DO NOT USE */ CALLBACK_PHONE,
            /** @deprecated DO NOT USE */ MAIN_PHONE,
            /** @deprecated DO NOT USE */ PAGER,
            /** @deprecated DO NOT USE */ HOME_FAX,
            /** @deprecated DO NOT USE */ WORK_FAX,
            /** @deprecated DO NOT USE */ HOME_PHONE,
            /** @deprecated DO NOT USE */ WORK_PHONE,
            /** @deprecated DO NOT USE */ MOBILE_PHONE,
            /** @deprecated DO NOT USE */ GOOGLE_VOICE,
            /** @deprecated DO NOT USE */ NOTES,
            /** @deprecated DO NOT USE */ GOOGLE_TALK,
            /** @deprecated DO NOT USE */ AIM,
            /** @deprecated DO NOT USE */ YAHOO,
            /** @deprecated DO NOT USE */ SKYPE,
            /** @deprecated DO NOT USE */ QQ,
            /** @deprecated DO NOT USE */ MSN,
            /** @deprecated DO NOT USE */ ICQ,
            /** @deprecated DO NOT USE */ JABBER,
            /** @deprecated DO NOT USE */ BLOG,
            /** @deprecated DO NOT USE */ FTP,
            /** @deprecated DO NOT USE */ PROFILE,
            /** @deprecated DO NOT USE */ HOME_PAGE,
            /** @deprecated DO NOT USE */ WORK_WEBSITE,
            /** @deprecated DO NOT USE */ HOME_WEBSITE,
            /** @deprecated DO NOT USE */ JOB_TITLE,
            /** @deprecated DO NOT USE */ COMPANY,
        }
        /**
         * An enum for contact gender.
         * @deprecated DO NOT USE
         */
        enum Gender {
            /** @deprecated DO NOT USE */ MALE,
            /** @deprecated DO NOT USE */ FEMALE,
        }
        /**
         * An instant messaging field in a Contact.
         * @deprecated DO NOT USE
         */
        interface IMField {
            /** @deprecated DO NOT USE */ deleteIMField(): void;
            getAddress(): string;
            getLabel(): Field | ExtendedField | string;
            isPrimary(): boolean;
            setAddress(address: string): IMField;
            setAsPrimary(): IMField;
            setLabel(field: Field): IMField;
            setLabel(label: string): IMField;
        }
        /**
         * A phone number field in a Contact.
         * @deprecated DO NOT USE
         */
        interface PhoneField {
            /** @deprecated DO NOT USE */ deletePhoneField(): void;
            getLabel(): Field | ExtendedField | string;
            /** @deprecated DO NOT USE */ getPhoneNumber(): string;
            isPrimary(): boolean;
            setAsPrimary(): PhoneField;
            setLabel(field: Field): PhoneField;
            setLabel(label: string): PhoneField;
            /** @deprecated DO NOT USE */ setPhoneNumber(number: string): PhoneField;
        }
        /**
         * An enum for contact priority.
         * @deprecated DO NOT USE
         */
        enum Priority {
            /** @deprecated DO NOT USE */ HIGH,
            /** @deprecated DO NOT USE */ LOW,
            /** @deprecated DO NOT USE */ NORMAL,
        }
        /**
         * An enum for contact sensitivity.
         * @deprecated DO NOT USE
         */
        enum Sensitivity {
            /** @deprecated DO NOT USE */ CONFIDENTIAL,
            /** @deprecated DO NOT USE */ NORMAL,
            /** @deprecated DO NOT USE */ PERSONAL,
            /** @deprecated DO NOT USE */ PRIVATE,
        }
        /**
         * A URL field in a Contact.
         * @deprecated DO NOT USE
         */
        interface UrlField {
            /** @deprecated DO NOT USE */ deleteUrlField(): void;
            getAddress(): string;
            getLabel(): Field | ExtendedField | string;
            isPrimary(): boolean;
            setAddress(address: string): UrlField;
            setAsPrimary(): UrlField;
            setLabel(field: Field): UrlField;
            setLabel(label: string): UrlField;
        }
    }
}

declare var ContactsApp: GoogleAppsScript.Contacts.ContactsApp;
