import { AdAccount, FacebookAdsApi } from 'facebook-nodejs-business-sdk';

async function testGetAds(): Promise<Record<string, string>[]> {
    const ads = [];

    const fbAdsApi = new FacebookAdsApi('TOKEN');
    fbAdsApi.setDebug(true);

    const fbAdAccount = new AdAccount(`act_ID`, undefined, undefined, fbAdsApi);
    const cursor = fbAdAccount.getAds(['id', 'name'], { limit: 10 }, false);

    while (cursor.hasNext()) {
        await cursor.next();

        for (const response of cursor) {
            ads.push({
                id: response.id,
                name: response.name,
            });
        }
    }

    return ads;
}
