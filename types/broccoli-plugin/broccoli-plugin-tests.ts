import Plugin = require('broccoli-plugin');

declare function copySync(src: string, dest: string): void;
declare function setTimeout(callback: () => void, duration: number): void;

class SlowItDown extends Plugin {
    constructor(private readonly waitInMS: number) {
        super([], {
            annotation: `${waitInMS} ms`,
            needsCache: false
        });
    }

    async build() {
        await new Promise(resolve => setTimeout(resolve, this.waitInMS));
    }
}

class FileCopier extends Plugin {
    constructor(inputNodes: Plugin.BroccoliNode[]) {
        super(inputNodes, {
            name: 'CopyFiles',
            persistentOutput: true
        });
    }

    build() {
        for (const input of this.inputPaths) {
            copySync(input, this.outputPath);
        }
    }

    getCallbackObject() {
        return this;
    }
}

new FileCopier([
    new SlowItDown(5000),
    'src',
    'assets'
]);

new Plugin(); // $ExpectError
new Plugin([{}]); // $ExpectError
new Plugin([], { foo: 'bar' }); // $ExpectError
