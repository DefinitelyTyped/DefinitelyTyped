import { ReadableMock, WritableMock, DuplexMock } from "stream-mock";

const reader = new ReadableMock(["a", "b"], { objectMode: true });
const writer = new WritableMock({ objectMode: true });
const duplex = new DuplexMock({
    readableObjectMode: true,
    writableObjectMode: true
});

reader.pipe(duplex).pipe(writer);

writer.on("finish", () => {
    console.log(duplex.data, duplex.flatData);
    console.log(writer.data, writer.flatData);
});
