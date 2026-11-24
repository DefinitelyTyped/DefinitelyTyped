declare namespace GoogleAppsScript {
    namespace People {
        namespace Collection {
            namespace ContactGroups {
                interface MembersCollection {
                    modify(
                        $resource: Schema.ModifyContactGroupMembersRequest,
                        resourceName: string,
                    ): Schema.ModifyContactGroupMembersResponse;
                }
            }
            namespace People {
                interface ConnectionsCollection {
                    list(
                        resourceName: string,
                        args?: {
                            pageSize?: number | undefined;
                            pageToken?: string | undefined;
                            personFields?: string | undefined;
                            "requestMask.includeField"?: string | undefined;
                            requestSyncToken?: boolean | undefined;
                            sortOrder?:
                                | "LAST_MODIFIED_ASCENDING"
                                | "LAST_MODIFIED_DESCENDING"
                                | "FIRST_NAME_ASCENDING"
                                | "LAST_NAME_ASCENDING"
                                | undefined;
                            sources?:
                                | Array<
                                    | "READ_SOURCE_TYPE_UNSPECIFIED"
                                    | "READ_SOURCE_TYPE_PROFILE"
                                    | "READ_SOURCE_TYPE_CONTACT"
                                    | "READ_SOURCE_TYPE_DOMAIN_CONTACT"
                                    | "READ_SOURCE_TYPE_OTHER_CONTACT"
                                >
                                | undefined;
                            syncToken?: string | undefined;
                        },
                    ): Schema.ListConnectionsResponse;
                }
            }
            interface ContactGroupsCollection {
                Members: ContactGroups.MembersCollection;
                batchGet(
                    args?: {
                        groupFields?: string | undefined;
                        maxMembers?: number | undefined;
                        resourceNames?: Array<string> | undefined;
                    },
                ): Schema.BatchGetContactGroupsResponse;
                create(
                    $resource: Schema.CreateContactGroupRequest,
                ): Schema.ContactGroup;
                get(
                    resourceName: string,
                    args?: {
                        groupFields?: string | undefined;
                        maxMembers?: number | undefined;
                    },
                ): Schema.ContactGroup;
                list(
                    args?: {
                        groupFields?: string | undefined;
                        pageSize?: number | undefined;
                        pageToken?: string | undefined;
                        syncToken?: string | undefined;
                    },
                ): Schema.ListContactGroupsResponse;
                remove(
                    resourceName: string,
                    args?: {
                        deleteContacts?: boolean | undefined;
                    },
                ): Schema.Empty;
                update(
                    $resource: Schema.UpdateContactGroupRequest,
                    resourceName: string,
                ): Schema.ContactGroup;
            }
            interface OtherContactsCollection {
                copyOtherContactToMyContactsGroup(
                    $resource: Schema.CopyOtherContactToMyContactsGroupRequest,
                    resourceName: string,
                ): Schema.Person;
                list(
                    args?: {
                        pageSize?: number | undefined;
                        pageToken?: string | undefined;
                        readMask?: string | undefined;
                        requestSyncToken?: boolean | undefined;
                        sources?:
                            | Array<
                                | "READ_SOURCE_TYPE_UNSPECIFIED"
                                | "READ_SOURCE_TYPE_PROFILE"
                                | "READ_SOURCE_TYPE_CONTACT"
                                | "READ_SOURCE_TYPE_DOMAIN_CONTACT"
                                | "READ_SOURCE_TYPE_OTHER_CONTACT"
                            >
                            | undefined;
                        syncToken?: string | undefined;
                    },
                ): Schema.ListOtherContactsResponse;
                search(
                    args?: {
                        pageSize?: number | undefined;
                        query?: string | undefined;
                        readMask?: string | undefined;
                    },
                ): Schema.SearchResponse;
            }
            interface PeopleCollection {
                Connections: People.ConnectionsCollection;
                batchCreateContacts(
                    $resource: Schema.BatchCreateContactsRequest,
                ): Schema.BatchCreateContactsResponse;
                batchDeleteContacts(
                    $resource: Schema.BatchDeleteContactsRequest,
                ): Schema.Empty;
                batchUpdateContacts(
                    $resource: Schema.BatchUpdateContactsRequest,
                ): Schema.BatchUpdateContactsResponse;
                createContact(
                    $resource: Schema.Person,
                    args?: {
                        personFields?: string | undefined;
                        sources?:
                            | Array<
                                | "READ_SOURCE_TYPE_UNSPECIFIED"
                                | "READ_SOURCE_TYPE_PROFILE"
                                | "READ_SOURCE_TYPE_CONTACT"
                                | "READ_SOURCE_TYPE_DOMAIN_CONTACT"
                                | "READ_SOURCE_TYPE_OTHER_CONTACT"
                            >
                            | undefined;
                    },
                ): Schema.Person;
                deleteContact(
                    resourceName: string,
                ): Schema.Empty;
                deleteContactPhoto(
                    resourceName: string,
                    args?: {
                        personFields?: string | undefined;
                        sources?:
                            | Array<
                                | "READ_SOURCE_TYPE_UNSPECIFIED"
                                | "READ_SOURCE_TYPE_PROFILE"
                                | "READ_SOURCE_TYPE_CONTACT"
                                | "READ_SOURCE_TYPE_DOMAIN_CONTACT"
                                | "READ_SOURCE_TYPE_OTHER_CONTACT"
                            >
                            | undefined;
                    },
                ): Schema.DeleteContactPhotoResponse;
                get(
                    resourceName: string,
                    args?: {
                        personFields?: string | undefined;
                        "requestMask.includeField"?: string | undefined;
                        sources?:
                            | Array<
                                | "READ_SOURCE_TYPE_UNSPECIFIED"
                                | "READ_SOURCE_TYPE_PROFILE"
                                | "READ_SOURCE_TYPE_CONTACT"
                                | "READ_SOURCE_TYPE_DOMAIN_CONTACT"
                                | "READ_SOURCE_TYPE_OTHER_CONTACT"
                            >
                            | undefined;
                    },
                ): Schema.Person;
                getBatchGet(
                    args?: {
                        personFields?: string | undefined;
                        "requestMask.includeField"?: string | undefined;
                        resourceNames?: Array<string> | undefined;
                        sources?:
                            | Array<
                                | "READ_SOURCE_TYPE_UNSPECIFIED"
                                | "READ_SOURCE_TYPE_PROFILE"
                                | "READ_SOURCE_TYPE_CONTACT"
                                | "READ_SOURCE_TYPE_DOMAIN_CONTACT"
                                | "READ_SOURCE_TYPE_OTHER_CONTACT"
                            >
                            | undefined;
                    },
                ): Schema.GetPeopleResponse;
                listDirectoryPeople(
                    args?: {
                        mergeSources?:
                            | Array<"DIRECTORY_MERGE_SOURCE_TYPE_UNSPECIFIED" | "DIRECTORY_MERGE_SOURCE_TYPE_CONTACT">
                            | undefined;
                        pageSize?: number | undefined;
                        pageToken?: string | undefined;
                        readMask?: string | undefined;
                        requestSyncToken?: boolean | undefined;
                        sources?:
                            | Array<
                                | "DIRECTORY_SOURCE_TYPE_UNSPECIFIED"
                                | "DIRECTORY_SOURCE_TYPE_DOMAIN_CONTACT"
                                | "DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE"
                            >
                            | undefined;
                        syncToken?: string | undefined;
                    },
                ): Schema.ListDirectoryPeopleResponse;
                searchContacts(
                    args?: {
                        pageSize?: number | undefined;
                        query?: string | undefined;
                        readMask?: string | undefined;
                        sources?:
                            | Array<
                                | "READ_SOURCE_TYPE_UNSPECIFIED"
                                | "READ_SOURCE_TYPE_PROFILE"
                                | "READ_SOURCE_TYPE_CONTACT"
                                | "READ_SOURCE_TYPE_DOMAIN_CONTACT"
                                | "READ_SOURCE_TYPE_OTHER_CONTACT"
                            >
                            | undefined;
                    },
                ): Schema.SearchResponse;
                searchDirectoryPeople(
                    args?: {
                        mergeSources?:
                            | Array<"DIRECTORY_MERGE_SOURCE_TYPE_UNSPECIFIED" | "DIRECTORY_MERGE_SOURCE_TYPE_CONTACT">
                            | undefined;
                        pageSize?: number | undefined;
                        pageToken?: string | undefined;
                        query?: string | undefined;
                        readMask?: string | undefined;
                        sources?:
                            | Array<
                                | "DIRECTORY_SOURCE_TYPE_UNSPECIFIED"
                                | "DIRECTORY_SOURCE_TYPE_DOMAIN_CONTACT"
                                | "DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE"
                            >
                            | undefined;
                    },
                ): Schema.SearchDirectoryPeopleResponse;
                updateContact(
                    $resource: Schema.Person,
                    resourceName: string,
                    args?: {
                        personFields?: string | undefined;
                        sources?:
                            | Array<
                                | "READ_SOURCE_TYPE_UNSPECIFIED"
                                | "READ_SOURCE_TYPE_PROFILE"
                                | "READ_SOURCE_TYPE_CONTACT"
                                | "READ_SOURCE_TYPE_DOMAIN_CONTACT"
                                | "READ_SOURCE_TYPE_OTHER_CONTACT"
                            >
                            | undefined;
                        updatePersonFields?: string | undefined;
                    },
                ): Schema.Person;
                updateContactPhoto(
                    $resource: Schema.UpdateContactPhotoRequest,
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
                ageRange?:
                    | "AGE_RANGE_UNSPECIFIED"
                    | "LESS_THAN_EIGHTEEN"
                    | "EIGHTEEN_TO_TWENTY"
                    | "TWENTY_ONE_OR_OLDER"
                    | undefined;
                metadata?: People.Schema.FieldMetadata | undefined;
            }
            interface BatchCreateContactsRequest {
                contacts?: People.Schema.ContactToCreate[] | undefined;
                readMask?: string | undefined;
                sources?:
                    | Array<
                        | "READ_SOURCE_TYPE_UNSPECIFIED"
                        | "READ_SOURCE_TYPE_PROFILE"
                        | "READ_SOURCE_TYPE_CONTACT"
                        | "READ_SOURCE_TYPE_DOMAIN_CONTACT"
                        | "READ_SOURCE_TYPE_OTHER_CONTACT"
                    >
                    | undefined;
            }
            interface BatchCreateContactsResponse {
                createdPeople?: People.Schema.PersonResponse[] | undefined;
            }
            interface BatchDeleteContactsRequest {
                resourceNames?: Array<string> | undefined;
            }
            interface BatchGetContactGroupsResponse {
                responses?: People.Schema.ContactGroupResponse[] | undefined;
            }
            interface BatchUpdateContactsRequest {
                contacts?: Record<string, People.Schema.Person> | undefined;
                readMask?: string | undefined;
                sources?:
                    | Array<
                        | "READ_SOURCE_TYPE_UNSPECIFIED"
                        | "READ_SOURCE_TYPE_PROFILE"
                        | "READ_SOURCE_TYPE_CONTACT"
                        | "READ_SOURCE_TYPE_DOMAIN_CONTACT"
                        | "READ_SOURCE_TYPE_OTHER_CONTACT"
                    >
                    | undefined;
                updateMask?: string | undefined;
            }
            interface BatchUpdateContactsResponse {
                updateResult?: Record<string, People.Schema.PersonResponse> | undefined;
            }
            interface Biography {
                contentType?: "CONTENT_TYPE_UNSPECIFIED" | "TEXT_PLAIN" | "TEXT_HTML" | undefined;
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
                clientData?: People.Schema.GroupClientData[] | undefined;
                etag?: string | undefined;
                formattedName?: string | undefined;
                groupType?: "GROUP_TYPE_UNSPECIFIED" | "USER_CONTACT_GROUP" | "SYSTEM_CONTACT_GROUP" | undefined;
                memberCount?: number | undefined;
                memberResourceNames?: Array<string> | undefined;
                metadata?: People.Schema.ContactGroupMetadata | undefined;
                name?: string | undefined;
                resourceName?: string | undefined;
            }
            interface ContactGroupMembership {
                contactGroupId?: string | undefined;
                contactGroupResourceName?: string | undefined;
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
                sources?:
                    | Array<
                        | "READ_SOURCE_TYPE_UNSPECIFIED"
                        | "READ_SOURCE_TYPE_PROFILE"
                        | "READ_SOURCE_TYPE_CONTACT"
                        | "READ_SOURCE_TYPE_DOMAIN_CONTACT"
                        | "READ_SOURCE_TYPE_OTHER_CONTACT"
                    >
                    | undefined;
            }
            interface CoverPhoto {
                default?: boolean | undefined;
                metadata?: People.Schema.FieldMetadata | undefined;
                url?: string | undefined;
            }
            interface CreateContactGroupRequest {
                contactGroup?: People.Schema.ContactGroup | undefined;
                readGroupFields?: string | undefined;
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
            interface Empty {
            }
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
                sourcePrimary?: boolean | undefined;
                verified?: boolean | undefined;
            }
            interface FileAs {
                metadata?: People.Schema.FieldMetadata | undefined;
                value?: string | undefined;
            }
            interface Gender {
                addressMeAs?: string | undefined;
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
                type?:
                    | "TYPE_UNSPECIFIED"
                    | "OUTLOOK_BILLING_INFORMATION"
                    | "OUTLOOK_DIRECTORY_SERVER"
                    | "OUTLOOK_KEYWORD"
                    | "OUTLOOK_MILEAGE"
                    | "OUTLOOK_PRIORITY"
                    | "OUTLOOK_SENSITIVITY"
                    | "OUTLOOK_SUBJECT"
                    | "OUTLOOK_USER"
                    | "HOME"
                    | "WORK"
                    | "OTHER"
                    | undefined;
                value?: string | undefined;
            }
            interface ModifyContactGroupMembersRequest {
                resourceNamesToAdd?: Array<string> | undefined;
                resourceNamesToRemove?: Array<string> | undefined;
            }
            interface ModifyContactGroupMembersResponse {
                canNotRemoveLastContactGroupResourceNames?: Array<string> | undefined;
                notFoundResourceNames?: Array<string> | undefined;
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
                unstructuredName?: string | undefined;
            }
            interface Nickname {
                metadata?: People.Schema.FieldMetadata | undefined;
                type?:
                    | "DEFAULT"
                    | "MAIDEN_NAME"
                    | "INITIALS"
                    | "GPLUS"
                    | "OTHER_NAME"
                    | "ALTERNATE_NAME"
                    | "SHORT_NAME"
                    | undefined;
                value?: string | undefined;
            }
            interface Occupation {
                metadata?: People.Schema.FieldMetadata | undefined;
                value?: string | undefined;
            }
            interface Organization {
                costCenter?: string | undefined;
                current?: boolean | undefined;
                department?: string | undefined;
                domain?: string | undefined;
                endDate?: People.Schema.Date | undefined;
                formattedType?: string | undefined;
                fullTimeEquivalentMillipercent?: number | undefined;
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
                ageRange?:
                    | "AGE_RANGE_UNSPECIFIED"
                    | "LESS_THAN_EIGHTEEN"
                    | "EIGHTEEN_TO_TWENTY"
                    | "TWENTY_ONE_OR_OLDER"
                    | undefined;
                ageRanges?: People.Schema.AgeRangeType[] | undefined;
                biographies?: People.Schema.Biography[] | undefined;
                birthdays?: People.Schema.Birthday[] | undefined;
                braggingRights?: People.Schema.BraggingRights[] | undefined;
                calendarUrls?: People.Schema.CalendarUrl[] | undefined;
                clientData?: People.Schema.ClientData[] | undefined;
                coverPhotos?: People.Schema.CoverPhoto[] | undefined;
                emailAddresses?: People.Schema.EmailAddress[] | undefined;
                etag?: string | undefined;
                events?: People.Schema.Event[] | undefined;
                externalIds?: People.Schema.ExternalId[] | undefined;
                fileAses?: People.Schema.FileAs[] | undefined;
                genders?: People.Schema.Gender[] | undefined;
                imClients?: People.Schema.ImClient[] | undefined;
                interests?: People.Schema.Interest[] | undefined;
                locales?: People.Schema.Locale[] | undefined;
                locations?: People.Schema.Location[] | undefined;
                memberships?: People.Schema.Membership[] | undefined;
                metadata?: People.Schema.PersonMetadata | undefined;
                miscKeywords?: People.Schema.MiscKeyword[] | undefined;
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
                linkedPeopleResourceNames?: Array<string> | undefined;
                objectType?: "OBJECT_TYPE_UNSPECIFIED" | "PERSON" | "PAGE" | undefined;
                previousResourceNames?: Array<string> | undefined;
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
                objectType?: "OBJECT_TYPE_UNSPECIFIED" | "PERSON" | "PAGE" | undefined;
                userTypes?: Array<"USER_TYPE_UNKNOWN" | "GOOGLE_USER" | "GPLUS_USER" | "GOOGLE_APPS_USER"> | undefined;
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
                type?:
                    | "SOURCE_TYPE_UNSPECIFIED"
                    | "ACCOUNT"
                    | "PROFILE"
                    | "DOMAIN_PROFILE"
                    | "CONTACT"
                    | "OTHER_CONTACT"
                    | "DOMAIN_CONTACT"
                    | undefined;
                updateTime?: string | undefined;
            }
            interface Status {
                code?: number | undefined;
                details?: Array<Record<string, any>> | undefined;
                message?: string | undefined;
            }
            interface Tagline {
                metadata?: People.Schema.FieldMetadata | undefined;
                value?: string | undefined;
            }
            interface UpdateContactGroupRequest {
                contactGroup?: People.Schema.ContactGroup | undefined;
                readGroupFields?: string | undefined;
                updateGroupFields?: string | undefined;
            }
            interface UpdateContactPhotoRequest {
                personFields?: string | undefined;
                photoBytes?: string | undefined;
                sources?:
                    | Array<
                        | "READ_SOURCE_TYPE_UNSPECIFIED"
                        | "READ_SOURCE_TYPE_PROFILE"
                        | "READ_SOURCE_TYPE_CONTACT"
                        | "READ_SOURCE_TYPE_DOMAIN_CONTACT"
                        | "READ_SOURCE_TYPE_OTHER_CONTACT"
                    >
                    | undefined;
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
        ContactGroups: People.Collection.ContactGroupsCollection;
        OtherContacts: People.Collection.OtherContactsCollection;
        People: People.Collection.PeopleCollection;
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

/**
 * The `People` advanced service must be enabled.
 */
declare var People: GoogleAppsScript.People | undefined;
