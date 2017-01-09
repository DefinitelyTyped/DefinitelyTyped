Cldr.on("get", (path, value) => {
    console.log(path);
    console.log(value);
});

Cldr.once("get", (path, value) => {
    console.log(path);
    console.log(value);
});

Cldr.off("get", (path, value) => {
    console.log(path);
    console.log(value);
});

{
    const cldr = new Cldr("en");

    cldr.on("get", (path, value) => {
        console.log(path);
        console.log(value);
    });

    cldr.once("get", (path, value) => {
        console.log(path);
        console.log(value);
    });

    cldr.off("get", (path, value) => {
        console.log(path);
        console.log(value);
    });
}
