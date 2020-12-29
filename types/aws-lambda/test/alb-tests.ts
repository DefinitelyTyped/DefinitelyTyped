import { ALBHandler, ALBResult } from "aws-lambda";

const handler: ALBHandler = async (event, context, callback) => {
    str = event.httpMethod;
    str = event.path;
    str = event.queryStringParameters![str];
    str = event.headers![str];
    str = event.multiValueQueryStringParameters![str][num];
    str = event.multiValueHeaders![str][num];
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
