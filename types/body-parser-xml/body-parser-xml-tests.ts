import bodyParser = require("body-parser");
import bodyParserXml = require("body-parser-xml");

bodyParserXml(bodyParser);
bodyParser.xml();
bodyParser.xml({});

bodyParser.xml({
    limit: "1MB",
    xmlParseOptions: {
        normalize: true,
        normalizeTags: true,
        explicitArray: false,
    },
    defaultCharset: "base64url",
});
