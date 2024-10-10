import copyStaticFiles from "esbuild-copy-static-files";

// $ExpectType CopyStaticFilesPluginInstance
copyStaticFiles({ src: "src" });

// $ExpectType CopyStaticFilesPluginInstance
copyStaticFiles({ dest: "dest" });

// $ExpectType CopyStaticFilesPluginInstance
copyStaticFiles({ dereference: true });

// $ExpectType CopyStaticFilesPluginInstance
copyStaticFiles({ errorOnExist: true });

// $ExpectType CopyStaticFilesPluginInstance
copyStaticFiles({
    filter: (src, dest) => {
        src; // $ExpectType string
        dest; // $ExpectType string
        return true;
    },
});

// $ExpectType CopyStaticFilesPluginInstance
copyStaticFiles({
    filter: async (src, dest) => {
        src; // $ExpectType string
        dest; // $ExpectType string
        return true;
    },
});

// $ExpectType CopyStaticFilesPluginInstance
copyStaticFiles({ force: true });

// $ExpectType CopyStaticFilesPluginInstance
copyStaticFiles({ preserveTimestamps: true });

// $ExpectType CopyStaticFilesPluginInstance
copyStaticFiles({ recursive: true });
