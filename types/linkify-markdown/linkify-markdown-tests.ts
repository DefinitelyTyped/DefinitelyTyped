import { linkify } from 'linkify-markdown';

linkify(''); // $ExpectedType string
linkify('', { strong: true, repository: '' }); // $ExpectedType string
