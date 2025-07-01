import { FrappeResponse } from "frappe";

declare global {
    interface FrappeWhitelistedMethods {
        methodName: { arg1: string; arg2: number };
    }
}

// -- frappe.call(opts) overload --

const callOpt1: Promise<FrappeResponse<void>> = frappe.call({ method: "methodName" });
const callOpt2: Promise<FrappeResponse<number>> = frappe.call<number>({
    method: "methodName",
    args: { arg1: "foo", arg2: 42 },
    freeze: true,
    url: "/api",
    debounce: 500,
    callback(data, responseText) {
        const n: number = data.message;
        const txt: string | undefined = responseText;
    },
    error(err) {
        const e: any = err;
    },
    always(info) {
        const m: number = info.message;
    },
});

// @ts-expect-error
frappe.call({});
// @ts-expect-error
frappe.call({ method: 123 });
// @ts-expect-error
frappe.call({ method: "methodName", debounce: "500" });

// -- frappe.call(method, args?, callback?, headers?) overload --

const call2Opt1: Promise<FrappeResponse<void>> = frappe.call("methodName");
const call2Opt2: Promise<FrappeResponse<{ arg1: string; arg2: number }>> = frappe.call("methodName", {
    arg1: "foo",
    arg2: 42,
});
const call2Opt3: Promise<FrappeResponse<string>> = frappe.call(
    "methodName",
    { arg1: "foo", arg2: 42 },
    (data: FrappeResponse<string>, responseText) => {
        const s: string = data.message;
        const r: string | undefined = responseText;
    },
);
const call2Opt4: Promise<FrappeResponse<boolean>> = frappe.call(
    "methodName",
    { arg1: "foo", arg2: 42 },
    (data: FrappeResponse<boolean>) => {
        const b: boolean = data.message;
    },
    { hdr: "v" },
);

// @ts-expect-error
frappe.call();
// @ts-expect-error
frappe.call(123);
// @ts-expect-error
frappe.call("methodName", "args");
// @ts-expect-error
frappe.call("methodName", { arg1: "foo", arg2: 42 }, () => {}, { hdr: 1 });

// -- frappe.xcall --

const xcall1: Promise<FrappeResponse<void>> = frappe.xcall("methodName");
const xcall2: Promise<FrappeResponse<{ arg1: string; arg2: number }>> = frappe.xcall("methodName", {
    arg1: "foo",
    arg2: 42,
});
const xcall3: Promise<FrappeResponse<string>> = frappe.xcall("methodName", { arg1: "foo", arg2: 42 }, "type");
const xcall4: Promise<FrappeResponse<boolean>> = frappe.xcall("methodName", { arg1: "foo", arg2: 42 }, "type", {
    method: "methodName",
    error(err) {
        const e: any = err;
    },
    debounce: 100,
});

// @ts-expect-error
frappe.xcall();
// @ts-expect-error
frappe.xcall(123);
// @ts-expect-error
frappe.xcall("methodName", { arg1: "foo", arg2: 42 }, "type", { debounce: "500" });
