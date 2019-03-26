// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace Peopleapi_v1 {
    namespace Collection {
      namespace ContactGroups {
        export interface MembersCollection {
          // Modify the members of a contact group owned by the authenticated user.
          // <br>
          // The only system contact groups that can have members added are
          // `contactGroups/myContacts` and `contactGroups/starred`. Other system
          // contact groups are deprecated and can only have contacts removed.
          modify(resource: Schema.ModifyContactGroupMembersRequest, resourceName: string): Peopleapi_v1.Schema.ModifyContactGroupMembersResponse;
        }
      }
      namespace People {
        export interface ConnectionsCollection {
          // Provides a list of the authenticated user's contacts merged with any
          // connected profiles.
          // <br>
          // The request throws a 400 error if 'personFields' is not specified.
          list(resourceName: string): Peopleapi_v1.Schema.ListConnectionsResponse;
          // Provides a list of the authenticated user's contacts merged with any
          // connected profiles.
          // <br>
          // The request throws a 400 error if 'personFields' is not specified.
          list(resourceName: string, optionalArgs: object): Peopleapi_v1.Schema.ListConnectionsResponse;
        }
      }
      export interface ContactGroupsCollection {
        Members?: Peopleapi_v1.Collection.ContactGroups.MembersCollection;
        // Get a list of contact groups owned by the authenticated user by specifying
        // a list of contact group resource names.
        batchGet(): Peopleapi_v1.Schema.BatchGetContactGroupsResponse;
        // Get a list of contact groups owned by the authenticated user by specifying
        // a list of contact group resource names.
        batchGet(optionalArgs: object): Peopleapi_v1.Schema.BatchGetContactGroupsResponse;
        // Create a new contact group owned by the authenticated user.
        create(resource: Schema.CreateContactGroupRequest): Peopleapi_v1.Schema.ContactGroup;
        // Get a specific contact group owned by the authenticated user by specifying
        // a contact group resource name.
        get(resourceName: string): Peopleapi_v1.Schema.ContactGroup;
        // Get a specific contact group owned by the authenticated user by specifying
        // a contact group resource name.
        get(resourceName: string, optionalArgs: object): Peopleapi_v1.Schema.ContactGroup;
        // List all contact groups owned by the authenticated user. Members of the
        // contact groups are not populated.
        list(): Peopleapi_v1.Schema.ListContactGroupsResponse;
        // List all contact groups owned by the authenticated user. Members of the
        // contact groups are not populated.
        list(optionalArgs: object): Peopleapi_v1.Schema.ListContactGroupsResponse;
        // Delete an existing contact group owned by the authenticated user by
        // specifying a contact group resource name.
        remove(resourceName: string): void;
        // Delete an existing contact group owned by the authenticated user by
        // specifying a contact group resource name.
        remove(resourceName: string, optionalArgs: object): void;
        // Update the name of an existing contact group owned by the authenticated
        // user.
        update(resource: Schema.UpdateContactGroupRequest, resourceName: string): Peopleapi_v1.Schema.ContactGroup;
      }
      export interface PeopleCollection {
        Connections?: Peopleapi_v1.Collection.People.ConnectionsCollection;
        // Create a new contact and return the person resource for that contact.
        createContact(resource: Schema.Person): Peopleapi_v1.Schema.Person;
        // Create a new contact and return the person resource for that contact.
        createContact(resource: Schema.Person, optionalArgs: object): Peopleapi_v1.Schema.Person;
        // Delete a contact person. Any non-contact data will not be deleted.
        deleteContact(resourceName: string): void;
        // Provides information about a person by specifying a resource name. Use
        // `people/me` to indicate the authenticated user.
        // <br>
        // The request throws a 400 error if 'personFields' is not specified.
        get(resourceName: string): Peopleapi_v1.Schema.Person;
        // Provides information about a person by specifying a resource name. Use
        // `people/me` to indicate the authenticated user.
        // <br>
        // The request throws a 400 error if 'personFields' is not specified.
        get(resourceName: string, optionalArgs: object): Peopleapi_v1.Schema.Person;
        // Provides information about a list of specific people by specifying a list
        // of requested resource names. Use `people/me` to indicate the authenticated
        // user.
        // <br>
        // The request throws a 400 error if 'personFields' is not specified.
        getBatchGet(): Peopleapi_v1.Schema.GetPeopleResponse;
        // Provides information about a list of specific people by specifying a list
        // of requested resource names. Use `people/me` to indicate the authenticated
        // user.
        // <br>
        // The request throws a 400 error if 'personFields' is not specified.
        getBatchGet(optionalArgs: object): Peopleapi_v1.Schema.GetPeopleResponse;
        // Update contact data for an existing contact person. Any non-contact data
        // will not be modified.
        // The request throws a 400 error if `updatePersonFields` is not specified.
        // <br>
        // The request throws a 400 error if `person.metadata.sources` is not
        // specified for the contact to be updated.
        // <br>
        // The request throws a 412 error if `person.metadata.sources.etag` is
        // different than the contact's etag, which indicates the contact has changed
        // since its data was read. Clients should get the latest person and re-apply
        // their updates to the latest person.
        updateContact(resource: Schema.Person, resourceName: string): Peopleapi_v1.Schema.Person;
        // Update contact data for an existing contact person. Any non-contact data
        // will not be modified.
        // The request throws a 400 error if `updatePersonFields` is not specified.
        // <br>
        // The request throws a 400 error if `person.metadata.sources` is not
        // specified for the contact to be updated.
        // <br>
        // The request throws a 412 error if `person.metadata.sources.etag` is
        // different than the contact's etag, which indicates the contact has changed
        // since its data was read. Clients should get the latest person and re-apply
        // their updates to the latest person.
        updateContact(resource: Schema.Person, resourceName: string, optionalArgs: object): Peopleapi_v1.Schema.Person;
      }
    }
    namespace Schema {
      export interface Address {
        city?: string;
        country?: string;
        countryCode?: string;
        extendedAddress?: string;
        formattedType?: string;
        formattedValue?: string;
        metadata?: Peopleapi_v1.Schema.FieldMetadata;
        poBox?: string;
        postalCode?: string;
        region?: string;
        streetAddress?: string;
        type?: string;
      }
      export interface AgeRangeType {
        ageRange?: string;
        metadata?: Peopleapi_v1.Schema.FieldMetadata;
      }
      export interface BatchGetContactGroupsResponse {
        responses?: Peopleapi_v1.Schema.ContactGroupResponse[];
      }
      export interface Biography {
        contentType?: string;
        metadata?: Peopleapi_v1.Schema.FieldMetadata;
        value?: string;
      }
      export interface Birthday {
        date?: Peopleapi_v1.Schema.Date;
        metadata?: Peopleapi_v1.Schema.FieldMetadata;
        text?: string;
      }
      export interface BraggingRights {
        metadata?: Peopleapi_v1.Schema.FieldMetadata;
        value?: string;
      }
      export interface ContactGroup {
        etag?: string;
        formattedName?: string;
        groupType?: string;
        memberCount?: number;
        memberResourceNames?: string[];
        metadata?: Peopleapi_v1.Schema.ContactGroupMetadata;
        name?: string;
        resourceName?: string;
      }
      export interface ContactGroupMembership {
        contactGroupId?: string;
      }
      export interface ContactGroupMetadata {
        deleted?: boolean;
        updateTime?: string;
      }
      export interface ContactGroupResponse {
        contactGroup?: Peopleapi_v1.Schema.ContactGroup;
        requestedResourceName?: string;
        status?: Peopleapi_v1.Schema.Status;
      }
      export interface CoverPhoto {
        default?: boolean;
        metadata?: Peopleapi_v1.Schema.FieldMetadata;
        url?: string;
      }
      export interface CreateContactGroupRequest {
        contactGroup?: Peopleapi_v1.Schema.ContactGroup;
      }
      export interface Date {
        day?: number;
        month?: number;
        year?: number;
      }
      export interface DomainMembership {
        inViewerDomain?: boolean;
      }
      export interface EmailAddress {
        displayName?: string;
        formattedType?: string;
        metadata?: Peopleapi_v1.Schema.FieldMetadata;
        type?: string;
        value?: string;
      }
      export interface Event {
        date?: Peopleapi_v1.Schema.Date;
        formattedType?: string;
        metadata?: Peopleapi_v1.Schema.FieldMetadata;
        type?: string;
      }
      export interface FieldMetadata {
        primary?: boolean;
        source?: Peopleapi_v1.Schema.Source;
        verified?: boolean;
      }
      export interface Gender {
        formattedValue?: string;
        metadata?: Peopleapi_v1.Schema.FieldMetadata;
        value?: string;
      }
      export interface GetPeopleResponse {
        responses?: Peopleapi_v1.Schema.PersonResponse[];
      }
      export interface ImClient {
        formattedProtocol?: string;
        formattedType?: string;
        metadata?: Peopleapi_v1.Schema.FieldMetadata;
        protocol?: string;
        type?: string;
        username?: string;
      }
      export interface Interest {
        metadata?: Peopleapi_v1.Schema.FieldMetadata;
        value?: string;
      }
      export interface ListConnectionsResponse {
        connections?: Peopleapi_v1.Schema.Person[];
        nextPageToken?: string;
        nextSyncToken?: string;
        totalItems?: number;
        totalPeople?: number;
      }
      export interface ListContactGroupsResponse {
        contactGroups?: Peopleapi_v1.Schema.ContactGroup[];
        nextPageToken?: string;
        nextSyncToken?: string;
        totalItems?: number;
      }
      export interface Locale {
        metadata?: Peopleapi_v1.Schema.FieldMetadata;
        value?: string;
      }
      export interface Membership {
        contactGroupMembership?: Peopleapi_v1.Schema.ContactGroupMembership;
        domainMembership?: Peopleapi_v1.Schema.DomainMembership;
        metadata?: Peopleapi_v1.Schema.FieldMetadata;
      }
      export interface ModifyContactGroupMembersRequest {
        resourceNamesToAdd?: string[];
        resourceNamesToRemove?: string[];
      }
      export interface ModifyContactGroupMembersResponse {
        notFoundResourceNames?: string[];
      }
      export interface Name {
        displayName?: string;
        displayNameLastFirst?: string;
        familyName?: string;
        givenName?: string;
        honorificPrefix?: string;
        honorificSuffix?: string;
        metadata?: Peopleapi_v1.Schema.FieldMetadata;
        middleName?: string;
        phoneticFamilyName?: string;
        phoneticFullName?: string;
        phoneticGivenName?: string;
        phoneticHonorificPrefix?: string;
        phoneticHonorificSuffix?: string;
        phoneticMiddleName?: string;
      }
      export interface Nickname {
        metadata?: Peopleapi_v1.Schema.FieldMetadata;
        type?: string;
        value?: string;
      }
      export interface Occupation {
        metadata?: Peopleapi_v1.Schema.FieldMetadata;
        value?: string;
      }
      export interface Organization {
        current?: boolean;
        department?: string;
        domain?: string;
        endDate?: Peopleapi_v1.Schema.Date;
        formattedType?: string;
        jobDescription?: string;
        location?: string;
        metadata?: Peopleapi_v1.Schema.FieldMetadata;
        name?: string;
        phoneticName?: string;
        startDate?: Peopleapi_v1.Schema.Date;
        symbol?: string;
        title?: string;
        type?: string;
      }
      export interface Person {
        addresses?: Peopleapi_v1.Schema.Address[];
        ageRange?: string;
        ageRanges?: Peopleapi_v1.Schema.AgeRangeType[];
        biographies?: Peopleapi_v1.Schema.Biography[];
        birthdays?: Peopleapi_v1.Schema.Birthday[];
        braggingRights?: Peopleapi_v1.Schema.BraggingRights[];
        coverPhotos?: Peopleapi_v1.Schema.CoverPhoto[];
        emailAddresses?: Peopleapi_v1.Schema.EmailAddress[];
        etag?: string;
        events?: Peopleapi_v1.Schema.Event[];
        genders?: Peopleapi_v1.Schema.Gender[];
        imClients?: Peopleapi_v1.Schema.ImClient[];
        interests?: Peopleapi_v1.Schema.Interest[];
        locales?: Peopleapi_v1.Schema.Locale[];
        memberships?: Peopleapi_v1.Schema.Membership[];
        metadata?: Peopleapi_v1.Schema.PersonMetadata;
        names?: Peopleapi_v1.Schema.Name[];
        nicknames?: Peopleapi_v1.Schema.Nickname[];
        occupations?: Peopleapi_v1.Schema.Occupation[];
        organizations?: Peopleapi_v1.Schema.Organization[];
        phoneNumbers?: Peopleapi_v1.Schema.PhoneNumber[];
        photos?: Peopleapi_v1.Schema.Photo[];
        relations?: Peopleapi_v1.Schema.Relation[];
        relationshipInterests?: Peopleapi_v1.Schema.RelationshipInterest[];
        relationshipStatuses?: Peopleapi_v1.Schema.RelationshipStatus[];
        residences?: Peopleapi_v1.Schema.Residence[];
        resourceName?: string;
        sipAddresses?: Peopleapi_v1.Schema.SipAddress[];
        skills?: Peopleapi_v1.Schema.Skill[];
        taglines?: Peopleapi_v1.Schema.Tagline[];
        urls?: Peopleapi_v1.Schema.Url[];
        userDefined?: Peopleapi_v1.Schema.UserDefined[];
      }
      export interface PersonMetadata {
        deleted?: boolean;
        linkedPeopleResourceNames?: string[];
        objectType?: string;
        previousResourceNames?: string[];
        sources?: Peopleapi_v1.Schema.Source[];
      }
      export interface PersonResponse {
        httpStatusCode?: number;
        person?: Peopleapi_v1.Schema.Person;
        requestedResourceName?: string;
        status?: Peopleapi_v1.Schema.Status;
      }
      export interface PhoneNumber {
        canonicalForm?: string;
        formattedType?: string;
        metadata?: Peopleapi_v1.Schema.FieldMetadata;
        type?: string;
        value?: string;
      }
      export interface Photo {
        default?: boolean;
        metadata?: Peopleapi_v1.Schema.FieldMetadata;
        url?: string;
      }
      export interface ProfileMetadata {
        objectType?: string;
        userTypes?: string[];
      }
      export interface Relation {
        formattedType?: string;
        metadata?: Peopleapi_v1.Schema.FieldMetadata;
        person?: string;
        type?: string;
      }
      export interface RelationshipInterest {
        formattedValue?: string;
        metadata?: Peopleapi_v1.Schema.FieldMetadata;
        value?: string;
      }
      export interface RelationshipStatus {
        formattedValue?: string;
        metadata?: Peopleapi_v1.Schema.FieldMetadata;
        value?: string;
      }
      export interface Residence {
        current?: boolean;
        metadata?: Peopleapi_v1.Schema.FieldMetadata;
        value?: string;
      }
      export interface SipAddress {
        formattedType?: string;
        metadata?: Peopleapi_v1.Schema.FieldMetadata;
        type?: string;
        value?: string;
      }
      export interface Skill {
        metadata?: Peopleapi_v1.Schema.FieldMetadata;
        value?: string;
      }
      export interface Source {
        etag?: string;
        id?: string;
        profileMetadata?: Peopleapi_v1.Schema.ProfileMetadata;
        type?: string;
        updateTime?: string;
      }
      export interface Status {
        code?: number;
        details?: Object[];
        message?: string;
      }
      export interface Tagline {
        metadata?: Peopleapi_v1.Schema.FieldMetadata;
        value?: string;
      }
      export interface UpdateContactGroupRequest {
        contactGroup?: Peopleapi_v1.Schema.ContactGroup;
      }
      export interface Url {
        formattedType?: string;
        metadata?: Peopleapi_v1.Schema.FieldMetadata;
        type?: string;
        value?: string;
      }
      export interface UserDefined {
        key?: string;
        metadata?: Peopleapi_v1.Schema.FieldMetadata;
        value?: string;
      }
    }
  }
  export interface Peopleapi_v1 {
    ContactGroups?: Peopleapi_v1.Collection.ContactGroupsCollection;
    People?: Peopleapi_v1.Collection.PeopleCollection;
    // Create a new instance of Address
    newAddress(): Peopleapi_v1.Schema.Address;
    // Create a new instance of AgeRangeType
    newAgeRangeType(): Peopleapi_v1.Schema.AgeRangeType;
    // Create a new instance of Biography
    newBiography(): Peopleapi_v1.Schema.Biography;
    // Create a new instance of Birthday
    newBirthday(): Peopleapi_v1.Schema.Birthday;
    // Create a new instance of BraggingRights
    newBraggingRights(): Peopleapi_v1.Schema.BraggingRights;
    // Create a new instance of ContactGroup
    newContactGroup(): Peopleapi_v1.Schema.ContactGroup;
    // Create a new instance of ContactGroupMembership
    newContactGroupMembership(): Peopleapi_v1.Schema.ContactGroupMembership;
    // Create a new instance of ContactGroupMetadata
    newContactGroupMetadata(): Peopleapi_v1.Schema.ContactGroupMetadata;
    // Create a new instance of CoverPhoto
    newCoverPhoto(): Peopleapi_v1.Schema.CoverPhoto;
    // Create a new instance of CreateContactGroupRequest
    newCreateContactGroupRequest(): Peopleapi_v1.Schema.CreateContactGroupRequest;
    // Create a new instance of Date
    newDate(): Peopleapi_v1.Schema.Date;
    // Create a new instance of DomainMembership
    newDomainMembership(): Peopleapi_v1.Schema.DomainMembership;
    // Create a new instance of EmailAddress
    newEmailAddress(): Peopleapi_v1.Schema.EmailAddress;
    // Create a new instance of Event
    newEvent(): Peopleapi_v1.Schema.Event;
    // Create a new instance of FieldMetadata
    newFieldMetadata(): Peopleapi_v1.Schema.FieldMetadata;
    // Create a new instance of Gender
    newGender(): Peopleapi_v1.Schema.Gender;
    // Create a new instance of ImClient
    newImClient(): Peopleapi_v1.Schema.ImClient;
    // Create a new instance of Interest
    newInterest(): Peopleapi_v1.Schema.Interest;
    // Create a new instance of Locale
    newLocale(): Peopleapi_v1.Schema.Locale;
    // Create a new instance of Membership
    newMembership(): Peopleapi_v1.Schema.Membership;
    // Create a new instance of ModifyContactGroupMembersRequest
    newModifyContactGroupMembersRequest(): Peopleapi_v1.Schema.ModifyContactGroupMembersRequest;
    // Create a new instance of Name
    newName(): Peopleapi_v1.Schema.Name;
    // Create a new instance of Nickname
    newNickname(): Peopleapi_v1.Schema.Nickname;
    // Create a new instance of Occupation
    newOccupation(): Peopleapi_v1.Schema.Occupation;
    // Create a new instance of Organization
    newOrganization(): Peopleapi_v1.Schema.Organization;
    // Create a new instance of Person
    newPerson(): Peopleapi_v1.Schema.Person;
    // Create a new instance of PersonMetadata
    newPersonMetadata(): Peopleapi_v1.Schema.PersonMetadata;
    // Create a new instance of PhoneNumber
    newPhoneNumber(): Peopleapi_v1.Schema.PhoneNumber;
    // Create a new instance of Photo
    newPhoto(): Peopleapi_v1.Schema.Photo;
    // Create a new instance of ProfileMetadata
    newProfileMetadata(): Peopleapi_v1.Schema.ProfileMetadata;
    // Create a new instance of Relation
    newRelation(): Peopleapi_v1.Schema.Relation;
    // Create a new instance of RelationshipInterest
    newRelationshipInterest(): Peopleapi_v1.Schema.RelationshipInterest;
    // Create a new instance of RelationshipStatus
    newRelationshipStatus(): Peopleapi_v1.Schema.RelationshipStatus;
    // Create a new instance of Residence
    newResidence(): Peopleapi_v1.Schema.Residence;
    // Create a new instance of SipAddress
    newSipAddress(): Peopleapi_v1.Schema.SipAddress;
    // Create a new instance of Skill
    newSkill(): Peopleapi_v1.Schema.Skill;
    // Create a new instance of Source
    newSource(): Peopleapi_v1.Schema.Source;
    // Create a new instance of Tagline
    newTagline(): Peopleapi_v1.Schema.Tagline;
    // Create a new instance of UpdateContactGroupRequest
    newUpdateContactGroupRequest(): Peopleapi_v1.Schema.UpdateContactGroupRequest;
    // Create a new instance of Url
    newUrl(): Peopleapi_v1.Schema.Url;
    // Create a new instance of UserDefined
    newUserDefined(): Peopleapi_v1.Schema.UserDefined;
  }
}

declare var Peopleapi_v1: GoogleAppsScript.Peopleapi_v1;