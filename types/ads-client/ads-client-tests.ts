import * as ads from "ads-client";

const client = new ads.Client({
    targetAmsNetId: "localhost",
    targetAdsPort: 851,
});

async function usage() {
    client.setDebugging(4);
    await client.connect();
    await client.restartPlc();

    const res = await client.readSymbol("GVL_Test.TestTimer");
    console.log("Value read:", res.value);

    const res2 = await client.readSymbol("GVL_Test.ImaginaryEnum");
    const plcEnum = res2.value as ads.PLCEnum;
    console.log("Enum name:", plcEnum.name);
    console.log("Enum value:", plcEnum.value);

    await client.writeSymbol("GVL_ReadingAndWriting.StructPackMode8", true);
    await client.writeSymbol("GVL_ReadingAndWriting.String", "ABC");
    await client.writeSymbol("GVL_ReadingAndWriting.Number", 10);
    await client.writeSymbol("GVL_ReadingAndWriting.Issue94", {
        BoolValue: false,
        ArrayValue: [
            { ByteValue: 234 },
            { ByteValue: 99 },
        ],
    });

    await client.convertFromRaw(
        await client.readRawByName("GVL_ReadingAndWriting.PointerValue^"),
        "ST_Struct",
    );

    const sym = await client.getSymbolInfo("GVL_ReadingAndWriting.String");
    console.log(
        sym.attributes,
        sym.adsDataType,
        sym.arrayData,
        sym.type,
        sym.adsDataTypeStr,
        sym.comment,
        sym.commentLength,
        sym.name,
    );

    const subscription = await client.subscribe("GVL_Test.IncrementingValue", (data, sub) => {
        sub.unsubscribe();

        console.log(`${data.timeStamp}: Value changed to ${data.value}`);
    }, 1000);

    console.log(`Subscribed to ${subscription.target}`);

    // Unsubscribe and disconnect after 10 seconds
    setTimeout(async () => {
        // The subscribe() returns object that contains unsubscribe() method
        await subscription.unsubscribe();

        console.log("Unsubscribed");
    }, 10000);

    await client.unsubscribeAll();

    await client.invokeRpcMethod("GVL_RPC.RpcBlock", "StructTest", {
        Input: {
            SomeText: "Hello RPC method",
            SomeReal: 1200.50,
            SomeDate: new Date("2020-07-03T14:57:22.000Z"),
        },
    });

    let handle = await client.createVariableHandle("GVL_ReadingAndWriting.ReferenceValue");

    await client.writeRawByHandle(
        handle,
        await client.convertToRaw({
            SomeText: "struct written from reference",
            SomeReal: -12345,
            SomeDate: new Date("1970-04-13T12:25:33.000Z"),
        }, "ST_Struct"),
    );

    const value = {
        BoolValue: false,
        StringValue: "pack mode 1 string value",
        LrealValue: -11111,
        BoolArray: [true, false, true, false, true],
        BlockArray: [
            { CLK: false, Q: false, M: false },
            { CLK: false, Q: false, M: false },
            { CLK: true, Q: true, M: true },
            { CLK: false, Q: false, M: false },
            { CLK: true, Q: true, M: true },
        ],
        LargeBlock: {
            sNetId: "localhost",
            sPathName: "c:/hello",
            nMode: 0,
            ePath: {
                name: "PATH_GENERIC",
                value: 1,
            },
            bExecute: false,
            tTimeout: 5000,
            bBusy: false,
            bError: false,
            nErrId: 0,
            hFile: 12345,
        },
    };

    await client.writeSymbol("GVL_ReadingAndWriting.StructPackMode1", value);

    await client.readRawMulti([
        {
            indexGroup: 16448,
            indexOffset: 411836,
            size: 4,
        },
        {
            indexGroup: 123, // Note: Incorrect on purpose
            indexOffset: 436040,
            size: 255,
        },
    ]);

    const data2 = Buffer.alloc(4);
    data2.writeInt32LE(555);

    const result = await client.writeRawMulti([
        {
            indexGroup: 16448,
            indexOffset: 411836,
            data: data2,
        },
        {
            indexGroup: 123, // Note: Incorrect on purpose
            indexOffset: 436040,
            data: Buffer.alloc(255),
        },
    ]);

    handle = await client.createVariableHandle("GVL_Test.TestINT");
    console.log(handle);

    const data = Buffer.alloc(2);
    data.writeInt32LE(12345);

    await client.writeRawByHandle(handle, data);
    await client.deleteVariableHandle(handle);

    const handles = await client.createVariableHandleMulti([
        "GVL_Test.TestINT",
        "GVL_Test.TestENUM",
        "GVL_Test.THIS_IS_NOT_FOUND",
    ]);

    for (const h of handles) {
        console.log(await client.readRawByHandle(h));
        console.log(await client.readRawByHandle(h.handle));
    }

    await client.deleteVariableHandleMulti(handles);

    await client.convertFromRaw(
        await client.readRawByName("GVL_Test.TestPOINTER^"), // note ^
        "ST_Example",
    );

    await client.deleteVariableHandle(handle);

    await client.sendAdsCommand(1, Buffer.alloc(0), 10000);

    client.on("plcRuntimeStateChange", state => {
        console.log("State is now:", state);
    });

    const state = await client.readPlcRuntimeState();
    console.log(state.adsStateStr, state.adsState, state.deviceState);
}
