import { Index, StatusResult } from "../../bidi"; // Adjust path as needed

function testStatusMethod() {
    const mockStatusResult: StatusResult = {
        id: 123,
        result: {
            build: { version: "1.0.0" },
            message: "System is ready",
            os: { arch: "x64", name: "Linux", version: "5.15" },
            ready: true,
        },
        type: "status",
    };

    class MockIndex extends (Index as any) {
        constructor() {
            super("ws://mockurl");
        }

        get status(): Promise<StatusResult> {
            return Promise.resolve(mockStatusResult);
        }
    }

    const mockInstance = new MockIndex();

    mockInstance.status
        .then((result) => {
            console.log("Test passed. Status result:", result);

            if (typeof result.id !== "number") {
                throw new Error("`id` should be a number.");
            }

            if (typeof result.type !== "string") {
                throw new Error("`type` should be a string.");
            }

            const { build, message, os, ready } = result.result;

            if (typeof build.version !== "string") {
                throw new Error("`build.version` should be a string.");
            }

            if (typeof message !== "string") {
                throw new Error("`message` should be a string.");
            }

            if (typeof os.arch !== "string" || typeof os.name !== "string" || typeof os.version !== "string") {
                throw new Error("OS properties (`arch`, `name`, `version`) should be strings.");
            }

            if (typeof ready !== "boolean") {
                throw new Error("`ready` should be a boolean.");
            }
        })
        .catch((error) => {
            console.error("Test failed:", error);
        });
}

testStatusMethod();
