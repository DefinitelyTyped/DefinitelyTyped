import ExpoMixpanelAnalytics from 'expo-mixpanel-analytics';

const analytics = new ExpoMixpanelAnalytics('5224da5bbbed3fdeaad0911820f1bf2x');

analytics.identify("13793");

analytics.track("Signed Up", { "Referred By": "Friend" });

analytics.people_set({
    $first_name: "Joe",
    $last_name: "Doe",
    $email: "joe.doe@example.com",
    $created: "2013-04-01T13:20:00",
    $phone: "4805551212",
    Address: "1313 Mockingbird Lane",
    Birthday: "1948-01-01"
});

analytics.people_set_once({ "First login date": "2013-04-01T13:20:00" });

analytics.people_unset([ "Days Overdue" ]);

analytics.people_increment({ "Coins Gathered": 12 });

analytics.people_append({ "Power Ups": "Bubble Lead" });

analytics.people_union({ "Items purchased": ["socks", "shirts"] });

analytics.people_delete_user();

analytics.reset();
