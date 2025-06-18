// used to add new page version (no widgets) /get page version properties
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface IPageVersionProperties {
    pageId: string;
    pageVersionId: string;
    pageVersionName: string;
    pageVersionDescription: string;
    pageVersionPriorityGroup: string;
    isActive: boolean;
}

// used to update priority group for specific page version
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface IPageVersionPriorityGroup {
    pageVersionId: string;
    pageVersionPriorityGroup: string;
}

// used to get/update complete page version ==> properties + widgets
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface IPageVersion extends IPageVersionProperties {
    pageWidgets: any[];
}
