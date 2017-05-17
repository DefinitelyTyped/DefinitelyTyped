import { SalesforceId } from './salesforce-id';

export interface RecordResult {
    id: SalesforceId;
    success: boolean;
    anys: Object[];
}
