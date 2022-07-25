import EmailTemplates = require('swig-email-templates');
import jQuery = require('jquery');

const templates = new EmailTemplates();
const withOptions = new EmailTemplates({ root: '' });

templates.generateText('templatePath', {}, 'html', () => {});
templates.generateSubject('templatePath', {}, () => {});
templates.rewriteUrls(jQuery, () => {});
templates.render('templatePath', {}, () => {});
(async () => {
  const { html, text, subject } = await templates.render('templatePath', {});
})();

withOptions.generateText('templatePath', {}, 'html', () => {});
withOptions.generateSubject('templatePath', {}, () => { });
withOptions.rewriteUrls(jQuery, () => {});
withOptions.render('templatePath', {}, () => {});
