import { AbstractCrudObject } from "./../abstract-crud-object";
export default class AdsInsights extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get ActionAttributionWindows(): Record<string, any>;
    static get ActionBreakdowns(): Record<string, any>;
    static get ActionReportTime(): Record<string, any>;
    static get Breakdowns(): Record<string, any>;
    static get DatePreset(): Record<string, any>;
    static get Level(): Record<string, any>;
    static get SummaryActionBreakdowns(): Record<string, any>;
}
