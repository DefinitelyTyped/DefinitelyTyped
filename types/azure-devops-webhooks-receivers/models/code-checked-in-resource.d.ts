import { ResourceUser } from './resource-user';
import { BaseResource } from './base-resource';

export interface CodeCheckedInResource extends BaseResource {
    changesetId: number;
    url: string;
    author: ResourceUser;
    checkedInBy: ResourceUser;
    createdDate: string;
    comment: string;
}
