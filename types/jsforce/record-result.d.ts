import { SalesforceId } from './salesforce-id';

interface ErrorResult {
    errors: Error[];
    success: false;
}

interface Error {
    statusCode: string;
    message: string;
    fields: string[];
}

interface SuccessResult {
    id: SalesforceId;
    success: true;
}

export type RecordResult = SuccessResult | ErrorResult;
