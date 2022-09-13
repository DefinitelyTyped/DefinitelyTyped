import MC = require('mailcheck');

var domains = ['gmail.com', 'aol.com'];
var secondLevelDomains = ['hotmail']
var topLevelDomains = ["com", "net", "org"];

var superStringDistance = function(string1: string, string2: string): number {
    // a string distance algorithm of your choosing
    return 0;
};

$('#email').on('blur', function() {
    $(this).mailcheck({
        email: 'nonoptional@example.com',
        domains: domains,                       // optional
        secondLevelDomains: secondLevelDomains, // optional
        topLevelDomains: topLevelDomains,       // optional
        distanceFunction: superStringDistance,  // optional
        suggested: function(element: JQuery, suggestion: MailcheckModule.ISuggestion) {
          // callback code
          element; // $ExpectType JQuery<HTMLElement>
          suggestion; // $ExpectType ISuggestion
        },
        empty: function(element: JQuery) {
          // callback code
        }
    });
});

Mailcheck.run({
    email: 'nonoptional@example.com',
    domains: domains,                       // optional
    secondLevelDomains: secondLevelDomains, // optional
    topLevelDomains: topLevelDomains,       // optional
    distanceFunction: superStringDistance,  // optional
    suggested: function(suggestion: MailcheckModule.ISuggestion) {
      // callback code
      suggestion; // $ExpectType ISuggestion
    },
    empty: function() {
      // callback code
    }
});

MC.run({
    email: 'nonoptional@example.com',
    domains: domains,                       // optional
    secondLevelDomains: secondLevelDomains, // optional
    topLevelDomains: topLevelDomains,       // optional
    distanceFunction: superStringDistance,  // optional
    suggested: function(suggested: MailcheckModule.ISuggestion) {
      // callback code
      suggested; // $ExpectType ISuggestion
    },
    empty: function() {
      // callback code
    }
});

const result3 = MC.run({
    email: 'nonoptional@example.com',
    domains: domains,                       // optional
    secondLevelDomains: secondLevelDomains, // optional
    topLevelDomains: topLevelDomains,       // optional
    distanceFunction: superStringDistance,  // optional
});
result3; // $ExpectType ISuggestion | undefined
