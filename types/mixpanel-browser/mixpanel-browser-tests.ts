import mixpanel = require('mixpanel-browser');

const lib = mixpanel.init('new token', { secure_cookie: true }, 'library_name');
lib.track('event name');
mixpanel.push(['register', { a: 'b' }]);
mixpanel.disable();
mixpanel.track('Registered', {Gender: 'Male', Age: 21});
mixpanel.track_links('#nav', 'Clicked Nav Link');
mixpanel.track_forms('#register', 'Created Account');
mixpanel.time_event('Registered');
mixpanel.track('Registered', {Gender: 'Male', Age: 21});
mixpanel.track('Left page', {duration_seconds: 35}, {transport: 'sendBeacon'});
mixpanel.register({Gender: 'Female'});
mixpanel.register({
  Email: 'jdoe@example.com',
  'Account Type': 'Free'
});
mixpanel.register_once({
  'First Login Date': new Date().toISOString()
});
mixpanel.init('YOUR PROJECT TOKEN', {
  loaded: (mixpanel) => {
      const distinct_id = mixpanel.get_distinct_id();
  }
});
mixpanel.alias('new_id', 'existing_id');
mixpanel.alias('newer_id', 'new_id');
mixpanel.init('YOUR PROJECT TOKEN', {
  loaded: (mixpanel) => {
      const user_id = mixpanel.get_property('user_id');
  }
});
mixpanel.opt_in_tracking();
mixpanel.opt_in_tracking({
    track_event_name: 'User opted in',
    track_event_properties: {
        Email: 'jdoe@example.com'
    },
    cookie_expiration: 30,
    secure_cookie: true
});
mixpanel.opt_out_tracking();
mixpanel.opt_out_tracking({
    cookie_expiration: 30,
    secure_cookie: true
});
const has_opted_in = mixpanel.has_opted_in_tracking();
const has_opted_out = mixpanel.has_opted_out_tracking();
mixpanel.clear_opt_in_out_tracking();
mixpanel.clear_opt_in_out_tracking({
    cookie_expiration: 30,
    secure_cookie: true
});
mixpanel.people.set('gender', 'm');
mixpanel.people.set({
    Company: 'Acme',
    Plan: 'Premium',
    'Upgrade date': new Date()
});
mixpanel.people.set_once('First Login Date', new Date());
mixpanel.people.set_once({
    'First Login Date': new Date(),
    'Starting Plan': 'Premium'
});
mixpanel.people.unset('gender');
mixpanel.people.unset(['gender', 'Company']);
mixpanel.people.increment('page_views', 1);
mixpanel.people.increment('page_views');
mixpanel.people.increment('credits_left', -1);
mixpanel.people.increment({
    counter1: 1,
    counter2: 6
});
mixpanel.people.append('pages_visited', 'homepage');
mixpanel.people.append({
    list1: 'bob',
    list2: 123
});
mixpanel.people.union('pages_visited', 'homepage');
mixpanel.people.union({
    list1: 'bob',
    list2: 123
});
mixpanel.people.union({
    list1: ['bob', 'billy']
});
mixpanel.people.track_charge(50);
mixpanel.people.track_charge(30.50, {
    $time: new Date('jan 1 2012')
});
mixpanel.people.clear_charges();
mixpanel.people.delete_user();
