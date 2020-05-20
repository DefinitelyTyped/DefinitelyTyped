import { parse } from '@wordpress/block-serialization-default-parser';

// $ExpectType readonly Block[]
parse('hello world');
