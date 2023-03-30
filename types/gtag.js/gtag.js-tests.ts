gtag('config', 'GA-TRACKING_ID');
gtag('config', 'GA-TRACKING_ID', { send_page_view: true });
gtag('config', 'GA-TRACKING_ID', { send_page_view: false });
gtag('config', 'GA-TRACKING_ID', {
    page_title: 'homepage',
    page_path: '/home',
});

gtag('event', 'login', {
    method: 'Google',
});
gtag('event', 'select_item', {
    item_list_id: 'related_products',
    item_list_name: 'Related products',
    items: [
        {
            item_id: 'SKU_12345',
            item_name: 'Stan and Friends Tee',
            affiliation: 'Google Merchandise Store',
            coupon: 'SUMMER_FUN',
            currency: 'USD',
            discount: 2.22,
            index: 0,
            item_brand: 'Google',
            item_category: 'Apparel',
            item_category2: 'Adult',
            item_category3: 'Shirts',
            item_category4: 'Crew',
            item_category5: 'Short sleeve',
            item_list_id: 'related_products',
            item_list_name: 'Related Products',
            item_variant: 'green',
            location_id: 'ChIJIQBpAG2ahYAR_6128GcTUEo',
            price: 9.99,
            quantity: 1,
        },
    ],
});
gtag('event', 'view_cart', {
    currency: 'USD',
    value: 7.77,
    items: [
        {
            item_id: 'SKU_12345',
            item_name: 'Stan and Friends Tee',
            affiliation: 'Google Merchandise Store',
            coupon: 'SUMMER_FUN',
            currency: 'USD',
            discount: 2.22,
            index: 0,
            item_brand: 'Google',
            item_category: 'Apparel',
            item_category2: 'Adult',
            item_category3: 'Shirts',
            item_category4: 'Crew',
            item_category5: 'Short sleeve',
            item_list_id: 'related_products',
            item_list_name: 'Related Products',
            item_variant: 'green',
            location_id: 'ChIJIQBpAG2ahYAR_6128GcTUEo',
            price: 9.99,
            quantity: 1,
        },
    ],
});
gtag('event', 'view_item', {
    currency: 'USD',
    value: 7.77,
    items: [
        {
            item_id: 'SKU_12345',
            item_name: 'Stan and Friends Tee',
            affiliation: 'Google Merchandise Store',
            coupon: 'SUMMER_FUN',
            currency: 'USD',
            discount: 2.22,
            index: 0,
            item_brand: 'Google',
            item_category: 'Apparel',
            item_category2: 'Adult',
            item_category3: 'Shirts',
            item_category4: 'Crew',
            item_category5: 'Short sleeve',
            item_list_id: 'related_products',
            item_list_name: 'Related Products',
            item_variant: 'green',
            location_id: 'ChIJIQBpAG2ahYAR_6128GcTUEo',
            price: 9.99,
            quantity: 1,
        },
    ],
});
gtag('event', 'view_item_list', {
    item_list_id: 'related_products',
    item_list_name: 'Related products',
    items: [
        {
            item_id: 'SKU_12345',
            item_name: 'Stan and Friends Tee',
            affiliation: 'Google Merchandise Store',
            coupon: 'SUMMER_FUN',
            currency: 'USD',
            discount: 2.22,
            index: 0,
            item_brand: 'Google',
            item_category: 'Apparel',
            item_category2: 'Adult',
            item_category3: 'Shirts',
            item_category4: 'Crew',
            item_category5: 'Short sleeve',
            item_list_id: 'related_products',
            item_list_name: 'Related Products',
            item_variant: 'green',
            location_id: 'ChIJIQBpAG2ahYAR_6128GcTUEo',
            price: 9.99,
            quantity: 1,
        },
    ],
});
gtag('set', 'user_properties', {
    favorite_composer: 'Mahler',
    favorite_instrument: 'double bass',
    season_ticketholder: 'true',
});
gtag('set', { currency: 'USD' });
gtag('js', new Date());
gtag('set', {
    country: 'US',
    currency: 'USD',
});
gtag('set', 'developer_id', true);
gtag('set', 'page_path', '/new_page.html');

gtag(
    'get',
    'GA-TRACKING_ID',
    'client_id',
    (
        clientId, // $ExpectType string | CustomParams | undefined
    ) => {},
);

gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    wait_for_update: 500,
});
gtag('consent', 'default', {
    ad_storage: 'denied',
    region: ['ES', 'US-AK'],
});
gtag('consent', 'default', {
    analytics_storage: 'denied',
});
