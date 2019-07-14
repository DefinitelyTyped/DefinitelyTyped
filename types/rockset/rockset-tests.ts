import * as Rockset from 'rockset';

// create query request
const queryRequestSql: Rockset.QueryRequestSql = {
    query: 'select * from baz'
};

const queryRequest: Rockset.QueryRequest = {
    sql: queryRequestSql
};

const awsAccessKey: Rockset.AwsAccessKey = {
    aws_access_key_id: 'my_access_key',
    aws_secret_access_key: 'my_secret_key'
};

// create AWS S3 Integration
const s3Integration: Rockset.S3Integration = {
    aws_access_key: awsAccessKey
};

const createIntegrationRequest: Rockset.CreateIntegrationRequest = {
    name: 'integration_name',
    description: 'my first integration',
    s3: s3Integration
};

// create Collection with AWS S3 Source
const s3Source: Rockset.SourceS3 = {
    bucket: 'foo',
    prefix: 'bar'
};

const source: Rockset.Source = {
  integration_name: 'integration_name',
  s3: s3Source
};

const createCollectionRequest: Rockset.CreateCollectionRequest = {
    name: 'collection_name',
    description: 'my first collection',
    sources: [source]
};
