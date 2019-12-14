import rockset = require('rockset');

const client: rockset.ApiClient = rockset('API_KEY', 'API_SERVER');

// create query request
const queryRequestSql: rockset.QueryRequestSql = {
    query: 'select * from baz'
};

const queryRequest: rockset.QueryRequest = {
    sql: queryRequestSql
};

client.queries.query(queryRequest);

const awsAccessKey: rockset.AwsAccessKey = {
    aws_access_key_id: 'my_access_key',
    aws_secret_access_key: 'my_secret_key'
};

// create AWS S3 Integration
const s3Integration: rockset.S3Integration = {
    aws_access_key: awsAccessKey
};

const createIntegrationRequest: rockset.CreateIntegrationRequest = {
    name: 'integration_name',
    description: 'my first integration',
    s3: s3Integration
};

client.integrations.create(createIntegrationRequest);

// create Collection with AWS S3 Source
const s3Source: rockset.SourceS3 = {
    bucket: 'foo',
    prefix: 'bar'
};

const source: rockset.Source = {
  integration_name: 'integration_name',
  s3: s3Source
};

const createCollectionRequest: rockset.CreateCollectionRequest = {
    name: 'collection_name',
    description: 'my first collection',
    sources: [source]
};

client.collections.create('my_workspace', createCollectionRequest);
