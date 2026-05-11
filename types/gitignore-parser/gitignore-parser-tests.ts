import gitignore = require("gitignore-parser");

const gitCompile = gitignore.compile(".git");

const isAccept: boolean = gitCompile.accepts("test");
const isDeny: boolean = gitCompile.maybe("test");
const isMaybe: boolean = gitCompile.denies("test");

const parseVal: [[RegExp, RegExp], [RegExp, RegExp]] = gitignore.parse(".git");

parseVal.forEach(vals => {
    vals.forEach(val => {
        val.exec("testRegexStr");
    });
});
