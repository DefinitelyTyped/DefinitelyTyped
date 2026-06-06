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
                errors?: YouTubeAnalytics.Schema.Errors | undefined;
            }
            interface ErrorProto {
                argument?: string[] | undefined;
                code?: string | undefined;
                debugInfo?: string | undefined;
                domain?: string | undefined;
                externalErrorMessage?: string | undefined;
                location?: string | undefined;
                locationType?: string | undefined;
            }
            interface Errors {
                code?: string | undefined;
                error?: YouTubeAnalytics.Schema.ErrorProto[] | undefined;
                requestId?: string | undefined;
            }
            interface Group {
                contentDetails?: YouTubeAnalytics.Schema.GroupContentDetails | undefined;
                errors?: YouTubeAnalytics.Schema.Errors | undefined;
                etag?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                snippet?: YouTubeAnalytics.Schema.GroupSnippet | undefined;
            }
            interface GroupContentDetails {
                itemCount?: string | undefined;
                itemType?: string | undefined;
            }
            interface GroupItem {
                errors?: YouTubeAnalytics.Schema.Errors | undefined;
                etag?: string | undefined;
                groupId?: string | undefined;
                id?: string | undefined;
                kind?: string | undefined;
                resource?: YouTubeAnalytics.Schema.GroupItemResource | undefined;
            }
            interface GroupItemResource {
                id?: string | undefined;
                kind?: string | undefined;
            }
            interface GroupSnippet {
                publishedAt?: string | undefined;
                title?: string | undefined;
            }
            interface ListGroupItemsResponse {
                errors?: YouTubeAnalytics.Schema.Errors | undefined;
                etag?: string | undefined;
                items?: YouTubeAnalytics.Schema.GroupItem[] | undefined;
                kind?: string | undefined;
            }
            interface ListGroupsResponse {
                errors?: YouTubeAnalytics.Schema.Errors | undefined;
                etag?: string | undefined;
                items?: YouTubeAnalytics.Schema.Group[] | undefined;
                kind?: string | undefined;
                nextPageToken?: string | undefined;
            }
            interface QueryResponse {
                columnHeaders?: YouTubeAnalytics.Schema.ResultTableColumnHeader[] | undefined;
                errors?: YouTubeAnalytics.Schema.Errors | undefined;
                kind?: string | undefined;
                rows?: any[][] | undefined;
            }
            interface ResultTableColumnHeader {
                columnType?: string | undefined;
                dataType?: string | undefined;
                name?: string | undefined;
            }
        }
    }
    interface YouTubeAnalytics {
        GroupItems: YouTubeAnalytics.Collection.GroupItemsCollection;
        Groups: YouTubeAnalytics.Collection.GroupsCollection;
        Reports: YouTubeAnalytics.Collection.ReportsCollection;
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

/**
 * The `YouTubeAnalytics` advanced service must be enabled.
 */
declare var YouTubeAnalytics: GoogleAppsScript.YouTubeAnalytics | undefined;
