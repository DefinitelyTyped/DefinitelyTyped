import {
    DocumentClient,
    TableName,
    KeyExpression,
    ExpressionAttributeValueMap,
    ProjectionExpression,
    ItemList,
    Integer,
    PutItemInputAttributeMap,
    RegionName,
    UpdateExpression,
    Key,
} from 'aws-sdk/clients/dynamodb';

export interface DynamoDbParams {
    region: RegionName;
}

export default class DynamoDb {
    protected client: DocumentClient;

    constructor(params?: DynamoDbParams);

    connect(opts: DynamoDbParams): void;

    query(
        tableName: TableName,
        keyConditionExpression: KeyExpression,
        expressionAttributeValues: ExpressionAttributeValueMap,
        projectionExpression: ProjectionExpression,
    ): Promise<ItemList>;

    queryCount(
        tableName: TableName,
        keyConditionExpression: KeyExpression,
        expressionAttributeValues: ExpressionAttributeValueMap,
    ): Promise<Integer>;

    put(tableName: TableName, item: PutItemInputAttributeMap): Promise<DocumentClient.PutItemOutput>;

    update(
        tableName: TableName,
        key: Key,
        updateExpression: UpdateExpression,
        expressionAttributeValues: ExpressionAttributeValueMap,
    ): Promise<DocumentClient.UpdateItemOutput>;

    protected prepareQueryPayload(
        tableName: TableName,
        keyConditionExpression: KeyExpression,
        expressionAttributeValues: ExpressionAttributeValueMap,
        projectionExpression: ProjectionExpression,
    ): {
        TableName: TableName;
        KeyConditionExpression: KeyExpression;
        ProjectionExpression: ProjectionExpression;
        ExpressionAttributeValues: ExpressionAttributeValueMap;
    };

    protected prepareQueryCountPayload(
        tableName: TableName,
        keyConditionExpression: KeyExpression,
        expressionAttributeValues: ExpressionAttributeValueMap,
    ): {
        TableName: TableName;
        KeyConditionExpression: KeyExpression;
        ExpressionAttributeValues: ExpressionAttributeValueMap;
        Select: 'COUNT';
    };

    protected preparePutPayload(
        tableName: TableName,
        item: PutItemInputAttributeMap,
    ): {
        TableName: TableName;
        Item: PutItemInputAttributeMap;
    };

    protected prepareUpdatePayload(
        tableName: TableName,
        key: Key,
        updateExpression: UpdateExpression,
        expressionAttributeValues: ExpressionAttributeValueMap,
    ): {
        TableName: TableName;
        Key: Key;
        UpdateExpression: UpdateExpression;
        ExpressionAttributeValues: ExpressionAttributeValueMap;
    };
}
