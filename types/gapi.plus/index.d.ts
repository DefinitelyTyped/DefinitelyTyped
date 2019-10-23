// Type definitions for Google+ Platform API 1.0
// Project: https://developers.google.com/+/web/people/
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="gapi" />

// See Google+ REST API Reference https://developers.google.com/+/web/api/rest/latest/
declare namespace gapi.client.plus {
  export namespace people {

    interface GetParameters {
      userId: string;
    }
    function get(parameters: GetParameters): HttpRequest<Person>;

    interface SearchParameters {
      query: string;
      language?: string;
      maxResults?: number;
      pageToken?: string;
    }
    function search(parameters: SearchParameters): HttpRequest<PeopleFeed>;

    // Search response
    interface PeopleFeed {
      kind: 'plus#peopleFeed';
      etag: string;
      selfLink: string;
      title: string;
      nextPageToken: string;
      totalItems: number;
      items: Person[];
    }

    interface Person {
      kind: 'plus#person';
      etag: string;
      nickname: string;
      occupation: string;
      skills: string;
      birthday: string;
      gender: string;
      emails: {
        value: string;
        type: string;
      }[];
      urls: {
        value: string;
        type: string;
        label: string;
      }[];
      objectType: string;
      id: string;
      displayName: string;
      name: {
        formatted: string;
        familyName: string;
        givenName: string;
        middleName: string;
        honorificPrefix: string;
        honorificSuffix: string;
      };
      tagline: string;
      braggingRights: string;
      aboutMe: string;
      relationshipStatus: string;
      url: string;
      image: {
        url: string;
      };
      organizations: {
        name: string;
        department: string;
        title: string;
        type: string;
        startDate: string;
        endDate: string;
        location: string;
        description: string;
        primary: boolean;
      }[];
      placesLived: {
        value: string;
        primary: boolean;
      }[];
      isPlusUser: boolean;
      language: string;
      ageRange: {
        min: number;
        max: number;
      };
      plusOneCount: number;
      circledByCount: number;
      verified: boolean;
      cover: {
        layout: string;
        coverPhoto: {
          url: string;
          height: number;
          width: number;
        };
        coverInfo: {
          topImageOffset: number;
          leftImageOffset: number;
        }
      };
      domain: string;
    }
  }
}
