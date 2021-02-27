import {
  identify,
  init,
  track,
  trackForm,
  trackLink,
  page,
  group,
  alias,
  ready,
  debug,
  on,
  timeout,
  reset
} from 'segment-api';

  init('abc');
identify('johndoe');
identify('johndoe', {
  address: {
    city: 'x', country: 'y', postalCode: '123', state: 'alabina', street: '8th'
  },
  age: 22,
  avatar: 'http://1234234234',
  birthday: '2001-01-02',
  company: {
    id: 123,
    name: 'alaxara',
    industry: 'it',
    plan: 'golden',
    employee_count: 123
  },
  createdAt: '2020-05-25',
  description: 'description',
  email: 'email@host.com',
  firstName: 'John',
  gender: 'male',
  id: '09w384u5t03[',
  lastName: 'Doe',
  name: 'John Doe',
  title: 'PhD',
  username: 'johndoe',
  website: 'https://johndoe.com'
}, { y: 2 }, err => console.log('error:', err));
track('x', { x: 1 }, { y: 2 }, err => console.log('error:', err));
trackLink(document.createElement('div'), 'event', { x: 1 });
trackLink(document.createElement('div'), () => 'event', () => ({ x: 1 }));
trackForm(document.createElement('form'), 'event', { x: 1 });
trackForm(document.createElement('form'), () => 'event', () => ({ x: 1 }));
page();
page('x', 'y', { z: 1 }, { a: 2 }, err => console.log(err));
group('a', { age: 1 }, { y: 1 }, err => console.log(err));
ready(() => console.log('ready'));
debug();
debug(false);
alias('x', 'y', { x: 1 }, err => console.log(err));
on('track', () => console.log('track fired'));
timeout(100);
reset();
