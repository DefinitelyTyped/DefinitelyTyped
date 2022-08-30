import * as jwt from 'jsonwebtoken';

export type JWTPackage = typeof jwt;

export interface Config<T> {
    secret: jwt.Secret;
    iss: {
        validate: boolean;
        data: string[];
    };
    customClaims: {
        validate: boolean;
        data: Array<keyof T>;
    };
}

export default class JWTService<TDecoded extends object | string> {
    protected jwtpkg: JWTPackage;
    protected decoded: TDecoded;
    protected settings: {
        validate: {
            iss: boolean;
            customClaims: boolean;
        };
        config: {
            iss: string[];
            customClaims: Array<keyof TDecoded>;
        };
    };

    constructor(token: string, config: Config<TDecoded>);

    validate(): JWTService<TDecoded>;

    jwt(): JWTPackage;
}
