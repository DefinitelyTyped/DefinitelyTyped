import { activateRoom, ActivateRoomResponse, initBot, AuthInfo } from 'symphony-api-client-node';

initBot('/config.json')
    .then((authTokens: AuthInfo) => {
        console.log(authTokens);
    })
    .catch((err: any) => {
        console.error(err);
    });

activateRoom('streamId').then((resp: ActivateRoomResponse) => {
    console.log(resp.roomAttributes);
});
