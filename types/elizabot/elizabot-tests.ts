import ElizaBot from "elizabot";

let eliza = new ElizaBot();
eliza = new ElizaBot(true);

eliza.quit; // $ExpectType boolean
eliza.memSize; // $ExpectType number

eliza.transform("Hello, Eliza!"); // $ExpectType string
eliza.getInitial(); // $ExpectType string
eliza.getFinal(); // $ExpectType string
eliza.reset(); // $ExpectType void
