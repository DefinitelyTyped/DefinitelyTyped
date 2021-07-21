import './';
import * as AWS from 'aws-sdk';

AWS.spyOn('S3', 'getObject');
AWS.spyOnPromise('S3', 'getObject');
AWS.spyOnEachPage('S3', 'getObject', [
    {
        test: 1,
    }
]);
AWS.clearAllMocks();