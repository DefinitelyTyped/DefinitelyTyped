import chai = require("chai");
import chaiSorted = require("chai-sorted");

chai.use(chaiSorted);
const { expect } = chai;

// Test sorted
expect(["a", "b"]).to.be.sorted();
expect(["a", "b"]).to.be.sorted({ descending: false });
expect(["b", "apples"]).to.be.sorted({ descending: true });

// Test sortedBy
expect([{ id: 2, name: "apple" }, { id: 3, name: "bat" }]).to.be.sortedBy("name");
expect([{ id: 2, name: "bat" }, { id: 3, name: "apples" }]).to.be.sortedBy("name", { descending: true });

// Test ascendingBy
expect([{ id: 2, name: "apple" }, { id: 3, name: "bat" }]).to.be.ascendingBy("name");

// Test descendingBy
expect([{ id: 2, name: "bat" }, { id: 3, name: "apples" }]).to.be.descendingBy("name");

// Test ascending
expect(["a", "b"]).to.be.ascending;

// Test descending
expect(["b", "apples"]).to.be.descending;
