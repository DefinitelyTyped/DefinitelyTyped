// Type definitions for Forge-apis 0.4
// Project: https://github.com/Autodesk-Forge/forge-api-nodejs-client
// Definitions by: Autodesk Forge Partner Development <forge.help@autodesk.com>
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
/// <reference path='./src/viewer.d.ts' />
/// <reference path='./src/forge.d.ts' />

export class AuthClientTwoLegged {
    constructor(clientId: string, clientSecret: string, scope: string[]);

    authenticate(): Promise<Autodesk.Forge.AuthToken>;
    getCredentials(): Autodesk.Forge.AuthToken;
    setCredentials(credentials: Autodesk.Forge.AuthToken): void;
    isAuthorized(): boolean;
}

export class AuthClientThreeLegged {
    constructor(clientId: string, clientSecret: string, redirectUri: string, scope: string[]);

    generateAuthUrl(): string;
    getToken(code: string): Promise<Autodesk.Forge.AuthToken>;
    refreshToken(credentials: Autodesk.Forge.AuthToken): Promise<Autodesk.Forge.AuthToken>;
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

    createBucket(postBuckets: object, opts: object, credentials: Autodesk.Forge.AuthToken): Promise<ApiResponse>;
    deleteBucket(bucketKey: string, credentials: Autodesk.Forge.AuthToken): Promise<ApiResponse>;
    getBucketDetails(bucketKey: string, credentials: Autodesk.Forge.AuthToken): Promise<ApiResponse>;
    getBuckets(options: object, credentials: Autodesk.Forge.AuthToken): Promise<ApiResponse>;
}

export class HubsApi {
    constructor();

    getHub(hubId: string, opts: object, credentials: Autodesk.Forge.AuthToken): Promise<ApiResponse>;
    getHubs(opts: object, credentials: Autodesk.Forge.AuthToken): Promise<ApiResponse>;
    getHubProjects(hubId: string, opts: object, credentials: Autodesk.Forge.AuthToken): Promise<ApiResponse>;
}

export class FoldersApi {
    constructor();

    getFolderContents(projectId: string, folderId: string, opts: object, credentials: Autodesk.Forge.AuthToken): Promise<ApiResponse>;
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

    deleteManifest(urn: string, credentials: Autodesk.Forge.AuthToken): Promise<ApiResponse>;
    getDerivativeManifest(urn: string, derivativeUrn: string, opts: object, credentials: Autodesk.Forge.AuthToken): Promise<ApiResponse>;
    getFormats(opts: object, credentials: Autodesk.Forge.AuthToken): Promise<ApiResponse>;
    getManifest(urn: string, opts: object, credentials: Autodesk.Forge.AuthToken): Promise<ApiResponse>;
    getMetadata(urn: string, opts: object, credentials: Autodesk.Forge.AuthToken): Promise<ApiResponse>;
    getModelviewMetadata(urn: string, guid: string, opts: object, credentials: Autodesk.Forge.AuthToken): Promise<ApiResponse>;
    getModelviewProperties(urn: string, guid: string, opts: object, credentials: Autodesk.Forge.AuthToken): Promise<ApiResponse>;
    getThumbnail(urn: string, opts: object, credentials: Autodesk.Forge.AuthToken): Promise<ApiResponse>;
    translate(job: JobPayload, opts: { xAdsForce?: boolean }, credentials: Autodesk.Forge.AuthToken): Promise<ApiResponse>;
}
