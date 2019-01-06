import trash = require('trash');

async function testTrashNoArgsSinglePath() {
    await trash('/path/to/item1');
}

async function testTrashNoArgsMultiPath() {
    await trash(['/path/to/item1', '/path/to/item2']);
}

async function testTrashWithArgs() {
    const options: trash.Options = { glob: false };
    await trash(['/path/to/item1', '/path/to/item2'], options);
}

function testTrashPerDocumentation() {
    (async () => {
        await trash(['*.png', '!rainbow.png']);
    })();
}
