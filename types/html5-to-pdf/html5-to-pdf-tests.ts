import * as HTML5ToPDF from "html5-to-pdf";

const options = { inputBody: "<html><body>Hello World</body></html>" };
const converter = new HTML5ToPDF(options);
converter.parseOptions(options); // $ExpectType ParsedOptions
converter.build(); // $ExpectType Promise<Buffer>
converter.includeAssets(); // $ExpectType Promise<void>
converter.start(); // $ExpectType Promise<Page>
converter.close(); // $ExpectType Promise<void>
