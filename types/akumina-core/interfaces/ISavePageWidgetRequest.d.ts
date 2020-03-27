import IPageWidget from "./IPageWidget";

// tslint:disable-next-line interface-name
export default interface ISavePageWidgetRequest {
    pageId: string;
    pageWidgets: IPageWidget[];
}
