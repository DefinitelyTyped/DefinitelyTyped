// Type definitions for jsforce 1.8
// Project: https://github.com/jsforce/jsforce
// Definitions by: Dolan Miu <https://github.com/dolanmiu>
//                 Kamil Ejsymont <https://github.com/netes>
//                 Thomas Dvornik <https://github.com/amphro>
//                 Tim Noonan <https://github.com/tnoonan-salesforce>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as fs from 'fs';
import * as stream from 'stream';
import * as express from 'express';
import * as glob from 'glob';

export { Date } from './date-enum';
export { Record } from './record';
export { RecordResult } from './record-result';
export { Connection, ConnectionOptions, RequestInfo, Tooling, callback } from './connection';
export { SObject } from './salesforce-object';
export { SalesforceId } from './salesforce-id';
export { OAuth2, OAuth2Options } from './oauth2';
export { Query, QueryResult } from './query';
export { Promise } from './promise';
export { Report, Dashboard, Analytics, ReportInstance, DashboardInfo, ReportInfo, ExplainInfo, ReportInstanceAttrs,
    ReportMetadata, ReportResult } from './api/analytics';
export { Chatter, Request, RequestResult, BatchRequestResults, BatchRequestParams,
    Resource, BatchRequestResult, RequestParams } from './api/chatter';
export { Metadata, SaveResult, MetadataInfo, AsyncResult, RetrieveResultLocator, RetrieveRequest, FileProperties,
    ListMetadataQuery, DescribeMetadataResult, DeployOptions, AsyncResultLocator, RetrieveResult, MetadataObject,
    DeployResult, DeployResultLocator, UpdateMetadataInfo, UpsertResult } from './api/metadata';
