import { Callback, Connection } from '../connection';
import { EventEmitter } from 'events';
import { Stream } from 'stream';

interface DeployResult {
    id: string;
    checkOnly: boolean;
    completedDate: string;
    createdDate: string;
    details?: object[] | undefined;
    done: boolean;
    errorMessage?: string | undefined;
    errorStatusCode?: string | undefined;
    ignoreWarnings?: boolean | undefined;
    lastModifiedDate: string;
    numberComponentErrors: number;
    numberComponentsDeployed: number;
    numberComponentsTotal: number;
    numberTestErrors: number;
    numberTestsCompleted: number;
    numberTestsTotal: number;
    rollbackOnError?: boolean | undefined;
    startDate: string;
    status: string;
    success: boolean;
}

interface MetadataObject {
    childXmlNames?: string[] | undefined;
    directoryName?: string | undefined;
    inFolder?: boolean | undefined;
    metaFile?: boolean | undefined;
    suffix?: string | undefined;
    xmlName: string;
}

interface DescribeMetadataResult {
    metadataObjects: MetadataObject[];
    organizationNamespace: string;
    partialSaveAllowed: boolean;
    testRequired: boolean;
}

interface FileProperties {
    type: string;
    createdById: string;
    createdByName: string;
    createdDate: string;
    fileName: string;
    fullName: string;
    id: string;
    lastModifiedById: string;
    lastModifiedByName: string;
    lastModifiedDate: string;
    manageableState?: string | undefined;
    namespacePrefix?: string | undefined;
}

interface ListMetadataQuery {
    type: string;
    folder?: string | undefined;
}

interface MetadataInfo {
    fullName: string;
}

interface Package {
    apiAccessLevel?: 'Unrestricted' | 'Restricted' | undefined;
    description?: string | undefined;
    fullName?: string | undefined;
    namespacePrefix?: string | undefined;
    objectPermissions?: ProfileObjectPermissions[] | undefined;
    postInstallClass?: string | undefined;
    setupWeblink?: string | undefined;
    types: PackageTypeMembers[];
    uninstallClass?: string | undefined;
    version: string;
}

interface PackageTypeMembers {
    members: string[];
    name: string;
}

interface ProfileObjectPermissions {
    allowCreate?: boolean | undefined;
    allowDelete?: boolean | undefined;
    allowEdit?: boolean | undefined;
    allowRead?: boolean | undefined;
    modifyAllRecords?: boolean | undefined;
    object: string;
    viewAllRecords?: boolean | undefined;
}

interface RetrieveRequest {
    apiVersion?: string | undefined;
    packageNames?: string[] | undefined;
    singlePackage?: boolean | undefined;
    specificFiles?: string[] | undefined;
    unpackaged?: Package | undefined;
}

interface RetrieveMessage {
    fileName: string;
    problem: string;
}

interface RetrieveResult {
    fileProperties: FileProperties[];
    id: string;
    messages: RetrieveMessage[];
    zipFile: string;
}

interface SaveResult {
    success: boolean;
    fullName: string;
    errors?: SaveError | Array<SaveError> | undefined;
}

interface SaveError {
    fields: string | string[];
    message: string;
    statusCode: string;
}

interface UpdateMetadataInfo {
    currentName: string;
    metadata: MetadataInfo;
}

interface UpsertResult {
    success: boolean;
    fullName: string;
    created: boolean;
}

interface AsyncResult {
    done: boolean;
    id: string;
    state: string;
    statusCode?: string | undefined;
    message?: string | undefined;
}

interface DeployOptions {
    allowMissingFiles?: boolean | undefined;
    autoUpdatePackage?: boolean | undefined;
    checkOnly?: boolean | undefined;
    ignoreWarnings?: boolean | undefined;
    performRetrieve?: boolean | undefined;
    purgeOnDelete?: boolean | undefined;
    rollbackOnError?: boolean | undefined;
    runAllTests?: boolean | undefined;
    runTests?: string[] | undefined;
    singlePackage?: boolean | undefined;
}

export class AsyncResultLocator<T> extends EventEmitter implements PromiseLike<T> {
    check(callback?: Callback<T>): Promise<T>;

    complete(callback?: Callback<T>): Promise<T>;

    poll(interval: number, timeout: number): void;

    then<TResult1, TResult2>(
        onfulfilled?: ((value: T) => PromiseLike<TResult1> | TResult1) | null,
        onrejected?: ((reason: any) => PromiseLike<TResult2> | TResult2) | null,
    ): Promise<TResult1 | TResult2>;

    finally(onfinally?: () => void): Promise<T>;
}

export class DeployResultLocator<T> extends AsyncResultLocator<T> {}
export class RetrieveResultLocator<T> extends AsyncResultLocator<T> {}

export class Metadata {
    pollInterval: number;
    pollTimeout: number;

    constructor(conn: Connection);

    checkDeployStatus(id: string, includeDetails?: boolean, callback?: Callback<DeployResult>): Promise<DeployResult>;

    checkRetrieveStatus(id: string, callback?: Callback<RetrieveResult>): Promise<RetrieveResult>;

    checkStatus(
        ids: string | string[],
        callback?: Callback<AsyncResult | Array<AsyncResult>>,
    ): AsyncResultLocator<AsyncResult | Array<AsyncResult>>;

    create(
        type: string,
        metadata: MetadataInfo | Array<MetadataInfo>,
        callback?: Callback<SaveResult | Array<SaveResult>>,
    ): Promise<SaveResult | Array<SaveResult>>;

    createAsync(
        type: string,
        metadata: MetadataInfo | Array<MetadataInfo>,
        callback?: Callback<SaveResult | Array<SaveResult>>,
    ): Promise<SaveResult | Array<SaveResult>>;

    createSync(
        type: string,
        metadata: MetadataInfo | Array<MetadataInfo>,
        callback?: Callback<SaveResult | Array<SaveResult>>,
    ): Promise<SaveResult | Array<SaveResult>>;

    delete(
        type: string,
        fullNames: string | string[],
        callback?: Callback<SaveResult | Array<SaveResult>>,
    ): Promise<SaveResult | Array<SaveResult>>;

    deleteAsync(
        type: string,
        metadata: string | string[] | MetadataInfo | Array<MetadataInfo>,
        callback?: Callback<AsyncResult | Array<AsyncResult>>,
    ): AsyncResultLocator<AsyncResult | Array<AsyncResult>>;

    deleteSync(
        type: string,
        fullNames: string | string[],
        callback?: Callback<SaveResult | Array<SaveResult>>,
    ): Promise<SaveResult | Array<SaveResult>>;

    deploy(
        zipInput: Stream | Buffer | string,
        options: DeployOptions,
        callback?: Callback<AsyncResult>,
    ): DeployResultLocator<AsyncResult>;

    describe(version?: string, callback?: Callback<DescribeMetadataResult>): Promise<DescribeMetadataResult>;

    list(
        queries: ListMetadataQuery | Array<ListMetadataQuery>,
        version?: string,
        callback?: Callback<Array<FileProperties>>,
    ): Promise<Array<FileProperties>>;

    read(
        type: string,
        fullNames: string | string[],
        callback?: Callback<MetadataInfo | Array<MetadataInfo>>,
    ): Promise<MetadataInfo | Array<MetadataInfo>>;

    readSync(
        type: string,
        fullNames: string | string[],
        callback?: Callback<MetadataInfo | Array<MetadataInfo>>,
    ): Promise<MetadataInfo | Array<MetadataInfo>>;

    rename(
        type: string,
        oldFullName: string,
        newFullName: string,
        callback?: Callback<SaveResult>,
    ): Promise<SaveResult>;

    retrieve(request: RetrieveRequest, callback?: Callback<AsyncResult>): RetrieveResultLocator<AsyncResult>;

    update(
        type: string,
        updateMetadata: MetadataInfo | Array<MetadataInfo>,
        callback?: Callback<SaveResult | Array<SaveResult>>,
    ): Promise<SaveResult | Array<SaveResult>>;

    updateAsync(
        type: string,
        updateMetadata: MetadataInfo,
        callback?: Callback<AsyncResult | Array<AsyncResult>>,
    ): AsyncResultLocator<AsyncResult | Array<AsyncResult>>;

    updateSync(
        type: string,
        updateMetadata: MetadataInfo | Array<MetadataInfo>,
        callback?: Callback<SaveResult | Array<SaveResult>>,
    ): Promise<SaveResult | Array<SaveResult>>;

    upsert(
        type: string,
        metadata: MetadataInfo | Array<MetadataInfo>,
        callback?: Callback<UpsertResult | Array<UpsertResult>>,
    ): Promise<UpsertResult | Array<UpsertResult>>;
}
