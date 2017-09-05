import { SalesforceId } from './salesforce-id';

export interface Record {
    Id: SalesforceId;
    attributes: Object[];
}
