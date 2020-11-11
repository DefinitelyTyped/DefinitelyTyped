import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

// Create Rest API Instance
const api: WooCommerceRestApi = new WooCommerceRestApi({
    url: 'http://example.com',
    consumerKey: 'ck_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    consumerSecret: 'cs_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    version: 'wc/v3',
});

const get_result: Promise<any> = api.get('/');
const get_result_2: Promise<any> = api.get('/', {});

const post_result: Promise<any> = api.post('/', {});
const post_result_2: Promise<any> = api.post('/', {}, {});

const put_result: Promise<any> = api.put('/', {});
const put_result_2: Promise<any> = api.put('/', {}, {});

const delete_result: Promise<any> = api.delete('/');
const delete_result_2: Promise<any> = api.delete('/', {});

const options_result: Promise<any> = api.options('/');
const options_result_2: Promise<any> = api.options('/', {});
