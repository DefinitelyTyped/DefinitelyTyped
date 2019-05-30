import DirGen from 'dir-walker-gen';

const options = {
    folders: [".."]
}

let iterator = DirGen(options);

let result = iterator.next();
while (!result.done) {
    result = iterator.next();
}
