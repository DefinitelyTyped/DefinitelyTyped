import IPageWidget from "./IPageWidget";

export default interface ISavePageWidgetRequest {
    pageId: string;
    pageWidgets: IPageWidget[];
}
