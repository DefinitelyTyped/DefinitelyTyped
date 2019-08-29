import validateHtml = require('html-validator');

const testHtml = `
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Invalid</title>
</head>
<body>
<p>I'm baaaaaaaaaaaad code</div></p>
</body>
</html>
`;

validateHtml({
  data: testHtml,
  format: 'json'
}).then((validationResults: validateHtml.ParsedJsonAsValidationResults) => {
  if (validationResults.messages.length === 0) {
    console.warn(`File "test" contains W3C standard violations or guidelines neglects.`);
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
