/* tslint:disable:no-namespace */
'use strict';

import { authenticate, AuthenticationOptions } from 'ldap-authentication';

namespace Module {
    declare const options: AuthenticationOptions;

    // $ExpectType Promise<any>
    authenticate(options);

    // @ts-expect-error
    authenticate();
}
