import EmailTemplates = require('swig-email-templates');

let templates = new EmailTemplates(),
    withOptions = new EmailTemplates({ root: '' });

templates.generateText('templatePath', {}, 'html', function () { });
templates.generateSubject('templatePath', {}, function () { });
templates.rewriteUrls(function () {}, function () {});
templates.render('templatePath', {}, function () { });

withOptions.generateText('templatePath', {}, 'html', function () { });
withOptions.generateSubject('templatePath', {}, function () { });
withOptions.rewriteUrls(function () {}, function () {});
withOptions.render('templatePath', {}, function () { });

