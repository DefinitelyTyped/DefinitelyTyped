import { core, payouts } from '@paypal/payouts-sdk';

declare const id: string;
declare const secret: string;

declare const currency: string;
declare const value: string;
declare const receiver: string;

const envLive = new core.LiveEnvironment(id, secret);
const client = new core.PayPalHttpClient(envLive);

const reqPost = new payouts.PayoutsPostRequest();
reqPost.headers.Authorization = envLive.authorizationString();
reqPost.requestBody({ sender_batch_header: {}, items: [{ amount: { currency, value }, receiver }] });
client
    .execute(reqPost)
    .then(res => {
        const result = res.result;
        const batchId = result?.batch_header?.payout_batch_id;
        if (batchId) {
            const reqGetBatch = new payouts.PayoutsGetRequest(batchId);
            reqGetBatch.headers.Authorization = envLive.authorizationString();
            return client.execute(reqGetBatch);
        }
    })
    .then(res => {
        const batchStatus = res?.result?.batch_header?.batch_status;
        if (batchStatus === 'SUCCESS') {
            // payout is successful
        }
        const batchItems = res?.result?.items;
        if (batchItems?.length) {
            const [firstItem] = batchItems;
            const reqItems = new payouts.PayoutsItemGetRequest(firstItem.payout_item_id);
            reqItems.headers.Authorization = envLive.authorizationString();
            return client.execute(reqItems);
        }
    })
    .then(res => {
        const txStatus = res?.result?.transaction_status;
        if (txStatus !== 'SUCCESS') {
            const itemId = res?.result?.payout_item_id;
            if (itemId) {
                const reqCancel = new payouts.PayoutsItemCancelRequest(itemId);
                reqCancel.headers.Authorization = envLive.authorizationString();
                return client.execute(reqCancel);
            }
        }
    })
    .then(res => {
        // handle cancellation response
    })
    .catch(error => {
        // do something with the error
    });
