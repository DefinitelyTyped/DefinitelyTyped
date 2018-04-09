import postgraphile from "postgraphile";

function testPrams() {
  postgraphile("", "");
  postgraphile("", ["", "", ""]);
  postgraphile("", "", {graphqlRoute: ""});
}
