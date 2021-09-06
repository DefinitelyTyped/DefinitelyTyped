// Type definitions for ag-auth 1.0
// Project: https://github.com/SocketCluster/ag-auth
// Definitions by: Daniel Rose <https://github.com/DanielRose>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

import { VerifyOptions, Secret, SignOptions, Jwt } from 'jsonwebtoken';

declare class AuthEngine {
    verifyToken(signedToken: string | null, key: Secret, options?: VerifyOptions): Promise<Jwt>;
    signToken(token: string | object | Buffer, key: Secret, options?: SignOptions): Promise<string | undefined>;
}

export = AuthEngine;
