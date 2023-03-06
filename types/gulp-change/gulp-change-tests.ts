import change = require('gulp-change');

// @ts-expect-error
change();
// @ts-expect-error
change(1);

function performChange(content: string): string {
    return content.replace(/foo/g, 'FOO');
}

change(performChange);          // $ExpectType MapStream

function performChangeAsync(content: string, done: (err: any, content: string) => any): void {
    content.replace(/foo/g, 'FOO');
    done(null, content);
}

change(performChangeAsync);     // $ExpectType MapStream
