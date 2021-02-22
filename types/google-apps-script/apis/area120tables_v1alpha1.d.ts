// Type definitions for Google Apps Script 2021-02-11
// Project: https://developers.google.com/apps-script/
// Generator: https://github.com/mtgto/dts-google-apps-script-advanced
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace GoogleAppsScript {
    namespace Area120Tables {
        namespace Collection {
            namespace Tables {
                interface RowsCollection {
                    // Creates multiple rows.
                    batchCreate(resource: Schema.BatchCreateRowsRequest, parent: string): Schema.BatchCreateRowsResponse;
                    // Deletes multiple rows.
                    batchDelete(resource: Schema.BatchDeleteRowsRequest, parent: string): any;
                    // Updates multiple rows.
                    batchUpdate(resource: Schema.BatchUpdateRowsRequest, parent: string): Schema.BatchUpdateRowsResponse;
                    // Creates a row.
                    create(resource: Schema.Row, parent: string): Schema.Row;
                    // Creates a row.
                    create(resource: Schema.Row, parent: string, optionalArgs: object): Schema.Row;
                    // Gets a row. Returns NOT_FOUND if the row does not exist in the table.
                    get(name: string): Schema.Row;
                    // Gets a row. Returns NOT_FOUND if the row does not exist in the table.
                    get(name: string, optionalArgs: object): Schema.Row;
                    // Lists rows in a table. Returns NOT_FOUND if the table does not exist.
                    list(parent: string): Schema.ListRowsResponse;
                    // Lists rows in a table. Returns NOT_FOUND if the table does not exist.
                    list(parent: string, optionalArgs: object): Schema.ListRowsResponse;
                    // Updates a row.
                    patch(resource: Schema.Row, name: string): Schema.Row;
                    // Updates a row.
                    patch(resource: Schema.Row, name: string, optionalArgs: object): Schema.Row;
                    // Deletes a row.
                    remove(name: string): any;
                }
            }
            interface TablesCollection {
                Rows?: Collection.Tables.RowsCollection;
                // Gets a table. Returns NOT_FOUND if the table does not exist.
                get(name: string): Schema.Table;
                // Lists tables for the user.
                list(): Schema.ListTablesResponse;
                // Lists tables for the user.
                list(optionalArgs: object): Schema.ListTablesResponse;
            }
            interface WorkspacesCollection {
                // Gets a workspace. Returns NOT_FOUND if the workspace does not exist.
                get(name: string): Schema.Workspace;
                // Lists workspaces for the user.
                list(): Schema.ListWorkspacesResponse;
                // Lists workspaces for the user.
                list(optionalArgs: object): Schema.ListWorkspacesResponse;
            }
        }
        namespace Schema {
            // Request message for TablesService.BatchCreateRows.
            interface BatchCreateRowsRequest {
                // Required. The request message specifying the rows to create. A maximum of 500 rows can be created in a single batch.
                requests?: Schema.CreateRowRequest[];
            }
            // Response message for TablesService.BatchCreateRows.
            interface BatchCreateRowsResponse {
                // The created rows.
                rows?: Schema.Row[];
            }
            // Request message for TablesService.BatchDeleteRows
            interface BatchDeleteRowsRequest {
                // Required. The names of the rows to delete. All rows must belong to the parent table or else the entire batch will fail.
                // A maximum of 500 rows can be deleted in a batch. Format: tables/{table}/rows/{row}
                names?: string[];
            }
            // Request message for TablesService.BatchUpdateRows.
            interface BatchUpdateRowsRequest {
                // Required. The request messages specifying the rows to update. A maximum of 500 rows can be modified in a single batch.
                requests?: Schema.UpdateRowRequest[];
            }
            // Response message for TablesService.BatchUpdateRows.
            interface BatchUpdateRowsResponse {
                // The updated rows.
                rows?: Schema.Row[];
            }
            // Details on a column in the table.
            interface ColumnDescription {
                // Data type of the column Supported types are auto_id, boolean, boolean_list, creator, create_timestamp, date, dropdown,
                // location, integer, integer_list, number, number_list, person, person_list, tags, check_list, text, text_list,
                // update_timestamp, updater, relationship, file_attachment_list. These types directly map to the column types supported on
                // Tables website.
                dataType?: string;
                // Internal id for a column.
                id?: string;
                // Optional. Range of labeled values for the column. Some columns like tags and drop-downs limit the values to a set of
                // possible values. We return the range of values in such cases to help clients implement better user data validation.
                labels?: Schema.LabeledItem[];
                // Optional. Indicates that this is a lookup column whose value is derived from the relationship column specified in the
                // details. Lookup columns can not be updated directly. To change the value you must update the associated relationship
                // column.
                lookupDetails?: Schema.LookupDetails;
                // column name
                name?: string;
                // Optional. Additional details about a relationship column. Specified when data_type is relationship.
                relationshipDetails?: Schema.RelationshipDetails;
            }
            // Request message for TablesService.CreateRow.
            interface CreateRowRequest {
                // Required. The parent table where this row will be created. Format: tables/{table}
                parent?: string;
                // Required. The row to create.
                row?: Schema.Row;
                // Optional. Column key to use for values in the row. Defaults to user entered name.
                view?: string;
            }
            // A single item in a labeled column.
            interface LabeledItem {
                // Internal id associated with the item.
                id?: string;
                // Display string as entered by user.
                name?: string;
            }
            // Response message for TablesService.ListRows.
            interface ListRowsResponse {
                // A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent
                // pages.
                nextPageToken?: string;
                // The rows from the specified table.
                rows?: Schema.Row[];
            }
            // Response message for TablesService.ListTables.
            interface ListTablesResponse {
                // A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent
                // pages.
                nextPageToken?: string;
                // The list of tables.
                tables?: Schema.Table[];
            }
            // Response message for TablesService.ListWorkspaces.
            interface ListWorkspacesResponse {
                // A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent
                // pages.
                nextPageToken?: string;
                // The list of workspaces.
                workspaces?: Schema.Workspace[];
            }
            // Details about a lookup column whose value comes from the associated relationship.
            interface LookupDetails {
                // The name of the relationship column associated with the lookup.
                relationshipColumn?: string;
                // The id of the relationship column.
                relationshipColumnId?: string;
            }
            // Details about a relationship column.
            interface RelationshipDetails {
                // The name of the table this relationship is linked to.
                linkedTable?: string;
            }
            // A single row in a table.
            interface Row {
                // The resource name of the row. Row names have the form `tables/{table}/rows/{row}`. The name is ignored when creating a
                // row.
                name?: string;
                // The values of the row. This is a map of column key to value. Key is user entered name(default) or the internal column id
                // based on the view in the request.
                values?: object;
            }
            // A single table.
            interface Table {
                // List of columns in this table. Order of columns matches the display order.
                columns?: Schema.ColumnDescription[];
                // The human readable title of the table.
                displayName?: string;
                // The resource name of the table. Table names have the form `tables/{table}`.
                name?: string;
            }
            // Request message for TablesService.UpdateRow.
            interface UpdateRowRequest {
                // Required. The row to update.
                row?: Schema.Row;
                // The list of fields to update.
                updateMask?: string;
                // Optional. Column key to use for values in the row. Defaults to user entered name.
                view?: string;
            }
            // A single workspace.
            interface Workspace {
                // The human readable title of the workspace.
                displayName?: string;
                // The resource name of the workspace. Workspace names have the form `workspaces/{workspace}`.
                name?: string;
                // The list of tables in the workspace.
                tables?: Schema.Table[];
            }
        }
    }
    interface Area120Tables {
        Tables?: Area120Tables.Collection.TablesCollection;
        Workspaces?: Area120Tables.Collection.WorkspacesCollection;
        // Create a new instance of BatchCreateRowsRequest
        newBatchCreateRowsRequest(): Area120Tables.Schema.BatchCreateRowsRequest;
        // Create a new instance of BatchDeleteRowsRequest
        newBatchDeleteRowsRequest(): Area120Tables.Schema.BatchDeleteRowsRequest;
        // Create a new instance of BatchUpdateRowsRequest
        newBatchUpdateRowsRequest(): Area120Tables.Schema.BatchUpdateRowsRequest;
        // Create a new instance of CreateRowRequest
        newCreateRowRequest(): Area120Tables.Schema.CreateRowRequest;
        // Create a new instance of Row
        newRow(): Area120Tables.Schema.Row;
        // Create a new instance of UpdateRowRequest
        newUpdateRowRequest(): Area120Tables.Schema.UpdateRowRequest;
    }
}
declare const Area120Tables: GoogleAppsScript.Area120Tables;
