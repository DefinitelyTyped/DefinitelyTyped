import MobxCookie from 'mobx-cookie';

// Declare a reactive mobx cookie that last for 20 days
const mobxCookie = new MobxCookie('TEST_MOBX_COOKIE', {expires: 20});

// Set a new value for the cookie that last for 10 days
mobxCookie.set('MY_VALUE', {expires: 10});

const cookieValue = mobxCookie.get();

mobxCookie.remove();
