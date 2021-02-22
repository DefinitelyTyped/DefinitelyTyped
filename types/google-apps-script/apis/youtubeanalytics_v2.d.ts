// Type definitions for Google Apps Script 2021-02-11
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/mtgto/dts-google-apps-script-advanced
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
    namespace YouTubeAnalytics {
        namespace Collection {
            interface GroupItemsCollection {
                // Creates a group item.
                insert(resource: Schema.GroupItem): Schema.GroupItem;
                // Creates a group item.
                insert(resource: Schema.GroupItem, optionalArgs: object): Schema.GroupItem;
                // Returns a collection of group items that match the API request parameters.
                list(): Schema.ListGroupItemsResponse;
                // Returns a collection of group items that match the API request parameters.
                list(optionalArgs: object): Schema.ListGroupItemsResponse;
                // Removes an item from a group.
                remove(): Schema.EmptyResponse;
                // Removes an item from a group.
                remove(optionalArgs: object): Schema.EmptyResponse;
            }
            interface GroupsCollection {
                // Creates a group.
                insert(resource: Schema.Group): Schema.Group;
                // Creates a group.
                insert(resource: Schema.Group, optionalArgs: object): Schema.Group;
                // Returns a collection of groups that match the API request parameters. For example, you can retrieve all groups that the
                // authenticated user owns, or you can retrieve one or more groups by their unique IDs.
                list(): Schema.ListGroupsResponse;
                // Returns a collection of groups that match the API request parameters. For example, you can retrieve all groups that the
                // authenticated user owns, or you can retrieve one or more groups by their unique IDs.
                list(optionalArgs: object): Schema.ListGroupsResponse;
                // Deletes a group.
                remove(): Schema.EmptyResponse;
                // Deletes a group.
                remove(optionalArgs: object): Schema.EmptyResponse;
                // Modifies a group. For example, you could change a group's title.
                update(resource: Schema.Group): Schema.Group;
                // Modifies a group. For example, you could change a group's title.
                update(resource: Schema.Group, optionalArgs: object): Schema.Group;
            }
            interface ReportsCollection {
                // Retrieve your YouTube Analytics reports.
                query(): Schema.QueryResponse;
                // Retrieve your YouTube Analytics reports.
                query(optionalArgs: object): Schema.QueryResponse;
            }
        }
        namespace Schema {
            // Empty response.
            interface EmptyResponse {
                // Apiary error details
                errors?: Schema.Errors;
            }
            // Describes one specific error.
            interface ErrorProto {
                // Error arguments, to be used when building user-friendly error messages given the error domain and code. Different error
                // codes require different arguments.
                argument?: string[];
                // Error code in the error domain. This should correspond to a value of the enum type whose name is in domain. See the core
                // error domain in error_domain.proto.
                code?: string;
                // Debugging information, which should not be shared externally.
                debugInfo?: string;
                // Error domain. RoSy services can define their own domain and error codes. This should normally be the name of an enum
                // type, such as: gdata.CoreErrorDomain
                domain?: string;
                // A short explanation for the error, which can be shared outside Google. Please set domain, code and arguments whenever
                // possible instead of this error message so that external APIs can build safe error messages themselves. External messages
                // built in a RoSy interface will most likely refer to information and concepts that are not available externally and
                // should not be exposed. It is safer if external APIs can understand the errors and decide what the error message should
                // look like.
                externalErrorMessage?: string;
                // Location of the error, as specified by the location type. If location_type is PATH, this should be a path to a field
                // that's relative to the request, using FieldPath notation (net/proto2/util/public/field_path.h). Examples:
                // authenticated_user.gaia_id resource.address[2].country
                location?: string;
                locationType?: string;
            }
            // Request Error information. The presence of an error field signals that the operation has failed.
            interface Errors {
                // Global error code. Deprecated and ignored. Set custom error codes in ErrorProto.domain and ErrorProto.code instead.
                code?: string;
                // Specific error description and codes
                error?: Schema.ErrorProto[];
                // Request identifier generated by the service, which can be used to identify the error in the logs
                requestId?: string;
            }
            // A group.
            interface Group {
                // The `contentDetails` object contains additional information about the group, such as the number and type of items that
                // it contains.
                contentDetails?: Schema.GroupContentDetails;
                // Apiary error details
                errors?: Schema.Errors;
                // The Etag of this resource.
                etag?: string;
                // The ID that YouTube uses to uniquely identify the group.
                id?: string;
                // Identifies the API resource's type. The value will be `youtube#group`.
                kind?: string;
                // The `snippet` object contains basic information about the group, including its creation date and name.
                snippet?: Schema.GroupSnippet;
            }
            // A group's content details.
            interface GroupContentDetails {
                // The number of items in the group.
                itemCount?: string;
                // The type of resources that the group contains. Valid values for this property are: * `youtube#channel` *
                // `youtube#playlist` * `youtube#video` * `youtubePartner#asset`
                itemType?: string;
            }
            // A group item.
            interface GroupItem {
                // Apiary error details
                errors?: Schema.Errors;
                // The Etag of this resource.
                etag?: string;
                // The ID that YouTube uses to uniquely identify the group that contains the item.
                groupId?: string;
                // The ID that YouTube uses to uniquely identify the `channel`, `video`, `playlist`, or `asset` resource that is included
                // in the group. Note that this ID refers specifically to the inclusion of that resource in a particular group and is
                // different than the channel ID, video ID, playlist ID, or asset ID that uniquely identifies the resource itself. The
                // `resource.id` property's value specifies the unique channel, video, playlist, or asset ID.
                id?: string;
                // Identifies the API resource's type. The value will be `youtube#groupItem`.
                kind?: string;
                // The `resource` object contains information that identifies the item being added to the group.
                resource?: Schema.GroupItemResource;
            }
            interface GroupItemResource {
                // The channel, video, playlist, or asset ID that YouTube uses to uniquely identify the item that is being added to the
                // group.
                id?: string;
                // Identifies the type of resource being added to the group. Valid values for this property are: * `youtube#channel` *
                // `youtube#playlist` * `youtube#video` * `youtubePartner#asset`
                kind?: string;
            }
            // A group snippet.
            interface GroupSnippet {
                // The date and time that the group was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
                publishedAt?: string;
                // The group name. The value must be a non-empty string.
                title?: string;
            }
            // Response message for GroupsService.ListGroupItems.
            interface ListGroupItemsResponse {
                // Apiary error details
                errors?: Schema.Errors;
                // The Etag of this resource.
                etag?: string;
                // A list of groups that match the API request parameters. Each item in the list represents a `groupItem` resource.
                items?: Schema.GroupItem[];
                // Identifies the API resource's type. The value will be `youtube#groupItemListResponse`.
                kind?: string;
            }
            // Response message for GroupsService.ListGroups.
            interface ListGroupsResponse {
                // Apiary error details
                errors?: Schema.Errors;
                // The Etag of this resource.
                etag?: string;
                // A list of groups that match the API request parameters. Each item in the list represents a `group` resource.
                items?: Schema.Group[];
                // Identifies the API resource's type. The value will be `youtube#groupListResponse`.
                kind?: string;
                // The token that can be used as the value of the `pageToken` parameter to retrieve the next page in the result set.
                nextPageToken?: string;
            }
            // Response message for TargetedQueriesService.Query.
            interface QueryResponse {
                // This value specifies information about the data returned in the `rows` fields. Each item in the `columnHeaders` list
                // identifies a field returned in the `rows` value, which contains a list of comma-delimited data. The `columnHeaders` list
                // will begin with the dimensions specified in the API request, which will be followed by the metrics specified in the API
                // request. The order of both dimensions and metrics will match the ordering in the API request. For example, if the API
                // request contains the parameters `dimensions=ageGroup,gender&metrics=viewerPercentage`, the API response will return
                // columns in this order: `ageGroup`, `gender`, `viewerPercentage`.
                columnHeaders?: Schema.ResultTableColumnHeader[];
                // When set, indicates that the operation failed.
                errors?: Schema.Errors;
                // This value specifies the type of data included in the API response. For the query method, the kind property value will
                // be `youtubeAnalytics#resultTable`.
                kind?: string;
                // The list contains all rows of the result table. Each item in the list is an array that contains comma-delimited data
                // corresponding to a single row of data. The order of the comma-delimited data fields will match the order of the columns
                // listed in the `columnHeaders` field. If no data is available for the given query, the `rows` element will be omitted
                // from the response. The response for a query with the `day` dimension will not contain rows for the most recent days.
                rows?: object[][];
            }
            // The description of a column of the result table.
            interface ResultTableColumnHeader {
                // The type of the column (`DIMENSION` or `METRIC`).
                columnType?: string;
                // The type of the data in the column (`STRING`, `INTEGER`, `FLOAT`, etc.).
                dataType?: string;
                // The name of the dimension or metric.
                name?: string;
            }
        }
    }
    // Retrieves your YouTube Analytics data.
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
declare const YouTubeAnalytics: GoogleAppsScript.YouTubeAnalytics;
