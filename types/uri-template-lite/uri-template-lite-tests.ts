import Template from "uri-template-lite";

// Call `expand` directly via the static method
const dataSet = { domain: "example.com", user: "fred", query: "mycelium" };
Template.expand("http://{domain}/~{user}/foo{?query,number}", dataSet);

// Create a template instance
const template = new Template("http://{domain}/~{user}/foo{?query,number}");
template.expand(dataSet);
template.match("http://example.com/~fred/foo?query=mycelium&number=3");
template.match("http://other.com/?query=mycelium");
