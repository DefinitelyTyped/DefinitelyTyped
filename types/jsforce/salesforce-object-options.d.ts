import { SalesforceId } from './salesforce-id';

export interface SObjectOptions {
    Id?: SalesforceId;
    Name?: string;
    ExtId__c?: string;
}
