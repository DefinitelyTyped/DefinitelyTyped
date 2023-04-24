function mixpanel_base() {
    mixpanel.init('new token');
    mixpanel.init('new token', { persistence_name: 'config' });
    mixpanel.init('new token', { persistence_name: 'config' }, 'library_name');

    mixpanel.push(['register', { a: 'b' }]);

    mixpanel.disable();
    mixpanel.disable(['my_event']);

    mixpanel.track('Registered');
    mixpanel.track('Registered', { Gender: 'Male', Age: 21 });
    mixpanel.track('Registered', { Gender: 'Male', Age: 21 }, () => {});

    // Genreric Track
    enum ErrorNames {
        ERROR1 = '1',
        ERROR2 = '2',
    }

    interface ErrorEvent extends Mixpanel.EventBaseType {
        eventName: ErrorNames;
        properties: {
            id: string;
            message: string;
        };
    }

    mixpanel.track<ErrorEvent>(ErrorNames.ERROR1, { id: '1111', message: 'Bad error' });
    mixpanel.track<ErrorEvent>(ErrorNames.ERROR2, { id: '1111', message: 'Bad error' });

    mixpanel.track_links('#nav', 'Clicked Nav Link');
    mixpanel.track_links('#nav', 'Clicked Nav Link', { prop: 'A' });

    mixpanel.track_forms('#register', 'Created Account', { prop: 'A' });

    mixpanel.time_event('Registered');

    mixpanel.register({ device: 'android', version: '4.0.1' });
    mixpanel.register({ device: 'android', version: '4.0.1' }, 5);

    mixpanel.register_once({ device: 'android', version: '4.0.1' });
    mixpanel.register_once({ device: 'android', version: '4.0.1' }, 'default', 4);

    mixpanel.unregister('device');

    mixpanel.identify();
    mixpanel.identify('234234sdfdsf');

    mixpanel.get_distinct_id();

    mixpanel.alias('w3erwfsdf');
    mixpanel.alias('w3erwfsdf', '234234sdfdsf');

    mixpanel.set_config({ test: true });
    mixpanel.set_config({
        api_host: '',
        app_host: '',
        autotrack: true,
        cdn: '',
        cross_subdomain_cookie: true,
        persistence: 'cookie',
        persistence_name: '',
        cookie_name: '',
        loaded: lib => {},
        store_google: true,
        save_referrer: true,
        test: false,
        verbose: false,
        img: false,
        track_pageview: true,
        debug: false,
        track_links_timeout: 300,
        cookie_expiration: 365,
        upgrade: false,
        disable_persistence: false,
        disable_cookie: false,
        secure_cookie: false,
        ip: true,
        property_blacklist: ['token'],
    });

    mixpanel.get_config();

    mixpanel.get_property('device');

    mixpanel.reset();
}

function mixpanel_people() {
    mixpanel.people.set('gender', 'm');
    mixpanel.people.set('gender', 'm', () => {});
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
        () => {},
    );

    mixpanel.people.set_once('First Login Date', new Date());
    mixpanel.people.set_once('First Login Date', new Date(), () => {});
    mixpanel.people.set_once({
        'First Login Date': new Date(),
        'Starting Plan': 'Premium',
    });
    mixpanel.people.set_once(
        {
            'First Login Date': new Date(),
            'Starting Plan': 'Premium',
        },
        () => {},
    );

    mixpanel.people.unset('Company');
    mixpanel.people.unset('Company', () => {});
    mixpanel.people.unset(['Company', 'Plan']);
    mixpanel.people.unset(['Company', 'Plan'], () => {});

    mixpanel.people.increment('page_views');
    mixpanel.people.increment('page_views', 1);
    mixpanel.people.increment('credits_left', -1);
    mixpanel.people.increment('page_views', 1, () => {});
    mixpanel.people.increment({
        counter1: 1,
        counter2: 1,
    });
    mixpanel.people.increment(
        {
            counter1: 1,
            counter2: 1,
        },
        () => {},
    );

    mixpanel.people.union('pages_visited', 'homepage', () => {});
    mixpanel.people.union('pages_visited', 'homepage');
    mixpanel.people.union({
        list1: 'bob',
        list2: 123,
    });
    mixpanel.people.union(
        {
            list1: 'bob',
            list2: 123,
        },
        () => {},
    );

    mixpanel.people.append('pages_visited', 'homepage');
    mixpanel.people.append('pages_visited', 'homepage', () => {});
    mixpanel.people.append({
        list1: 'bob',
        list2: 123,
    });
    mixpanel.people.append(
        {
            list1: 'bob',
            list2: 123,
        },
        () => {},
    );

    mixpanel.people.track_charge(50);
    mixpanel.people.track_charge(30.5, { $time: new Date('jan 1 2012') });
    mixpanel.people.track_charge(30.5, { $time: new Date('jan 1 2012') }, () => {});

    mixpanel.people.clear_charges();
    mixpanel.people.clear_charges(() => {});

    mixpanel.people.delete_user();
}
