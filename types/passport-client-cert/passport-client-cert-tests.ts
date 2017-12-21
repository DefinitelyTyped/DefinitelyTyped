import * as passport from "passport";
import { ClientCert, PkiVerifiedCallback, Strategy as ClientCertStrategy } from "passport-client-cert";

passport.use(new ClientCertStrategy((clientCert: ClientCert, done: PkiVerifiedCallback) => {
    const cn = clientCert.subject.cn;
    let user = null;

    // The CN will typically be checked against a database
    if (cn === 'test-cn') {
        user = { name: 'Test User' };
    }

    done(null, user);
}));
