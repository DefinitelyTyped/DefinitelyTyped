import { WorkItemFields } from "./work-item-fields";

export interface WorkItemUpdatedRevision {
    id: number;
    rev: number;
    fields: WorkItemFields;
    url: string;
}