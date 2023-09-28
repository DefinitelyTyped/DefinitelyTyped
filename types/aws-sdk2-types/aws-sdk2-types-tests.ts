import * as AWS from "aws-sdk2-types";
function ssm(filter: AWS.SSM.Types.ParameterStringFilter) {
    return filter.Key === "Stroustrup";
}
function rds(config: AWS.RDSDataService.ClientConfiguration) {
    return config.region === "us-east-1" && !!config.computeChecksums;
}
function dyn(u: AWS.DynamoDB.Update, doc: AWS.DynamoDB.DocumentClient) {
    if (u?.ExpressionAttributeNames) {
        u.ExpressionAttributeNames["#n"] = "name";
    }
    doc.batchWrite({ RequestItems: { table: [{ PutRequest: { Item: { name: "Copilot" } } }] } });
}
function s3(loc: AWS.S3.S3Location) {
    return loc.StorageClass === "STANDARD";
}
function sqs(x: AWS.SQS.QueueAttributeMap) {
    return x["VisibilityTimeout"] === "30";
}
