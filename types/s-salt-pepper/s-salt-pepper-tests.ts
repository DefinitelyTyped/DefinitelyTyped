import password from "s-salt-pepper";

// $ExpectType number
password.saltLength();

// $ExpectType number
password.saltLength(32);

// $ExpectType number
password.iterations();

// $ExpectType number
password.iterations(1000000);

// $ExpectType number
password.keyLength();

// $ExpectType number
password.keyLength(128);

// $ExpectType string
password.digest();

// $ExpectType string
password.digest("sha512");

// $ExpectType string
password.pepper();

// $ExpectType string
password.pepper("");

// $ExpectType Promise<{ salt: string; hash: string; }>
password.hash("password");

// $ExpectType Promise<boolean>
password.compare("password", { salt: "salt", hash: "hash" });
