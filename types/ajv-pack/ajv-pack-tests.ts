import Ajv from "ajv";
import pack from "ajv-pack";

const ajv = new Ajv({ sourceCode: true });

const schema = {
    type: "object",
    properties: {
        foo: {
            type: "string",
            pattern: "^[a-z]+$",
        },
    },
};

const validate = ajv.compile(schema);
pack(ajv, validate); // $ExpectType string
pack.instance(ajv); // $ExpectType AjvPack
