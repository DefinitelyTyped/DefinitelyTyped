import * as passport from "passport";
import {IClientCert, IPkiVerifiedCallback, Strategy as ClientCertStrategy} from "passport-client-cert";

passport.use(new ClientCertStrategy( (clientCert: IClientCert, done: IPkiVerifiedCallback) => {
    let cn = clientCert.subject.cn,
        user = null;

    // The CN will typically be checked against a database
    if(cn === 'test-cn') {
        user = { name: 'Test User' }
    }

    done(null, user);
}));
