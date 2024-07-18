import getParams = require("get-params");

function myFunction(one: string, two: number, three: boolean) {
    return "blah";
}

const params: string[] = getParams(myFunction);
