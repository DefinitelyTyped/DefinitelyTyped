import * as frisby from 'frisby';

frisby.globalSetup({
    request: {
        headers: { 'X-Auth-Token': 'fa8426a0-8eaf-4d22-8e13-7c1b16a9370c' },
    },
});

frisby
    .get(URL + '/users/3.json')
    .expect('status', 418)
    .done(() => {});

frisby
    .post(URL + '/users/3.json')
    .expect('status', 418)
    .done(() => {});

frisby
    .get(URL + '/users/3.json')
    .promise()
    .then(response => {
        response.json;
    });

frisby
    .get(URL + '/users/3.json')
    .then(response => {
        return response.responseTime;
    })
    .promise()
    .then(responseTime => {
        const time: number = responseTime;
    });

frisby
    .get(URL + '/users/3.json')
    .then(response => {
        return response.responseTime;
    })
    .then(responseTime => {
        const time: number = responseTime;
    })
    .done(() => {});

frisby
    .get(URL + '/users/3.json')
    .then(async response => {
        return response.responseTime;
    })
    .then(async responseTime => {
        const time: number = responseTime;
    })
    .done(() => {});

frisby
    .get(URL + '/users/3.json')
    .expect('json', { id: 1 })
    .then(frisby.get(URL + '/users/3.json'))
    .done(() => {});

frisby
    .get(URL + '/users/3.json')
    .expect('json', { id: 1 })
    .catch(err => {})
    .done(() => {});
