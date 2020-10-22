import { find, findSync, FindResult } from 'find-in-files';

const main = async () => {
    // FindResult interface should be exported
    const files: FindResult = await find(/foo/, 'foo', /foo/);
    // Third argument is optional
    await find(/foo/, 'foo');
    // First argument can be a string
    await find('foo', 'foo');
    // Sync version
    findSync('foo', 'foo');

    // Incorrect param
    // $ExpectError
    await find(3, 'foo', /foo/);

    return files;
};

export default main;
