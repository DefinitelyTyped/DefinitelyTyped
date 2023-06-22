import * as Schmervice from '@hapipal/schmervice';
import * as Hapi from '@hapi/hapi';

import { OrganizationService as OrganizationServiceClass } from './test/organization_service';
import { UserService as UserServiceClass } from './test/user_service';

declare module '@hapipal/schmervice' {
    interface AuthServices {
        membersService: Service;
        adminService: Service;
        manangerService: Service;
    }

    interface OathServices {
        witnessService: Service;
        promissoryService: Service;
        crownCourtService: Service;
    }

    interface SchmerviceDecorator {
        (namespace: 'auth'): AuthServices;
        (namespace: 'oath'): OathServices;
    }
}

(async () => {
    const server = new Hapi.Server({ port: 3000 });

    await server.register(Schmervice);
    await server.register({
        plugin: Schmervice.plugin,
    });

    server.registerService(OrganizationServiceClass);
    server.registerService(UserServiceClass);
    server.registerService({
        name: 'TestServiceObject'
    });
    server.registerService((server, options) => ({
        name: 'TestServiceFactory',
        server,
        options
    }));
    server.registerService(
        Schmervice.withName('TestServiceWithName', {}, (server, options) => ({
            someMethod: () => {}
        }))
    );
    server.registerService({
        [Schmervice.name]: 'TestServiceWithSymbols',
        [Schmervice.sandbox]: 'server',
        someMethod: () => {}
    });
    server.registerService([
        class MyArrayServiceClass extends Schmervice.Service {
            someMethod() {}
        },
        {
            name: 'MyArrayServiceObject',
            someOtherMethod: () => {}
        }
    ]);

    await server.initialize();

    // TestServiceObject isnt declared on the interface, so this
    // tests the default handling of unknown keys by the interface
    // and the handling of merged known keys
    const { UserService, OrganizationService, TestServiceObject } = server.services();

    const user = { firstName: 'Johnny', lastName: 'Dough' };

    TestServiceObject.bind();

    UserService.getFullName(user);

    UserService.caching({
        getFullName: {
            expiresIn: 1000
        }
    });

    UserService.caching({
        getFullName: {
            generateKey: (id) => id,
            cache: {
                expiresIn: 1000
            }
        }
    });

    await OrganizationService.addUser(user);

    // These are undefined in real implementation but
    // still satisfy typings constraints
    const {
        adminService,
        manangerService,
        membersService
    } = server.services('auth');

    const {
        crownCourtService,
        promissoryService,
        witnessService
    } = server.services('oath');
})();
