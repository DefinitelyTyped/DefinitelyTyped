import { DocumentClient } from 'aws-sdk/clients/dynamodb';

export interface DynamoDbParams {
    region: DocumentClient.RegionName;
}

export default class DynamoDb {
    client: DocumentClient;

    constructor(params?: DynamoDbParams);

    connect(opts: DynamoDbParams): void;

    query(
        tableName: DocumentClient.TableName,
        keyConditionExpression: DocumentClient.KeyExpression,
        expressionAttributeValues: DocumentClient.ExpressionAttributeValueMap,
        projectionExpression: DocumentClient.ProjectionExpression,
    ): Promise<DocumentClient.ItemList>;

    queryCount(
        tableName: DocumentClient.TableName,
        keyConditionExpression: DocumentClient.KeyExpression,
        expressionAttributeValues: DocumentClient.ExpressionAttributeValueMap,
    ): Promise<DocumentClient.Integer>;

    put(
        tableName: DocumentClient.TableName,
        item: DocumentClient.PutItemInputAttributeMap,
    ): Promise<DocumentClient.PutItemOutput>;

    update(
        tableName: DocumentClient.TableName,
        key: DocumentClient.Key,
        updateExpression: DocumentClient.UpdateExpression,
        expressionAttributeValues: DocumentClient.ExpressionAttributeValueMap,
    ): Promise<DocumentClient.UpdateItemOutput>;

    protected prepareQueryPayload(
        tableName: DocumentClient.TableName,
        keyConditionExpression: DocumentClient.KeyExpression,
        expressionAttributeValues: DocumentClient.ExpressionAttributeValueMap,
        projectionExpression: DocumentClient.ProjectionExpression,
    ): {
        TableName: DocumentClient.TableName;
        KeyConditionExpression: DocumentClient.KeyExpression;
        ProjectionExpression: DocumentClient.ProjectionExpression;
        ExpressionAttributeValues: DocumentClient.ExpressionAttributeValueMap;
    };

    protected prepareQueryCountPayload(
        tableName: DocumentClient.TableName,
        keyConditionExpression: DocumentClient.KeyExpression,
        expressionAttributeValues: DocumentClient.ExpressionAttributeValueMap,
    ): {
        TableName: DocumentClient.TableName;
        KeyConditionExpression: DocumentClient.KeyExpression;
        ExpressionAttributeValues: DocumentClient.ExpressionAttributeValueMap;
        Select: 'COUNT';
    };

    protected preparePutPayload(
        tableName: DocumentClient.TableName,
        item: DocumentClient.PutItemInputAttributeMap,
    ): {
        TableName: DocumentClient.TableName;
        Item: DocumentClient.PutItemInputAttributeMap;
    };

    protected prepareUpdatePayload(
        tableName: DocumentClient.TableName,
        key: DocumentClient.Key,
        updateExpression: DocumentClient.UpdateExpression,
        expressionAttributeValues: DocumentClient.ExpressionAttributeValueMap,
    ): {
        TableName: DocumentClient.TableName;
        Key: DocumentClient.Key;
        UpdateExpression: DocumentClient.UpdateExpression;
        ExpressionAttributeValues: DocumentClient.ExpressionAttributeValueMap;
    };
}
