import copyStaticFiles from "esbuild-copy-static-files";

// $ExpectType CopyStaticFilesPluginInstance
copyStaticFiles({ src: "src", dest: "dest", filter: (src, dest) => true, recursive: true });
