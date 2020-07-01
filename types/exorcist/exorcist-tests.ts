import exorcist = require("exorcist");

module ExorcistTest {

    function pullSourceMaps(srcPath: string, projRoot: string) {
        exorcist(srcPath, undefined, projRoot);
        exorcist(srcPath, null, projRoot, null, true);
        exorcist(srcPath, null, projRoot, "./");
    }

}

export = ExorcistTest;
