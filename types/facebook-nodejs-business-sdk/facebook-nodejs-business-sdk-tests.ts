import {
    AdAccount,
    Content,
    CustomData,
    EventRequest,
    FacebookAdsApi,
    ServerEvent,
    UserData,
    IGUser,
    InstagramInsightsResult
} from 'facebook-nodejs-business-sdk';
import { FacebookRequestError } from 'facebook-nodejs-business-sdk/src/exceptions';
import TEventRequest from "facebook-nodejs-business-sdk/src/objects/serverside/event-request";

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

async function testConversionEvent(): Promise<TEventRequest> {
    const userData = (new UserData())
        .setEmails(['joe@eg.com'])
        .setPhones(['12345678901', '14251234567']);

    const content = (new Content())
        .setId('product123');

    const customData = (new CustomData())
        .setContents([content]);

    const serverEvent = (new ServerEvent())
        .setEventName('Purchase')
        .setEventTime(123)
        .setUserData(userData)
        .setCustomData(customData);

    const eventsData = [serverEvent];
    const eventRequest = (new EventRequest('access_token', 'pixel_id'))
        .setEvents(eventsData);
    return eventRequest;
}

throw new FacebookRequestError({}, 'GET', 'url', 'data');

async function checkStaticFields() {
    const fields = [IGUser.Fields.biography, IGUser.Fields.follows_count];
    const metrics = [InstagramInsightsResult.Metric.reach, InstagramInsightsResult.Metric.shares];
}
