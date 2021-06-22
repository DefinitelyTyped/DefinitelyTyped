import hook = require("node-hook");

function logLoadedFilename(source: string, filename: string) {
    return `console.log(${JSON.stringify(filename)});\n${source}`;
}

hook.hook(logLoadedFilename);
hook.hook(logLoadedFilename, undefined, { verbose: true });
hook.hook(".ts", logLoadedFilename);
hook.hook(".ts", logLoadedFilename, {});
hook.unhook();
hook.unhook(".ts");
