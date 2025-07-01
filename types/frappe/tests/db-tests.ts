import type { FrappeResponse } from "frappe";

interface User extends DocType {
    name: string;
    age: number;
    active: boolean;
}

declare global {
    interface DocTypeMap {
        User: User;
    }
}

// -- get_doc --
const getDoc1: Promise<User> = frappe.db.get_doc("User");
const getDoc2: Promise<User> = frappe.db.get_doc("User", "test");
const getDoc3: Promise<User> = frappe.db.get_doc("User", undefined, { age: 30, foo: "bar" });

// @ts-expect-error
frappe.db.get_doc(123);
// @ts-expect-error
frappe.db.get_doc("User", 123);

// -- get_list --
const getList1: Promise<User[]> = frappe.db.get_list("User", { filters: { age: 30, foo: "bar" } });
const getList2: Promise<User[]> = frappe.db.get_list("User", {
    fields: ["name", "age", "foo"],
    filters: { active: true },
});
const getList3: Promise<User[]> = frappe.db.get_list("User");

// -- get_value --
const getValue1: Promise<FrappeResponse<Pick<User, "age">>> = frappe.db.get_value("User", { name: "test" }, "age");
const getValue2: Promise<FrappeResponse<Pick<User, "name" | "active">>> = frappe.db.get_value("User", { age: 20 }, [
    "name",
    "active",
]);

// @ts-expect-error
frappe.db.get_value("User", { name: "test" }, "foo");

// -- get_single_value --
const singleValue1: Promise<string> = frappe.db.get_single_value("User", "name");
const singleValue2: Promise<boolean> = frappe.db.get_single_value("User", "active");

// -- set_value --
const setValue1: Promise<FrappeResponse<User>> = frappe.db.set_value("User", "test", "age", 40);
const setValue2: Promise<FrappeResponse<User>> = frappe.db.set_value("User", "test", "active");
const setValue3: Promise<FrappeResponse<User>> = frappe.db.set_value("User", "test", "foo", "bar");

// @ts-expect-error
frappe.db.set_value("User", 123, "age", 20);
// @ts-expect-error
frappe.db.set_value("User", "test");

// -- insert --
const insertResult: Promise<DocType> = frappe.db.insert({});
// @ts-expect-error
frappe.db.insert();

// -- count --
const count1: Promise<number> = frappe.db.count("User");
const count2: Promise<number> = frappe.db.count("User", { age: 30 });

// @ts-expect-error
frappe.db.count();
// @ts-expect-error
frappe.db.count("User", { foo: "bar" });

// -- delete_doc --
const deleteResult: Promise<void> = frappe.db.delete_doc("User", "test");
// @ts-expect-error
frappe.db.delete_doc("User");
// @ts-expect-error
frappe.db.delete_doc("User", 123);

// -- exists --
const existsResult: Promise<boolean> = frappe.db.exists("User", "test");
// @ts-expect-error
frappe.db.exists("User");
// @ts-expect-error
frappe.db.exists(123, "test");
