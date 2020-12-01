//used to add new page version (no widgets) /get page version properties
export interface IPageVersionProperties {
    pageId: string;
    pageVersionId: string;
    pageVersionName: string;
    pageVersionDescription: string;
    pageVersionPriorityGroup: string;
    isActive: boolean;    
}

//used to update priority group for specific page version
export interface IPageVersionPriorityGroup {
    pageVersionId: string;
    pageVersionPriorityGroup: string;
}

//used to get/update complete page version ==> properties + widgets
export interface IPageVersion extends IPageVersionProperties  {
    pageWidgets: [];    
}