import IPageWidget from "./IPageWidget";

// eslint-disable-next-line @typescript-eslint/naming-convention
export default interface ISavePageWidgetRequest {
    pageId: string;
    pageWidgets: IPageWidget[];
}
