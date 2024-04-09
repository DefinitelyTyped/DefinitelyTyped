import jsonlFile from "jsonl-db";

const myJsonlFile = jsonlFile("./data.jsonl");

myJsonlFile.add({ name: "John", age: 27 });

myJsonlFile.addMany([
    { name: "John", age: 27 },
    { name: "Jane", age: 31 },
]);

myJsonlFile.read((line) =>  {
    myJsonlFile.add(line);
    return true
})
