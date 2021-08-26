import SteamAPI = require('steamapi');

const api = new SteamAPI('XXXXXXXXX');

api.getAppList().then(res => {
    // do something with the result
});

api.getFeaturedCategories().then(res => {
    // do something with the result
});

api.getFeaturedGames().then(res => {
    // do something with the result
});

api.getGameAchievements('730').then(res => {
    // do something with the result
});

api.getGameDetails('730').then(res => {
    // do something with the result
});

api.getGameNews('730').then(res => {
    // do something with the result
});

api.getGamePlayers('730').then(res => {
    // do something with the result
});

api.getGameSchema('730').then(res => {
    // do something with the result
});

api.getServers('69.69.69.69').then(res => {
    // do something with the result
});

api.getUserAchievements('76561197960287930', '730').then(res => {
    // do something with the result
});

api.getUserBadges('76561197960287930').then(res => {
    // do something with the result
});

api.getUserBans('76561197960287930').then(res => {
    // do something with the result
});

api.getUserFriends('76561197960287930').then(res => {
    // do something with the result
});

api.getUserGroups('76561197960287930').then(res => {
    // do something with the result
});

api.getUserLevel('76561197960287930').then(res => {
    // do something with the result
});

api.getUserOwnedGames('76561197960287930').then(res => {
    // do something with the result
});

api.getUserRecentGames('76561197960287930').then(res => {
    // do something with the result
});

api.getUserServers().then(res => {
    // do something with the result
});

api.getUserStats('76561197960287930', '730').then(res => {
    // do something with the result
});

api.getUserSummary('76561197960287930').then(res => {
    // do something with the result
});
