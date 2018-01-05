// Type definitions for Google Apps Script 2017-05-12
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
  export module Contacts {
    /**
     * Address field in a contact.
     */
    export interface AddressField {
      deleteAddressField(): void;
      getAddress(): string;
      getLabel(): Object;
      isPrimary(): boolean;
      setAddress(address: string): AddressField;
      setAsPrimary(): AddressField;
      setLabel(field: Field): AddressField;
      setLabel(label: string): AddressField;
    }

    /**
     * Company field in a Contact.
     */
    export interface CompanyField {
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
    export interface Contact {
      addAddress(label: Object, address: string): AddressField;
      addCompany(company: string, title: string): CompanyField;
      addCustomField(label: Object, content: Object): CustomField;
      addDate(label: Object, month: Base.Month, day: Integer, year: Integer): DateField;
      addEmail(label: Object, address: string): EmailField;
      addIM(label: Object, address: string): IMField;
      addPhone(label: Object, number: string): PhoneField;
      addToGroup(group: ContactGroup): Contact;
      addUrl(label: Object, url: string): UrlField;
      deleteContact(): void;
      getAddresses(): AddressField[];
      getAddresses(label: Object): AddressField[];
      getCompanies(): CompanyField[];
      getContactGroups(): ContactGroup[];
      getCustomFields(): CustomField[];
      getCustomFields(label: Object): CustomField[];
      getDates(): DateField[];
      getDates(label: Object): DateField[];
      getEmails(): EmailField[];
      getEmails(label: Object): EmailField[];
      getFamilyName(): string;
      getFullName(): string;
      getGivenName(): string;
      getIMs(): IMField[];
      getIMs(label: Object): IMField[];
      getId(): string;
      getInitials(): string;
      getLastUpdated(): Date;
      getMaidenName(): string;
      getMiddleName(): string;
      getNickname(): string;
      getNotes(): string;
      getPhones(): PhoneField[];
      getPhones(label: Object): PhoneField[];
      getPrefix(): string;
      getPrimaryEmail(): string;
      getShortName(): string;
      getSuffix(): string;
      getUrls(): UrlField[];
      getUrls(label: Object): UrlField[];
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
      getEmailAddresses(): string[];
      getHomeAddress(): string;
      getHomeFax(): string;
      getHomePhone(): string;
      getMobilePhone(): string;
      getPager(): string;
      getUserDefinedField(key: string): string;
      getUserDefinedFields(): Object;
      getWorkAddress(): string;
      getWorkFax(): string;
      getWorkPhone(): string;
      setHomeAddress(addr: string): void;
      setHomeFax(phone: string): void;
      setHomePhone(phone: string): void;
      setMobilePhone(phone: string): void;
      setPager(phone: string): void;
      setPrimaryEmail(primaryEmail: string): void;
      setUserDefinedField(key: string, value: string): void;
      setUserDefinedFields(o: Object): void;
      setWorkAddress(addr: string): void;
      setWorkFax(phone: string): void;
      setWorkPhone(phone: string): void;
    }

    /**
     * A ContactGroup is is a group of contacts.
     */
    export interface ContactGroup {
      addContact(contact: Contact): ContactGroup;
      deleteGroup(): void;
      getContacts(): Contact[];
      getId(): string;
      getName(): string;
      isSystemGroup(): boolean;
      removeContact(contact: Contact): ContactGroup;
      setName(name: string): ContactGroup;
      getGroupName(): string;
      setGroupName(name: string): void;
    }

    /**
     * This class allows users to access their own Google Contacts and create, remove, and update
     *  contacts listed therein.
     */
    export interface ContactsApp {
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
      getContactsByCustomField(query: Object, label: ExtendedField): Contact[];
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
      findByEmailAddress(email: string): Contact;
      findContactGroup(name: string): ContactGroup;
      getAllContacts(): Contact[];
    }

    /**
     * A custom field in a Contact.
     */
    export interface CustomField {
      deleteCustomField(): void;
      getLabel(): Object;
      getValue(): Object;
      setLabel(field: ExtendedField): CustomField;
      setLabel(label: string): CustomField;
      setValue(value: Object): CustomField;
    }

    /**
     * A date field in a Contact.
     *
     * This class is only used by the Contacts service, and dates used elsewhere in App Script use
     *  JavaScript's standard
     *
     *  Date object.
     */
    export interface DateField {
      deleteDateField(): void;
      getDay(): Integer;
      getLabel(): Object;
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
    export interface EmailField {
      deleteEmailField(): void;
      getAddress(): string;
      getDisplayName(): string;
      getLabel(): Object;
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
    export enum ExtendedField { HOBBY, MILEAGE, LANGUAGE, GENDER, BILLING_INFORMATION, DIRECTORY_SERVER, SENSITIVITY, PRIORITY, HOME, WORK, USER, OTHER }

    /**
     * An enum for contacts fields.
     */
    export enum Field { FULL_NAME, GIVEN_NAME, MIDDLE_NAME, FAMILY_NAME, MAIDEN_NAME, NICKNAME, SHORT_NAME, INITIALS, PREFIX, SUFFIX, HOME_EMAIL, WORK_EMAIL, BIRTHDAY, ANNIVERSARY, HOME_ADDRESS, WORK_ADDRESS, ASSISTANT_PHONE, CALLBACK_PHONE, MAIN_PHONE, PAGER, HOME_FAX, WORK_FAX, HOME_PHONE, WORK_PHONE, MOBILE_PHONE, GOOGLE_VOICE, NOTES, GOOGLE_TALK, AIM, YAHOO, SKYPE, QQ, MSN, ICQ, JABBER, BLOG, FTP, PROFILE, HOME_PAGE, WORK_WEBSITE, HOME_WEBSITE, JOB_TITLE, COMPANY }

    /**
     * An enum for contact gender.
     */
    export enum Gender { MALE, FEMALE }

    /**
     * An instant messaging field in a Contact.
     */
    export interface IMField {
      deleteIMField(): void;
      getAddress(): string;
      getLabel(): Object;
      isPrimary(): boolean;
      setAddress(address: string): IMField;
      setAsPrimary(): IMField;
      setLabel(field: Field): IMField;
      setLabel(label: string): IMField;
    }

    /**
     * A phone number field in a Contact.
     */
    export interface PhoneField {
      deletePhoneField(): void;
      getLabel(): Object;
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
    export enum Priority { HIGH, LOW, NORMAL }

    /**
     * An enum for contact sensitivity.
     */
    export enum Sensitivity { CONFIDENTIAL, NORMAL, PERSONAL, PRIVATE }

    /**
     * A URL field in a Contact.
     */
    export interface UrlField {
      deleteUrlField(): void;
      getAddress(): string;
      getLabel(): Object;
      isPrimary(): boolean;
      setAddress(address: string): UrlField;
      setAsPrimary(): UrlField;
      setLabel(field: Field): UrlField;
      setLabel(label: string): UrlField;
    }

  }
}

declare var ContactsApp: GoogleAppsScript.Contacts.ContactsApp;
