import Assert from "assertsharp";

Assert.AreEqual(0, 0, "Pass");
Assert.AreNotEqual(0, 1, "Pass");
Assert.AreNotSame(new Date(), new Date(), "Pass");
Assert.AreSequenceEqual([0], [0], (x, y) => x === y, "Pass");
Assert.Fail("Should fail");
Assert.IsFalse(false, "Pass");
Assert.IsInstanceOfType(new Date(), Date, "Pass");
Assert.IsNotInstanceOfType(true, Date, "Pass");
Assert.IsNotNull(new Date(), "Pass");
Assert.IsNull(null, "Pass");
Assert.IsTrue(true, "Pass");
Assert.Throws(() => { throw ""; }, "Pass");
