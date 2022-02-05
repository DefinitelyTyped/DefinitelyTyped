declare module "serverless-dynamodb-client" {
  import * as AWS from "aws-sdk";
  export const doc: AWS.DynamoDB.DocumentClient;
  export const raw: AWS.DynamoDB;
}
