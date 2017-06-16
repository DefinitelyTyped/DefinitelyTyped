// Type definitions for qiniu 6.1
// Project: https://github.com/qiniu/nodejs-sdk
// Definitions by: xialeistudio <https://github.com/xialeistudio>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace qiniu {
    type onret = (e?: any, result?: any, res?: any) => void;
    class conf {
        static ACCESS_KEY: string;
        static SECRET_KEY: string;
        static USER_AGENT: string;
        static UP_HOST: string;
        static RS_HOST: string;
        static RSF_HOST: string;
        static API_HOST: string;
        static RPC_TIMEOUT: number;
        static UC_HOST: string;
        static UP_HTTPS_HOST: string;
        static SCHEME: string;
        static AUTOZONE: boolean;
        static BUCKET: string | null;
        static EXPIRE: number;
    }
    namespace auth {
        class Mac {
            accessKey: string;
            secretKey: string;

            constructor(accessKey: string, secretKey: string);
        }
    }
    namespace io {
        const UNDEFINED_KEY: string;
        class PutExtra {
            params: any;
            mimeType?: string;
            crc32?: string;
            checkCrc?: number;

            constructor(params?: any, mimeType?: string, crc32?: string, checkCrc?: number);
        }
        class PutRet {
            hash?: string;
            key?: string;

            constructor(hash?: string, key?: string);
        }

        function putReadable(uptoken: string, key?: string, rs?: any, extra?: any, onret?: onret): any;

        function put(uptoken: string, key?: string, body?: any, extra?: any, onret?: onret): any;

        function putWithoutKey(uptoken: string, body?: any, extra?: any, onret?: onret): any;

        function putFile(uptoken: string, key?: string, localFile?: string, extra?: any, onret?: onret): any;

        function putFileWithoutKey(uptoken: string, localFile?: string, extra?: any, onret?: onret): any;
    }
    namespace util {
        function urlsafeBase64Encode(jsonFlags: any): string;

        function base64ToUrlSafe(v: string): string;

        function hmacSha1(encodedFlags: any, secretKey: string): string;

        function generateAccessToken(uri: string, body?: any): string;

        function isQiniuCallback(path: string, body: any, callbackAuth: any): boolean;
    }
    namespace zone {
        function up_host(uptoken: string, conf: conf): void;
    }
    namespace rsf {
        function listPrefix(bucket: string, prefix?: string, marker?: any, limit?: any, delimiter?: any, onret?: onret): void;
    }
    namespace rpc {
        function postMultipart(uri: string, form: any, onret?: onret): any;

        function postWithForm(uri: string, form: any, token?: string, onret?: onret): any;

        function postWithoutForm(uri: string, token?: string, onret?: onret): any;
    }
    namespace fop {
        class ImageView {
            mode: number;
            width: number;
            height: number;
            quality: number;
            format: any;

            constructor(mode?: number, width?: number, height?: number, quality?: number, format?: any);

            makeRequest(url: string): string;
        }

        class ImageInfo {
            makeRequest(url: string): string;
        }
        class Exif {
            makeRequest(url: string): string;
        }

        function pfop(bucket: string, key: string, fops: any, opts?: any, onret?: onret): void;
    }
    namespace rs {
        import Mac = qiniu.auth.Mac;
        class Client {
            client?: Client;

            constructor(client?: Client);

            stat(bucket: string, key: string, onret?: onret): void;

            remove(bucket: string, key: string, onret?: onret): void;

            move(bucketSrc: string, keySrc: string, bucketDest: string, keyDest: string, onret?: onret): void;

            forceMove(bucketSrc: string, keySrc: string, bucketDest: string, keyDest: string, force: boolean, onret?: onret): void;

            copy(bucketSrc: string, keySrc: string, bucketDest: string, keyDest: string, onret?: onret): void;

            forceCopy(bucketSrc: string, keySrc: string, bucketDest: string, keyDest: string, force: boolean, onret?: onret): void;

            fetch(url: string, bucket: string, key: string, onret?: onret): void;

            batchStat(entries: any[], onret?: onret): void;

            batchDelete(entries: any[], onret?: onret): void;

            batchMove(entries: any[], onret?: onret): void;

            forceBatchMove(entries: any[], force: boolean, onret?: onret): void;

            batchCopy(entries: any[], onret?: onret): void;

            forceBatchCopy(entries: any[], force: boolean, onret?: onret): void;
        }
        class Entry {
            hash?: string;
            fsize?: number;
            putTime?: number;
            mimeType?: string;
            endUser?: any;

            constructor(hash?: string, fsize?: number, putTime?: number, mimeType?: string, endUser?: any);
        }
        class EntryPath {
            bucket?: string;
            key?: string;

            constructor(bucket?: string, key?: string);

            encode(): string;

            toStr(op: string): string;
        }
        class EntryPathPair {
            src?: string;
            dest?: string;

            constructor(src?: string, desc?: string);

            toStr(op: string, force?: boolean): string;
        }
        class BatchItemRet {
            error?: any;
            code?: number;

            constructor(error?: any, code?: number);
        }
        class BatchStatItemRet {
            data: any;
            error: any;
            code: number;

            constructor(data: any, error: any, code: number);
        }
        class PutPolicy {
            scope?: string;
            callbackUrl?: string;
            callbackBody?: any;
            returnUrl?: string;
            returnBody?: any;
            endUser?: any;
            expires: number;
            persistentOps?: any;
            persistentNotifyUrl?: string;

            constructor(score?: string,
                        callbackUrl?: string,
                        callbackBody?: any,
                        returnUrl?: string,
                        returnBody?: any,
                        endUser?: any,
                        expires?: number,
                        persistentOps?: any,
                        persistentNotifyUrl?: string);

            token(mac?: Mac): string;

            getFlags(): any;
        }
        interface putPolicyObj {
            scope?: string;
            expires?: number;
            insertOnly?: boolean;
            saveKey?: string;
            endUser?: any;
            returnUrl?: string;
            returnBody?: any;
            callbackUrl?: string;
            callbackHost?: string;
            callbackBody?: any;
            callbackBodyType?: string;
            callbackFetchKey?: string;
            persistentOps?: any;
            persistentNotifyUrl?: string;
            persistentPipeline?: string;
            fsizeLimit?: number;
            fsizeMin?: any;
            detectMime?: any;
            mimeLimit?: any;
            deleteAfterDays?: number;
        }
        class PutPolicy2 {
            scope?: string;
            expires: number;
            insertOnly?: boolean;
            saveKey?: string;
            endUser?: any;
            returnUrl?: string;
            returnBody?: any;
            callbackUrl?: string;
            callbackHost?: string;
            callbackBody?: any;
            callbackBodyType?: string;
            callbackFetchKey?: string;
            persistentOps?: any;
            persistentNotifyUrl?: string;
            persistentPipeline?: string;
            fsizeLimit?: number;
            fsizeMin?: any;
            detectMime?: any;
            mimeLimit?: any;
            deleteAfterDays?: number;

            constructor(putPolicyObj: putPolicyObj);

            token(mac?: Mac): string;

            getFlags(): any;
        }
        class GetPolicy {
            expires: number;

            constructor(expires?: number);

            makeRequest(baseUrl: string, mac?: Mac): string;
        }
        function makeBaseUrl(domain: string, key: string, query?: string): string;
    }
}
