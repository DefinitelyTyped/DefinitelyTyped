import mixpanel from "mixpanel-browser";

mixpanel; // $ExpectType OverridedMixpanel

const lib = mixpanel.init('new token', { secure_cookie: true }, 'library_name'); // $ExpectType Mixpanel
lib.track('event name');
lib.init('token', {}, "name");  // $ExpectType Mixpanel
mixpanel.init("token");  // $ExpectType undefined
mixpanel.init("token", {});  // $ExpectType undefined
mixpanel.push(['register', { a: 'b' }]);
mixpanel.disable();
mixpanel.track('Registered', { Gender: 'Male', Age: 21 });
mixpanel.track_links('#nav', 'Clicked Nav Link');
mixpanel.track_forms('#register', 'Created Account');
mixpanel.time_event('Registered');
mixpanel.track('Registered', { Gender: 'Male', Age: 21 });
mixpanel.track('Left page', { duration_seconds: 35 }, { transport: 'sendBeacon' });
mixpanel.track('Left page', { duration_seconds: 35 }, { send_immediately: true });
mixpanel.track('Left page', { duration_seconds: 35 }, () => {
    /* callback function */
});
mixpanel.track('Left page', { duration_seconds: 35 }, { transport: 'sendBeacon' }, () => {
    /* callback function */
});
mixpanel.track('Left page', { duration_seconds: 35 }, response => {
    if (response === 1) {
    } else if (response === 0) {
    } else if (response.status === 1 && response.error === null) {
    } else if (response.status === 0 && response.error.includes('bad')) {
    }
});
mixpanel.register({ Gender: 'Female' });
mixpanel.register({
    Email: 'jdoe@example.com',
    'Account Type': 'Free',
});
mixpanel.register_once({
    'First Login Date': new Date().toISOString(),
});
mixpanel.init('YOUR PROJECT TOKEN', {
    loaded: mixpanel => {
        const distinct_id = mixpanel.get_distinct_id();
    },
});
mixpanel.alias('new_id', 'existing_id');
mixpanel.alias('newer_id', 'new_id');
mixpanel.init('YOUR PROJECT TOKEN', {
    loaded: mixpanel => {
        const user_id = mixpanel.get_property('user_id');
    },
});
mixpanel.opt_in_tracking();
mixpanel.opt_in_tracking({
    track_event_name: 'User opted in',
    track_event_properties: {
        Email: 'jdoe@example.com',
    },
    cookie_expiration: 30,
    secure_cookie: true,
});
mixpanel.opt_out_tracking();
mixpanel.opt_out_tracking({
    cookie_expiration: 30,
    secure_cookie: true,
});
const has_opted_in = mixpanel.has_opted_in_tracking();
const has_opted_out = mixpanel.has_opted_out_tracking();
mixpanel.clear_opt_in_out_tracking();
mixpanel.clear_opt_in_out_tracking({
    cookie_expiration: 30,
    secure_cookie: true,
});
mixpanel.people.set('gender', 'm');
mixpanel.people.set('gender', 'm', response => {
    if (response === 1) {
    } else if (response === 0) {
    } else if (response.status === 1 && response.error === null) {
    } else if (response.status === 0 && response.error.includes('bad')) {
    }
});
mixpanel.people.set({
    Company: 'Acme',
    Plan: 'Premium',
    'Upgrade date': new Date(),
});
mixpanel.people.set(
    {
        Company: 'Acme',
        Plan: 'Premium',
        'Upgrade date': new Date(),
    },
    response => {
        if (response === 1) {
        } else if (response === 0) {
        } else if (response.status === 1 && response.error === null) {
        } else if (response.status === 0 && response.error.includes('bad')) {
        }
    },
);

mixpanel.people.set_once('First Login Date', new Date());
mixpanel.people.set_once('First Login Date', new Date(), response => {
    if (response === 1) {
    } else if (response === 0) {
    } else if (response.status === 1 && response.error === null) {
    } else if (response.status === 0 && response.error.includes('bad')) {
    }
});
mixpanel.people.set_once({
    'First Login Date': new Date(),
    'Starting Plan': 'Premium',
});
mixpanel.people.set_once(
    {
        'First Login Date': new Date(),
        'Starting Plan': 'Premium',
    },
    response => {
        if (response === 1) {
        } else if (response === 0) {
        } else if (response.status === 1 && response.error === null) {
        } else if (response.status === 0 && response.error.includes('bad')) {
        }
    },
);

mixpanel.people.unset('gender');
mixpanel.people.unset(['gender', 'Company']);
mixpanel.people.unset(['gender', 'Company'], response => {
    if (response === 1) {
    } else if (response === 0) {
    } else if (response.status === 1 && response.error === null) {
    } else if (response.status === 0 && response.error.includes('bad')) {
    }
});

mixpanel.people.increment('page_views', 1);
mixpanel.people.increment('page_views', 1, response => {
    if (response === 1) {
    } else if (response === 0) {
    } else if (response.status === 1 && response.error === null) {
    } else if (response.status === 0 && response.error.includes('bad')) {
    }
});
mixpanel.people.increment('page_views');
mixpanel.people.increment('page_views', response => {
    if (response === 1) {
    } else if (response === 0) {
    } else if (response.status === 1 && response.error === null) {
    } else if (response.status === 0 && response.error.includes('bad')) {
    }
});
mixpanel.people.increment('credits_left', -1);
mixpanel.people.increment({
    counter1: 1,
    counter2: 6,
});
mixpanel.people.increment(
    {
        counter1: 1,
        counter2: 6,
    },
    response => {
        if (response === 1) {
        } else if (response === 0) {
        } else if (response.status === 1 && response.error === null) {
        } else if (response.status === 0 && response.error.includes('bad')) {
        }
    },
);

mixpanel.people.remove('School', 'UCB');
mixpanel.people.remove('School', 'UCB', response => {
    if (response === 1) {
    } else if (response === 0) {
    } else if (response.status === 1 && response.error === null) {
    } else if (response.status === 0 && response.error.includes('bad')) {
    }
});
mixpanel.people.remove({
    School: 'UCB',
});
mixpanel.people.remove(
    {
        School: 'UCB',
    },
    response => {
        if (response === 1) {
        } else if (response === 0) {
        } else if (response.status === 1 && response.error === null) {
        } else if (response.status === 0 && response.error.includes('bad')) {
        }
    },
);

mixpanel.people.append('pages_visited', 'homepage');
mixpanel.people.append('pages_visited', 'homepage', response => {
    if (response === 1) {
    } else if (response === 0) {
    } else if (response.status === 1 && response.error === null) {
    } else if (response.status === 0 && response.error.includes('bad')) {
    }
});
mixpanel.people.append({
    list1: 'bob',
    list2: 123,
});
mixpanel.people.append(
    {
        list1: 'bob',
        list2: 123,
    },
    response => {
        if (response === 1) {
        } else if (response === 0) {
        } else if (response.status === 1 && response.error === null) {
        } else if (response.status === 0 && response.error.includes('bad')) {
        }
    },
);

mixpanel.people.union('pages_visited', 'homepage');
mixpanel.people.union('pages_visited', 'homepage', response => {
    if (response === 1) {
    } else if (response === 0) {
    } else if (response.status === 1 && response.error === null) {
    } else if (response.status === 0 && response.error.includes('bad')) {
    }
});
mixpanel.people.union({
    list1: 'bob',
    list2: 123,
});
mixpanel.people.union(
    {
        list1: 'bob',
        list2: 123,
    },
    response => {
        if (response === 1) {
        } else if (response === 0) {
        } else if (response.status === 1 && response.error === null) {
        } else if (response.status === 0 && response.error.includes('bad')) {
        }
    },
);
mixpanel.people.union({
    list1: ['bob', 'billy'],
});

mixpanel.people.track_charge(50);
mixpanel.people.track_charge(50, response => {
    if (response === 1) {
    } else if (response === 0) {
    } else if (response.status === 1 && response.error === null) {
    } else if (response.status === 0 && response.error.includes('bad')) {
    }
});
mixpanel.people.track_charge(30.5, {
    $time: new Date('jan 1 2012'),
});
mixpanel.people.track_charge(
    30.5,
    {
        $time: new Date('jan 1 2012'),
    },
    response => {
        if (response === 1) {
        } else if (response === 0) {
        } else if (response.status === 1 && response.error === null) {
        } else if (response.status === 0 && response.error.includes('bad')) {
        }
    },
);

mixpanel.people.clear_charges();
mixpanel.people.clear_charges(response => {
    if (response === 1) {
    } else if (response === 0) {
    } else if (response.status === 1 && response.error === null) {
    } else if (response.status === 0 && response.error.includes('bad')) {
    }
});
mixpanel.people.delete_user();
mixpanel.init('YOUR PROJECT TOKEN', {
    ignore_dnt: true,
});
mixpanel.add_group('test', 'id');
mixpanel.get_group('test', 'id');
mixpanel.remove_group('test', 'id');
mixpanel.set_group('test', ['some-value'], response => {
    if (response === 1) {
    } else if (response === 0) {
    } else if (response.status === 1 && response.error === null) {
    } else if (response.status === 0 && response.error.includes('bad')) {
    }
});
mixpanel.get_group('test', 'id').set('prop', 'value', response => {
    if (response === 1) {
    } else if (response === 0) {
    } else if (response.status === 1 && response.error === null) {
    } else if (response.status === 0 && response.error.includes('bad')) {
    }
});
mixpanel.get_group('test', 'id').set(
    {
        name: 'Name',
    },
    undefined,
    response => {
        if (response === 1) {
        } else if (response === 0) {
        } else if (response.status === 1 && response.error === null) {
        } else if (response.status === 0 && response.error.includes('bad')) {
        }
    },
);
mixpanel.get_group('test', 'id').set_once('prop', 'value', response => {
    if (response === 1) {
    } else if (response === 0) {
    } else if (response.status === 1 && response.error === null) {
    } else if (response.status === 0 && response.error.includes('bad')) {
    }
});
mixpanel.get_group('test', 'id').remove('prop', 'value', response => {
    if (response === 1) {
    } else if (response === 0) {
    } else if (response.status === 1 && response.error === null) {
    } else if (response.status === 0 && response.error.includes('bad')) {
    }
});
mixpanel.get_group('test', 'id').union('prop', ['value'], response => {
    if (response === 1) {
    } else if (response === 0) {
    } else if (response.status === 1 && response.error === null) {
    } else if (response.status === 0 && response.error.includes('bad')) {
    }
});
mixpanel.get_group('test', 'id').unset('prop');
mixpanel.track_with_groups('event', { name: 'Name' }, { group: ['value'] }, response => {
    if (response === 1) {
    } else if (response === 0) {
    } else if (response.status === 1 && response.error === null) {
    } else if (response.status === 0 && response.error.includes('bad')) {
    }
});
