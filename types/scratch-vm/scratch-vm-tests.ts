/// <reference types=".">

class ExampleExtension implements ScratchExtension {
    getInfo(): ExtensionMetadata {
        return {
            id: "HelloWorld",
            name: "Hello World",
            blocks: [{
                opcode: "helloWorld",
                blockType: "reporter",
                text: "Return text [input]",
                arguments: {
                    input: {
                        type: Scratch.extensions.ArgumentType.STRING,
                        defaultValue: "Hello World"
                    }
                }
            }]
        };
    }

    helloWorld({ input }: { input: string }): string {
        return input;
    }
}

Scratch.extensions.register(new ExampleExtension());
