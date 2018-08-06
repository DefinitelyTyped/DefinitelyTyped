import feathers, { Application } from '@feathersjs/feathers';
import feathersAuthenticationOAuth2, { Verifier } from '@feathersjs/authentication-oauth2';

const app: Application<{}> = feathers().configure(feathersAuthenticationOAuth2());

class CustomVerifier extends Verifier {
    constructor(app: Application<{}>, options: any = {}) {
        super(app, options);
    }
}
