import { AdAccount, FacebookAdsApi } from 'facebook-nodejs-business-sdk';

async function testGetAds(): Promise<Record<string, string>[]> {
    const ads = [];

    const fbAdsApi = new FacebookAdsApi('TOKEN');
    fbAdsApi.setDebug(true);

    const fbAdAccount = new AdAccount(`act_ID`, undefined, undefined, fbAdsApi);
    const cursor = fbAdAccount.getAds(['field1', 'field2'], { limit: 10 }, false);

    while (cursor.hasNext()) {
        await cursor.next();

        for (const response of cursor) {
            for (const insight of response.insights.data) {
                ads.push({
                    id: response.id,
                    name: response.name,
                    status: response.status,
                    createdTime: response.created_time,
                    campaignId: insight.campaign_id,
                    campaignName: insight.campaign_name,
                    adSetId: insight.adset_id,
                    adSetName: insight.adset_name,
                    spend: insight.spend,
                    cpc: insight.cpc,
                    clicks: insight.clicks,
                });
            }
        }
    }

    return ads;
}
