import configsOverload, { ConfigsOverloadOptions, ExtendableConfig } from "configs-overload";

// $ExpectType ExtendableConfig
configsOverload();
// $ExpectType ExtendableConfig
configsOverload("./configs");
// $ExpectType ExtendableConfig
configsOverload("./configs", {});
// $ExpectType ExtendableConfig
configsOverload("./configs", { defaultEnv: "default" });
// $ExpectType ExtendableConfig
configsOverload("./configs", { env: "production" });
// $ExpectType ExtendableConfig
configsOverload("./configs", { defaultEnv: "default", env: "production" });
