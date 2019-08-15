import TeamSpeak3 = require('ts3-nodejs-library');

const ts3 = new TeamSpeak3({
    username: 'serveradmin',
    password: 'password',
    nickname: 'My TS3 Bot'
});

async function main() {
    const me = await ts3.whoami();
    // Add other tests here.
}

main();
