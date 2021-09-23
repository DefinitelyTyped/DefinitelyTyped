import SteamUser = require('steam-user');

console.log(SteamUser.formatCurrency(12.34, SteamUser.ECurrencyCode.USD));
console.log(SteamUser.formatCurrency(12345, SteamUser.ECurrencyCode.JPY));
console.log(SteamUser.formatCurrency(123.45, SteamUser.ECurrencyCode.EUR));

const user = new SteamUser();

user.on('loggedOn', () => {
    console.log('logged on');
    user.setPersona(SteamUser.EPersonaState.Snooze);
    user.setUIMode(SteamUser.EClientUIMode.Mobile);
});

user.chat.on('chatMessage', (message) => {
    console.log('Got new message!');
    console.log(message.message_no_bbcode);
});

user.setOption('autoRelogin', true);

user.setOptions({language: 'spanish', saveAppTickets: true});

user.logOn({
    accountName: 'user123',
    password: 'password',
});
user.logOff();
user.relog();

user.requestValidationEmail().catch(err => console.error(err));

user.enableTwoFactor().then(response => {
    // do something with response
}).catch(err => console.error(err));

user.finalizeTwoFactor(Buffer.from('iwpergjawhirgos'), 'active').then(response => {
    // do something with response
}).catch(err => console.error(err));

user.getSteamGuardDetails().then(response => {
    // do something with response
}).catch(err => console.error(err));

user.getPrivacySettings();

user.gamesPlayed(730);
user.getPlayerCount(730).then(response => {
    // do something with response
}).catch(err => console.error(err));

user.serverQuery({
    app_id: 730
}).then(response => {
    // do something with response
}).catch(err => console.error(err));

user.getProductChanges(2).then(response => {
    // do something with response
}).catch(err => console.error(err));

user.getProductInfo([730], [420]).then(response => {
    // do something with response
}).catch(err => console.error(err));

const owned = user.getOwnedApps();
console.log(owned);

console.log((user.ownsApp(730)));

user.getStoreTagNames('spanish', [1]).then(response => {
    // do something with response
}).catch(err => console.error(err));

user.addFriend('76561197960287930').then(response => {
    // do something with response
}).catch(err => console.error(err));
user.removeFriend('76561197960287930');

user.createQuickInviteLink().then(response => {
    // do something with response
}).catch(err => console.error(err));

user.listQuickInviteLinks().then(response => {
    // do something with response
}).catch(err => console.error(err));

console.log(user.getQuickInviteLinkSteamID('www.steamcommunity.com/quickinvite/123456780'));

user.redeemQuickInviteLink('www.steamcommunity.com/quickinvite/123456780').catch(err => console.error(err));

user.getPersonas(['76561197960287930']).then(response => {
    // do something with response
}).catch(err => console.error(err));

user.getSteamLevels(['76561197960287930']).then(response => {
    // do something with response
}).catch(err => console.error(err));

user.getAliases(['76561197960287930']).then(response => {
    // do something with response
}).catch(err => console.error(err));

user.getTradeURL().then(response => {
    // do something with response
}).catch(err => console.error(err));

user.getEmoticonList().then(response => {
    // do something with response
}).catch(err => console.error(err));

user.chat.getFriendMessageHistory('76561197960287930').then(response => {
    // do something with response
}).catch(err => console.error(err));
