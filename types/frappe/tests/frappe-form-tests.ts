import { DocTypeName, FrappeForm } from "frappe";

interface MyDoc extends DocType {
    name: string;
    field1: string;
    numeric: number;
    items: Item[];
}

interface Item extends DocTypeChildTable {
    name: number;
    value: boolean;
}

const frm = {} as FrappeForm<MyDoc> 

// set_value tests
const promise1: Promise<void> = frm.set_value("field1", "test");
const promise2: Promise<void> = frm.set_value({ numeric: 123 });
frm.set_value("numeric", 456, true);
frm.set_value("field1", "another", false, true);

// refresh
const r: void = frm.refresh();
frm.refresh();

// save
const s1: Promise<void> = frm.save();
const s2: Promise<void> = frm.save("Submit");

// enable/disable save
frm.enable_save();
frm.disable_save();

// email
frm.email_doc();
frm.email_doc("hello");

// reload
frm.reload_doc().then(val => {
    const v: void = val;
});

// refresh field
frm.refresh_field("field1");

// is_dirty and dirty
const dirtyFlag: boolean = frm.is_dirty();
frm.dirty();

// is_new
const newFlag: boolean = frm.is_new();

// intro
frm.set_intro("Intro");
frm.set_intro("Intro", "red");

// custom buttons
frm.add_custom_button("btn", () => {});
frm.change_custom_button_type("btn", null, "danger");
frm.remove_custom_button("btn", "group");
frm.clear_custom_buttons();

// set_df_property
frm.set_df_property("field1", "read_only", true);

// toggle
frm.toggle_enable("field1", true);
frm.toggle_enable(["field1", "numeric"], false);
frm.toggle_reqd("numeric", true);
frm.toggle_display("field1", false);

// query
frm.set_query("field1", () => ({ filters: { field1: "value" } }));
frm.set_query("field1", "items", () => ({ filters: { field1: ["in", ["value1", "value2"]] } }));

// add_child
const child: Item = frm.add_child("items", { value: true });
const childName: number = child.name;

// call
frm.call("methodName", { arg: 1 }).then(resp => {
    const r1: any = resp;
});

// trigger
frm.trigger("custom_event");
frm.trigger("custom_event", "MyDoc", "doc1");

// get_selected
const sel: { [key: string]: string[] } = frm.get_selected();
