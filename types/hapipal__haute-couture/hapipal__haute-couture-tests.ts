import * as HauteCouture from '@hapipal/haute-couture';
import * as Hapi from '@hapi/hapi';
import { Service, ServiceRegistrationObject } from '@hapipal/schmervice';
import * as Path from 'path';

(async () => {
    const server = new Hapi.Server({ port: 3000 });

    const { useFilename: routeUseFilename, ...routeRest } = HauteCouture.amendment('routes');
    const { useFilename: decorUseFilename, ...decorRest } = HauteCouture.amendment('decorations');
    const { useFilename: pathUseFilename, ...pathRest } = HauteCouture.amendment('path');
    const { useFilename: bindUseFilename, ...bindRest } = HauteCouture.amendment('bind');
    const { useFilename: cachesUseFilename, ...cachesRest } = HauteCouture.amendment('caches');
    const { useFilename: pluginsUseFilename, ...pluginsRest } = HauteCouture.amendment('plugins');
    const { useFilename: dependenciesUseFilename, ...dependenciesRest } = HauteCouture.amendment('dependencies');
    const { useFilename: methodsUseFilename, ...methodsRest } = HauteCouture.amendment('methods');
    const { useFilename: extensionsUseFilename, ...extensionsRest } = HauteCouture.amendment('extensions');
    const { useFilename: exposeUseFilename, ...exposeRest } = HauteCouture.amendment('expose');
    const { useFilename: cookiesUseFilename, ...cookiesRest } = HauteCouture.amendment('cookies');
    const { useFilename: modelsUseFilename, ...modelsRest } = HauteCouture.amendment('models');
    const { useFilename: servicesUseFilename, ...servicesRest } = HauteCouture.amendment('services');
    const { useFilename: subscriptionsUseFilename, ...subscriptionsRest } = HauteCouture.amendment('subscriptions');
    const { useFilename: validatorUseFilename, ...validatorRest } = HauteCouture.amendment('validator');
    const { useFilename: viewManagerUseFilename, ...viewManagerRest } = HauteCouture.amendment('view-manager');
    const { useFilename: authSchemesUseFilename, ...authSchemesRest } = HauteCouture.amendment('auth/schemes');
    const { useFilename: authStrategiesUseFilename, ...authStrategiesRest } = HauteCouture.amendment('auth/strategies');
    const { useFilename: authDefaultUseFilename, ...authDefaultRest } = HauteCouture.amendment('auth/default');

    type MyCustomAmendments = {
        'custom-routes': HauteCouture.CustomAmendmentConfig<
            HauteCouture.PlaceTypes['routes']
        >,
        'custom-decoration': HauteCouture.CustomAmendmentConfig<
            HauteCouture.PlaceTypes['decorations']
        >
        'custom-path': HauteCouture.CustomAmendmentConfig<
            HauteCouture.PlaceTypes['path']
        >
        'custom-bind': HauteCouture.CustomAmendmentConfig<
            HauteCouture.PlaceTypes['bind']
        >
        'custom-caches': HauteCouture.CustomAmendmentConfig<
            HauteCouture.PlaceTypes['caches']
        >
        'custom-plugins': HauteCouture.CustomAmendmentConfig<
            HauteCouture.PlaceTypes['plugins']
        >
        'custom-dependencies': HauteCouture.CustomAmendmentConfig<
            HauteCouture.PlaceTypes['dependencies']
        >
        'custom-methods': HauteCouture.CustomAmendmentConfig<
            HauteCouture.PlaceTypes['methods']
        >
        'custom-extensions': HauteCouture.CustomAmendmentConfig<
            HauteCouture.PlaceTypes['extensions']
        >
        'custom-expose': HauteCouture.CustomAmendmentConfig<
            HauteCouture.PlaceTypes['expose']
        >
        'custom-cookies': HauteCouture.CustomAmendmentConfig<
            HauteCouture.PlaceTypes['cookies']
        >
        'custom-models': HauteCouture.CustomAmendmentConfig<
            HauteCouture.PlaceTypes['models']
        >
        'custom-services': HauteCouture.CustomAmendmentConfig<
            HauteCouture.PlaceTypes['services']
        >
        'custom-subscriptions': HauteCouture.CustomAmendmentConfig<
            HauteCouture.PlaceTypes['subscriptions']
        >
        'custom-validator': HauteCouture.CustomAmendmentConfig<
            HauteCouture.PlaceTypes['validator']
        >
        'custom-view-manager': HauteCouture.CustomAmendmentConfig<
            HauteCouture.PlaceTypes['view-manager']
        >
        'custom-auth-schemes': HauteCouture.CustomAmendmentConfig<
            HauteCouture.PlaceTypes['auth/schemes']
        >
        'custom-auth-strategies': HauteCouture.CustomAmendmentConfig<
            HauteCouture.PlaceTypes['auth/strategies']
        >
        'custom-auth-default': HauteCouture.CustomAmendmentConfig<
            HauteCouture.PlaceTypes['auth/default']
        >
    }

    const amendments: MyCustomAmendments = {
        'custom-routes': {
            ...routeRest,
            useFilename: (value, file, path) => {

                value = routeUseFilename (value, file, path);

                if (Array.isArray(value)) {

                    return value;
                }

                value.path = '/prefix/' + value.path;

                return value;
            },
        },
        'custom-decoration': {
            ...decorRest,
            useFilename: (value, file, path) => {

                value = decorUseFilename(value, file, path);


                if (Array.isArray(value)) {
                    return value;
                }

                console.log(
                    'decoration for',
                    value.type,
                    'called',
                    value.property,
                    'which is a',
                    typeof value.method
                );

                return value
            }
        },
        'custom-path': {
            ...pathRest,
            useFilename: (value, file, path) => {

                value = pathUseFilename(value, file, path);

                if (Array.isArray(value)) {
                    return value;
                }

                return value.replace('-', '_');
            }
        },
        'custom-bind': {
            ...bindRest,
            useFilename: (value, file, path) => {

                value = bindUseFilename(value, file, path);

                if (Array.isArray(value)) {
                    return value;
                }


                return value;
            }
        },
        'custom-caches': {
            ...cachesRest,
            useFilename: (value, file, path) => {

                value = cachesUseFilename(value, file, path);

                if (Array.isArray(value)) {
                    return value;
                }

                value.segment = 'custom-' + value.segment;

                return value;
            }
        },
        'custom-plugins': {
            ...pluginsRest,
            useFilename: (value, file, path) => {

                value = pluginsUseFilename(value, file, path);

                if (Array.isArray(value)) {
                    return value;
                }

                value.multiple = true;

                return value;
            }
        },
        'custom-dependencies': {
            ...dependenciesRest,
            useFilename: (value, file, path) => {

                value = dependenciesUseFilename(value, file, path);

                if (Array.isArray(value)) {
                    return value;
                }


                if (typeof value.dependencies === 'string') {

                    value.dependencies = [
                        value.dependencies,
                        'a-really-important-plugin'
                    ];
                }

                return value;
            }
        },
        'custom-methods': {
            ...methodsRest,
            useFilename: (value, file, path) => {

                value = methodsUseFilename(value, file, path);

                if (Array.isArray(value)) {
                    return value;
                }

                if (typeof value === 'function') {

                    return value;
                }

                value.name = 'custom_' + value.name;

                return value;
            }
        },
        'custom-extensions': {
            ...extensionsRest,
            useFilename: (value, file, path) => {

                value = extensionsUseFilename(value, file, path);

                if (Array.isArray(value)) {
                    return value;
                }

                const originalMethod = value.method;
                const { type } = value;

                value.method = (...args: any[]) => {

                    console.log('calling the method(s) for', type);

                    if (Array.isArray(originalMethod)) {

                        const calls = []
                        for (const fn of originalMethod) {

                            calls.push(fn(server));
                        }

                        return Promise.all(calls);
                    }

                    return originalMethod.call(args[0], ...args);
                }

                return value;
            }
        },
        'custom-expose': {
            ...exposeRest,
            useFilename: (value, file, path) => {

                value = exposeUseFilename(value, file, path);

                if (Array.isArray(value)) {
                    return value;
                }


                value.key = 'custom_' + value.key

                return value;
            }
        },
        'custom-cookies': {
            ...cookiesRest,
            useFilename: (value, file, path) => {

                value = cookiesUseFilename(value, file, path);

                if (Array.isArray(value)) {
                    return value;
                }

                value.name = 'cookie-' + value.name;

                return value;
            }
        },
        'custom-models': {
            ...modelsRest,
            useFilename: (value, file, path) => {

                value = modelsUseFilename(value, file, path);

                if (Array.isArray(value)) {
                    return value;
                }

                value.tableName = 'myApp_' + value.tableName;

                return value;
            }
        },
        'custom-services': {
            ...servicesRest,
            useFilename: (value, file, path) => {

                value = servicesUseFilename(value, file, path);

                if (Array.isArray(value)) {
                    return value;
                }

                let service: Service | ServiceRegistrationObject;

                if (typeof value === 'function') {

                    service = value(server, {});
                }

                service = value;

                service.bind = {
                    hapi: 'yes',
                    pal: 'ofcourse'
                }

                return service;
            }
        },
        'custom-subscriptions': {
            ...subscriptionsRest,
            useFilename: (value, file, path) => {

                value = subscriptionsUseFilename(value, file, path);

                if (Array.isArray(value)) {
                    return value;
                }

                value.path = 'custom_' + value.path;

                return value;
            }
        },
        'custom-validator': {
            ...validatorRest,
            useFilename: (value, file, path) => {

                value = validatorUseFilename(value, file, path);

                if (Array.isArray(value)) {
                    return value;
                }

                if (!/15\.\d{1,}\.\d{1,}/.test(value.version)) {

                    throw Error('cannot use a validator that is that old');
                }

                return value;
            }
        },
        'custom-view-manager': {
            ...viewManagerRest,
            useFilename: (value, file, path) => {

                value = viewManagerUseFilename(value, file, path);

                if (Array.isArray(value)) {
                    return value;
                }

                if (!value.helpersPath) {

                    value.helpersPath = Path.join(__dirname, '../helpers');
                }

                return value;
            }
        },
        'custom-auth-schemes': {
            ...authSchemesRest,
            useFilename: (value, file, path) => {

                value = authSchemesUseFilename(value, file, path);

                if (Array.isArray(value)) {
                    return value;
                }

                value.name = 'custom-' + value.name;

                return value;
            }
        },
        'custom-auth-strategies': {
            ...authStrategiesRest,
            useFilename: (value, file, path) => {

                value = authStrategiesUseFilename(value, file, path);

                if (Array.isArray(value)) {
                    return value;
                }

                value.options = {
                    ...(value.options || {}),
                    custom: true,
                    typings: true
                }

                return value;
            }
        },
        'custom-auth-default': {
            ...authDefaultRest,
            useFilename: (value, file, path) => {

                value = authDefaultUseFilename(value, file, path);

                if (Array.isArray(value)) {
                    return value;
                }

                if (typeof value === 'string') {

                    return value.replace('-', '_');
                }

                value.strategies = ['haute-couture'];

                return value;
            }
        },
    }

    const registerFunction = HauteCouture.composeWith({
        dirname: 'here',
        amendments
    });

    await server.register({
        name: 'test',
        register: registerFunction
    });

    await HauteCouture.compose(
        server,
        {},
        {
            dirname: 'something',
            amendments: {
                anything: {

                    useFilename(value) {

                        return value;
                    }
                }
            }
        }
    )

    // lib/routes.js
    // lib/routes/index.js
    // lib/routes/create.js
    // lib/routes/dogs/create.js
    const composeFunction: HauteCouture.HcComposeFunction<
        Hapi.ServerRoute | Hapi.ServerRoute[]
    > = (
        (server, options) => {

            return [{
                method: 'get',
                path: '/',
                handler: () => 'ok'
            }]
        }
    )

})();
