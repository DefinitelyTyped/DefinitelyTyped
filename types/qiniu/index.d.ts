// Type definitions for qiniu 6.1
// Project: https://github.com/qiniu/nodejs-sdk
// Definitions by: xialeistudio <https://github.com/xialeistudio>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/**
 * * Licensed under:
 *   The MIT License (MIT)
 *
 *   Copyright (c) 2016 unional
 *
 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 *
 *   The above copyright notice and this permission notice shall be included in
 *   all copies or substantial portions of the Software.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *   THE SOFTWARE.
 */
declare namespace qiniu {
    type onret = (e?: any, result?: any, res?: any) => void;
    class conf {
        /**
         * AccessKey
         * @see https://portal.qiniu.com/user/key
         */
        static ACCESS_KEY: string;

        /**
         * SecretKey.DO NOT SEND YOUR SECRET KEY TO ANYONE!
         */
        static SECRET_KEY: string;

        /**
         * @default 'QiniuNodejs/' + pkg.version + ' (' + os.type() + '; ' + os.platform() + '; ' + os.arch() + '; )';
         */
        static USER_AGENT: string;

        /**
         * @default 'http://upload.qiniu.com'
         */
        static UP_HOST: string;

        /**
         * @default 'http://rs.qbox.me'
         */
        static RS_HOST: string;

        /**
         * @default 'http://rsf.qbox.me'
         */
        static RSF_HOST: string;

        /**
         * @default 'http://api.qiniu.com'
         */
        static API_HOST: string;

        /**
         * @default 3600000 milliseconds
         */
        static RPC_TIMEOUT: number;

        /**
         * @default 'http://uc.qbox.me'
         */
        static UC_HOST: string;

        /**
         * @default 'https://up-z1.qbox.me'
         */
        static UP_HTTPS_HOST: string;

        /**
         * @default 'http'
         */
        static SCHEME: string;

        /**
         * get upload domain automatically
         * @default true
         */
        static AUTOZONE: boolean;

        /**
         * @default null
         */
        static BUCKET: string | null;

        /**
         * @default 0
         */
        static EXPIRE: number;
    }
    namespace auth {
        class Mac {
            /**
             * @see config.ACCESS_KEY
             */
            accessKey: string;

            /**
            * @see config.SECRET_KEY
            */
            secretKey: string;

            /**
             * constructor a Mac
             * @param accessKey config.ACCESS_KEY
             * @param secretKey config.SECRET_KEY
             */
            constructor(accessKey: string, secretKey: string);
        }
    }
    namespace io {
        /**
         * @default '?'
         */
        const UNDEFINED_KEY: string;
        class PutExtra {
            params: any;
            mimeType?: string;
            crc32?: string;
            checkCrc?: number;

            /**
             * contructor a PutExtra
             * @param params default {}
             * @param mimeType default null
             * @param crc32  default null
             * @param checkCrc default 0
             */
            constructor(params?: any, mimeType?: string, crc32?: string, checkCrc?: number);
        }
        class PutRet {
            hash?: string;
            key?: string;
            /**
             * constructor a PutRet
             * @param hash resouce hash
             * @param key resource key
             */
            constructor(hash?: string, key?: string);
        }

        /**
         * upload a file streaming
         * @param uptoken upload token @see rs.PutPolicy.token()
         * @param key file key
         * @param rs file stream
         * @param extra upload options
         * @param onret callback
         */
        function putReadable(uptoken: string, key?: string, rs?: any, extra?: any, onret?: onret): any;
        /**
         * upload binary data
         * @param uptoken upload token @see rs.PutPolicy.token()
         * @param key file key
         * @param body the data to upload
         * @param extra upload options
         * @param onret callback
         */
        function put(uptoken: string, key?: string, body?: Buffer | string, extra?: any, onret?: onret): any;
        /**
         * upload binary data without a key
         * @param uptoken upload token @see rs.PutPolicy.token()
         * @param body Buffer or string
         * @param extra upload options
         * @param onret callback
         */
        function putWithoutKey(uptoken: string, body?: Buffer | string, extra?: any, onret?: onret): any;
        /**
         * upload a file
         * @param uptoken upload token @see rs.PutPolicy.token()
         * @param key file key
         * @param localFile local file path to upload
         * @param extra upload options
         * @param onret callback
         */
        function putFile(uptoken: string, key?: string, localFile?: string, extra?: any, onret?: onret): any;
        /**
         * upload a file without a key
         * @param uptoken upload token @see rs.PutPolicy.token()
         * @param localFile local file path to upload
         * @param extra upload options
         * @param onret callback
         */
        function putFileWithoutKey(uptoken: string, localFile?: string, extra?: any, onret?: onret): any;
    }
    namespace util {
        /**
         * @param jsonFlags 
         */
        function urlsafeBase64Encode(jsonFlags: any): string;

        /**
         * 
         * @param v 
         */
        function base64ToUrlSafe(v: string): string;

        /**
         * 
         * @param encodedFlags 
         * @param secretKey 
         */
        function hmacSha1(encodedFlags: any, secretKey: string): string;

        /**
         * 
         * @param uri 
         * @param body 
         */
        function generateAccessToken(uri: string, body?: any): string;

        /**
         * 
         * @param path 
         * @param body 
         * @param callbackAuth 
         */
        function isQiniuCallback(path: string, body: any, callbackAuth: any): boolean;
    }
    namespace zone {
        /**
         * 
         * @param uptoken 
         * @param conf 
         */
        function up_host(uptoken: string, conf: conf): void;
    }
    namespace rsf {
        /**
         * 
         * @param bucket 
         * @param prefix 
         * @param marker 
         * @param limit 
         * @param delimiter 
         * @param onret 
         */
        function listPrefix(bucket: string, prefix?: string, marker?: any, limit?: any, delimiter?: any, onret?: onret): void;
    }
    namespace rpc {
        /**
         * 
         * @param uri 
         * @param form 
         * @param onret 
         */
        function postMultipart(uri: string, form: any, onret?: onret): any;

        /**
         * 
         * @param uri 
         * @param form 
         * @param token 
         * @param onret 
         */
        function postWithForm(uri: string, form: any, token?: string, onret?: onret): any;

        /**
         * 
         * @param uri 
         * @param token 
         * @param onret 
         */
        function postWithoutForm(uri: string, token?: string, onret?: onret): any;
    }
    namespace fop {
        class ImageView {
            mode: number;
            width: number;
            height: number;
            quality: number;
            format: any;

            /**
             * 
             * @param mode 
             * @param width 
             * @param height 
             * @param quality 
             * @param format 
             */
            constructor(mode?: number, width?: number, height?: number, quality?: number, format?: any);

            /**
             * 
             * @param url 
             */
            makeRequest(url: string): string;
        }

        class ImageInfo {
            /**
             * 
             * @param url 
             */
            makeRequest(url: string): string;
        }
        class Exif {
            /**
             * 
             * @param url 
             */
            makeRequest(url: string): string;
        }

        /**
         * 
         * @param bucket 
         * @param key 
         * @param fops 
         * @param opts 
         * @param onret 
         */
        function pfop(bucket: string, key: string, fops: any, opts?: any, onret?: onret): void;
    }
    namespace rs {
        import Mac = qiniu.auth.Mac;
        class Client {
            client?: Client;

            /**
             * 
             * @param client 
             */
            constructor(client?: Client);

            /**
             * 
             * @param bucket 
             * @param key 
             * @param onret 
             */
            stat(bucket: string, key: string, onret?: onret): void;
            /**
             * 
             * @param bucket 
             * @param key 
             * @param onret 
             */
            remove(bucket: string, key: string, onret?: onret): void;
            /**
             * 
             * @param bucketSrc 
             * @param keySrc 
             * @param bucketDest 
             * @param keyDest 
             * @param onret 
             */
            move(bucketSrc: string, keySrc: string, bucketDest: string, keyDest: string, onret?: onret): void;
            /**
             * 
             * @param bucketSrc 
             * @param keySrc 
             * @param bucketDest 
             * @param keyDest 
             * @param force 
             * @param onret 
             */
            forceMove(bucketSrc: string, keySrc: string, bucketDest: string, keyDest: string, force: boolean, onret?: onret): void;
            /**
             * 
             * @param bucketSrc 
             * @param keySrc 
             * @param bucketDest 
             * @param keyDest 
             * @param onret 
             */
            copy(bucketSrc: string, keySrc: string, bucketDest: string, keyDest: string, onret?: onret): void;
            /**
             * 
             * @param bucketSrc 
             * @param keySrc 
             * @param bucketDest 
             * @param keyDest 
             * @param force 
             * @param onret 
             */
            forceCopy(bucketSrc: string, keySrc: string, bucketDest: string, keyDest: string, force: boolean, onret?: onret): void;
            /**
             * 
             * @param url 
             * @param bucket 
             * @param key 
             * @param onret 
             */
            fetch(url: string, bucket: string, key: string, onret?: onret): void;
            /**
             * 
             * @param entries 
             * @param onret 
             */
            batchStat(entries: any[], onret?: onret): void;
            /**
             * 
             * @param entries 
             * @param onret 
             */
            batchDelete(entries: any[], onret?: onret): void;
            /**
             * 
             * @param entries 
             * @param onret 
             */
            batchMove(entries: any[], onret?: onret): void;
            /**
             * 
             * @param entries 
             * @param force 
             * @param onret 
             */
            forceBatchMove(entries: any[], force: boolean, onret?: onret): void;
            /**
             * 
             * @param entries 
             * @param onret 
             */
            batchCopy(entries: any[], onret?: onret): void;
            /**
             * 
             * @param entries 
             * @param force 
             * @param onret 
             */
            forceBatchCopy(entries: any[], force: boolean, onret?: onret): void;
        }
        class Entry {
            hash?: string;
            fsize?: number;
            putTime?: number;
            mimeType?: string;
            endUser?: any;
            /**
             * 
             * @param hash 
             * @param fsize 
             * @param putTime 
             * @param mimeType 
             * @param endUser 
             */
            constructor(hash?: string, fsize?: number, putTime?: number, mimeType?: string, endUser?: any);
        }
        class EntryPath {
            bucket?: string;
            key?: string;
            /**
             * 
             * @param bucket 
             * @param key 
             */
            constructor(bucket?: string, key?: string);
            /**
             * 
             */
            encode(): string;
            /**
             * 
             * @param op 
             */
            toStr(op: string): string;
        }
        class EntryPathPair {
            src?: string;
            dest?: string;
            /**
             * 
             * @param src 
             * @param desc 
             */
            constructor(src?: string, desc?: string);
            /**
             * 
             * @param op 
             * @param force 
             */
            toStr(op: string, force?: boolean): string;
        }
        class BatchItemRet {
            error?: any;
            code?: number;
            /**
             * 
             * @param error 
             * @param code 
             */
            constructor(error?: any, code?: number);
        }
        class BatchStatItemRet {
            data: any;
            error: any;
            code: number;
            /**
             * 
             * @param data 
             * @param error 
             * @param code 
             */
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
            /**
             * 
             * @param score 
             * @param callbackUrl 
             * @param callbackBody 
             * @param returnUrl 
             * @param returnBody 
             * @param endUser 
             * @param expires 
             * @param persistentOps 
             * @param persistentNotifyUrl 
             */
            constructor(score?: string, callbackUrl?: string, callbackBody?: any, returnUrl?: string, returnBody?: any, endUser?: any, expires?: number, persistentOps?: any, persistentNotifyUrl?: string);
            /**
             * 
             * @param mac 
             */
            token(mac?: Mac): string;
            /**
             * 
             */
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
            /**
             * 
             * @param putPolicyObj 
             */
            constructor(putPolicyObj: putPolicyObj);
            /**
             * 
             * @param mac 
             */
            token(mac?: Mac): string;
            /**
             * 
             */
            getFlags(): any;
        }
        class GetPolicy {
            expires: number;
            /**
             * 
             * @param expires 
             */
            constructor(expires?: number);
            /**
             * 
             * @param baseUrl 
             * @param mac 
             */
            makeRequest(baseUrl: string, mac?: Mac): string;
        }
        /**
         * 
         * @param domain 
         * @param key 
         * @param query 
         */
        function makeBaseUrl(domain: string, key: string, query?: string): string;
    }
}