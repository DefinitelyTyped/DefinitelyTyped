import { Magika } from "magika";

const func1 = async () => {
    const fileBytes = new Uint8Array(new ArrayBuffer(8));
    const m = new Magika();
    await m.load({});
    return await m.identifyBytes(fileBytes);
};

func1().then((prediction) => {
    console.log(prediction);
});

const func2 = async () => {
    const fileBytes = new Uint8Array(new ArrayBuffer(8));
    const m = new Magika();
    await m.load({});
    return await m.identifyBytesFull(fileBytes);
};

func2().then((prediction) => {
    console.log(prediction);
});

const func3 = async () => {
    const fileBytes = new Uint8Array(new ArrayBuffer(8));
    const m = new Magika();
    await m.load({
        modelURL: "https://google.github.io/magika/model/model.json",
        configURL: "https://google.github.io/magika/model/config.json",
    });
    return await m.identifyBytes(fileBytes);
};

func3().then((prediction) => {
    console.log(prediction);
});
