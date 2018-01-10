declare module '@feathersjs/feathers' {
    import {
        FeathersAuthCredentials,
        Passport
    } from '@feathersjs/authentication-client';

    interface Application<ServiceTypes> {
        authenticate(options?: FeathersAuthCredentials): Promise<any>;

        logout(): Promise<void>;

        passport: Passport;
    }
}
