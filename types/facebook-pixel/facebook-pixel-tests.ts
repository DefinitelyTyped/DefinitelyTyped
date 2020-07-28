

fbq('init', '<FB_PIXEL_ID>');

// https://developers.facebook.com/ads/blog/post/2017/11/28/event-tracking-with-multiple-pixels-tracksingle/
var viewContentParam:facebook.Pixel.ViewContentParameters = {currency: 'EUR', value: 15.23};
fbq('trackSingle', '<FB_PIXEL_ID>', 'ViewContent', viewContentParam);
fbq('trackSingleCustom', '<FB_PIXEL>', 'CustomContent', {});

fbq('track', 'PageView');

// Standard event (can be used for conversion tracking
// and optimizing in addition to audience building)
var purchaseParam:facebook.Pixel.PurchaseParameters = {currency: 'EUR', value: 15.23};
fbq('track', 'Purchase', purchaseParam);

// Legacy conversion event (can only be used for conversion
// tracking and optimizing)

// Custom event (can only be used for audience building)

var custom_params = {
    custom_param: 'custom_value',
    content_type: 'product'
};
fbq('trackCustom', 'MyCustomEvent', custom_params);

// Reach customers that viewed a product in the 'Shoes' category
// with a price greater than $100
fbq('track', 'ViewContent', {
    content_name: 'Really Fast Running Shoes',
    content_category: 'Apparel & Accessories > Shoes',
    content_ids: ['1234'],
    content_type: 'product',
    value: 0.50,
    currency: 'USD'
});

// Multiple events can also be added to each page.  Ex: Reach visitors
// based on information about them and how they got to the page
// that Registered in the last n days
fbq('track', 'ViewContent', {
    content_name: 'The Avengers Trailer',
    content_category: 'Entertainment',
    value: 1.50,
    currency: 'USD',
});

fbq('track', 'CompleteRegistration', {currency: 'USD', value: 0.75});
