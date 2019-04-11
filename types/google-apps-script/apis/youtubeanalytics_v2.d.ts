// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions by: grant <https://github.com/grant/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace YoutubeAnalytics_v2 {
    namespace Collection {
      export interface GroupItemsCollection {
        // Creates a group item.
        insert(resource: Schema.GroupItem): YoutubeAnalytics_v2.Schema.GroupItem;
        // Creates a group item.
        insert(resource: Schema.GroupItem, optionalArgs: object): YoutubeAnalytics_v2.Schema.GroupItem;
        // Returns a collection of group items that match the API request parameters.
        list(): YoutubeAnalytics_v2.Schema.ListGroupItemsResponse;
        // Returns a collection of group items that match the API request parameters.
        list(optionalArgs: object): YoutubeAnalytics_v2.Schema.ListGroupItemsResponse;
        // Removes an item from a group.
        remove(): YoutubeAnalytics_v2.Schema.EmptyResponse;
        // Removes an item from a group.
        remove(optionalArgs: object): YoutubeAnalytics_v2.Schema.EmptyResponse;
      }
      export interface GroupsCollection {
        // Creates a group.
        insert(resource: Schema.Group): YoutubeAnalytics_v2.Schema.Group;
        // Creates a group.
        insert(resource: Schema.Group, optionalArgs: object): YoutubeAnalytics_v2.Schema.Group;
        // Returns a collection of groups that match the API request parameters. For
        // example, you can retrieve all groups that the authenticated user owns,
        // or you can retrieve one or more groups by their unique IDs.
        list(): YoutubeAnalytics_v2.Schema.ListGroupsResponse;
        // Returns a collection of groups that match the API request parameters. For
        // example, you can retrieve all groups that the authenticated user owns,
        // or you can retrieve one or more groups by their unique IDs.
        list(optionalArgs: object): YoutubeAnalytics_v2.Schema.ListGroupsResponse;
        // Deletes a group.
        remove(): YoutubeAnalytics_v2.Schema.EmptyResponse;
        // Deletes a group.
        remove(optionalArgs: object): YoutubeAnalytics_v2.Schema.EmptyResponse;
        // Modifies a group. For example, you could change a group's title.
        update(resource: Schema.Group): YoutubeAnalytics_v2.Schema.Group;
        // Modifies a group. For example, you could change a group's title.
        update(resource: Schema.Group, optionalArgs: object): YoutubeAnalytics_v2.Schema.Group;
      }
      export interface ReportsCollection {
        // Retrieve your YouTube Analytics reports.
        query(): YoutubeAnalytics_v2.Schema.QueryResponse;
        // Retrieve your YouTube Analytics reports.
        query(optionalArgs: object): YoutubeAnalytics_v2.Schema.QueryResponse;
      }
    }
    namespace Schema {
      export interface EmptyResponse {
        errors?: YoutubeAnalytics_v2.Schema.Errors;
      }
      export interface ErrorProto {
        argument?: string[];
        code?: string;
        debugInfo?: string;
        domain?: string;
        externalErrorMessage?: string;
        location?: string;
        locationType?: string;
      }
      export interface Errors {
        code?: string;
        error?: YoutubeAnalytics_v2.Schema.ErrorProto[];
        requestId?: string;
      }
      export interface Group {
        contentDetails?: YoutubeAnalytics_v2.Schema.GroupContentDetails;
        errors?: YoutubeAnalytics_v2.Schema.Errors;
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: YoutubeAnalytics_v2.Schema.GroupSnippet;
      }
      export interface GroupContentDetails {
        itemCount?: string;
        itemType?: string;
      }
      export interface GroupItem {
        errors?: YoutubeAnalytics_v2.Schema.Errors;
        etag?: string;
        groupId?: string;
        id?: string;
        kind?: string;
        resource?: YoutubeAnalytics_v2.Schema.GroupItemResource;
      }
      export interface GroupItemResource {
        id?: string;
        kind?: string;
      }
      export interface GroupSnippet {
        publishedAt?: string;
        title?: string;
      }
      export interface ListGroupItemsResponse {
        errors?: YoutubeAnalytics_v2.Schema.Errors;
        etag?: string;
        items?: YoutubeAnalytics_v2.Schema.GroupItem[];
        kind?: string;
      }
      export interface ListGroupsResponse {
        errors?: YoutubeAnalytics_v2.Schema.Errors;
        etag?: string;
        items?: YoutubeAnalytics_v2.Schema.Group[];
        kind?: string;
        nextPageToken?: string;
      }
      export interface QueryResponse {
        columnHeaders?: YoutubeAnalytics_v2.Schema.ResultTableColumnHeader[];
        errors?: YoutubeAnalytics_v2.Schema.Errors;
        kind?: string;
        rows?: Object[][];
      }
      export interface ResultTableColumnHeader {
        columnType?: string;
        dataType?: string;
        name?: string;
      }
    }
  }
  export interface YoutubeAnalytics_v2 {
    GroupItems?: YoutubeAnalytics_v2.Collection.GroupItemsCollection;
    Groups?: YoutubeAnalytics_v2.Collection.GroupsCollection;
    Reports?: YoutubeAnalytics_v2.Collection.ReportsCollection;
    // Create a new instance of ErrorProto
    newErrorProto(): YoutubeAnalytics_v2.Schema.ErrorProto;
    // Create a new instance of Errors
    newErrors(): YoutubeAnalytics_v2.Schema.Errors;
    // Create a new instance of Group
    newGroup(): YoutubeAnalytics_v2.Schema.Group;
    // Create a new instance of GroupContentDetails
    newGroupContentDetails(): YoutubeAnalytics_v2.Schema.GroupContentDetails;
    // Create a new instance of GroupItem
    newGroupItem(): YoutubeAnalytics_v2.Schema.GroupItem;
    // Create a new instance of GroupItemResource
    newGroupItemResource(): YoutubeAnalytics_v2.Schema.GroupItemResource;
    // Create a new instance of GroupSnippet
    newGroupSnippet(): YoutubeAnalytics_v2.Schema.GroupSnippet;
  }
}

declare var YoutubeAnalytics_v2: GoogleAppsScript.YoutubeAnalytics_v2;