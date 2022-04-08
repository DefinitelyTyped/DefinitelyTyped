import i18next from 'i18next';
import Backend, { i18nextFsBackend } from 'i18next-fs-backend';

//#region Plain options

const plainOptions: { backend: i18nextFsBackend.i18nextFsBackendOptions } = {
    backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
        addPath: '/locales/{{lng}}/{{ns}}.missing.json',
        ident: 2,
        parse: JSON.parse,
        stringify: JSON.stringify
    }
};

i18next.use(Backend).init(plainOptions);
i18next.use(Backend).init({ backend: plainOptions.backend });

//#endregion
//#region Custom loadPath resolver

const loadPathOptions: { backend: i18nextFsBackend.i18nextFsBackendOptions } = {
    backend: {
        loadPath: (lng: string, ns: string) => `/locales/${lng}/${ns}.json`,
        addPath: '/locales/{{lng}}/{{ns}}.missing.json',
        ident: 2,
        parse: JSON.parse,
        stringify: JSON.stringify
    }
};

i18next.use(Backend).init(loadPathOptions);
i18next.use(Backend).init({ backend: loadPathOptions.backend });

//#endregion
//#region Custom parse & stringify

const parseStringifyOptions: { backend: i18nextFsBackend.i18nextFsBackendOptions } = {
    backend: {
        loadPath: (lng: string, ns: string) => `/locales/${lng}/${ns}.json`,
        addPath: '/locales/{{lng}}/{{ns}}.missing.json',
        ident: 2,
        parse: (data: string) => JSON.parse(data),
        stringify: (data: unknown) => JSON.stringify(data)
    }
};

i18next.use(Backend).init(parseStringifyOptions);
i18next.use(Backend).init({ backend: parseStringifyOptions.backend });

//#endregion
