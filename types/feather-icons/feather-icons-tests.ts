import * as feather from "feather-icons";

feather.replace(); // $ExpectType void
feather.icons[""].toSvg(); // $ExpectType string
feather.icons[""].name; // $ExpectType string
feather.icons[""].contents; // $ExpectType string
feather.icons[""].tags; // $ExpectType string[]
