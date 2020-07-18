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

      // Query parameters
      personFields: string;
    }

    function get(parameters: GetParameters): HttpRequest<Person>;

    interface GetBatchGetParameters {
      // Query parameters
      resourcesName?: string;
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

    namespace connections {
      function list(parameters: ListParameters): HttpRequest<Response>;

      type SortOrder = 'LAST_MODIFIED_ASCENDING' | 'FIRST_NAME_ASCENDING' | 'LAST_NAME_ASCENDING';

      interface ListParameters {
        resourceName: string;

        // Query parameters
        pageToken?: string;
        pageSize?: number;
        sortOrder?: SortOrder;
        syncToken?: string;
        personFields: string;
      }

      interface Response {
        connections: Person[];
        nextPageToken: string;
        nextSyncToken: string;
      }
    }
  }

  type SourceType = 'SOURCE_TYPE_UNSPECIFIED' | 'ACCOUNT' | 'PROFILE' | 'DOMAIN_PROFILE' | 'CONTACT';

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
  }

  interface Photo {
    metadata: FieldMetadata;
    url: string;
  }

  interface Gender {
  }

  interface AgeRange {
  }

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

  interface Event {
  }

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

  interface ImClient {
  }

  interface Tagline {
  }

  interface Biography {
  }

  interface Url {
  }

  interface Organization {
  }

  interface Occupation {
  }

  interface Interest {
  }

  interface Skill {
  }

  interface BraggingRights {
  }

  interface Relation {
  }

  interface RelationshipInterest {
  }

  interface RelationshipStatus {
  }

  interface Membership {
  }

  interface Person {
    resourceName: string;
    etag: string;
    metadata: PersonMetadata;
    locales: Locale[];
    names: Name[];
    nicknames?: Nickname[];
    coverPhotos: CoverPhoto[];
    photos?: Photo[];
    genders?: Gender[];
    ageRange?: AgeRange;
    birthdays?: Birthday[];
    events?: Event[];
    addresses?: Address[];
    residences?: Residence[];
    emailAddresses?: EmailAddress[];
    phoneNumbers?: PhoneNumber[];
    imClients?: ImClient[];
    taglines?: Tagline[];
    biographies?: Biography[];
    urls?: Url[];
    organizations?: Organization[];
    occupations?: Occupation[];
    interests?: Interest[];
    skills?: Skill[];
    BraggingRights?: BraggingRights[];
    relations?: Relation[];
    relationshipInterests?: RelationshipInterest[];
    relationshipStatuses?: RelationshipStatus[];
    memberships?: Membership[];
  }
}
