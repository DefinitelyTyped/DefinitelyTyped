
/// <reference types="jquery" />

// Some random vals to use

// Use for page props or user traits
var testProps = {
  favoriteCheese: "brie",
  favoritePie: "apple"
};

// Segment options
var testOpts = {
  integrations: {
    Mixpanel: true
  }
};

var testCb = function() {};


/////////////

function test_load() {
  analytics.load("YOUR_WRITE_KEY");
}

function test_identify() {
  // userId and traits
  analytics.identify('1e810c197e', {
    name: 'Bill Lumbergh',
    email: 'bill@initech.com'
  });

  // No traits
  analytics.identify('1e810c197e');

  // No userId
  analytics.identify({
    email: 'bill@initech.com',
    newsletter: true,
    industry: 'Technology'
  });

  // Callback
  analytics.identify('1e810c197e', function(){
    // Do something after the identify request has been sent, like
    // submit a form or redirect to a new page.
  });

  // With options
  analytics.identify('1e810c197e', testProps, testOpts);

  // All args
  analytics.identify('1e810c197e', testProps, testOpts, testCb);
}

function testTrack() {
  analytics.track('Signed Up');

  analytics.track('Signed Up', {
    plan: 'Startup',
    source: 'Analytics Academy'
  });

  analytics.track('Signed Up', testProps, testOpts, testCb);
}

function testPage() {
  analytics.page();
  analytics.page('Signup');

  analytics.page('Pricing', {
    title: 'Segment Pricing',
    url: 'https://segment.com/pricing',
    path: '/pricing',
    referrer: 'https://segment.com'
  });

  analytics.page('Category', 'Signup');

  analytics.page('Signup', testProps, testOpts, testCb);
}

function testAlias() {
  analytics.alias('019mr8mf4r');
  analytics.alias('newId', 'oldId');
  analytics.alias('019mr8mf4r', testOpts, testCb);
}

function testGroup() {
  analytics.group('test_group');
  analytics.group('test_group', {
    name: "Initech",
    industry: "Technology",
    employees: 329
  });
  analytics.group('test_group', testProps, testOpts, testCb);
}

function testTrackLink() {
  var link1 = document.getElementById('free-trial-link');
  var link2 = document.getElementById('free-trial-link-2');
  var links = $('.free-trial-links');

  analytics.trackLink(link1, 'Clicked Free-Trial Link');
  analytics.trackLink(link1, 'Clicked Free-Trial Link', {
    plan: 'Enterprise'
  });

  analytics.trackLink([link1, link2], 'Clicked Free-Trial Link', testProps);
  analytics.trackLink(links, 'Clicked Free-Trial Link', testProps);

  // With function name and properties
  analytics.trackLink(links,
    function(elm) {
      return String(elm);
    },
    function(elm) {
      return {
        x: 123,
        y: 456
      };
    });
}

function testTrackForm() {
  var form1 = document.getElementById('signup-form');
  var form2 = document.getElementById('signin-form');
  var forms = $('.forms');

  analytics.trackForm(form1, 'Signed up');
  analytics.trackForm(form1, 'Signed Up', {
    plan: 'Premium',
    revenue: 99.00
  });

  analytics.trackForm([form1, form2], 'Clicked Free-Trial Link', testProps);
  analytics.trackForm(forms, 'Clicked Free-Trial Link', testProps);

  // With function name and properties
  analytics.trackForm(forms,
    function(elm) {
      return String(elm);
    },
    function(elm) {
      return {
        x: 123,
        y: 456
      };
    });
}

function testReady() {
  analytics.ready(function(){
    (<any> window).mixpanel.set_config({ verbose: true });
  });
}

function testUserGroup() {
  analytics.ready(function(){
    var user = analytics.user();
    var id = user.id();
    var traits = user.traits();
  });

  analytics.ready(function(){
    var group = analytics.group();
    var id = group.id();
    var traits = group.traits();
  });
}

function testClearTraits() {
  analytics.user().traits({});
  analytics.group().traits({});
}

function testResetLogout() {
  analytics.reset();
}

function testAnonId() {
  analytics.user().anonymousId();
  analytics.user().anonymousId('ABC-123-XYZ');

  analytics.identify('123', {
    gender: 'Male',
  }, {
    anonymousId: 'ABC-123-XYZ'
  });

  analytics.page({}, { anonymousId: 'ABC-123-XYZ' });

  analytics.track('Clicked CTA', {
    callToAction: 'Signup'
  }, {
    anonymousId: 'ABC-123-XYZ'
  });
}

function testDebug() {
  analytics.debug();
  analytics.debug(false);
}

declare var bigdata: any;
function testEmitter() {
  analytics.on('track', function(event, properties, options){
    bigdata.push(['recordEvent', event]);
  });
}

function testTimeout() {
  analytics.timeout(500);
}