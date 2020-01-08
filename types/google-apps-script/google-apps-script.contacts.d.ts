// Type definitions for Google Apps Script 2020-01-02
// Project: https://developers.google.com/apps-script/
// Definitions by: PopGoesTheWza <https://github.com/PopGoesTheWza>
//                 motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
  namespace Contacts {
    /**
     * Address field in a contact.
     */
    interface AddressField {
      deleteAddressField(): void;
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
     */
    interface CompanyField {
      deleteCompanyField(): void;
      getCompanyName(): string;
      getJobTitle(): string;
      isPrimary(): boolean;
      setAsPrimary(): CompanyField;
      setCompanyName(company: string): CompanyField;
      setJobTitle(title: string): CompanyField;
    }
    /**
     * A Contact contains the name, address, and various contact details of a contact.
     */
    interface Contact {
      addAddress(label: typeof ContactsApp.Field | string, address: string): AddressField;
      addCompany(company: string, title: string): CompanyField;
      addCustomField(label: typeof ContactsApp.ExtendedField | string, content: any): CustomField;
      addDate(label: typeof ContactsApp.Field | string, month: Base.Month, day: Integer, year: Integer): DateField;
      addEmail(label: typeof ContactsApp.Field | string, address: string): EmailField;
      addIM(label: typeof ContactsApp.Field | string, address: string): IMField;
      addPhone(label: typeof ContactsApp.Field | string, number: string): PhoneField;
      addToGroup(group: ContactGroup): Contact;
      addUrl(label: typeof ContactsApp.Field | string, url: string): UrlField;
      deleteContact(): void;
      getAddresses(): AddressField[];
      getAddresses(label: typeof ContactsApp.Field | string): AddressField[];
      getCompanies(): CompanyField[];
      getContactGroups(): ContactGroup[];
      getCustomFields(): CustomField[];
      getCustomFields(label: typeof ContactsApp.ExtendedField | string): CustomField[];
      getDates(): DateField[];
      getDates(label: typeof ContactsApp.Field | string): DateField[];
      getEmails(): EmailField[];
      getEmails(label: typeof ContactsApp.Field | string): EmailField[];
      getFamilyName(): string;
      getFullName(): string;
      getGivenName(): string;
      getIMs(): IMField[];
      getIMs(label: typeof ContactsApp.Field | string): IMField[];
      getId(): string;
      getInitials(): string;
      getLastUpdated(): Base.Date;
      getMaidenName(): string;
      getMiddleName(): string;
      getNickname(): string;
      getNotes(): string;
      getPhones(): PhoneField[];
      getPhones(label: typeof ContactsApp.Field | string): PhoneField[];
      getPrefix(): string;
      getPrimaryEmail(): string;
      getShortName(): string;
      getSuffix(): string;
      getUrls(): UrlField[];
      getUrls(label: typeof ContactsApp.Field | string): UrlField[];
      removeFromGroup(group: ContactGroup): Contact;
      setFamilyName(familyName: string): Contact;
      setFullName(fullName: string): Contact;
      setGivenName(givenName: string): Contact;
      setInitials(initials: string): Contact;
      setMaidenName(maidenName: string): Contact;
      setMiddleName(middleName: string): Contact;
      setNickname(nickname: string): Contact;
      setNotes(notes: string): Contact;
      setPrefix(prefix: string): Contact;
      setShortName(shortName: string): Contact;
      setSuffix(suffix: string): Contact;
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
     */
    interface ContactGroup {
      addContact(contact: Contact): ContactGroup;
      deleteGroup(): void;
      getContacts(): Contact[];
      getId(): string;
      getName(): string;
      isSystemGroup(): boolean;
      removeContact(contact: Contact): ContactGroup;
      setName(name: string): ContactGroup;
      /** @deprecated DO NOT USE */ getGroupName(): string;
      /** @deprecated DO NOT USE */ setGroupName(name: string): void;
    }
    /**
     * This class allows users to access their own Google Contacts and create, remove, and update
     * contacts listed therein.
     */
    interface ContactsApp {
      ExtendedField: typeof ExtendedField;
      Field: typeof Field;
      Gender: typeof Gender;
      Month: typeof Base.Month;
      Priority: typeof Priority;
      Sensitivity: typeof Sensitivity;
      createContact(givenName: string, familyName: string, email: string): Contact;
      createContactGroup(name: string): ContactGroup;
      deleteContact(contact: Contact): void;
      deleteContactGroup(group: ContactGroup): void;
      getContact(emailAddress: string): Contact;
      getContactById(id: string): Contact;
      getContactGroup(name: string): ContactGroup;
      getContactGroupById(id: string): ContactGroup;
      getContactGroups(): ContactGroup[];
      getContacts(): Contact[];
      getContactsByAddress(query: string): Contact[];
      getContactsByAddress(query: string, label: Field): Contact[];
      getContactsByAddress(query: string, label: string): Contact[];
      getContactsByCompany(query: string): Contact[];
      getContactsByCustomField(query: typeof ContactsApp.ExtendedField | string, label: ExtendedField): Contact[];
      getContactsByDate(month: Base.Month, day: Integer, label: Field): Contact[];
      getContactsByDate(month: Base.Month, day: Integer, year: Integer, label: Field): Contact[];
      getContactsByDate(month: Base.Month, day: Integer, year: Integer, label: string): Contact[];
      getContactsByDate(month: Base.Month, day: Integer, label: string): Contact[];
      getContactsByEmailAddress(query: string): Contact[];
      getContactsByEmailAddress(query: string, label: Field): Contact[];
      getContactsByEmailAddress(query: string, label: string): Contact[];
      getContactsByGroup(group: ContactGroup): Contact[];
      getContactsByIM(query: string): Contact[];
      getContactsByIM(query: string, label: Field): Contact[];
      getContactsByIM(query: string, label: string): Contact[];
      getContactsByJobTitle(query: string): Contact[];
      getContactsByName(query: string): Contact[];
      getContactsByName(query: string, label: Field): Contact[];
      getContactsByNotes(query: string): Contact[];
      getContactsByPhone(query: string): Contact[];
      getContactsByPhone(query: string, label: Field): Contact[];
      getContactsByPhone(query: string, label: string): Contact[];
      getContactsByUrl(query: string): Contact[];
      getContactsByUrl(query: string, label: Field): Contact[];
      getContactsByUrl(query: string, label: string): Contact[];
      /** @deprecated DO NOT USE */ findByEmailAddress(email: string): Contact;
      /** @deprecated DO NOT USE */ findContactGroup(name: string): ContactGroup;
      /** @deprecated DO NOT USE */ getAllContacts(): Contact[];
    }
    /**
     * A custom field in a Contact.
     */
    interface CustomField {
      deleteCustomField(): void;
      getLabel(): Field | ExtendedField | string;
      getValue(): any;
      setLabel(field: ExtendedField): CustomField;
      setLabel(label: string): CustomField;
      setValue(value: any): CustomField;
    }
    /**
     * A date field in a Contact.
     *
     * This class is only used by the Contacts service, and dates used elsewhere in App Script use
     * JavaScript's standard
     * Date object.
     */
    interface DateField {
      deleteDateField(): void;
      getDay(): Integer;
      getLabel(): Field | ExtendedField | string;
      getMonth(): Base.Month;
      getYear(): Integer;
      setDate(month: Base.Month, day: Integer): DateField;
      setDate(month: Base.Month, day: Integer, year: Integer): DateField;
      setLabel(label: Field): DateField;
      setLabel(label: string): DateField;
    }
    /**
     * An email field in a Contact.
     */
    interface EmailField {
      deleteEmailField(): void;
      getAddress(): string;
      getDisplayName(): string;
      getLabel(): Field | ExtendedField | string;
      isPrimary(): boolean;
      setAddress(address: string): EmailField;
      setAsPrimary(): EmailField;
      setDisplayName(name: string): EmailField;
      setLabel(field: Field): EmailField;
      setLabel(label: string): EmailField;
    }
    /**
     * An enum for extended contacts fields.
     */
    enum ExtendedField { HOBBY, MILEAGE, LANGUAGE, GENDER, BILLING_INFORMATION, DIRECTORY_SERVER, SENSITIVITY, PRIORITY, HOME, WORK, USER, OTHER }
    /**
     * An enum for contacts fields.
     */
    enum Field { FULL_NAME, GIVEN_NAME, MIDDLE_NAME, FAMILY_NAME, MAIDEN_NAME, NICKNAME, SHORT_NAME, INITIALS, PREFIX, SUFFIX, HOME_EMAIL, WORK_EMAIL, BIRTHDAY, ANNIVERSARY, HOME_ADDRESS, WORK_ADDRESS, ASSISTANT_PHONE, CALLBACK_PHONE, MAIN_PHONE, PAGER, HOME_FAX, WORK_FAX, HOME_PHONE, WORK_PHONE, MOBILE_PHONE, GOOGLE_VOICE, NOTES, GOOGLE_TALK, AIM, YAHOO, SKYPE, QQ, MSN, ICQ, JABBER, BLOG, FTP, PROFILE, HOME_PAGE, WORK_WEBSITE, HOME_WEBSITE, JOB_TITLE, COMPANY }
    /**
     * An enum for contact gender.
     */
    enum Gender { MALE, FEMALE }
    /**
     * An instant messaging field in a Contact.
     */
    // tslint:disable-next-line: interface-name
    interface IMField {
      deleteIMField(): void;
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
     */
    interface PhoneField {
      deletePhoneField(): void;
      getLabel(): Field | ExtendedField | string;
      getPhoneNumber(): string;
      isPrimary(): boolean;
      setAsPrimary(): PhoneField;
      setLabel(field: Field): PhoneField;
      setLabel(label: string): PhoneField;
      setPhoneNumber(number: string): PhoneField;
    }
    /**
     * An enum for contact priority.
     */
    enum Priority { HIGH, LOW, NORMAL }
    /**
     * An enum for contact sensitivity.
     */
    enum Sensitivity { CONFIDENTIAL, NORMAL, PERSONAL, PRIVATE }
    /**
     * A URL field in a Contact.
     */
    interface UrlField {
      deleteUrlField(): void;
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
