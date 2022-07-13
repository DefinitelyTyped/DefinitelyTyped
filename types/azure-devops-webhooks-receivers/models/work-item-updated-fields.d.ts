import { WorkItemUpdatedFieldValue } from "./work-item-updated-field-value";

export interface WorkItemUpdatedFields {
    "System.Rev": WorkItemUpdatedFieldValue<string>;
    "System.AuthorizedDate": WorkItemUpdatedFieldValue<string>;
    "System.RevisedDate": WorkItemUpdatedFieldValue<string>;
    "System.State": WorkItemUpdatedFieldValue<string>;
    "System.Reason": WorkItemUpdatedFieldValue<string>;
    "System.AssignedTo": WorkItemUpdatedFieldValue<string>;
    "System.ChangedDate": WorkItemUpdatedFieldValue<string>;
    "System.Watermark": WorkItemUpdatedFieldValue<string>;
    "Microsoft.Vsts.Common.Severity": WorkItemUpdatedFieldValue<string>;
}