import { WorkItemLink } from './work-item-link';

export interface WorkItemLinks {
    self: WorkItemLink;
    parent: WorkItemLink;
    workItemUpdates: WorkItemLink;
    workItemRevisions: WorkItemLink;
    workItemType: WorkItemLink;
    fields: WorkItemLink;
    html: WorkItemLink;
    workItemHistory: WorkItemLink;
}
