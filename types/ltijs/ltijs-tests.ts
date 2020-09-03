import { Request, Response } from 'express';
import { Provider, IdToken } from 'ltijs';

const ltiMinimal = new Provider('EXAMPLEKEY', {
    url: 'mongodb://localhost/database',
});

const idToken: IdToken = {
    iss: '',
    issuerCode: '',
    user: '',
    roles: [],
    userInfo: {
        given_name: 'Test',
        family_name: 'Test',
        name: 'Test Test',
        email: 'test@test',
    },
    platformInfo: {
        family_code: '',
        version: '1.0',
        name: 'Test',
        description: 'Test',
    },
    endpoint: {
        scope: [],
        lineItems: '',
        lineItem: '',
    },
};

const ltiAdvanced = new Provider(
    'EXAMPLEKEY',
    {
        url: 'mongodb://localhost/database',
        connection: {
            user: 'user',
            pass: 'pass',
        },
    },
    {
        appUrl: '/',
        loginUrl: '/login',
        sessionTimeoutUrl: '/sessionTimeout',
        invalidTokenUrl: '/invalidToken',
        keysetUrl: '/keys',
        staticPath: '/views',
        https: true,
        ssl: {
            key: 'privateKey',
            cert: 'certificate',
        },
        cookies: {
            secure: true,
            sameSite: 'None',
        },
        serverAddon: app => { },
    },
);

// $ExpectType true
ltiMinimal.onConnect(
    (connection, request, response) => {
        console.log(connection.endpoint);
        ltiMinimal.redirect(response, '/main');
    },
    {
        sessionTimeout: (req, res) => {
            return res.send('Session timed out');
        },
        invalidToken: (req, res) => {
            return res.send('Invalid token');
        },
    },
);

ltiAdvanced.app.get('/main', (req: Request, res: Response) => {
    res.send("It's alive!");
});

// $ExpectType true
ltiAdvanced.whitelist('/main', '/home', { route: '/route', method: 'POST' });

// $ExpectType true
ltiAdvanced.onDeepLinking((connection, request, response) => {
    ltiAdvanced.redirect(response, '/deeplink');
});

// $ExpectType Promise<true | undefined>
ltiMinimal.deploy({ serverless: true });

// $ExpectType Promise<true | undefined>
ltiAdvanced.deploy({ port: 4040, silent: true });

// $ExpectType Promise<false | Platform>
ltiAdvanced.registerPlatform({
    url: 'https://platform.url',
    name: 'Platform Name',
    clientId: 'TOOLCLIENTID',
    authenticationEndpoint: 'https://platform.url/auth',
    accesstokenEndpoint: 'https://platform.url/token',
    authConfig: { method: 'JWK_SET', key: 'https://platform.url/keyset' },
});

const items = [
    {
        type: 'ltiResourceLink',
        title: 'Title',
        custom: {
            resourceurl: '/path',
            resourcename: 'Name',
        },
    },
];

// $ExpectType Promise<string | false>
ltiAdvanced.DeepLinking.createDeepLinkingForm(idToken, items, {
    message: 'Done!',
    errmessage: 'Not done!',
    log: 'test',
    errlog: 'test',
});

// $ExpectType Promise<string | false>
ltiAdvanced.DeepLinking.createDeepLinkingMessage(idToken, items, {
    message: 'Done!',
    errmessage: 'Not done!',
    log: 'test',
    errlog: 'test',
});

const grade = {
    scoreGiven: 50,
    activityProgress: 'Completed',
    gradingProgress: 'FullyGraded',
};

// $ExpectType Promise<boolean>
ltiAdvanced.Grade.scorePublish(idToken, grade);

// $ExpectType Promise<false | RetrievedGrade[]>
ltiAdvanced.Grade.result(idToken, { userId: true });

// $ExpectType Promise<false | MembersResult>
ltiAdvanced.NamesAndRoles.getMembers(idToken);

ltiAdvanced.app.get('/any', (request: Request, response: Response) => {
    // $ExpectType PlatformContext | undefined
    response.locals.context;

    // $ExpectType IdToken | undefined
    response.locals.token;
});
