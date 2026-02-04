import MemoryStorage = require("memorystorage");

// Test constructor with and without new
const storage1 = new MemoryStorage();
const storage2 = new MemoryStorage("my-app");
const storage3 = MemoryStorage();
const storage4 = MemoryStorage("another-app");

// Test id property
const id: string = storage1.id;

// Test length property
const len: number = storage1.length;

// Test setItem
storage1.setItem("key", "value");
storage1.setItem("another", "data");

// Test getItem
const value: string | null = storage1.getItem("key");
const missing: string | null = storage1.getItem("nonexistent");

// Test key
const keyName: string | null = storage1.key(0);
const outOfRange: string | null = storage1.key(999);

// Test removeItem
storage1.removeItem("key");

// Test clear
storage1.clear();

// Test direct property access (index signature)
storage1["customKey"] = "customValue";
const customValue = storage1["customKey"];

// Test that same id returns same storage instance
const sameStorage1 = new MemoryStorage("shared");
const sameStorage2 = new MemoryStorage("shared");
sameStorage1.setItem("test", "value");
