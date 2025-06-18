import stack = require("v8-callsites");

// Basic functionality
// $ExpectType CallSite[]
stack();

function Layer1() {
    Layer2();
}

function Layer2() {
    Layer3();
}

function Layer3() {
    stack();
    stack(Layer2);
    stack(1, Layer3);
}

Layer1();

// Function-Types

function WithArguments(test: string) {}

function Void(): void {}

function NonVoid(): string {
    return "";
}

function NonVoidWithArguments(test: string): string {
    return test;
}

stack(WithArguments);
stack(Void);
stack(NonVoid);
stack(NonVoidWithArguments);
