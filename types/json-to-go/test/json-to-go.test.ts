import jsonToGo from "json-to-go";

const result = jsonToGo(JSON.stringify({
    hello: "world",
})); // $ExpectType JsonToGoResult

result.error; // $ExpectType undefined
result.go; // $ExpectType string

const resultWithError = jsonToGo("not a json"); // $ExpectType JsonToGoResult

resultWithError.error; // $ExpectType string
resultWithError.go; // $ExpectType string
