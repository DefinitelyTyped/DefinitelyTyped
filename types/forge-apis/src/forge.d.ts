//
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
declare namespace Autodesk {
    namespace Forge {
        interface Credentials {
            client_id: string;
            client_secret: string;
            grant_type: string;
            scope?: string;
        }

        interface AuthToken {
            access_token: string;
            expires_in: number;
            token_type: string;
            refresh_token?: string;
        }

        namespace Dm {
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
    }
}
