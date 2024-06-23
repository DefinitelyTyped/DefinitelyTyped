/// <reference lib="DOM" />
//
// see {@link https://docs.microsoft.com/en-us/aspnet/core/blazor/javascript-interop?view=aspnetcore-3.1}
//
const exampleJsFunctions = {
    showPrompt(text: string | undefined) {
        return prompt(text, "Type your name here");
    },
    displayWelcome(welcomeMessage: string) {
        document.getElementById("welcome")!.innerText = welcomeMessage;
    },
    returnArrayAsyncJs() {
        DotNet.invokeMethodAsync<number[]>("BlazorSample", "ReturnArrayAsync").then(data => {
            data.push(4);
            console.log(data);
        });
    },
    sayHello(dotnetHelper: DotNet.DotNetObject) {
        return dotnetHelper.invokeMethodAsync<string>("SayHello").then(r => console.log(r));
    },
};

interface ColorFlags {
    red: boolean;
    green: boolean;
    blue: boolean;
}

type JsObjectReference = DotNet.JsObjectReference;

const testInteropApi = async (dotNetRef: DotNet.DotNetObject) => {
    // validate api patterns
    const tokens = [1, 2, 3];
    const buffer = new ArrayBuffer(8);
    DotNet.invokeMethod<string>("MyCoolApp.Core", "Foo", "First", "Second"); // $ExpectType string
    DotNet.invokeMethod<number>("MyCoolApp.Core", "Foo", 1, 2); // $ExpectType number
    const windowRef = DotNet.createJSObjectReference(window); // $ExceptType JsObjectReference
    DotNet.createJSStreamReference(buffer); // $ExceptType JsObjectReference
    DotNet.createJSStreamReference(new Int32Array(buffer)); // $ExceptType JsObjectReference
    DotNet.createJSStreamReference(new Blob()); // $ExceptType JsObjectReference
    DotNet.disposeJSObjectReference(windowRef); // $ExceptType void
    const fooResults = await DotNet.invokeMethodAsync<string>("MyCoolApp.Core", "Foo", "First", "Second"); // $ExpectType string
    DotNet.invokeMethodAsync<string>("MyCoolApp.Core", "Foo", "First", "Second"); // $ExpectType Promise<string>
    DotNet.invokeMethodAsync<string>("MyCoolApp.Core", "Foo", "First", "Second"); // $ExpectType Promise<string>
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    DotNet.invokeMethodAsync<void>("MyCoolApp.Core", "Foo", ...tokens); // $ExpectType Promise<void>
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    DotNet.invokeMethodAsync<void>("MyCoolApp.Core", "Foo", 5, ...tokens, 20, ...[25]); // $ExpectType Promise<void>
    DotNet.invokeMethodAsync<ColorFlags>("MyCoolApp.Core", "Foo", 1, 2, 3); // $ExpectType Promise<ColorFlags>
    dotNetRef.invokeMethod<string>("MyCoolApp.Core", "Foo", "First", "Second"); // $ExpectType string
    dotNetRef.invokeMethod<number>("MyCoolApp.Core", "Foo", 1, 2); // $ExpectType number
    const fooResults2 = await dotNetRef.invokeMethodAsync<string>("MyCoolApp.Core", "Foo", "First", "Second"); // $ExpectType string
    dotNetRef.invokeMethodAsync<string>("MyCoolApp.Core", "Foo", "First", "Second"); // $ExpectType Promise<string>
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    dotNetRef.invokeMethodAsync<void>("MyCoolApp.Core", "Foo", ...tokens); // $ExpectType Promise<void>
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    dotNetRef.invokeMethodAsync<void>("MyCoolApp.Core", "Foo", 5, ...tokens, 20, ...[25]); // $ExpectType Promise<void>
    dotNetRef.invokeMethodAsync<ColorFlags>("MyCoolApp.Core", "Foo", 1, 2, 3); // $ExpectType Promise<ColorFlags>
    dotNetRef.dispose(); // $ExpectType void
};
