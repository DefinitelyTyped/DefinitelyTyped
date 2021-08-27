import { YelpFusionPlus } from 'yelp-fusion-plus';

// $ExpectType LocationBusinessesSearchRequest
YelpFusionPlus.CreateLocationBusinessesSearchRequest({
    location: 'New York',
});

// $ExpectType Business
YelpFusionPlus.CreateBusiness({
    alias: '',
    coordinates: {
        latitude: 100,
        longitude: -100,
    },
    display_phone: '',
    distance: 100,
    id: '',
    is_closed: false,
    rating: 5,
    review_count: 10,
    image_url: '',
    location: {
        address1: '',
        address2: '',
        address3: '',
        city: '',
        country: '',
        cross_streets: '',
        display_address: ['', ''],
        state: '',
        zip_code: '',
    },
    name: '',
    phone: '',
    url: '',
});
