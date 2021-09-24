import CryptoJS = require('crypto-js');
import * as Crypto from './crypto';
import * as Client from './client';

declare namespace hawk {
    namespace client {
        function authenticate(
            request: XMLHttpRequest | Response,
            credentials: Client.Credentials,
            artifacts: Crypto.Artifacts,
            options?: Client.AuthenticateOptions,
        ): boolean;
        function authenticateTimestamp(
            message: string,
            credentials: Client.Credentials,
            updateClock?: boolean,
        ): boolean;
        function bewit(uri: string, options?: Client.BewitOptions): string;
        function header(uri: string | utils.ParsedUri, method: string, options?: Client.HeaderOptions): Client.Header;
        function message(host: string, port: number, message: string, options: Client.MessageOptions): Client.Message;
    }

    namespace crypto {
        const headerVersion: string;
        const algorithms: string[];

        function calculateMac(type: string, credentials: Client.Credentials, options: Crypto.Artifacts): string;
        function calculatePayloadHash(payload: string, algorithm: string, contentType: string): string;
        function calculateTsMac(ts: string, credentials: Client.Credentials): string;
        function generateNormalizedString(type: string, options: Crypto.Artifacts): string;
    }

    namespace utils {
        interface ParsedUri {
            host: string;
            port: string;
            resource: string;
        }

        const storage: Storage;
        /** `scheme://credentials@host:port/resource#fragment` */
        const uriRegex: RegExp;

        function base64urlEncode(value: string | Buffer, encoding?: BufferEncoding): string;
        function escapeHeaderAttribute(attribute: string): string;
        function getNtpSecOffset(): number;
        function now(localtimeOffsetMsec?: number): number;
        function nowSec(localtimeOffsetMsec?: number): number;
        function parseAuthorizationHeader(header: string, keys?: string[]): Record<string, string>;
        function parseContentType(header?: string): string;
        function parseUri(input: string): ParsedUri;
        function randomString(size: number): string;
        function setNtpSecOffset(offset: number): void;
        function setStorage(storage: Storage): void;
    }

    namespace crypto {
        const utils: typeof CryptoJS;
    }
}

export = hawk;
