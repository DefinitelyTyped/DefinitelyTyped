import * as B from '@wordpress/blob';

B.createBlobURL(
    new File(['foo'], 'foo.txt', {
        type: 'text/plain',
    })
);

B.getBlobByURL('blob:thisbitdoesnotmatter');

B.isBlobURL('blob:thisbitdoesnotmatter'); // true

B.revokeBlobURL('blob:thisbitdoesnotmatter');
