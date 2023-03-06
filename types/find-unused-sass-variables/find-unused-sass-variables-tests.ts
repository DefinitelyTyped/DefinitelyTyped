import fusv from 'find-unused-sass-variables';

(async () => {
    // 'scss' is a folder
    let unused = fusv.find('scss'); // $ExpectType Results
    unused = await fusv.findAsync('scss'); // $ExpectType Results
    // Array of unused variables
    // ['$foo', '$bar', '$unused']
    unused.unused; // $ExpectType string[]
    unused.total; // $ExpectType number
    const ignoredVars = ['$my-var', '$my-second-var'];
    unused = fusv.find('scss', { ignore: ignoredVars, fileExtensions: ['css', 'scss'] }); // $ExpectType Results
})();
