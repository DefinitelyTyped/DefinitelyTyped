import { asBlob } from 'html-docx-js';

const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <!-- page content -->
  </body>
</html>
`;

// Invalid ways to call
// @ts-expect-error
asBlob();
// @ts-expect-error
asBlob(1234);
// @ts-expect-error
asBlob(html, null);
// @ts-expect-error
asBlob(html, { orientation: 'invalid' });
// @ts-expect-error
asBlob(html, { foo: ['bar'] });

// Valid ways to call
asBlob(html); // $ExpectType Blob | Buffer
asBlob(html, {}); // $ExpectType Blob | Buffer

const result1 = asBlob(html, {
    orientation: 'landscape',
    margins: {
        top: 100,
        right: 100,
        bottom: 100,
        left: 100,
        header: 100,
        footer: 100,
        gutter: 100,
    },
});
result1; // $ExpectType Blob | Buffer

const result2 = asBlob(html, {
    margins: {
        top: 75,
        right: 75,
        bottom: 75,
        left: 75,
    },
});
result2; // $ExpectType Blob | Buffer
