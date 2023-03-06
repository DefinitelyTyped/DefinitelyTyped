import { Callback } from '../connection';
import { ExplainInfo } from '../query';

export class Dashboard {
    describe(callback?: Callback<object>): Promise<any>;

    del(callback?: Callback<object>): Promise<any>;

    destory(callback?: Callback<object>): Promise<any>;

    delete(callback?: Callback<object>): Promise<any>;

    components(componentIds: string[] | string | Callback<object>, callback?: Callback<object>): Promise<any>;

    status(callback?: Callback<object>): Promise<any>;

    refresh(callback?: Callback<object>): Promise<any>;

    clone(name: string | object, folderid: string, callback?: Callback<object>): Promise<any>;
}

export class ReportInstance {
    constructor(report: Report, id: string);

    retrieve(callback: Callback<ReportResult>): Promise<ReportResult>;
}

export class Report {
    describe(callback?: Callback<ReportMetadata>): Promise<ReportMetadata>;

    del(callback?: Callback<ReportResult>): Promise<ReportResult>;

    destory(callback?: Callback<ReportResult>): Promise<ReportResult>;

    delete(callback?: Callback<ReportResult>): Promise<ReportResult>;

    clone(name: string, callback?: Callback<ReportResult>): Promise<ReportResult>;

    explain(callback?: Callback<ExplainInfo>): Promise<ExplainInfo>;

    run(options: object | Callback<ReportResult>, callback?: Callback<ReportResult>): Promise<ReportResult>;

    exec(options: object | Callback<ReportResult>, callback?: Callback<ReportResult>): Promise<ReportResult>;

    execute(options: object | Callback<ReportResult>, callback?: Callback<ReportResult>): Promise<ReportResult>;

    executeAsync(options: object | Callback<ReportInstanceAttrs>, callback?: Callback<ReportInstanceAttrs>): Promise<ReportInstanceAttrs>;

    instance(id: string): ReportInstance;

    instances(callback?: Callback<ReportInstance[]>): Promise<ReportInstance[]>;
}

export interface ReportInstanceAttrs {}

export interface ReportMetadata {}

export interface ReportResult {}

export interface ReportInfo {}

export interface DashboardInfo {}

export class Analytics {
    report(id: string): Promise<Report>;

    reports(callback?: Callback<ReportInfo[]>): Promise<ReportInfo[]>;

    dashboard(id: string): Promise<Dashboard>;

    dashboards(callback?: Callback<DashboardInfo[]>): Promise<DashboardInfo[]>;
}
