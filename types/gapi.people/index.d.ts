// Type definitions for Google People API 1.0
// Project: https://developers.google.com/people/
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
//                 Joshua O'Brien <https://github.com/joshuaobrien>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="gapi" />

declare namespace gapi.client.people {
    export namespace people {
        interface GetParameters {
            resourceName: string;
            personFields: string;
        }

        function get(parameters: GetParameters): HttpRequest<Person>;

        interface GetBatchGetParameters {
            resourcesName?: string | undefined;
            personFields: string;
        }

        function getBatchGet(parameters: GetBatchGetParameters): HttpRequest<BatchGetResponse>;

        interface BatchGetResponse {
            responses: PersonResponse[];
        }

        interface PersonResponse {
            httpStatusCode: number;
            person: Person;
            requestedResourceName: string;
        }

        function searchContacts(parameters: SearchContactsParameters): HttpRequest<SearchContactsResponse>;

        namespace connections {
            function list(parameters: ListParameters): HttpRequest<Response>;

            type SortOrder = 'LAST_MODIFIED_ASCENDING' | 'FIRST_NAME_ASCENDING' | 'LAST_NAME_ASCENDING';

            interface ListParameters {
                resourceName: string;
                pageToken?: string | undefined;
                pageSize?: number | undefined;
                sortOrder?: SortOrder | undefined;
                syncToken?: string | undefined;
                personFields: string;
            }

            interface Response {
                connections?: Person[] | undefined;
                nextPageToken?: string | undefined;
                nextSyncToken?: string | undefined;
            }
        }
    }

    export namespace otherContacts {
        function list(parameters: ListParameters): HttpRequest<ListResponse>;

        interface ListParameters {
            pageToken?: string | undefined;
            pageSize?: number | undefined;
            requestSyncToken?: boolean | undefined;
            syncToken?: string | undefined;
            readMask: string;
        }

        interface ListResponse {
            otherContacts?: Person[] | undefined;
            nextPageToken?: string | undefined;
            nextSyncToken?: string | undefined;
        }

        function search(parameters: SearchContactsParameters): HttpRequest<SearchContactsResponse>;
    }

    interface SearchContactsParameters {
        query: string;
        pageSize?: number | undefined;
        readMask: string;
    }

    interface SearchContactsResponse {
        results?: SearchContactsResult[] | undefined;
    }

    interface SearchContactsResult {
        person: Person;
    }

    type SourceType =
        | 'SOURCE_TYPE_UNSPECIFIED'
        | 'ACCOUNT'
        | 'PROFILE'
        | 'DOMAIN_PROFILE'
        | 'CONTACT'
        | 'OTHER_CONTACT'
        | 'DOMAIN_CONTACT';

    interface Source {
        type: SourceType;
        id: string;
        etag: string;
        resourceName: string;
    }

    type ObjectType = 'OBJECT_TYPE_UNSPECIFIED' | 'PERSON' | 'PAGE';

    interface PersonMetadata {
        sources: Source[];
        previousResourceNames: string[];
        linkedPeopleResourceNames: string[];
        deleted: boolean;
        objectType: ObjectType;
    }

    interface FieldMetadata {
        primary: boolean;
        verified: boolean;
        source: Source;
    }

    interface Locale {
        metadata: FieldMetadata;
        value: string;
    }

    interface Name {
        metadata: FieldMetadata;
        displayName: string;
        displayNameLastFirst: string;
        familyName: string;
        givenName: string;
        middleName: string;
        honorificPrefix: string;
        honorificSuffix: string;
        phoneticFullName: string;
        phoneticFamilyName: string;
        phoneticGivenName: string;
        phoneticMiddleName: string;
        phoneticHonorificPrefix: string;
        phoneticHonorificSuffix: string;
    }

    type NicknameType = 'DEFAULT' | 'MAIDEN_NAME' | 'INITIALS' | 'GPLUS' | 'OTHER_NAME';

    interface Nickname {
        metadata: FieldMetadata;
        value: string;
        type: NicknameType;
    }

    interface CoverPhoto {
        metadata: FieldMetadata;
        url: string;
        default: boolean;
    }

    interface Photo {
        metadata: FieldMetadata;
        url: string;
        default: boolean;
    }

    interface Gender {}

    interface AgeRange {}

    interface Birthday {
        metadata: FieldMetadata;
        date: Date;
        text: string;
    }

    interface Date {
        day: number;
        month: number;
        year: number;
    }

    interface Event {}

    interface Address {
        metadata: FieldMetadata;
        formattedValue: string;
        type: string;
        formattedType: string;
        poBox: string;
        streetAddress: string;
        extendedAddress: string;
        city: string;
        region: string;
        postalCode: string;
        country: string;
        countryCode: string;
    }

    interface Residence {
        metadata: FieldMetadata;
        value: string;
        current: boolean;
    }

    interface EmailAddress {
        metadata: FieldMetadata;
        value: string;
        type: string;
        formattedType: string;
        displayName: string;
    }

    interface PhoneNumber {
        metadata: FieldMetadata;
        value: string;
        canonicalForm: string;
        type: string;
        formattedType: string;
    }

    interface ImClient {}

    interface Tagline {}

    interface Biography {}

    interface Url {}

    interface Organization {}

    interface Occupation {}

    interface Interest {}

    interface Skill {}

    interface BraggingRights {}

    interface Relation {}

    interface RelationshipInterest {}

    interface RelationshipStatus {}

    interface Membership {}

    interface Person {
        resourceName: string;
        etag: string;
        metadata: PersonMetadata;
        locales: Locale[];
        names: Name[];
        nicknames?: Nickname[] | undefined;
        coverPhotos: CoverPhoto[];
        photos?: Photo[] | undefined;
        genders?: Gender[] | undefined;
        ageRange?: AgeRange | undefined;
        birthdays?: Birthday[] | undefined;
        events?: Event[] | undefined;
        addresses?: Address[] | undefined;
        residences?: Residence[] | undefined;
        emailAddresses?: EmailAddress[] | undefined;
        phoneNumbers?: PhoneNumber[] | undefined;
        imClients?: ImClient[] | undefined;
        taglines?: Tagline[] | undefined;
        biographies?: Biography[] | undefined;
        urls?: Url[] | undefined;
        organizations?: Organization[] | undefined;
        occupations?: Occupation[] | undefined;
        interests?: Interest[] | undefined;
        skills?: Skill[] | undefined;
        BraggingRights?: BraggingRights[] | undefined;
        relations?: Relation[] | undefined;
        relationshipInterests?: RelationshipInterest[] | undefined;
        relationshipStatuses?: RelationshipStatus[] | undefined;
        memberships?: Membership[] | undefined;
    }
}
