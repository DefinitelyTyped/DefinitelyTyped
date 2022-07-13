import { ResourceUser } from "./resource-user";
import { WorkItemUpdatedRevision } from "./work-item-updated-revision";
import { BaseWorkItemResource } from "./base-work-item-resource";
import { WorkItemUpdatedFields } from "./work-item-updated-fields";

export interface WorkItemUpdatedResource extends BaseWorkItemResource<WorkItemUpdatedFields> {
    workItemId: number;
    revisedBy: ResourceUser;
    revisedDate: string;
    revision: WorkItemUpdatedRevision;
}