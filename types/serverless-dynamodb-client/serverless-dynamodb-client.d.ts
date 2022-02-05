import { DynamoDB } from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

export const doc: DocumentClient;
export const raw: DynamoDB;
