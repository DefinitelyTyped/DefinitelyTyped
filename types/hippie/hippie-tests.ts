import hippie = require('hippie');

const URL = 'http://localhost:8080';

hippie()
  .json()
  .base(URL)
  .get('/users/vesln')
  .expectStatus(200)
  .expectHeader('Content-Type', 'application/json; charset=utf-8')
  .expectValue('username', 'vesln')
  .expectKey('repos')
  .expectValue('repos[0].name', 'jsmd')
  .expectBody({
    username: 'vesln',
    repos: [
      { name: 'jsmd' },
      { name: 'hippie' }
    ]
  })
  .expectBody(/vesln/g)
  .end((err, res, body) => {
    if (err) throw err;
    if (res.complete) console.log(body);
  });

hippie()
  .json()
  .get(URL)
  .expectStatus(200)
  .expectValue('login', 'vesln')
  .end((err, res, body) => {
    if (err) throw err;
  });

hippie()
  .json()
  .use((options, next) => {
    next(options);
  })
  .get(URL)
  .end((err, res, body) => {
    if (err) throw err;
  });

hippie()
  .serializer((params, fn) => {
    const err = new Error('Things went wrong');
    fn(err, typeof params);
  })
  .parser((body, fn) => {
    const err = new Error('Things went wrong');
    fn(err, JSON.parse(body));
  })
  .get(URL)
  .expectStatus(200)
  .end((err, res, body) => {
    if (err) throw err;
  });
