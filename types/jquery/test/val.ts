let string_val: string | undefined = $<
    | HTMLButtonElement
    | HTMLDataElement
    | HTMLInputElement
    | HTMLOptionElement
    | HTMLOutputElement
    | HTMLParamElement
    | (HTMLSelectElement & { type: "select-one" })
    | HTMLTextAreaElement
>("button, data, input, option, output, param, select:not([multiple]), textarea").val();

let number_val: number | undefined = $<HTMLLIElement | HTMLMeterElement | HTMLProgressElement>(
    "li, meter, progress",
).val();

let select_multiple_val: string[] | undefined = $<HTMLSelectElement & { type: "select-multiple" }>(
    "select[multiple]",
).val();

let select_unspecified_val: string | string[] | undefined = $<HTMLSelectElement>("select").val();

let unspecified_val: string | number | string[] | undefined = $("*").val();
