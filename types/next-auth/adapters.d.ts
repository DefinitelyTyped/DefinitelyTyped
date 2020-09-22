import { ConnectionOptions, EntitySchema } from 'typeorm';
import { AppOptions } from '.';
import { SessionProvider } from './client';

// NOTE: There are a lot of `any`. That's because there could be any schema for each entity
interface Adapter {
    getAdapter(
        appOptions: AppOptions,
    ): Promise<{
        createUser(profile: any): Promise<any>;
        getUser(id: string): Promise<any>;
        getUserByEmail(email: string): Promise<any>;
        getUserByProviderAccountId(providerId: string, providerAccountId: string): Promise<any>;
        updateUser(profile: any): Promise<any>;
        linkAccount(
            userId: string,
            providerId: string,
            providerType: string,
            providerAccountId: string,
            refreshToken: string,
            accessToken: string,
            accessTokenExpires: number,
        ): Promise<void>;
        createSession(user: any): Promise<any>;
        getSession(sessionToken: string): Promise<any>;
        updateSession(session: any): Promise<void>;
        deleteSession(sessionToken: string): Promise<void>;
        createVerificationRequest?(
            email: string,
            url: string,
            token: string,
            secret: string,
            provider: SessionProvider,
            options: AppOptions,
        ): Promise<void>;
        getVerificationRequest?(
            email: string,
            verificationToken: string,
            secret: string,
            provider: SessionProvider,
        ): Promise<any>;
        deleteVerificationRequest?(
            email: string,
            verificationToken: string,
            secret: string,
            provider: SessionProvider,
        ): Promise<any>;
    }>;
}

type Schema<T = any> = EntitySchema<T>['options'];

interface Adapters {
    Default: TypeORMAdapter['Adapter'];
    TypeORM: TypeORMAdapter;
    Prisma: PrismaAdapter;
}

/**
 * TODO: fix auto-type schema
 */

interface TypeORMAdapter<
    A extends TypeORMAccountModel = any,
    U extends TypeORMUserModel = any,
    S extends TypeORMSessionModel = any,
    VR extends TypeORMVerificationRequestModel = any
> {
    Adapter(
        typeOrmConfig: ConnectionOptions,
        options?: {
            models?: {
                Account?: {
                    model: A;
                    schema: Schema<A>;
                };
                User?: {
                    model: U;
                    schema: Schema<U>;
                };
                Session?: {
                    model: S;
                    schema: Schema<S>;
                };
                VerificationRequest?: {
                    model: VR;
                    schema: Schema<VR>;
                };
            };
        },
    ): Adapter;
    Models: {
        Account: {
            model: TypeORMAccountModel;
            schema: Schema<TypeORMAccountModel>;
        };
        User: {
            model: TypeORMUserModel;
            schema: Schema<TypeORMUserModel>;
        };
        Session: {
            model: TypeORMSessionModel;
            schema: Schema<TypeORMSessionModel>;
        };
        VerificationRequest: {
            model: TypeORMVerificationRequestModel;
            schema: Schema<TypeORMVerificationRequestModel>;
        };
    };
}

interface PrismaAdapter {
    Adapter(config: {
        prisma: any;
        modelMapping?: {
            User: string;
            Account: string;
            Session: string;
            VerificationRequest: string;
        };
    }): Adapter;
}

declare const Adapters: Adapters;

declare class TypeORMAccountModel {
    compoundId: string;
    userId: number;
    providerType: string;
    providerId: string;
    providerAccountId: string;
    refreshToken?: string;
    accessToken?: string;
    accessTokenExpires?: Date;

    constructor(
        userId: number,
        providerId: string,
        providerType: string,
        providerAccountId: string,
        refreshToken?: string,
        accessToken?: string,
        accessTokenExpires?: Date,
    );
}

declare class TypeORMUserModel {
    name?: string;
    email?: string;
    image?: string;
    emailVerified?: Date;

    constructor(name?: string, email?: string, image?: string, emailVerified?: Date);
}

declare class TypeORMSessionModel {
    userId: number;
    expires: Date;
    sessionToken: string;
    accessToken: string;

    constructor(userId: number, expires: Date, sessionToken?: string, accessToken?: string);
}

declare class TypeORMVerificationRequestModel {
    identifier?: string;
    token?: string;
    expires?: Date;

    constructor(identifier?: string, token?: string, expires?: Date);
}

export default Adapters;
export {
    Adapter,
    Adapters,
    TypeORMAdapter,
    TypeORMAccountModel,
    TypeORMUserModel,
    TypeORMSessionModel,
    TypeORMVerificationRequestModel,
    PrismaAdapter,
};
