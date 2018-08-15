import Steam = require("steam-client");

const steamClient = new Steam.CMClient(Steam.EConnectionProtocol.TCP);

steamClient.connect();
steamClient.connect(Steam.servers[0]);
steamClient.connect(Steam.servers[0], true);

steamClient.disconnect();

steamClient.on<'connected'>('connected', (serverLoad) => {
    steamClient.logOn({
        account_name: serverLoad,
        password: "password"
    });
});

Steam.servers.forEach((server) => server.host);

steamClient.on<'logOnResponse'>('logOnResponse', (details) => {
    return details.eresult + details.webapi_authenticate_user_nonce;
});

steamClient.send({
    msg: Steam.EMsg.ClientGetFinalPrice,
    proto: {
        eresult: Steam.EResult.AdministratorOK
    }
}, new Buffer("lol"), (header, body) => {
    return header.msg + body.reverse().toString();
});

steamClient.bind("127.0.0.1", 80);

if (steamClient.loggedOn) {
    console.log(steamClient.steamID);
    console.log(steamClient.remoteAddress);
}
