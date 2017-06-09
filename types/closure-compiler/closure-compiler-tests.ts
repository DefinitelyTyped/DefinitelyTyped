import {compile} from 'closure-compiler';

compile('some.source()', {'check-only': null},
        (err: Error, stdout: string, stderr: string): void => {
          console.log('Got', err, 'stdout', stdout, 'stderr', stderr);
        });

// No options, Callback wins.
compile('some.source()', (err: Error, stdout: string, stderr: string): void => {
  console.log('Got', err, 'stdout', stdout, 'stderr', stderr);
});

compile(null, {'js': ['a/f.js', 'a/f2.js'], 'check-only': null},
        (err: Error, stdout: string, stderr: string): void => {
          console.log('Got', err, 'stdout', stdout, 'stderr', stderr);
        });
