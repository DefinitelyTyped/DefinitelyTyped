import { WorkItemLinks } from './work-item-links';
import { BaseResource } from './base-resource';

export interface BaseWorkItemResource<T> extends BaseResource {
    id: number;
    rev: number;
    fields: T;
    _links: WorkItemLinks;
    url: string;
}
