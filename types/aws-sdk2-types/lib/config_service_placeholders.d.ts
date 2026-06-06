import * as AWS from "../clients/all";
export abstract class ConfigurationServicePlaceholders {
    dynamodb?: AWS.DynamoDB.Types.ClientConfiguration;
    rdsdataservice?: AWS.RDSDataService.Types.ClientConfiguration;
    s3?: AWS.S3.Types.ClientConfiguration;
    ses?: AWS.SES.Types.ClientConfiguration;
    ssm?: AWS.SSM.Types.ClientConfiguration;
}
export interface ConfigurationServiceApiVersions {
    dynamodb?: AWS.DynamoDB.Types.apiVersion;
    rdsdataservice?: AWS.RDSDataService.Types.apiVersion;
    s3?: AWS.S3.Types.apiVersion;
    ses?: AWS.SES.Types.apiVersion;
    ssm?: AWS.SSM.Types.apiVersion;
}
