import { ILists, IList } from "./types";
import { ISharePointQueryableCollection } from "../sharepointqueryable";
declare module "../webs/types" {
    interface _Web {
        readonly lists: ILists;
        readonly siteUserInfoList: IList;
        readonly defaultDocumentLibrary: IList;
        readonly customListTemplates: ISharePointQueryableCollection;
        getList(listRelativeUrl: string): IList;
        getCatalog(type: number): Promise<IList>;
    }
    interface IWeb {
        /**
         * Gets the collection of all lists that are contained in the Web site
         */
        readonly lists: ILists;
        /**
         * Gets the UserInfo list of the site collection that contains the Web site
         */
        readonly siteUserInfoList: IList;
        /**
         * Get a reference the default documents library of a web
         */
        readonly defaultDocumentLibrary: IList;
        /**
         * Gets the collection of all list definitions and list templates that are available
         */
        readonly customListTemplates: ISharePointQueryableCollection;
        /**
         * Gets a list by server relative url (list's root folder)
         *
         * @param listRelativeUrl The server relative path to the list's root folder (including /sites/ if applicable)
         */
        getList(listRelativeUrl: string): IList;
        /**
         * Returns the list gallery on the site
         *
         * @param type The gallery type - WebTemplateCatalog = 111, WebPartCatalog = 113 ListTemplateCatalog = 114,
         * MasterPageCatalog = 116, SolutionCatalog = 121, ThemeCatalog = 123, DesignCatalog = 124, AppDataCatalog = 125
         */
        getCatalog(type: number): Promise<IList>;
    }
}
//# sourceMappingURL=web.d.ts.map