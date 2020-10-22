// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace People {
    namespace Collection {
      namespace ContactGroups {
        interface MembersCollection {
          // Modify the members of a contact group owned by the authenticated user.
          // <br>
          // The only system contact groups that can have members added are
          // `contactGroups/myContacts` and `contactGroups/starred`. Other system
          // contact groups are deprecated and can only have contacts removed.
          modify(resource: Schema.ModifyContactGroupMembersRequest, resourceName: string): Schema.ModifyContactGroupMembersResponse;
        }
      }
      namespace People {
        interface ConnectionsCollection {
          // Provides a list of the authenticated user's contacts merged with any
          // connected profiles.
          // <br>
          // The request throws a 400 error if 'personFields' is not specified.
          list(resourceName: string): Schema.ListConnectionsResponse;
          // Provides a list of the authenticated user's contacts merged with any
          // connected profiles.
          // <br>
          // The request throws a 400 error if 'personFields' is not specified.
          list(resourceName: string, optionalArgs: object): Schema.ListConnectionsResponse;
        }
      }
      interface ContactGroupsCollection {
        Members?: Collection.ContactGroups.MembersCollection;
        // Get a list of contact groups owned by the authenticated user by specifying
        // a list of contact group resource names.
        batchGet(): Schema.BatchGetContactGroupsResponse;
        // Get a list of contact groups owned by the authenticated user by specifying
        // a list of contact group resource names.
        batchGet(optionalArgs: object): Schema.BatchGetContactGroupsResponse;
        // Create a new contact group owned by the authenticated user.
        create(resource: Schema.CreateContactGroupRequest): Schema.ContactGroup;
        // Get a specific contact group owned by the authenticated user by specifying
        // a contact group resource name.
        get(resourceName: string): Schema.ContactGroup;
        // Get a specific contact group owned by the authenticated user by specifying
        // a contact group resource name.
        get(resourceName: string, optionalArgs: object): Schema.ContactGroup;
        // List all contact groups owned by the authenticated user. Members of the
        // contact groups are not populated.
        list(): Schema.ListContactGroupsResponse;
        // List all contact groups owned by the authenticated user. Members of the
        // contact groups are not populated.
        list(optionalArgs: object): Schema.ListContactGroupsResponse;
        // Delete an existing contact group owned by the authenticated user by
        // specifying a contact group resource name.
        remove(resourceName: string): void;
        // Delete an existing contact group owned by the authenticated user by
        // specifying a contact group resource name.
        remove(resourceName: string, optionalArgs: object): void;
        // Update the name of an existing contact group owned by the authenticated
        // user.
        update(resource: Schema.UpdateContactGroupRequest, resourceName: string): Schema.ContactGroup;
      }
      interface PeopleCollection {
        Connections?: Collection.People.ConnectionsCollection;
        // Create a new contact and return the person resource for that contact.
        createContact(resource: Schema.Person): Schema.Person;
        // Create a new contact and return the person resource for that contact.
        createContact(resource: Schema.Person, optionalArgs: object): Schema.Person;
        // Delete a contact person. Any non-contact data will not be deleted.
        deleteContact(resourceName: string): void;
        // Provides information about a person by specifying a resource name. Use
        // `people/me` to indicate the authenticated user.
        // <br>
        // The request throws a 400 error if 'personFields' is not specified.
        get(resourceName: string): Schema.Person;
        // Provides information about a person by specifying a resource name. Use
        // `people/me` to indicate the authenticated user.
        // <br>
        // The request throws a 400 error if 'personFields' is not specified.
        get(resourceName: string, optionalArgs: object): Schema.Person;
        // Provides information about a list of specific people by specifying a list
        // of requested resource names. Use `people/me` to indicate the authenticated
        // user.
        // <br>
        // The request throws a 400 error if 'personFields' is not specified.
        getBatchGet(): Schema.GetPeopleResponse;
        // Provides information about a list of specific people by specifying a list
        // of requested resource names. Use `people/me` to indicate the authenticated
        // user.
        // <br>
        // The request throws a 400 error if 'personFields' is not specified.
        getBatchGet(optionalArgs: object): Schema.GetPeopleResponse;
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
        updateContact(resource: Schema.Person, resourceName: string): Schema.Person;
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
        updateContact(resource: Schema.Person, resourceName: string, optionalArgs: object): Schema.Person;
      }
    }
    namespace Schema {
      interface Address {
        city?: string;
        country?: string;
        countryCode?: string;
        extendedAddress?: string;
        formattedType?: string;
        formattedValue?: string;
        metadata?: People.Schema.FieldMetadata;
        poBox?: string;
        postalCode?: string;
        region?: string;
        streetAddress?: string;
        type?: string;
      }
      interface AgeRangeType {
        ageRange?: string;
        metadata?: People.Schema.FieldMetadata;
      }
      interface BatchGetContactGroupsResponse {
        responses?: People.Schema.ContactGroupResponse[];
      }
      interface Biography {
        contentType?: string;
        metadata?: People.Schema.FieldMetadata;
        value?: string;
      }
      interface Birthday {
        date?: People.Schema.Date;
        metadata?: People.Schema.FieldMetadata;
        text?: string;
      }
      interface BraggingRights {
        metadata?: People.Schema.FieldMetadata;
        value?: string;
      }
      interface ContactGroup {
        etag?: string;
        formattedName?: string;
        groupType?: string;
        memberCount?: number;
        memberResourceNames?: string[];
        metadata?: People.Schema.ContactGroupMetadata;
        name?: string;
        resourceName?: string;
      }
      interface ContactGroupMembership {
        contactGroupId?: string;
      }
      interface ContactGroupMetadata {
        deleted?: boolean;
        updateTime?: string;
      }
      interface ContactGroupResponse {
        contactGroup?: People.Schema.ContactGroup;
        requestedResourceName?: string;
        status?: People.Schema.Status;
      }
      interface CoverPhoto {
        default?: boolean;
        metadata?: People.Schema.FieldMetadata;
        url?: string;
      }
      interface CreateContactGroupRequest {
        contactGroup?: People.Schema.ContactGroup;
      }
      interface Date {
        day?: number;
        month?: number;
        year?: number;
      }
      interface DomainMembership {
        inViewerDomain?: boolean;
      }
      interface EmailAddress {
        displayName?: string;
        formattedType?: string;
        metadata?: People.Schema.FieldMetadata;
        type?: string;
        value?: string;
      }
      interface Event {
        date?: People.Schema.Date;
        formattedType?: string;
        metadata?: People.Schema.FieldMetadata;
        type?: string;
      }
      interface FieldMetadata {
        primary?: boolean;
        source?: People.Schema.Source;
        verified?: boolean;
      }
      interface Gender {
        formattedValue?: string;
        metadata?: People.Schema.FieldMetadata;
        value?: string;
      }
      interface GetPeopleResponse {
        responses?: People.Schema.PersonResponse[];
      }
      interface ImClient {
        formattedProtocol?: string;
        formattedType?: string;
        metadata?: People.Schema.FieldMetadata;
        protocol?: string;
        type?: string;
        username?: string;
      }
      interface Interest {
        metadata?: People.Schema.FieldMetadata;
        value?: string;
      }
      interface ListConnectionsResponse {
        connections?: People.Schema.Person[];
        nextPageToken?: string;
        nextSyncToken?: string;
        totalItems?: number;
        totalPeople?: number;
      }
      interface ListContactGroupsResponse {
        contactGroups?: People.Schema.ContactGroup[];
        nextPageToken?: string;
        nextSyncToken?: string;
        totalItems?: number;
      }
      interface Locale {
        metadata?: People.Schema.FieldMetadata;
        value?: string;
      }
      interface Membership {
        contactGroupMembership?: People.Schema.ContactGroupMembership;
        domainMembership?: People.Schema.DomainMembership;
        metadata?: People.Schema.FieldMetadata;
      }
      interface ModifyContactGroupMembersRequest {
        resourceNamesToAdd?: string[];
        resourceNamesToRemove?: string[];
      }
      interface ModifyContactGroupMembersResponse {
        notFoundResourceNames?: string[];
      }
      interface Name {
        displayName?: string;
        displayNameLastFirst?: string;
        familyName?: string;
        givenName?: string;
        honorificPrefix?: string;
        honorificSuffix?: string;
        metadata?: People.Schema.FieldMetadata;
        middleName?: string;
        phoneticFamilyName?: string;
        phoneticFullName?: string;
        phoneticGivenName?: string;
        phoneticHonorificPrefix?: string;
        phoneticHonorificSuffix?: string;
        phoneticMiddleName?: string;
      }
      interface Nickname {
        metadata?: People.Schema.FieldMetadata;
        type?: string;
        value?: string;
      }
      interface Occupation {
        metadata?: People.Schema.FieldMetadata;
        value?: string;
      }
      interface Organization {
        current?: boolean;
        department?: string;
        domain?: string;
        endDate?: People.Schema.Date;
        formattedType?: string;
        jobDescription?: string;
        location?: string;
        metadata?: People.Schema.FieldMetadata;
        name?: string;
        phoneticName?: string;
        startDate?: People.Schema.Date;
        symbol?: string;
        title?: string;
        type?: string;
      }
      interface Person {
        addresses?: People.Schema.Address[];
        ageRange?: string;
        ageRanges?: People.Schema.AgeRangeType[];
        biographies?: People.Schema.Biography[];
        birthdays?: People.Schema.Birthday[];
        braggingRights?: People.Schema.BraggingRights[];
        coverPhotos?: People.Schema.CoverPhoto[];
        emailAddresses?: People.Schema.EmailAddress[];
        etag?: string;
        events?: People.Schema.Event[];
        genders?: People.Schema.Gender[];
        imClients?: People.Schema.ImClient[];
        interests?: People.Schema.Interest[];
        locales?: People.Schema.Locale[];
        memberships?: People.Schema.Membership[];
        metadata?: People.Schema.PersonMetadata;
        names?: People.Schema.Name[];
        nicknames?: People.Schema.Nickname[];
        occupations?: People.Schema.Occupation[];
        organizations?: People.Schema.Organization[];
        phoneNumbers?: People.Schema.PhoneNumber[];
        photos?: People.Schema.Photo[];
        relations?: People.Schema.Relation[];
        relationshipInterests?: People.Schema.RelationshipInterest[];
        relationshipStatuses?: People.Schema.RelationshipStatus[];
        residences?: People.Schema.Residence[];
        resourceName?: string;
        sipAddresses?: People.Schema.SipAddress[];
        skills?: People.Schema.Skill[];
        taglines?: People.Schema.Tagline[];
        urls?: People.Schema.Url[];
        userDefined?: People.Schema.UserDefined[];
      }
      interface PersonMetadata {
        deleted?: boolean;
        linkedPeopleResourceNames?: string[];
        objectType?: string;
        previousResourceNames?: string[];
        sources?: People.Schema.Source[];
      }
      interface PersonResponse {
        httpStatusCode?: number;
        person?: People.Schema.Person;
        requestedResourceName?: string;
        status?: People.Schema.Status;
      }
      interface PhoneNumber {
        canonicalForm?: string;
        formattedType?: string;
        metadata?: People.Schema.FieldMetadata;
        type?: string;
        value?: string;
      }
      interface Photo {
        default?: boolean;
        metadata?: People.Schema.FieldMetadata;
        url?: string;
      }
      interface ProfileMetadata {
        objectType?: string;
        userTypes?: string[];
      }
      interface Relation {
        formattedType?: string;
        metadata?: People.Schema.FieldMetadata;
        person?: string;
        type?: string;
      }
      interface RelationshipInterest {
        formattedValue?: string;
        metadata?: People.Schema.FieldMetadata;
        value?: string;
      }
      interface RelationshipStatus {
        formattedValue?: string;
        metadata?: People.Schema.FieldMetadata;
        value?: string;
      }
      interface Residence {
        current?: boolean;
        metadata?: People.Schema.FieldMetadata;
        value?: string;
      }
      interface SipAddress {
        formattedType?: string;
        metadata?: People.Schema.FieldMetadata;
        type?: string;
        value?: string;
      }
      interface Skill {
        metadata?: People.Schema.FieldMetadata;
        value?: string;
      }
      interface Source {
        etag?: string;
        id?: string;
        profileMetadata?: People.Schema.ProfileMetadata;
        type?: string;
        updateTime?: string;
      }
      interface Status {
        code?: number;
        details?: object[];
        message?: string;
      }
      interface Tagline {
        metadata?: People.Schema.FieldMetadata;
        value?: string;
      }
      interface UpdateContactGroupRequest {
        contactGroup?: People.Schema.ContactGroup;
      }
      interface Url {
        formattedType?: string;
        metadata?: People.Schema.FieldMetadata;
        type?: string;
        value?: string;
      }
      interface UserDefined {
        key?: string;
        metadata?: People.Schema.FieldMetadata;
        value?: string;
      }
    }
  }
  interface People {
    ContactGroups?: People.Collection.ContactGroupsCollection;
    People?: People.Collection.PeopleCollection;
    // Create a new instance of Address
    newAddress(): People.Schema.Address;
    // Create a new instance of AgeRangeType
    newAgeRangeType(): People.Schema.AgeRangeType;
    // Create a new instance of Biography
    newBiography(): People.Schema.Biography;
    // Create a new instance of Birthday
    newBirthday(): People.Schema.Birthday;
    // Create a new instance of BraggingRights
    newBraggingRights(): People.Schema.BraggingRights;
    // Create a new instance of ContactGroup
    newContactGroup(): People.Schema.ContactGroup;
    // Create a new instance of ContactGroupMembership
    newContactGroupMembership(): People.Schema.ContactGroupMembership;
    // Create a new instance of ContactGroupMetadata
    newContactGroupMetadata(): People.Schema.ContactGroupMetadata;
    // Create a new instance of CoverPhoto
    newCoverPhoto(): People.Schema.CoverPhoto;
    // Create a new instance of CreateContactGroupRequest
    newCreateContactGroupRequest(): People.Schema.CreateContactGroupRequest;
    // Create a new instance of Date
    newDate(): People.Schema.Date;
    // Create a new instance of DomainMembership
    newDomainMembership(): People.Schema.DomainMembership;
    // Create a new instance of EmailAddress
    newEmailAddress(): People.Schema.EmailAddress;
    // Create a new instance of Event
    newEvent(): People.Schema.Event;
    // Create a new instance of FieldMetadata
    newFieldMetadata(): People.Schema.FieldMetadata;
    // Create a new instance of Gender
    newGender(): People.Schema.Gender;
    // Create a new instance of ImClient
    newImClient(): People.Schema.ImClient;
    // Create a new instance of Interest
    newInterest(): People.Schema.Interest;
    // Create a new instance of Locale
    newLocale(): People.Schema.Locale;
    // Create a new instance of Membership
    newMembership(): People.Schema.Membership;
    // Create a new instance of ModifyContactGroupMembersRequest
    newModifyContactGroupMembersRequest(): People.Schema.ModifyContactGroupMembersRequest;
    // Create a new instance of Name
    newName(): People.Schema.Name;
    // Create a new instance of Nickname
    newNickname(): People.Schema.Nickname;
    // Create a new instance of Occupation
    newOccupation(): People.Schema.Occupation;
    // Create a new instance of Organization
    newOrganization(): People.Schema.Organization;
    // Create a new instance of Person
    newPerson(): People.Schema.Person;
    // Create a new instance of PersonMetadata
    newPersonMetadata(): People.Schema.PersonMetadata;
    // Create a new instance of PhoneNumber
    newPhoneNumber(): People.Schema.PhoneNumber;
    // Create a new instance of Photo
    newPhoto(): People.Schema.Photo;
    // Create a new instance of ProfileMetadata
    newProfileMetadata(): People.Schema.ProfileMetadata;
    // Create a new instance of Relation
    newRelation(): People.Schema.Relation;
    // Create a new instance of RelationshipInterest
    newRelationshipInterest(): People.Schema.RelationshipInterest;
    // Create a new instance of RelationshipStatus
    newRelationshipStatus(): People.Schema.RelationshipStatus;
    // Create a new instance of Residence
    newResidence(): People.Schema.Residence;
    // Create a new instance of SipAddress
    newSipAddress(): People.Schema.SipAddress;
    // Create a new instance of Skill
    newSkill(): People.Schema.Skill;
    // Create a new instance of Source
    newSource(): People.Schema.Source;
    // Create a new instance of Tagline
    newTagline(): People.Schema.Tagline;
    // Create a new instance of UpdateContactGroupRequest
    newUpdateContactGroupRequest(): People.Schema.UpdateContactGroupRequest;
    // Create a new instance of Url
    newUrl(): People.Schema.Url;
    // Create a new instance of UserDefined
    newUserDefined(): People.Schema.UserDefined;
  }
}

declare var People: GoogleAppsScript.People;
