import parser = require("swagger-parser");

parser.parse("test.yaml").then((file: string) => {
  console.log(file);
});
