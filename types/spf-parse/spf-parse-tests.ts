import spfParse = require("spf-parse");

const result = spfParse("v=spf1 a mx -all"); // $ExpectType ParseResult
result.mechanisms; // $ExpectType Mechanism[]
result.valid; // $ExpectType boolean

for (const mech of result.mechanisms) {
    mech.type; // $ExpectType string
    mech.value; // $ExpectType string | undefined
    mech.prefix; // $ExpectType Prefix
    mech.prefixdesc; // $ExpectType string | undefined
    mech.description; // $ExpectType string | undefined
}

if (result.messages) {
    for (const msg of result.messages) {
        msg.message; // $ExpectType string
        msg.type; // $ ExpectType "error" | "warning"
    }
}

const messages: spfParse.ParseMessage[] = [];
const mech = spfParse.parseTerm("ip4:192.0.2.0/24", messages); // $ExpectType Mechanism

const err = new spfParse.MechanismError("invalid mech", "error"); // $ExpectType MechanismError
err.type; // $ExpectType "warning" | "error"
