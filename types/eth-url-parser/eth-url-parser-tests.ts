import ethUrlParser = require("eth-url-parser");
import { build, parse } from "eth-url-parser";

parse("ethereum:0xd8da6bf26964af9d7eed9e03e53415d37aa96045@1"); // $ExpectType ParseOutput
// $ExpectType string
build({
    target_address: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    chain_id: "1",
});

ethUrlParser.parse("ethereum:0xd8da6bf26964af9d7eed9e03e53415d37aa96045@1"); // $ExpectType ParseOutput
// $ExpectType string
ethUrlParser.build({
    target_address: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    chain_id: "1",
});
