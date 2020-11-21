import * as frisby from 'frisby';

frisby.globalSetup({
    request: {
        headers: { 'X-Auth-Token': 'fa8426a0-8eaf-4d22-8e13-7c1b16a9370c' }
    }
});

frisby.get(URL + '/users/3.json')
  .expect('status', 418)
  .done(() => {});

frisby.post(URL + '/users/3.json')
  .expect('status', 418)
  .done(() => {});
