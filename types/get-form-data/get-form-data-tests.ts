import getFormData, { getFieldData } from "get-form-data";

declare const form: HTMLFormElement;

// $ExpectType Record<string, Value>
let data = getFormData(form);

data.boolean = true;
data.string = "string";
data.stringArray = ["string"];
data.file = new File([], "");
data.files = [new File([], "")];

getFormData(form, {});
getFormData(form, { includeDisabled: true });
getFormData(form, { trim: true });

// $ExpectType Value | null
let value = getFieldData(form, "name");
value = getFormData.getFieldData(form, "other");

getFieldData(form, "a", {});
getFieldData(form, "b", { includeDisabled: true });
getFieldData(form, "c", { trim: true });
