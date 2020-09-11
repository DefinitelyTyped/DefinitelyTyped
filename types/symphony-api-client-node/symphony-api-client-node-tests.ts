import * as Symphony from 'symphony-api-client-node';

Symphony.initBot('/config.json')
    .then((authTokens: Symphony.AuthInfo) => {
        console.log(authTokens);
    })
    .catch((err: any) => {
        console.error(err);
    });
