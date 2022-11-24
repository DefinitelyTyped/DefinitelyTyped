import { AdAccount, FacebookAdsApi } from 'facebook-nodejs-business-sdk';
import { FacebookRequestError } from 'facebook-nodejs-business-sdk/src/exceptions';

async function testGetAdsFetchFirstPageFalse(): Promise<Array<Record<string, string>>> {
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

async function testGetAdsFetchFirstPageDefault(): Promise<Array<Record<string, string>>> {
    const ads = [];

    const fbAdsApi = new FacebookAdsApi('TOKEN');
    fbAdsApi.setDebug(true);

    const fbAdAccount = new AdAccount(`act_ID`, undefined, undefined, fbAdsApi);
    const cursor = await fbAdAccount.getAds(['id', 'name'], { limit: 10 });

    while (true) {
        for (const response of cursor) {
            ads.push({
                id: response.id,
                name: response.name,
            });
        }

        if (cursor.hasNext()) {
            await cursor.next();
        } else {
            break;
        }
    }

    return ads;
}

async function testGetAdsFetchFirstPageBoolean(): Promise<Array<Record<string, string>>> {
    const ads = [];

    const fbAdsApi = new FacebookAdsApi('TOKEN');
    fbAdsApi.setDebug(true);

    const fbAdAccount = new AdAccount(`act_ID`, undefined, undefined, fbAdsApi);
    const fetchFirstPage = Math.random() > 0.5;
    const cursorOrPromise = fbAdAccount.getAds(['id', 'name'], { limit: 10 }, fetchFirstPage);
    const cursor = cursorOrPromise instanceof Promise ? await cursorOrPromise : cursorOrPromise;

    while (true) {
        if (!fetchFirstPage) {
            await cursor.next();
        }

        for (const response of cursor) {
            ads.push({
                id: response.id,
                name: response.name,
            });
        }

        if (cursor.hasNext()) {
            await cursor.next();
        } else {
            break;
        }
    }

    return ads;
}

async function checkType() {
    const fbAdsApi: FacebookAdsApi = new FacebookAdsApi('TOKEN');
    const fbAdAccount: AdAccount = new AdAccount(`act_ID`, undefined, undefined, fbAdsApi);
}

throw new FacebookRequestError({}, 'GET', 'url', 'data');
