/// <reference path="mixpanel.d.ts" />
function mixpanel_base()
{
    mixpanel.init("new token");
    mixpanel.init("new token", { your: "config" });
    mixpanel.init("new token", { your: "config" }, "library_name");

    mixpanel.push(['register', { a: 'b' }]);

    mixpanel.disable(['my_event']);

    mixpanel.track("Registered", {"Gender": "Male", "Age": 21});

    mixpanel.track_links("#nav", "Clicked Nav Link");

    mixpanel.track_forms("#register", "Created Account");

    mixpanel.register({device: 'android', version: '4.0.1'});

    mixpanel.register_once({device: 'android', version: '4.0.1'});

    mixpanel.unregister('device');

    mixpanel.identify('234234sdfdsf');

    mixpanel.get_distinct_id();

    mixpanel.alias('w3erwfsdf', '234234sdfdsf');

    mixpanel.set_config({test: true});

    mixpanel.get_config();

    mixpanel.get_property('device');
}

function mixpanel_people()
{
    mixpanel.people.set('gender', 'm');
    mixpanel.people.set({
        'Company': 'Acme',
        'Plan': 'Premium',
        'Upgrade date': new Date()
    });

    mixpanel.people.set_once('First Login Date', new Date());
    mixpanel.people.set_once({
        'First Login Date': new Date(),
        'Starting Plan': 'Premium'
    });

    mixpanel.people.increment('page_views', 1);
    mixpanel.people.increment('page_views');
    mixpanel.people.increment('credits_left', -1);
    mixpanel.people.increment({
        counter1: 1,
        counter2: 1
    });

    mixpanel.people.append('pages_visited', 'homepage');
    mixpanel.people.append({
        list1: 'bob',
        list2: 123
    });

    mixpanel.people.track_charge(50);
    mixpanel.people.track_charge(30.50, {'$time': new Date('jan 1 2012')});

    mixpanel.people.clear_charges();

    mixpanel.people.delete_user();
}
