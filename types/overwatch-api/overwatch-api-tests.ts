import { getProfile, OverwatchPlatform, OverwatchServerRegion, ProfileApiResponse, owl, getStats, StatsApiResponse, CompetitiveTopHeroData } from 'overwatch-api';

const platform: OverwatchPlatform = 'pc';
const region: OverwatchServerRegion = 'us';
const battleTag = 'sparK#12434';

getProfile(platform, region, battleTag, (err: Error | null, data: ProfileApiResponse) => {
    if (err === null) {
        if (data.private) {
            console.log(`Profile for battletag ${battleTag} is private, cannot retrieve profile`);
        } else {
            console.log(`Username: ${data.username}`);
            console.log(`Level: ${data.level}`);
            console.log(`Rank: ${data.competitive.rank} SR`);
            console.log(`Win Rate in Competitive: ${data.games.competitive.win_rate}`);
        }
    } else {
        console.log(err);
    }
});

getStats(platform, region, battleTag, (err: Error | null, data: StatsApiResponse) => {
    if (err === null) {
        if (data.private) {
            console.log(`Profile for battletag ${battleTag} is private, cannot retrieve stats`);
        } else {
            console.log(`Username: ${data.username}`);
            console.log(`Level: ${data.level}`);
            console.log(`Competitive Stats`);
            const topHeroesComp: CompetitiveTopHeroData = data.stats.top_heroes.competitive;
            console.log(`Hero with most games won: ${topHeroesComp.games_won[0].hero}`);
            console.log(`Hero with highest winrate: ${topHeroesComp.win_rate[0].hero}`);
            console.log(`Hero with most time played ${topHeroesComp.played[0].hero}\n`);

            for (const stat of data.stats.game.competitive) {
                console.log(`${stat.title}: ${stat.value}`);
            }
        }
    } else {
        console.log(err);
    }
});

owl.getStandings((err: Error | null, data: owl.ApiResponse<owl.TeamStandingInfo[]>) => {
    if (err === null) {
        const standingInfo: owl.TeamStandingInfo = data.data[0];
        console.log(`${standingInfo.name} - ${standingInfo.abbreviatedName}`);
    } else {
        console.log(err);
    }
});
