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
    format: 'json',
    headers: {
        'Content-Type': 'text/html'
    },
}).then((validationResults: validateHtml.ParsedJsonAsValidationResults) => {
    if (validationResults.messages.length === 0) {
        console.warn(`File "test" contains W3C standard violations or guidelines neglects.`);
        return;
    }

    validationResults.messages.forEach((violation: validateHtml.ValidationMessageObject) => {
        switch (violation.type) {
            case 'error':
                console.log(`W3C standard violation: ${violation.message}`);
                break;
            case 'info':
                console.warn(`W3C guidelines neglect: ${violation.message}`);
                break;
            case 'non-document-error':
                console.log(`W3C Non-Document error: ${violation.message}`);
                break;
        }

        if (!!(violation as validateHtml.ValidationMessageLocationObject).extract) {
            const v = violation as validateHtml.ValidationMessageLocationObject;
            console.log(v.extract);
            console.log(`line: ${v.lastLine}, column: ${v.firstColumn}-${v.lastColumn}\n`);
        }
    });
});
