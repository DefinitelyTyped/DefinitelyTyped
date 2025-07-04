// get_route
const getRouteResult: string[] = frappe.get_route();

// @ts-expect-error
frappe.get_route("home");

// set_route
frappe.set_route("home", "dashboard");
frappe.set_route(["home", "dashboard"]);
frappe.set_route(["home"], { key: "value" });
frappe.set_route("home", { key: "val" });

// @ts-expect-error
frappe.set_route();

// format
const formatResult1: string = frappe.format(123, { fieldtype: "Data" });
const formatResult2: string = frappe.format("value", { fieldtype: "Link" }, { trim: true }, { name: "Doc" });

// @ts-expect-error
frappe.format(123, {});
// @ts-expect-error
frappe.format(123, { fieldtype: 123 });

// provide
frappe.provide("my.namespace");

// @ts-expect-error
frappe.provide(123);

// require
frappe.require("/path/to.js");
frappe.require(["/a.js", "/b.css"]);
frappe.require("/path", () => {});

// @ts-expect-error
frappe.require("/path", "not a function");
