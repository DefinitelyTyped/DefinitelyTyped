import { gateway4async, gateway4sync, gateway6async, gateway6sync, type Result } from "default-gateway";

gateway4async().then((g) => {
    // $ExpectType Result<4>
    g;
    // $ExpectType string
    g.gateway;
    // $ExpectType 4
    g.version;
    // $ExpectType string | null
    g.int;
});

// $ExpectType Result<4>
gateway4sync();

gateway6async().then((g) => {
    // $ExpectType Result<6>
    g;
    // $ExpectType string
    g.gateway;
    // $ExpectType 6
    g.version;
    // $ExpectType string | null
    g.int;
});

// $ExpectType Result<6>
gateway6sync();
