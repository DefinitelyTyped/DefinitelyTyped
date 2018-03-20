import encode, { FormEncodedOptions } from "form-urlencoded";

const opts: FormEncodedOptions = {
    sorted: true,
    skipIndex: false,
    ignorenull: true
};

encode([1, 2, 3]);
encode([1, 2, 3], opts);
