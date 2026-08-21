import MemoryStorage = require("memorystorage");

// Can be called with new
const storage1 = new MemoryStorage("test-1");

// Can be called without new
const storage2 = MemoryStorage("test-2");

// Can be called with no arguments (uses global)
const globalStorage = new MemoryStorage();

// $ExpectType string
storage1.id;

// $ExpectType number
storage1.length;

// $ExpectType string | null
storage1.getItem("key");

// $ExpectType void
storage1.setItem("key", "value");

// $ExpectType void
storage1.removeItem("key");

// $ExpectType string | null
storage1.key(0);

// $ExpectType void
storage1.clear();

// Can set/get properties directly via index signature
storage1["myKey"] = "myValue";
const val: any = storage1["myKey"];
