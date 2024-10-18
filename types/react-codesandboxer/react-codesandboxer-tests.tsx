import * as React from "react";
import CodeSandboxer from "react-codesandboxer";

const codeSandboxer = (
    <CodeSandboxer
        examplePath="deeply/nested/thing/some-example.js"
        gitInfo={{
            account: "noviny",
            repository: "react-CodeSandbox",
            branch: "master",
            host: "github",
        }}
        dependencies={{
            "@atlaskit/css-reset": "latest",
        }}
        providedFiles={{ "index.js": { content: "abcde...." } }}
    >
        {({ isLoading }) =>
            isLoading
                ? <div>Uploading</div>
                : (
                    <button type="submit">
                        Upload to CodeSandbox
                    </button>
                )}
    </CodeSandboxer>
);
