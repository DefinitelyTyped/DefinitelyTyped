import { URI } from 'uri-template-lite';

// Call `expand` directly
const dataSet = { domain: "example.com", user: "fred", query: "mycelium" };
URI.expand("http://{domain}/~{user}/foo{?query,number}", dataSet);

const template = new URI.Template("http://{domain}/~{user}/foo{?query,number}");
template.expand(dataSet);
template.match("http://example.com/~fred/foo?query=mycelium&number=3");
template.match("http://other.com/?query=mycelium");
