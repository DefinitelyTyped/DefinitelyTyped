import { NumberParam } from "serialize-query-params"

expect("?page=1").toHaveQueryParam({ name: "page", value: 1, type: NumberParam });
