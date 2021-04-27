import walk = require('@fcostarodrigo/walk');

async function parameterless() {
    for await (const file of walk()) {
        const fileStr: string = file;
    }
}

async function pathParam() {
    for await (const file of walk('foo')) {
        const fileStr: string = file;
    }
}

async function filesAndDirs() {
    for await (const file of walk('foo', true)) {
        const fileStr: string = file;
    }
}

async function withCallback() {
    function shouldList(dir: string): boolean {
        return true;
    }

    for await (const file of walk('foo', false, shouldList)) {
        const fileStr: string = file;
    }
}
