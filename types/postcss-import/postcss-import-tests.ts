import postcss = require('postcss');
import atImport = require('postcss-import');

postcss().use(atImport());
postcss().use(atImport({ root: '' }));
postcss().use(atImport({ path: '' }));
postcss().use(atImport({ path: [''] }));
postcss().use(atImport({ plugins: [atImport()] }));
postcss().use(atImport({ resolve: (id, basedir, importOptions) => id + basedir + importOptions.root }));
postcss().use(atImport({ load: (filename, importOptions) => filename + importOptions.root }));
postcss().use(atImport({ skipDuplicates: false }));
postcss().use(atImport({ addModulesDirectories: [''] }));
postcss().use(
    atImport({
        root: '',
        path: '',
        plugins: [atImport()],
        resolve: (id, basedir, importOptions) => id + basedir + importOptions.root,
        load: (filename, importOptions) => filename + importOptions.root,
        skipDuplicates: false,
        addModulesDirectories: [''],
    }),
);
