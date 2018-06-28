import { getProfile, OverwatchPlatform, OverwatchServerRegion, ProfileApiResponse, owl } from 'overwatch-api';

const platform: OverwatchPlatform = 'pc';
const region: OverwatchServerRegion = 'us';
const battleTag = 'sparK#12434';

getProfile(platform, region, battleTag, (err: Error | null, data: ProfileApiResponse) => {
    if (err === null) {
        console.log(`Username: ${data.username}`);
        console.log(`Level: ${data.level}`);
        console.log(`Rank: ${data.competitive.rank} SR`);
        console.log(`Win Rate in Competitive: ${data.games.competitive.win_rate}`);
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
