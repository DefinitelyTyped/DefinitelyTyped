declare namespace GoogleAppsScript {
    namespace YouTubeAnalytics {
        namespace Collection {
            interface GroupItemsCollection {
                insert(
                    $resource: YouTubeAnalytics.Schema.GroupItem,
                    args?: {
                        onBehalfOfContentOwner?: string | undefined;
                    },
                ): YouTubeAnalytics.Schema.GroupItem;
                list(
                    args?: {
                        groupId?: string | undefined;
                        onBehalfOfContentOwner?: string | undefined;
                    },
                ): YouTubeAnalytics.Schema.ListGroupItemsResponse;
                remove(
                    args?: {
                        id?: string | undefined;
                        onBehalfOfContentOwner?: string | undefined;
                    },
                ): YouTubeAnalytics.Schema.EmptyResponse;
            }
            interface GroupsCollection {
                insert(
                    $resource: YouTubeAnalytics.Schema.Group,
                    args?: {
                        onBehalfOfContentOwner?: string | undefined;
                    },
                ): YouTubeAnalytics.Schema.Group;
                list(
                    args?: {
                        id?: string | undefined;
                        mine?: boolean | undefined;
                        onBehalfOfContentOwner?: string | undefined;
                        pageToken?: string | undefined;
                    },
                ): YouTubeAnalytics.Schema.ListGroupsResponse;
                remove(
                    args?: {
                        id?: string | undefined;
                        onBehalfOfContentOwner?: string | undefined;
                    },
                ): YouTubeAnalytics.Schema.EmptyResponse;
                update(
                    $resource: YouTubeAnalytics.Schema.Group,
                    args?: {
                        onBehalfOfContentOwner?: string | undefined;
                    },
                ): YouTubeAnalytics.Schema.Group;
            }
            interface ReportsCollection {
                query(
                    args?: {
                        currency?: string | undefined;
                        dimensions?: string | undefined;
                        endDate?: string | undefined;
                        filters?: string | undefined;
                        ids?: string | undefined;
                        includeHistoricalChannelData?: boolean | undefined;
                        maxResults?: number | undefined;
                        metrics?: string | undefined;
                        sort?: string | undefined;
                        startDate?: string | undefined;
                        startIndex?: number | undefined;
                    },
                ): YouTubeAnalytics.Schema.QueryResponse;
            }
        }
        namespace Schema {
            interface EmptyResponse {
                errors?: YouTubeAnalytics.Schema.Errors | undefined;
            }
            interface ErrorProto {
                argument?: Array<string> | undefined;
                code?: string | undefined;
                debugInfo?: string | undefined;
                domain?: string | undefined;
                externalErrorMessage?: string | undefined;
                location?: string | undefined;
                locationType?: "PATH" | "OTHER" | "PARAMETER" | undefined;
            }
            interface Errors {
                code?:
                    | "BAD_REQUEST"
                    | "FORBIDDEN"
                    | "NOT_FOUND"
                    | "CONFLICT"
                    | "GONE"
                    | "PRECONDITION_FAILED"
                    | "INTERNAL_ERROR"
                    | "SERVICE_UNAVAILABLE"
                    | undefined;
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
                rows?: Array<Array<any>> | undefined;
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
