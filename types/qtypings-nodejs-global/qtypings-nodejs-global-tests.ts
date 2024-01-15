const testJsonFromNodeJS: QJson = {
    a: 1,
    b: 2
};

const testJsonTFromNodeJS: QJsonT<string> = {
    a: '1',
    b: '2'
};

console.log('testJsonFromNodeJS:', testJsonFromNodeJS);
console.log('testJsonTFromNodeJS:', testJsonTFromNodeJS);