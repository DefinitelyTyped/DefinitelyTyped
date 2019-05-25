import { IncomingMessage } from "http";
import { Issuer, generators } from "openid-client";

async (req: IncomingMessage) => {
    const issuer = await Issuer.discover('https://accounts.google.com');
    console.log('Discovered issuer %O', issuer.metadata.issuer);

    issuer.keystore();
    issuer.keystore(true);

    //

    const client = new issuer.Client({
        client_id: 'c',
        client_secret: 's',
        redirect_uris: ['http://localhost:3000/cb'],
        response_types: ['code'],
    });
    console.log(client.metadata.client_id);

    //

    const code_verifier = generators.codeVerifier();

    const code_challenge = generators.codeChallenge(code_verifier);

    //

    client.authorizationUrl({
        scope: 'openid email profile',
        response_mode: 'form_post',
        nonce: 'nonce',
        resource: 'https://my.api.example.com/resource/32178',
        code_challenge,
        code_challenge_method: 'S256',
    }).substring(0);

    //

    const params = client.callbackParams(req);
    const callbackResponse = await client.callback('https://client.example.com/callback', params, { code_verifier });
    console.log(callbackResponse.id_token, callbackResponse.access_token, callbackResponse.refresh_token);
    console.log(callbackResponse.expired(), callbackResponse.claims()["some claim name"]);

    //

    await client.userinfo("access token");
    const userinfo = await client.userinfo(callbackResponse);
    console.log(userinfo["some user info name"]);

    //

    const grantResponse = await client.grant({
        grant_type: "client_credentials",
        acr_values: "acr_values",
    });
    console.log(grantResponse.access_token);

    //

    const introspectResponse = await client.introspect("token");
    console.log(introspectResponse["some claim name"]);

    client.introspect("token", "tokenTypeHint");

    client.introspect("token", "tokenTypeHint", {});
    client.introspect("token", "tokenTypeHint", { introspectBody: {} });

    //

    client.endSessionUrl({ id_token_hint: "id_token_hint" }).substring(0);
};
