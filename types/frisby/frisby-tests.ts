import * as frisby from 'frisby';

frisby.globalSetup({
    request: {
        headers: { 'X-Auth-Token': 'fa8426a0-8eaf-4d22-8e13-7c1b16a9370c' }
    }
});

describe('Test Suite 1', () => {
    it('should be a teapot get', (done) => {
        frisby.get(URL + '/users/3.json')
            .expect('status', 418)
            .done(done);
    });

    it('should be a teapot post', (done) => {
        frisby.post(URL + '/users/3.json')
            .expect('status', 418)
            .done(done);
    });

    it('should handle jest matchers', () => {
      const str = 'bar';
      expect(str).toHaveLength(3);
    });
});
