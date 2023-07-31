import Apicalypse from 'apicalypse';

// $ExpectType Apicalypse
Apicalypse({
    baseURL: 'https://my-api.url',
    queryMethod: 'url',
    auth: {
        username: 'user',
        password: 'pass',
    },
    headers: {
        Accept: 'application/json',
    },
    responseType: 'json',
    timeout: 30000,
});

// $ExpectType Promise<AxiosResponse<any>>
Apicalypse()
    .fields('id,slug,name')
    .fields(['rating', 'popularity'])
    .sort('rating desc')
    .sort('name', 'asc')
    .limit(10)
    .offset(20)
    .where('rating > 0; popularity > 10')
    .where(['popularity < 100', 'first_release_date > 788918400'])
    .request('/games');

// $ExpectType Promise<any[]>
Apicalypse()
    .search('title')
    .requestAll('/games');

// $ExpectType Promise<any[]>
Apicalypse()
    .search('title')
    .requestAll('/games', {});

// $ExpectType Promise<any[]>
Apicalypse()
    .search('title')
    .requestAll('/games', {
        concurrency: 2,
        delay: 500,
    });

// $ExpectType Apicalypse
Apicalypse().multi([
    Apicalypse()
        .query('/games', 'game')
        .where('id == 1081'),
    Apicalypse()
        .query('/achievements', 'achievements')
        .where('game_id == 1081'),
]);
