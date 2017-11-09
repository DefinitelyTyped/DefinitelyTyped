
import emailTemplates = require('swig-email-templates');

var options = {
  root: "root"
};

emailTemplates(options, function(err, render) {
  var context = {
    meatballCount: 9001,
  };
  render('meatball-sandwich.html', context, function(err, html, text) {
    // send html/text email
  });
});
