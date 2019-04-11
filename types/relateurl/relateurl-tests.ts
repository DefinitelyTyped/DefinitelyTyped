import RelateUrl = require('relateurl');

var from = "http://www.domain.com/asdf/";
var to = "http://www.domain.com/asdf/asdf";
var to1 = "http://www.domain.com/asdf/asdf1";
var to2 = "http://www.domain.com/asdf/asdf1";
var to3 = "http://www.domain.com/asdf/asdf1";
var options = {site: "http://www.domain.com/asdf2/"};
var customOptions = {output: RelateUrl.ABSOLUTE};

// Single Instance
var result = RelateUrl.relate(from, to, options);

// Reusable Instances
var instance = new RelateUrl(from, options);
var result1 = instance.relate(to1);
var result2 = instance.relate(to2, customOptions);
var result3 = instance.relate(to3);
