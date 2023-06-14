import { ALBHandler, ALBResult } from 'aws-lambda';

const handler: ALBHandler = async (event, context, callback) => {
    str = event.httpMethod;
    str = event.path;
    strOrUndefined = event.queryStringParameters![str];
    strOrUndefined = event.headers![str];
    strArrayOrUndefined = event.multiValueQueryStringParameters![str];
    str = event.multiValueQueryStringParameters![str]![num];
    strArrayOrUndefined = event.multiValueHeaders![str];
    str = event.multiValueHeaders![str]![num];
    strOrNull = event.body;
    bool = event.isBase64Encoded;
    str = event.requestContext.elb.targetGroupArn;

    let result: ALBResult = {
        statusCode: num,
        statusDescription: str,
        isBase64Encoded: bool,
    };
    result = {
        statusCode: num,
        statusDescription: str,
        headers: { [str]: boolOrNumOrStr },
        multiValueHeaders: { [str]: [boolOrNumOrStr] },
        body: str,
        isBase64Encoded: bool,
    };
    callback(new Error());
    callback(null, result);
    return result;
};
