import DirGen = require("dir-walker-gen");

const options = {
    folders: [".."]
};

const iterator = DirGen(options);

let result = iterator.next();
while (!result.done) {
    result = iterator.next();
}
