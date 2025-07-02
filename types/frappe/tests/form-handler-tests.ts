import { DocTypeName } from "frappe";

interface Invoice extends DocType {
    name: string;
    customer: string;
    total: number;
    items: InvoiceItem[];
    items_2: InvoiceItem[];
}

interface InvoiceItem extends DocTypeChildTable {
    name: number;
    item: string;
    qty: number;
}

declare global {
    interface DocTypeMap {
        Invoice: Invoice;
        "Invoice Item": InvoiceItem;
    }
}

// Test a non-child  DocType
frappe.ui.form.on("Invoice", {
    after_cancel(frm) {
        const t: number = frm.doc.total;
    },
    after_discard(frm) {
        const t: number = frm.doc.total;
    },
    after_save(frm) {
        const t: number = frm.doc.total;
    },
    before_cancel(frm) {
        const t: number = frm.doc.total;
    },
    before_discard(frm) {
        const t: number = frm.doc.total;
    },
    before_load(frm) {
        const t: number = frm.doc.total;
    },
    before_save(frm) {
        const t: number = frm.doc.total;
    },
    before_submit(frm) {
        const t: number = frm.doc.total;
    },
    creation(frm) {
        const t: number = frm.doc.total;
    },
    customer(frm) {
        const c: string = frm.doc.customer;
    },
    docstatus(frm) {
        const d: number = frm.doc.docstatus;
    },
    get_email_recipient_filters(frm, field) {
        const t: number = frm.doc.total;
        field.bcc = ["DocType", "Customer"];
        field.cc = ["DocType", "Customer"];
        field.recipients = ["DocType", "Customer"];
        return ["DocType", "Customer"];
    },
    get_email_recipients(frm, field) {
        const t: number = frm.doc.total;
        field.bcc = ["DocType", "Customer"];
        field.cc = ["DocType", "Customer"];
        field.recipients = ["DocType", "Customer"];
        return ["DocType", "Customer"];
    },
    items(frm) {
        const t: number = frm.doc.total;
    },
    items_2(frm) {
        const t: number = frm.doc.total;
    },
    modified(frm) {
        const m: string = frm.doc.modified;
    },
    modified_by(frm) {
        const m: string = frm.doc.modified_by;
    },
    name(frm) {
        const n: string = frm.doc.name;
    },
    onload(frm) {
        const n: string = frm.doc.name;
    },
    onload_post_render(frm) {
        const n: string = frm.doc.name;
    },
    on_submit(frm) {
        const t: number = frm.doc.total;
    },
    owner(frm) {
        const o: string = frm.doc.owner;
    },
    timeline_refresh(frm) {
        const t: number = frm.doc.total;
    },
    total(frm) {
        const t: number = frm.doc.total;
    },
    refresh(frm) {
        const t: number = frm.doc.total;
    },
    setup(frm) {
        const c: string = frm.doc.customer;
        const t: number = frm.doc.total;
    },
    validate(frm) {
        const t: number = frm.doc.total;
    },
});

// Test expect error using child table method on parent
// @ts-expect-error
frappe.ui.form.on("Invoice", {
    items_add() {},
});

// Test a DocTypeChildTable without specifying the parent
frappe.ui.form.on("Invoice Item", {
    creation(frm, cdt, cdn) {
        const n: number = frm.doc.name;
        const _cdt: string = cdt;
        const _cdn: DocTypeName = cdn;
    },
    docstatus(frm, cdt, cdn) {
        const d: number = frm.doc.docstatus;
    },
    form_render(frm, cdt, cdn) {
        const q: number = frm.doc.qty;
    },
    idx(frm, cdt, cdn) {
        const i: number = frm.doc.idx;
    },
    item(frm, cdt, cdn) {
        const i: string = frm.doc.item;
    },
    modified(frm, cdt, cdn) {
        const m: string = frm.doc.modified;
    },
    modified_by(frm, cdt, cdn) {
        const m: string = frm.doc.modified_by;
    },
    name(frm, cdt, cdn) {
        const n: number = frm.doc.name;
    },
    owner(frm, cdt, cdn) {
        const o: string = frm.doc.owner;
    },
    parent(frm, cdt, cdn) {
        const p: DocTypeName = frm.doc.parent;
    },
    parentfield(frm, cdt, cdn) {
        const pf: string = frm.doc.parentfield;
    },
    parenttype(frm, cdt, cdn) {
        const pt: string = frm.doc.parenttype;
    },
    qty(frm, cdt, cdn) {
        const q: number = frm.doc.qty;
    },
});

// Test a DocTypeChildTable when the parent is specified
frappe.ui.form.on<"Invoice Item", Invoice>("Invoice Item", {
    creation(frm, cdt, cdn) {
        const n: number = frm.doc.name;
        const _cdt: string = cdt;
        // Should be exactly "Invoice Item"
        const _cdt2: "Invoice Item" = cdt;
        // @ts-expect-error
        const _cdt3: "SomeString" = cdt;
        const _cdn: DocTypeName = cdn;
    },
    before_items_remove(frm, cdt, cdn) {
        const n: number = frm.doc.name;
        const _cdt: string = cdt;
        const _cdn: DocTypeName = cdn;
    },
    before_items_2_remove(frm, cdt, cdn) {
        const n: number = frm.doc.name;
        const _cdt: string = cdt;
        const _cdn: DocTypeName = cdn;
    },
    items_2_add(frm, cdt, cdn) {
        const n: number = frm.doc.name;
        const _cdt: string = cdt;
        const _cdn: DocTypeName = cdn;
    },
    items_2_move(frm, cdt, cdn) {
        const n: number = frm.doc.name;
        const _cdt: string = cdt;
        const _cdn: DocTypeName = cdn;
    },
    items_2_remove(frm, cdt, cdn) {
        const n: number = frm.doc.name;
        const _cdt: string = cdt;
        const _cdn: DocTypeName = cdn;
    },
    items_add(frm, cdt, cdn) {
        const n: number = frm.doc.name;
        const _cdt: string = cdt;
        const _cdn: DocTypeName = cdn;
    },
    items_move(frm, cdt, cdn) {
        const n: number = frm.doc.name;
        const _cdt: string = cdt;
        const _cdn: DocTypeName = cdn;
    },
    items_remove(frm, cdt, cdn) {
        const n: number = frm.doc.name;
        const _cdt: string = cdt;
        const _cdn: DocTypeName = cdn;
    },
    form_render(frm, cdt, cdn) {
        const q: number = frm.doc.qty;
    },
});

// Expect error when using parent methods on child table
// @ts-expect-error
frappe.ui.form.on("Invoice Item", {
    setup() {},
});
