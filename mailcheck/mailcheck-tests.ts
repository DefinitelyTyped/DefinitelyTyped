/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="mailcheck.d.ts"/>

import MC = require('mailcheck');

var domains = ['gmail.com', 'aol.com'];
var secondLevelDomains = ['hotmail']
var topLevelDomains = ["com", "net", "org"];

var superStringDistance = function(string1: string, string2: string): void {
    // a string distance algorithm of your choosing
};

$('#email').on('blur', function() {
    $(this).mailcheck({
        domains: domains,                       // optional
        secondLevelDomains: secondLevelDomains, // optional
        topLevelDomains: topLevelDomains,       // optional
        distanceFunction: superStringDistance,  // optional
        suggested: function(element, suggestion) {
          // callback code
        },
        empty: function(element) {
          // callback code
        }
    });
});

Mailcheck.run({
    domains: domains,                       // optional
    secondLevelDomains: secondLevelDomains, // optional
    topLevelDomains: topLevelDomains,       // optional
    distanceFunction: superStringDistance,  // optional
    suggested: function(suggestion) {
      // callback code
    },
    empty: function() {
      // callback code
    }
});

MC.run({
    domains: domains,                       // optional
    secondLevelDomains: secondLevelDomains, // optional
    topLevelDomains: topLevelDomains,       // optional
    distanceFunction: superStringDistance,  // optional
    suggested: function(suggested) {
      // callback code
      suggested.address === '' && suggested.full === '' && suggested.domain === '';
    },
    empty: function() {
      // callback code
    }
});