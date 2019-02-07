import * as sarif from "sarif";
const input = `{
    "version": "2.0.0",
    "runs": [
      {
        "tool": {
          "name": "CodeScanner",
          "semanticVersion": "2.1.0"
        },
        "results": [
        ]
      }
    ]
}`;
const log = JSON.parse("") as sarif.Log;
if (log.runs[0].tool.name !== "CodeScanner") {
    throw new Error("error: Tool name does not match");
}
