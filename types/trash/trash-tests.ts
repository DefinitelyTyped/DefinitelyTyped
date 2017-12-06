import trash from "trash";

async function testTrashNoArgs() {
    await trash(["/path/to/item1", "/path/to/item2"]);
}

async function testTrashWithArgs() {
    await trash(["/path/to/item1", "/path/to/item2"], { glob: false });
}

async function testTrashPerDocumentation() {
    trash(["*.png", "!rainbow.png"]).then(() => {
        console.log("done");
    });
}
