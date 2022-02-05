// Type definitions for serverless-dynamodb-client 0.0
// Project: https://github.com/99x/serverless-dynamodb-client
// Definitions by: Cody Pope <https://github.com/cody-pope>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { DynamoDB } from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

export const doc: DocumentClient;
export const raw: DynamoDB;
