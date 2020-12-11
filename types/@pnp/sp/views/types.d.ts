import { ITypedHash } from "@pnp/common";
import { _SharePointQueryableInstance, _SharePointQueryableCollection, IDeleteable } from "../sharepointqueryable";
export declare class _Views extends _SharePointQueryableCollection<IViewInfo[]> {
    /**
     * Gets a view by guid id
     *
     * @param id The GUID id of the view
     */
    getById(id: string): IView;
    /**
     * Gets a view by title (case-sensitive)
     *
     * @param title The case-sensitive title of the view
     */
    getByTitle(title: string): IView;
    /**
     * Adds a new view to the collection
     *
     * @param title The new views's title
     * @param personalView True if this is a personal view, otherwise false, default = false
     * @param additionalSettings Will be passed as part of the view creation body
     */
    add(title: string, personalView?: boolean, additionalSettings?: ITypedHash<any>): Promise<IViewAddResult>;
}
export interface IViews extends _Views {
}
export declare const Views: import("../sharepointqueryable").ISPInvokableFactory<IViews>;
export declare class _View extends _SharePointQueryableInstance<IViewInfo> {
    delete: (this: import("../sharepointqueryable").ISharePointQueryable<any>) => Promise<void>;
    readonly fields: IViewFields;
    /**
     * Updates this view intance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the view
     */
    update: any;
    /**
     * Returns the list view as HTML.
     *
     */
    renderAsHtml(): Promise<string>;
    /**
     * Sets the view schema
     *
     * @param viewXml The view XML to set
     */
    setViewXml(viewXml: string): Promise<void>;
}
export interface IView extends _View, IDeleteable {
}
export declare const View: import("../sharepointqueryable").ISPInvokableFactory<IView>;
export declare class _ViewFields extends _SharePointQueryableCollection<{
    SchemaXml: string;
}> {
    /**
     * Gets a value that specifies the XML schema that represents the collection.
     */
    getSchemaXml(): Promise<string>;
    /**
     * Adds the field with the specified field internal name or display name to the collection.
     *
     * @param fieldTitleOrInternalName The case-sensitive internal name or display name of the field to add.
     */
    add(fieldTitleOrInternalName: string): Promise<void>;
    /**
     * Moves the field with the specified field internal name to the specified position in the collection.
     *
     * @param field The case-sensitive internal name of the field to move.
     * @param index The zero-based index of the new position for the field.
     */
    move(field: string, index: number): Promise<void>;
    /**
     * Removes all the fields from the collection.
     */
    removeAll(): Promise<void>;
    /**
     * Removes the field with the specified field internal name from the collection.
     *
     * @param fieldInternalName The case-sensitive internal name of the field to remove from the view.
     */
    remove(fieldInternalName: string): Promise<void>;
}
export interface IViewFields extends _ViewFields {
}
export declare const ViewFields: import("../sharepointqueryable").ISPInvokableFactory<IViewFields>;
export interface IViewAddResult {
    view: IView;
    data: IViewInfo;
}
export interface IViewUpdateResult {
    view: IView;
    data: IViewInfo;
}
export declare enum ViewScope {
    DefaultValue = 0,
    Recursive = 1,
    RecursiveAll = 2,
    FilesOnly = 3
}
export interface IViewInfo {
    EditorModified: boolean;
    Formats: string | null;
    Hidden: boolean;
    HtmlSchemaXml: string;
    Id: string;
    ImageUrl: string;
    IncludeRootFolder: boolean;
    JSLink: string;
    ListViewXml: string;
    Method: string | null;
    MobileDefaultView: boolean;
    MobileView: boolean;
    ModerationType: string | null;
    NewDocumentTemplates: string;
    OrderedView: boolean;
    Paged: boolean;
    PersonalView: boolean;
    ReadOnlyView: boolean;
    RequiresClientIntegration: boolean;
    RowLimit: number;
    Scope: ViewScope;
    ServerRelativePath: {
        DecodedUrl: string;
    };
    ServerRelativeUrl: string;
    StyleId: string | null;
    TabularView: boolean;
    Threaded: boolean;
    Title: string;
    Toolbar: string;
    ToolbarTemplateName: string | null;
    ViewData: string | null;
    ViewJoins: string | null;
    ViewProjectedFields: {
        SchemaXml: string;
    } | null;
    ViewQuery: string;
    ViewType: string;
    VisualizationInfo: any | null;
}
//# sourceMappingURL=types.d.ts.map