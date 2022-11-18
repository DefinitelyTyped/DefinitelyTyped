import {
    AdAccount,
    FacebookAdsApi,
    UserData,
    Content,
    CustomData,
    ServerEvent,
    EventRequest
} from 'facebook-nodejs-business-sdk';
import { FacebookRequestError } from 'facebook-nodejs-business-sdk/src/exceptions';
import TEventRequest from 'facebook-nodejs-business-sdk/src/objects/serverside/event-request';

async function testGetAds(): Promise<Array<Record<string, string>>> {
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
