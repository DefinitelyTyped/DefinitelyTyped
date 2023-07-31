import { ServiceAccountCredentialsBuilder } from './service-account-credentials-builder';
/**
 * Marker base class for different types of credentials. Currently it supports only {@link ServiceAccountCredentials}.
 * The factory methods within this class can be used to create instances of credentials classes.
 */

/* tslint:disable-next-line:no-unnecessary-class */
export class Credentials {
    static serviceAccountCredentialsBuilder(): ServiceAccountCredentialsBuilder;
}
