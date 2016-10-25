// ES6 Error Test
// ================================================================================
/// <reference path="es6-error.d.ts"/>

// Imports
// --------------------------------------------------------------------------------
import * as ExtendableError from "es6-error"

class TestError extends ExtendableError {
    constructor (message: string = "TestError") {
        super(message)
    }
}

throw new TestError("Test Message")
