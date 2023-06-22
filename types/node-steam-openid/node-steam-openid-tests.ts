import SteamAuth = require('node-steam-openid');

const steam = new SteamAuth({
    realm: 'http://localhost:5000', // Site name displayed to users on logon
    returnUrl: 'http://localhost:5000/auth/steam/authenticate', // Your return route
    apiKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXX', // Steam API key
});

steam; // $ExpectType SteamAuth

steam.getRedirectUrl(); // $ExpectType Promise<string>

try {
    const user = steam.authenticate({});
    user; // $ExpectType Promise<UserObject>
    // ...do something with the data
} catch (error) {
    console.error(error);
}
