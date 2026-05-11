/// <reference types="node" />

export interface IssueRecord {
    id: number;
    project: IssueRecordField;
    tracker: IssueRecordField;
    status: IssueRecordField;
    priority: IssueRecordField;
    author: IssueRecordField;
    assigned_to: IssueRecordField;
    parent?: IssueRecordField | undefined;
    subject: string;
    description: string;
    start_date: string | null;
    due_date: string | null;
    done_ratio: number;
    is_private: boolean;
    total_estimated_hours: number | null;
    created_at: string;
    updated_at: string | null;
    closed_on: string | null;
}

export interface IssueRecordField {
    id: number;
    name?: string | undefined;
}

export interface IssueParams {
    project_id?: number | undefined;
    tracker_id?: number | undefined;
    priority_id?: number | undefined;
    category_id?: number | undefined;
    status_id?: number | undefined;
    assigned_to_id?: number | undefined;
    subject?: string | undefined;
    description?: string | undefined;
    parent_issue_id?: number | undefined;
    notes?: string | undefined;
    uploads?: UploadRecord[] | undefined;
}

export interface UploadResult {
    upload: UploadRecord;
}

export interface UploadRecord {
    token: string;
    content_type?: string | undefined;
    filename: string;
}

export interface IssueData {
    issue: IssueParams;
}

export interface Issue {
    issue: IssueRecord;
}

export interface Issues {
    issues: IssueRecord[];
}

export class Redmine {
    constructor(host: string, config: any, port: number);

    /////////////////////////////////////// REST API for issues(Stable) ///////////////////////////////////////

    issues(params: any, callback: (err: any, data: any) => void): Issues;

    get_issue_by_id(id: number, params: any, callback: (err: any, data: any) => void): Issue;

    create_issue(issue: IssueData, callback: (err: any, data: any) => void): Issue;

    update_issue(id: number, issue: IssueData, callback: (err: any, data: any) => void): Issue;

    delete_issue(id: number, callback: (err: any, data: any) => void): void;

    add_watcher(id: number, params: any, callback: (err: any, data: any) => void): void;

    remove_watcher(id: number, params: any, callback: (err: any, data: any) => void): void;

    /////////////////////////////////////// REST API for Issue Relations(Alpha) ///////////////////////////////////////

    issue_relation_by_issue_id(id: number, callback: (err: any, data: any) => void): void;

    create_issue_relation(id: number, params: any, callback: (err: any, data: any) => void): void;

    issue_relation_by_id(id: number, callback: (err: any, data: any) => void): void;

    delete_issue_relation(id: number, callback: (err: any, data: any) => void): void;

    /////////////////////////////////////// REST API for Common(Alpha) ///////////////////////////////////////

    upload(content: any, callback: (err: any, data: any) => void): UploadResult;
}
