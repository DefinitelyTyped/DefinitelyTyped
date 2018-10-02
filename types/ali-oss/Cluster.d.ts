import {
    ACLType,
    CopyAndPutMetaResult,
    CopyObjectOptions,
    DeleteMultiOptions,
    DeleteMultiResult,
    GetObjectOptions,
    GetObjectResult,
    GetStreamOptions,
    GetStreamResult,
    HeadObjectOptions,
    HeadObjectResult,
    ListObjectResult,
    ListObjectsQuery,
    NormalSuccessResponse,
    PutObjectOptions,
    PutObjectResult,
    PutStreamOptions,
    RequestOptions,
    SignatureUrlOptions,
    UserMeta
} from "./index";

export interface ClusterType {
    host: string;
    accessKeyId: string;
    accessKeySecret: string;
}

export interface ClusterOptions {
    clusters: ClusterType[];
    schedule?: string;
}

export class Cluster {
    constructor(options: ClusterOptions)

    list(query: ListObjectsQuery | null, options: RequestOptions): Promise<ListObjectResult>;

    put(name: string, file: any, options?: PutObjectOptions): Promise<PutObjectResult>;

    putStream(name: string, stream: any, options?: PutStreamOptions): Promise<{ name: string, res: NormalSuccessResponse }>;

    head(name: string, options?: HeadObjectOptions): Promise<HeadObjectResult>;

    get(name: string, file?: any, options?: GetObjectOptions): Promise<GetObjectResult>;

    getStream(name?: string, options?: GetStreamOptions): Promise<GetStreamResult>;

    delete(name: string, options?: RequestOptions): Promise<NormalSuccessResponse>;

    copy(name: string, sourceName: string, options?: CopyObjectOptions): Promise<CopyAndPutMetaResult>;

    putMeta(name: string, meta: UserMeta, options: RequestOptions): Promise<CopyAndPutMetaResult>;

    deleteMulti(names: string[], options?: DeleteMultiOptions): Promise<DeleteMultiResult>;

    signatureUrl(name: string, options?: SignatureUrlOptions): string;

    putACL(name: string, acl: ACLType, options?: RequestOptions): Promise<NormalSuccessResponse>;

    restore(name: string, options?: RequestOptions): Promise<NormalSuccessResponse>;
}
