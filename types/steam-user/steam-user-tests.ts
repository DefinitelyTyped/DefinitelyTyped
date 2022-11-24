import SteamUser = require('steam-user');
import SteamID = require('steamid');

console.log(SteamUser.formatCurrency(12.34, SteamUser.ECurrencyCode.USD));
console.log(SteamUser.formatCurrency(12345, SteamUser.ECurrencyCode.JPY));
console.log(SteamUser.formatCurrency(123.45, SteamUser.ECurrencyCode.EUR));

const user = new SteamUser();

user.on('loggedOn', () => {
    console.log('logged on');
    user.setPersona(SteamUser.EPersonaState.Snooze);
    user.setUIMode(SteamUser.EClientUIMode.Mobile);
});

user.on('error', (err) => {
    console.log(err);
    console.log(err.eresult);
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

user.getFriendsThatPlay(730).then(response => {
    // do something with response
});
user.chat.on('chatRoomGroupRoomsChange', details => {
    console.log(details.chat_group_id);
    console.log(details.default_chat_id);
    console.log(details.chat_rooms);
});

// ADDED IN v4.21.0

user.chat.createGroup(['76561197960287930', '76561197960287931', '76561197960287932']).then(response => {
    console.log(response.chat_group_id);
    console.log(response.state);
    console.log(response.user_chat_state);
}).catch(err => console.error(err));

user.chat.saveGroup('groupId', 'myAwesomeGroupName').catch(err => console.error(err));

user.chat.leaveGroup('groupId').catch(err => console.error(err));

user.chat.setGroupUserRoleState('groupId', new SteamID('76561197960287931'), 'roleId', true).catch(err => console.error);

user.chat.on('chatRoomGroupSelfStateChange', details => {
    console.log(details.chat_group_id);
    console.log(details.user_action);
    console.log(details.user_chat_group_state);
    console.log(details.group_summary);
});

user.chat.on('chatRoomGroupMemberStateChange', details => {
    console.log(details.chat_group_id);
    console.log(details.member);
    console.log(details.change);
});

user.chat.on('chatRoomGroupHeaderStateChange', details => {
    console.log(details.chat_group_id);
    console.log(details.header_state);
});

// ADDED / MODIFIED in v4.22.0
user.getOwnedApps((element) => {
    return element.package_id === 123;
});
user.ownsApp(456, (element, index) => {
    return element.package_id === 123 && index > 4;
});
user.getOwnedDepots((element, index, array) => {
    return array.length > 4;
});
user.ownsDepot(2, (element, index, array) => {
    return array.length > 4;
});
user.getOwnedPackages((element, index, array) => {
    return array.length > 4;
});
user.ownsPackage(4, (element, index, array) => {
    return array.length > 4;
});
user.getOwnedApps({ excludeFree: true });
user.ownsApp(456, { excludeExpiring: true });
user.getOwnedDepots({ excludeShared: true });
user.ownsDepot(2, {excludeExpiring: false, excludeFree: true});
user.getOwnedPackages({ excludeShared: false, excludeFree: false});
user.ownsPackage(4, {excludeExpiring: true, excludeFree: true, excludeShared: true });

// deprecated since v4.22.1
user.on('appOwnershipCached', () => { });
// not deprecated
user.on('ownershipCached', () => { });

// added in v4.23 revision, not necessarily part of that release tho
user.setOption('ownershipFilter', { excludeExpiring: false });
