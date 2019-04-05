import * as validateHtml from 'html-validator';

const testHtml = `
<!DOCTYPE html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Test HTML Doc</title>
  <h1>Hello, world!</h1>
  <h1>Hello, world, 1 !</h1>
  <section>section</section>
  <img src="http://pitpedia.com/wp-content/uploads/2018/10/fa-image.png"><span><div>&#x30A8;&#x30E9;&#x30FC;&#x767A;&#x751F;&#xFF01;</div></span>
</head>
`;

validateHtml({
  data: testHtml,
  format: 'json'
}).then((validationResults: validateHtml.ValidationResultsAsParsedJSON) => {

  if (validationResults.messages.length === 0) {
    console.warn(`HTML is valid;`);
    return;
  }

  validationResults.messages.forEach((violation: validateHtml.ValidationMessageObject) => {
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
