import DynamoDbService from 'lesgo/lib/services/DynamoDbService';

const dynamodb = new DynamoDbService(); // $ExpectType DynamoDb

dynamodb.connect({
    region: 'us-west-1',
});

(async () => {
    await dynamodb.query('analytics', 'ForumName = :name', { ':title': { SS: ['The Man'] } }, '#title, tag'); // $ExpectType ItemList
    await dynamodb.queryCount('analytics', 'ForumName = :name', { ':title': { SS: ['The Man'] } }); // $ExpectType number
    // $ExpectType PutItemOutput
    await dynamodb.put('analytics', {
        HashKey: { S: 'haskey' },
        NumAttribute: { N: '1' },
        BoolAttribute: { BOOL: true },
        ListAttribute: { NS: ['1', '2', '3'] },
        MapAttribute: { M: { foo: { S: 'bar' } } },
        NullAttribute: { NULL: true },
    });

    // $ExpectType UpdateItemOutput
    await dynamodb.update('analytics', { HashKey: { S: 'hashkey' } }, 'set #a = :x + :y', {
        ':x': { N: '20' },
        ':y': { N: '45' },
        ':MAX': { N: '100' },
    });
})();
