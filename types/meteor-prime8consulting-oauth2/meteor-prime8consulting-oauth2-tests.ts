

let str : string;
str = oAuth2Server.pubSubNames.authCodes;
str = oAuth2Server.pubSubNames.refreshTokens;

str = oAuth2Server.methodNames.authCodeGrant;

oAuth2Server.collections.refreshToken.find({});
oAuth2Server.collections.authCode.find({});
oAuth2Server.collections.accessToken.find({});
oAuth2Server.collections.client.find({});

let obj = oAuth2Server.oauthserver;

oAuth2Server.subscribeTo.authCode();

oAuth2Server.callMethod.authCodeGrant(
    'client_id',
    'redirect_uri',
    'response_type',
    ['scope1', 'scope'],
    'state',
    (err : Meteor.Error, result : OAuth2Server.AuthCodeGrantResult) => {

    }
);
