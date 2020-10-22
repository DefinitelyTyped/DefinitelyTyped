import { SalesforceId } from './salesforce-id';

interface ErrorResult {
    errors: string[];
    success: false;
}

interface SuccessResult {
    id: SalesforceId;
    success: true;
}

export type RecordResult = SuccessResult | ErrorResult;
