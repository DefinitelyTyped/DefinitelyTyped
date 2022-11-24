import { callStandardApi, setApiKey } from 'deepai';

// $ExpectedType void
setApiKey('');

// $ExpectedType Promise<{id: string, output_url: string}>
callStandardApi('torch-srgan', {image: 'foo.jpg'});

// @ts-expect-error
callStandardApi('torch-srgan', {});

// @ts-expect-error
callStandardApi('foobar', {});
