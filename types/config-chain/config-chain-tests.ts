import cc = require("config-chain");

// Basic usage
const chain = cc({ a: 1 }, { b: 2 });

// Get and set values
const val = chain.get("a");
chain.set("c", 3);
chain.del("a");

// Add configuration sources
chain.add({ d: 4 });
chain.addFile("/path/to/config.json");
chain.addFile("/path/to/config.ini", "ini");
chain.addEnv("MY_APP_");

// Utility functions
const parsed = cc.parse("{\"key\": \"value\"}");
const envObj = cc.env("MY_APP_");
const envWithSource = cc.env("MY_APP_", process.env);

// Find config file
const found = cc.find();

// JSON helper
const jsonObj = cc.json("/path", "to", "file.json");
