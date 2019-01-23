// Type definitions for Forge-apis 0.4
// Project: https://github.com/Autodesk-Forge/forge-api-nodejs-client
// Definitions by: Autodesk Forge Partner Development <https://github.com/Autodesk-Forge>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// Copyright (c) Autodesk, Inc. All rights reserved
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
//

export class AuthClientTwoLegged {
    constructor(clientId: string, clientSecret: string, scope: string[]);

    authenticate(): Promise<AuthToken>;
    getCredentials(): AuthToken;
    setCredentials(credentials: AuthToken): void;
    isAuthorized(): boolean;
}

export class AuthClientThreeLegged {
    constructor(clientId: string, clientSecret: string, redirectUri: string, scope: string[]);

    generateAuthUrl(): string;
    getToken(code: string): Promise<AuthToken>;
    refreshToken(credentials: AuthToken): Promise<AuthToken>;
}

export interface ApiResponse {
    body: any;
    headers: any;
    statusCode: number;
}

export interface ApiError {
    statusCode: number;
    statusMessage: string;
}

export class BucketsApi {
    constructor();

    createBucket(postBuckets: object, opts: object, credentials: AuthToken): Promise<ApiResponse>;
    deleteBucket(bucketKey: string, credentials: AuthToken): Promise<ApiResponse>;
    getBucketDetails(bucketKey: string, credentials: AuthToken): Promise<ApiResponse>;
    getBuckets(options: object, credentials: AuthToken): Promise<ApiResponse>;
}

export class HubsApi {
    constructor();

    getHub(hubId: string, opts: object, credentials: AuthToken): Promise<ApiResponse>;
    getHubs(opts: object, credentials: AuthToken): Promise<ApiResponse>;
    getHubProjects(hubId: string, opts: object, credentials: AuthToken): Promise<ApiResponse>;
}

export class FoldersApi {
    constructor();

    getFolderContents(projectId: string, folderId: string, opts: object, credentials: AuthToken): Promise<ApiResponse>;
}

export interface JobPayload {
    input: JobPayloadInput;
    output: JobPayloadOutput;
}

export interface JobPayloadInput {
    urn: string;
    compressedUrn?: boolean;
    rootFilename?: string;
}

export interface JobPayloadOutput {
    formats: JobPayloadItem[];
}

export interface JobPayloadItem {
    type: string;
    views?: string[];
    advanced?: {
        applicationProtocol: string;
        tolerance: number;
    };
    format?: string;
    exportColor?: boolean;
    exportFileStructure?: string;
}

export class DerivativesApi {
    constructor();

    deleteManifest(urn: string, credentials: AuthToken): Promise<ApiResponse>;
    getDerivativeManifest(urn: string, derivativeUrn: string, opts: object, credentials: AuthToken): Promise<ApiResponse>;
    getFormats(opts: object, credentials: AuthToken): Promise<ApiResponse>;
    getManifest(urn: string, opts: object, credentials: AuthToken): Promise<ApiResponse>;
    getMetadata(urn: string, opts: object, credentials: AuthToken): Promise<ApiResponse>;
    getModelviewMetadata(urn: string, guid: string, opts: object, credentials: AuthToken): Promise<ApiResponse>;
    getModelviewProperties(urn: string, guid: string, opts: object, credentials: AuthToken): Promise<ApiResponse>;
    getThumbnail(urn: string, opts: object, credentials: AuthToken): Promise<ApiResponse>;
    translate(job: JobPayload, opts: { xAdsForce?: boolean }, credentials: AuthToken): Promise<ApiResponse>;
}

export interface Credentials {
    client_id: string;
    client_secret: string;
    grant_type: string;
    scope?: string;
}

export interface AuthToken {
    access_token: string;
    expires_in: number;
    token_type: string;
    refresh_token?: string;
}

export namespace Dm {
    interface BucketResponse {
        bucketKey: string;
        bucketOwner: string;
        createdDate: number;
        permissions: Array<{
            access: string;
            authId: string;
        }>;
        policyKey: string;
    }

    interface ItemResponse {
        data: any[];
        included: Item[];
        jsonapi: {
            version: string;
        };
        links: any;
    }

    interface Item {
        attributes: {
            createTime: string;
            createUserId: string;
            displayName: string;
            extension: object;
            fileType: string;
            lastModifiedTime: string;
            lastModifiedUserId: string;
            mimeType: string;
            name: string;
            storageSize: number;
            versionNumber: number;
        };
        id: string;
        links: {
            self: {
                href: string;
            };
        };
        relationships: {
            derivatives: {
                data: {
                    id: string;
                },
                meta: {
                    link: {
                        href: string;
                    }
                }
            },
            item: any;
            refs: any;
            storage: {
                data: {
                    id: string;
                    type: string;
                }
            };
            thumbnail: any;
        };
        type: string;
    }
}
