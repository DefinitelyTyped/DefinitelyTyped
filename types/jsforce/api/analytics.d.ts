import { callback } from '../connection';

interface ReportInfo {
}

export class Dashboard {
    describe(callback?: callback<object>): Promise<any>;

    del(callback?: callback<object>): Promise<any>;

    destory(callback?: callback<object>): Promise<any>;

    delete(callback?: callback<object>): Promise<any>;

    components(componentIds: () => any | string[] | string, callback?: callback<object>): Promise<any>;

    status(callback?: callback<object>): Promise<any>;

    refresh(callback?: callback<object>): Promise<any>;

    clone(name: string | object, folderid: string, callback?: callback<object>): Promise<any>;
}

export class ReportInstance {
    constructor(report: Report, id: string);

    retrieve(callback: callback<ReportResult>): Promise<ReportResult>
}

export class Report {
    describe(callback?: callback<ReportMetadata>): Promise<ReportMetadata>;

    del(callback?: callback<ReportResult>): Promise<ReportResult>;

    destory(callback?: callback<ReportResult>): Promise<ReportResult>;

    delete(callback?: callback<ReportResult>): Promise<ReportResult>;

    clone(name: string, callback?: callback<ReportResult>): Promise<ReportResult>;

    explain(callback?: callback<ExplainInfo>): Promise<ExplainInfo>;

    run(options: () => any | object, callback?: callback<ReportResult>): Promise<ReportResult>;

    exec(options: () => any | object, callback?: callback<ReportResult>): Promise<ReportResult>;

    execute(options: () => any | object, callback?: callback<ReportResult>): Promise<ReportResult>;

    executeAsync(options: () => any | object, callback?: callback<ReportInstanceAttrs>): Promise<ReportInstanceAttrs>;

    instance(id: string): ReportInstance;

    instances(callback?: callback<ReportInstance[]>): Promise<ReportInstance[]>;
}

export interface ReportInstanceAttrs {
}

export interface ExplainInfo {
}

export interface ReportMetadata {
}

export interface ReportResult {
}

export interface ReportInfo {
}

export interface DashboardInfo {
}

export class Analytics {
    report(id: string): Promise<Report>;

    reports(callback?: callback<ReportInfo[]>): Promise<ReportInfo[]>;

    dashboard(id: string): Promise<Dashboard>;

    dashboards(callback?: callback<DashboardInfo[]>): Promise<DashboardInfo[]>;
}
