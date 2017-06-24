// Example code taken from https://www.npmjs.com/package/piwik-tracker

var PiwikTracker = require('piwik-tracker');

// Initialize with your site ID and Piwik URL
var piwik = new PiwikTracker(1, 'http://mywebsite.com/piwik.php');

// Optional: Respond to tracking errors
piwik.on('error', function(err : Error) {
  console.log('error tracking request: ', err)
})

// Track a request URL:
// Either as a simple string …
piwik.track('http://example.com/track/this/url');

// … or provide further options:
piwik.track({
  url: 'http://example.com/track/this/url',
  action_name: 'This will be shown in your dashboard',
  ua: 'Node.js v0.10.24',
  cvar: JSON.stringify({
    '1': ['custom variable name', 'custom variable value']
  })
});
