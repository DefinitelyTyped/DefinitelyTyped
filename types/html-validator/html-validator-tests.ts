import validateHtml = require('html-validator');

const testHtml = ``;

validateHtml({
  data: compiledHtmlFile.contents.toString(),
  format: 'json'
}).then((validationResults: validateHtml.ValidationResultsAsParsedJSON) => {

  if (validationResults.messages.length === 0) {
    console.warn(`File ${compiledHtmlFile.basename} contains W3C standard violations or guidelines neglects.`);
    return;
  }

  validationResults.messages.forEach( (violation: validateHtml.ValidationMessageObject) => {

    if (violation.type === 'error') {
      console.log(`W3C standard violation: ${violation.message}`);
    }

    if (violation.type === 'info') {
      console.warn(`W3C guidelines neglect: ${violation.message}`);
    }

    console.log(violation.extract);
    console.log(`line: ${violation.lastLine}, column: ${violation.firstColumn}-${violation.lastColumn}\n`);
  });
});