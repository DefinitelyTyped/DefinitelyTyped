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
                    modify(
                        resource: Schema.ModifyContactGroupMembersRequest,
                        resourceName: string,
                    ): Schema.ModifyContactGroupMembersResponse;
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
                Members?: Collection.ContactGroups.MembersCollection | undefined;
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
            interface OtherContactsCollection {
                // Copies an "Other contact" to a new contact in the user's "myContacts"
                // group Mutate requests for the same user should be sent sequentially
                // to avoid increased latency and failures.
                copyOtherContactToMyContactsGroup(
                    resource: Schema.CopyOtherContactToMyContactsGroupRequest,
                    resourceName: string,
                ): Schema.Person;
                // List all "Other contacts", that is contacts that are not in a contact group.
                list(): Schema.ListOtherContactsResponse;
                // List all "Other contacts", that is contacts that are not in a contact group.
                list(optionalArgs: object): Schema.ListOtherContactsResponse;
                // Provides a list of contacts in the authenticated user's other contacts
                // that matches the search query.
                search(): Schema.SearchDirectoryPeopleResponse;
                // Provides a list of contacts in the authenticated user's other contacts
                // that matches the search query.
                search(optionalArgs: object): Schema.SearchDirectoryPeopleResponse;
            }
            interface PeopleCollection {
                Connections?: Collection.People.ConnectionsCollection | undefined;
                // Create a batch of new contacts and return the PersonResponses for the
                // newly Mutate requests for the same user should be sent sequentially
                // to avoid increased latency and failures.
                batchCreateContacts(resource: Schema.BatchCreateContactsRequest): Schema.BatchCreateContactsResponse;
                // Delete a batch of contacts. Any non-contact data will not be deleted.
                // Mutate requests for the same user should be sent sequentially to avoid
                // increased latency and failures.
                batchDeleteContacts(resource: Schema.BatchDeleteContactsRequest): Schema.Empty;
                // Update a batch of contacts and return a map of resource names to
                // PersonResponses for the updated contacts.
                batchUpdateContacts(resource: Schema.BatchUpdateContactsRequest): Schema.BatchUpdateContactsResponse;
                // Create a new contact and return the person resource for that contact.
                createContact(resource: Schema.Person): Schema.Person;
                // Create a new contact and return the person resource for that contact.
                createContact(resource: Schema.Person, optionalArgs: object): Schema.Person;
                // Delete a contact person. Any non-contact data will not be deleted.
                deleteContact(resourceName: string): void;
                // Delete a contact's photo. Mutate requests for the same user should
                // be done sequentially to avoid // lock contention.
                deleteContactPhoto(resourceName: string): Schema.DeleteContactPhotoResponse;
                // Delete a contact's photo. Mutate requests for the same user should
                // be done sequentially to avoid // lock contention.
                deleteContactPhoto(resourceName: string, optionalArgs: object): Schema.DeleteContactPhotoResponse;
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
                // Provides a list of domain profiles and domain contacts in the authenticated
                // user's domain directory.
                listDirectoryPeople(): Schema.ListDirectoryPeopleResponse;
                // Provides a list of domain profiles and domain contacts in the authenticated
                // user's domain directory.
                listDirectoryPeople(optionalArgs: object): Schema.ListDirectoryPeopleResponse;
                // Provides a list of contacts in the authenticated user's grouped contacts
                // that matches the search query.
                searchContacts(): Schema.SearchResponse;
                // Provides a list of contacts in the authenticated user's grouped contacts
                // that matches the search query.
                searchContacts(optionalArgs: object): Schema.SearchResponse;
                // Provides a list of domain profiles and domain contacts in the
                // authenticated user's domain directory that match the search query.
                searchDirectoryPeople(): Schema.SearchDirectoryPeopleResponse;
                // Provides a list of domain profiles and domain contacts in the
                // authenticated user's domain directory that match the search query.
                searchDirectoryPeople(optionalArgs: object): Schema.SearchDirectoryPeopleResponse;
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
                // Update a contact's photo. Mutate requests for the same user should be sent
                // sequentially to avoid increased latency and failures.
                updateContactPhoto(
                    resource: Schema.UpdateContactPhotoRequest,
                    resourceName: string,
                ): Schema.UpdateContactPhotoResponse;
            }
        }
        namespace Schema {
            interface Address {
                city?: string | undefined;
                country?: string | undefined;
                countryCode?: string | undefined;
                extendedAddress?: string | undefined;
                formattedType?: string | undefined;
                formattedValue?: string | undefined;
                metadata?: People.Schema.FieldMetadata | undefined;
                poBox?: string | undefined;
                postalCode?: string | undefined;
                region?: string | undefined;
                streetAddress?: string | undefined;
                type?: string | undefined;
            }
            interface AgeRangeType {
                ageRange?: string | undefined;
                metadata?: People.Schema.FieldMetadata | undefined;
            }
            interface BatchCreateContactsRequest {
                contacts?: People.Schema.ContactToCreate[] | undefined;
                readMask?: string | undefined;
                sources?: string[] | undefined;
            }
            interface BatchCreateContactsResponse {
                createdPeople?: People.Schema.PersonResponse[] | undefined;
            }
            interface BatchDeleteContactsRequest {
                resourceNames?: string[] | undefined;
            }
            interface BatchGetContactGroupsResponse {
                responses?: People.Schema.ContactGroupResponse[] | undefined;
            }
            interface BatchUpdateContactsRequest {
                contacts?: { [key: string]: People.Schema.Person } | undefined;
                readMask?: string | undefined;
                sources?: string[] | undefined;
                updateMask?: string | undefined;
            }
            interface BatchUpdateContactsResponse {
                updateResult?: { [key: string]: People.Schema.PersonResponse } | undefined;
            }
            interface Biography {
                contentType?: string | undefined;
                metadata?: People.Schema.FieldMetadata | undefined;
                value?: string | undefined;
            }
            interface Birthday {
                date?: People.Schema.Date | undefined;
                metadata?: People.Schema.FieldMetadata | undefined;
                text?: string | undefined;
            }
            interface BraggingRights {
                metadata?: People.Schema.FieldMetadata | undefined;
                value?: string | undefined;
            }
            interface CalendarUrl {
                formattedType?: string | undefined;
                metadata?: People.Schema.FieldMetadata | undefined;
                type?: string | undefined;
                url?: string | undefined;
            }
            interface ClientData {
                key?: string | undefined;
                metadata?: People.Schema.FieldMetadata | undefined;
                value?: string | undefined;
            }
            interface ContactGroup {
                etag?: string | undefined;
                formattedName?: string | undefined;
                groupType?: string | undefined;
                memberCount?: number | undefined;
                memberResourceNames?: string[] | undefined;
                metadata?: People.Schema.ContactGroupMetadata | undefined;
                name?: string | undefined;
                resourceName?: string | undefined;
            }
            interface ContactGroupMembership {
                contactGroupId?: string | undefined;
            }
            interface ContactGroupMetadata {
                deleted?: boolean | undefined;
                updateTime?: string | undefined;
            }
            interface ContactGroupResponse {
                contactGroup?: People.Schema.ContactGroup | undefined;
                requestedResourceName?: string | undefined;
                status?: People.Schema.Status | undefined;
            }
            interface ContactToCreate {
                contactPerson?: People.Schema.Person | undefined;
            }
            interface CopyOtherContactToMyContactsGroupRequest {
                copyMask?: string | undefined;
                readMask?: string | undefined;
                sources?: string[] | undefined;
            }
            interface CoverPhoto {
                default?: boolean | undefined;
                metadata?: People.Schema.FieldMetadata | undefined;
                url?: string | undefined;
            }
            interface CreateContactGroupRequest {
                contactGroup?: People.Schema.ContactGroup | undefined;
            }
            interface Date {
                day?: number | undefined;
                month?: number | undefined;
                year?: number | undefined;
            }
            interface DeleteContactPhotoResponse {
                person?: People.Schema.Person | undefined;
            }
            interface DomainMembership {
                inViewerDomain?: boolean | undefined;
            }
            interface EmailAddress {
                displayName?: string | undefined;
                formattedType?: string | undefined;
                metadata?: People.Schema.FieldMetadata | undefined;
                type?: string | undefined;
                value?: string | undefined;
            }
            // eslint-disable-next-line @typescript-eslint/no-empty-interface
            interface Empty {}
            interface Event {
                date?: People.Schema.Date | undefined;
                formattedType?: string | undefined;
                metadata?: People.Schema.FieldMetadata | undefined;
                type?: string | undefined;
            }
            interface ExternalId {
                formattedType?: string | undefined;
                metadata?: People.Schema.FieldMetadata | undefined;
                type?: string | undefined;
                value?: string | undefined;
            }
            interface FieldMetadata {
                primary?: boolean | undefined;
                source?: People.Schema.Source | undefined;
                verified?: boolean | undefined;
            }
            interface FileAs {
                metadata?: People.Schema.FieldMetadata | undefined;
                value?: string | undefined;
            }
            interface Gender {
                formattedValue?: string | undefined;
                metadata?: People.Schema.FieldMetadata | undefined;
                value?: string | undefined;
            }
            interface GetPeopleResponse {
                responses?: People.Schema.PersonResponse[] | undefined;
            }
            interface GroupClientData {
                key?: string | undefined;
                value?: string | undefined;
            }
            interface ImClient {
                formattedProtocol?: string | undefined;
                formattedType?: string | undefined;
                metadata?: People.Schema.FieldMetadata | undefined;
                protocol?: string | undefined;
                type?: string | undefined;
                username?: string | undefined;
            }
            interface Interest {
                metadata?: People.Schema.FieldMetadata | undefined;
                value?: string | undefined;
            }
            interface ListConnectionsResponse {
                connections?: People.Schema.Person[] | undefined;
                nextPageToken?: string | undefined;
                nextSyncToken?: string | undefined;
                totalItems?: number | undefined;
                totalPeople?: number | undefined;
            }
            interface ListContactGroupsResponse {
                contactGroups?: People.Schema.ContactGroup[] | undefined;
                nextPageToken?: string | undefined;
                nextSyncToken?: string | undefined;
                totalItems?: number | undefined;
            }
            interface ListDirectoryPeopleResponse {
                nextPageToken?: string | undefined;
                nextSyncToken?: string | undefined;
                people?: People.Schema.Person[] | undefined;
            }
            interface ListOtherContactsResponse {
                nextPageToken?: string | undefined;
                nextSyncToken?: string | undefined;
                otherContacts?: People.Schema.Person[] | undefined;
                totalSize?: number | undefined;
            }
            interface Locale {
                metadata?: People.Schema.FieldMetadata | undefined;
                value?: string | undefined;
            }
            interface Location {
                buildingId?: string | undefined;
                current?: boolean | undefined;
                deskCode?: string | undefined;
                floor?: string | undefined;
                floorSection?: string | undefined;
                metadata?: People.Schema.FieldMetadata | undefined;
                type?: string | undefined;
                value?: string | undefined;
            }
            interface Membership {
                contactGroupMembership?: People.Schema.ContactGroupMembership | undefined;
                domainMembership?: People.Schema.DomainMembership | undefined;
                metadata?: People.Schema.FieldMetadata | undefined;
            }
            interface MiscKeyword {
                formattedType?: string | undefined;
                metadata?: People.Schema.FieldMetadata | undefined;
                type?: string | undefined;
                value?: string | undefined;
            }
            interface ModifyContactGroupMembersRequest {
                resourceNamesToAdd?: string[] | undefined;
                resourceNamesToRemove?: string[] | undefined;
            }
            interface ModifyContactGroupMembersResponse {
                notFoundResourceNames?: string[] | undefined;
            }
            interface Name {
                displayName?: string | undefined;
                displayNameLastFirst?: string | undefined;
                familyName?: string | undefined;
                givenName?: string | undefined;
                honorificPrefix?: string | undefined;
                honorificSuffix?: string | undefined;
                metadata?: People.Schema.FieldMetadata | undefined;
                middleName?: string | undefined;
                phoneticFamilyName?: string | undefined;
                phoneticFullName?: string | undefined;
                phoneticGivenName?: string | undefined;
                phoneticHonorificPrefix?: string | undefined;
                phoneticHonorificSuffix?: string | undefined;
                phoneticMiddleName?: string | undefined;
            }
            interface Nickname {
                metadata?: People.Schema.FieldMetadata | undefined;
                type?: string | undefined;
                value?: string | undefined;
            }
            interface Occupation {
                metadata?: People.Schema.FieldMetadata | undefined;
                value?: string | undefined;
            }
            interface Organization {
                current?: boolean | undefined;
                department?: string | undefined;
                domain?: string | undefined;
                endDate?: People.Schema.Date | undefined;
                formattedType?: string | undefined;
                jobDescription?: string | undefined;
                location?: string | undefined;
                metadata?: People.Schema.FieldMetadata | undefined;
                name?: string | undefined;
                phoneticName?: string | undefined;
                startDate?: People.Schema.Date | undefined;
                symbol?: string | undefined;
                title?: string | undefined;
                type?: string | undefined;
            }
            interface Person {
                addresses?: People.Schema.Address[] | undefined;
                ageRange?: string | undefined;
                ageRanges?: People.Schema.AgeRangeType[] | undefined;
                biographies?: People.Schema.Biography[] | undefined;
                birthdays?: People.Schema.Birthday[] | undefined;
                braggingRights?: People.Schema.BraggingRights[] | undefined;
                coverPhotos?: People.Schema.CoverPhoto[] | undefined;
                emailAddresses?: People.Schema.EmailAddress[] | undefined;
                etag?: string | undefined;
                events?: People.Schema.Event[] | undefined;
                genders?: People.Schema.Gender[] | undefined;
                imClients?: People.Schema.ImClient[] | undefined;
                interests?: People.Schema.Interest[] | undefined;
                locales?: People.Schema.Locale[] | undefined;
                memberships?: People.Schema.Membership[] | undefined;
                metadata?: People.Schema.PersonMetadata | undefined;
                names?: People.Schema.Name[] | undefined;
                nicknames?: People.Schema.Nickname[] | undefined;
                occupations?: People.Schema.Occupation[] | undefined;
                organizations?: People.Schema.Organization[] | undefined;
                phoneNumbers?: People.Schema.PhoneNumber[] | undefined;
                photos?: People.Schema.Photo[] | undefined;
                relations?: People.Schema.Relation[] | undefined;
                relationshipInterests?: People.Schema.RelationshipInterest[] | undefined;
                relationshipStatuses?: People.Schema.RelationshipStatus[] | undefined;
                residences?: People.Schema.Residence[] | undefined;
                resourceName?: string | undefined;
                sipAddresses?: People.Schema.SipAddress[] | undefined;
                skills?: People.Schema.Skill[] | undefined;
                taglines?: People.Schema.Tagline[] | undefined;
                urls?: People.Schema.Url[] | undefined;
                userDefined?: People.Schema.UserDefined[] | undefined;
            }
            interface PersonMetadata {
                deleted?: boolean | undefined;
                linkedPeopleResourceNames?: string[] | undefined;
                objectType?: string | undefined;
                previousResourceNames?: string[] | undefined;
                sources?: People.Schema.Source[] | undefined;
            }
            interface PersonResponse {
                httpStatusCode?: number | undefined;
                person?: People.Schema.Person | undefined;
                requestedResourceName?: string | undefined;
                status?: People.Schema.Status | undefined;
            }
            interface PhoneNumber {
                canonicalForm?: string | undefined;
                formattedType?: string | undefined;
                metadata?: People.Schema.FieldMetadata | undefined;
                type?: string | undefined;
                value?: string | undefined;
            }
            interface Photo {
                default?: boolean | undefined;
                metadata?: People.Schema.FieldMetadata | undefined;
                url?: string | undefined;
            }
            interface ProfileMetadata {
                objectType?: string | undefined;
                userTypes?: string[] | undefined;
            }
            interface Relation {
                formattedType?: string | undefined;
                metadata?: People.Schema.FieldMetadata | undefined;
                person?: string | undefined;
                type?: string | undefined;
            }
            interface RelationshipInterest {
                formattedValue?: string | undefined;
                metadata?: People.Schema.FieldMetadata | undefined;
                value?: string | undefined;
            }
            interface RelationshipStatus {
                formattedValue?: string | undefined;
                metadata?: People.Schema.FieldMetadata | undefined;
                value?: string | undefined;
            }
            interface Residence {
                current?: boolean | undefined;
                metadata?: People.Schema.FieldMetadata | undefined;
                value?: string | undefined;
            }
            interface SearchDirectoryPeopleResponse {
                nextPageToken?: string | undefined;
                people?: People.Schema.Person[] | undefined;
                totalSize?: number | undefined;
            }
            interface SearchResponse {
                results?: People.Schema.SearchResult[] | undefined;
            }
            interface SearchResult {
                person?: People.Schema.Person | undefined;
            }
            interface SipAddress {
                formattedType?: string | undefined;
                metadata?: People.Schema.FieldMetadata | undefined;
                type?: string | undefined;
                value?: string | undefined;
            }
            interface Skill {
                metadata?: People.Schema.FieldMetadata | undefined;
                value?: string | undefined;
            }
            interface Source {
                etag?: string | undefined;
                id?: string | undefined;
                profileMetadata?: People.Schema.ProfileMetadata | undefined;
                type?: string | undefined;
                updateTime?: string | undefined;
            }
            interface Status {
                code?: number | undefined;
                details?: object[] | undefined;
                message?: string | undefined;
            }
            interface Tagline {
                metadata?: People.Schema.FieldMetadata | undefined;
                value?: string | undefined;
            }
            interface UpdateContactGroupRequest {
                contactGroup?: People.Schema.ContactGroup | undefined;
            }
            interface UpdateContactPhotoRequest {
                personFields?: string | undefined;
                photoBytes?: string | undefined;
                sources?: string[] | undefined;
            }
            interface UpdateContactPhotoResponse {
                person?: People.Schema.Person | undefined;
            }
            interface Url {
                formattedType?: string | undefined;
                metadata?: People.Schema.FieldMetadata | undefined;
                type?: string | undefined;
                value?: string | undefined;
            }
            interface UserDefined {
                key?: string | undefined;
                metadata?: People.Schema.FieldMetadata | undefined;
                value?: string | undefined;
            }
        }
    }
    interface People {
        ContactGroups?: People.Collection.ContactGroupsCollection | undefined;
        OtherContacts?: People.Collection.OtherContactsCollection | undefined;
        People?: People.Collection.PeopleCollection | undefined;
        // Create a new instance of Address
        newAddress(): People.Schema.Address;
        // Create a new instance of AgeRangeType
        newAgeRangeType(): People.Schema.AgeRangeType;
        // Create a new instance of BatchCreateContactsRequest
        newBatchCreateContactsRequest(): People.Schema.BatchCreateContactsRequest;
        // Create a new instance of BatchDeleteContactsRequest
        newBatchDeleteContactsRequest(): People.Schema.BatchDeleteContactsRequest;
        // Create a new instance of BatchUpdateContactsRequest
        newBatchUpdateContactsRequest(): People.Schema.BatchUpdateContactsRequest;
        // Create a new instance of Biography
        newBiography(): People.Schema.Biography;
        // Create a new instance of Birthday
        newBirthday(): People.Schema.Birthday;
        // Create a new instance of BraggingRights
        newBraggingRights(): People.Schema.BraggingRights;
        // Create a new instance of CalendarUrl
        newCalendarUrl(): People.Schema.CalendarUrl;
        // Create a new instance of ClientData
        newClientData(): People.Schema.ClientData;
        // Create a new instance of ContactGroup
        newContactGroup(): People.Schema.ContactGroup;
        // Create a new instance of ContactGroupMembership
        newContactGroupMembership(): People.Schema.ContactGroupMembership;
        // Create a new instance of ContactGroupMetadata
        newContactGroupMetadata(): People.Schema.ContactGroupMetadata;
        // Create a new instance of ContactToCreate
        newContactToCreate(): People.Schema.ContactToCreate;
        // Create a new instance of CopyOtherContactToMyContactsGroupRequest
        newCopyOtherContactToMyContactsGroupRequest(): People.Schema.CopyOtherContactToMyContactsGroupRequest;
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
        // Create a new instance of ExternalId
        newExternalId(): People.Schema.ExternalId;
        // Create a new instance of FieldMetadata
        newFieldMetadata(): People.Schema.FieldMetadata;
        // Create a new instance of newFileAs
        newFileAs(): People.Schema.FileAs;
        // Create a new instance of Gender
        newGender(): People.Schema.Gender;
        // Create a new instance of GroupClientData
        newGroupClientData(): People.Schema.GroupClientData;
        // Create a new instance of ImClient
        newImClient(): People.Schema.ImClient;
        // Create a new instance of Interest
        newInterest(): People.Schema.Interest;
        // Create a new instance of Locale
        newLocale(): People.Schema.Locale;
        // Create a new instance of Location
        newLocation(): People.Schema.Location;
        // Create a new instance of Membership
        newMembership(): People.Schema.Membership;
        // Create a new instance of MiscKeyword
        newMiscKeyword(): People.Schema.MiscKeyword;
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
        //  Create a new instance of UpdateContactPhotoRequest
        newUpdateContactPhotoRequest(): People.Schema.UpdateContactPhotoRequest;
        // Create a new instance of Url
        newUrl(): People.Schema.Url;
        // Create a new instance of UserDefined
        newUserDefined(): People.Schema.UserDefined;
    }
}

declare var People: GoogleAppsScript.People;
