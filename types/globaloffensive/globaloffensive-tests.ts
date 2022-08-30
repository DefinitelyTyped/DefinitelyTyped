import SteamUser = require('steam-user');
import GlobalOffensive = require('globaloffensive');
import SteamID = require('steamid');

const user = new SteamUser();

type x = keyof typeof GlobalOffensive.GCConnectionStatus;

user.on('loggedOn', () => {
    console.log('logged on');
    user.setPersona(SteamUser.EPersonaState.Online);
    user.gamesPlayed(730);
});

const csgo = new GlobalOffensive(user);

csgo.on('connectedToGC', () => {
    console.log('connected to gc...');
    console.log('haveGCSession:', csgo.haveGCSession);
    console.log('inventory:', csgo.inventory);
    // do the important stuff

    // game related stuff
    csgo.requestGame('CSGO-yqcMw-zhh6Y-9mdJO-GGoFY-462NF');
    csgo.requestLiveGames();
    csgo.requestRecentGames('76561198814489169');
    csgo.requestLiveGameForUser(new SteamID('76561198814489169'));

    // with IDs (from link) and callback
    csgo.inspectItem('76561198998693595', '24253228054', '5687567561993251583', console.log);
    csgo.inspectItem(new SteamID('76561198998693595'), '24253228054', '5687567561993251583', console.log);
    // with link itself
    csgo.inspectItem(
        'steam://rungame/730/76561202255233023/+csgo_econ_action_preview%20S76561198998693595A24253228054D5687567561993251583',
    );

    csgo.requestPlayersProfile('76561198814489169');
    csgo.requestPlayersProfile(new SteamID('76561198814489169'), console.log);

    // storage container stuff
    csgo.nameItem('0', '21889083408', 'new name');
    csgo.deleteItem('123');
    csgo.addToCasket('21889083408', '23623636880');
    csgo.removeFromCasket('21889083408', '20336107414');
    csgo.getCasketContents('21889083408', (err, items) => {
        if (!err) console.log(items);
    });
});

// LISTENERS

csgo.on('disconnectedFromGC', reason => {
    console.log('disconnected:', reason);
});

csgo.on('accountData', accountData => {
    console.log('accountData:', accountData);
});

csgo.on('connectionStatus', (status, data) => {
    console.log(status, data);
});

csgo.on('matchList', (matches, data) => {
    console.log(matches);
    console.log(data);
});

csgo.on('inspectItemInfo', console.log);

csgo.on('inspectItemTimedOut', assetid => {
    console.log(`inspect item timed out (${assetid})`);
});

csgo.on('itemAcquired', console.log);

csgo.on('itemChanged', (oldItem, item) => {
    console.log(`item changed from ${oldItem} to ${item}`);
});

csgo.on('itemRemoved', item => {
    console.log(`item removed: ${item}`);
});

csgo.on('itemCustomizationNotification', (itemIds, notificationType) => {
    itemIds.forEach(itemId => {
        console.log(`item customized (${itemId}) (${notificationType})`);
    });
});

csgo.on('itemCustomizationNotification', (itemIds, notificationType) => {
    if (notificationType === GlobalOffensive.ItemCustomizationNotification.CasketInvFull) {
        console.log(`Storage unit ${itemIds[0]} is full`);
    }
});

csgo.on('playersProfile', console.log);

// log on with user, will start globaloffensive client too
user.logOn({
    accountName: 'accountName',
    password: 'password',
});
