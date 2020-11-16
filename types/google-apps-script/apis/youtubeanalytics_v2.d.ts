// Type definitions for Google Apps Script 2019-03-25
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/grant/google-apps-script-dts
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
  namespace YouTubeAnalytics {
    namespace Collection {
      interface GroupItemsCollection {
        // Creates a group item.
        insert(resource: Schema.GroupItem): YouTubeAnalytics.Schema.GroupItem;
        // Creates a group item.
        insert(resource: Schema.GroupItem, optionalArgs: object): YouTubeAnalytics.Schema.GroupItem;
        // Returns a collection of group items that match the API request parameters.
        list(): YouTubeAnalytics.Schema.ListGroupItemsResponse;
        // Returns a collection of group items that match the API request parameters.
        list(optionalArgs: object): YouTubeAnalytics.Schema.ListGroupItemsResponse;
        // Removes an item from a group.
        remove(): YouTubeAnalytics.Schema.EmptyResponse;
        // Removes an item from a group.
        remove(optionalArgs: object): YouTubeAnalytics.Schema.EmptyResponse;
      }
      interface GroupsCollection {
        // Creates a group.
        insert(resource: Schema.Group): YouTubeAnalytics.Schema.Group;
        // Creates a group.
        insert(resource: Schema.Group, optionalArgs: object): YouTubeAnalytics.Schema.Group;
        // Returns a collection of groups that match the API request parameters. For
        // example, you can retrieve all groups that the authenticated user owns,
        // or you can retrieve one or more groups by their unique IDs.
        list(): YouTubeAnalytics.Schema.ListGroupsResponse;
        // Returns a collection of groups that match the API request parameters. For
        // example, you can retrieve all groups that the authenticated user owns,
        // or you can retrieve one or more groups by their unique IDs.
        list(optionalArgs: object): YouTubeAnalytics.Schema.ListGroupsResponse;
        // Deletes a group.
        remove(): YouTubeAnalytics.Schema.EmptyResponse;
        // Deletes a group.
        remove(optionalArgs: object): YouTubeAnalytics.Schema.EmptyResponse;
        // Modifies a group. For example, you could change a group's title.
        update(resource: Schema.Group): YouTubeAnalytics.Schema.Group;
        // Modifies a group. For example, you could change a group's title.
        update(resource: Schema.Group, optionalArgs: object): YouTubeAnalytics.Schema.Group;
      }
      interface ReportsCollection {
        // Retrieve your YouTube Analytics reports.
        query(): YouTubeAnalytics.Schema.QueryResponse;
        // Retrieve your YouTube Analytics reports.
        query(optionalArgs: object): YouTubeAnalytics.Schema.QueryResponse;
      }
    }
    namespace Schema {
      interface EmptyResponse {
        errors?: YouTubeAnalytics.Schema.Errors;
      }
      interface ErrorProto {
        argument?: string[];
        code?: string;
        debugInfo?: string;
        domain?: string;
        externalErrorMessage?: string;
        location?: string;
        locationType?: string;
      }
      interface Errors {
        code?: string;
        error?: YouTubeAnalytics.Schema.ErrorProto[];
        requestId?: string;
      }
      interface Group {
        contentDetails?: YouTubeAnalytics.Schema.GroupContentDetails;
        errors?: YouTubeAnalytics.Schema.Errors;
        etag?: string;
        id?: string;
        kind?: string;
        snippet?: YouTubeAnalytics.Schema.GroupSnippet;
      }
      interface GroupContentDetails {
        itemCount?: string;
        itemType?: string;
      }
      interface GroupItem {
        errors?: YouTubeAnalytics.Schema.Errors;
        etag?: string;
        groupId?: string;
        id?: string;
        kind?: string;
        resource?: YouTubeAnalytics.Schema.GroupItemResource;
      }
      interface GroupItemResource {
        id?: string;
        kind?: string;
      }
      interface GroupSnippet {
        publishedAt?: string;
        title?: string;
      }
      interface ListGroupItemsResponse {
        errors?: YouTubeAnalytics.Schema.Errors;
        etag?: string;
        items?: YouTubeAnalytics.Schema.GroupItem[];
        kind?: string;
      }
      interface ListGroupsResponse {
        errors?: YouTubeAnalytics.Schema.Errors;
        etag?: string;
        items?: YouTubeAnalytics.Schema.Group[];
        kind?: string;
        nextPageToken?: string;
      }
      interface QueryResponse {
        columnHeaders?: YouTubeAnalytics.Schema.ResultTableColumnHeader[];
        errors?: YouTubeAnalytics.Schema.Errors;
        kind?: string;
        rows?: any[][];
      }
      interface ResultTableColumnHeader {
        columnType?: string;
        dataType?: string;
        name?: string;
      }
    }
  }
  interface YouTubeAnalytics {
    GroupItems?: YouTubeAnalytics.Collection.GroupItemsCollection;
    Groups?: YouTubeAnalytics.Collection.GroupsCollection;
    Reports?: YouTubeAnalytics.Collection.ReportsCollection;
    // Create a new instance of ErrorProto
    newErrorProto(): YouTubeAnalytics.Schema.ErrorProto;
    // Create a new instance of Errors
    newErrors(): YouTubeAnalytics.Schema.Errors;
    // Create a new instance of Group
    newGroup(): YouTubeAnalytics.Schema.Group;
    // Create a new instance of GroupContentDetails
    newGroupContentDetails(): YouTubeAnalytics.Schema.GroupContentDetails;
    // Create a new instance of GroupItem
    newGroupItem(): YouTubeAnalytics.Schema.GroupItem;
    // Create a new instance of GroupItemResource
    newGroupItemResource(): YouTubeAnalytics.Schema.GroupItemResource;
    // Create a new instance of GroupSnippet
    newGroupSnippet(): YouTubeAnalytics.Schema.GroupSnippet;
  }
}

declare var YouTubeAnalytics: GoogleAppsScript.YouTubeAnalytics;
