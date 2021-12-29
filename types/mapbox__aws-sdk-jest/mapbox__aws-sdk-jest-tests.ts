import './';
import { spyOn, spyOnPromise, spyOnEachPage, clearAllMocks } from 'aws-sdk';

spyOn('S3', 'getObject');
spyOnPromise('S3', 'getObject');
spyOnEachPage('S3', 'getObject', [
    {
        test: 1,
    }
]);
clearAllMocks();
