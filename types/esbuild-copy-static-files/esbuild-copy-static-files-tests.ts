import copyStaticFiles from 'esbuild-copy-static-files';

// $ExpectType (build: any) => void
copyStaticFiles({ src: 'src', dest: 'dest', filter: (src, dest) => true, recursive: true });
