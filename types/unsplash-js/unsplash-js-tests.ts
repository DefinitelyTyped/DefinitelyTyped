import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({
    accessKey: '{APP_ACCESS_KEY}',
    secret: '{APP_SECRET}',
});

const authenticationUrl = unsplash.auth.getAuthenticationUrl([
    'public',
    'read_user',
    'write_user',
    'read_photos',
    'write_photos',
    'write_likes',
    'write_followers',
    'read_collections',
    'write_collections'
]);

unsplash.auth
    .userAuthentication('{OAUTH_CODE}')
    .then(toJson)
    .then(json => {
        unsplash.auth.setBearerToken(json.access_token);
    });

unsplash.currentUser.profile();

unsplash.currentUser.updateProfile({
    username: 'drizzy',
    firstName: 'Aubrey',
    lastName: 'Graham',
    email: 'drizzy@octobersveryown.com',
    url: 'http://octobersveryown.com',
    location: 'Toronto, Ontario, Canada',
    bio: 'Views from the 6',
    instagramUsername: 'champagnepapi',
});

unsplash.users.profile('naoufal');

unsplash.users.statistics('naoufal', 'days', 30);

unsplash.users.photos('naoufal', 1, 10, 'latest', {
    orientation: 'landscape',
    stats: true
});

unsplash.users.likes('naoufal', 2, 15, 'latest', { orientation: 'landscape' });

unsplash.users.collections('naoufal', 2, 15, 'updated');

unsplash.photos.listPhotos(2, 15, 'latest');

unsplash.photos.getPhoto('mtNweauBsMQ');

unsplash.photos.getPhotoStats('mtNweauBsMQ');

unsplash.photos.getRandomPhoto({ username: 'naoufal' });

unsplash.photos.likePhoto('mtNweauBsMQ');

unsplash.photos.unlikePhoto('mtNweauBsMQ');

unsplash.photos
    .getPhoto('mtNweauBsMQ')
    .then(toJson)
    .then(json => {
        unsplash.photos.downloadPhoto(json);
        unsplash.photos.trackDownload(json);
    });

unsplash.collections.listCollections(1, 10);

unsplash.collections.getCollection(123456);

unsplash.collections.getCollectionPhotos(123456, 1, 10, 'latest', { orientation: 'landscape' });

unsplash.collections.createCollection('Birds', "Wild birds from 'round the world", true);

unsplash.collections.updateCollection(12345, 'Wild Birds', 'Wild birds from around the world', false);

unsplash.collections.deleteCollection(42);

unsplash.collections.addPhotoToCollection(88, 'abc1234');

unsplash.collections.removePhotoFromCollection(88, 'abc1234');

unsplash.collections.listRelatedCollections(88);

unsplash.search.photos('dogs', 1, 0, {
    orientation: 'landscape',
    contentFilter: 'low',
    color: 'black',
    orderBy: 'latest',
    lang: 'en',
    collections: [1, 2],
});

unsplash.search.users('steve', 1);

unsplash.search.collections('dogs', 1);

unsplash.stats.total();
