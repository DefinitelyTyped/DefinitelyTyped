// used to add new page version (no widgets) /get page version properties
// tslint:disable-next-line interface-name
export interface IPageVersionProperties {
    pageId: string;
    pageVersionId: string;
    pageVersionName: string;
    pageVersionDescription: string;
    pageVersionPriorityGroup: string;
    isActive: boolean;
}

// used to update priority group for specific page version
// tslint:disable-next-line interface-name
export interface IPageVersionPriorityGroup {
    pageVersionId: string;
    pageVersionPriorityGroup: string;
}

// used to get/update complete page version ==> properties + widgets
// tslint:disable-next-line interface-name
export interface IPageVersion extends IPageVersionProperties  {
    pageWidgets: any[];
}
